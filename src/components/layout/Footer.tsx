import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '1rem', mixBlendMode: 'screen' }}>
                            <Image src="/logo.png" alt="OptiPro Logo" width={160} height={50} style={{ objectFit: 'contain', filter: 'invert(1) grayscale(1) brightness(2)' }} />
                        </div>
                        <p style={{ color: '#94a3b8' }}>
                            Administration externalisée pour artisans du bâtiment. Devis, factures, relances, trésorerie — on gère tout.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Liens Rapides</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/">Accueil</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services">Tarifs & Plans</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/sectors">Secteurs BTP</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/about">Notre approche</Link></li>
                            <li><Link href="/contact">Essai gratuit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Pierre Laurent — Fondateur</li>
                            <li style={{ marginBottom: '0.5rem' }}>Essai gratuit 14 jours</li>
                            <li style={{ marginBottom: '0.5rem' }}>Onboarding en 1 appel de 30 min</li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="mailto:contact@optipro.fr">contact@optipro.fr</a></li>
                            <li><a href="https://www.linkedin.com/in/pierre-laurent-809410123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #475569', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} OptiBoard. Tous droits réservés. Service d&apos;administration externalisée pour artisans du bâtiment.
                </div>
            </div>
        </footer>
    );
}
