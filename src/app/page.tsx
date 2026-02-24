import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        padding: '8rem 0 6rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background pattern/overlay for SaaS feel */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--accent-light)', border: '1px solid rgba(255,255,255,0.2)' }}>
            Dédié à 100% aux Artisans du BTP
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem', color: 'white', lineHeight: '1.2' }}>
            Artisans : Reprenez le contrôle de vos chantiers et de <span style={{ color: 'var(--accent)' }}>votre rentabilité.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: '400', lineHeight: '1.6' }}>
            Pilotez votre administratif avec l'OptiBoard, le tableau de bord intelligent qui automatise votre gestion 2.0.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/services" style={{ fontSize: '1.125rem', padding: '1rem 2rem', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: '600' }}>
              Découvrir l'OptiBoard
            </Button>
            <Button href="/contact" variant="outline" style={{ fontSize: '1.125rem', padding: '1rem 2rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white', borderRadius: '0.5rem', fontWeight: '600' }}>
              Réserver une démo
            </Button>
          </div>

          {/* Dashboard Mockup Image Placeholder */}
          <div style={{ marginTop: '4rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', maxWidth: '1000px', margin: '4rem auto 0', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ background: 'var(--background)', borderRadius: '0.5rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '1.5rem', fontWeight: '600', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'var(--border)', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '8px' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }}></div>
              </div>
              <span style={{ marginTop: '40px' }}>Interface de l'OptiBoard (Aperçu)</span>
            </div>
          </div>
        </div>
      </section>

      {/* L'OptiBoard Section (Value Prop) */}
      <section style={{ padding: '6rem 0', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Découvrez la puissance de l'OptiBoard</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
              Trois niveaux de puissance pour s'adapter parfaitement à la taille et aux ambitions de votre entreprise artisanale.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* OptiPilot 80 */}
            <div style={{ padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card-bg)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: '2rem', fontWeight: '700', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Niveau 1</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>OptiPilot 80</h3>
              <div style={{ fontWeight: '600', color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Visibilité & Contrôle</div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Trésorerie en temps réel</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Suivi du CA encaissé</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Agenda chantiers centralisé</li>
              </ul>
            </div>

            {/* OptiExpert 90 */}
            <div style={{ padding: '2.5rem', borderRadius: '1rem', border: '2px solid var(--accent)', background: 'var(--card-bg)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', position: 'relative', transform: 'translateY(-10px)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '0.25rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: '700' }}>LE PLUS CHOISI</div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: '2rem', fontWeight: '700', fontSize: '0.875rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>Niveau 2</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>OptiExpert 90</h3>
              <div style={{ fontWeight: '600', color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Sérénité & Rentabilité</div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Tout ce qui est dans OptiPilot</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Alertes automatisées de retards</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Calcul automatique de la marge réelle par chantier</li>
              </ul>
            </div>

            {/* OptiIntégral 100 */}
            <div style={{ padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card-bg)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--primary)', color: 'white', borderRadius: '2rem', fontWeight: '700', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Niveau 3</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>OptiIntégral 100</h3>
              <div style={{ fontWeight: '600', color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Performance Totale</div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Tout ce qui est dans OptiExpert</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Automatisation totale des flux</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--success)' }}>✓</span> Modèles prédictifs financiers (IA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tarifs simples et transparents</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
              Un investissement directement rentabilisé par le temps gagné et les impayés récupérés.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* OptiPilot Pricing */}
            <div style={{ background: 'var(--card-bg)', padding: '3rem 2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--muted)', marginBottom: '1rem' }}>OptiPilot 80</h3>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>250€ <span style={{ fontSize: '1.25rem', color: 'var(--muted)', fontWeight: '500' }}>HT / mois</span></div>
              <div style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>+ 200€ de frais de setup*</div>
              <Button href="/contact" variant="outline" style={{ width: '100%' }}>Contacter les ventes</Button>
            </div>

            {/* OptiExpert Pricing */}
            <div style={{ background: 'var(--primary)', color: 'white', padding: '3rem 2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', transform: 'scale(1.05)', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent)', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}></div>
              <h3 style={{ fontSize: '1.5rem', color: '#cbd5e1', marginBottom: '1rem' }}>OptiExpert 90</h3>
              <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>550€ <span style={{ fontSize: '1.25rem', color: '#cbd5e1', fontWeight: '500' }}>HT / mois</span></div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>+ 350€ de frais de setup*</div>
              <Button href="/contact" style={{ width: '100%', backgroundColor: 'var(--accent)', border: 'none', color: 'white' }}>Contacter les ventes</Button>
            </div>

            {/* OptiIntégral Pricing */}
            <div style={{ background: 'var(--card-bg)', padding: '3rem 2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--muted)', marginBottom: '1rem' }}>OptiIntégral 100</h3>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>950€ <span style={{ fontSize: '1.25rem', color: 'var(--muted)', fontWeight: '500' }}>HT / mois</span></div>
              <div style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>+ 500€ de frais de setup*</div>
              <Button href="/contact" variant="outline" style={{ width: '100%' }}>Contacter les ventes</Button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--muted)', fontSize: '0.875rem', fontWeight: '500' }}>
            * Installation du système de pilotage personnalisée
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section style={{ padding: '6rem 0', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Modules à la carte (Add-ons)</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
              Complétez votre offre avec des outils technologiques pointus pour automatiser encore plus votre quotidien.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* OptiRéponse */}
            <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                🤖
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>OptiRéponse</h3>
              <p style={{ color: 'var(--muted)', flexGrow: 1 }}>
                Intelligence Artificielle de qualification de leads. Elle répond aux demandes entrantes et qualifie les besoins de vos futurs clients avant même que vous ne les rappeliez.
              </p>
            </div>

            {/* OptiRelance */}
            <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                💶
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>OptiRelance</h3>
              <p style={{ color: 'var(--muted)', flexGrow: 1 }}>
                Système de recouvrement automatisé. Fini les impayés oubliés : OptiRelance suit vos factures et orchestre des relances douces mais fermes de manière 100% autonome.
              </p>
            </div>

            {/* OptiClean */}
            <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                📄
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>OptiClean</h3>
              <p style={{ color: 'var(--muted)', flexGrow: 1 }}>
                Reconnaissance de caractères (OCR) appliquée à vos factures fournisseurs. Scannez, le système extrait les données et prépare les paiements automatiquement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section style={{ padding: '6rem 0', textAlign: 'center', background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Prêt à moderniser votre gestion de chantier ?</h2>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Rejoignez les artisans qui ont fait le choix de la rentabilité et de la tranquillité d'esprit avec OptiPro.
          </p>
          <Button href="/contact" style={{ backgroundColor: 'var(--accent)', color: 'white', border: 'none', fontSize: '1.125rem', padding: '1rem 2rem' }}>Démarrer avec OptiPro</Button>
        </div>
      </section>
    </>
  );
}
