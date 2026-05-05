/**
 * Connecteur API Pennylane pour la création de factures.
 * Documentation : https://app.pennylane.com/api/external/v2/docs
 */

export interface PennylaneInvoiceItem {
  label: string;
  quantity: number;
  unit: string;
  raw_currency_unit_price: string;
  vat_rate: string; // Ex: 'FR_200' pour 20% TVA, 'exempt' pour franchise en base
}

export interface PennylaneInvoicePayload {
  draft: boolean;
  create_customer?: {
    name: string;
    organization_type?: string; 
    registration_number?: string; // SIRET
    emails?: string[];
    address?: string;
    postal_code?: string;
    city?: string;
  };
  invoice: {
    issue_date: string;
    due_date?: string;
    line_items: PennylaneInvoiceItem[];
  };
}

export async function createPennylaneInvoice(payload: PennylaneInvoicePayload) {
  const token = process.env.PENNYLANE_API_TOKEN;
  
  if (!token) {
    console.error("Aucune clé API Pennylane trouvée dans le fichier .env.local");
    throw new Error("Impossible de se connecter à Pennylane : clé API (PENNYLANE_API_TOKEN) manquante.");
  }

  const response = await fetch('https://app.pennylane.com/api/external/v2/customer_invoices', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Erreur API Pennylane:", errorData);
    throw new Error(`Erreur Pennylane API (${response.status}): ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data;
}

export interface PennylaneCustomerPayload {
  customer_type: 'company' | 'individual';
  name: string;
  emails?: string[];
  registration_number?: string;
  billing_address?: {
    address?: string;
    postal_code?: string;
    city?: string;
    country_alpha2?: 'FR' | string;
  }
}

export async function createPennylaneCustomer(payload: PennylaneCustomerPayload) {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  const endpoint = payload.customer_type === 'company' 
    ? 'https://app.pennylane.com/api/external/v2/company_customers'
    : 'https://app.pennylane.com/api/external/v2/individual_customers';

  const { customer_type, registration_number, ...requestBody } = payload;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Erreur création client Pennylane:", errorData);
    throw new Error(`Erreur API Client V2 (${response.status}): ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}

export interface PennylaneQuoteLineItem {
  label: string;
  quantity: number;
  unit: string;
  raw_currency_unit_price: string;
  vat_rate: string;
}

export interface PennylaneQuotePayload {
  customer_id: string;
  date: string;
  deadline?: string;
  invoice_lines: PennylaneQuoteLineItem[];
}

export async function createPennylaneQuote(payload: PennylaneQuotePayload) {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  const response = await fetch('https://app.pennylane.com/api/external/v2/quotes', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Erreur création devis Pennylane:", errorData);
    throw new Error(`Erreur API Devis (${response.status}): ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}

// Mapping statuts Pennylane V2 → OptiPro (devis)
const PENNYLANE_QUOTE_STATUS_MAP: Record<string, string> = {
  draft: 'brouillon',
  pending: 'envoye',
  accepted: 'accepte',
  denied: 'refuse',
  archived: 'archive',
  invoiced: 'accepte',
};

// Mapping statuts Pennylane V2 → OptiPro (factures)
const PENNYLANE_INVOICE_STATUS_MAP: Record<string, string> = {
  draft: 'brouillon',
  pending: 'envoyee',
  paid: 'payee',
  overdue: 'en_retard',
  cancelled: 'annulee',
  archived: 'annulee',
};

export async function getPennylaneQuote(quoteId: string) {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  const response = await fetch(`https://app.pennylane.com/api/external/v2/quotes/${quoteId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Erreur API Devis (${response.status}): ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}

export function mapPennylaneQuoteStatus(pennylaneStatus: string): string | null {
  return PENNYLANE_QUOTE_STATUS_MAP[pennylaneStatus] || null;
}

export async function getPennylaneInvoice(invoiceId: string) {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  const response = await fetch(`https://app.pennylane.com/api/external/v2/customer_invoices/${invoiceId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Erreur API Facture (${response.status}): ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}

/**
 * Liste TOUTES les factures clients de Pennylane (paginé).
 * Pagination cursor-based : on suit page_size + cursor jusqu'à plus de pages.
 * Renvoie un tableau aplati de toutes les factures.
 */
export async function listPennylaneInvoices(): Promise<Array<Record<string, unknown>>> {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  const allInvoices: Array<Record<string, unknown>> = [];
  let cursor: string | null = null;
  let safetyCounter = 0;
  const SAFETY_MAX_PAGES = 50; // garde-fou : 50 pages × 100 = 5 000 factures max

  do {
    const url = new URL('https://app.pennylane.com/api/external/v2/customer_invoices');
    url.searchParams.set('page_size', '100');
    if (cursor) url.searchParams.set('cursor', cursor);

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erreur API listInvoices (${response.status}): ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();

    // Pennylane V2 renvoie soit { items: [...], next_cursor: "..." } soit { customer_invoices: [...], ... }
    const items: Array<Record<string, unknown>> = data.items ?? data.customer_invoices ?? data.data ?? [];
    allInvoices.push(...items);

    cursor = (data.next_cursor as string | null) ?? null;
    safetyCounter++;
  } while (cursor && safetyCounter < SAFETY_MAX_PAGES);

  return allInvoices;
}

export function mapPennylaneInvoiceStatus(pennylaneStatus: string): string | null {
  return PENNYLANE_INVOICE_STATUS_MAP[pennylaneStatus] || null;
}

export async function getPennylaneCustomer(customerId: string) {
  const token = process.env.PENNYLANE_API_TOKEN;
  if (!token) throw new Error("Clé API Pennylane manquante.");

  // Try company customer first, then individual
  for (const type of ['company_customers', 'individual_customers']) {
    const response = await fetch(`https://app.pennylane.com/api/external/v2/${type}/${customerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return await response.json();
    }
  }

  throw new Error(`Client Pennylane introuvable (ID: ${customerId}).`);
}
