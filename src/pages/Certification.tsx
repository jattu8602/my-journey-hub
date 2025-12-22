import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { useState } from 'react';
import { Award, Trophy, Calendar, Sparkles } from 'lucide-react';

type Category = 'skills' | 'hackathons' | 'events' | 'others';

interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Category;
}

const certificates: Certificate[] = [
  // Skill Certificates
  {
    id: 'skill-1',
    title: 'AWS Cloud Practitioner',
    description: 'Foundational understanding of AWS Cloud services and architecture.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    tags: ['AWS', 'Cloud', 'Infrastructure'],
    category: 'skills',
  },
  {
    id: 'skill-2',
    title: 'React Developer Certification',
    description: 'Advanced React patterns, hooks, and state management expertise.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    tags: ['React', 'Frontend', 'JavaScript'],
    category: 'skills',
  },
  {
    id: 'skill-3',
    title: 'Python for Data Science',
    description: 'Data analysis, visualization, and machine learning with Python.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
    tags: ['Python', 'Data Science', 'ML'],
    category: 'skills',
  },
  // Hackathon Certificates
  {
    id: 'hack-1',
    title: 'HackTheNorth 2024 Winner',
    description: 'First place in the AI/ML category for building an innovative solution.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    tags: ['Winner', 'AI/ML', '1st Place'],
    category: 'hackathons',
  },
  {
    id: 'hack-2',
    title: 'DevPost Global Hackathon',
    description: 'Participated in 48-hour global hackathon building a sustainability app.',
    image: 'https://images.unsplash.com/photo-531482615713-2afd69097998?w=400&h=300&fit=crop',
    tags: ['Sustainability', 'Global', 'Team'],
    category: 'hackathons',
  },
  // Event Certificates
  {
    id: 'event-1',
    title: 'Google I/O Extended 2024',
    description: 'Attended Google I/O Extended with hands-on workshops on AI tools.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    tags: ['Google', 'AI', 'Workshop'],
    category: 'events',
  },
  {
    id: 'event-2',
    title: 'React Conf 2024',
    description: 'Participated in React Conf learning about React 19 and Server Components.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
    tags: ['React', 'Conference', 'Networking'],
    category: 'events',
  },
  // Others
  {
    id: 'other-1',
    title: 'Open Source Contributor',
    description: 'Recognized contributor to major open source projects.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop',
    tags: ['Open Source', 'GitHub', 'Community'],
    category: 'others',
  },
];

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: 'skills', label: 'Skills', icon: <Award className="w-4 h-4" /> },
  { key: 'hackathons', label: 'Hackathons', icon: <Trophy className="w-4 h-4" /> },
  { key: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
  { key: 'others', label: 'Others', icon: <Sparkles className="w-4 h-4" /> },
];

const Certification = () => {
  useLenis();
  const [activeCategory, setActiveCategory] = useState<Category>('skills');

  const filteredCertificates = certificates.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-primary">
      <Navigation />
      
      <section className="min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Certifications<span className="inline-block w-3 h-3 rounded-full ml-2 bg-accent" />
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
              My professional certifications, hackathon achievements, and event participations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 border ${
                  activeCategory === cat.key
                    ? 'bg-accent text-accent-foreground border-accent shadow-[0_0_20px_hsl(32_95%_55%/0.4)]'
                    : 'bg-transparent text-primary-foreground/70 border-primary-foreground/20 hover:border-accent/50 hover:text-primary-foreground'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(32_95%_55%/0.15)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/10 transition-all duration-500" />
                
                {/* Image with overlay */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/90 text-accent-foreground rounded-full">
                      {categories.find(c => c.key === cert.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-primary-foreground group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary-foreground/10 text-primary-foreground/70 rounded-full border border-primary-foreground/10 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary-foreground/50">No certificates in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Certification;
