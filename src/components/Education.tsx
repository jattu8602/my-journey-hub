import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, School, BookOpen, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    level: '10th Standard',
    school: 'Deep Jyoti Public HS School',
    location: 'Keolari, District Seoni, Madhya Pradesh',
    icon: School,
    status: 'Completed',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    id: 2,
    level: '12th Standard',
    school: 'Deep Jyoti Public HS School',
    location: 'Keolari, District Seoni, Madhya Pradesh',
    icon: BookOpen,
    status: 'Completed',
    color: 'from-blue-500/20 to-indigo-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    id: 3,
    level: 'B.Tech CSE',
    school: 'LNCT Bhopal',
    location: 'Specialization: Artificial Intelligence & Data Science',
    icon: GraduationCap,
    status: 'Pursuing',
    color: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
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
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          rotateX: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards staggered reveal with 3D effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        });

        // Initial 3D flip animation
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 150,
            rotateY: index % 2 === 0 ? -30 : 30,
            rotateX: 20,
            scale: 0.7,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: index * 0.15,
          }
        );

        // Icon bounce
        tl.fromTo(
          card.querySelector('.edu-icon'),
          { scale: 0, rotate: -180 },
          { scale: 1, rotate: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
          '-=0.4'
        );

        // Text reveal
        tl.fromTo(
          card.querySelectorAll('.edu-text'),
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        );

        // Status badge pop
        tl.fromTo(
          card.querySelector('.status-badge'),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
          '-=0.2'
        );

        // Parallax effect on scroll
        gsap.to(card, {
          y: index % 2 === 0 ? -30 : 30,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Sparkle animations
      gsap.to('.sparkle', {
        opacity: 0.3,
        scale: 1.5,
        duration: 1.5,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
        ease: 'sine.inOut',
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
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Floating background orbs */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb absolute top-20 left-[10%] w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute bottom-20 right-[10%] w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={i}
            className={`sparkle absolute text-accent/30 w-4 h-4 md:w-6 md:h-6`}
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 3) * 35}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24" style={{ perspective: '1000px' }}>
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            Academic Journey
          </span>
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Education<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body">
            Building a strong foundation for innovation
          </p>
        </div>

        {/* Education Cards - Timeline Layout */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                ref={(el) => addToRefs(el, index)}
                className={`relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                style={{ perspective: '1000px' }}
              >
                {/* Connector dot for desktop */}
                <div
                  className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  }`}
                />

                {/* Card */}
                <div
                  className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${edu.color} backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`edu-icon inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${edu.iconBg} mb-4`}
                    >
                      <edu.icon className={`w-7 h-7 md:w-8 md:h-8 ${edu.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="edu-text text-xl md:text-2xl font-display font-bold text-foreground">
                        {edu.level}
                      </h3>
                      <p className="edu-text text-base md:text-lg font-medium text-foreground/90">
                        {edu.school}
                      </p>
                      <p className="edu-text text-sm md:text-base text-muted-foreground font-body">
                        {edu.location}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`status-badge inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs font-medium ${
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
