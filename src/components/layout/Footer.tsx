import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <Image src="/logo.png" alt="OptiPro Logo" width={160} height={50} style={{ objectFit: 'contain', borderRadius: '4px' }} />
                        </div>
                        <p style={{ color: '#94a3b8' }}>
                            La solution de pilotage et de gestion administrative de référence pour les artisans du BTP dans les Alpes-Maritimes (06).
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Liens Rapides</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/">Accueil</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services">Services & Tarifs</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/sectors">Secteurs BTP</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/about">À propos</Link></li>
                            <li><Link href="/contact">Contact & Démo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact & Zone d'intervention</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Pierre Laurent</li>
                            <li style={{ marginBottom: '0.5rem' }}>Missions sur site et à distance :</li>
                            <li style={{ marginBottom: '0.5rem', fontWeight: '500', color: 'var(--accent)' }}>Vence, Grasse, Antibes, Cannes</li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="mailto:contact@optipro.fr">contact@optipro.fr</a></li>
                            <li><a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #475569', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} OptiPro. Tous droits réservés. Service dédié aux plombiers, électriciens, menuisiers et artisans du BTP de la Côte d'Azur.
                </div>
            </div>
        </footer>
    );
}
