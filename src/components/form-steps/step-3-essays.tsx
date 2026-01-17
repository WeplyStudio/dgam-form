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

export function StepEssays() {
  const form = useFormContext();

  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="essayReason"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">
              Why did you choose this department?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Explain your interest in the selected department and how it aligns with your career goals..."
                className="min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              This essay will be analyzed by our AI for feedback.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="essayProgram"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">
              What work programs do you propose?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Outline any specific projects or initiatives you would like to work on..."
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
        name="essayMotivation"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">
              What is your motivation for joining DAGM?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe what motivates you to contribute to our organization's mission..."
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
