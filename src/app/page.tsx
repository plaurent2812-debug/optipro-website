import Button from "@/components/ui/Button";
import PackCard from "@/components/ui/PackCard";
import PricingCard from "@/components/ui/PricingCard";
import AddonCard from "@/components/ui/AddonCard";
import { optiboardPacks } from "@/data/packs";
import { addons } from "@/data/addons";
import styles from "./HomePage.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            Dédié à 100% aux Artisans du BTP
          </div>
          <h1 className={styles.heroTitle}>
            Artisans : Reprenez le contrôle de vos chantiers et de{" "}
            <span className={styles.heroAccent}>votre rentabilité.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Pilotez votre administratif avec l&apos;OptiBoard, le tableau de
            bord intelligent qui automatise votre gestion 2.0.
          </p>
          <div className={styles.heroCta}>
            <Button
              href="/services"
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
              Découvrir l&apos;OptiBoard
            </Button>
            <Button
              href="/contact"
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
              Réserver une démo
            </Button>
          </div>

          {/* Dashboard Mockup */}
          <div className={styles.mockupFrame}>
            <div className={styles.mockupWindow}>
              <div className={styles.mockupBar}>
                <div className={`${styles.mockupDot} ${styles.dotRed}`} />
                <div className={`${styles.mockupDot} ${styles.dotYellow}`} />
                <div className={`${styles.mockupDot} ${styles.dotGreen}`} />
              </div>
              <span style={{ marginTop: "40px" }}>
                Interface de l&apos;OptiBoard (Aperçu)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OptiBoard Packs Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Découvrez la puissance de l&apos;OptiBoard
            </h2>
            <p className={styles.sectionSubtitle}>
              Trois niveaux de puissance pour s&apos;adapter parfaitement à la
              taille et aux ambitions de votre entreprise artisanale.
            </p>
          </div>
          <div className={styles.grid}>
            {optiboardPacks.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tarifs simples et transparents
            </h2>
            <p className={styles.sectionSubtitle}>
              Un investissement directement rentabilisé par le temps gagné et les
              impayés récupérés.
            </p>
          </div>
          <div className={styles.grid}>
            {optiboardPacks.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
          <div className={styles.setupNote}>
            * Installation du système de pilotage personnalisée
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Modules à la carte (Add-ons)</h2>
            <p className={styles.sectionSubtitle}>
              Complétez votre offre avec des outils technologiques pointus pour
              automatiser encore plus votre quotidien.
            </p>
          </div>
          <div className={styles.grid}>
            {addons.map((addon) => (
              <AddonCard key={addon.id} addon={addon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Prêt à moderniser votre gestion de chantier ?
          </h2>
          <p className={styles.ctaSubtitle}>
            Rejoignez les artisans qui ont fait le choix de la rentabilité et de
            la tranquillité d&apos;esprit avec OptiPro.
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
            Démarrer avec OptiPro
          </Button>
        </div>
      </section>
    </>
  );
}
