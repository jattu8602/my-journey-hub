import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

// Certificate Imports
import scalerJavaDsa from '@/assets/certificates/scaler_java_dsa.jpg';
import designSpeaksHackathon from '@/assets/certificates/designspeaks_hackathon.jpg';
import niteshCompletion from '@/assets/certificates/nitesh_completion.jpg';

// Day 41 - Design Speaks Learning Series
import designSpeaksDay41_1 from '@/assets/certificates/designspeaks_day41_1.jpg';
import designSpeaksDay41_2 from '@/assets/certificates/designspeaks_day41_2.jpg';
import designSpeaksDay41_3 from '@/assets/certificates/designspeaks_day41_3.jpg';
import designSpeaksDay41_4 from '@/assets/certificates/designspeaks_day41_4.jpg';

// Day 45 - Nitesh Chourasiya Series
import niteshDay45_1 from '@/assets/certificates/nitesh_day45_1.jpg';
import niteshDay45_2 from '@/assets/certificates/nitesh_day45_2.jpg';
import niteshDay45_3 from '@/assets/certificates/nitesh_day45_3.jpg';
import niteshDay45_4 from '@/assets/certificates/nitesh_day45_4.jpg';
import niteshDay45_5 from '@/assets/certificates/nitesh_day45_5.jpg';
import niteshDay45_6 from '@/assets/certificates/nitesh_day45_6.jpg';
import niteshDay45_7 from '@/assets/certificates/nitesh_day45_7.jpg';

