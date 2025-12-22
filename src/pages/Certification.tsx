import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

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
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
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

const categories: { key: Category; label: string }[] = [
  { key: 'skills', label: 'Skill Certificates' },
  { key: 'hackathons', label: 'Hackathon Certificates' },
  { key: 'events', label: 'Event Certificates' },
  { key: 'others', label: 'Others' },
];

const Certification = () => {
  useLenis();
  const [activeCategory, setActiveCategory] = useState<Category>('skills');

  const filteredCertificates = certificates.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <section className="min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-heading mb-6">Certifications<span className="accent-dot" /></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              My professional certifications, hackathon achievements, and event participations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full font-body text-sm transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group journey-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No certificates in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Certification;
