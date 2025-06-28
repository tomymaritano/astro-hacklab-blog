'use client';

import GenericBarChart from './GenericBarChart';

interface ComparisonData {
  method: string;
  time: number;
  cost: number;
  research?: number;
  docs?: number;
}

interface ComparisonChartProps {
  data: ComparisonData[];
  title?: string;
  subtitle?: string;
}

export default function ComparisonChart({ data, title, subtitle }: ComparisonChartProps) {
  // Guard against undefined data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="my-8">
        {title && <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>}
        {subtitle && <p className="text-sm text-gray-600 mb-4 text-center">{subtitle}</p>}
        <div className="h-96 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">No comparison data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      {title && <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-600 mb-4 text-center">{subtitle}</p>}
      <GenericBarChart
        data={data}
        indexBy="method"
        keys={['time', 'cost', 'research', 'docs']}
        height={400}
        axisLeftLegend="Valores"
        axisBottomLegend="Método"
      />
    </div>
  );
}