// Miscellaneous / Unclassified Certificates
import miscCert1 from '@/assets/certificates/1745643309589.jpeg';
import miscCert2 from '@/assets/certificates/1745830533036.jpeg';
import miscCert3 from '@/assets/certificates/1754470361202.jpeg';
import miscCert4 from '@/assets/certificates/1755091546132.jpeg';
import miscCert5 from '@/assets/certificates/1756732531282.jpeg';
import miscCert6 from '@/assets/certificates/1757604796275.jpeg';
import miscCert7 from '@/assets/certificates/1757605903538.jpeg';
import miscCert8 from '@/assets/certificates/1759947657838.jpeg';
import miscCert9 from '@/assets/certificates/1759950513779.jpeg';
import miscCert10 from '@/assets/certificates/72623b425fb74f61ee3b8b09778385aa003c54cec00e94f8b0198463acdadedd.png';

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
  // --- Skills ---
  {
    id: 'scaler-dsa',
    title: 'Java & DSA Certification',
    description: 'Comprehensive data structures and algorithms training with Java by Scaler.',
    image: scalerJavaDsa,
    tags: ['Java', 'DSA', 'Problem Solving'],
    category: 'skills',
  },
  {
    id: 'design-speaks-41-1',
    title: 'Design Speaks - Learning Series I',
    description: 'Part 1 of the 41-day design learning challenge.',
    image: designSpeaksDay41_1,
    tags: ['Design', 'Learning', 'Challenge'],
    category: 'skills',
  },
  {
    id: 'design-speaks-41-2',
    title: 'Design Speaks - Learning Series II',
    description: 'Part 2 of the 41-day design learning challenge.',
    image: designSpeaksDay41_2,
    tags: ['Design', 'UI/UX'],
    category: 'skills',
  },
  {
    id: 'design-speaks-41-3',
    title: 'Design Speaks - Learning Series III',
    description: 'Part 3 of the 41-day design learning challenge.',
    image: designSpeaksDay41_3,
    tags: ['Design', 'Creativity'],
    category: 'skills',
  },
  {
    id: 'design-speaks-41-4',
    title: 'Design Speaks - Learning Series IV',
    description: 'Part 4 of the 41-day design learning challenge.',
    image: designSpeaksDay41_4,
    tags: ['Design', 'Typography'],
    category: 'skills',
  },
  {
    id: 'nitesh-day45-1',
    title: '45-Day Coding Challenge - Milestone I',
    description: 'Achievement in the 45-day consistent coding streak.',
    image: niteshDay45_1,
    tags: ['Coding', 'Consistency', 'Streak'],
    category: 'skills',
  },
  {
    id: 'nitesh-day45-2',
    title: '45-Day Coding Challenge - Milestone II',
    description: 'Advanced concepts covered during the 45-day challenge.',
    image: niteshDay45_2,
    tags: ['Coding', 'Web Dev'],
    category: 'skills',
  },
  {
    id: 'nitesh-day45-3',
    title: '45-Day Coding Challenge - Milestone III',
    description: 'Project submissions for the 45-day challenge.',
    image: niteshDay45_3,
    tags: ['Projects', 'Development'],
    category: 'skills',
  },
   {
    id: 'nitesh-day45-4',
    title: '45-Day Coding Challenge - Milestone IV',
    description: 'Data structures mastery verification.',
    image: niteshDay45_4,
    tags: ['DSA', 'Logic'],
    category: 'skills',
  },
   {
    id: 'nitesh-day45-5',
    title: '45-Day Coding Challenge - Milestone V',
    description: 'System design and architecture concepts.',
    image: niteshDay45_5,
    tags: ['Architecture', 'System Design'],
    category: 'skills',
  },
   {
    id: 'nitesh-day45-6',
    title: '45-Day Coding Challenge - Milestone VI',
    description: 'Full stack development proficiency.',
    image: niteshDay45_6,
    tags: ['Full Stack', 'Backend'],
    category: 'skills',
  },
   {
    id: 'nitesh-day45-7',
    title: '45-Day Coding Challenge - Milestone VII',
    description: 'Final completion and excellence award.',
    image: niteshDay45_7,
    tags: ['Excellence', 'Completion'],
    category: 'skills',
  },

  // --- Hackathons ---
  {
    id: 'design-hackathon',
    title: 'Design Speaks Hackathon',
    description: 'Participant/Winner in the Design Speaks rigorous hackathon event.',
    image: designSpeaksHackathon,
    tags: ['Hackathon', 'Design', 'Competition'],
    category: 'hackathons',
  },

  // --- Others / Unclassified ---
  {
    id: 'cert-completion',
    title: 'Certificate of Completion',
    description: 'Program completion certificate.',
    image: niteshCompletion,
    tags: ['Course', 'Completion'],
    category: 'others',
  },
  {
    id: 'misc-1',
    title: 'Professional Achievement I',
    description: 'Various professional milestones and recognitions.',
    image: miscCert1,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-2',
    title: 'Professional Achievement II',
    description: 'Various professional milestones and recognitions.',
    image: miscCert2,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-3',
    title: 'Professional Achievement III',
    description: 'Various professional milestones and recognitions.',
    image: miscCert3,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-4',
    title: 'Professional Achievement IV',
    description: 'Various professional milestones and recognitions.',
    image: miscCert4,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-5',
    title: 'Professional Achievement V',
    description: 'Various professional milestones and recognitions.',
    image: miscCert5,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-6',
    title: 'Professional Achievement VI',
    description: 'Various professional milestones and recognitions.',
    image: miscCert6,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-7',
    title: 'Professional Achievement VII',
    description: 'Various professional milestones and recognitions.',
    image: miscCert7,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-8',
    title: 'Professional Achievement VIII',
    description: 'Various professional milestones and recognitions.',
    image: miscCert8,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-9',
    title: 'Professional Achievement IX',
    description: 'Various professional milestones and recognitions.',
    image: miscCert9,
    tags: ['Professional', 'Achievement'],
    category: 'others',
  },
  {
    id: 'misc-10',
    title: 'Professional Achievement X',
    description: 'Various professional milestones and recognitions.',
    image: miscCert10,
    tags: ['Professional', 'Achievement'],
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
        <div className="max-w-7xl mx-auto">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Certificate Frame */}
                <div className="relative bg-[#faf8f5] dark:bg-[#1a1916] border-4 border-double border-amber-700/60 dark:border-amber-600/40 rounded-sm p-1">
                  {/* Inner border */}
                  <div className="border border-amber-600/30 dark:border-amber-500/20 p-4">
                    {/* Certificate Image - A4 Landscape ratio (1.414:1) */}
                    <div className="relative aspect-[1.414/1] mb-4 border border-amber-600/20 dark:border-amber-500/15 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-lg font-display font-bold text-center text-amber-900 dark:text-amber-100 mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-center text-amber-800/70 dark:text-amber-200/60 mb-4 line-clamp-2 leading-relaxed italic">
                      {cert.description}
                    </p>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="h-px w-8 bg-amber-600/30 dark:bg-amber-500/20" />
                      <div className="w-2 h-2 rotate-45 border border-amber-600/40 dark:border-amber-500/30" />
                      <div className="h-px w-8 bg-amber-600/30 dark:bg-amber-500/20" />
                    </div>

                    {/* Tags as seal/stamps */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-700 dark:text-amber-400 border border-amber-600/40 dark:border-amber-500/30 rounded-sm bg-amber-50/50 dark:bg-amber-900/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
