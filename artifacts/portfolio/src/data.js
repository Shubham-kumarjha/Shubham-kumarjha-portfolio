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
  headline:      "Aspiring Data Analyst | Data Science & AI/ML Enthusiast",
  email:         "shubhamkumarjha8601@gmail.com",
  location:      "Uttar Pradesh, Noida, India",
  bio:           "I am an Electronics & Communication Engineering graduate turned Data Analyst & Aspiring AI/ML Engineer. Leveraging a strong foundational background in signals, systems, and mathematical logic from SLIET Punjab, I specialize in transforming raw, unstructured data into actionable business intelligence using Python, SQL, Power BI, and Scikit-Learn.",
  currentStatus: "Open to opportunities in Data Analytics, Data Science, and AI/ML.",
  resumePath:    "/assets/resume/resume.pdf"
};


// ----------------------------------------------------------
// SOCIAL LINKS
// Set each value to your real profile URL.
// Leave as "" to hide that icon from the website entirely.
// ----------------------------------------------------------
export const socialLinks = {
  linkedin: "https://linkedin.com/in/shubham-kumar-jha-ab56b5217",
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
  "Data & Programming":     ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "Machine Learning":        ["Machine Learning", "Deep Learning", "Scikit-Learn"],
  "Analytics & Visualization": ["Power BI", "Data Cleansing", "Data Preparation", "Data Visualization"],
  "Professional Strengths":  ["Critical Thinking", "Problem Solving", "Effective Communication", "MS Office"],
  "Engineering Foundation":  ["Networking", "Electronics & Communication"]
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
    title: "Employee Management System using Python and SQL",
    shortDescription: "A Python and SQL-based employee management application.",
    technologies: ["Python", "SQL"],
    imageUrl:    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
  {
    id: 2,
    title: "Coffee Shop Sales Analysis",
    shortDescription: "A sales-analysis project focused on extracting insights from coffee shop transaction data.",
    technologies: ["Python", "Data Analysis", "Power BI"],
    imageUrl:    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
  {
    id: 3,
    title: "Mental Health Score Predictor",
    shortDescription: "A machine-learning project for predicting mental health scores.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn"],
    imageUrl:    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  },
  {
    id: 4,
    title: "Recommendation System",
    shortDescription: "A recommendation-system project for generating relevant suggestions from data.",
    technologies: ["Python", "Machine Learning"],
    imageUrl:    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    githubUrl:   "",
    liveDemoUrl: "",
    detailsUrl:  ""
  }
];


// ----------------------------------------------------------
// EDUCATION & CAREER JOURNEY TIMELINE
// Edit years, titles, and descriptions to reflect your real story.
// icon: use any single emoji.
// type: "education" | "learning" | "current"
// ----------------------------------------------------------
export const timeline = [
  {
    year: "2016–2017",
    title: "Class 10 — Aditya Birla Intermediate College",
    description: "Completed Class 10 with 71.5%, studying Mathematics and Science.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2017–2020",
    title: "Diploma in Electronics & Communication Engineering",
    description: "Sant Longowal Institute of Engineering & Technology, Sangrur, Punjab · CGPA 6.70.",
    type: "education",
    icon: "📘"
  },
  {
    year: "May–Jun 2019",
    title: "Internship Training — BSNL",
    description: "Worked on wireless communication and networking basics during internship training in Muzaffarpur, Bihar.",
    type: "learning",
    icon: "📡"
  },
  {
    year: "2020–2023",
    title: "B.Tech in Electronics & Communication Engineering",
    description: "Sant Longowal Institute of Engineering & Technology, Sangrur, Punjab · CGPA 7.858.",
    type: "education",
    icon: "🏆"
  },
  {
    year: "Jun–Jul 2022",
    title: "Industrial Training — Sarpweb Technology",
    description: "Completed industrial training in Internet of Things in Hajipur, Bihar.",
    type: "learning",
    icon: "⚙️"
  },
  {
    year: "Jun 2023–Present",
    title: "Freelance Data Analyst & Analytics Consultant",
    description: "Self-employed and remote. Analyzed datasets with SQL and Python, built Power BI dashboards and basic Scikit-Learn models, and performed exploratory data analysis.",
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
    icon:        "fa-solid fa-certificate",
    title:       "Introduction to Data Science / Machine Learning Using Python",
    issuer:      "Simplilearn",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 2,
    icon:        "fa-solid fa-code",
    title:       "Software Engineer / Software Engineer Intern",
    issuer:      "HackerRank",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 3,
    icon:        "fa-solid fa-brain",
    title:       "Problem Solving (Intermediate)",
    issuer:      "HackerRank",
    date:        "",
    description: "",
    pdfPath:     ""
  },
  {
    id: 4,
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
    { name: "Machine Learning",           progress: 60, emoji: "🤖" },
    { name: "Python for Data Science",    progress: 70, emoji: "🐍" },
    { name: "Statistics & Probability",   progress: 55, emoji: "📊" },
    { name: "Deep Learning Fundamentals", progress: 35, emoji: "🧠" }
  ],
  upcoming: [
    { name: "Natural Language Processing", emoji: "💬" },
    { name: "Computer Vision",             emoji: "👁️" },
    { name: "Generative AI & LLMs",        emoji: "✨" },
    { name: "MLOps & Deployment",          emoji: "⚙️" }
  ]
};
