
import React from 'react';

// --- Full Data Restored from Constants ---
const CONTACT = {
  name: "Alazar Hailemeskel",
  location: "Burien, WA 98166",
  phone: "206-714-0487",
  email: "alazarhailemeskel09@gmail.com",
};

const EXPERIENCE = [
  {
    title: "AI Math Specialist (RLHF & Data Quality)",
    company: "Outlier AI",
    location: "Seattle, WA",
    period: "Feb 2024 — Jan 2025",
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
    period: "May 2021 — Aug 2023",
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
    period: "May 2018 — Dec 2020",
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
    period: "May 2015 — Dec 2020",
    bullets: [
      "Analyzed social media content for adherence to platform policies and community standards.",
      "Conducted detailed assessments to identify and remove inappropriate or harmful content.",
      "Collaborated with a global team to implement best practices for moderating multimodal content.",
      "Provided feedback on moderation tools to enhance AI-driven decision-making."
    ]
  }
];

const SKILLS = [
  { category: "Data Analytics", items: ["R", "SQL", "Excel", "MATLAB"] },
  { category: "Programming & Web", items: ["Java", "HTML", "JavaScript", "Git"] },
  { category: "Finance & Accounting", items: ["Financial Analysis", "Valuation", "Cost Accounting", "U.S. GAAP"] },
  { category: "Collaboration", items: ["Microsoft 365", "Google Workspace", "Agile Methodology"] }
];

const EDUCATION = [
  {
    degree: "Dual Master’s: Prof. Accounting (MPAcc) & MBA",
    school: "Eastern Washington University",
    location: "Cheney, WA",
    year: "Exp. June 2026",
    details: ["GPA: 3.7/4.0"]
  },
  {
    degree: "B.A. Economics, Minor in Mathematics",
    school: "East Tennessee State University",
    location: "Johnson City, TN",
    year: "Dec 2020",
    details: ["Graduated with Honors"]
  }
];

const LEADERSHIP = [
  {
    organization: "Black Affairs Association",
    role: "Member / Volunteer",
    period: "2016 — 2017",
    details: [
      "Audit and maintain accurate records of all financial transactions.",
      "Prepare and present financial reports at regular meetings.",
      "Work closely with board members to achieve organizational goals.",
      "Organize and help coordinate events to ensure smooth execution."
    ]
  }
];

const AWARDS = ["National Honor & Merit Scholars Society"];

// --- Components ---

const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className="py-20 first:pt-0">
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:w-1/4">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 sticky top-24">
          {title}
        </h2>
      </div>
      <div className="md:w-3/4">
        {children}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
      {/* Header */}
      <header className="mb-32">
        <div className="flex justify-between items-start mb-20">
          <div className="text-xs font-bold tracking-tighter text-white border-l-2 border-emerald-500 pl-4">
            PORTFOLIO MMXXV
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            {CONTACT.location}
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
          ALAZAR<br />
          HAILEMESKEL
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            AI Data Quality
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            Java Automation
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            Financial Analytics
          </span>
        </div>
      </header>

      {/* Experience */}
      <Section title="Experience" id="experience">
        <div className="space-y-20">
          {EXPERIENCE.map((job) => (
            <div key={job.company + job.title} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {job.title}
                </h3>
                <span className="text-xs font-mono text-zinc-600 whitespace-nowrap ml-4">{job.period}</span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-500/60 mb-8">
                {job.company} — {job.location}
              </div>
              <ul className="space-y-4 max-w-2xl">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-500 leading-relaxed flex gap-4">
                    <span className="text-zinc-800 shrink-0 mt-1">/</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Expertise" id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {SKILLS.map((s) => (
            <div key={s.category}>
              <h4 className="text-[10px] font-bold text-zinc-100 uppercase tracking-widest mb-6 border-b border-zinc-900 pb-2">
                {s.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="text-xs text-zinc-500 bg-zinc-900/50 border border-zinc-900 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" id="education">
        <div className="space-y-16">
          {EDUCATION.map((edu) => (
            <div key={edu.degree}>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-lg font-bold text-zinc-100">{edu.degree}</h4>
                <span className="text-xs font-mono text-zinc-600">{edu.year}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">{edu.school} • {edu.location}</p>
              <div className="flex gap-4">
                {edu.details.map(detail => (
                  <span key={detail} className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership & Awards */}
      <Section title="Recognition">
        <div className="space-y-12">
          {LEADERSHIP.map((vol) => (
            <div key={vol.organization}>
              <h4 className="text-lg font-bold text-zinc-100 mb-1">{vol.role}</h4>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">{vol.organization} • {vol.period}</p>
              <ul className="space-y-3">
                {vol.details.map((d, i) => (
                  <li key={i} className="text-sm text-zinc-500 leading-relaxed flex gap-4">
                    <span className="text-zinc-800 shrink-0">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pt-8 border-t border-zinc-900">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Honors</h4>
            {AWARDS.map(award => (
              <div key={award} className="text-sm text-zinc-300 font-medium">
                {award}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Connect" id="contact">
        <div className="space-y-10">
          <a 
            href={`mailto:${CONTACT.email}`}
            className="block text-3xl md:text-5xl font-black text-white hover:text-emerald-500 transition-all tracking-tighter"
          >
            {CONTACT.email}
          </a>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-baseline">
            <a href={`tel:${CONTACT.phone}`} className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
              {CONTACT.phone}
            </a>
            <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] border border-zinc-900 px-3 py-1 rounded-full">
              Available for Remote Opportunities
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-48 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-700">
        <div>© {new Date().getFullYear()} ALAZAR HAILEMESKEL</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
