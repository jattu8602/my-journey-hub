import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2023',
    title: 'The Beginning',
    company: 'Self-Learning Journey',
    description: 'Started my coding adventure, diving deep into multiple programming languages and building a strong foundation in software development.',
    skills: ['Python', 'JavaScript', 'C/C++', 'HTML', 'CSS'],
  },
  {
    year: 'Late 2023',
    title: 'Terminal Mastery',
    company: 'Command Line Explorer',
    description: 'Explored the power of command-line interfaces, mastering terminal workflows across different operating systems and text editors.',
    skills: ['Vim', 'Ubuntu', 'macOS', 'Windows', 'Bash'],
  },
  {
    year: 'Early 2024',
    title: 'Web Dev & Animations',
    company: 'Creative Development',
    description: 'Built stunning websites with advanced animations and 3D effects. Explored backend development with Django framework.',
    skills: ['GSAP', 'ScrollTrigger', '3D Web', 'Django', 'Framer Motion'],
  },
  {
    year: 'Mid 2024',
    title: 'Full Stack Developer',
    company: 'Farmcs.in @ Idea Lab',
    description: 'Joined an agriculture-tech startup combining AI, IoT, and software. Built full-stack solutions, worked with drones & ESP32, and conducted workshops on IoT, AI & 3D.',
    skills: ['Next.js', 'Prisma', 'MongoDB', 'Firebase', 'ESP32', 'IoT'],
  },
  {
    year: 'End 2024',
    title: 'Full Stack Developer',
    company: 'PresentSir.in @ Idea Lab',
    description: 'Developed an ESP32-based smart attendance system, revolutionizing traditional register-based attendance with modern hardware-software integration.',
    skills: ['Next.js', 'ESP32', 'IoT', 'Hardware Integration', 'Auth'],
  },
  {
    year: 'End 2024',
    title: 'Full Stack Developer',
    company: 'NotesMates.in',
    description: 'Co-built RGPV\'s go-to notes platform reaching 1L+ views, 2K+ users. Implemented subscriptions, AdSense monetization, and seamless payment integration.',
    skills: ['Next.js', 'Prisma', 'Shadcn', 'DaisyUI', 'Razorpay'],
  },
  {
    year: 'End 2024',
    title: 'Freelance Developer',
    company: 'Mobile App Project',
    description: 'Delivered a complete mobile application for a client, building cross-platform functionality with real-time data sync and user authentication.',
    skills: ['React Native', 'Firebase', 'Mobile Development', 'Cross-Platform'],
  },
  {
    year: 'Early 2025',
    title: 'Full Stack Developer',
    company: 'Dakshedu.in',
    description: 'Architected and developed an Instagram-style social platform with rich media sharing, user interactions, and a scalable API-first backend.',
    skills: ['Next.js', 'API Routes', 'Social Platform', 'Media Handling'],
  },
  {
    year: 'Mid 2025',
    title: 'Freelance Developer',
    company: 'Outlawed.in',
    description: 'Built a comprehensive test preparation platform for CLAT aspirants with 1K+ active users, featuring subscription plans, timed mock tests, and detailed analytics.',
    skills: ['Test Platform', 'Subscriptions', 'User Analytics', 'Payment Integration'],
  },
];

export const Journey = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop && headingRef.current && headingWrapperRef.current && sectionRef.current) {
        // Set initial state
        gsap.set(headingRef.current, { opacity: 0, y: 50 });

        // Fade in heading
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        // Sticky heading at 30% from top with smooth transitions
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 60%',
          pin: headingWrapperRef.current,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(headingRef.current, {
              scale: 0.9,
              opacity: 0.95,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
          onLeave: () => {
            gsap.to(headingRef.current, {
              opacity: 0,
              y: -30,
              duration: 0.3,
              ease: 'power2.in',
            });
          },
          onEnterBack: () => {
            gsap.to(headingRef.current, {
              opacity: 0.95,
              y: 0,
              scale: 0.9,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(headingRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
        });
      } else {
        // Mobile: Simple fade in
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
      }

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
        {/* Section heading wrapper for sticky behavior */}
        <div
          ref={headingWrapperRef}
          className="md:absolute md:left-0 md:right-0 md:top-[30vh] md:z-20 pointer-events-none"
        >
          <h2
            ref={headingRef}
            className="section-heading text-center mb-12 sm:mb-20 md:mb-0 will-change-transform"
          >
            My Journey<span className="accent-dot" />
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative md:pt-32">
          {/* Vertical line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Experience cards */}
          <div className="space-y-8 sm:space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.year}-${exp.company}`}
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
