'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  debug?: boolean;
}

export default function PerformanceMonitor({ debug = false }: PerformanceMonitorProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportWebVitals = (metric: any) => {
      if (debug) {
        console.log(`${metric.name}: ${metric.value}`);
      }

      // Send to analytics service (e.g., Google Analytics, Vercel Analytics)
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Send to Vercel Analytics if available
      if (window.va) {
        window.va('track', 'Web Vitals', {
          name: metric.name,
          value: metric.value,
          id: metric.id,
        });
      }
    };

    // Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals); // Interaction to Next Paint (replaces FID)
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, [debug]);

  return null;
}

// Extend global window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    va?: (...args: any[]) => void;
  }
}
