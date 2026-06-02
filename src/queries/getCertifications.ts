// queries/getCertifications.ts
import { Certification } from '../types';

// Hardcoded certifications data - no need for DatoCMS
const certificationsData: Certification[] = [
  {
    title: 'Anthropic Claude 101',
    issuer: 'Anthropic',
    issuedDate: '2024',
    link: 'https://verify.skilljar.com/c/ir3ekqfiya44',
    iconName: 'anthropic',
  },
  {
    title: 'Anthropic Claude Code 101',
    issuer: 'Anthropic',
    issuedDate: '2024',
    link: 'https://verify.skilljar.com/c/fzbyf6vmj8xo',
    iconName: 'anthropic',
  },
  {
    title: 'IGNITE - AWS and DevOps',
    issuer: 'LTIMindtree',
    issuedDate: '2023',
    link: 'https://www.ltimindtree.com',
    iconName: 'aws',
  },
  {
    title: 'Best Techie Award',
    issuer: 'LTIM Academy',
    issuedDate: '2023',
    link: '',
    iconName: 'university',
  },
];

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
