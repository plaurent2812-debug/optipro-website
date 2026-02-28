import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Header() {
    return (
        <header style={{ height: 'var(--header-height)', borderBottom: '1px solid var(--border)', position: 'fixed', width: '100%', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 1000, top: 0 }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/logo.png" alt="OptiPro Logo" width={180} height={60} style={{ objectFit: 'contain', borderRadius: '4px' }} priority />
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
