import { Code, Zap, User, Sparkles, Briefcase, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import whatsappSvg from "../assets/whatsapp-svgrepo-com.svg"
export const projects = [
  {
    title: "Accurest - Supply Chain & Inventory Management System",
    description: "Scalable supply chain and inventory management platform with dynamic role-based access control, optimized data fetching, and RESTful API integration.",
    tech: ["React", "Redux Toolkit", "React Query", "Spring Boot", "PostgreSQL"],
    gradient: "from-blue-500 via-cyan-600 to-teal-700",
    icon: "📦",
    period: "12/2025 - 04/2026",
    features: [
      "Developed scalable frontend architecture using React, Redux Toolkit, and React Query",
      "Designed dynamic module and permission-based access systems for role-driven UI rendering",
      "Optimized data fetching with React Query, reducing redundant API calls and improving dashboard performance by leveraging caching and background refetching strategies",
      "Led and mentored junior developers, ensuring code quality and best practices",
      "Built reusable and modular components to improve development speed and maintainability",
      "Collaborated with Spring Boot backend teams to define and optimize REST API contracts, reducing over-fetching and improving frontend rendering efficiency"
    ]
  },
  {
    title: "Next Generation Communicator - WhatsApp-Based Customer Engagement Platform",
    description: "WhatsApp-based customer engagement platform enabling businesses to register, communicate with customers via Meta Cloud API. Supports messages, catalogs, and multimedia content with targeted outreach.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Kafka", "React"],
    gradient: "from-green-500 via-teal-600 to-blue-700",
    icon: "💬",
    period: "06/2025 - 07/2025",
    features: [
      "Customer engagement platform enabling clients to register and communicate with customers via WhatsApp using the Meta Cloud API",
      "Developed custom APIs utilizing the Meta (WhatsApp Business) API to enable sending of messages, catalogs, and multimedia content",
      "Built user registration, authentication, and account management modules using Node.js, MongoDB, and JWT",
      "Implemented message scheduling features for targeted customer outreach",
      "Improved system performance using Redis caching and Kafka-based asynchronous processing",
      "Ensured reliable message delivery by handling status tracking and user feedback workflows",
      "Mentored junior React developer, guiding them in writing clean, maintainable code and following best practices"
    ]
  },
  {
    title: "Astrogyata – Real-Time Astrology Consultation Platform",
    description: "Real-time astrology consultation platform with responsive UI, scalable backend APIs, and secure payment integration. Comprehensive admin dashboard for platform management.",
    tech: ["React.js", "Node.js", "MongoDB", "PhonePay API"],
    gradient: "from-purple-500 via-pink-600 to-red-700",
    icon: "🔮",
    period: "05/2024 - 09/2024",
    features: [
      "Astrologer interface for consultations",
      "PhonePay payment gateway integration",
      "Admin dashboard for user management",
      "Cross-platform responsive design"
    ]
  },
  {
    title: "Aditya Gases - An ERP Solution",
    description: "Web-based ERP system for managing gas inventory, orders, billing, and deliveries. Built with Angular and reactive programming for real-time data management.",
    tech: ["Angular", "RxJS", "TypeScript", "Bootstrap", "REST APIs"],
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    icon: "🏭",
    period: "10/2024 - 04/2025",
    features: [
      "Gas inventory and order management",
      "Reactive programming with RxJS",
      "Angular reactive forms validation",
      "Modular components and services"
    ]
  }
];

