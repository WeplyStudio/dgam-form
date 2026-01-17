'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { FeedbackResult, FeedbackSkeleton } from '@/components/feedback-result';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeedbackPage() {
  const [essay, setEssay] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const storedEssay = sessionStorage.getItem('submittedEssay');
      if (storedEssay) {
        setEssay(storedEssay);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error('Could not access session storage:', error);
      setHasError(true);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-start min-h-dvh bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl">
        <header className="text-center mb-8 flex flex-col items-center">
          <Logo className="w-16 h-16 mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-headline tracking-tight">
            Application Feedback
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Here is the AI-generated analysis of your essay on why you chose
            your department.
          </p>
        </header>

        {essay && (
          <Suspense fallback={<FeedbackSkeleton />}>
            <FeedbackResult essay={essay} />
          </Suspense>
        )}

        {(hasError || essay === null) && !essay && (
          <Card>
            <CardHeader>
              <CardTitle>Essay Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We couldn't find the essay to analyze. Please go back and
                submit the form again.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2" /> Back to Application
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
