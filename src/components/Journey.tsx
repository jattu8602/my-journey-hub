import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2024',
    title: 'Senior Developer',
    company: 'Tech Company',
    description: 'Leading frontend architecture and building scalable web applications with modern technologies.',
    skills: ['React', 'TypeScript', 'Node.js'],
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Developed end-to-end solutions for clients across various industries.',
    skills: ['Next.js', 'PostgreSQL', 'AWS'],
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'Startup Inc',
    description: 'Built responsive user interfaces and implemented complex animations.',
    skills: ['Vue.js', 'GSAP', 'Tailwind'],
  },
  {
    year: '2021',
    title: 'Junior Developer',
    company: 'Web Studio',
    description: 'Started my journey in web development, learning best practices and modern frameworks.',
    skills: ['JavaScript', 'CSS', 'HTML'],
  },
];

export const Journey = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline line animation
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 relative overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          ref={headingRef}
          className="section-heading text-center mb-12 sm:mb-20"
        >
          My Journey<span className="accent-dot" />
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Experience cards */}
          <div className="space-y-8 sm:space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.year}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`flex flex-col md:flex-row items-center gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className="flex-1 w-full">
                  <div className="journey-card">
                    <span className="text-accent font-display font-bold text-xl sm:text-2xl mb-2 block">
                      {exp.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{exp.company}</p>
                    <p className="text-foreground/80 text-sm sm:text-base mb-4 sm:mb-6 font-body leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full z-10 ring-4 ring-background" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
