import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('Button', () => {
    it('renders with text', () => {
        render(<Button text="Click me" />);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('applies the correct type', () => {
        render(<Button text="Submit" type="submit" />);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('applies the secondary class', () => {
        render(<Button text="Secondary" className="button--secondary" />);
        const button = screen.getByRole('button');
        expect(button.className).toMatch(/button--secondary/);
    });
});
