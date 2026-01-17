export type Step = {
  id: string;
  name: string;
  fields?: string[];
};

export const steps: Step[] = [
  {
    id: 'personal',
    name: 'Data Diri',
    fields: ['fullName', 'birthPlace', 'birthDate', 'school', 'whatsapp', 'district', 'regency'],
  },
  {
    id: 'department',
    name: 'Departemen',
    fields: ['department'],
  },
  {
    id: 'essays',
    name: 'Esai',
    fields: ['reason', 'program', 'motivation'],
  },
  {
    id: 'case-study',
    name: 'Studi Kasus',
    fields: ['critical1', 'critical2'],
  },
  {
    id: 'confirmation',
    name: 'Komitmen',
    fields: ['commitment'],
  },
];
