import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Notre approche — OptiBoard",
    description: "OptiBoard, c'est Pierre Laurent, fondateur. Un service humain augmenté par l'IA pour les artisans du bâtiment. Pas un logiciel, un vrai service.",
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Notre approche</h1>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                    Un service humain, augmenté par l&apos;IA. Pas un logiciel.
                </p>

                {/* Qui on est */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>OptiBoard, c&apos;est quoi exactement ?</h2>
                    <div style={{ lineHeight: '1.8', color: 'var(--secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>OptiBoard est un service d&apos;administration externalisée pour artisans du bâtiment.</strong>{' '}
                            Ce n&apos;est pas un logiciel en self-service que vous devez apprendre à utiliser.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Vous, vous posez. Nous, on gère. L&apos;artisan envoie un vocal depuis le chantier —
                            il reçoit son devis formaté. Il n&apos;entre rien dans un logiciel, il ne crée rien,
                            il ne configure rien.
                        </p>
                        <p>
                            C&apos;est comme avoir une secrétaire spécialisée bâtiment à temps partiel —
                            mais 3x moins cher, disponible 7j/7, et équipée des meilleurs outils IA.
                        </p>
                    </div>
                </section>

                {/* Ce qu'on n'est PAS */}
                <section style={{ marginBottom: '4rem', background: '#fef9f5', borderRadius: '1rem', padding: '2rem', border: '1px solid #fed7aa' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>
                        Ce qu&apos;on n&apos;est PAS
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                            "❌ Pas un SaaS en self-service (Obat, Henrri, Tolteck) — vous alimentez, vous gérez",
                            "❌ Pas un logiciel de comptabilité (EBP, Sage) — on ne fait pas votre compta",
                            "❌ Pas un outil que l'artisan doit apprendre à utiliser",
                        ].map((point, i) => (
                            <li key={i} style={{ color: 'var(--secondary)', fontSize: '1rem' }}>{point}</li>
                        ))}
                    </ul>
                </section>

                {/* Pierre Laurent */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Pierre Laurent — Fondateur</h2>
                    <div style={{ lineHeight: '1.8', color: 'var(--secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            J&apos;ai créé OptiBoard pour une raison simple : les artisans du bâtiment sont parmi
                            les meilleurs professionnels du terrain, mais ils perdent des heures chaque semaine
                            dans une paperasse qui les épuise.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Mon rôle : prendre tout ça à votre charge. Je configure votre système d&apos;entrée de jeu
                            (1 appel de 30 minutes), je gère votre administration au quotidien, et je vous envoie
                            un rapport mensuel le 1er de chaque mois.
                        </p>
                        <p>
                            Vous n&apos;avez pas à vous connecter à quoi que ce soit si vous ne le souhaitez pas.
                            Un vocal suffit.
                        </p>
                    </div>
                </section>

                {/* Sécurité & technique */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Sécurité & données</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: '🇪🇺', title: 'Hébergement Europe', desc: 'Vos données ne quittent jamais le territoire européen.' },
                            { icon: '🔒', title: 'Chiffrement', desc: 'Données chiffrées en transit et au repos.' },
                            { icon: '💾', title: 'Sauvegardes quotidiennes', desc: 'Sauvegarde automatique chaque jour, restauration garantie.' },
                            { icon: '📋', title: 'RGPD conforme', desc: 'Conformité RGPD. Vous restez propriétaire de vos données.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                                <p style={{ color: 'var(--muted)', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                    <Button href="/contact" variant="primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        Parler à Pierre — Essai 14 jours gratuit
                    </Button>
                </div>
            </div>
        </div>
    );
}