export const technicalSkills = [
  { 
    name: "JavaScript", 
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  { 
    name: "TypeScript", 
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  { 
    name: "React", 
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Angular", 
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  },
  { 
    name: "Node.js", 
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  { 
    name: "Express.js", 
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  { 
    name: "MongoDB", 
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  { 
    name: "HTML5", 
    level: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  { 
    name: "CSS3", 
    level: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  { 
    name: "Java", 
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  }
];

export const professionalSkills = [
  { name: "Team Leadership", icon: User, level: 90 },
  { name: "Problem Solving", icon: Zap, level: 95 },
  { name: "Project Management", icon: Briefcase, level: 85 },
  { name: "Code Review", icon: Sparkles, level: 88 },
  { name: "Mentoring", icon: User, level: 85 },
  { name: "Agile/Scrum", icon: Briefcase, level: 80 }
];

export const personalData = {
  totalExperience:'3+',
  resumeDriveLink: 'https://drive.google.com/file/d/1S3r5iZqNd7zXRice8ggFYMHfsQOG47jv/view?usp=sharing'
}
export const experience = [
  {
    role: "Frontend Developer",
    company: "RedBeryl Tech Solutions",
    period: "08/2025 - Present",
    description: "Experienced React Lead with a strong background in building fast and user-friendly web apps. Lead frontend teams, help design clean and reusable code, and ensure UI looks great and works well on all devices.",
    achievements: [
      "Improved website speed by reducing page load time by up to 40%",
      "Led frontend teams to deliver responsive and scalable React applications",
      "Built reusable components and maintained clean, modular code",
      "Mentored junior developers and supported team code reviews"
    ]
  },
  {
    role: "Full Stack Web Developer",
    company: "Indtrack Technology Pvt. Ltd. (GPS Tracker)",
    period: "03/2024 - 07/2025",
    description: "Designed, improved, and maintained scalable web applications using React, Angular, Node.js, and Express. Built RESTful APIs, configured MongoDB and PostgreSQL, and worked with Redis and Kafka.",
    achievements: [
      "Built high-performance backend services reducing API response time by 30%",
      "Worked with mapping libraries like Leaflet and Open Layers for spatial data visualization",
      "Enhanced application performance by optimizing queries and implementing Redis caching",
      "Designed Kafka consumers to process asynchronous jobs for real-time notifications"
    ]
  },
  {
    role: "Full Stack Web Developer",
    company: "Intechzia Solutions",
    period: "03/2023 - 02/2024",
    description: "Started as a Full Stack Developer, collaborating with cross-functional teams to build and maintain scalable applications. Completed a 6-month intensive Full Stack internship.",
    achievements: [
      "Gained hands-on experience with HTML, CSS, JavaScript, React.js, Node.js and MongoDB",
      "Expanded new features and enhancements for web applications using React",
      "Worked with senior developers and product managers to deliver features on tight timelines",
      "Enhanced team coordination and problem-solving skills through live projects"
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
    period: "07/2021 - 08/2023",
    gpa: "First Class",
    achievements: [
      "Specialized in Full Stack Development",
      "Strong foundation in modern web technologies",
      "Focus on system architecture and development workflows"
    ]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Sant Gadge Baba Amravati University",
    period: "07/2017 - 07/2020",
    gpa: "First Class",
    achievements: [
      "Core computer science fundamentals",
      "Programming and software development",
      "Database management and web technologies"
    ]
  }
];

export const socialMedia = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://www.linkedin.com/in/syed-sajeed-2ba32a1a6', 
    followers: 'Connect', 
    color: 'from-blue-600 to-blue-800',
    iconColor: '#0077B5'
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/mrsajids', 
    followers: 'Follow', 
    color: 'from-gray-600 to-gray-800',
    iconColor: '#333333'
  },
  { 
    name: 'LeetCode', 
    icon: Code, 
    url: 'https://leetcode.com/u/sajeedsyed39/', 
    followers: 'Solve', 
    color: 'from-orange-600 to-yellow-600',
    iconColor: '#FFA116'
  },
  { 
    name: 'WhatsApp', 
    icon: whatsappSvg, 
    url: 'https://wa.me/917218771578', 
    followers: 'Message', 
    color: 'from-green-600 to-green-800',
    iconColor: '#25D366'
  }
];

export const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

export const contactInfo = [
  { icon: 'Mail', label: 'Email', text: 'sajeedsyed39@gmail.com' },
  { icon: 'Github', label: 'GitHub', text: '@sajeed' },
  { icon: 'Linkedin', label: 'LinkedIn', text: '/in/syed-sajeed' }
];
