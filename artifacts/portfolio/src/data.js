// src/data.js
// ============================================================
// YOUR PORTFOLIO DATA — EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================================
// All personal info, social links, projects, certifications,
// achievements, skills, and learning topics live here.
// You do NOT need to touch any other file for routine updates.
// ============================================================


// ----------------------------------------------------------
// PERSONAL INFORMATION
// Replace the placeholder values with your real details.
// ----------------------------------------------------------
export const personalInfo = {
  name:          "Shubham Kumar Jha",
  headline:      "Data Analyst | Python • SQL • Power BI • Machine Learning",
  email:         "shubhamkumarjha8601@gmail.com",
  email:         "workwithshubhamjha@gmail.com",
  location:      "Maharashtra, India",
  bio:           "Results-driven Data Analyst with a strong background in Electronics & Communication Engineering, specializing in Python, SQL, Power BI, and Machine Learning. Proven track record in developing end-to-end analytics solutions, automated data pipelines, and interactive dashboards to translate complex datasets into actionable business insights. Highly focused on process optimization, analytical rigor, and cross-functional collaboration to streamline operations, foster strong client relationships, and drive organizational goals.",
  currentStatus: "Targeting Data Analyst opportunities focused on Python, SQL, Power BI, and Machine Learning.",
  resumePath:    "/resume.pdf"
};


// ----------------------------------------------------------
// SOCIAL LINKS
// Set each value to your real profile URL.
// Leave as "" to hide that icon from the website entirely.
// ----------------------------------------------------------
export const socialLinks = {
  linkedin: "linkedin.com/in/shubham-kumar-jha-ab56b5217",
  linktree: "https://linktr.ee/shubhamkumarjha8601",
  github:   "",
  leetcode: "https://leetcode.com/u/shubham_kumar_jha01/",
  kaggle:   "",
  x:        ""
};


// ----------------------------------------------------------
// SKILLS
// Edit the arrays to reflect your actual skills.
// Add or remove items as needed.
// ----------------------------------------------------------
export const skills = {
  "Data & Programming": ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "Machine Learning": ["Machine Learning", "Deep Learning", "Scikit-Learn"],
  "Analytics & Visualization": ["Power BI", "Data Cleansing", "Data Preparation", "Data Visualization"],
  "Professional Strengths": ["Critical Thinking", "Problem Solving", "Effective Communication", "MS Office"],
  "Core CS & Tools": ["Data Structures & Algorithms", "SQL Databases", "Git & GitHub", "VS Code"],
  "Data Infrastructure": ["PostgreSQL", "Jupyter Notebooks", "VS Code", "Git & GitHub"]
};


