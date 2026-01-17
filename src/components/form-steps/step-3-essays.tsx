'use client';

import { useFormContext } from 'react-hook-form';
import { useEffect, useRef } from 'react';

function AutoResizeTextarea(props: React.ComponentProps<'textarea'>) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        resize();
    }, []);

    return <textarea ref={textareaRef} {...props} onInput={resize} />;
}

export function StepEssays() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Ceritakan Idenya</h2>
        <p className="text-gray-500">Tunjukkan visi dan misimu melalui tulisan.</p>
      </div>

      <div className="space-y-10">
        <div className="input-group">
          <AutoResizeTextarea id="reason" {...register('reason')} rows={1} className="input-field resize-none h-auto overflow-hidden" placeholder=" " />
          <label htmlFor="reason" className="input-label">Alasan memilih Departemen tersebut?</label>
          {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason.message as string}</p>}
        </div>

        <div className="input-group">
          <AutoResizeTextarea id="program" {...register('program')} rows={1} className="input-field resize-none h-auto overflow-hidden" placeholder=" " />
          <label htmlFor="program" className="input-label">Program kerja apa yang akan kamu buat?</label>
          {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message as string}</p>}
        </div>

        <div className="input-group">
          <AutoResizeTextarea id="motivation" {...register('motivation')} rows={1} className="input-field resize-none h-auto overflow-hidden" placeholder=" " />
          <label htmlFor="motivation" className="input-label">Apa motivasi hidup kamu?</label>
          {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message as string}</p>}
        </div>
      </div>
    </>
  );
}
