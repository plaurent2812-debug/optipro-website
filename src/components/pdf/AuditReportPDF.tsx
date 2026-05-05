'use client'

import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import type { AuditPilierKey } from '@/data/audit-grid'

// ── Register font ─────────────────────────────────────────
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZg.ttf', fontWeight: 800 },
  ],
})

Font.registerHyphenationCallback(word => [word])

// ── Brand colors ─────────────────────────────────────────
const BRAND = {
  navy: '#1E2A52',
  orange: '#F47B20',
  orangeLight: '#FFF4EC',
  navyLight: '#EFF1F8',
  text: '#1F2937',
  muted: '#6B7280',
  border: '#E5E7EB',
  bgLight: '#F9FAFB',
}

const LOGO_URL = 'https://www.opti-pro.fr/optipro-logo.png'

const s = StyleSheet.create({
  // ============== COVER PAGE ==============
  cover: {
    padding: 0,
    fontFamily: 'Inter',
    color: BRAND.text,
    backgroundColor: '#FFFFFF',
  },
  coverTopBar: {
    height: 8,
    backgroundColor: BRAND.orange,
  },
  coverHeader: {
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverLogo: { width: 130, height: 41 },
  coverDate: {
    fontSize: 9,
    color: BRAND.muted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  coverDateValue: {
    fontSize: 12,
    color: BRAND.navy,
    fontWeight: 700,
    marginTop: 3,
    textAlign: 'right',
  },
  coverBody: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 60,
  },
  coverBadge: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 2,
    color: BRAND.orange,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 800,
    color: BRAND.navy,
    lineHeight: 1.1,
    marginBottom: 16,
  },
  coverClient: {
    fontSize: 22,
    fontWeight: 700,
    color: BRAND.text,
    marginBottom: 6,
  },
  coverMeta: {
    fontSize: 11,
    color: BRAND.muted,
    lineHeight: 1.6,
    marginBottom: 50,
  },
  coverScoreBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginTop: 30,
    padding: 30,
    backgroundColor: BRAND.bgLight,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: BRAND.orange,
  },
  coverScoreCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
  },
  coverScoreValue: {
    fontSize: 38,
    fontWeight: 800,
    lineHeight: 1,
  },
  coverScoreMax: {
    fontSize: 12,
    fontWeight: 600,
    marginTop: 3,
  },
  coverScoreInfo: { flex: 1 },
  coverScoreLevel: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 6,
  },
  coverScoreDesc: {
    fontSize: 10,
    color: BRAND.muted,
    lineHeight: 1.6,
  },
  coverFooter: {
    paddingHorizontal: 50,
    paddingVertical: 25,
    backgroundColor: BRAND.navy,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverFooterLeft: {
    fontSize: 9,
    color: '#FFFFFF',
    fontWeight: 700,
  },
  coverFooterRight: {
    fontSize: 8,
    color: '#94A3B8',
    textAlign: 'right',
    lineHeight: 1.5,
  },

  // ============== CONTENT PAGES ==============
  page: {
    padding: 40,
    paddingTop: 30,
    paddingBottom: 60,
    fontFamily: 'Inter',
    fontSize: 10,
    color: BRAND.text,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: BRAND.orange,
  },
  headerLogo: { width: 80, height: 25 },
  headerRight: { textAlign: 'right' },
  headerLabel: {
    fontSize: 7,
    color: BRAND.muted,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  headerValue: {
    fontSize: 9,
    fontWeight: 700,
    color: BRAND.navy,
    marginTop: 2,
  },

  // Section
  section: { marginBottom: 18 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 800,
    color: BRAND.navy,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.border,
  },
  sectionSubtitle: {
    fontSize: 9,
    color: BRAND.muted,
    marginBottom: 12,
    fontStyle: 'italic',
  },

  // Pilier bars
  pilierRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pilierIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pilierIconText: { fontSize: 6, fontWeight: 800, color: '#FFFFFF' },
  pilierLabel: { width: 145, fontSize: 9, fontWeight: 600 },
  pilierTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#F1F5F9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  pilierFill: { height: 10, borderRadius: 5 },
  pilierScore: {
    width: 50,
    textAlign: 'right',
    fontSize: 9,
    fontWeight: 700,
  },

  // Friction list
  frictionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 7,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F1F5F9',
  },
  frictionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 3,
    marginRight: 8,
  },
  frictionContent: { flex: 1 },
  frictionDesc: {
    fontSize: 9.5,
    fontWeight: 600,
    marginBottom: 2,
    color: BRAND.text,
  },
  frictionImpact: {
    fontSize: 8,
    color: BRAND.muted,
  },

  // Priority groups
  priorityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    marginBottom: 8,
  },
  priorityBadge: {
    fontSize: 8,
    fontWeight: 800,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    color: '#FFFFFF',
  },
  priorityLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: BRAND.navy,
  },
  priorityCount: {
    fontSize: 9,
    color: BRAND.muted,
  },

  // Action card
  actionCard: {
    marginBottom: 8,
    padding: 11,
    backgroundColor: BRAND.bgLight,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: BRAND.orange,
  },
  actionProblem: {
    fontSize: 10,
    fontWeight: 700,
    color: BRAND.text,
    marginBottom: 4,
  },
  actionSolution: {
    fontSize: 9,
    color: '#4B5563',
    lineHeight: 1.5,
    marginBottom: 6,
  },
  actionMeta: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  actionBadge: {
    fontSize: 7.5,
    color: BRAND.text,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: BRAND.border,
    fontWeight: 600,
  },
  actionOffer: {
    fontSize: 7.5,
    color: BRAND.orange,
    backgroundColor: BRAND.orangeLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    fontWeight: 700,
  },

  // Gains boxes
  gainsRow: { flexDirection: 'row', gap: 10, marginBottom: 18 },
  gainBox: {
    flex: 1,
    textAlign: 'center',
    padding: 14,
    backgroundColor: BRAND.bgLight,
    borderRadius: 8,
    borderTopWidth: 3,
    borderTopColor: BRAND.orange,
  },
  gainValue: {
    fontSize: 20,
    fontWeight: 800,
    color: BRAND.navy,
  },
  gainLabel: {
    fontSize: 8,
    color: BRAND.muted,
    marginTop: 4,
    lineHeight: 1.4,
  },

  // Offer mapping (page 3)
  offerCard: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BRAND.border,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  offerName: {
    fontSize: 13,
    fontWeight: 800,
    color: BRAND.navy,
    flex: 1,
  },
  offerPrice: {
    fontSize: 13,
    fontWeight: 800,
    color: BRAND.orange,
  },
  offerDelai: {
    fontSize: 8,
    color: BRAND.muted,
    marginBottom: 8,
  },
  offerDesc: {
    fontSize: 9,
    color: '#4B5563',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  offerWhy: {
    fontSize: 8.5,
    color: BRAND.navy,
    fontWeight: 600,
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: BRAND.border,
  },

  // Next steps box
  nextStepsBox: {
    padding: 18,
    backgroundColor: BRAND.navy,
    borderRadius: 8,
    marginTop: 10,
  },
  nextStepsTitle: {
    fontSize: 12,
    fontWeight: 800,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  nextStepsText: {
    fontSize: 9,
    color: '#CBD5E1',
    lineHeight: 1.7,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: BRAND.border,
  },
  footerText: { fontSize: 7, color: BRAND.muted },
  footerBrand: { fontSize: 7, color: BRAND.navy, fontWeight: 700 },
})

