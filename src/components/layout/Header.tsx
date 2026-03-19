'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <header style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid var(--border)',
            position: 'fixed',
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            top: 0,
        }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
                    <Image src="/logo.png" alt="OptiPro Logo" width={180} height={60} style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} priority />
                </Link>

                {/* Desktop nav */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/services" style={{ fontWeight: '500', color: 'var(--secondary)' }}>Tarifs</Link>
                    <Link href="/sectors" style={{ fontWeight: '500', color: 'var(--secondary)' }}>Secteurs BTP</Link>
                    <Link href="/about" style={{ fontWeight: '500', color: 'var(--secondary)' }}>Notre approche</Link>
                    <Button href="/contact" variant="primary">
                        Essai gratuit 14 jours
                    </Button>
                </nav>

                {/* Hamburger button */}
                <button
                    className="hamburger-btn"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        zIndex: 1001,
                    }}
                >
                    <div style={{
                        width: '24px',
                        height: '18px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '2px',
                            background: 'var(--primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '2px',
                            background: 'var(--primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '2px',
                            background: 'var(--primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
                        }} />
                    </div>
                </button>
            </div>

            {/* Mobile nav overlay */}
            <div
                className="mobile-nav"
                style={{
                    position: 'fixed',
                    top: 'var(--header-height)',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'white',
                    display: menuOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    padding: '2rem 1.5rem',
                    gap: '0.5rem',
                    zIndex: 999,
                    borderTop: '1px solid var(--border)',
                }}
            >
                <Link href="/services" onClick={closeMenu} style={{ padding: '1rem 0', fontWeight: '500', fontSize: '1.125rem', color: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
                    Tarifs
                </Link>
                <Link href="/sectors" onClick={closeMenu} style={{ padding: '1rem 0', fontWeight: '500', fontSize: '1.125rem', color: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
                    Secteurs BTP
                </Link>
                <Link href="/about" onClick={closeMenu} style={{ padding: '1rem 0', fontWeight: '500', fontSize: '1.125rem', color: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
                    Notre approche
                </Link>
                <div style={{ marginTop: '1rem' }}>
                    <Button href="/contact" variant="primary" style={{ width: '100%', textAlign: 'center' }}>
                        Essai gratuit 14 jours
                    </Button>
                </div>
            </div>
        </header>
    );
}
