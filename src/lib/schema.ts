import { z } from 'zod';

const requiredString = z.string().min(1, 'This field is required.');

export const applicationSchema = z.object({
  fullName: requiredString,
  birthPlace: requiredString,
  birthDate: requiredString,
  school: requiredString,
  whatsapp: requiredString.regex(/^[0-9]*$/, 'Please enter a valid phone number.'),
  district: requiredString,
  regency: requiredString,

  department: z.preprocess((val) => val ?? undefined, z.enum(
    ['WIRAMA', 'Humas & Kemitraan', 'Pendidikan Literasi', 'Aspirasi dan Advokasi'],
    {
      required_error: 'You need to select a department.',
    }
  )),

  reason: requiredString.min(10, 'Please provide at least 10 characters.'),
  program: requiredString.min(10, 'Please provide at least 10 characters.'),
  motivation: requiredString.min(10, 'Please provide at least 10 characters.'),

  critical1: requiredString.min(10, 'Please provide at least 10 characters.'),
  critical2: requiredString.min(10, 'Please provide at least 10 characters.'),

  commitment: z.preprocess((val) => val ?? undefined, z.enum(['Siap, yakin', 'Siap, tidak'], {
      required_error: 'You must confirm your commitment to proceed.',
  })).refine(val => val === 'Siap, yakin', {
      message: 'You must be ready to join to submit the application.',
  }),
});

export type ApplicationData = z.infer<typeof applicationSchema>;
