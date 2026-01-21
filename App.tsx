
import React, { useState, useEffect } from 'react';
import { 
  CONTACT_INFO, 
  SKILLS, 
  WORK_HISTORY, 
  EDUCATION_HISTORY, 
  VOLUNTEER_WORK 
} from './constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-white">AH.</a>
        
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-2">
      {title}
    </h2>
    <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen selection:bg-cyan-500 selection:text-zinc-950">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6">
        {/* Minimal Hero - No Bio */}
        <section id="home" className="pt-48 pb-32 md:pt-64 md:pb-48">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            Alazar <br />
            <span className="text-zinc-800">Hailemeskel</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-500 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              AI Specialist
            </span>
            <span className="hidden md:block text-zinc-800">/</span>
            <span>Java Automation Engineer</span>
            <span className="hidden md:block text-zinc-800">/</span>
            <span>MPAcc & MBA Candidate</span>
          </div>
        </section>

        {/* Experience - Stacked & Simple */}
        <section id="experience" className="py-24 border-t border-zinc-900">
          <SectionHeader title="Experience" />
          <div className="space-y-20">
            {WORK_HISTORY.map((job) => (
              <div key={job.company + job.period} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                  <span className="text-sm font-bold text-zinc-600">{job.period}</span>
                </div>
                <p className="text-zinc-400 font-semibold mb-6 uppercase tracking-wider text-xs">{job.company} — {job.location}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                  {job.bullets.map((bullet, i) => (
                    <div key={i} className="text-sm leading-relaxed text-zinc-500 flex gap-3">
                      <span className="text-zinc-800 mt-1">/</span>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills - Simple Grid */}
        <section id="skills" className="py-24 border-t border-zinc-900">
          <SectionHeader title="Expertise" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {SKILLS.map((cat) => (
              <div key={cat.name}>
                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">{cat.name}</h4>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Clean Layout */}
        <section id="education" className="py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <SectionHeader title="Education" />
              <div className="space-y-12">
                {EDUCATION_HISTORY.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-zinc-900 pl-6">
                    <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-zinc-500 text-sm mb-4">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3">
                      {edu.details.map(d => (
                        <span key={d} className="text-[10px] font-black text-cyan-500 uppercase tracking-tighter bg-cyan-500/10 px-2 py-1 rounded">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Leadership" />
              {VOLUNTEER_WORK.map((vol) => (
                <div key={vol.organization} className="p-8 bg-zinc-900/50 rounded-lg border border-zinc-900">
                  <h4 className="text-lg font-bold text-white mb-1">{vol.role}</h4>
                  <p className="text-cyan-500 text-xs font-bold uppercase mb-6 tracking-widest">{vol.organization}</p>
                  <ul className="space-y-3">
                    {vol.details.map((d, i) => (
                      <li key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3">
                        <span className="text-zinc-800">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - No Frills */}
        <section id="contact" className="py-48 border-t border-zinc-900">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter">Get in touch.</h2>
            <div className="flex flex-col gap-6">
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-2xl md:text-4xl font-light text-zinc-500 hover:text-white transition-all underline decoration-zinc-800 underline-offset-8"
              >
                {CONTACT_INFO.email}
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="text-xl md:text-2xl font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
          
          <div className="mt-48 flex flex-col md:flex-row items-center justify-between text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">
            <div>© {new Date().getFullYear()} ALAZAR H.</div>
            <div className="mt-4 md:mt-0">LOCATED IN BURIEN, WA</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
