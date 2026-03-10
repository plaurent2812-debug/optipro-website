import type { Metadata } from "next";
import SectorCard from "@/components/ui/SectorCard";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
    title: "Secteurs d'Activité",
    description: "OptiPro accompagne les artisans BTP, TPE événementielles et freelances dans les Alpes-Maritimes. Découvrez nos solutions par secteur.",
};

export default function SectorsPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>Qui aidons-nous ?</h1>
            {sectors.map((sector) => (
                <SectorCard key={sector.id} sector={sector} />
            ))}
        </div>
    );
}
