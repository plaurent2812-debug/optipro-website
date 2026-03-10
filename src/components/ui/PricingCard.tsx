import Button from './Button';
import styles from './PackCard.module.css';
import type { Pack } from '@/data/packs';

interface PricingCardProps {
    pack: Pack;
}

export default function PricingCard({ pack }: PricingCardProps) {
    const isHighlighted = pack.highlighted;

    return (
        <div
            className={`${styles.card} ${styles.pricingCard} ${isHighlighted ? styles.pricingCardHighlighted : ''}`}
            style={{ padding: '3rem 2rem' }}
        >
            {isHighlighted && <div className={styles.pricingAccent} />}
            <h3 className={`${styles.pricingName} ${isHighlighted ? styles.pricingNameLight : styles.pricingNameMuted}`}>
                {pack.name}
            </h3>
            <div className={`${styles.priceAmount} ${isHighlighted ? styles.priceAmountWhite : ''}`}>
                {pack.price} <span className={`${styles.priceUnit} ${isHighlighted ? styles.priceUnitLight : styles.priceUnitMuted}`}>HT / mois</span>
            </div>
            <div className={`${styles.setupFee} ${isHighlighted ? styles.setupFeeLight : styles.setupFeeMuted}`}>
                + {pack.setupFee} de frais de setup*
            </div>
            {isHighlighted ? (
                <Button href="/contact" style={{ width: '100%', backgroundColor: 'var(--accent)', border: 'none', color: 'white' }}>
                    Contacter les ventes
                </Button>
            ) : (
                <Button href="/contact" variant="outline" style={{ width: '100%' }}>
                    Contacter les ventes
                </Button>
            )}
        </div>
    );
}
