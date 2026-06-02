// queries/getProjects.ts
import { Project } from '../types';
import mausamlive from '../images/mmlive.png';
import meetingnotes from '../images/Aimeeting.png';
import snakerush from '../images/snakerush.png';
import bhashaai from '../images/indiantranslator.png';
import multiagent from '../images/multi.png';
import jarvisai from '../images/jarvis ai.png';

// Hardcoded projects data - no need for DatoCMS
const projectsData: Project[] = [
  {
    title: 'AI Meeting Notes – Action Tracker Platform with Self-Healing RAG',
    description:
      'AI-powered meeting intelligence platform that converts transcripts into summaries, action items, and searchable insights. Features include multi-agent LangGraph workflow, self-healing RAG with grounding validation, semantic search with vector embeddings, TTL caching, AI chat interface, and SaaS dashboard. Built with FastAPI, React.js, PostgreSQL, ChromaDB, and Groq LLMs for production-grade reliability.',
    techUsed: 'React.js, Tailwind CSS, FastAPI, Python, LangGraph, LangChain, PostgreSQL, pgvector, ChromaDB, Groq',
    image: {
      url: meetingnotes, // Placeholder image - replace with actual project image
    },
  },
  {
    title: 'Multi-Agent AI Workflow Builder – No-Code Orchestration Studio',
    description:
      'Enterprise no-code platform for composing multi-agent AI workflows via drag-and-drop. Features 5 configurable AI personas, graph-based execution engine with dependency management, real-time WebSocket streaming, MongoDB persistence, workflow versioning, and visual dashboard with monitoring. Abstracts LangGraph complexity while maintaining production-grade reliability and scalability.',
    techUsed: 'React.js, TypeScript, Tailwind CSS, FastAPI, Python, LangGraph, LangChain, MongoDB, WebSocket, Docker',
    image: {
      url: multiagent, // Placeholder image - replace with actual project image
    },
  },
  {
    title: 'Jarvis AI – Intelligent Chat Assistant for Portfolio',
    description:
      'AI chat assistant built with React.js frontend and FastAPI backend, leveraging Groq LLMs for conversational responses. Features include context-aware dialogue, multi-turn conversation history, and dynamic response generation based on user input. Demonstrates integration of cutting-edge AI technology into a responsive web application.',
    techUsed: 'React.js, FastAPI, Python, Groq LLMs, WebSocket',
    image: {
      url: jarvisai, // Placeholder image - replace with actual project image
    },
  },
  {
    title: 'MausamLive – AI-Powered Weather & Air Quality Application',
    description:
      'Developed an AI-powered weather and air quality application that delivers real-time forecasts, accurate AQI insights, and personalized health recommendations using Google\'s Generative AI (Gemini). Features include real-time weather data, AI weather summaries, health & safety advisories, EPA-based AQI calculation, 5-day & hourly forecasts, activity recommendations, light/dark mode, location memory with geolocation, and robust error handling. Demonstrates full-stack development, AI integration, and API engineering.',
    techUsed: 'HTML5, CSS3, JavaScript, Node.js, OpenWeather API, Google Gemini AI, Vercel',
    image: {
      url: mausamlive,
    },
    liveLink: 'https://mausamlive.vercel.app/',
  },
  {
    title: 'SnakeRush – Advanced Full-Stack Snake Game',
    description:
      'Developed a complete full-stack application combining a Python FastAPI backend with a React frontend. Features dynamic difficulty scaling, persistent leaderboard with thread-safe operations, real-time game loop with smooth 60 FPS animations, mobile-first design with swipe & touch controls, collision detection, and multi-player score tracking. Supports concurrent users with efficient backend handling and clean architecture with separation of concerns.',
    techUsed: 'Python, FastAPI, React, HTML5 Canvas, REST APIs, Vercel, Render',
    image: {
      url: snakerush,
    },
    liveLink: 'https://snake-rush-sigma.vercel.app/',
  },
  {
    title: 'Bhasha AI – Indian Language Translator (AI-Driven Multilingual Platform)',
    description:
      'Developed a state-of-the-art web application that seamlessly translates text between various Indian languages (Hindi, Bengali, Telugu, Tamil, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Urdu) and English using Google\'s Generative AI. Built with FastAPI backend and React frontend with Material-UI for a modern, responsive interface. Features include real-time processing, language swap function, light/dark mode toggle, and robust error handling with loading states.',
    techUsed: 'React, JavaScript, Material-UI, Axios, FastAPI, Python, Google Generative AI',
    image: {
      url: bhashaai,
    },
  },
];

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
