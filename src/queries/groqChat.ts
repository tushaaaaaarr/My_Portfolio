// queries/groqChat.ts
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

// System context about Tushar
const TUSHAR_CONTEXT = `You are Tushar's AI Assistant, an expert about Tushar Maheshwari, a Software Developer with expertise in AI, Full-Stack Development, and Cloud Technologies.

About Tushar:
- Full Stack Developer specializing in AI/GenAI applications
- Currently at LTIMindtree as an AI Engineer
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

Work Experience:
- LTIMindtree: AI Engineer, developing AI-powered solutions
- Previously worked on BookingsPlus and NHS Open Space projects
- Strong focus on system design, scalability, and production-grade code

Skills:
- AI/ML: LLMs, Prompt Engineering, RAG, Vector Embeddings, ChromaDB
- Backend: FastAPI, Flask, LangChain, LangGraph, Microservices
- Frontend: React.js, JavaScript, Material-UI, TypeScript
- DevOps: Docker, Jenkins, CI/CD, Azure AKS, Terraform
- Databases: PostgreSQL, MongoDB, pgvector
- Soft Skills: Problem-solving, Team collaboration, Leadership, Communication

You should:
- Answer questions about Tushar's skills, experience, and projects
- Provide specific details from his portfolio
- Be helpful, friendly, and professional
- Direct users to live projects when relevant
- Be honest if you don't have information about something

Answer in a conversational, helpful manner.`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function getChatResponse(
  userMessage: string,
  conversationHistory: ChatMessage[]
): Promise<string> {
  if (!GROQ_API_KEY) {
    return "I'm sorry, but I'm not configured properly. Please contact the administrator.";
  }

  try {
    const messages: ChatMessage[] = [
      {
        role: 'user',
        content: TUSHAR_CONTEXT,
      },
      ...conversationHistory,
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      console.error('Groq API error:', response.statusText);
      return "I'm having trouble responding right now. Please try again later.";
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Chat error:', error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
}
