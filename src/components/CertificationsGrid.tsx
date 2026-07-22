import React, { useState } from 'react';
import { Award, ShieldCheck, X, Maximize2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Certificate Imports
import kriyetaParticipate from '@/assets/certificates/kriyeta-4-0-participation.jpeg';
import virtualVistaParticipate from '@/assets/certificates/virtual-vista-2-0-participation.jpeg';
import hackwaveParticipate from '@/assets/certificates/hackwave-2-0-participation.jpeg';
import pravahIdeathon from '@/assets/certificates/pravah-2025-ideathon.jpeg';
import websiteDevPrize from '@/assets/certificates/website-development-competition-2nd-prize.jpeg';
import googleSolution from '@/assets/certificates/google-solution-challenge-achievement.jpeg';
import bestAiSolution from '@/assets/certificates/best-ai-ml-solution-testverse.jpg';
import introCybersecurity from '@/assets/certificates/introduction-to-cybersecurity.jpeg';
import learningDocker from '@/assets/certificates/learning-docker.jpeg';
import githubActions from '@/assets/certificates/practical-github-actions.jpeg';
import awsCourse from '@/assets/certificates/aws-free-course-completion.png';
import introIot from '@/assets/certificates/intro-to-iot-and-digital-transformation.jpg';
import sweAgile from '@/assets/certificates/software-engineering-and-agile.jpg';
import applyAi from '@/assets/certificates/apply-ai-analyze-customer-reviews.jpg';
import introModernAi from '@/assets/certificates/introduction-to-modern-ai.jpg';
import projectMgmt from '@/assets/certificates/practical-github-project-management.jpg';
import javaFoundation from '@/assets/certificates/associate-in-it-foundation-skills-java.jpg';
import dbms1 from '@/assets/certificates/dbms-part-1.jpg';
import progJava from '@/assets/certificates/programming-using-java.jpg';
import noSql from '@/assets/certificates/introduction-to-nosql-databases.jpg';
import sweAgile2 from '@/assets/certificates/software-engineering-and-agile-2.jpg';
import dsaJava from '@/assets/certificates/data-structures-and-algorithms-using-java.jpg';
import dbms2 from '@/assets/certificates/dbms-part-2.jpg';

interface Cert {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'agile' | 'ai' | 'hackathon';
  image: string;
  tags: string[];
}

const certs: Cert[] = [
  {
    id: 'aws-cloud',
    title: 'AWS Certified Cloud Practitioner & Course',
    issuer: 'Amazon Web Services',
    category: 'cloud',
    image: awsCourse,
    tags: ['AWS', 'Cloud', 'Architecture']
  },
  {
    id: 'testverse-ai',
    title: 'Best AI/ML Solution Winner',
    issuer: 'Testverse Ideathon',
    category: 'hackathon',
    image: bestAiSolution,
    tags: ['Winner', 'AI/ML']
  },
  {
    id: 'website-prize',
    title: '2nd Prize Website Development',
    issuer: 'LNCT Group',
    category: 'hackathon',
    image: websiteDevPrize,
    tags: ['Winner', 'Web Dev', 'Gemini AI']
  },
  {
    id: 'docker',
    title: 'Learning Docker & Containers',
    issuer: 'LinkedIn Learning',
    category: 'cloud',
    image: learningDocker,
    tags: ['Docker', 'DevOps', 'Containers']
  },
  {
    id: 'github-actions',
    title: 'Practical GitHub Actions CI/CD',
    issuer: 'GitHub / LinkedIn',
    category: 'cloud',
    image: githubActions,
    tags: ['CI/CD', 'GitHub Actions', 'Automation']
  },
  {
    id: 'cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'cloud',
    image: introCybersecurity,
    tags: ['Security', 'Cisco', 'Networks']
  },
  {
    id: 'swe-agile-1',
    title: 'Software Engineering & Agile Methodologies I',
    issuer: 'Professional Course',
    category: 'agile',
    image: sweAgile,
    tags: ['Agile', 'Scrum', 'Software Eng']
  },
  {
    id: 'swe-agile-2',
    title: 'Software Engineering & Agile Methodologies II',
    issuer: 'Professional Course',
    category: 'agile',
    image: sweAgile2,
    tags: ['Agile Architecture', 'System Design']
  },
  {
    id: 'intro-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'AI Institute',
    category: 'ai',
    image: introModernAi,
    tags: ['Artificial Intelligence', 'LLMs']
  },
  {
    id: 'apply-ai',
    title: 'Apply AI: Customer Review Sentiment',
    issuer: 'AI & Data',
    category: 'ai',
    image: applyAi,
    tags: ['NLP', 'Sentiment Analysis']
  },
  {
    id: 'iot-digital',
    title: 'Intro to IoT & Digital Transformation',
    issuer: 'Cisco Academy',
    category: 'cloud',
    image: introIot,
    tags: ['IoT', 'Hardware', 'Sensors']
  },
  {
    id: 'dsa-java',
    title: 'Data Structures & Algorithms in Java',
    issuer: 'Scaler & NPTEL',
    category: 'agile',
    image: dsaJava,
    tags: ['DSA', 'Java', 'Algorithms']
  }
];

export const CertificationsGrid = () => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [filter, setFilter] = useState<'all' | 'cloud' | 'agile' | 'ai' | 'hackathon'>('all');

  const filteredCerts = filter === 'all' ? certs : certs.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 px-6 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Knowledge & Accreditations</span>
            </div>
            <h2 className="section-heading text-4xl md:text-6xl">
              Certifications & Credentials<span className="accent-dot" />
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All', value: 'all' },
              { label: 'Cloud & DevOps', value: 'cloud' },
              { label: 'AI & ML', value: 'ai' },
              { label: 'Software Eng', value: 'agile' },
              { label: 'Hackathons', value: 'hackathon' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  filter === tab.value
                    ? 'bg-accent text-accent-foreground font-bold shadow-lg'
                    : 'bg-card border border-border hover:border-accent/40 text-muted-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="journey-card group cursor-pointer border border-border bg-card overflow-hidden rounded-2xl flex flex-col justify-between p-4 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 shadow-md"
            >
              <div>
                <div className="relative overflow-hidden rounded-xl bg-black/5 aspect-[4/3] mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="flex items-center gap-1 font-mono text-xs font-bold bg-accent/90 px-3 py-1.5 rounded-full">
                      VIEW CREDENTIAL <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase text-accent block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="font-display text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors mb-3">
                  {cert.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-border/50">
                {cert.tags.map((t) => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl overflow-y-auto">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-secondary hover:bg-accent hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-accent font-bold uppercase">{selectedCert.issuer}</span>
              <h3 className="text-2xl font-display font-bold text-foreground mt-1">{selectedCert.title}</h3>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-black/90 p-2 mb-4">
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto max-h-[60vh] object-contain mx-auto" />
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground pt-2 border-t border-border">
              <span>VERIFIED CREDENTIAL DOCUMENT</span>
              <button onClick={() => setSelectedCert(null)} className="text-accent font-bold hover:underline">
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
