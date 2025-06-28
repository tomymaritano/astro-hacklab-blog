// MDX-compatible component wrappers
import ComparisonChart from './ComparisonChart';
import ProcessDropdown from './ProcessDropdown';
import ErrorBoundary from './ErrorBoundary';

// Re-export components with proper error boundaries for MDX
export const SafeComparisonChart = (props: { [key: string]: unknown }) => (
  <ErrorBoundary fallback={<div>Error loading comparison chart</div>}>
    <ComparisonChart {...props} />
  </ErrorBoundary>
);

export const SafeProcessDropdown = (props: { [key: string]: unknown }) => (
  <ErrorBoundary fallback={<div>Error loading process dropdown</div>}>
    <ProcessDropdown {...props} />
  </ErrorBoundary>
);

// Default exports for easier importing
export { ComparisonChart, ProcessDropdown };
