'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { FormEvent } from 'react';

function ContactForm() {
    const searchParams = useSearchParams();
    const initialPlan = searchParams.get('plan') || '';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Merci ! Pierre vous contactera dans les 24h pour organiser votre onboarding de 30 minutes.");
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Nom complet</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="Jean Dupont" />
            </div>

            <div className="form-group">
                <label htmlFor="company" className="form-label">Nom de l&apos;entreprise</label>
                <input type="text" id="company" name="company" className="form-input" required placeholder="Dupont Plomberie" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Téléphone</label>
                    <input type="tel" id="phone" name="phone" className="form-input" required />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="activity" className="form-label">Corps de métier</label>
                <select id="activity" name="activity" className="form-select">
                    <option value="">Sélectionnez votre métier</option>
                    <option value="plombier">Plombier / Chauffagiste</option>
                    <option value="electricien">Électricien</option>
                    <option value="menuisier">Menuisier / Charpentier</option>
                    <option value="peintre">Peintre / Décorateur</option>
                    <option value="macon">Maçon / Carreleur</option>
                    <option value="multi">Entreprise multi-corps</option>
                    <option value="autre">Autre artisan BTP</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="chantiers" className="form-label">Chantiers par mois (environ)</label>
                <select id="chantiers" name="chantiers" className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="5-10">5-10 chantiers/mois (→ Starter)</option>
                    <option value="10-20">10-20 chantiers/mois (→ Confort)</option>
                    <option value="20+">20+ ou équipe (→ Premium)</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="plan" className="form-label">Plan envisagé</label>
                <select id="plan" name="plan" className="form-select" defaultValue={initialPlan}>
                    <option value="">Je ne sais pas encore</option>
                    <option value="starter">Starter — 299€/mois</option>
                    <option value="confort">Confort — 399€/mois</option>
                    <option value="premium">Premium — 549€/mois</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Ce qui vous prend le plus de temps en ce moment</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Ex : je passe mes soirées à faire des devis, j'ai des impayés depuis 3 mois..."></textarea>
            </div>

            <Button type="submit" variant="primary" style={{ width: '100%' }}>
                Démarrer l&apos;essai gratuit — Pierre me contacte sous 24h
            </Button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ marginBottom: '0.75rem' }}>Essai gratuit 14 jours</h1>
                <p style={{ color: 'var(--muted)', fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto' }}>
                    <strong style={{ color: 'var(--primary)' }}>1 appel de 30 minutes</strong> avec Pierre —
                    il configure tout, vous êtes opérationnel dès le lendemain.
                </p>
            </div>

            <Suspense fallback={<div>Chargement du formulaire...</div>}>
                <ContactForm />
            </Suspense>

            <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
                <p>Ou contactez Pierre directement :</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    <a href="mailto:contact@optipro.fr">contact@optipro.fr</a>
                </p>
                <p style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                    Réponse garantie sous 24h ·{' '}
                    <a href="https://www.linkedin.com/in/pierre-laurent-809410123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        LinkedIn
                    </a>
                </p>
            </div>
        </div>
    );
}
