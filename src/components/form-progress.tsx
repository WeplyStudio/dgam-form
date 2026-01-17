'use client';

import { steps, type Step } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type FormProgressProps = {
  currentStep: number;
  goTo: (step: number) => void;
  completedSteps: Set<number>;
};

export function FormProgress({
  currentStep,
  goTo,
  completedSteps,
}: FormProgressProps) {
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="space-y-4 md:flex md:space-x-8 md:space-y-0"
      >
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            <button
              type="button"
              onClick={() => {
                if (completedSteps.has(index) || currentStep === index) {
                  goTo(index);
                }
              }}
              className={cn(
                'group flex w-full flex-col border-l-4 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4',
                currentStep === index
                  ? 'border-primary'
                  : completedSteps.has(index)
                    ? 'border-primary hover:border-primary/80'
                    : 'border-border',
                (completedSteps.has(index) || currentStep === index)
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed'
              )}
              disabled={!completedSteps.has(index) && currentStep !== index}
            >
              <span
                className={cn(
                  'text-sm font-medium transition-colors',
                  currentStep === index
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-foreground'
                )}
              >
                {step.name}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Step {index + 1}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
