export const hero = {
  name: "Prince",
  title: "Full Stack Developer",
  subtitle: "Applied AI Engineer",
  tagline:
    "I build backend systems and applied AI workflows. From setting up NL-to-SQL databases to fine-tuning local models, I focus on shipping code that works in production.",
  location: "Delhi, India",
  availability: "Open to Remote · Hybrid · Freelance · Gig Work",
  email: "prince28.01.2022@gmail.com",
  github: "https://github.com/Mprince29",
  linkedin: "https://www.linkedin.com/in/master-prince-83609b257/",
  twitter: "https://x.com/Mprince_28",
  resumeUrl: "/Master_Prince_Resume.pdf",
}

export const about = {
  bio: "I build backend systems and applied AI workflows. Right now I work at M37 Labs in Delhi, automating processes for enterprise clients across India and Malaysia. I've finished my B.Tech in CSE (AI) at Jamia Hamdard in 2025. Before this, I interned at a health-tech startup working on their MERN stack platform. I care a lot about system performance, database optimization, and making AI features actually useful instead of just cool demos.",
  currentRole: "Full Stack Developer (Applied AI) @ M37 Labs",
  education: "B.Tech CSE (AI) · Jamia Hamdard · 2025 · CGPA 7.8",
  stats: [
    { label: "AI systems shipped", value: "5+" },
    { label: "Workflows fully automated", value: "1K+" },
    { label: "Time saved on screening", value: "70%" },
    { label: "Classification accuracy", value: "95%+" },
  ],
  certifications: [
    "Data Analytics with Python (NPTEL — 2025)",
    "Introduction to Database Systems (NPTEL — 2025)",
  ],
}

export const experience = [
  {
    company: "M37 Labs",
    role: "Full Stack Developer · Applied AI",
    period: "May 2024 – Present",
    location: "Delhi, India",
    type: "Full-time",
    bullets: [
      "Built and deployed several AI features for clients across India and Malaysia.",
      "Created a custom workflow platform with Next.js and FastAPI that acts like a smart router, sending over 1,000 tasks daily to different specialized AI agents.",
      "Added a natural language search to a 200,000+ publication database using LangChain. I used Redis heavily here to keep the query times down.",
      "Automated resume screening using spaCy for text parsing and GPT-4 for scoring candidates.",
      "Trained a scikit-learn email classifier to categorize incoming messages and draft automated replies.",
      "Shifted a lot of our heavy API data aggregation to PostgreSQL and added Redis caching, which noticeably improved response times.",
      "Set up deployments across AWS, Vercel, and Render using Docker.",
    ],
  },
  {
    company: "Luchkee Health Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Dec 2024 – Feb 2025",
    location: "Delhi, India",
    type: "Internship",
    bullets: [
      "Worked as a full stack developer on a healthcare platform using the MERN stack.",
      "Wrote Zod schemas for all our APIs to catch bad requests early.",
      "Added indexes to MongoDB and profiled slow queries to drop the main dashboard load time from 3 seconds to under 1 second.",
    ],
  },
]

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  Backend: ["Python", "FastAPI", "Node.js", "Express.js", "Flask", "Streamlit"],
  "AI / LLM": [
    "OpenAI GPT-4",
    "Anthropic Claude",
    "Google Gemini",
    "LangChain",
    "LoRA Fine-tuning",
    "RAG Pipelines",
    "Multi-Agent Systems",
    "MCP Servers",
    "spaCy",
    "MediaPipe",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "SQLite",
    "pgvector",
    "ChromaDB",
    "Qdrant",
  ],
  Infrastructure: [
    "Docker",
    "AWS EC2",
    "Vercel",
    "Render",
    "Celery",
    "Socket.IO",
    "OAuth 2.0",
    "JWT",
  ],
  "ML / Data": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "OpenCV",
    "MLX-LM",
    "TensorFlow",
    "PyTorch",
  ],
}

