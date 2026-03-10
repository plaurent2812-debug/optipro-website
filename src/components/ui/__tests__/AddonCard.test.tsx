import { render, screen } from '@testing-library/react';
import AddonCard from '@/components/ui/AddonCard';
import type { Addon } from '@/data/addons';

describe('AddonCard component', () => {
    const addon: Addon = {
        id: 'test-addon',
        icon: '🧪',
        name: 'TestModule',
        description: 'A test module description for unit testing.',
    };

    it('renders the addon name', () => {
        render(<AddonCard addon={addon} />);
        expect(screen.getByText('TestModule')).toBeInTheDocument();
    });

    it('renders the icon', () => {
        render(<AddonCard addon={addon} />);
        expect(screen.getByText('🧪')).toBeInTheDocument();
    });

    it('renders the description', () => {
        render(<AddonCard addon={addon} />);
        expect(screen.getByText('A test module description for unit testing.')).toBeInTheDocument();
    });
});
