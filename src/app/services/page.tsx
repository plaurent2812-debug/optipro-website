import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Tarifs & Services — OptiBoard",
    description:
        "3 plans sans engagement à partir de 299€/mois. Essai gratuit 14 jours. Devis illimités, facturation automatique, relances impayés, export comptable FEC.",
};

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: '299€',
        billing: '/mois',
        target: 'Artisan solo · 5-10 chantiers/mois',
        highlighted: false,
        features: [
            'Devis et factures illimités',
            'Gestion clients et projets',
            'Planning et rappels automatiques',
            'Notifications en temps réel',
            'Export comptable CSV',
            'Paiement en ligne pour vos clients (Stripe)',
        ],
    },
    {
        id: 'confort',
        name: 'Confort',
        price: '399€',
        billing: '/mois',
        target: 'Artisan établi · 10-20 chantiers/mois',
        highlighted: true,
        badge: 'LE PLUS CHOISI',
        features: [
            'Tout le plan Starter',
            'Relances automatiques impayés (J+15, J+30, J+45)',
            'Portail client : signature en ligne + suivi chantier',
            'Justificatifs photo OCR (tickets de caisse, factures fournisseur)',
        ],
    },
    {
        id: 'premium',
        name: 'Premium',
        price: '549€',
        billing: '/mois',
        target: 'Entreprise 3-10 salariés',
        highlighted: false,
        features: [
            'Tout le plan Confort',
            'Assistant IA : devis en 30s par vocal ou texte',
            'Multi-devis par projet (variantes, options)',
            'Export comptable avancé FEC (Pennylane, Indy…)',
            'Multi-utilisateurs avec rôles (artisan / admin)',
        ],
    },
];

const comparaison = [
    { alternative: 'Secrétaire mi-temps', cout: '800-1 200€/mois', limites: 'Chère, pas spécialisée bâtiment' },
    { alternative: 'Assistante freelance', cout: '400-700€/mois', limites: "Pas d'outil intégré" },
    { alternative: 'Comptable', cout: '200-400€/mois', limites: 'Ne fait que la compta' },
    { alternative: "L'artisan fait tout seul", cout: '0€ + 10h + stress', limites: 'Oublie les relances, perd des tickets' },
    { alternative: 'OptiBoard', cout: '299-549€/mois', isUs: true, limites: 'Tout inclus, zéro effort artisan' },
];

const faq = [
    {
        q: "Je ne suis pas à l'aise avec l'informatique.",
        a: "Pas besoin. Vous envoyez un vocal ou un SMS — on fait le reste. Zéro logiciel à apprendre.",
    },
    {
        q: "Quelle est la différence avec un logiciel de devis (Obat, Henrri, Tolteck) ?",
        a: "Un logiciel, vous devez l'apprendre et l'utiliser. Nous, c'est un service : vous déléguez, on exécute. C'est aussi simple que d'envoyer un message.",
    },
    {
        q: "Mes données sont-elles sécurisées ?",
        a: "Hébergement Europe, chiffrement de bout en bout, sauvegardes quotidiennes. Vos données ne quittent jamais le territoire européen.",
    },
    {
        q: "Y a-t-il un engagement ?",
        a: "Non. Sans engagement, préavis d'un mois. Vous pouvez arrêter quand vous voulez.",
    },
    {
        q: "Comment mes clients paient-ils ?",
        a: "Lien de paiement par email, paiement par carte bancaire. L'argent arrive directement sur votre compte via Stripe Connect.",
    },
    {
        q: "Et mon comptable dans tout ça ?",
        a: "Export FEC chaque mois, compatible tous logiciels (Pennylane, Indy, EBP, Sage…). Votre comptable reçoit tout, propre, sans vous déranger.",
    },
    {
        q: "Comment se passe l'onboarding ?",
        a: "1 appel de 30 minutes avec Pierre. Il configure tout pour vous. Vous êtes opérationnel dès le lendemain.",
    },
];

export default function ServicesPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', borderRadius: '2rem', padding: '0.35rem 1rem', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>
                    SERVICE · PAS UN LOGICIEL
                </div>
                <h1 style={{ marginBottom: '1rem' }}>Tarifs simples et transparents</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.15rem' }}>
                    Sans engagement · Essai gratuit 14 jours · Onboarding en 1 appel de 30 min
                </p>
            </div>

            {/* Plans */}
            <section style={{ marginBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            style={{
                                border: plan.highlighted ? '2px solid var(--accent)' : '1px solid var(--border)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                background: 'white',
                                position: 'relative',
                                transform: plan.highlighted ? 'scale(1.02)' : 'none',
                                boxShadow: plan.highlighted ? '0 10px 30px -5px rgba(0,0,0,0.12)' : 'none',
                            }}
                        >
                            {plan.highlighted && plan.badge && (
                                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                                    {plan.badge}
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>{plan.target}</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1 }}>
                                {plan.price}
                                <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted)' }}>{plan.billing}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                {plan.features.map((f, i) => (
                                    <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                href={`/contact?plan=${plan.id}`}
                                variant={plan.highlighted ? 'primary' : 'outline'}
                                style={{ width: '100%', textAlign: 'center' }}
                            >
                                Démarrer l&apos;essai gratuit
                            </Button>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    * Sans engagement · Préavis d&apos;un mois · Essai gratuit 14 jours
                </p>
            </section>

            {/* Comparaison concurrence */}
            <section style={{ marginBottom: '6rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>OptiBoard vs les alternatives</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Alternative</th>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Coût</th>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Limites</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparaison.map((row) => (
                                <tr
                                    key={row.alternative}
                                    style={{
                                        borderBottom: '1px solid var(--border)',
                                        background: row.isUs ? 'rgba(var(--accent-rgb, 234, 88, 12), 0.06)' : 'white',
                                        fontWeight: row.isUs ? 700 : 400,
                                    }}
                                >
                                    <td style={{ padding: '1rem', color: row.isUs ? 'var(--accent)' : 'var(--primary)' }}>
                                        {row.isUs && '⭐ '}{row.alternative}
                                    </td>
                                    <td style={{ padding: '1rem' }}>{row.cout}</td>
                                    <td style={{ padding: '1rem', color: row.isUs ? 'var(--accent)' : 'var(--muted)' }}>{row.limites}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Questions fréquentes</h2>
                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faq.map((item, i) => (
                        <div
                            key={i}
                            style={{ border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', background: 'white' }}
                        >
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', margin: '0 0 0.75rem' }}>
                                {item.q}
                            </h3>
                            <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div style={{ textAlign: 'center', background: 'var(--primary)', borderRadius: '1.5rem', padding: '3rem 2rem', color: 'white' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Prêt à déléguer votre paperasse ?</h2>
                <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Essai gratuit 14 jours. Pierre vous contacte dans les 24h pour un onboarding de 30 minutes.
                </p>
                <Button
                    href="/contact"
                    style={{ backgroundColor: 'var(--accent)', color: 'white', border: 'none', fontSize: '1.125rem', padding: '1rem 2rem' }}
                >
                    Démarrer l&apos;essai gratuit
                </Button>
            </div>
        </div>
    );
}
