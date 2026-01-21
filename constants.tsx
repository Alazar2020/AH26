
import { Experience, Education, SkillCategory, Volunteer } from './types';

export const CONTACT_INFO = {
  name: "Alazar Hailemeskel",
  location: "Burien, WA 98166",
  phone: "206-714-0487",
  email: "alazarhailemeskel09@gmail.com",
  linkedin: "https://linkedin.com", // Placeholder
  github: "https://github.com"      // Placeholder
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Data Analytics",
    items: ["R", "SQL", "Excel", "MATLAB"],
    icon: "📊"
  },
  {
    name: "Programming & Web",
    items: ["Java", "HTML", "JavaScript"],
    icon: "💻"
  },
  {
    name: "Finance & Accounting",
    items: ["Financial Analysis", "Valuation", "Cost Accounting", "U.S. GAAP"],
    icon: "📈"
  },
  {
    name: "Collaboration",
    items: ["Microsoft 365", "Google Workspace", "Agile Methodology", "Git"],
    icon: "🤝"
  }
];

export const WORK_HISTORY: Experience[] = [
  {
    title: "AI Math Specialist (RLHF & Data Quality)",
    company: "Outlier AI",
    location: "Seattle, WA",
    period: "February 2024 - January 2025",
    bullets: [
      "Identified anomalies and potential errors in structured data, flagging potential quality risks.",
      "Collaborated with cross-functional teams to assess, test, and evaluate AI-generated content.",
      "Reviewed and rated prompts created by others to ensure high accuracy and consistency in AI training.",
      "Partnered with remote teams to maintain consistent performance and meet tight deadlines.",
      "Assisted with day-to-day operations, working efficiently and productively with all team members."
    ]
  },
  {
    title: "Java Automation Engineer",
    company: "Renature",
    location: "Seattle, WA",
    period: "May 2021 - August 2023",
    bullets: [
      "Utilized version control systems such as Git for efficient collaboration and project management.",
      "Defined and continuously improved software development best practices.",
      "Collaborated with cross-functional teams to ensure seamless integration of software components.",
      "Maintained existing software through bug fixes and enhancements.",
      "Participated in Agile development processes (Scrum), including daily stand-ups and sprint planning.",
      "Optimized application performance through profiling tools, refactoring, and caching strategies."
    ]
  },
  {
    title: "Student Office Assistant",
    company: "East Tennessee State University",
    location: "Johnson City, TN",
    period: "May 2018 - December 2020",
    bullets: [
      "Performing administrative duties related to students' programs.",
      "Answer phones, greet visitors, and provide general information about the department.",
      "Perform tasks including filing, photocopying, scanning, and data entry.",
      "Schedule appointments and maintain office calendars.",
      "Handle incoming and outgoing mail or campus deliveries."
    ]
  },
  {
    title: "Content Moderator",
    company: "Appen Ltd",
    location: "Remote",
    period: "May 2015 - December 2020",
    bullets: [
      "Analyzed social media content for adherence to platform policies and community standards.",
      "Conducted detailed assessments to identify and remove inappropriate or harmful content.",
      "Collaborated with a global team to implement best practices for moderating multimodal content.",
      "Provided feedback on moderation tools to enhance AI-driven decision-making."
    ]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    institution: "Eastern Washington University",
    location: "Cheney, WA",
    degree: "Dual Master’s Degree in Professional Accounting (MPAcc) and Business Administration (MBA)",
    details: ["Expected Graduation: June 2026", "GPA: 3.7/4.0"]
  },
  {
    institution: "East Tennessee State University",
    location: "Johnson City, TN",
    degree: "Bachelor of Arts in Economics, Minor in Mathematics",
    details: ["Graduated: December 2020"]
  }
];

export const VOLUNTEER_WORK: Volunteer[] = [
  {
    organization: "Black Affairs Association – Multicultural Affairs Organizations",
    role: "Member / Volunteer",
    location: "Johnson City, TN",
    period: "May 2016 - December 2017",
    details: [
      "Audit and maintain accurate records of all financial transactions.",
      "Prepare and present financial reports at regular meetings.",
      "Work closely with the president and other executive board members to achieve goals.",
      "Organize and help coordinate events to ensure smooth execution."
    ]
  }
];

export const AWARDS = [
  "National Honor & Merit Scholars Society"
];
