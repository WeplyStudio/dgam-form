import { RecruitmentForm } from '@/components/recruitment-form';
import { Logo } from '@/components/icons';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-dvh bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-8 flex flex-col items-center">
          <Logo className="w-16 h-16 mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-headline tracking-tight">
            DAGM Recruitment Portal
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Shape the future with us. Your journey begins here. Please fill out
            the application form below to be considered for a position.
          </p>
        </header>
        <RecruitmentForm />
      </div>
    </main>
  );
}