const PILIER_COLORS: Record<AuditPilierKey, string> = {
  outils: '#6366F1',
  process: '#F59E0B',
  communication: '#10B981',
  admin: '#3B82F6',
  digital: '#EC4899',
  automatisation: BRAND.orange,
}

const PILIER_DISPLAY: Record<AuditPilierKey, { label: string; abbr: string }> = {
  outils: { label: 'Outils & Logiciels', abbr: 'OL' },
  process: { label: 'Process & Organisation', abbr: 'PO' },
  communication: { label: 'Communication & Relances', abbr: 'CR' },
  admin: { label: 'Gestion Administrative', abbr: 'GA' },
  digital: { label: 'Presence Digitale', abbr: 'PD' },
  automatisation: { label: 'Automatisation', abbr: 'AU' },
}

const SCORE_LEVELS = [
  { min: 0, max: 2.9, label: 'Critique', color: '#DC2626' },
  { min: 3, max: 4.9, label: 'Preoccupant', color: '#EA580C' },
  { min: 5, max: 6.9, label: 'Moyen', color: '#CA8A04' },
  { min: 7, max: 8.4, label: 'Bon', color: '#16A34A' },
  { min: 8.5, max: 10, label: 'Excellent', color: '#2563EB' },
]

function getLevel(score: number) {
  return SCORE_LEVELS.find(l => score >= l.min && score <= l.max) || SCORE_LEVELS[0]
}

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// ── Mapping intelligent : friction/action → offre OptiPro ──
interface OptiProOffer {
  name: string
  price: string
  delai: string
  description: string
  why: string
}

