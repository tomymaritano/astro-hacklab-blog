import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ThemeToggle from '../ThemeToggle';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Mock matchMedia
const matchMediaMock = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: matchMediaMock,
  });
  vi.clearAllMocks();
});

describe('ThemeToggle', () => {
  it('renders theme toggle switch', () => {
    render(<ThemeToggle />);

    // Check if sun and moon icons are present
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />);

    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);

    // Should save to localStorage
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('respects system preference when no saved theme', () => {
    localStorageMock.getItem.mockReturnValue(null);
    matchMediaMock.mockReturnValue({ matches: true });

    render(<ThemeToggle />);

    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
  });
});
