import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';
import type { Magnet, MagnetBlock } from '@/lib/magnets';
import { parseInline } from '@/lib/magnets';

// ── Fonts (Inter, same as AuditReportPDF) ─────────────────
Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZg.ttf',
      fontWeight: 800,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const ACCENT = '#F97316';

const s = StyleSheet.create({
  // Cover page
  coverPage: {
    padding: 0,
    fontFamily: 'Inter',
    color: '#0F172A',
    backgroundColor: '#0F172A',
  },
  coverTop: {
    flex: 1,
    paddingHorizontal: 56,
    paddingTop: 70,
    paddingBottom: 40,
  },
  coverBrand: {
    fontSize: 13,
    fontWeight: 800,
    color: ACCENT,
    letterSpacing: 2,
    marginBottom: 8,
  },
  coverBrandSub: {
    fontSize: 9,
    color: '#94A3B8',
    letterSpacing: 1,
    marginBottom: 90,
    textTransform: 'uppercase',
  },
  coverBadge: {
    fontSize: 9,
    color: ACCENT,
    letterSpacing: 1,
    marginBottom: 16,
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  coverTitle: {
    fontSize: 30,
    fontWeight: 800,
    color: '#FFFFFF',
    lineHeight: 1.2,
    marginBottom: 24,
  },
  coverSubtitle: {
    fontSize: 13,
    color: '#CBD5E1',
    lineHeight: 1.6,
    maxWidth: 380,
  },
  coverBottom: {
    backgroundColor: '#020617',
    paddingHorizontal: 56,
    paddingVertical: 30,
    borderTopWidth: 3,
    borderTopColor: ACCENT,
  },
  coverFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  coverAuthor: { fontSize: 13, fontWeight: 700, color: '#FFFFFF' },
  coverAuthorSub: { fontSize: 9, color: '#94A3B8', marginTop: 4 },
  coverMeta: { fontSize: 9, color: '#94A3B8', textAlign: 'right' },

  // Content pages
  page: {
    padding: 50,
    paddingTop: 40,
    paddingBottom: 60,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#1F2937',
    lineHeight: 1.6,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    marginBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerBrand: { fontSize: 11, fontWeight: 800, color: ACCENT },
  headerMeta: { fontSize: 8, color: '#94A3B8' },

  // Sections
  h2: {
    fontSize: 16,
    fontWeight: 800,
    color: '#0F172A',
    marginTop: 18,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
  },
  h3: {
    fontSize: 12,
    fontWeight: 700,
    color: '#0F172A',
    marginTop: 14,
    marginBottom: 6,
  },

  // Blocks
  paragraph: {
    fontSize: 10,
    color: '#334155',
    marginBottom: 8,
    lineHeight: 1.6,
  },
  list: { marginBottom: 8 },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  listBullet: {
    width: 10,
    fontSize: 10,
    color: ACCENT,
    fontWeight: 800,
  },
  listText: {
    flex: 1,
    fontSize: 10,
    color: '#334155',
    lineHeight: 1.5,
  },
  code: {
    fontSize: 8.5,
    fontFamily: 'Inter',
    color: '#1E293B',
    backgroundColor: '#F1F5F9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: ACCENT,
    lineHeight: 1.5,
  },
  separator: {
    marginVertical: 12,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  // Inline
  bold: { fontWeight: 700, color: '#0F172A' },
  italic: { fontStyle: 'italic' },
  inlineCode: {
    fontSize: 9,
    backgroundColor: '#F1F5F9',
    color: '#0F172A',
    paddingHorizontal: 3,
  },
  link: { color: ACCENT, textDecoration: 'underline' },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerText: { fontSize: 7, color: '#94A3B8' },
});

interface InlineRenderProps {
  text: string;
}

function InlineText({ text }: InlineRenderProps) {
  const segments = parseInline(text);
  return (
    <>
      {segments.map((seg, i) => {
        switch (seg.type) {
          case 'bold':
            return (
              <Text key={i} style={s.bold}>
                {seg.value}
              </Text>
            );
          case 'italic':
            return (
              <Text key={i} style={s.italic}>
                {seg.value}
              </Text>
            );
          case 'code':
            return (
              <Text key={i} style={s.inlineCode}>
                {seg.value}
              </Text>
            );
          case 'link':
            return (
              <Link key={i} src={seg.href} style={s.link}>
                {seg.value}
              </Link>
            );
          default:
            return <Text key={i}>{seg.value}</Text>;
        }
      })}
    </>
  );
}

function renderBlock(block: MagnetBlock, key: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <Text key={key} style={s.paragraph}>
          <InlineText text={block.text} />
        </Text>
      );
    case 'list':
      return (
        <View key={key} style={s.list}>
          {block.items.map((item, i) => (
            <View key={i} style={s.listItem}>
              <Text style={s.listBullet}>•</Text>
              <Text style={s.listText}>
                <InlineText text={item} />
              </Text>
            </View>
          ))}
        </View>
      );
    case 'code':
      return (
        <Text key={key} style={s.code}>
          {block.content}
        </Text>
      );
    case 'separator':
      return <View key={key} style={s.separator} />;
    default:
      return null;
  }
}

interface MagnetPDFProps {
  magnet: Magnet;
}

export default function MagnetPDF({ magnet }: MagnetPDFProps) {
  const today = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Document
      title={magnet.title}
      author="Pierre Laurent — OptiPro"
      subject={magnet.title}
      creator="OptiPro"
      producer="OptiPro"
    >
      {/* ───── COVER ───── */}
      <Page size="A4" style={s.coverPage}>
        <View style={s.coverTop}>
          <Text style={s.coverBrand}>OPTIPRO</Text>
          <Text style={s.coverBrandSub}>
            Conseil ops · Développement · IA opérationnelle
          </Text>
          <Text style={s.coverBadge}>GUIDE PRATIQUE</Text>
          <Text style={s.coverTitle}>{magnet.title}</Text>
          {magnet.subtitle && (
            <Text style={s.coverSubtitle}>{magnet.subtitle}</Text>
          )}
        </View>
        <View style={s.coverBottom}>
          <View style={s.coverFooterRow}>
            <View>
              <Text style={s.coverAuthor}>Pierre Laurent</Text>
              <Text style={s.coverAuthorSub}>
                Fondateur OptiPro · 10 ans en exploitation logistique
              </Text>
            </View>
            <View>
              <Text style={s.coverMeta}>Édition {today}</Text>
              <Text style={s.coverMeta}>opti-pro.fr</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* ───── CONTENT ───── */}
      <Page size="A4" style={s.page}>
        <View style={s.header} fixed>
          <Text style={s.headerBrand}>OptiPro</Text>
          <Text style={s.headerMeta}>{magnet.title}</Text>
        </View>

        {magnet.sections.map((section, i) => (
          <View key={i} wrap={true}>
            {section.level === 2 ? (
              <Text style={s.h2}>{section.title}</Text>
            ) : (
              <Text style={s.h3}>{section.title}</Text>
            )}
            {section.blocks.map((block, j) => renderBlock(block, j))}
          </View>
        ))}

        <View style={s.footer} fixed>
          <Text style={s.footerText}>OptiPro — Pierre Laurent</Text>
          <Text
            style={s.footerText}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
