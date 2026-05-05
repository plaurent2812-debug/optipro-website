/**
 * Magnets OptiPro — guides téléchargeables (lead magnets newsletter)
 *
 * Source de vérité : fichiers Markdown dans content/guides/
 * Cette lib parse les MD en structure typée pour :
 * - Affichage HTML sur les pages /ressources/[slug]
 * - Génération PDF via React-PDF (composants serveur)
 */

import fs from 'node:fs/promises';
import path from 'node:path';

export type MagnetSlug = 'diagnostic-pme' | 'diagnostic-artisan';

export interface MagnetSection {
  /** Niveau de heading : 2 = ##, 3 = ### */
  level: 2 | 3;
  /** Titre nettoyé */
  title: string;
  /** Blocs de contenu après le heading, jusqu'au prochain heading de niveau égal ou supérieur */
  blocks: MagnetBlock[];
}

export type MagnetBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; content: string }
  | { type: 'separator' };

export interface Magnet {
  slug: MagnetSlug;
  title: string;
  subtitle: string;
  sector: 'pme-ops' | 'artisan-tpe';
  pages: number;
  sections: MagnetSection[];
}

const MAGNET_FILES: Record<MagnetSlug, string> = {
  'diagnostic-pme': 'diagnostic-30min-pme.md',
  'diagnostic-artisan': 'diagnostic-30min-artisan.md',
};

const MAGNET_META: Record<
  MagnetSlug,
  { sector: Magnet['sector']; pages: number }
> = {
  'diagnostic-pme': { sector: 'pme-ops', pages: 12 },
  'diagnostic-artisan': { sector: 'artisan-tpe', pages: 14 },
};

export async function loadMagnet(slug: MagnetSlug): Promise<Magnet> {
  const filename = MAGNET_FILES[slug];
  const filepath = path.join(process.cwd(), 'content', 'guides', filename);
  const raw = await fs.readFile(filepath, 'utf-8');
  return parseMagnet(slug, raw);
}

export function parseMagnet(slug: MagnetSlug, raw: string): Magnet {
  const lines = raw.split('\n');
  const meta = MAGNET_META[slug];

  let title = '';
  let subtitle = '';
  const sections: MagnetSection[] = [];
  let currentSection: MagnetSection | null = null;
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0 && currentSection) {
      currentSection.blocks.push({
        type: 'paragraph',
        text: currentParagraph.join(' ').trim(),
      });
    }
    currentParagraph = [];
  };

  const flushList = () => {
    if (currentList.length > 0 && currentSection) {
      currentSection.blocks.push({
        type: 'list',
        items: [...currentList],
      });
    }
    currentList = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        flushParagraph();
        flushList();
        if (currentSection) {
          currentSection.blocks.push({
            type: 'code',
            content: codeBuffer.join('\n'),
          });
        }
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        flushParagraph();
        flushList();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (trimmed === '---') {
      flushParagraph();
      flushList();
      if (currentSection) {
        currentSection.blocks.push({ type: 'separator' });
      }
      continue;
    }

    if (trimmed.startsWith('# ') && !title) {
      title = trimmed.slice(2).trim();
      continue;
    }

    if (
      title &&
      sections.length === 0 &&
      !currentSection &&
      trimmed.startsWith('**') &&
      trimmed.endsWith('**')
    ) {
      subtitle = trimmed.slice(2, -2).trim();
      continue;
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      currentSection = {
        level: 2,
        title: trimmed.slice(3).trim(),
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      currentSection = {
        level: 3,
        title: trimmed.slice(4).trim(),
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      currentList.push(trimmed.replace(/^[-*]\s+/, '').trim());
      continue;
    }

    if (trimmed === '') {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return {
    slug,
    title,
    subtitle,
    sector: meta.sector,
    pages: meta.pages,
    sections,
  };
}

/**
 * Convertit les marqueurs Markdown inline en segments typés.
 */
export type InlineSegment =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'italic'; value: string }
  | { type: 'code'; value: string }
  | { type: 'link'; value: string; href: string };

export function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  const pattern =
    /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[([^\]]+)\]\(([^)]+)\))/g;

  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }

    if (match[1]) {
      segments.push({ type: 'code', value: match[1].slice(1, -1) });
    } else if (match[2]) {
      segments.push({ type: 'bold', value: match[2].slice(2, -2) });
    } else if (match[3]) {
      segments.push({ type: 'italic', value: match[3].slice(1, -1) });
    } else if (match[4]) {
      segments.push({ type: 'link', value: match[5], href: match[6] });
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
}
