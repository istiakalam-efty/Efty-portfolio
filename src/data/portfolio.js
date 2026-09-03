/**
 * Centralized Portfolio Data for Ahammed Istiak Alam Efty
 * All information, social links, project records, skills, and placeholders
 * are maintained here to avoid duplication across UI components.
 */

export const portfolioData = {
  personal: {
    fullName: "Ahammed Istiak Alam Efty",
    shortName: "Ahammed Istiak Alam Efty",
    title: "Computer Science & Engineering Student | Software Developer",
    role: "Computer Science & Engineering Student",
    specialization: "Software Developer",
    year: 2026,
    status: "CSE Student",
    photoUrl: "/images/profile.jpg",
    bio: "I am a Computer Science and Engineering student passionate about software development, web technologies, databases, problem solving, and building practical technology solutions.",
    aboutLong: [
      "I am a Computer Science and Engineering student interested in software development and modern web technologies. I enjoy designing and developing practical applications, working with databases, solving programming problems, and exploring different areas of computer science.",
      "My academic and personal projects include web applications, database-driven systems, compiler design, and university transportation management systems.",
      "I am continuously improving my programming and software-development skills while exploring new technologies and building real-world projects."
    ],
    // Verified contact details
    email: "efty.asia@gmail.com",
    phone: "019738769275",
    location: "Daffodil Smart City",
    resumeUrl: "/resume/Ahammed-Istiak-Alam-Efty-CV.pdf",
    resumeAvailable: true, // CV placed in public/resume/
  },

  // Official Social Profiles - EXACT URLs
  socialLinks: {
    github: {
      name: "GitHub",
      username: "istiakalam-efty",
      url: "https://github.com/istiakalam-efty",
    },
    linkedin: {
      name: "LinkedIn",
      username: "ahammed-istiak-alam-efty",
      url: "https://www.linkedin.com/in/ahammed-istiak-alam-efty-6aa523329/",
    },
    x: {
      name: "X (Twitter)",
      username: "efty19681972",
      url: "https://x.com/efty19681972",
    }
  },

  // Editable Metrics / Highlights (No fake statistics)
  highlights: [
    { label: "Featured Projects", value: "3+", editable: true, desc: "Academic & practical systems" },
    { label: "Technologies", value: "15+", editable: true, desc: "Languages, frameworks & tools" },
    { label: "Academic Standing", value: "SWE Student", isStatus: true, desc: "B.Sc in Software Engineering" },
    { label: "Portfolio Year", value: "2026", desc: "Current active revision" },
  ],

  // Technical Skills (No fake percentages)
  skills: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "Python"]
    },
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Render"]
    },
    {
      category: "Computer Science",
      skills: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Compiler Design",
        "Software Engineering"
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "need-blood",
      title: "NEED Blood",
      year: 2026,
      category: "Blood Donation Management System",
      filterCategories: ["Web Development", "Software Development", "Database"],
      description: "A web-based blood donation management platform designed to connect blood donors with people who need blood. The system includes donor registration, donor management, blood-bank administration, and separate user/admin panels.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "GitHub", "Render"],
      features: [
        "Donor registration & profile management",
        "Blood request dispatch & donor matching",
        "Blood-bank administration portal",
        "Interactive Admin dashboard",
        "Dedicated donor & patient user panels",
        "Database integration with MongoDB",
        "Real-time blood stock availability management"
      ],
      githubUrl: "", // Editable
      demoUrl: "",   // Editable
      image: "/images/projects/need-blood.svg",
      accentColor: "rose"
    },
    {
      id: "mini-compiler",
      title: "Mini Compiler",
      year: 2026,
      category: "Compiler Design",
      filterCategories: ["Compiler Design", "Software Development", "Academic Projects"],
      description: "A compiler-design project implementing multiple stages of the compilation process, including lexical analysis, syntax analysis, semantic analysis, symbol-table management, optimization, AST integration, and target-code generation.",
      technologies: ["Compiler Design", "Programming Languages", "Data Structures", "Algorithms", "Parsing", "Abstract Syntax Trees"],
      features: [
        "Lexical Analysis & Tokenization engine",
        "Syntax Analysis & grammar verification",
        "Semantic Analysis & type checking",
        "Symbol Table management",
        "Abstract Syntax Tree (AST) construction",
        "Intermediate code optimization",
        "Target Code Generation",
        "Compiler integration & UI inspection"
      ],
      githubUrl: "", // Editable
      demoUrl: "",   // Editable
      image: "/images/projects/mini-compiler.svg",
      accentColor: "indigo"
    },
    {
      id: "delivery-management-system",
      title: "Delivery Management System",
      year: 2025,
      category: "C-based System Engineering",
      filterCategories: ["Software Development", "Academic Projects"],
      description: "A C-based delivery management system using fundamental data structures. Implemented efficient data management and packet routing utilizing linked lists, stacks, and custom sorting algorithms.",
      technologies: ["C Programming", "Data Structures", "Linked Lists", "Stacks", "Sorting Algorithms"],
      features: [
        "Dynamic order queue management via stacks & linked lists",
        "Optimized package searching and location sorting",
        "High-performance memory allocation in C",
        "Console diagnostic tools and audit reports"
      ],
      githubUrl: "", // Editable
      demoUrl: "",   // Editable
      image: "/images/projects/delivery-system.svg",
      accentColor: "teal"
    },
    {
      id: "university-transport-system",
      title: "University Transport System",
      year: 2026,
      category: "University Management System",
      filterCategories: ["Web Development", "Software Development", "Database", "Academic Projects"],
      description: "A university transport management system that allows students to view bus schedules, book seats, and access driver information for university buses.",
      technologies: ["Database Integration", "Web Technologies", "Software Engineering", "UI/UX Design"],
      features: [
        "Real-time university bus schedules & route viewer",
        "Interactive student seat booking system",
        "Verified driver details & contact access",
        "Intuitive student self-service interface",
        "Fleet and route management console",
        "Relational/document database integration"
      ],
      githubUrl: "", // Editable
      demoUrl: "",   // Editable
      image: "/images/projects/university-transport.svg",
      accentColor: "cyan"
    }
  ],

  projectFilterCategories: [
    "All",
    "Web Development",
    "Software Development",
    "Database",
    "Compiler Design",
    "Academic Projects"
  ],

  // Education Timeline (Verified from official CV)
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Daffodil International University",
      duration: "Expected Graduation: 2028",
      status: "Currently Studying",
      current: true,
      description: "Pursuing rigorous software engineering degree focusing on software architecture, algorithms, data structures, full-stack systems, and engineering mathematics.",
      relevantCoursework: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Compiler Design",
        "Software Engineering Principles",
        "Mathematical Programming"
      ],
      achievements: [
        "Participated in DIU Science Olympiad",
        "Participated in Take-Off Contest at Daffodil International University",
        "Participated in The Algorithm Contest at Daffodil International University",
        "General Member — DIU Mathematical Society",
        "General Member — DIU Computer & Programming Club (CPC)",
        "Member — DIU Job Utsob 2025"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Comilla Victoria Govt. College",
      duration: "Year: 2023",
      status: "Completed",
      current: false,
      description: "Science curriculum emphasizing Mathematics, Physics, Chemistry, and Information Technology.",
      relevantCoursework: ["Higher Mathematics", "Physics", "Information & Communication Technology"],
      achievements: []
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Comilla Modern High School",
      duration: "Year: 2021",
      status: "Completed",
      current: false,
      description: "Secondary school education focusing on General Science and Mathematics fundamentals.",
      relevantCoursework: ["General Science", "Mathematics", "Computer Studies"],
      achievements: []
    }
  ],

  // Academic & Project Experience
  experience: [
    {
      title: "Full-Stack Web Development",
      type: "Academic & Practical Project Experience",
      period: "2025 - 2026",
      description: "Experience developing frontend and backend applications with database integration, responsive user interfaces, and structured API endpoints.",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Database Development",
      type: "Academic & Practical Project Experience",
      period: "2025 - 2026",
      description: "Experience working with MongoDB and MySQL for application data management, relational schemas, document indexing, and data security.",
      skills: ["MongoDB", "MySQL", "Data Modeling", "Query Optimization"]
    },
    {
      title: "Compiler Design Implementation",
      type: "Academic Project Specialization",
      period: "2026",
      description: "Experience implementing different stages of a compiler including tokenization, parsing, AST generation, symbol tables, and code optimization.",
      skills: ["Lexical Analysis", "Parsing", "AST", "Symbol Table", "Optimization"]
    },
    {
      title: "Software Project Development",
      type: "Practical System Engineering",
      period: "2025 - 2026",
      description: "Experience designing and developing practical university software projects adhering to software engineering principles and modular design.",
      skills: ["Object-Oriented Design", "Git Workflow", "Requirement Analysis", "Testing"]
    }
  ],

  // Services / What I Do
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Building clean, modern, and responsive web applications with semantic markup, fast load times, and intuitive user experiences.",
      icon: "Globe"
    },
    {
      id: "fullstack-dev",
      title: "Full-Stack Development",
      description: "Developing frontend, backend, RESTful APIs, and database-integrated applications with clean separation of concerns.",
      icon: "Layers"
    },
    {
      id: "database-dev",
      title: "Database Development",
      description: "Designing and working with relational (MySQL) and NoSQL (MongoDB) databases, schemas, and efficient query pipelines.",
      icon: "Database"
    },
    {
      id: "software-dev",
      title: "Software Development",
      description: "Building practical software solutions using robust programming practices, data structures, and computer science concepts.",
      icon: "Cpu"
    },
    {
      id: "academic-dev",
      title: "Academic Project Development",
      description: "Developing university-level software and computer science projects including system architectures, simulations, and utilities.",
      icon: "BookOpen"
    }
  ]
};
