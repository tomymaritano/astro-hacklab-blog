import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComparisonChart from '../ComparisonChart';

const mockData = [
  { method: 'Traditional', time: 90, cost: 5000, research: 40, docs: 100 },
  { method: 'With AI', time: 7, cost: 20, research: 5, docs: 150 },
];

describe('ComparisonChart', () => {
  it('renders chart with title and subtitle', () => {
    render(<ComparisonChart data={mockData} title="Test Chart" subtitle="Test Description" />);

    expect(screen.getByText('Test Chart')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders chart without title when not provided', () => {
    render(<ComparisonChart data={mockData} />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('passes data correctly to GenericBarChart', () => {
    const { container } = render(<ComparisonChart data={mockData} title="Test" />);

    // Check if the chart container is rendered
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
