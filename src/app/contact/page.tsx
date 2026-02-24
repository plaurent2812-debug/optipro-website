'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { FormEvent } from 'react';

function ContactForm() {
    const searchParams = useSearchParams();
    const initialPack = searchParams.get('pack') || '';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Merci ! Votre demande a bien été prise en compte (Simulation).");
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Nom complet</label>
                <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
                <label htmlFor="company" className="form-label">Société</label>
                <input type="text" id="company" name="company" className="form-input" required />
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
                <label htmlFor="activity" className="form-label">Activité</label>
                <select id="activity" name="activity" className="form-select">
                    <option value="">Sélectionnez votre activité</option>
                    <option value="artisan">Artisan BTP</option>
                    <option value="tpe">TPE / Service</option>
                    <option value="event">Évènementiel / Logistique</option>
                    <option value="freelance">Freelance / Indépendant</option>
                    <option value="other">Autre</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="pack" className="form-label">Pack envisagé</label>
                <select id="pack" name="pack" className="form-select" defaultValue={initialPack}>
                    <option value="">Je ne sais pas encore</option>
                    <option value="optipilot">OptiPilot 80</option>
                    <option value="optiexpert">OptiExpert 90</option>
                    <option value="optiintegral">OptiIntégral 100</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Dites-nous en plus sur vos besoins..."></textarea>
            </div>

            <Button type="submit" variant="primary" style={{ width: '100%' }}>Envoyer ma demande</Button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Parlons de votre projet</h1>
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.25rem' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Pas de formulaire robot.</span><br />
                Appelez-moi ou écrivez-moi directement, je vous réponds rapidement pour comprendre précisément vos besoins.
            </p>

            <Suspense fallback={<div>Chargement du formulaire...</div>}>
                <ContactForm />
            </Suspense>

            <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--muted)' }}>
                <p>Ou contactez-nous directement :</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>contact@optipro.fr</p>
                <p>Vence, Alpes-Maritimes</p>
            </div>
        </div>
    );
}
