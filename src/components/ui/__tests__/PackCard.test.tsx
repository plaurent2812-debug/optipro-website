import { render, screen } from '@testing-library/react';
import PackCard from '@/components/ui/PackCard';
import type { Pack } from '@/data/packs';

describe('PackCard component', () => {
    const basePack: Pack = {
        id: 'test-pack',
        level: 'Niveau 1',
        name: 'TestPilot',
        tagline: 'Test & Control',
        price: '100€',
        setupFee: '50€',
        features: ['Feature A', 'Feature B', 'Feature C'],
    };

    it('renders the pack name and tagline', () => {
        render(<PackCard pack={basePack} />);
        expect(screen.getByText('TestPilot')).toBeInTheDocument();
        expect(screen.getByText('Test & Control')).toBeInTheDocument();
    });

    it('renders the level badge', () => {
        render(<PackCard pack={basePack} />);
        expect(screen.getByText('Niveau 1')).toBeInTheDocument();
    });

    it('renders all features with checkmarks', () => {
        render(<PackCard pack={basePack} />);
        expect(screen.getByText('Feature A')).toBeInTheDocument();
        expect(screen.getByText('Feature B')).toBeInTheDocument();
        expect(screen.getByText('Feature C')).toBeInTheDocument();
    });

    it('renders highlight label when highlighted', () => {
        const highlightedPack: Pack = {
            ...basePack,
            highlighted: true,
            highlightLabel: 'BEST VALUE',
        };
        render(<PackCard pack={highlightedPack} />);
        expect(screen.getByText('BEST VALUE')).toBeInTheDocument();
    });

    it('does not render highlight label when not highlighted', () => {
        render(<PackCard pack={basePack} />);
        expect(screen.queryByText('BEST VALUE')).not.toBeInTheDocument();
    });
});
