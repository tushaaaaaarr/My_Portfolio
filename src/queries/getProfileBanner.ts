// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

// Hardcoded profile banner data - no need for DatoCMS
const profileBannerData: ProfileBanner = {
  headline: 'GenAI Software Engineer | Backend | Multi-Agent AI Systems Specialist',
  profileSummary:
    'GenAI-focused Software Engineer with 2.5+ years of experience building Python-based multi-agent AI systems, Self-Healing RAG pipelines, high-performance REST APIs, and cloud-native AI platforms for intelligent SDLC automation in Agile environments. Skilled in FastAPI, LangGraph, ChromaDB, PostgreSQL, Docker, and Kubernetes (AKS), with expertise in LLM orchestration, Prompt Engineering, Semantic Search, Vector Embeddings, workflow automation, and scalable backend architecture.',
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