// ----------------------------------------------------------
// PROJECTS
// Replace the example entries below with your real projects.
//
// imageUrl:    Drop an image in /public/assets/images/projects/
//              and set the path, e.g. "/assets/images/projects/project-1.jpg"
//              Leave "" to show a clean icon placeholder.
// githubUrl:   Your GitHub repo URL. Leave "" to hide the Code button.
// liveDemoUrl: Your live demo URL. Leave "" to hide the Live Demo button.
// detailsUrl:  A blog post or writeup URL. Leave "" to hide the Details button.
// ----------------------------------------------------------
export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    shortDescription: "Designed a relational SQL database schema with a Python-driven query management interface for CRUD operations and real-time analytical reports.",
    technologies: ["Python", "SQL"],
    imageUrl:    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
  {
    id: 2,
    title: "Mental Health Score Predictor & ML Pipeline",
    shortDescription: "Built a baseline predictive classification workflow with preprocessing, feature scaling, and categorical encoding using Scikit-Learn.",
    technologies: ["Python", "Scikit-Learn", "Machine Learning"],
    imageUrl:    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
  {
    id: 3,
    title: "Coffee Shop Sales Analytics Dashboard",
    shortDescription: "Constructed an interactive dashboard for store transactions, revenue spikes, and customer sales patterns using Advanced Excel and Power BI DAX metrics.",
    technologies: ["Power BI", "Advanced Excel", "DAX"],
    imageUrl:    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
];


// ----------------------------------------------------------
// EDUCATION & CAREER JOURNEY TIMELINE
// Edit years, titles, and descriptions to reflect your real story.
// icon: use any single emoji.
// type: "education" | "learning" | "current"
// ----------------------------------------------------------
export const timeline = [
  {
    year: "07/2017",
    title: "Class 10 — Aditya Birla Intermediate College",
    description: "Math and Science · Sonebhadra, Uttar Pradesh, India · 71.5%.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "06/2020",
    title: "Diploma in Electronics & Communication Engineering",
    description: "Sant Longowal Institute of Engineering & Technology · Sangrur, Punjab, India · CGPA 6.70.",
    type: "education",
    icon: "📘"
  },
  {
    year: "May 2019 – Jun 2019",
    title: "Network & Telecom Trainee — BSNL",
    description: "Understood wireless network infrastructure, routing, and data transmission protocols · Muzaffarpur, Bihar, India.",
    type: "learning",
    icon: "📡"
  },
  {
    year: "06/2023",
    title: "B.Tech in Electronics & Communication Engineering",
    description: "Sant Longowal Institute of Engineering & Technology · Sangrur, Punjab, India · CGPA 7.858.",
    type: "education",
    icon: "🏆"
  },
  {
    year: "Jun 2022 – Jul 2022",
    title: "IoT & Embedded Systems Intern — Sarpweb Technology",
    description: "Worked on hardware-to-cloud data transmission and sensor network setup · Hajipur, Bihar, India.",
    type: "learning",
    icon: "⚙️"
  },
  {
    year: "07/2023 – Present",
    title: "Freelance Data & Automation Consultant",
    description: "Self-Employed / Remote · India.<br><strong>Predictive Analytics:</strong> Conducted exploratory data analysis and implemented baseline Scikit-Learn machine learning models for accurate trend forecasting.<br><strong>Data Wrangling:</strong> Cleaned and structured large datasets using SQL and Python (Pandas/NumPy) to reveal insights into operational trends.<br><strong>Visualization:</strong> Developed dynamic Power BI dashboards to monitor business metrics and KPIs.<br><strong>Data Quality:</strong> Conducted rigorous data validation checks to ensure high dataset accuracy and integrity.",
    type: "current",
    icon: "📊"
  }
];


// ----------------------------------------------------------
// CERTIFICATIONS
// pdfPath: Drop your certificate PDF in /public/assets/certificates/
//          and set the filename, e.g. "/assets/certificates/ml-cert.pdf"
//          Leave "" to hide the View/Download buttons for that entry.
// ----------------------------------------------------------
export const certifications = [
  {
    id: 1,
    icon:        "fa-solid fa-satellite",
    title:       "AI/ML for Geodata Analysis",
    issuer:      "ISRO - Indian Institute of Remote Sensing",
    date:        "2026",
    description: "",
    pdfPath:     ""
  },
  {
    id: 2,
    icon:        "fa-solid fa-brain",
    title:       "Machine Learning Specialization",
    issuer:      "DeepLearning.AI & Coursera",
    date:        "2026",
    description: "",
    pdfPath:     ""
  },
  {
    id: 3,
    icon:        "fa-solid fa-puzzle-piece",
    title:       "Problem Solving (Intermediate)",
    issuer:      "HackerRank",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 4,
    icon:        "fa-solid fa-code",
    title:       "Software Engineer Intern Certificate",
    issuer:      "HackerRank",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 5,
    icon:        "fa-solid fa-chart-line",
    title:       "Data Science & Machine Learning with Python",
    issuer:      "Simplilearn",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 6,
    icon:        "fa-solid fa-file-excel",
    title:       "Advanced Microsoft Excel for Data Analysis",
    issuer:      "365 Data Science",
    date:        "",
    description: "",
    pdfPath:     ""
  }
];

export const codingProfile = {
  platform: "LeetCode",
  url: "https://leetcode.com/u/shubham_kumar_jha01/",
  description: "Practising SQL and data-structure problem solving to strengthen analytical thinking and write clearer, more efficient solutions.",
  highlights: [
    { icon: "fa-solid fa-database", label: "SQL Problem Solving" },
    { icon: "fa-solid fa-diagram-project", label: "Data Structures" }
  ]
};


// ----------------------------------------------------------
// ACHIEVEMENTS
// Add awards, competition results, recognitions, etc.
// Leave the array as [] if you have none to add yet.
// ----------------------------------------------------------
export const achievements = [
  {
    icon:        "🏅",
    title:       "College-Level Tech Event Certificate",
    description: ""
  },
  {
    icon:        "🎖️",
    title:       "NCC Certificates B and C",
    description: ""
  }
];


// ----------------------------------------------------------
// LEARNING JOURNEY
// Update progress % (0–100) as your skills grow over time.
// ----------------------------------------------------------
export const learningTopics = {
  current: [
    { name: "Machine Learning", progress: 50, emoji: "🤖" },
    { name: "Python for Data Science", progress: 70, emoji: "🐍" },
    { name: "Statistics & Probability", progress: 50, emoji: "📊" },
    { name: "Deep Learning Fundamentals", progress: 25, emoji: "🧠" }
  ],
  upcoming: [
    { name: "Natural Language Processing", emoji: "💬" },
    { name: "Computer Vision", emoji: "👁️" },
    { name: "Generative AI & LLMs", emoji: "✨" },
    { name: "MLOps & Deployment", emoji: "⚙️" }
  ]
};
export const languages = [
  { name: "Hindi", level: "Native", emoji: "🇮🇳" },
  { name: "English", level: "Intermediate", emoji: "🇬🇧" },
  { name: "Punjabi", level: "Basic", emoji: "🌾" }
];
