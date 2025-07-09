import { render, screen } from '@testing-library/react';
import { MetricCard } from '@/components/metric-card';

describe('MetricCard', () => {
    it('renders metric card with label and value', () => {
        const metric = {
            label: 'Test Metric',
            value: 42,
            unit: 'units'
        };

        render(<MetricCard metric={metric} />);

        expect(screen.getByText('Test Metric')).toBeInTheDocument();
        expect(screen.getByText('42')).toBeInTheDocument();
        expect(screen.getByText('units')).toBeInTheDocument();
    });
})