function mapActionsToOffers(actions: any[]): OptiProOffer[] {
  const offers: OptiProOffer[] = []
  const triggered = new Set<string>()

  // Question IDs liés à site web / fiche Google → Pack Visibilité ou Site pro
  const hasDigitalNeed = actions.some(a => ['5.1', '5.4'].includes(extractQuestionFromOrdre(a)))
  const hasMultipleDigital = actions.filter(a => ['5.1', '5.2', '5.4', '5.5'].includes(extractQuestionFromOrdre(a))).length >= 2

  // Question IDs liés à devis/facturation/CRM → Site complet ou outil sur mesure
  const hasOpsNeed = actions.some(a => ['1.1', '1.2', '4.1', '4.2'].includes(extractQuestionFromOrdre(a)))

  // Question IDs liés à automatisation/intégrations
  const hasAutomationNeed = actions.some(a => ['6.1', '6.4', '3.1', '3.2'].includes(extractQuestionFromOrdre(a)))

  if (hasDigitalNeed && !triggered.has('visibilite')) {
    if (hasMultipleDigital) {
      offers.push({
        name: 'Site vitrine pro',
        price: 'des 2 400 EUR HT',
        delai: '1 semaine',
        description: '3-5 pages, design unique, SEO local, formulaire de contact intelligent, formation incluse.',
        why: 'Repond aux frictions sur la presence digitale (site, Google Business, SEO local).',
      })
    } else {
      offers.push({
        name: 'Pack Visibilite',
        price: '890 EUR HT',
        delai: '3-5 jours',
        description: 'Fiche Google Business optimisee + mini-site 1 page + formation 1h. Le minimum vital pour exister en ligne.',
        why: 'Repond a la friction "absence de site / fiche Google" identifiee dans l\'audit.',
      })
    }
    triggered.add('visibilite')
  }

  if (hasOpsNeed && !triggered.has('ops')) {
    offers.push({
      name: 'Site complet + espace client (ou outil metier sur mesure)',
      price: 'des 6 500 EUR HT - sur devis',
      delai: '4-6 semaines',
      description: 'Site avec catalogue produits, espace client (devis/factures en ligne), back-office dedie. Possibilite d\'inclure integrations API et automatisations dans le devis.',
      why: 'Repond aux frictions sur la gestion devis/factures/CRM identifiees dans l\'audit.',
    })
    triggered.add('ops')
  }

  if (hasAutomationNeed && !triggered.has('automatisation')) {
    offers.push({
      name: 'Audit ops + automatisations ciblees',
      price: 'des 1 500 EUR HT - sur devis',
      delai: '1 semaine pour l\'audit',
      description: 'Diagnostic complet de vos flux operationnels. Plan d\'action chiffre. Automatisations ciblees ensuite (relances, integrations, reporting).',
      why: 'Repond aux frictions sur les outils non connectes, les relances manuelles et les re-saisies.',
    })
    triggered.add('automatisation')
  }

  return offers
}

// Helper : retrouve l'ID question depuis une action (basé sur le contenu)
function extractQuestionFromOrdre(action: any): string {
  // Hack simple : on regarde le pilier + le contenu du probleme
  const probleme = (action.probleme as string) || ''
  if (probleme.includes('devis') && probleme.includes('manuelle')) return '1.1'
  if (probleme.includes('suivi client')) return '1.2'
  if (probleme.includes('outils') && probleme.includes('connect')) return '6.1'
  if (probleme.includes('relance') && probleme.includes('devis')) return '3.1'
  if (probleme.includes('Impay')) return '3.2'
  if (probleme.includes('Facturation')) return '4.1'
  if (probleme.includes('comptable')) return '4.2'
  if (probleme.includes('site internet')) return '5.1'
  if (probleme.includes('Google Business')) return '5.4'
  if (probleme.includes('Re-saisie')) return '6.4'
  if (probleme.includes('administratif')) return '2.2'
  if (probleme.includes('documentation')) return '2.5'
  return ''
}

interface AuditReportPDFProps {
  audit: any
  client: any
  frictions: any[]
  actions: any[]
  pilierScores: Record<AuditPilierKey, number>
}

