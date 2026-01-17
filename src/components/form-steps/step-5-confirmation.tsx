'use client';

import { useFormContext } from 'react-hook-form';

export function StepConfirmation() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Langkah Terakhir</h2>
        <p className="text-gray-500">Konfirmasi kesiapanmu bergabung.</p>
      </div>

      <p className="text-xl font-medium mb-8 text-black">Apakah kamu siap berkontribusi penuh untuk DAGM?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="dept-card-wrapper">
          <input type="radio" id="readyYes" value="Siap, yakin" {...register('commitment')} />
          <label htmlFor="readyYes" className="dept-card text-center items-center justify-center py-8">
            <span className="text-3xl mb-2">🔥</span>
            <span className="text-xl font-bold">Siap, Yakin!</span>
            <span className="text-sm text-gray-400 mt-1">Saya akan memberikan 100%</span>
          </label>
        </div>

        <div className="dept-card-wrapper">
          <input type="radio" id="readyNo" value="Siap, tidak" {...register('commitment')} />
          <label htmlFor="readyNo" className="dept-card text-center items-center justify-center py-8 opacity-70 hover:opacity-100">
            <span className="text-3xl mb-2">🤔</span>
            <span className="text-xl font-bold">Masih Ragu</span>
            <span className="text-sm text-gray-400 mt-1">Saya perlu berpikir lagi</span>
          </label>
        </div>
      </div>
      {errors.commitment && <p className="text-red-500 text-xs mt-2">{errors.commitment.message as string}</p>}
    </>
  );
}
