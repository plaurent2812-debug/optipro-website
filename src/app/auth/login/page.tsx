export default function LoginPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
            <div style={{ padding: '3rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Connexion</h1>
                <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Interface de connexion (Supabase à venir)</p>

                {/* Placeholder form */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Email</label>
                        <input type="email" placeholder="artisan@exemple.fr" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Mot de passe</label>
                        <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} />
                    </div>
                    <button style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', background: 'var(--accent)', color: 'white', fontWeight: '600', marginTop: '1rem', cursor: 'pointer' }}>
                        Se connecter
                    </button>
                </div>
            </div>
        </div>
    );
}
