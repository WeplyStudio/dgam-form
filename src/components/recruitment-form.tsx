'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';

import { applicationSchema, type ApplicationData } from '@/lib/schema';
import { steps } from '@/lib/definitions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { FormProgress } from './form-progress';
import { StepPersonalInfo } from './form-steps/step-1-personal-info';
import { StepDepartment } from './form-steps/step-2-department';
import { StepEssays } from './form-steps/step-3-essays';
import { StepCaseStudy } from './form-steps/step-4-case-study';
import { StepConfirmation } from './form-steps/step-5-confirmation';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const stepComponents = [
  StepPersonalInfo,
  StepDepartment,
  StepEssays,
  StepCaseStudy,
  StepConfirmation,
];

export function RecruitmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    mode: 'onTouched',
  });

  const { formState, trigger } = form;

  const goTo = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });
    if (!output) return;

    setCompletedSteps((prev) => new Set(prev).add(currentStep));

    if (currentStep < steps.length - 1) {
      goTo(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      goTo(currentStep - 1);
    }
  };

  async function processSubmit(data: ApplicationData) {
    try {
      sessionStorage.setItem('submittedEssay', data.essayReason);
      toast({
        title: 'Application Submitted!',
        description:
          'Thank you for your interest. We will now analyze your essay.',
      });
      router.push('/feedback');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: 'Could not submit your application. Please try again.',
      });
    }
  }

  const CurrentStepComponent = stepComponents[currentStep];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-8">
          <FormProgress
            currentStep={currentStep}
            goTo={goTo}
            completedSteps={completedSteps}
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processSubmit)}>
            <div className="relative overflow-hidden h-auto min-h-[400px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full"
                >
                  <CurrentStepComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="border-t p-6 bg-secondary/50 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          <ChevronLeft /> Back
        </Button>

        {currentStep < steps.length - 1 && (
          <Button type="button" onClick={nextStep}>
            Next <ChevronRight />
          </Button>
        )}

        {currentStep === steps.length - 1 && (
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            onClick={form.handleSubmit(processSubmit)}
          >
            {formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit Application
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
