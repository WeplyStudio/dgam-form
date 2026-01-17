'use server';

/**
 * @fileOverview A Genkit flow for generating feedback on candidate essays based on clarity, relevance, and originality.
 *
 * - generateEssayFeedback - A function that takes essay text as input and returns structured feedback.
 * - GenerateEssayFeedbackInput - The input type for the generateEssayFeedback function.
 * - GenerateEssayFeedbackOutput - The return type for the generateEssayFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEssayFeedbackInputSchema = z.object({
  essayText: z
    .string()
    .describe('The essay text to be analyzed and evaluated.'),
});
export type GenerateEssayFeedbackInput = z.infer<
  typeof GenerateEssayFeedbackInputSchema
>;

const GenerateEssayFeedbackOutputSchema = z.object({
  clarity: z
    .number()
    .int()
    .min(1)
    .max(5)
    .describe('A rating (1-5) of the essay clarity.'),
  relevance: z
    .number()
    .int()
    .min(1)
    .max(5)
    .describe('A rating (1-5) of the essay relevance to the prompt.'),
  originality: z
    .number()
    .int()
    .min(1)
    .max(5)
    .describe('A rating (1-5) of the essay originality.'),
  feedback: z
    .string()
    .describe('Qualitative feedback on the essay.'),
});
export type GenerateEssayFeedbackOutput = z.infer<
  typeof GenerateEssayFeedbackOutputSchema
>;

export async function generateEssayFeedback(
  input: GenerateEssayFeedbackInput
): Promise<GenerateEssayFeedbackOutput> {
  return generateEssayFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEssayFeedbackPrompt',
  input: {schema: GenerateEssayFeedbackInputSchema},
  output: {schema: GenerateEssayFeedbackOutputSchema},
  prompt: `You are an expert essay evaluator for DAGM recruitment.

  Please provide a structured evaluation of the following essay based on clarity, relevance, and originality.

  Provide a rating from 1 to 5 for each of the following criteria:
  - Clarity: How well the essay conveys its message.
  - Relevance: How relevant the essay is to the prompt.
  - Originality: How original the essay's content and perspective are.

  Also, provide qualitative feedback summarizing the strengths and weaknesses of the essay.

  Essay: {{{essayText}}}

  Ensure your response can be parsed as valid JSON object and nothing else.
  `,
});

const generateEssayFeedbackFlow = ai.defineFlow(
  {
    name: 'generateEssayFeedbackFlow',
    inputSchema: GenerateEssayFeedbackInputSchema,
    outputSchema: GenerateEssayFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
