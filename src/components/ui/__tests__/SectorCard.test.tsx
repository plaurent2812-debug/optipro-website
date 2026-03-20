import { render, screen } from '@testing-library/react';
import SectorCard from '@/components/ui/SectorCard';
import type { Sector } from '@/data/sectors';

describe('SectorCard component', () => {
    const sector: Sector = {
        id: 'test-sector',
        icon: '🔧',
        title: 'Artisans Test',
        subtitle: 'Plombier, Électricien...',
        challenges: 'Too much admin work.',
        solution: 'OptiPro handles it all.',
    };

    it('renders the sector title', () => {
        render(<SectorCard sector={sector} />);
        expect(screen.getByText('Artisans Test')).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
        render(<SectorCard sector={sector} />);
        expect(screen.getByText('Plombier, Électricien...')).toBeInTheDocument();
    });

    it('renders challenges and solution', () => {
        render(<SectorCard sector={sector} />);
        expect(screen.getByText('Too much admin work.')).toBeInTheDocument();
        expect(screen.getByText('OptiPro handles it all.')).toBeInTheDocument();
    });

    it('renders the section headings', () => {
        render(<SectorCard sector={sector} />);
        expect(screen.getByText('Vos défis')).toBeInTheDocument();
        expect(screen.getByText('Notre solution')).toBeInTheDocument();
    });
});
