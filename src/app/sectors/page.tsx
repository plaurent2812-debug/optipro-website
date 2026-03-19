import type { Metadata } from "next";
import SectorCard from "@/components/ui/SectorCard";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
    title: "Corps de métier — OptiBoard",
    description: "OptiBoard gère l'administration des artisans du bâtiment : plombiers, électriciens, menuisiers, peintres, maçons et entreprises multi-corps.",
};

export default function SectorsPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ marginBottom: '0.75rem' }}>Fait pour tous les artisans du bâtiment</h1>
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Quelle que soit votre spécialité, les défis sont les mêmes : trop de paperasse, pas assez de temps.
                    OptiBoard s&apos;adapte à votre métier.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {sectors.map((sector) => (
                    <SectorCard key={sector.id} sector={sector} />
                ))}
            </div>
        </div>
    );
}
