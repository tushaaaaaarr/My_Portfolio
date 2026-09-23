// queries/getContactMe.ts
import { ContactMe } from '../types';

// Hardcoded contact data - no need for DatoCMS
const contactMeData: ContactMe = {
  name: 'Tushar Maheshwari',
  title: 'GenAI-Focused Software Engineer',
  email: 'tushar.mah.0111@gmail.com',
  phoneNumber: '+91-8535035822',
  linkedinLink: 'https://linkedin.com/in/tushar-dev',
  companyUniversity: 'LTM (formerly LTIMindtree)',
  summary:
    'GenAI-focused Software Engineer with 2.5+ years of experience designing and building production-grade Agentic AI platforms, Python-based multi-agent systems, Self-Healing RAG pipelines, and AI-powered IT Operations solutions.',
  profilePicture: {
    url: 'https://via.placeholder.com/400x400?text=Tushar+Maheshwari',
  },
};

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