export const projects = [
  {
    id: 1,
    title: "Mental Health AI",
    description:
      "Fine-tuned a Qwen-3B model entirely on Apple Silicon just to see how far I could push local hardware. I scraped 65,000 Reddit posts, cleaned the dataset, and generated synthetic replies using Ollama. It serves as both a 14-class symptom classifier and an empathetic chatbot. Served via FastAPI.",
    category: "ML Research",
    tags: ["Python", "MLX-LM", "LoRA", "Qwen2.5", "FastAPI", "Ollama"],
    image: "/projects/mental-health.png",
    github: "https://github.com/Mprince29/Mental-Health-AI",
    live: null,
    featured: true,
    highlight: "Fine-tuned · 14 classes · Apple Silicon",
  },
  {
    id: 2,
    title: "Multi-Agent Workflow Platform",
    description:
      "Our production platform for running different specialized AI agents. You type a prompt, and a routing engine decides which agent should handle it (drafting emails, managing calendars, processing docs). It runs hundreds of automated tasks daily.",
    category: "AI Systems",
    tags: ["Python", "FastAPI", "LiteLLM", "OpenAI", "MCP", "Redis", "Next.js"],
    image: "/projects/multi-agent.png",
    github: null,
    live: null,
    featured: true,
    highlight: "Production · 1000+ daily workflows",
  },
  {
    id: 3,
    title: "NL-to-SQL Media Monitoring Chatbot",
    description:
      "A chat interface connected to a 3.6 GB MySQL database of publications. Users ask questions in plain English, and LangChain writes the SQL to fetch the answers. I added Redis caching so frequent queries load instantly.",
    category: "AI Systems",
    tags: ["Python", "FastAPI", "LangChain", "MySQL", "Redis", "GPT-4"],
    image: "/projects/nlsql.png",
    github: null,
    live: null,
    featured: true,
    highlight: "200K+ publications · 5s → 2s",
  },
  {
    id: 4,
    title: "AI Recruitment Screening System",
    description:
      "An internal tool for HR to speed up hiring. It uses spaCy to extract context from a resume rather than just matching keywords, and then GPT-4 scores the candidate against the job description. It processes hundreds of resumes in seconds.",
    category: "AI Systems",
    tags: ["Python", "FastAPI", "spaCy", "OpenAI", "Scikit-learn", "PDF parsing"],
    image: "/projects/recruitment.png",
    github: null,
    live: null,
    featured: true,
    highlight: "95%+ accuracy · 70% time reduction",
  },
  {
    id: 5,
    title: "Delhi PM2.5 AQI Forecasting",
    description:
      "My final year university project. I wanted to understand the math behind backpropagation, so I built a neural network completely from scratch in pure NumPy (no PyTorch or TensorFlow) to predict Delhi's air quality using 6 years of sensor data.",
    category: "ML Research",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "CPCB Data"],
    image: "/projects/aqi.png",
    github: "https://github.com/Mprince29/ML-via-Delhi-AQI",
    live: null,
    featured: true,
    highlight: "R²=0.9501 · Built from scratch",
  },
  {
    id: 6,
    title: "Intelligent Proctoring Framework",
    description:
      "A real-time browser-based exam monitoring tool. It tracks where the user is looking and checks for multiple faces or objects to detect cheating. Mostly an excuse for me to play around with face-api.js and MediaPipe.",
    category: "AI Systems",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask", "face-api.js"],
    image: "/2project.png",
    github: "https://github.com/Mprince29/Intelligent-Proctoring-Detection-Framework",
    live: null,
    featured: false,
    highlight: "95%+ detection accuracy",
  },
]

export const terminalLines = [
  { delay: 0, text: "$ whoami", type: "command" },
  { delay: 500, text: "Prince — Full Stack Dev · Applied AI Engineer · Delhi", type: "output" },
  { delay: 1000, text: "$ cat work.txt", type: "command" },
  { delay: 1500, text: "M37 Labs — building AI systems for enterprise clients in India & Malaysia", type: "output" },
  { delay: 2100, text: "$ ls personal_projects/", type: "command" },
  { delay: 2600, text: "Mental-Health-AI/  AQI-Forecasting/  Proctoring-Framework/  ...", type: "output" },
  { delay: 3200, text: "$ cat skills/ai.txt", type: "command" },
  { delay: 3700, text: "LoRA fine-tuning · RAG · NL-to-SQL · multi-agent · MCP servers", type: "output" },
  { delay: 4300, text: "$ cat open_to.txt", type: "command" },
  { delay: 4800, text: "✓ Remote · Hybrid · Freelance · Gig work", type: "success" },
  { delay: 5300, text: "$ _", type: "cursor" },
]
