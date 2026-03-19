import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PackCard from "@/components/ui/PackCard";
import PricingCard from "@/components/ui/PricingCard";
import { optiboardPacks } from "@/data/packs";
import styles from "./HomePage.module.css";

export const metadata: Metadata = {
  title: "OptiBoard — Administration externalisée pour artisans du bâtiment",
  description:
    "Vous posez, on gère. Devis, factures, relances, trésorerie : OptiBoard prend en charge 100% de votre paperasse. Essai gratuit 14 jours.",
};

const roiRows = [
  { before: "10h/mois de paperasse", after: "0h — on gère tout" },
  { before: "Devis envoyés en retard (2-3 jours)", after: "Devis envoyé dans l'heure" },
  { before: "Factures oubliées, impayés qui traînent", after: "Relances auto, rien ne passe entre les mailles" },
  { before: "Pas de visibilité sur la tréso", after: "Dashboard temps réel" },
  { before: "Comptable qui râle en fin d'année", after: "Export FEC chaque mois, tout carré" },
  { before: "Clients qui attendent pour payer", after: "Paiement en ligne par carte" },
];

const features = [
  {
    icon: "🎙️",
    title: "Devis en 2 minutes chrono",
    desc: "Vous envoyez un vocal depuis le chantier. On génère le devis complet, structuré, chiffré, conforme. Le client reçoit un lien pour accepter et signer en ligne.",
  },
  {
    icon: "🧾",
    title: "Facturation automatique",
    desc: "Devis accepté → facture en 1 clic. Situations 30%-60%-solde, paiement par carte (Stripe), numérotation conforme, mentions légales, TVA.",
  },
  {
    icon: "🔔",
    title: "Relances sans effort",
    desc: "Surveillance quotidienne des impayés. Relance automatique J+15, J+30, J+45. Nos artisans récupèrent en moyenne 2 000 à 5 000€/mois.",
  },
  {
    icon: "📊",
    title: "Trésorerie en temps réel",
    desc: "Vue instantanée : facturé, encaissé, en attente. Alertes dépassement délais. Historique mois / trimestre / année. Rapport mensuel automatique le 1er.",
  },
  {
    icon: "📁",
    title: "Export comptable clé en main",
    desc: "FEC (Pennylane, Indy…) ou CSV. Compatible tous logiciels comptables. Dates en heure française. Votre comptable reçoit tout, propre, chaque mois.",
  },
  {
    icon: "🔗",
    title: "Portail client & signature en ligne",
    desc: "Lien unique par projet. Le client voit le devis, l'accepte, signe électroniquement et paie en ligne. Zéro papier, zéro déplacement pour une signature.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            Service humain · Pas un logiciel
          </div>
          <h1 className={styles.heroTitle}>
            Vous posez,{" "}
            <span className={styles.heroAccent}>on gère.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            OptiBoard prend en charge <strong>100% de votre paperasse</strong> — devis,
            factures, relances, trésorerie. Comme avoir une secrétaire spécialisée
            bâtiment, 3x moins cher.
          </p>
          <div className={styles.heroCta}>
            <Button
              href="/contact"
              style={{
                fontSize: "1.125rem",
                padding: "1rem 2rem",
                backgroundColor: "var(--accent)",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: "600",
              }}
            >
              Essai gratuit 14 jours
            </Button>
            <Button
              href="/services"
              variant="outline"
              style={{
                fontSize: "1.125rem",
                padding: "1rem 2rem",
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: "600",
              }}
            >
              Voir les tarifs
            </Button>
          </div>

          {/* ROI Snapshot */}
          <div className={styles.mockupFrame}>
            <div className={styles.mockupWindow}>
              <div className={styles.mockupBar}>
                <div className={`${styles.mockupDot} ${styles.dotRed}`} />
                <div className={`${styles.mockupDot} ${styles.dotYellow}`} />
                <div className={`${styles.mockupDot} ${styles.dotGreen}`} />
              </div>
              <div style={{ overflowX: "auto", marginTop: "1rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "0.5rem 1rem", color: "#ef4444", borderBottom: "2px solid #fecaca" }}>
                        ❌ Avant OptiBoard
                      </th>
                      <th style={{ textAlign: "left", padding: "0.5rem 1rem", color: "#16a34a", borderBottom: "2px solid #bbf7d0" }}>
                        ✅ Avec OptiBoard
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiRows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <td style={{ padding: "0.6rem 1rem", color: "#64748b" }}>{row.before}</td>
                        <td style={{ padding: "0.6rem 1rem", color: "#1e293b", fontWeight: 500 }}>{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / ROI Calcul */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Le calcul est simple</h2>
            <p className={styles.sectionSubtitle}>
              Votre main d&apos;œuvre vaut <strong>50€/h</strong>. Vous passez <strong>10h/mois</strong> sur l&apos;admin
              = <strong>500€/mois perdus</strong>. OptiBoard coûte <strong>299€/mois</strong>.
              Vous gagnez 200€ + la tranquillité + les impayés récupérés.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { value: "10h", label: "récupérées chaque mois" },
              { value: "2 000€", label: "à 5 000€ d'impayés récupérés/mois" },
              { value: "30s", label: "pour générer un devis par vocal (Premium)" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center", minWidth: "180px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--accent)" }}>{stat.value}</div>
                <div style={{ color: "var(--muted)", marginTop: "0.25rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ce qu&apos;on fait à votre place</h2>
            <p className={styles.sectionSubtitle}>
              Zéro logiciel à apprendre. Vous envoyez un vocal ou un SMS — on fait le reste.
            </p>
          </div>
          <div className={styles.grid}>
            {features.map((feat) => (
              <div
                key={feat.title}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ fontSize: "2rem" }}>{feat.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{feat.title}</h3>
                <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tarifs clairs, sans engagement</h2>
            <p className={styles.sectionSubtitle}>
              Essai gratuit 14 jours. Préavis d&apos;un mois. Onboarding en 1 appel de 30 minutes.
            </p>
          </div>
          <div className={styles.grid}>
            {optiboardPacks.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </section>

      {/* OptiBoard Packs Feature Cards */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ce qui est inclus dans chaque plan</h2>
            <p className={styles.sectionSubtitle}>
              Trois niveaux de service pour s&apos;adapter à la taille de votre activité.
            </p>
          </div>
          <div className={styles.grid}>
            {optiboardPacks.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Prêt à récupérer vos soirées ?
          </h2>
          <p className={styles.ctaSubtitle}>
            Onboarding en 1 appel de 30 minutes. Pierre vous configure tout.
            Essai gratuit 14 jours, sans engagement.
          </p>
          <Button
            href="/contact"
            style={{
              backgroundColor: "var(--accent)",
              color: "white",
              border: "none",
              fontSize: "1.125rem",
              padding: "1rem 2rem",
            }}
          >
            Démarrer l&apos;essai gratuit
          </Button>
        </div>
      </section>
    </>
  );
}
