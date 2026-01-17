'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';

import { applicationSchema, type ApplicationData } from '@/lib/schema';
import { steps } from '@/lib/definitions';

import { StepPersonalInfo } from './form-steps/step-1-personal-info';
import { StepDepartment } from './form-steps/step-2-department';
import { StepEssays } from './form-steps/step-3-essays';
import { StepCaseStudy } from './form-steps/step-4-case-study';
import { StepConfirmation } from './form-steps/step-5-confirmation';

const stepComponents = [
  StepPersonalInfo,
  StepDepartment,
  StepEssays,
  StepCaseStudy,
  StepConfirmation,
];


export function RecruitmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const form = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    mode: 'onTouched',
  });

  const { trigger, handleSubmit, formState: { isSubmitting } } = form;

  useEffect(() => {
    const mobileStepCounter = document.getElementById('mobile-step-counter');
    if (mobileStepCounter) {
        mobileStepCounter.textContent = `${currentStep + 1}`;
    }
  }, [currentStep]);


  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });
    if (!output) {
      const formState = form.formState;
      const firstErrorField = (fields || []).find(field => formState.errors[field as keyof ApplicationData]);
      if (firstErrorField) {
        const el = document.getElementById(firstErrorField);
        const inputGroup = el?.closest('.input-group');
        if (inputGroup) {
            inputGroup.classList.add('shake');
            setTimeout(() => inputGroup.classList.remove('shake'), 500);
        }
      }
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function processSubmit(data: ApplicationData) {
    // TODO: Ganti dengan URL API SheetDB.io Anda
    const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/YOUR_API_ID_HERE';

    try {
        const response = await fetch(SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ...data,
              // Add a timestamp for when the data was submitted
              submittedAt: new Date().toISOString(),
            })
        });

        if (response.ok) {
            console.log('Form data submitted to SheetDB:', data);
            setShowModal(true);
        } else {
            console.error('Gagal mengirim ke SheetDB:', await response.json());
            alert('Maaf, terjadi kesalahan saat mengirimkan data Anda. Silakan coba lagi.');
        }
    } catch (error) {
        console.error('Error saat mengirim ke SheetDB:', error);
        alert('Maaf, terjadi kesalahan koneksi. Silakan periksa koneksi internet Anda dan coba lagi.');
    }
  }
  
  const closeModal = () => {
      setShowModal(false);
      setCurrentStep(0);
      form.reset();
  }

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <>
      <div className="bg-white w-full max-w-4xl rounded-[2rem] shadow-soft overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100 relative">
        
        {/* Sidebar Progress (Desktop) */}
        <div className="hidden md:flex w-1/3 bg-black text-white p-10 flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-tighter mb-2">DAGM.</h1>
                <p className="text-white/60 text-sm font-medium">Dewan Aspirasi Generasi Muda</p>
            </div>

            <div className="relative z-10 space-y-8">
              {steps.map((step, index) => (
                <div key={step.id} className={cn("step-item flex items-center gap-4 transition-opacity", currentStep >= index ? 'opacity-100' : 'opacity-40')}>
                    <div className={cn("w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold step-number", 
                        currentStep === index ? 'bg-white text-black' : 
                        currentStep > index ? 'bg-white/20 text-white' : ''
                    )}>
                        {currentStep > index ? '✓' : index + 1}
                    </div>
                    <span className="text-sm font-semibold tracking-wide">{step.name}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 text-xs text-white/40">
                &copy; 2024 Recruitment Portal
            </div>
        </div>

        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
            <h1 className="text-2xl font-bold tracking-tight">DAGM.</h1>
            <div className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full">
                Step <span id="mobile-step-counter">1</span>/5
            </div>
        </div>

        {/* Form Content Area */}
        <div className="flex-1 p-6 md:p-12 relative overflow-y-auto max-h-[90vh] md:max-h-[800px]">
          <FormProvider {...form}>
            <form id="recruitmentForm" onSubmit={handleSubmit(processSubmit)} noValidate autoComplete="off">
                
                {steps.map((step, index) => (
                  <div key={step.id} className={cn('form-step', currentStep === index && 'active')} data-step={index + 1}>
                      {currentStep === index && <CurrentStepComponent />}
                  </div>
                ))}
                
                {/* CONTROL BUTTONS */}
                <div className="mt-12 flex justify-between items-center">
                    <button type="button" id="prevBtn" onClick={prevStep} className={cn("text-gray-400 font-bold text-sm uppercase tracking-widest hover:text-black transition-colors px-4 py-2", currentStep === 0 && 'hidden')}>
                        Kembali
                    </button>
                    
                    {currentStep < steps.length - 1 ? (
                      <button type="button" id="nextBtn" onClick={nextStep} className="bg-black text-white rounded-full px-8 py-4 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                          Lanjut
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                      </button>
                    ) : (
                      <button type="submit" id="submitBtn" disabled={isSubmitting} className="bg-black text-white rounded-full px-8 py-4 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          {isSubmitting ? 'Mengirim...' : 'Kirim Formulir'}
                      </button>
                    )}
                </div>

            </form>
          </FormProvider>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <div id="successModal" className={cn("modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-500", showModal ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("bg-white p-10 rounded-3xl max-w-sm w-full shadow-2xl transform transition-all duration-300 text-center", showModal ? "scale-100" : "scale-90")}>
            <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 text-black">Berhasil Terkirim!</h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">Terima kasih telah mendaftar. Kami telah menerima datamu dan akan segera menghubungi via WhatsApp.</p>
            <button onClick={closeModal} className="w-full bg-gray-100 text-black font-bold py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300">
                Selesai
            </button>
        </div>
    </div>
    </>
  );
}
