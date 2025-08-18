import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
    it('renders the main heading', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { name: /chris gorrod/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the subheading', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { name: /software engineer & engineering manager/i, level: 2 })).toBeInTheDocument();
    });

    it('renders the availability section', () => {
        render(<Header />);
        expect(screen.getByText(/current availability/i)).toBeInTheDocument();
        expect(screen.getByText(/available for contract or freelance projects/i)).toBeInTheDocument();
    });
});
