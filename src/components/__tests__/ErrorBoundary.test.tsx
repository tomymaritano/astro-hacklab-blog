import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from '../ErrorBoundary';

// Component that throws an error
function ThrowError({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
}

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/An error occurred while rendering/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('renders custom fallback when provided', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const customFallback = <div>Custom error message</div>;

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('calls onError callback when error occurs', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const onError = vi.fn();

    render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        componentStack: expect.any(String),
      })
    );

    consoleSpy.mockRestore();
  });
});
