import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

// Mock next/link
jest.mock('next/link', () => {
    return function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) {
        return <a href={href} {...props}>{children}</a>;
    };
});

describe('Button component', () => {
    it('renders children text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders as a link when href is provided', () => {
        render(<Button href="/contact">Contact</Button>);
        const link = screen.getByText('Contact');
        expect(link.closest('a')).toHaveAttribute('href', '/contact');
    });

    it('renders as a button when no href', () => {
        render(<Button>Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'button');
    });

    it('renders with submit type', () => {
        render(<Button type="submit">Send</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });

    it('applies primary variant class by default', () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole('button');
        expect(button.className).toContain('btn-primary');
    });

    it('applies outline variant class', () => {
        render(<Button variant="outline">Outline</Button>);
        const button = screen.getByRole('button');
        expect(button.className).toContain('btn-outline');
    });

    it('calls onClick handler', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click</Button>);
        screen.getByRole('button').click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
