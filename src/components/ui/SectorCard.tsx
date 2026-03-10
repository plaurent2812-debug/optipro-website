import styles from './SectorCard.module.css';
import type { Sector } from '@/data/sectors';

interface SectorCardProps {
    sector: Sector;
}

export default function SectorCard({ sector }: SectorCardProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{sector.title}</h2>
            <p className={styles.subtitle}>{sector.subtitle}</p>
            <div className={styles.content}>
                <h3 className={styles.heading}>Vos défis</h3>
                <p className={styles.text}>{sector.challenges}</p>
                <h3 className={styles.heading}>Notre solution</h3>
                <p className={styles.textLast}>{sector.solution}</p>
            </div>
        </section>
    );
}
