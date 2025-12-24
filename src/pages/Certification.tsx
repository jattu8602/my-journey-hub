import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

// Certificate Imports
// Hackathons & Competitions
import kriyetaParticipate from '@/assets/certificates/kriyeta-4-0-participation.jpeg';
import virtualVistaParticipate from '@/assets/certificates/virtual-vista-2-0-participation.jpeg';
import hackwaveParticipate from '@/assets/certificates/hackwave-2-0-participation.jpeg';
import pravahIdeathon from '@/assets/certificates/pravah-2025-ideathon.jpeg';
import websiteDevPrize from '@/assets/certificates/website-development-competition-2nd-prize.jpeg';
import googleSolution from '@/assets/certificates/google-solution-challenge-achievement.jpeg';
import bestAiSolution from '@/assets/certificates/best-ai-ml-solution-testverse.jpg';

// Skills & Courses
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
import javaDsaScaler from '@/assets/certificates/java-dsa-course-master-fundamentals.jpg';


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
  // --- Hackathons & Competitions ---
  {
    id: 'kriyeta-4-0',
    title: 'Kriyeta 4.0 Participation',
    description: 'Participation in the 48-hour hackathon "Kriyeta 4.0" organized by Acropolis.',
    image: kriyetaParticipate,
    tags: ['Hackathon', 'Participation'],
    category: 'hackathons',
  },
  {
    id: 'hackwave-2-0',
    title: 'HackWave 2.0 Participation',
    description: 'Certificate of participation for the 36-hour "HackWave 2.0" hackathon.',
    image: hackwaveParticipate,
    tags: ['Hackathon', 'Coding'],
    category: 'hackathons',
  },
  {
    id: 'pravah-2025',
    title: 'Pravah 2025 Ideathon',
    description: 'Participation in the "IDEATHON" conducted under Pravah 2025.',
    image: pravahIdeathon,
    tags: ['Ideathon', 'Innovation'],
    category: 'hackathons',
  },
  {
    id: 'testverse-award',
    title: 'Best AI/ML Solution - Testverse',
    description: 'Awarded Best AI/ML Solution at Hack-to-Hire Ideathon.',
    image: bestAiSolution,
    tags: ['Winner', 'AI/ML', 'Hackathon'],
    category: 'hackathons',
  },
  {
    id: 'website-dev-competition',
    title: '2nd Prize - Website Development',
    description: 'Secured 2nd prize in the Website Development Competition by LNCT Group.',
    image: websiteDevPrize,
    tags: ['Winner', 'Web Dev', 'Competition'],
    category: 'hackathons',
  },
  {
    id: 'virtual-vista',
    title: 'Virtual Vista 2.0 Participation',
    description: 'Participation in the National Level Online Project Competition "Virtual Vista 2.0".',
    image: virtualVistaParticipate,
    tags: ['Competition', 'Project'],
    category: 'hackathons',
  },
  {
    id: 'google-solution',
    title: 'Google Solution Challenge',
    description: 'Certificate of Achievement for contributing an innovative idea.',
    image: googleSolution,
    tags: ['Achievement', 'Google', 'Innovation'],
    category: 'hackathons',
  },

  // --- Skills & Courses ---
  {
    id: 'scaler-java-dsa',
    title: 'Java & DSA Certification',
    description: 'Master the Fundamentals and Beyond in Java DSA by Scaler.',
    image: javaDsaScaler,
    tags: ['Java', 'DSA', 'Scaler'],
    category: 'skills',
  },
  {
    id: 'aws-free-course',
    title: 'AWS Free Course Completion',
    description: 'Certificate of excellence for completing AWS Free Course tutorials.',
    image: awsCourse,
    tags: ['Cloud', 'AWS', 'Certificate'],
    category: 'skills',
  },
  {
    id: 'java-foundation',
    title: 'Associate in IT Foundation Skills (Java)',
    description: 'Infosys Springboard completion for IT Foundation Skills in Java.',
    image: javaFoundation,
    tags: ['Java', 'Foundation', 'Infosys'],
    category: 'skills',
  },
  {
    id: 'programming-java',
    title: 'Programming using Java',
    description: 'Infosys Springboard course completion for Programming using Java.',
    image: progJava,
    tags: ['Java', 'Programming'],
    category: 'skills',
  },
  {
    id: 'dsa-java-infosys',
    title: 'Data Structures & Algorithms using Java',
    description: 'Infosys Springboard course completion for DSA using Java.',
    image: dsaJava,
    tags: ['DSA', 'Java', 'Algorithms'],
    category: 'skills',
  },
  {
    id: 'dbms-1',
    title: 'Database Management System Part - 1',
    description: 'Infosys Springboard course completion for DBMS Part 1.',
    image: dbms1,
    tags: ['Database', 'DBMS'],
    category: 'skills',
  },
  {
    id: 'dbms-2',
    title: 'Database Management System Part - 2',
    description: 'Infosys Springboard course completion for DBMS Part 2.',
    image: dbms2,
    tags: ['Database', 'DBMS'],
    category: 'skills',
  },
  {
    id: 'nosql-db',
    title: 'Introduction to NoSQL Databases',
    description: 'Infosys Springboard course completion for NoSQL databases.',
    image: noSql,
    tags: ['Database', 'NoSQL'],
    category: 'skills',
  },
  {
    id: 'swe-agile',
    title: 'Software Engineering & Agile',
    description: 'Infosys Springboard course on Software Engineering and Agile development.',
    image: sweAgile,
    tags: ['Software Engineering', 'Agile'],
    category: 'skills',
  },
  {
    id: 'swe-agile-2',
    title: 'Software Engineering & Agile (Advanced)',
    description: 'Advanced concepts in Software Engineering and Agile development.',
    image: sweAgile2,
    tags: ['Software Engineering', 'Agile'],
    category: 'skills',
  },
  {
    id: 'modern-ai',
    title: 'Introduction to Modern AI',
    description: 'Cisco Networking Academy certificate for Introduction to Modern AI.',
    image: introModernAi,
    tags: ['AI', 'Cisco'],
    category: 'skills',
  },
  {
    id: 'apply-ai',
    title: 'Apply AI: Analyze Customer Reviews',
    description: 'Cisco Networking Academy certificate for Applied AI.',
    image: applyAi,
    tags: ['AI', 'Analysis', 'Cisco'],
    category: 'skills',
  },
  {
    id: 'iot-digital',
    title: 'Intro to IoT & Digital Transformation',
    description: 'Cisco Networking Academy certificate for IoT and Digital Transformation.',
    image: introIot,
    tags: ['IoT', 'Digital Transformation'],
    category: 'skills',
  },
  {
    id: 'cybersecurity',
    title: 'Introduction to Cybersecurity',
    description: 'Cisco Networking Academy course completion for Cybersecurity.',
    image: introCybersecurity,
    tags: ['Cybersecurity', 'Security'],
    category: 'skills',
  },
  {
    id: 'docker-learning',
    title: 'Learning Docker',
    description: 'LinkedIn Learning course completion for Docker.',
    image: learningDocker,
    tags: ['DevOps', 'Docker'],
    category: 'skills',
  },
  {
    id: 'github-actions',
    title: 'Practical GitHub Actions',
    description: 'LinkedIn Learning course completion for GitHub Actions.',
    image: githubActions,
    tags: ['DevOps', 'GitHub'],
    category: 'skills',
  },
  {
    id: 'project-mgmt',
    title: 'Practical GitHub Project Management',
    description: 'LinkedIn Learning certificate for GitHub Project Management.',
    image: projectMgmt,
    tags: ['Project Management', 'GitHub'],
    category: 'skills',
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
