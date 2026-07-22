import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Ventures', href: '/#projects' },
  { label: 'Hackathons', href: '/#hackathons' },
  { label: 'Labs', href: '/#labs' },
  { label: 'Credentials', href: '/#certifications' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Gazette', href: '/design' },
  { label: 'Blogs', href: '/blogs' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (menuRef.current && menuItemsRef.current) {
      const ctx = gsap.context(() => {
        if (isOpen) {
          gsap.set(menuRef.current, { display: 'flex' });
          gsap.fromTo(
            menuRef.current,
            { clipPath: 'circle(0% at calc(100% - 40px) 40px)' },
            { clipPath: 'circle(150% at calc(100% - 40px) 40px)', duration: 0.8, ease: 'power3.inOut' }
          );

          const items = menuItemsRef.current?.querySelectorAll('.menu-item');
          gsap.fromTo(
            items,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.3, ease: 'power3.out' }
          );
        } else {
          gsap.to(menuRef.current, {
            clipPath: 'circle(0% at calc(100% - 40px) 40px)',
            duration: 0.6,
            ease: 'power3.inOut',
            onComplete: () => {
              gsap.set(menuRef.current, { display: 'none' });
            },
          });
        }
      });

      return () => ctx.revert();
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const elem = document.getElementById(elementId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="nav-pill flex items-center gap-1.5 backdrop-blur-md bg-primary/90 border border-border/40 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link text-xs font-mono tracking-wider hover:text-accent font-medium px-3.5 py-1.5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        ref={hamburgerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] lg:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl border border-accent/20"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 items-center justify-center">
          <span className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 hidden bg-primary flex-col items-center justify-center"
        style={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
      >
        <div ref={menuItemsRef} className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="menu-item text-3xl font-display font-bold text-primary-foreground hover:text-accent transition-colors duration-300"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
