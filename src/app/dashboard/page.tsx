export default function DashboardPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            {/* Sidebar Placeholder */}
            <aside style={{ width: '250px', background: 'var(--primary)', color: 'white', padding: '2rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '3rem', color: 'var(--accent)' }}>OptiBoard</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}>Vue d'ensemble</div>
                    <div style={{ padding: '0.75rem 1rem', opacity: 0.7 }}>Chantiers en cours</div>
                    <div style={{ padding: '0.75rem 1rem', opacity: 0.7 }}>Trésorerie / Factures</div>
                    <div style={{ padding: '0.75rem 1rem', opacity: 0.7 }}>Relances auto</div>
                </nav>
            </aside>

            {/* Main Content Placeholder */}
            <main style={{ flex: 1, padding: '3rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Tableau de bord</h1>
                    <div style={{ background: 'white', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem' }}>
                        Connecté en tant que: <strong>Artisan Démo</strong>
                    </div>
                </header>

                {/* Dashboard Widgets Placeholder */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)', borderTop: '4px solid var(--success)' }}>
                        <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>CA Encaissé (Ce mois)</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>12 450 €</div>
                    </div>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)', borderTop: '4px solid var(--warning)' }}>
                        <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Factures en retard</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>3 200 €</div>
                    </div>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)', borderTop: '4px solid var(--accent)' }}>
                        <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Chantiers actifs</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>4</div>
                    </div>
                </div>

                <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Intégration Supabase à venir</h2>
                    <p style={{ color: 'var(--muted)' }}>Cet espace sera dynamiquement alimenté par la base de données Supabase, avec authentification sécurisée et gestion des rôles (Artisan / Admin).</p>
                </div>
            </main>
        </div>
    );
}
