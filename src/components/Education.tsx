import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import education10th from '@/assets/education-10th.png';
import education12th from '@/assets/education-12th.png';
import educationBtech from '@/assets/education-btech.png';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    level: '10th Standard',
    school: 'Deep Jyoti Public HS School',
    location: 'Keolari, District Seoni, Madhya Pradesh',
    image: education10th,
    status: 'Completed',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 2,
    level: '12th Standard',
    school: 'Deep Jyoti Public HS School',
    location: 'Keolari, District Seoni, Madhya Pradesh',
    image: education12th,
    status: 'Completed',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 3,
    level: 'B.Tech CSE',
    school: 'LNCT Bhopal',
    location: 'Specialization: Artificial Intelligence & Data Science',
    image: educationBtech,
    status: 'Pursuing',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
];

export const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background orbs animation
      gsap.to(floatingRef.current?.querySelectorAll('.floating-orb'), {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
      });

      // Title reveal animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Each card: comes from bottom, sticks briefly, then continues
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Entry animation - card comes from bottom
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Sticky effect - card sticks while scrolling
        ScrollTrigger.create({
          trigger: card,
          start: 'top 25%',
          end: 'bottom 25%',
          pin: true,
          pinSpacing: false,
        });

        // Image float animation
        gsap.to(card.querySelector('.edu-image'), {
          y: -8,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.3,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Floating background orbs */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb absolute top-20 left-[10%] w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute bottom-20 right-[10%] w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="px-4 sm:px-6">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24 max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            Academic Journey
          </span>
          <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-3">
            Education<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto font-body">
            Building a strong foundation for innovation
          </p>
        </div>

        {/* Education Cards - Static Stack */}
        <div className="max-w-2xl mx-auto space-y-8 md:space-y-12 relative z-10">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              ref={(el) => addToRefs(el, index)}
              className="relative"
            >
              {/* Card */}
              <div
                className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${edu.color} backdrop-blur-sm border ${edu.borderColor} shadow-lg bg-background/90`}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  {/* Image */}
                  <div className="edu-image flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-background/50 p-2">
                    <img
                      src={edu.image}
                      alt={edu.level}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {edu.level}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-foreground/90">
                      {edu.school}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground font-body">
                      {edu.location}
                    </p>

                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        edu.status === 'Pursuing'
                          ? 'bg-accent/20 text-accent border border-accent/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          edu.status === 'Pursuing' ? 'bg-accent animate-pulse' : 'bg-emerald-400'
                        }`}
                      />
                      {edu.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting line between cards */}
              {index < educationData.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-12 w-px h-8 md:h-12 bg-gradient-to-b from-accent/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
