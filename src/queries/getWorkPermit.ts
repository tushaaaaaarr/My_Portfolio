// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

// Hardcoded work permit data - no need for DatoCMS
const workPermitData: WorkPermit = {
  visaStatus: 'Skilled Worker Visa (Tier 2)',
  expiryDate: new Date('2026-12-31'),
  summary: '',
  additionalInfo: 'Currently authorized to work in the India with full employment rights.'
};

export async function getWorkPermit(): Promise<WorkPermit> {
  return workPermitData;
}
