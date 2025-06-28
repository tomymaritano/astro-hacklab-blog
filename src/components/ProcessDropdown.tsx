'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  details: string[];
  outcome: string;
}

interface ProcessDropdownProps {
  steps: ProcessStep[];
}

export default function ProcessDropdown({ steps }: ProcessDropdownProps) {
  const [openStep, setOpenStep] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setOpenStep(openStep === stepId ? null : stepId);
  };

  // Guard against undefined or empty steps
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return (
      <div className="space-y-2">
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No process steps available
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {steps.map(step => {
        // Guard against undefined step
        if (!step || !step.id) {
          return null;
        }
        const isOpen = openStep === step.id;
        return (
          <div key={step.id} className="border-b py-2 border-zinc-200 dark:border-zinc-700">
            <button
              onClick={() => toggleStep(step.id)}
              className="w-full flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span>{step.title}</span>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden text-sm text-zinc-600 dark:text-zinc-300 mt-2"
                >
                  <p className="text-xs italic mb-2">{step.subtitle}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <p className="mt-2 italic">{step.outcome}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
