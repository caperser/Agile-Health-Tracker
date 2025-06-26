import { render } from "@testing-library/react";
import { ChartArea } from "@/components/chart-area";

describe('ChartArea', () => {
  it('renders chart area with placeholder', () => {
    const { container } = render(<ChartArea />);
    
    expect(container.querySelector('h6')).toHaveTextContent('Team Morale Over Time');
    expect(container.querySelector('p')).toHaveTextContent('(Chart placeholder – integration coming soon)');
    expect(container.querySelector('div')).toHaveStyle('height: 200px');
  });
});