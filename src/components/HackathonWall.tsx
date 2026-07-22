import React from 'react';
import { Trophy, Award, Medal, Sparkles, Star, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Honor {
  id: string;
  title: string;
  rank: string;
  event: string;
  organizer: string;
  prize?: string;
  description: string;
  tags: string[];
  icon: 'trophy' | 'award' | 'medal';
  color: string;
}

const honors: Honor[] = [
  {
    id: 'lnct-winner',
    title: '2nd Prize — Website Development Competition',
    rank: 'Winner (2nd Place)',
    event: 'LNCT Group Website Competition',
    organizer: 'LNCT Bhopal',
    prize: '₹7,500 Cash Prize',
    description: 'Secured 2nd position among 100+ competing teams by engineering a ultra-fast website integrated with Gemini AI API, custom prompts, and optimized video playback.',
    tags: ['Next.js', 'Gemini AI', 'Cash Prize', 'Web Dev'],
    icon: 'trophy',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-500'
  },
  {
    id: 'testverse-aiml',
    title: 'Best AI/ML Solution Winner',
    rank: 'Award Winner',
    event: 'Testverse Hack-to-Hire Ideathon',
    organizer: 'Testverse Ideathon',
    prize: 'Best AI/ML Solution Award',
    description: 'Awarded the Best AI/ML Solution title for building an automated intelligent assessment model that evaluates candidate technical solutions in real-time.',
    tags: ['Winner', 'AI/ML', 'Ideathon', 'Automation'],
    icon: 'award',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400'
  },
  {
    id: 'kriyeta-top5',
    title: 'Top 5 Finalist (Out of 2,000+ Teams)',
    rank: 'Top 5 Finalist',
    event: 'Kriyeta 4.0 National Hackathon',
    organizer: 'Acropolis Institute',
    description: 'Selected in the Top 5 among 2,000+ participating teams nationwide for building GoGreen—an AI travel & urban city management mobile app using React Native & TomTom APIs.',
    tags: ['Top 5', '2000+ Teams', 'React Native', 'Hackathon'],
    icon: 'medal',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'prayatna-top8',
    title: 'Top 8 Finalist (Out of 3,000+ Teams)',
    rank: 'Top 8 Finalist',
    event: 'Prayatna 2.0 Hackathon',
    organizer: 'Acropolis Institute',
    description: 'Competed solo against 3,000+ teams to build a Flutter mobile app integrated with Firebase for PresentSir.in smart attendance system.',
    tags: ['Top 8', '3000+ Teams', 'Solo Build', 'Flutter'],
    icon: 'medal',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-400'
  },
  {
    id: 'hackwave-ext',
    title: 'Local AI Browser Extension',
    rank: 'Hackathon Contender',
    event: 'HackWave 2.0',
    organizer: 'CDGI Indore',
    description: 'Engineered a Chrome extension leveraging local AI capabilities and Chrome API for real-time browser text summarization and context automation.',
    tags: ['Chrome Extension', 'Local AI', 'Manifest V3'],
    icon: 'award',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-400'
  }
];

export const HackathonWall = () => {
  return (
    <section id="hackathons" className="py-24 px-6 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4" />
            <span>Competitive Milestones</span>
          </div>
          <h2 className="section-heading text-4xl md:text-6xl mb-4">
            Hackathons & Victory Wall<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-body">
            Proving technical execution under time pressure in national level ideathons and coding hackathons.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honors.map((item) => (
            <div
              key={item.id}
              className={`journey-card relative flex flex-col justify-between p-8 rounded-2xl border bg-gradient-to-br ${item.color} backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-lg`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-background/80 shadow-md">
                    {item.icon === 'trophy' && <Trophy className="w-6 h-6 text-amber-500" />}
                    {item.icon === 'award' && <Award className="w-6 h-6 text-purple-400" />}
                    {item.icon === 'medal' && <Medal className="w-6 h-6 text-emerald-400" />}
                  </div>
                  {item.prize && (
                    <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/40 font-mono text-xs">
                      {item.prize}
                    </Badge>
                  )}
                </div>

                {/* Rank & Organizer */}
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-1">
                  {item.rank} • {item.organizer}
                </span>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-body leading-relaxed text-muted-foreground mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-background/60 text-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
