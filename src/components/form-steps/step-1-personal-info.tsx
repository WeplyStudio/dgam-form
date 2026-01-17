'use client';

import { useFormContext } from 'react-hook-form';

export function StepPersonalInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">Siapa namamu?</h2>
        <p className="text-gray-500">Mari mulai dengan perkenalan singkat.</p>
      </div>

      <div className="space-y-6">
        <div className="input-group">
          <input type="text" id="fullName" {...register('fullName')} className="input-field" placeholder=" " />
          <label htmlFor="fullName" className="input-label">Nama Lengkap</label>
          {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName.message as string}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="input-group">
            <input type="text" id="birthPlace" {...register('birthPlace')} className="input-field" placeholder=" " />
            <label htmlFor="birthPlace" className="input-label">Tempat Lahir</label>
             {errors.birthPlace && <p className="text-destructive text-xs mt-1">{errors.birthPlace.message as string}</p>}
          </div>
          <div className="input-group">
            <input type="date" id="birthDate" {...register('birthDate')} className="input-field" placeholder=" "/>
            <label htmlFor="birthDate" className="input-label">Tanggal Lahir</label>
             {errors.birthDate && <p className="text-destructive text-xs mt-1">{errors.birthDate.message as string}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="input-group">
            <input type="text" id="school" {...register('school')} className="input-field" placeholder=" " />
            <label htmlFor="school" className="input-label">Sekolah / Universitas</label>
            {errors.school && <p className="text-destructive text-xs mt-1">{errors.school.message as string}</p>}
          </div>
          <div className="input-group">
            <input type="tel" id="whatsapp" {...register('whatsapp')} className="input-field" placeholder=" " />
            <label htmlFor="whatsapp" className="input-label">Nomor WhatsApp</label>
            {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp.message as string}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="input-group">
            <input type="text" id="district" {...register('district')} className="input-field" placeholder=" " />
            <label htmlFor="district" className="input-label">Kecamatan</label>
            {errors.district && <p className="text-destructive text-xs mt-1">{errors.district.message as string}</p>}
          </div>
          <div className="input-group">
            <input type="text" id="regency" {...register('regency')} className="input-field" placeholder=" " />
            <label htmlFor="regency" className="input-label">Kab/Provinsi</label>
            {errors.regency && <p className="text-destructive text-xs mt-1">{errors.regency.message as string}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
