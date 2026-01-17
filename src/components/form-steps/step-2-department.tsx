'use client';

import { useFormContext } from 'react-hook-form';
import { departments } from '@/lib/departments';

export function StepDepartment() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Pilih Divisi</h2>
        <p className="text-muted-foreground">Pilih tempat dimana kamu ingin bertumbuh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((dept) => (
          <div className="dept-card-wrapper" key={dept.id}>
            <input
              type="radio"
              id={dept.id}
              value={dept.id}
              {...register('department')}
            />
            <label htmlFor={dept.id} className="dept-card group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <dept.icon />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-muted check-icon bg-card flex items-center justify-center">
                  <div className="w-3 h-3 bg-foreground rounded-full"></div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{dept.name}</h3>
              <p className="text-sm text-muted-foreground dept-desc leading-relaxed">{dept.description}</p>
            </label>
          </div>
        ))}
      </div>
      {errors.department && <p className="text-red-500 text-xs mt-2">{errors.department.message as string}</p>}
    </>
  );
}
