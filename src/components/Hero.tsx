import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const roles = ['Design', 'Development', 'Deployment', 'Innovation', 'Solutions'];

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        nameRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );

      // Typewriter effect for roles
      let currentIndex = 0;
      const typeRole = () => {
        if (roleRef.current) {
          const role = roles[currentIndex];
          let charIndex = 0;
          roleRef.current.textContent = '';
          
          const type = () => {
            if (charIndex < role.length) {
              roleRef.current!.textContent += role[charIndex];
              charIndex++;
              setTimeout(type, 80);
            } else {
              setTimeout(() => {
                // Delete characters
                const deleteChar = () => {
                  if (roleRef.current!.textContent!.length > 0) {
                    roleRef.current!.textContent = roleRef.current!.textContent!.slice(0, -1);
                    setTimeout(deleteChar, 50);
                  } else {
                    currentIndex = (currentIndex + 1) % roles.length;
                    setTimeout(typeRole, 300);
                  }
                };
                deleteChar();
              }, 2000);
            }
          };
          type();
        }
      };

      setTimeout(typeRole, 1200);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center z-10 max-w-5xl">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg md:text-xl mb-4 font-body">
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="section-heading mb-6 text-5xl md:text-7xl lg:text-8xl"
        >
          Nitesh Chourasiya<span className="accent-dot" />
        </h1>

        {/* Running text */}
        <div className="flex items-center justify-center gap-3 text-xl md:text-3xl lg:text-4xl font-display font-medium mb-8">
          <span className="text-muted-foreground">I do</span>
          <span
            ref={roleRef}
            className="text-gradient min-w-[200px] md:min-w-[280px] text-left inline-block"
          >
            Design
          </span>
          <span className="text-muted-foreground">—</span>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          Crafting digital experiences from concept to deployment. 
          Building modern web solutions with passion and precision.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground font-body">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
