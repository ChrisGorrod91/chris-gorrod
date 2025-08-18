import { render, screen } from '@testing-library/react';
import Availability from './availability';

describe('Availability', () => {
    it('renders the default heading and text', () => {
        render(<Availability />);
        expect(screen.getByRole('heading', { name: /current availability/i, level: 2 })).toBeInTheDocument();
        expect(screen.getByText(/available for contract or freelance projects/i)).toBeInTheDocument();
    });

    it('renders custom heading and text', () => {
        render(<Availability heading="Custom Heading" text="Custom text here" />);
        expect(screen.getByRole('heading', { name: /custom heading/i, level: 2 })).toBeInTheDocument();
        expect(screen.getByText(/custom text here/i)).toBeInTheDocument();
    });

    it('renders the button', () => {
        render(<Availability />);
        expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
    });
});
