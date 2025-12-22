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
    shadowColor: 'shadow-emerald-500/10',
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
    shadowColor: 'shadow-blue-500/10',
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
    shadowColor: 'shadow-purple-500/10',
  },
];

// Smooth easing function
const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

const easeInOutCubic = (x: number): number => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

export const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingRef = useRef<HTMLDivElement>(null);
  const lastProgressRef = useRef(0);

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

      // Title fade in smoothly
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.8,
          },
        }
      );

      const cards = cardsRef.current.filter(Boolean);
      const peekAmount = 50; // how much of previous card to show
      const totalScrollDistance = cards.length * 350; // more scroll distance = slower animation

      // Set initial state for all cards
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: 350,
          opacity: 0,
          zIndex: index + 1,
          scale: 1,
        });
      });

      // Pin the entire sticky wrapper with smooth behavior
      ScrollTrigger.create({
        trigger: stickyWrapperRef.current,
        start: 'top 8%',
        end: () => `+=${totalScrollDistance + 150}`,
        pin: true,
        pinSpacing: true,
        scrub: 1.5, // Smooth scrubbing
        onUpdate: (self) => {
          const progress = self.progress;
          const direction = progress > lastProgressRef.current ? 1 : -1;
          lastProgressRef.current = progress;
          
          cards.forEach((card, index) => {
            // Calculate when each card should start and end its animation
            // Spread the animation more for smoother effect
            const cardStart = (index * 0.28);
            const cardEnd = cardStart + 0.35;
            
            // Calculate card progress with smooth easing
            let cardProgress = (progress - cardStart) / (cardEnd - cardStart);
            cardProgress = Math.max(0, Math.min(1, cardProgress));
            
            // Apply smooth easing
            const easedProgress = easeInOutCubic(cardProgress);

            // Card positions
            const startY = 350;
            const endY = index * peekAmount;
            const currentY = startY - (startY - endY) * easedProgress;

            // Smooth opacity transition
            let opacity = 0;
            if (cardProgress > 0) {
              opacity = Math.min(1, cardProgress * 3); // Fade in over first third
            }

            // Subtle scale for depth effect
            const scale = 0.97 + (0.03 * easedProgress);

            // Use GSAP for smooth interpolation
            gsap.to(card, {
              y: currentY,
              opacity: opacity,
              scale: scale,
              duration: 0.3, // Smooth transition duration
              ease: 'power2.out',
              overwrite: 'auto',
            });
          });
        },
      });

      // Image float animation
      cards.forEach((card, index) => {
        gsap.to(card.querySelector('.edu-image'), {
          y: -6,
          duration: 2.5,
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
        {/* Sticky Wrapper - Contains title and cards */}
        <div ref={stickyWrapperRef} className="max-w-2xl mx-auto relative z-10">
          {/* Section Title - Stays at top */}
          <div ref={titleRef} className="text-center mb-8 md:mb-12">
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

          {/* Cards Container - Cards stack here */}
          <div 
            ref={cardsContainerRef}
            className="relative h-[300px] md:h-[260px]"
          >
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                ref={(el) => addToRefs(el, index)}
                className="absolute inset-x-0 top-0 will-change-transform"
                style={{ zIndex: index + 1 }}
              >
                {/* Card */}
                <div
                  className={`relative p-5 md:p-6 rounded-2xl bg-gradient-to-br ${edu.color} backdrop-blur-sm border ${edu.borderColor} shadow-xl ${edu.shadowColor} bg-background/95 transition-shadow duration-300`}
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                    {/* Image */}
                    <div className="edu-image flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-background/50 p-1.5">
                      <img
                        src={edu.image}
                        alt={edu.level}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5">
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                        {edu.level}
                      </h3>
                      <p className="text-sm md:text-base font-medium text-foreground/90">
                        {edu.school}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground font-body">
                        {edu.location}
                      </p>

                      {/* Status Badge */}
                      <div
                        className={`inline-flex items-center gap-2 mt-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