export default function AuditReportPDF({ audit, client, frictions, actions, pilierScores }: AuditReportPDFProps) {
  const level = getLevel(audit.score_global || 0)
  const heuresSemaine = audit.heures_recuperables_semaine || 0
  const heuresAn = heuresSemaine * 47
  const valorisation = Math.round(heuresAn * 35)

  const dateStr = new Date(audit.date_audit).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const clientName = client?.entreprise || `${client?.prenom || ''} ${client?.nom || ''}`.trim() || 'Client'
  const clientFullName = `${client?.prenom || ''} ${client?.nom || ''}`.trim()

  // Group actions by priority
  const p1Actions = actions.filter(a => a.priorite === 'P1')
  const p2Actions = actions.filter(a => a.priorite === 'P2')
  const p3Actions = actions.filter(a => a.priorite === 'P3')

  const recommendedOffers = mapActionsToOffers(actions)

  return (
    <Document
      title={`Audit OptiPro — ${clientName}`}
      author="Pierre Laurent — OptiPro"
      subject={`Rapport d'audit pour ${clientName}`}
      creator="OptiPro"
      producer="OptiPro"
    >
      {/* ═══════════════ PAGE 1 — COVER ═══════════════ */}
      <Page size="A4" style={s.cover}>
        <View style={s.coverTopBar} />

        <View style={s.coverHeader}>
          <Image src={LOGO_URL} style={s.coverLogo} />
          <View>
            <Text style={s.coverDate}>Rapport audit</Text>
            <Text style={s.coverDateValue}>{dateStr}</Text>
          </View>
        </View>

        <View style={s.coverBody}>
          <Text style={s.coverBadge}>Diagnostic operationnel</Text>
          <Text style={s.coverTitle}>Rapport d&apos;audit{'\n'}OptiPro</Text>
          <Text style={s.coverClient}>{clientName}</Text>
          <Text style={s.coverMeta}>
            {audit.secteur && `${audit.secteur}`}
            {audit.effectif && `${audit.secteur ? ' · ' : ''}${audit.effectif} pers.`}
            {(audit.secteur || audit.effectif) && '\n'}
            Audit realise par Pierre Laurent · Fondateur OptiPro
            {clientFullName && clientFullName !== clientName && `\nInterlocuteur : ${clientFullName}`}
          </Text>

          <View style={s.coverScoreBlock}>
            <View style={[s.coverScoreCircle, {
              backgroundColor: `${level.color}15`,
              borderColor: level.color,
            }]}>
              <Text style={[s.coverScoreValue, { color: level.color }]}>
                {(audit.score_global || 0).toFixed(1)}
              </Text>
              <Text style={[s.coverScoreMax, { color: level.color }]}>/ 10</Text>
            </View>
            <View style={s.coverScoreInfo}>
              <Text style={[s.coverScoreLevel, { color: level.color }]}>
                Niveau : {level.label}
              </Text>
              <Text style={s.coverScoreDesc}>
                Ce score reflete l&apos;efficacite operationnelle globale evaluee sur 6 piliers
                ponderes : outils, process, communication, gestion administrative, presence
                digitale et automatisation. Il sert de base aux recommandations chiffrees ci-apres.
              </Text>
            </View>
          </View>
        </View>

        <View style={s.coverFooter}>
          <Text style={s.coverFooterLeft}>OPTIPRO</Text>
          <Text style={s.coverFooterRight}>
            Pierre Laurent · Vence (06140) · p.laurent@opti-pro.fr · 06 70 25 93 33{'\n'}
            opti-pro.fr · SIREN 934 301 987 · TVA non applicable, art. 293 B du CGI
          </Text>
        </View>
      </Page>

      {/* ═══════════════ PAGE 2 — DETAIL PILIERS + GAINS ═══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.header} fixed>
          <Image src={LOGO_URL} style={s.headerLogo} />
          <View style={s.headerRight}>
            <Text style={s.headerLabel}>Audit · {clientName}</Text>
            <Text style={s.headerValue}>{dateStr}</Text>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Detail par pilier</Text>
          <Text style={s.sectionSubtitle}>
            Chaque pilier est evalue sur 10 a partir des reponses fournies pendant l&apos;entretien.
            Les piliers sont ponderes selon leur impact reel sur l&apos;activite.
          </Text>
          {(Object.keys(PILIER_DISPLAY) as AuditPilierKey[]).map(key => {
            const score = pilierScores[key] || 0
            const color = PILIER_COLORS[key]
            const pilier = PILIER_DISPLAY[key]
            return (
              <View key={key} style={s.pilierRow}>
                <View style={[s.pilierIcon, { backgroundColor: color }]}>
                  <Text style={s.pilierIconText}>{pilier.abbr}</Text>
                </View>
                <Text style={s.pilierLabel}>{pilier.label}</Text>
                <View style={s.pilierTrack}>
                  <View style={[s.pilierFill, { width: `${score * 10}%`, backgroundColor: color }]} />
                </View>
                <Text style={[s.pilierScore, { color }]}>{score.toFixed(1)} / 10</Text>
              </View>
            )
          })}
        </View>

        {heuresSemaine > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>Estimation des gains potentiels</Text>
            <Text style={s.sectionSubtitle}>
              Ces ordres de grandeur sont issus d&apos;une mise en application complete des
              recommandations ci-apres. Ils dependent de votre implication et du perimetre retenu.
            </Text>
            <View style={s.gainsRow}>
              <View style={s.gainBox}>
                <Text style={s.gainValue}>{heuresSemaine}h</Text>
                <Text style={s.gainLabel}>recuperables{'\n'}par semaine</Text>
              </View>
              <View style={s.gainBox}>
                <Text style={s.gainValue}>{Math.round(heuresAn)}h</Text>
                <Text style={s.gainLabel}>soit ~{Math.round(heuresAn / 7)} jours{'\n'}par an</Text>
              </View>
              <View style={s.gainBox}>
                <Text style={s.gainValue}>{formatNumber(valorisation)} EUR</Text>
                <Text style={s.gainLabel}>valorisation annuelle{'\n'}(base 35 EUR/h)</Text>
              </View>
            </View>
          </View>
        )}

        {/* Frictions */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Points de friction identifies ({frictions.length})</Text>
          {frictions.length === 0 ? (
            <Text style={s.sectionSubtitle}>Aucun point de friction critique detecte.</Text>
          ) : (
            frictions.slice(0, 10).map((f: any, i: number) => (
              <View key={i} style={s.frictionRow}>
                <View style={[s.frictionDot, {
                  backgroundColor: f.severite === 'critical' ? '#DC2626' : f.severite === 'warning' ? BRAND.orange : '#3B82F6',
                }]} />
                <View style={s.frictionContent}>
                  <Text style={s.frictionDesc}>{f.description}</Text>
                  {f.impact_estime && <Text style={s.frictionImpact}>Impact : {f.impact_estime}</Text>}
                </View>
              </View>
            ))
          )}
        </View>

        <View style={s.footer} fixed>
          <Text style={s.footerBrand}>OPTIPRO</Text>
          <Text style={s.footerText} render={({ pageNumber, totalPages }) => `Page ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      {/* ═══════════════ PAGE 3 — PLAN D'ACTION PAR PRIORITE ═══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.header} fixed>
          <Image src={LOGO_URL} style={s.headerLogo} />
          <View style={s.headerRight}>
            <Text style={s.headerLabel}>Audit · {clientName}</Text>
            <Text style={s.headerValue}>{dateStr}</Text>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Plan d&apos;action recommande ({actions.length})</Text>
          <Text style={s.sectionSubtitle}>
            Actions classees par priorite. P1 = a traiter en premier (impact business ou risque eleve).
            P2 = important. P3 = optimisation a moyen terme.
          </Text>
        </View>

        {p1Actions.length > 0 && (
          <View>
            <View style={s.priorityHeader}>
              <Text style={[s.priorityBadge, { backgroundColor: '#DC2626' }]}>P1</Text>
              <Text style={s.priorityLabel}>Priorite haute</Text>
              <Text style={s.priorityCount}>· {p1Actions.length} action{p1Actions.length > 1 ? 's' : ''}</Text>
            </View>
            {p1Actions.map((a: any, i: number) => (
              <View key={`p1-${i}`} style={[s.actionCard, { borderLeftColor: '#DC2626' }]} wrap={false}>
                <Text style={s.actionProblem}>{a.probleme}</Text>
                <Text style={s.actionSolution}>{"-> "}{a.solution}</Text>
                <View style={s.actionMeta}>
                  {a.gain_estime && <Text style={s.actionBadge}>Gain : {a.gain_estime}</Text>}
                  {a.delai && <Text style={s.actionBadge}>Delai : {a.delai}</Text>}
                  {a.budget_indicatif && <Text style={s.actionBadge}>Budget indicatif : {a.budget_indicatif}</Text>}
                </View>
              </View>
            ))}
          </View>
        )}

        {p2Actions.length > 0 && (
          <View>
            <View style={s.priorityHeader}>
              <Text style={[s.priorityBadge, { backgroundColor: BRAND.orange }]}>P2</Text>
              <Text style={s.priorityLabel}>Priorite moyenne</Text>
              <Text style={s.priorityCount}>· {p2Actions.length} action{p2Actions.length > 1 ? 's' : ''}</Text>
            </View>
            {p2Actions.map((a: any, i: number) => (
              <View key={`p2-${i}`} style={s.actionCard} wrap={false}>
                <Text style={s.actionProblem}>{a.probleme}</Text>
                <Text style={s.actionSolution}>{"-> "}{a.solution}</Text>
                <View style={s.actionMeta}>
                  {a.gain_estime && <Text style={s.actionBadge}>Gain : {a.gain_estime}</Text>}
                  {a.delai && <Text style={s.actionBadge}>Delai : {a.delai}</Text>}
                  {a.budget_indicatif && <Text style={s.actionBadge}>Budget indicatif : {a.budget_indicatif}</Text>}
                </View>
              </View>
            ))}
          </View>
        )}

        {p3Actions.length > 0 && (
          <View>
            <View style={s.priorityHeader}>
              <Text style={[s.priorityBadge, { backgroundColor: '#3B82F6' }]}>P3</Text>
              <Text style={s.priorityLabel}>A moyen terme</Text>
              <Text style={s.priorityCount}>· {p3Actions.length} action{p3Actions.length > 1 ? 's' : ''}</Text>
            </View>
            {p3Actions.map((a: any, i: number) => (
              <View key={`p3-${i}`} style={[s.actionCard, { borderLeftColor: '#3B82F6' }]} wrap={false}>
                <Text style={s.actionProblem}>{a.probleme}</Text>
                <Text style={s.actionSolution}>{"-> "}{a.solution}</Text>
                <View style={s.actionMeta}>
                  {a.gain_estime && <Text style={s.actionBadge}>Gain : {a.gain_estime}</Text>}
                  {a.delai && <Text style={s.actionBadge}>Delai : {a.delai}</Text>}
                  {a.budget_indicatif && <Text style={s.actionBadge}>Budget indicatif : {a.budget_indicatif}</Text>}
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={s.footer} fixed>
          <Text style={s.footerBrand}>OPTIPRO</Text>
          <Text style={s.footerText} render={({ pageNumber, totalPages }) => `Page ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      {/* ═══════════════ PAGE 4 — COMMENT OPTIPRO PEUT VOUS ACCOMPAGNER ═══════════════ */}
      {recommendedOffers.length > 0 && (
        <Page size="A4" style={s.page}>
          <View style={s.header} fixed>
            <Image src={LOGO_URL} style={s.headerLogo} />
            <View style={s.headerRight}>
              <Text style={s.headerLabel}>Audit · {clientName}</Text>
              <Text style={s.headerValue}>{dateStr}</Text>
            </View>
          </View>

          <View style={s.section}>
            <Text style={s.sectionTitle}>Comment OptiPro peut vous accompagner</Text>
            <Text style={s.sectionSubtitle}>
              Sur la base des frictions identifiees, voici les offres OptiPro les plus pertinentes
              pour votre cas. Tous les prix sont indiques en HT (TVA non applicable, art. 293 B du CGI).
            </Text>
          </View>

          {recommendedOffers.map((offer, i) => (
            <View key={i} style={s.offerCard} wrap={false}>
              <View style={s.offerHeader}>
                <Text style={s.offerName}>{offer.name}</Text>
                <Text style={s.offerPrice}>{offer.price}</Text>
              </View>
              <Text style={s.offerDelai}>Delai : {offer.delai}</Text>
              <Text style={s.offerDesc}>{offer.description}</Text>
              <Text style={s.offerWhy}>Pourquoi : {offer.why}</Text>
            </View>
          ))}

          <View style={s.nextStepsBox}>
            <Text style={s.nextStepsTitle}>Prochaines etapes</Text>
            <Text style={s.nextStepsText}>
              1. Rendez-vous de restitution pour parcourir ce rapport ensemble (30-45 min).{'\n'}
              2. Choix des priorites et validation du perimetre.{'\n'}
              3. Devis sur mesure base sur les actions retenues.{'\n'}
              4. Lancement du projet — un seul interlocuteur (Pierre Laurent) du diagnostic a la livraison.
            </Text>
          </View>

          <View style={s.footer} fixed>
            <Text style={s.footerBrand}>OPTIPRO</Text>
            <Text style={s.footerText} render={({ pageNumber, totalPages }) => `Page ${pageNumber} / ${totalPages}`} />
          </View>
        </Page>
      )}
    </Document>
  )
}
