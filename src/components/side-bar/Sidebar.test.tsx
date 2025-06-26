import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/components/side-bar";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('Sidebar', () => {
  it('renders sidebar with navigation links', () => {
    render(<Sidebar />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Submit Survey')).toBeInTheDocument();
  });
});
