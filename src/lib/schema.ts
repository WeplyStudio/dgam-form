import { z } from 'zod';

const requiredString = z.string().min(1, 'This field is required.');

export const applicationSchema = z.object({
  name: requiredString.min(2, 'Name must be at least 2 characters.'),
  email: requiredString.email('Please enter a valid email address.'),
  phone: requiredString.regex(
    /^\+?[1-9]\d{1,14}$/,
    'Please enter a valid phone number.'
  ),
  background: requiredString.min(
    50,
    'Please provide at least 50 characters.'
  ),

  department: z.enum(
    ['policy', 'international', 'technology', 'communications'],
    {
      required_error: 'You need to select a department.',
    }
  ),

  essayReason: requiredString.min(
    150,
    'Your essay must be at least 150 characters.'
  ),
  essayProgram: requiredString.min(
    150,
    'Your essay must be at least 150 characters.'
  ),
  essayMotivation: requiredString.min(
    150,
    'Your essay must be at least 150 characters.'
  ),

  caseStudyPolicy: requiredString.min(
    100,
    'Your response must be at least 100 characters.'
  ),
  caseStudyTime: requiredString.min(
    100,
    'Your response must be at least 100 characters.'
  ),

  commitment: z.literal(true, {
    errorMap: () => ({
      message: 'You must confirm your commitment to proceed.',
    }),
  }),
});

export type ApplicationData = z.infer<typeof applicationSchema>;
