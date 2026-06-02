// queries/getSkills.ts
import { Skill } from '../types';

// Hardcoded skills data - no need for DatoCMS
const skillsData: Skill[] = [
  // AI & GenAI
  { name: 'LLMs', category: 'AI & GenAI', description: 'Large Language Models including GPT-4, Claude, and open-source alternatives', icon: 'FaPython' },
  { name: 'Prompt Engineering', category: 'AI & GenAI', description: 'Designing and optimizing prompts for effective LLM applications', icon: 'SiTypescript' },
  { name: 'RAG', category: 'AI & GenAI', description: 'Retrieval-Augmented Generation for knowledge-grounded AI systems', icon: 'FaDatabase' },
  { name: 'Vector Embeddings', category: 'AI & GenAI', description: 'Creating and managing semantic embeddings with pgvector', icon: 'FaDatabase' },
  { name: 'ChromaDB', category: 'AI & GenAI', description: 'Vector database for similarity search and semantic retrieval', icon: 'SiPostgresql' },
  { name: 'Azure OpenAI', category: 'AI & GenAI', description: 'Deploying managed Azure OpenAI models', icon: 'FaMicrosoft' },
  { name: 'AWS Bedrock', category: 'AI & GenAI', description: 'Accessing foundational models on AWS', icon: 'FaAws' },

  // Languages
  { name: 'Python', category: 'Languages', description: 'Primary language for AI/ML and backend development', icon: 'FaPython' },
  { name: 'JavaScript', category: 'Languages', description: 'Frontend and full-stack web development', icon: 'SiTypescript' },
  { name: 'C++', category: 'Languages', description: 'Systems programming and performance-critical code', icon: 'FaCode' },
  { name: 'SQL', category: 'Languages', description: 'Database querying across multiple dialects', icon: 'SiPostgresql' },

  // Frameworks
  { name: 'FastAPI', category: 'Frameworks', description: 'High-performance REST API framework for Python microservices', icon: 'FaPython' },
  { name: 'React', category: 'Frameworks', description: 'Frontend UI development with component-based architecture', icon: 'FaReact' },
  { name: 'Flask', category: 'Frameworks', description: 'Lightweight Python web framework', icon: 'FaPython' },
  { name: 'LangChain', category: 'Frameworks', description: 'Framework for building LLM-powered applications', icon: 'SiTypescript' },
  { name: 'LangGraph', category: 'Frameworks', description: 'Agent orchestration framework with state machines', icon: 'SiTypescript' },
  { name: 'LangSmith', category: 'Frameworks', description: 'LLM debugging and evaluation platform', icon: 'FaDatabase' },

  // Cloud & DevOps
  { name: 'Azure AKS', category: 'Cloud & DevOps', description: 'Kubernetes container orchestration on Azure', icon: 'FaMicrosoft' },
  { name: 'AWS', category: 'Cloud & DevOps', description: 'Amazon Web Services and related technologies', icon: 'FaAws' },
  { name: 'Jenkins', category: 'Cloud & DevOps', description: 'CI/CD pipeline automation', icon: 'FaJenkins' },
  { name: 'Keycloak', category: 'Cloud & DevOps', description: 'Identity and access management', icon: 'FaLock' },
  { name: 'Docker', category: 'Cloud & DevOps', description: 'Containerization and application packaging', icon: 'FaDocker' },
  { name: 'Terraform', category: 'Cloud & DevOps', description: 'Infrastructure as Code for cloud resources', icon: 'SiTerraform' },
  { name: 'CI/CD', category: 'Cloud & DevOps', description: 'Continuous Integration and Deployment pipelines', icon: 'FaGitlab' },
  { name: 'Linux', category: 'Cloud & DevOps', description: 'Unix-like OS administration and scripting', icon: 'FaLinux' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', description: 'Relational database with pgvector extension', icon: 'SiPostgresql' },
  { name: 'MySQL', category: 'Databases', description: 'Relational database management system', icon: 'SiMysql' },
  { name: 'MongoDB', category: 'Databases', description: 'NoSQL document database', icon: 'SiMongodb' },

  // Core Concepts
  { name: 'System Design', category: 'Core Concepts', description: 'Designing scalable distributed systems', icon: 'FaProjectDiagram' },
  { name: 'Token Optimization', category: 'Core Concepts', description: 'Minimizing LLM token usage for cost efficiency', icon: 'SiTypescript' },
  { name: 'Microservices', category: 'Core Concepts', description: 'Building modular service-oriented architectures', icon: 'FaBox' },
  { name: 'LLM Evaluation', category: 'Core Concepts', description: 'Assessing and benchmarking LLM performance', icon: 'FaChartBar' },
  { name: 'REST APIs', category: 'Core Concepts', description: 'Designing RESTful web services', icon: 'FaServer' },
  { name: 'OOPs', category: 'Core Concepts', description: 'Object-Oriented Programming principles', icon: 'FaCube' },
  { name: 'DBMS', category: 'Core Concepts', description: 'Database management and optimization', icon: 'SiPostgresql' },
  { name: 'Scalability', category: 'Core Concepts', description: 'Building systems handling growth efficiently', icon: 'FaArrowsAlt' },

  // Developer Tools
  { name: 'Git/GitHub', category: 'Developer Tools', description: 'Version control and collaborative development', icon: 'FaGithub' },
  { name: 'Postman', category: 'Developer Tools', description: 'API testing and documentation', icon: 'FaServer' },
  { name: 'Swagger', category: 'Developer Tools', description: 'API documentation and testing framework', icon: 'FaFileCode' },
  { name: 'Pytest', category: 'Developer Tools', description: 'Python testing framework', icon: 'FaPython' },
  { name: 'Figma', category: 'Developer Tools', description: 'UI/UX design and prototyping', icon: 'FaPalette' },
  { name: 'Claude Code', category: 'Developer Tools', description: 'AI code generation from Anthropic', icon: 'SiTypescript' },
  { name: 'Github Copilot', category: 'Developer Tools', description: 'AI-powered code completion', icon: 'FaGithub' },
];

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
