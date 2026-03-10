import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notre Approche",
    description: "OptiPro : votre partenaire de terrain qui anticipe vos besoins. Accompagnement humain + outils technologiques pour les artisans du BTP des Alpes-Maritimes.",
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>À propos de OptiPro</h1>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Je ne suis pas un assistant administratif classique.</h2>
                    <div style={{ lineHeight: '1.8', color: 'var(--secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Je suis votre partenaire de terrain qui anticipe vos besoins, se déplace quand c&apos;est utile, et réfléchit avec vous plutôt que de simplement exécuter des tâches. Les outils que j&apos;utilise sont au service de VOTRE efficacité, pas un gadget.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>🚀 <strong>J&apos;ANTICIPE</strong> vos besoins avant que ça devienne urgent.</li>
                            <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>🤝 <strong>JE ME DÉPLACE</strong> sur site (Vence, 06) pour échanger de vive voix.</li>
                            <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>🧠 <strong>JE RÉFLÉCHIS AVEC VOUS</strong> pour optimiser votre organisation.</li>
                            <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>🤖 <strong>TECHNIQUE & HUMAIN</strong> : des outils performants au service de votre sérénité.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Notre Approche : Humain + Technologie</h2>
                    <div style={{ lineHeight: '1.8', color: 'var(--secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Chez OptiPro, nous croyons que l&apos;efficacité administrative passe par les bons outils, mais surtout par un accompagnement humain.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Nous utilisons des outils modernes et l&apos;IA pour automatiser les tâches répétitives (classement, saisie), ce qui nous permet
                            de nous concentrer sur ce qui compte vraiment : la relation client, le suivi de votre trésorerie, et votre sérénité.
                        </p>
                        <p>
                            Nous sommes votre bras droit numérique, ancré dans le réel des Alpes-Maritimes.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
