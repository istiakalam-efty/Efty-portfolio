export const projectsData = [
  {
    id: "need-blood",
    number: "01",
    title: "NEED BLOOD",
    subtitle: "Blood Donation Management System",
    year: "2025 — 2026",
    role: "Full-Stack Engineer & System Architect",
    direction: "right", // moves from right -> center as specified in prompt
    accentColor: "#E63946",
    tagline: "Connecting life-saving donors with critical recipients in real-time.",
    description:
      "A mission-critical web-based blood donation platform engineered to bridge the gap between voluntary donors, recipients, and hospital blood banks. Designed with intuitive donor matching, emergency broadcast alerts, and strict administrative governance.",
    features: [
      "Donor Registration & Verification",
      "Real-Time Donor Discovery & Availability Tracking",
      "Centralized Blood-Bank Inventory Administration",
      "Role-Based User & Volunteer Panel",
      "Executive Administrative Governance & Analytics"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub",
      "Render"
    ],
    visualType: "blood-system",
    image: "/images/projects/need-blood.svg",
    stats: [
      { label: "Architecture", value: "RESTful MVC" },
      { label: "Database", value: "MongoDB Atlas" },
      { label: "Deployment", value: "Render Cloud" }
    ],
    githubUrl: "https://github.com/istiakalam-efty",
    liveUrl: "https://github.com/istiakalam-efty"
  },
  {
    id: "mini-compiler",
    number: "02",
    title: "MINI COMPILER",
    subtitle: "Compiler Design & Code Generation Engine",
    year: "2025",
    role: "Systems Programmer & Compiler Engineer",
    direction: "left", // moves from left -> center as specified in prompt
    accentColor: "#3A86FF",
    tagline: "End-to-end multi-pass language compiler with visual AST execution.",
    description:
      "A complete compiler implementation covering every phase of the traditional compilation pipeline. From raw source code tokenization through lexical, syntax, and semantic analysis to abstract syntax tree generation, intermediate optimization, and native assembly target code synthesis.",
    features: [
      "Lexical Analysis & High-Speed Tokenization",
      "Context-Free Grammar Parsing & AST Generation",
      "Type Checking & Semantic Symbol Table Management",
      "Intermediate Code Optimization & Dead Code Elimination",
      "Target Machine Code Synthesis & Interactive Inspection UI"
    ],
    technologies: [
      "C",
      "C++",
      "Python",
      "Lexical Analysis",
      "AST Integration",
      "Data Structures",
      "Compiler Theory"
    ],
    visualType: "compiler-ast",
    image: "/images/projects/mini-compiler.svg",
    stats: [
      { label: "Pipeline Passes", value: "6 Stages" },
      { label: "Grammar", value: "CFG & LL(1)" },
      { label: "Optimization", value: "Constant Folding & DCE" }
    ],
    githubUrl: "https://github.com/istiakalam-efty",
    liveUrl: "https://github.com/istiakalam-efty"
  },
  {
    id: "university-transport",
    number: "03",
    title: "UNIVERSITY TRANSPORT SYSTEM",
    subtitle: "Smart Campus Fleet & Booking Platform",
    year: "2025 — 2026",
    role: "Full-Stack Developer",
    direction: "right", // moves from right -> center as specified in prompt
    accentColor: "#FFB703",
    tagline: "Streamlining daily campus transit with live seat reservations and schedule dispatch.",
    description:
      "An integrated university transportation management platform enabling thousands of students and faculty members to view real-time bus schedules, book reserved seats, inspect driver credentials, and coordinate campus logistics seamlessly.",
    features: [
      "Interactive Real-Time Bus Schedule Matrix",
      "Seat Reservation & Digital Ticket Validation",
      "Driver Verification & Vehicle Compliance Profiles",
      "Available Fleet Monitoring & Route Tracking",
      "Administrative Route Management & Dispatch Dashboard"
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "Git"
    ],
    visualType: "transport-platform",
    image: "/images/projects/university-transport.svg",
    stats: [
      { label: "Dispatch Matrix", value: "Multi-Route" },
      { label: "Booking Latency", value: "< 120ms" },
      { label: "State Sync", value: "Optimistic" }
    ],
    githubUrl: "https://github.com/istiakalam-efty",
    liveUrl: "https://github.com/istiakalam-efty"
  }
];

export const personalInfo = {
  name: "AHAMMED ISTIAK ALAM EFTY",
  displayName: "EFTY",
  role: "COMPUTER SCIENCE & ENGINEERING STUDENT / CREATIVE DEVELOPER",
  shortBio:
    "I build digital experiences where computer science rigor meets creative frontend engineering. Transforming complex systems into seamless, cinematic web interactions.",
  statement: "I BUILD DIGITAL EXPERIENCES WHERE CODE MEETS CREATIVITY.",
  location: "Dhaka, Bangladesh [23.8103° N, 90.4125° E]",
  education: "B.Sc. in Computer Science & Engineering",
  email: "efty.asia@gmail.com",
  socials: {
    github: "https://github.com/istiakalam-efty",
    linkedin: "https://www.linkedin.com/in/ahammed-istiak-alam-efty-6aa523329/",
    x: "https://x.com/efty19681972"
  },
  expertiseList: [
    {
      num: "01",
      title: "DEVELOPMENT",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS", "EXPRESS.JS"],
      detail:
        "Architecting modern full-stack web applications, dynamic interactive user interfaces, and resilient RESTful backend APIs with high responsiveness and accessibility."
    },
    {
      num: "02",
      title: "PROGRAMMING",
      skills: ["C", "C++", "JAVA", "PYTHON"],
      detail:
        "Low-level memory management, systems engineering, object-oriented software design, robust automation scripting, and algorithmic problem solving."
    },
    {
      num: "03",
      title: "DATABASE",
      skills: ["MONGODB", "MYSQL"],
      detail:
        "Relational and non-relational database modeling, query optimization, indexing strategies, transaction handling, and schema scalability."
    },
    {
      num: "04",
      title: "COMPUTER SCIENCE",
      skills: [
        "DATA STRUCTURES",
        "ALGORITHMS",
        "COMPILER DESIGN",
        "SYSTEM ARCHITECTURE"
      ],
      detail:
        "Algorithmic complexity analysis (Big-O), graph theory, tree traversals, lexical syntax parsing, semantic verification, and execution pipeline modeling."
    },
    {
      num: "05",
      title: "TOOLS",
      skills: ["GIT", "GITHUB", "VS CODE", "RENDER", "VITE", "POSTMAN"],
      detail:
        "Modern CI/CD version control workflows, cloud deployments, profiling, debugging tooling, and modern developer tooling ecosystems."
    }
  ],
  floatingTech: [
    { label: "HTML", speed: 0.7, x: "12%", y: "18%", rot: -6 },
    { label: "CSS", speed: 1.1, x: "78%", y: "15%", rot: 8 },
    { label: "JS", speed: 0.9, x: "22%", y: "65%", rot: 4 },
    { label: "REACT", speed: 1.3, x: "85%", y: "45%", rot: -10 },
    { label: "NODE", speed: 0.8, x: "10%", y: "82%", rot: 5 },
    { label: "C++", speed: 1.2, x: "65%", y: "78%", rot: -8 },
    { label: "PYTHON", speed: 1.0, x: "45%", y: "12%", rot: 6 },
    { label: "MONGODB", speed: 1.4, x: "88%", y: "85%", rot: 12 }
  ]
};
