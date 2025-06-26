import { Navbar } from "@/components/nav-bar";
import { render, screen } from "@testing-library/react";

describe('Navbar', () => {
    it('renders navigation bar with links', () => {
        render(<Navbar />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});

