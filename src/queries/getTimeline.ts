// queries/getTimeline.ts
import { TimelineItem } from '../types';

// Hardcoded timeline data - no need for DatoCMS
const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'LTM (formerly LTIMindtree), Noida, Uttar Pradesh',
    title: 'Software Engineer — BlueVerse (Agentic AI SDLC Platform)',
    techStack: 'FastAPI, LangGraph, ChromaDB, PostgreSQL, Docker, AKS, Azure DevOps, Jenkins',
    summaryPoints: [
      'Core contributor to BlueVerse, an Agentic AI platform for intelligent code generation, testing, and release automation.',
      'Architected Smart Prompt Framework with dual-layer caching and prompt quality evaluation engine.',
      'Implemented Self-Healing Prompt Engine using Chain-of-Thought reasoning with lineage tracking.',
      'Engineered multi-agent Data Engineering pipeline supporting 15+ SQL/NoSQL dialects.',
      'Improved development throughput by ~30% through AKS deployment and CI/CD optimization as Team Lead.',
    ],
    dateRange: 'Mar 2024 – Present',
  },
  {
    timelineType: 'education',
    name: 'Lovely Professional University, Jalandhar, Punjab',
    title: 'Bachelor of Technology in Computer Science and Engineering',
    techStack: '',
    summaryPoints: [
      'CGPA: 7.8/10',
    ],
    dateRange: '2019 – 2023',
  },
  {
    timelineType: 'education',
    name: 'JP Public School, Kasganj, Uttar Pradesh',
    title: 'Senior Secondary (12th) — PCM',
    techStack: '',
    summaryPoints: [],
    dateRange: '2019',
  },
  {
    timelineType: 'education',
    name: 'JP Public School, Kasganj, Uttar Pradesh',
    title: 'Matriculation (10th)',
    techStack: '',
    summaryPoints: [],
    dateRange: '2017',
  },
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
