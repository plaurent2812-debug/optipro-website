import styles from './PackCard.module.css';
import type { Pack } from '@/data/packs';

interface PackCardProps {
    pack: Pack;
}

export default function PackCard({ pack }: PackCardProps) {
    const isLast = pack.id === 'premium';

    return (
        <div className={`${styles.card} ${pack.highlighted ? styles.cardHighlighted : ''}`}>
            {pack.highlighted && pack.highlightLabel && (
                <div className={styles.highlightBadge}>{pack.highlightLabel}</div>
            )}
            <div className={`${styles.level} ${isLast ? styles.levelPrimary : ''}`}>
                {pack.level}
            </div>
            <h3 className={styles.name}>{pack.name}</h3>
            <div className={styles.tagline}>{pack.tagline}</div>
            <ul className={styles.features}>
                {pack.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
