// queries/getTimeline.ts
import { TimelineItem } from '../types';

// Hardcoded timeline data - no need for DatoCMS
const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'LTM (formerly LTIMindtree), Noida, Uttar Pradesh',
    title: 'Software Engineer — BlueVerse (SDLC & iRun)',
    techStack: 'FastAPI, LangGraph, Angular, CopilotKit, AG-UI, PostgreSQL, ChromaDB, Docker, AKS, Azure DevOps, Jenkins',
    summaryPoints: [
      'Cut prompt-failure resolution time by 35% by building a Self-Healing Prompt Engine that autonomously diagnoses, rewrites, and version-controls LLM prompts using LLM orchestration, with lineage tracking and rollback support.',
      'Reduced prompt response latency by 40% by architecting the Smart Prompt Framework (SPF), a prompt engineering microservice using dual-layer semantic caching (PostgreSQL + ChromaDB) and automated prompt-quality evaluation.',
      'Expanded data pipeline coverage to 15+ SQL/NoSQL dialects by engineering a multi-agent Data Engineering pipeline, reducing manual query-conversion effort by 30%.',
      'Shipped 20+ production features across Alpha and Beta releases by building agent-streaming and real-time UI capabilities for iRun using Angular, CopilotKit, AG-UI, and Python-based AI services.',
      'Improved platform reliability by 25% by deploying cloud-native, containerized microservices to Azure Kubernetes Service (AKS) via Azure DevOps, Docker, and Jenkins CI/CD pipelines, resolving 50+ production incidents.',
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
