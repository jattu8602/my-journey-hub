import { useEffect, useRef, useState } from 'react';
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
    borderColor: 'border-emerald-500/30',
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
    borderColor: 'border-blue-500/30',
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
    borderColor: 'border-purple-500/30',
  },
];

export const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

      // Sparkle animations
      gsap.to('.edu-sparkle', {
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

      if (isMobile) {
        // Mobile: Stacked sticky cards effect
        const cards = cardsRef.current.filter(Boolean);
        
        cards.forEach((card, index) => {
          // Set initial state - cards stack with slight offset
          gsap.set(card, {
            zIndex: index + 1,
          });

          // Pin each card as it reaches the center
          ScrollTrigger.create({
            trigger: card,
            start: 'top 30%',
            end: () => `+=${window.innerHeight * 0.6}`,
            pin: true,
            pinSpacing: index === cards.length - 1, // Only last card adds spacing
            scrub: true,
            onUpdate: (self) => {
              // Scale and opacity effect as card scrolls away
              const progress = self.progress;
              if (index < cards.length - 1) {
                gsap.to(card, {
                  scale: 1 - progress * 0.1,
                  opacity: 1 - progress * 0.3,
                  duration: 0.1,
                });
              }
            },
          });

          // Entry animation
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      } else {
        // Desktop: Horizontal scroll with sticky effect
        const cards = cardsRef.current.filter(Boolean);
        const container = cardsContainerRef.current;
        
        if (container && cards.length > 0) {
          // Pin the container and scroll horizontally
          const totalWidth = cards.length * (window.innerWidth * 0.5);
          
          gsap.to(container, {
            x: () => -(totalWidth - window.innerWidth + 200),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 10%',
              end: () => `+=${totalWidth}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // Individual card animations during horizontal scroll
          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                scale: 0.8,
                rotateY: -15,
              },
              {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                duration: 0.5,
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: gsap.getById('horizontal-scroll'),
                  start: 'left 80%',
                  end: 'left 50%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
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
            className="edu-sparkle absolute text-accent/30 w-4 h-4 md:w-6 md:h-6"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 3) * 35}%`,
            }}
          />
        ))}
      </div>

      <div className="py-20 md:py-32 px-4 sm:px-6">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24 max-w-6xl mx-auto relative z-10">
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

        {/* Education Cards */}
        <div 
          ref={cardsContainerRef}
          className={`relative z-10 ${
            isMobile 
              ? 'flex flex-col gap-6 max-w-lg mx-auto' 
              : 'flex gap-8 pl-[10%]'
          }`}
          style={!isMobile ? { width: 'fit-content' } : {}}
        >
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              ref={(el) => addToRefs(el, index)}
              className={`relative ${
                isMobile 
                  ? 'w-full' 
                  : 'w-[45vw] max-w-xl flex-shrink-0'
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Card */}
              <div
                className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${edu.color} backdrop-blur-sm border ${edu.borderColor} hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 bg-background/80`}
              >
                {/* Card number indicator */}
                <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center text-accent font-bold text-sm md:text-base shadow-lg">
                  {index + 1}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500" />

                <div className="relative z-10 pt-2">
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

                {/* Progress line for mobile */}
                {isMobile && index < educationData.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-accent/50 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
