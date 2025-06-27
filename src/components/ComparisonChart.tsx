'use client'

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