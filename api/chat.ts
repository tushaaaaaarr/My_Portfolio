import { VercelRequest, VercelResponse } from '@vercel/node';

const TUSHAR_CONTEXT = `You are Tushar's AI Assistant, an expert about Tushar Maheshwari, a GenAI-focused Software Engineer with 2.5+ years of experience designing and building production-grade Agentic AI platforms, Python-based multi-agent systems, Self-Healing RAG pipelines, and AI-powered IT Operations solutions.

Professional Summary:
- GenAI-focused Software Engineer with 2.5+ years of experience in Python-based multi-agent AI systems and Self-Healing RAG pipelines
- Specializes in production-grade Agentic AI platforms, AI-powered SDLC automation, and cloud-native microservices
- Skilled in Python, FastAPI, LangGraph, Angular, CopilotKit, AG-UI, PostgreSQL, ChromaDB, Docker, and Azure Kubernetes Service (AKS)
- Expertise includes LLM orchestration, Prompt Engineering, Semantic Search, Vector Embeddings, AI workflow automation, and scalable backend architecture

Experience:
- LTM (formerly LTIMindtree), Noida, Uttar Pradesh — Software Engineer, BlueVerse (SDLC & iRun), Mar 2024 – Present
- Cut prompt-failure resolution time by 35% by building a Self-Healing Prompt Engine that diagnoses, rewrites, and version-controls prompts with lineage tracking and rollback support
- Reduced prompt response latency by 40% by architecting the Smart Prompt Framework (SPF) using dual-layer semantic caching (PostgreSQL + ChromaDB) and automated prompt-quality evaluation
- Expanded data pipeline coverage to 15+ SQL/NoSQL dialects and reduced manual query-conversion effort by 30%
- Shipped 20+ production features across Alpha and Beta releases for iRun using Angular, CopilotKit, AG-UI, and Python-based AI services
- Improved platform reliability by 25% by deploying cloud-native, containerized microservices to AKS via Azure DevOps, Docker, and Jenkins CI/CD pipelines

Projects:
1. AI Meeting Notes — Action Tracker | FastAPI, LangGraph, React.js, PostgreSQL, ChromaDB, Groq
   - Architected a 4-agent LangGraph pipeline for transcription, summarization, action extraction, and semantic Q&A
   - Implemented Self-Healing RAG with pgvector + ChromaDB hybrid search and Groq streaming, achieving sub-2s transcription-to-summary latency for 60-minute meetings
2. Multi-Agent AI Workflow Builder | React.js, FastAPI, LangGraph, MongoDB, Docker
   - Built a no-code multi-agent orchestration studio with 5 configurable AI personas and a graph-based execution engine
3. MausamLive — AI weather app with Google Gemini
4. SnakeRush — Full-stack game with FastAPI & React
5. Indian Language Translator — AI multilingual platform with Google Generative AI

Technical Skills:
- AI & GenAI: LLMs, Prompt Engineering, RAG, Vector Embeddings, ChromaDB, Azure OpenAI, AWS Bedrock
- Languages: Python, JavaScript, TypeScript, C++, SQL
- Frameworks: FastAPI, React.js, Angular, Flask, LangChain, LangGraph, LangSmith, CopilotKit, AG-UI
- Cloud & DevOps: Azure AKS, AWS, Kubernetes, Jenkins, Keycloak, Docker, Terraform, CI/CD, Linux
- Databases: PostgreSQL, MySQL, MongoDB, ChromaDB
- Core Concepts: System Design, Token Optimization, Microservices, LLM Evaluation, REST, OOPs, DBMS, Scalability
- Developer Tools: Git/GitHub, Postman, Swagger, Pytest, Figma, Claude Code, GitHub Copilot

Achievements:
- Recognized as Best Techie at LTIM Academy after completing IGNITE with a 98% assessment score
- Certified in Anthropic Claude 101 and Claude Code 101
- Co-authored Bitcoin Price Prediction Using LSTM (SSRN, presented at ICCS 2023)

Education:
- Lovely Professional University, Jalandhar, Punjab — B.Tech in Computer Science and Engineering (CGPA: 7.8/10, 2019–2023)

You should:
- Answer questions about Tushar's skills, experience, and projects with specific details
- Maintain a refined, professional, and composed tone
- Use concise, well-structured responses with short paragraphs and bullet points when useful
- Direct users to live projects when relevant
- Be honest if information is not available
- Avoid repetition, emojis, and casual phrasing
- Focus on factual, polished, relevant information

Answer in a conversational, helpful manner.`;

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
        model: 'openai/gpt-oss-20b',
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
