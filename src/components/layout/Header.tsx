import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
    return (
        <header style={{ height: 'var(--header-height)', borderBottom: '1px solid var(--border)', position: 'fixed', width: '100%', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 1000, top: 0 }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                    OptiPro
                </Link>

                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/services" style={{ fontWeight: '500', color: 'var(--secondary)' }}>Nos Offres</Link>
                    <Link href="/about" style={{ fontWeight: '500', color: 'var(--secondary)' }}>Notre Approche</Link>
                    <Button href="/contact" variant="primary">
                        Demander une Démo
                    </Button>
                </nav>
            </div>
        </header>
    );
}
