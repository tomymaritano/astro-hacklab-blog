import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSpinner, { Skeleton, PostSkeleton } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner with default props', () => {
    render(<LoadingSpinner />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders loading spinner with custom text', () => {
    render(<LoadingSpinner text="Custom loading text" />);

    expect(screen.getByText('Custom loading text')).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    expect(screen.getByRole('status')).toHaveClass('h-4', 'w-4');

    rerender(<LoadingSpinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('h-12', 'w-12');
  });

  it('hides text when not provided', () => {
    render(<LoadingSpinner text="" />);

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});

describe('Skeleton', () => {
  it('renders skeleton with default classes', () => {
    render(<Skeleton data-testid="skeleton" />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('animate-pulse', 'bg-gray-200', 'dark:bg-gray-700', 'rounded');
  });

  it('accepts custom className', () => {
    render(<Skeleton className="h-4 w-full" data-testid="skeleton" />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('h-4', 'w-full');
  });
});

describe('PostSkeleton', () => {
  it('renders post skeleton structure', () => {
    render(<PostSkeleton />);

    // Should render a container with multiple skeleton elements
    expect(document.querySelector('.space-y-4')).toBeInTheDocument();
    expect(document.querySelectorAll('[class*="animate-pulse"]')).toHaveLength(5);
  });
});
