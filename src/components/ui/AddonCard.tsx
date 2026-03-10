import styles from './AddonCard.module.css';
import type { Addon } from '@/data/addons';

interface AddonCardProps {
    addon: Addon;
}

export default function AddonCard({ addon }: AddonCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{addon.icon}</div>
            <h3 className={styles.name}>{addon.name}</h3>
            <p className={styles.description}>{addon.description}</p>
        </div>
    );
}
