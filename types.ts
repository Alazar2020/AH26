
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
  icon: string;
}

export interface Volunteer {
  organization: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}
