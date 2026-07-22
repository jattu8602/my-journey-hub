import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DragonBackground } from '@/components/DragonBackground';
import { ArrowDown, Newspaper, Gamepad2, Sparkles, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const roles = [
  'AI & Full Stack Engineer',
  'IoT & Hardware Developer',
  'Next.js & React Native Specialist',
  'Creative UI Architect'
];
const nicknames = ['Jatin', 'Justin', 'Jattu'];

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const nicknameRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        nameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
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
              setTimeout(type, 60);
            } else {
              setTimeout(() => {
                const deleteChar = () => {
                  if (roleRef.current!.textContent!.length > 0) {
                    roleRef.current!.textContent = roleRef.current!.textContent!.slice(0, -1);
                    setTimeout(deleteChar, 40);
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

      // Typewriter effect for nicknames
      let nicknameIndex = 0;
      const typeNickname = () => {
        if (nicknameRef.current) {
          const nickname = nicknames[nicknameIndex];
          let charIndex = 0;
          nicknameRef.current.textContent = '';

          const type = () => {
            if (charIndex < nickname.length) {
              nicknameRef.current!.textContent += nickname[charIndex];
              charIndex++;
              setTimeout(type, 100);
            } else {
              setTimeout(() => {
                const deleteChar = () => {
                  if (nicknameRef.current!.textContent!.length > 0) {
                    nicknameRef.current!.textContent = nicknameRef.current!.textContent!.slice(0, -1);
                    setTimeout(deleteChar, 60);
                  } else {
                    nicknameIndex = (nicknameIndex + 1) % nicknames.length;
                    setTimeout(typeNickname, 400);
                  }
                };
                deleteChar();
              }, 1800);
            }
          };
          type();
        }
      };

      setTimeout(typeRole, 1000);
      setTimeout(typeNickname, 600);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <DragonBackground />
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center z-10 max-w-5xl">
        {/* Profile Avatar */}
        <div className="mb-6 md:mb-8 relative inline-block">
          <Avatar className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto ring-4 ring-accent/30 ring-offset-4 ring-offset-background shadow-2xl">
            <AvatarImage
              src="https://github.com/jattu8602.png"
              alt="Nitesh Chourasiya"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl md:text-3xl lg:text-4xl font-display bg-accent/10 text-accent">
              NC
            </AvatarFallback>
          </Avatar>
          
          {/* Status Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full shadow-lg text-[10px] font-mono flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-foreground font-semibold">Available for Roles</span>
          </div>
        </div>

        {/* Greeting with nickname */}
        <div className="text-muted-foreground text-base md:text-lg mb-3 font-mono flex items-center justify-center gap-2">
          <span>Hello, I'm</span>
          <span
            ref={nicknameRef}
            className="text-accent font-semibold min-w-[70px] text-left inline-block"
          >
            Jatin
          </span>
          <span className="opacity-40">• B.Tech CSE (AI & DS) @ LNCT Bhopal</span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="section-heading mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight"
        >
          Nitesh Chourasiya<span className="accent-dot" />
        </h1>

        {/* Running Roles Typewriter */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl font-display font-medium mb-6 min-h-[40px]">
          <span className="text-muted-foreground">Specializing in</span>
          <span
            ref={roleRef}
            className="text-gradient font-bold min-w-[220px] md:min-w-[340px] text-left inline-block"
          >
            AI & Full Stack Engineer
          </span>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed mb-8"
        >
          Building high-scale full-stack applications, AI integrations, smart ESP32 IoT hardware, and creative frontend web experiences.
        </p>

        {/* QUICK STATS COUNTER BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-xl">
          <div className="flex flex-col items-center p-2">
            <span className="font-display font-black text-2xl sm:text-3xl text-accent">100K+</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground">Platform Views</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-display font-black text-2xl sm:text-3xl text-foreground">Top 5</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground">Hackathon / 2000+</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-display font-black text-2xl sm:text-3xl text-accent">15+</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground">Live Repos & Apps</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-display font-black text-2xl sm:text-3xl text-foreground">AWS</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground">Certified Practitioner</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects">
            <Button size="lg" className="gap-2 font-mono text-sm shadow-xl hover:scale-105 transition-transform">
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </a>

          <Link to="/design">
            <Button size="lg" variant="secondary" className="gap-2 font-mono text-sm border border-border hover:border-accent hover:scale-105 transition-all">
              <Newspaper className="w-4 h-4 text-accent" />
              <span>READ GAZETTE (/design)</span>
            </Button>
          </Link>

          <a href="#labs">
            <Button size="lg" variant="outline" className="gap-2 font-mono text-sm hover:scale-105 transition-all">
              <Gamepad2 className="w-4 h-4" />
              <span>INTERACTIVE LABS</span>
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
