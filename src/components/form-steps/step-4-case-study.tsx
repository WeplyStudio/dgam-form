'use client';

import { useFormContext } from 'react-hook-form';

export function StepCaseStudy() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Studi Kasus</h2>
            <p className="text-gray-500">Berpikir kritis untuk solusi nyata.</p>
        </div>

        <div className="space-y-10">
            <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Kasus 01: Kebijakan Publik</p>
                <div className="input-group">
                    <label className="block text-lg font-medium mb-3 text-black leading-snug">Apa langkah konkret DAGM untuk memastikan suara anak muda memengaruhi kebijakan publik?</label>
                    <textarea id="critical1" {...register('critical1')} rows={3} className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-black/10 transition-all text-gray-800 placeholder-gray-400" placeholder="Tulis gagasanmu di sini..."></textarea>
                    {errors.critical1 && <p className="text-red-500 text-xs mt-1">{errors.critical1.message as string}</p>}
                </div>
            </div>

            <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Kasus 02: Manajemen Waktu</p>
                <div className="input-group">
                    <label className="block text-lg font-medium mb-3 text-black leading-snug">Bagaimana kamu membagi waktu antara DAGM dan kesibukan lainnya?</label>
                    <textarea id="critical2" {...register('critical2')} rows={3} className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-black/10 transition-all text-gray-800 placeholder-gray-400" placeholder="Tulis strategimu di sini..."></textarea>
                    {errors.critical2 && <p className="text-red-500 text-xs mt-1">{errors.critical2.message as string}</p>}
                </div>
            </div>
        </div>
    </>
  );
}
