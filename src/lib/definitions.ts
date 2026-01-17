import type { LucideIcon } from 'lucide-react';
import {
  User,
  Building,
  FileText,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

export type Step = {
  id: string;
  name: string;
  icon: LucideIcon;
  fields?: string[];
};

export const steps: Step[] = [
  {
    id: 'personal',
    name: 'Personal Information',
    icon: User,
    fields: ['name', 'email', 'phone', 'background'],
  },
  {
    id: 'department',
    name: 'Department Choice',
    icon: Building,
    fields: ['department'],
  },
  {
    id: 'essays',
    name: 'Essays',
    icon: FileText,
    fields: ['essayReason', 'essayProgram', 'essayMotivation'],
  },
  {
    id: 'case-study',
    name: 'Case Study',
    icon: Lightbulb,
    fields: ['caseStudyPolicy', 'caseStudyTime'],
  },
  {
    id: 'confirmation',
    name: 'Confirmation',
    icon: CheckCircle,
    fields: ['commitment'],
  },
];

export const departments = [
  {
    id: 'policy',
    name: 'Public Policy and Governance',
    description:
      'Focus on analyzing, creating, and implementing public policies.',
  },
  {
    id: 'international',
    name: 'International Relations',
    description: 'Engage with global issues and diplomatic strategies.',
  },
  {
    id: 'technology',
    name: 'Technology and Innovation',
    description: 'Drive progress through cutting-edge tech solutions.',
  },
  {
    id: 'communications',
    name: 'Communications and Media',
    description: 'Shape public perception and manage information flow.',
  },
];
