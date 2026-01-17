'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export function StepCaseStudy() {
  const form = useFormContext();

  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="caseStudyPolicy"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">
              Public Policy Critical Thinking
            </FormLabel>
            <FormDescription className="mb-2">
              Imagine a new technology is expected to displace a significant
              portion of the workforce. What policy measures would you propose
              to mitigate the negative impacts on society?
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Discuss potential solutions, considering economic, social, and ethical implications..."
                className="min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="caseStudyTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Time Management</FormLabel>
            <FormDescription className="mb-2">
              Describe a situation where you had to manage multiple competing
              priorities with tight deadlines. How did you approach it, and what
              was the outcome?
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Detail your prioritization strategy, time management techniques, and how you handled any challenges..."
                className="min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
