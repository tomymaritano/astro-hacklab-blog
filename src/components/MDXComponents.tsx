// MDX-compatible component wrappers
import ComparisonChart from './ComparisonChart';
import ProcessDropdown from './ProcessDropdown';
import ErrorBoundary from './ErrorBoundary';

// Re-export components with proper error boundaries for MDX
export const SafeComparisonChart = (props: { data?: unknown; [key: string]: unknown }) => (
  <ErrorBoundary fallback={<div>Error loading comparison chart</div>}>
    <ComparisonChart data={(props.data as any) || []} {...props} />
  </ErrorBoundary>
);

export const SafeProcessDropdown = (props: { steps?: unknown; [key: string]: unknown }) => (
  <ErrorBoundary fallback={<div>Error loading process dropdown</div>}>
    <ProcessDropdown steps={(props.steps as any) || []} {...props} />
  </ErrorBoundary>
);

// Default exports for easier importing
export { ComparisonChart, ProcessDropdown };
