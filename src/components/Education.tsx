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
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardDisplayRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
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

      // Title reveal animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Pin the sticky container
      ScrollTrigger.create({
        trigger: stickyContainerRef.current,
        start: 'top 10%',
        end: () => `+=${educationData.length * (isMobile ? 400 : 500)}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const cardIndex = Math.min(
            Math.floor(progress * educationData.length),
            educationData.length - 1
          );
          setActiveCard(cardIndex);
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const ActiveIcon = educationData[activeCard].icon;

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
        {/* Sticky Container - Title + Card Display */}
        <div 
          ref={stickyContainerRef}
          className="max-w-2xl mx-auto relative z-10"
        >
          {/* Section Title - Sticky */}
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

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-6">
            {educationData.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeCard 
                    ? 'w-8 bg-accent' 
                    : index < activeCard 
                      ? 'w-4 bg-accent/50' 
                      : 'w-4 bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>

          {/* Card Display Area */}
          <div 
            ref={cardDisplayRef}
            className="relative min-h-[280px] md:min-h-[320px]"
          >
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeCard 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : index < activeCard 
                      ? 'opacity-0 -translate-y-8 scale-95' 
                      : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ pointerEvents: index === activeCard ? 'auto' : 'none' }}
              >
                {/* Card */}
                <div
                  className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${edu.color} backdrop-blur-sm border ${edu.borderColor} shadow-xl bg-background/90`}
                >
                  {/* Card number indicator */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center text-accent font-bold text-base md:text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className="relative z-10 pt-2">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${edu.iconBg} mb-4`}
                    >
                      <edu.icon className={`w-7 h-7 md:w-8 md:h-8 ${edu.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                        {edu.level}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-foreground/90">
                        {edu.school}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground font-body">
                        {edu.location}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs font-medium ${
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

          {/* Scroll hint */}
          <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
