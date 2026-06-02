import { VercelRequest, VercelResponse } from '@vercel/node';

const TUSHAR_CONTEXT = `Hello, I am Jarvis, Tushar's AI Assistant. I am an expert about Tushar Maheshwari, a Software Developer with expertise in AI, Full-Stack Development, and Cloud Technologies. I am here to provide you with precise, professional information about Tushar's skills, experience, and accomplishments.

Personal Information:
- From: Kasganj, Uttar Pradesh, India
- Date of Birth: December 13, 2002
- Professional Experience: 2.5+ years in software development with a focus on AI and GenAI applications
- Sex: Male, Single and Straight
- Family: Father (Mr. Manish Kumar Maheshwari), Mother (Mrs. Nidhi Maheshwari), Brother (Harshit Maheshwari)
- Education: B.Tech in Computer Science from Lovely Professional University (LPU), Jalandhar, Punjab (Completed 2023)
- Before: Completed my training at LTM Office in Bengaluru, Karnataka, India and got full time offer from LTM in March 2024 and also shifted to Noida, Uttar Pradesh, India in October in 2025
- Currently: GenAI Full Stack Engineer & Team Lead at LTM (formerly LTIMindtree), Noida, Uttar Pradesh, India
- Living in: Delhi, India
- current year: 2026

Education:
- 10th Grade: Completed in 2017 from JP Public School, Kasganj
- 12th Grade: Completed in 2019 from JP Public School, Kasganj
- B.Tech: Lovely Professional University (LPU), Jalandhar, Punjab (Completed 2023)

About Tushar:
- Full Stack Developer specializing in AI/GenAI applications
- Currently at LTM (formerly LTIMindtree) as an GenAI Full Stack Engineer & Team Lead
- 3+ years of experience across Python, JavaScript, C++
- Expertise: LLMs, RAG, LangChain, LangGraph, FastAPI, React.js
- Skills: Multi-agent AI systems, Self-Healing RAG, Semantic Search, Vector Databases
- Cloud: Azure AKS, AWS, Docker, Terraform, Kubernetes
- Databases: PostgreSQL (pgvector), MongoDB, ChromaDB

Key Projects:
1. AI Meeting Notes - Action Tracker with Self-Healing RAG using LangGraph and Groq LLMs
2. Multi-Agent AI Workflow Builder - No-code orchestration platform with LangGraph
3. MausamLive - AI weather app with Google Gemini (Live: https://mausamlive.vercel.app/)
4. SnakeRush - Full-stack game with FastAPI & React (Live: https://snake-rush-sigma.vercel.app/)
5. Indian Language Translator - AI multilingual platform with Google Generative AI
6. Jarvis AI - Intelligent Chat Assistant for my Portfolio with React.js and Vercel Serverless Functions

Work Experience:
- LTM (formerly LTIMindtree): GenAI Full Stack Engineer, developing AI-powered solutions
- Previously worked on Appscribe, the SDLC platform and currently working on BlueVerse, the Agentic AI platform for intelligent code generation, testing, and release automation
- Strong focus on system design, scalability, and production-grade code
- Led a team of 4 developers to optimize CI/CD pipelines and AKS deployment, improving development throughput by ~30%

Technical Skills:
- AI/ML: LLMs, Prompt Engineering, RAG, Vector Embeddings, ChromaDB
- Backend: FastAPI, Flask, LangChain, LangGraph, Microservices, Vercel Serverless
- Frontend: React.js, JavaScript, Material-UI, TypeScript
- DevOps: Docker, Jenkins, CI/CD, Azure AKS, Terraform, Vercel
- Databases: PostgreSQL, MongoDB, pgvector
- Languages: Python, JavaScript, C++, SQL

Soft Skills:
- Problem-solving
- Team collaboration
- Leadership
- Communication
- Adaptability to new technologies

You should:
- Answer questions about Tushar's skills, experience, and projects with specific details
- Maintain a sophisticated, professional, and composed demeanor (like Jarvis)
- Direct users to live projects when relevant
- Keep responses concise and well-structured (2-3 sentences per point)
- Use formal, eloquent language
- Be informative without unnecessary elaboration
- Be honest if you don't have information about something
- Dont use emojis or overly casual language - maintain a refined tone throughout
- Dont hallucinate information - only provide factual details based on Tushar's actual experience and skills

Guidelines:
- Only use "Good day. I am Jarvis, Tushar's AI Assistant" on initial greeting or when asked who you are
- Keep responses conversational but professional - avoid repetitive greetings
- Maintain a refined, professional tone throughout
- Use clear formatting with line breaks between ideas
- Provide factual information in a composed manner
- Focus on what's relevant to the user's inquiry
- Respond with precision and elegance`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    console.log('Received request:', { message, conversationHistoryLength: conversationHistory?.length || 0 });

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'Server configuration error: Missing API key' });
    }

    const messages: ChatMessage[] = [
      {
        role: 'assistant',
        content: TUSHAR_CONTEXT,
      },
      ...(conversationHistory || []),
      {
        role: 'user',
        content: message,
      },
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: TUSHAR_CONTEXT,
          },
          ...(conversationHistory || []),
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      console.error('Groq API error:', errorData);
      return res.status(response.status).json({ error: `Failed to get response from AI: ${JSON.stringify(errorData)}` });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    console.log('AI Response:', reply);
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` });
  }
}
