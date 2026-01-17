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
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function StepConfirmation() {
  const form = useFormContext();

  return (
    <div className="space-y-6 flex flex-col items-center text-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Final Confirmation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            You are about to submit your application to the DAGM Recruitment
            Portal. Please review all your information before proceeding. By
            checking the box below, you confirm your commitment to the DAGM's
            values and mission.
          </p>
          <FormField
            control={form.control}
            name="commitment"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow justify-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I confirm my commitment to DAGM and certify that all the
                    information provided is accurate.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
