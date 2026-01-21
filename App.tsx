
import React from 'react';
import { 
  CONTACT_INFO, 
  SKILLS, 
  WORK_HISTORY, 
  EDUCATION_HISTORY, 
  VOLUNTEER_WORK 
} from './constants';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-8 flex items-center gap-4">
    {children}
    <div className="h-[1px] bg-zinc-900 flex-grow"></div>
  </h2>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-32">
      {/* Minimal Header */}
      <header className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <div className="flex justify-between items-start mb-12">
          <div className="text-sm font-bold tracking-tighter text-emerald-500">AH.</div>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 px-3 py-1 rounded-full"
          >
            Available for hire
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
          Alazar <br />
          Hailemeskel
        </h1>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-500">
          <span className="flex items-center gap-2">AI Math Specialist</span>
          <span className="text-zinc-800">/</span>
          <span className="flex items-center gap-2">Java Automation</span>
          <span className="text-zinc-800">/</span>
          <span className="flex items-center gap-2">MPAcc & MBA</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 space-y-32">
        {/* Experience Section */}
        <section id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-16">
            {WORK_HISTORY.map((job) => (
              <div key={job.company + job.period} className="relative group">
                <div className="flex flex-col md:flex-row md:justify-between items-baseline gap-1 mb-4">
                  <h3 className="text-xl font-bold text-zinc-100">{job.title}</h3>
                  <span className="text-xs font-mono text-zinc-600 tabular-nums">{job.period}</span>
                </div>
                <div className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                  {job.company} — {job.location}
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-zinc-500 leading-relaxed flex gap-3">
                      <span className="text-zinc-800">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionLabel>Expertise</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {SKILLS.map((cat) => (
              <div key={cat.name}>
                <h4 className="text-xs font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-lg opacity-50">{cat.icon}</span>
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="text-[11px] font-bold text-zinc-400 bg-zinc-900 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-12">
            {EDUCATION_HISTORY.map((edu) => (
              <div key={edu.degree}>
                <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold text-zinc-100">{edu.degree}</h4>
                  <div className="flex gap-2">
                    {edu.details.map(d => (
                      <span key={d} className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter px-2 py-0.5 bg-emerald-500/5 rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-zinc-500">{edu.institution} • {edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-20 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter mb-4">Let's connect.</h2>
              <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                Currently looking for engineering and data analyst roles in Washington and remote.
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-xl font-bold text-white hover:text-emerald-500 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
                  {CONTACT_INFO.phone}
                </a>
                <span className="text-zinc-800">/</span>
                <span className="text-xs font-bold text-zinc-700 uppercase tracking-widest">
                  {CONTACT_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto px-6 mt-32 text-center">
        <div className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.5em]">
          Designed by Alazar • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default App;
