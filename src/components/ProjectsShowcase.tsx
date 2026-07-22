import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Users, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
  category: 'Full-Stack' | 'IoT & Hardware' | 'AI & Mobile';
}

const projects: Project[] = [
  {
    id: 'notesmates',
    title: 'NotesMates.in',
    subtitle: "RGPV's Go-To Notes & Study Platform",
    role: 'Co-Founder & Full Stack Developer',
    period: 'Late 2024',
    description: 'Co-built RGPV\'s leading academic notes platform serving 1L+ page views and over 2,000 active students. Architected smooth payment workflows with Razorpay, subscription tiers, and Google AdSense monetization.',
    impact: 'Over 100,000+ views & 2,000+ registered active users',
    tags: ['Next.js', 'Prisma', 'Shadcn UI', 'Razorpay', 'Monetization'],
    metrics: [
      { label: 'Total Views', value: '100K+' },
      { label: 'Active Users', value: '2,000+' },
      { label: 'Monetization', value: 'Live' }
    ],
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'presentsir',
    title: 'PresentSir.in @ Idea Lab',
    subtitle: 'Smart ESP32-Based Attendance Hardware & App',
    role: 'Lead Developer & IoT Integrator',
    period: 'End 2024',
    description: 'Developed an end-to-end smart attendance system combining custom ESP32 microcontroller firmware with a cloud dashboard. Revolutionized traditional manual registers with real-time biometric and badge processing.',
    impact: 'Automated campus attendance across multiple batches',
    tags: ['ESP32', 'IoT', 'Next.js', 'Firebase', 'Hardware Integration'],
    metrics: [
      { label: 'Device Response', value: '<250ms' },
      { label: 'Hardware', value: 'ESP32 Wi-Fi' },
      { label: 'Deployment', value: 'Idea Lab' }
    ],
    featured: true,
    category: 'IoT & Hardware'
  },
  {
    id: 'outlawed',
    title: 'Outlawed.in',
    subtitle: 'CLAT Test Preparation Platform',
    role: 'Freelance Lead Developer',
    period: 'Mid 2025',
    description: 'Architected a comprehensive test prep platform for law aspirants featuring timed mock exams, instant answer key analysis, subscription tier access, and real-time performance analytics.',
    impact: 'Scaled to 1,000+ active aspirants taking timed mock tests',
    tags: ['Next.js', 'User Analytics', 'Payment Gateway', 'Timed Tests'],
    metrics: [
      { label: 'Active Aspirants', value: '1,000+' },
      { label: 'Mock Exams', value: '50+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'farmcs',
    title: 'Farmcs.in @ Idea Lab',
    subtitle: 'Agri-Tech AI & Drone Automation Platform',
    role: 'Full Stack & IoT Engineer',
    period: 'Mid 2024',
    description: 'Joined an agricultural technology startup uniting artificial intelligence, IoT sensors, and drones. Conducted hands-on technical workshops on IoT, AI, and 3D modeling for aspiring engineers.',
    impact: 'Built IoT sensor pipelines and drone data feeds',
    tags: ['Next.js', 'MongoDB', 'ESP32', 'Drones', 'Sensors'],
    metrics: [
      { label: 'Domain', value: 'Agri-Tech' },
      { label: 'Workshops', value: '10+' },
      { label: 'Tech', value: 'AI + Drones' }
    ],
    category: 'IoT & Hardware'
  },
  {
    id: 'gogreen',
    title: 'GoGreen (Kriyeta Hackathon - Top 5)',
    subtitle: 'AI Travel & City Sustainability Mobile App',
    role: 'Lead Mobile Developer',
    period: 'Mid 2025',
    description: 'Secured Top 5 position out of 2,000+ competing teams at Kriyeta Hackathon. Built an AI-driven city navigation app integrating TomTom & Google Maps APIs with Clerk authentication.',
    impact: 'Selected in Top 5 out of 2,000+ Teams',
    tags: ['React Native', 'Google Maps API', 'TomTom', 'Clerk', 'AI'],
    metrics: [
      { label: 'Hackathon Rank', value: 'Top 5 / 2000+' },
      { label: 'Platform', value: 'React Native' }
    ],
    featured: true,
    category: 'AI & Mobile'
  },
  {
    id: 'dakshedu',
    title: 'Dakshedu.in',
    subtitle: 'Instagram-Style Social Media Platform',
    role: 'Full Stack Architect',
    period: 'Early 2025',
    description: 'Designed and engineered an Instagram-inspired educational social platform with high-speed media rendering, user profiles, feeds, and scalable API backend routes.',
    impact: 'High-engagement social sharing interface',
    tags: ['Next.js', 'API Routes', 'Media Delivery', 'Social Graph'],
    metrics: [
      { label: 'Architecture', value: 'API-First' },
      { label: 'Feature Set', value: 'Social Feed' }
    ],
    category: 'Full-Stack'
  }
];

export const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'IoT & Hardware' | 'AI & Mobile'>('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Real-World Products & Startups</span>
            </div>
            <h2 className="section-heading text-4xl md:text-6xl">
              Featured Ventures<span className="accent-dot" />
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Full-Stack', 'IoT & Hardware', 'AI & Mobile'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  filter === cat
                    ? 'bg-accent text-accent-foreground font-bold shadow-lg'
                    : 'bg-card border border-border hover:border-accent/50 text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="journey-card group relative flex flex-col justify-between overflow-hidden border border-border bg-card/80 backdrop-blur-sm p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-muted-foreground">
                  <span className="text-accent font-semibold">{project.period}</span>
                  <Badge variant="outline" className="text-[10px] uppercase font-mono">
                    {project.category}
                  </Badge>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm font-body leading-relaxed text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-secondary/50 p-3 rounded-xl mb-6 text-center border border-border/50">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-display font-bold text-foreground">{m.value}</span>
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="italic">{project.role}</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent flex items-center gap-1 font-bold">
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
