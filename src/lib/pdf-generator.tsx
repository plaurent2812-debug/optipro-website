import { renderToBuffer } from '@react-pdf/renderer';
import MagnetPDF from '@/components/pdf/MagnetPDF';
import { loadMagnet, type MagnetSlug } from '@/lib/magnets';

/**
 * Génère le PDF d'un magnet à la volée.
 * Renvoie un Buffer Node.js prêt à être attaché à un email ou streamé en réponse HTTP.
 */
export async function generateMagnetPdf(slug: MagnetSlug): Promise<Buffer> {
  const magnet = await loadMagnet(slug);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return await renderToBuffer(<MagnetPDF magnet={magnet} /> as any);
}
