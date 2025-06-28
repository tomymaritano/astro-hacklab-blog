import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComparisonChart from '../ComparisonChart';
import ProcessDropdown from '../ProcessDropdown';
import SearchSpotlight from '../SearchSpotlight';
import GenericBarChart from '../GenericBarChart';

describe('Undefined Guards', () => {
  describe('ComparisonChart', () => {
    it('handles undefined data gracefully', () => {
      render(<ComparisonChart data={undefined as any} title="Test Chart" />);
      expect(screen.getByText('No comparison data available')).toBeInTheDocument();
    });

    it('handles empty data array', () => {
      render(<ComparisonChart data={[]} title="Test Chart" />);
      expect(screen.getByText('No comparison data available')).toBeInTheDocument();
    });

    it('handles null data', () => {
      render(<ComparisonChart data={null as any} title="Test Chart" />);
      expect(screen.getByText('No comparison data available')).toBeInTheDocument();
    });
  });

  describe('ProcessDropdown', () => {
    it('handles undefined steps gracefully', () => {
      render(<ProcessDropdown steps={undefined as any} />);
      expect(screen.getByText('No process steps available')).toBeInTheDocument();
    });

    it('handles empty steps array', () => {
      render(<ProcessDropdown steps={[]} />);
      expect(screen.getByText('No process steps available')).toBeInTheDocument();
    });

    it('filters out undefined steps', () => {
      const steps = [
        {
          id: 'valid',
          title: 'Valid Step',
          subtitle: 'Valid subtitle',
          details: ['detail'],
          outcome: 'outcome',
        },
        undefined as any,
        {
          id: '',
          title: 'Invalid Step',
          subtitle: 'subtitle',
          details: ['detail'],
          outcome: 'outcome',
        },
      ];

      render(<ProcessDropdown steps={steps} />);
      expect(screen.getByText('Valid Step')).toBeInTheDocument();
      expect(screen.queryByText('Invalid Step')).not.toBeInTheDocument();
    });
  });

  describe('SearchSpotlight', () => {
    it('handles undefined posts gracefully', () => {
      render(<SearchSpotlight posts={undefined as any} />);

      // Should still render the search button
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles posts with undefined properties', () => {
      const posts = [
        { title: 'Valid Post', slug: 'valid' },
        { title: undefined as any, slug: 'invalid' },
        { title: 'Another Valid', slug: 'valid2' },
      ];

      render(<SearchSpotlight posts={posts} />);
      // Should filter out posts with undefined titles
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('GenericBarChart', () => {
    it('handles undefined data gracefully', () => {
      render(<GenericBarChart data={undefined as any} indexBy="method" keys={['value']} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('handles empty data array', () => {
      render(<GenericBarChart data={[]} indexBy="method" keys={['value']} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('handles undefined keys', () => {
      render(
        <GenericBarChart
          data={[{ method: 'test', value: 1 }]}
          indexBy="method"
          keys={undefined as any}
        />
      );
      expect(screen.getByText('No chart keys defined')).toBeInTheDocument();
    });

    it('handles empty keys array', () => {
      render(<GenericBarChart data={[{ method: 'test', value: 1 }]} indexBy="method" keys={[]} />);
      expect(screen.getByText('No chart keys defined')).toBeInTheDocument();
    });
  });
});
