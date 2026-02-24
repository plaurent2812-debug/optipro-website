import Button from '@/components/ui/Button';

export default function ServicesPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Nos Offres & Services</h1>
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Pas de facturation à la tâche.</span><br />
                Des formules claires pour vous libérer du temps et du stress administratif.
            </p>

            {/* Services List */}
            <section style={{ marginBottom: '6rem' }}>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Ce que nous faisons pour vous</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Gestion Administrative</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Création & envoi de devis/factures</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Suivi des règlements</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Relances clients (mail/SMS)</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Classement documents</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Prépa Comptable</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Collecte des pièces</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Dossier mensuel propre pour l&apos;expert</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Suivi Trésorerie & CA</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Outils & Process</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Installation outil facturation</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Structuration Drive/Dropbox</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>✅ Création de modèles (devis, mails)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pricing Packs */}
            <section>
                <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Nos Packs Mensuels</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Pack Essentiel */}
                    <div style={{ border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem', background: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pack Essentiel</h3>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                            199 € <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--muted)' }}>HT/mois</span>
                        </div>
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', minHeight: '3em' }}>
                            Pour freelances et entrepreneurs individuels. L&apos;essentiel pour garder une gestion saine sans y passer vos soirées.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>✦ Partenaire joignable</li>
                            <li style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>✦ Réflexion sur vos process</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 1 session closing mensuelle</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 1 vague de relances simples</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Préparation dossier comptable</li>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--muted)' }}>🕒 3-4h / mois</li>
                        </ul>
                        <Button href="/contact?pack=essentiel" variant="outline" className="w-full" style={{ width: '100%' }}>Choisir Essentiel</Button>
                    </div>

                    {/* Pack Confort */}
                    <div style={{ border: '2px solid var(--accent)', borderRadius: '1rem', padding: '2rem', background: 'white', position: 'relative', transform: 'scale(1.02)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
                        <div style={{ position: 'absolute', top: '-12px', right: '2rem', background: 'var(--accent)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
                            Recommandé
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pack Confort</h3>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                            449 € <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--muted)' }}>HT/mois</span>
                        </div>
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', minHeight: '3em' }}>
                            Pour TPE et professionnels actifs. Un pilotage régulier pour fluidifier votre facturation et vos encaissements.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>✦ Anticipation trésorerie</li>
                            <li style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>✦ Réflexion continue process</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Point hebdo (30-45min)</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Suivi continu devis/factures</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Relances régulières</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Tableau de bord simple</li>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--muted)' }}>🕒 8-10h / mois</li>
                        </ul>
                        <Button href="/contact?pack=confort" variant="primary" style={{ width: '100%' }}>Choisir Confort</Button>
                    </div>

                    {/* Pack Sérénité */}
                    <div style={{ border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem', background: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pack Sérénité</h3>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                            899 € <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--muted)' }}>HT/mois</span>
                        </div>
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', minHeight: '3em' }}>
                            Pour PME et entreprises structurées. Une délégation complète de votre back-office pour vous concentrer sur votre croissance.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>✦ Anticipation projets complets</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Back-office complet</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Lien direct expert-comptable</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Suivi par projet / chantier</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔹 Point pilotage bi-mensuel</li>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--muted)' }}>🕒 16-20h / mois</li>
                        </ul>
                        <Button href="/contact?pack=serenite" variant="outline" style={{ width: '100%' }}>Choisir Sérénité</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
