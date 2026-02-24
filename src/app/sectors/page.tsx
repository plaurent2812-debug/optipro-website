
export default function SectorsPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>Qui aidons-nous ?</h1>

            {/* Artisans */}
            <section style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ color: 'var(--accent)', fontSize: '2rem' }}>Artisans BTP</h2>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--muted)' }}>
                    Plombier, Électricien, Menuisier, Rénovation...
                </p>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Vos défis</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Vous êtes sur les chantiers toute la journée. Le soir, vous êtes épuisé et l&apos;administratif s&apos;accumule.
                        Devis en retard = chantiers perdus. Factures non faites = trésorerie à sec.
                    </p>
                    <h3 style={{ marginBottom: '1rem' }}>Notre solution</h3>
                    <p>
                        OptiPro prend le relais. Nous préparons vos devis sur vos indications, nous transformons vos bons de
                        travaux en factures immédiates, et nous relançons les impayés. Vous ne perdez plus d&apos;argent.
                    </p>
                </div>
            </section>

            {/* TPE */}
            <section style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ color: 'var(--accent)', fontSize: '2rem' }}>TPE & Évènementiel</h2>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--muted)' }}>
                    Logistique, Organisation d&apos;événements, Services...
                </p>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Vos défis</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Des projets complexes avec multiples prestataires. Suivre la rentabilité réelle de chaque événement est un cauchemar
                        administratif. La facturation est un flux tendu.
                    </p>
                    <h3 style={{ marginBottom: '1rem' }}>Notre solution</h3>
                    <p>
                        OptiPro structure votre back-office. Nous mettons en place des tableaux de bord par projet pour que vous sachiez
                        exactement ce que vous gagnez. Nous gérons le flux facturation/fournisseurs pour fluidifier votre activité.
                    </p>
                </div>
            </section>

            {/* Freelances */}
            <section style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ color: 'var(--accent)', fontSize: '2rem' }}>Indépendants & Freelances</h2>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--muted)' }}>
                    Immobilier, Consultants, Coachs, Photographes...
                </p>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Vos défis</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Votre valeur ajoutée est sur le terrain ou en conseil, pas dans Excel. L&apos;administratif est une charge mentale
                        qui vous empêche de développer votre business sereinement.
                    </p>
                    <h3 style={{ marginBottom: '1rem' }}>Notre solution</h3>
                    <p>
                        OptiPro devient votre assistant administratif externalisé. Nous classons, nous facturons, nous préparons tout
                        pour votre comptable. Vous gagnez en sérénité et en temps commercial.
                    </p>
                </div>
            </section>
        </div>
    );
}
