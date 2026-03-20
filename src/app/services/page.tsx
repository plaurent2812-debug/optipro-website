import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Tarifs & Services — OptiBoard",
    description:
        "3 formules à partir de 59€/mois. Bot Telegram + IA + sync Pennylane. Essai gratuit 14 jours.",
};

const plans = [
    {
        id: 'self-service',
        name: 'Self-service',
        price: '59€',
        billing: '/mois',
        target: 'Artisan autonome · Telegram + IA + Pennylane',
        highlighted: false,
        features: [
            'Bot Telegram + assistant IA',
            'Devis PDF générés en 2 min',
            'Sync automatique Pennylane',
            'Planning & suivi projets',
            'Export comptable FEC',
            'Essai gratuit 14 jours',
        ],
    },
    {
        id: 'accompagne',
        name: 'Accompagné',
        price: '299€',
        billing: '/mois',
        target: 'Artisan qui délègue · Gestion complète par Pierre',
        highlighted: true,
        badge: 'RECOMMANDÉ',
        features: [
            'Tout le plan Self-service',
            'Captures frais & justificatifs',
            'Gestion admin quotidienne par Pierre',
            'Relances impayés automatiques',
            'Onboarding personnalisé',
            'Support prioritaire',
        ],
    },
    {
        id: 'premium',
        name: 'Premium',
        price: '499€',
        billing: '/mois',
        target: 'Entreprise 3-10 salariés · Multi-utilisateurs',
        highlighted: false,
        features: [
            'Tout le plan Accompagné',
            'Appel hebdomadaire avec Pierre',
            'Reporting mensuel détaillé',
            'Multi-utilisateurs avec rôles',
            'Traitement prioritaire',
        ],
    },
];

const comparaison = [
    { alternative: 'Secrétaire mi-temps', cout: '800-1 200€/mois', limites: 'Chère, pas spécialisée bâtiment' },
    { alternative: 'Assistante freelance', cout: '400-700€/mois', limites: "Pas d'outil intégré" },
    { alternative: 'Logiciel de devis classique', cout: '20-80€/mois', limites: 'Il faut tout saisir soi-même' },
    { alternative: "L'artisan fait tout seul", cout: '0€ + 10h + stress', limites: 'Oublie les relances, perd des tickets' },
    { alternative: 'OptiBoard', cout: '59-499€/mois', isUs: true, limites: 'Telegram + IA + Pennylane, zéro saisie' },
];

const faq = [
    {
        q: "C'est quoi exactement OptiBoard ?",
        a: "OptiBoard est le pont entre votre bot Telegram IA et Pennylane. Vous dictez vos devis sur Telegram, l'IA les génère en 2 minutes, et tout est synchronisé automatiquement dans Pennylane pour votre comptabilité.",
    },
    {
        q: "Je ne suis pas à l'aise avec l'informatique.",
        a: "Si vous savez envoyer un message sur Telegram, vous savez utiliser OptiBoard. Aucun logiciel à apprendre — vous parlez, l'IA fait le reste.",
    },
    {
        q: "Quelle est la différence entre Self-service et Accompagné ?",
        a: "Le Self-service vous donne les outils (bot Telegram, IA, sync Pennylane). L'Accompagné ajoute Pierre comme assistant dédié : il gère votre admin au quotidien, les relances, les captures de frais.",
    },
    {
        q: "Mes données sont-elles sécurisées ?",
        a: "Hébergement Europe, chiffrement de bout en bout, sauvegardes quotidiennes. Vos données ne quittent jamais le territoire européen.",
    },
    {
        q: "Y a-t-il un engagement ?",
        a: "Non. Sans engagement, préavis d'un mois. Vous pouvez arrêter quand vous voulez.",
    },
    {
        q: "Comment ça se connecte à Pennylane ?",
        a: "La synchronisation est automatique. Chaque devis, facture et paiement est poussé dans votre compte Pennylane en temps réel. Votre comptable a toujours une vue à jour.",
    },
    {
        q: "Comment se passe l'onboarding ?",
        a: "Self-service : vous êtes guidé pas à pas dans l'app. Accompagné et Premium : 1 appel de 30 minutes avec Pierre qui configure tout pour vous.",
    },
];

export default function ServicesPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', borderRadius: '2rem', padding: '0.35rem 1rem', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>
                    TELEGRAM + PENNYLANE + IA
                </div>
                <h1 style={{ marginBottom: '1rem' }}>Tarifs simples et transparents</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.15rem' }}>
                    Sans engagement · Essai gratuit 14 jours · Sync Pennylane incluse
                </p>
            </div>

            {/* Plans */}
            <section style={{ marginBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            style={{
                                border: plan.highlighted ? '2px solid var(--accent)' : '1px solid var(--border)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                background: 'white',
                                position: 'relative',
                                transform: plan.highlighted ? 'scale(1.02)' : 'none',
                                boxShadow: plan.highlighted ? '0 10px 30px -5px rgba(0,0,0,0.12)' : 'none',
                            }}
                        >
                            {plan.highlighted && plan.badge && (
                                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                                    {plan.badge}
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>{plan.target}</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1 }}>
                                {plan.price}
                                <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted)' }}>{plan.billing}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                {plan.features.map((f, i) => (
                                    <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                href={`/contact?plan=${plan.id}`}
                                variant={plan.highlighted ? 'primary' : 'outline'}
                                style={{ width: '100%', textAlign: 'center' }}
                            >
                                Démarrer l&apos;essai gratuit
                            </Button>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    * Sans engagement · Préavis d&apos;un mois · Essai gratuit 14 jours
                </p>
            </section>

            {/* Comparaison concurrence */}
            <section style={{ marginBottom: '6rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>OptiBoard vs les alternatives</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Alternative</th>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Coût</th>
                                <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600, borderBottom: '2px solid var(--border)' }}>Limites</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparaison.map((row) => (
                                <tr
                                    key={row.alternative}
                                    style={{
                                        borderBottom: '1px solid var(--border)',
                                        background: row.isUs ? 'rgba(249, 115, 22, 0.06)' : 'white',
                                        fontWeight: row.isUs ? 700 : 400,
                                    }}
                                >
                                    <td style={{ padding: '1rem', color: row.isUs ? 'var(--accent)' : 'var(--primary)' }}>
                                        {row.isUs && '⭐ '}{row.alternative}
                                    </td>
                                    <td style={{ padding: '1rem' }}>{row.cout}</td>
                                    <td style={{ padding: '1rem', color: row.isUs ? 'var(--accent)' : 'var(--muted)' }}>{row.limites}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Questions fréquentes</h2>
                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faq.map((item, i) => (
                        <div
                            key={i}
                            style={{ border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', background: 'white' }}
                        >
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', margin: '0 0 0.75rem' }}>
                                {item.q}
                            </h3>
                            <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div style={{ textAlign: 'center', background: 'var(--primary)', borderRadius: '1.5rem', padding: '3rem 2rem', color: 'white' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Prêt à automatiser votre admin ?</h2>
                <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Essai gratuit 14 jours. Envoyez un message depuis votre chantier, on s&apos;occupe du reste.
                </p>
                <Button
                    href="/contact"
                    style={{ backgroundColor: 'var(--accent)', color: 'white', border: 'none', fontSize: '1.125rem', padding: '1rem 2rem' }}
                >
                    Démarrer l&apos;essai gratuit
                </Button>
            </div>
        </div>
    );
}
