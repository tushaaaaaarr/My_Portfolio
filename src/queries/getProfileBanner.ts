// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

// Hardcoded profile banner data - no need for DatoCMS
const profileBannerData: ProfileBanner = {
  headline: 'GenAI Software Engineer | Agentic AI Systems | Full-Stack Engineer',
  profileSummary:
    'GenAI-focused Software Engineer with 2.5+ years of experience designing and building production-grade Agentic AI platforms, Python-based multi-agent systems, Self-Healing RAG pipelines, and AI-powered IT Operations solutions. Skilled in Python, FastAPI, LangGraph, Angular, CopilotKit, AG-UI, PostgreSQL, ChromaDB, Docker, and Azure Kubernetes Service (AKS), with expertise in LLM orchestration, Prompt Engineering, Semantic Search, Vector Embeddings, AI workflow automation, and scalable backend architecture.',
  linkedinLink: 'https://linkedin.com/in/tushar-dev',
  resumeLink: {
    url: 'https://drive.google.com/file/d/1UTply8ghftL5NcqYffpyp1sCVcz_yZX8/view?usp=sharing',
  },
  backgroundImage: {
    url: 'https://via.placeholder.com/1920x1080?text=Portfolio+Background',
  },
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
