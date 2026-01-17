'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { departments } from '@/lib/definitions';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

export function StepDepartment() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="department"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="text-xl font-bold">
            Choose Your Preferred Department
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {departments.map((dept) => (
                <FormItem key={dept.id}>
                  <FormControl>
                    <RadioGroupItem value={dept.id} className="sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor={dept.id}
                    className={cn(
                      'block w-full cursor-pointer rounded-lg border-2 p-4 transition-all',
                      field.value === dept.id
                        ? 'border-primary ring-2 ring-primary'
                        : 'border-border hover:border-accent-foreground'
                    )}
                  >
                    <CardHeader className="p-0">
                      <CardTitle className="text-base">{dept.name}</CardTitle>
                      <CardDescription className="text-sm">{dept.description}</CardDescription>
                    </CardHeader>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
