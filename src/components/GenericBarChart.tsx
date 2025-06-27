'use client'

import { ResponsiveBar } from '@nivo/bar'

interface GenericBarChartProps {
  data: Record<string, any>[]
  indexBy: string
  keys: string[]
  height?: number
  axisLeftLegend?: string
  axisBottomLegend?: string
}

export default function GenericBarChart({
  data,
  indexBy,
  keys,
  height = 400,
  axisLeftLegend,
  axisBottomLegend,
}: GenericBarChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        margin={{ top: 40, right: 40, bottom: 50, left: 60 }}
        axisBottom={{
          tickRotation: -20,
          legend: axisBottomLegend,
          legendOffset: 40,
          legendPosition: 'middle',
        }}
        axisLeft={{
          legend: axisLeftLegend,
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        enableLabel={false}
        theme={{
          tooltip: {
            container: {
              background: '#111',
              color: '#fff',
              padding: '0.5rem',
            },
          },
        }}
      />
    </div>
  )
}