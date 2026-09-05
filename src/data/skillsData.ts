export interface SkillItem {
  name: string;
  percent: number;
  level: string;
  color: string;
  category: 'backend' | 'frontend' | 'devops' | 'creative';
  highlight?: boolean;
}

export const skillsData: SkillItem[] = [
  // Backend & Systems
  { name: 'Node.js & Express', percent: 95, level: 'Advanced / Lead', color: '#14b8a6', category: 'backend', highlight: true },
  { name: 'Socket.io (Real-Time)', percent: 95, level: 'Mastery', color: '#0d9488', category: 'backend', highlight: true },
  { name: 'MongoDB & Pipelines', percent: 92, level: 'Advanced', color: '#10b981', category: 'backend', highlight: true },
  { name: 'Python & Asyncio', percent: 90, level: 'Advanced', color: '#06b6d4', category: 'backend', highlight: true },
  { name: 'RAM & In-Memory Cache', percent: 90, level: 'Advanced', color: '#2dd4bf', category: 'backend' },
  { name: 'PHP & Server Automation', percent: 88, level: 'Senior', color: '#6366f1', category: 'backend' },
  { name: 'C++ & DLL / POS Interop', percent: 68, level: 'Intermediate', color: '#3b82f6', category: 'backend' },
  { name: 'Microservices & REST APIs', percent: 94, level: 'Lead', color: '#10b981', category: 'backend', highlight: true },

  // Frontend & Mobile
  { name: 'TypeScript & Modern JS', percent: 92, level: 'Advanced', color: '#0d9488', category: 'frontend', highlight: true },
  { name: 'React & Vite', percent: 88, level: 'Advanced', color: '#14b8a6', category: 'frontend', highlight: true },
  { name: 'React Native & Expo (iOS)', percent: 82, level: 'Proficient', color: '#2dd4bf', category: 'frontend' },
  { name: 'Tailwind CSS & Glassmorphism', percent: 94, level: 'Mastery', color: '#38bdf8', category: 'frontend', highlight: true },
  { name: 'Responsive Web Architecture', percent: 90, level: 'Advanced', color: '#10b981', category: 'frontend' },

  // DevOps & Tools
  { name: 'Telegram Bot API / Async', percent: 98, level: 'Expert', color: '#229ed9', category: 'devops', highlight: true },
  { name: 'Linux OS & Shell Scripting', percent: 88, level: 'Advanced', color: '#10b981', category: 'devops' },
  { name: 'cPanel & WHM API Automation', percent: 90, level: 'Advanced', color: '#f97316', category: 'devops' },
  { name: 'Git & GitHub Workflows', percent: 88, level: 'Advanced', color: '#14b8a6', category: 'devops' },
  { name: 'TCP/IP Sockets & POS Scanners', percent: 85, level: 'Proficient', color: '#0d9488', category: 'devops' },

  // Creative & Design
  { name: 'Adobe Photoshop', percent: 100, level: 'Mastery', color: '#0284c7', category: 'creative', highlight: true },
  { name: 'Adobe Illustrator', percent: 100, level: 'Mastery', color: '#ea580c', category: 'creative', highlight: true },
  { name: 'UI / UX Product Design', percent: 88, level: 'Senior', color: '#14b8a6', category: 'creative' },
  { name: 'Adobe Premiere Pro', percent: 72, level: 'Intermediate', color: '#dc2626', category: 'creative' },
];
