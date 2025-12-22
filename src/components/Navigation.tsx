import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certification', href: '/certification' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Code', href: '/code' },
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
          // Open animation
          gsap.set(menuRef.current, { display: 'flex' });
          gsap.fromTo(
            menuRef.current,
            {
              clipPath: 'circle(0% at calc(100% - 40px) 40px)',
            },
            {
              clipPath: 'circle(150% at calc(100% - 40px) 40px)',
              duration: 0.8,
              ease: 'power3.inOut',
            }
          );

          // Animate menu items
          const items = menuItemsRef.current?.querySelectorAll('.menu-item');
          gsap.fromTo(
            items,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              delay: 0.3,
              ease: 'power3.out',
            }
          );
        } else {
          // Close animation
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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="nav-pill flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`nav-link hover:text-accent ${isActive(item.href) ? 'text-accent' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        ref={hamburgerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] md:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 items-center justify-center">
          <span
            className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 hidden bg-primary flex-col items-center justify-center"
        style={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
      >
        <div ref={menuItemsRef} className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`menu-item text-4xl font-display font-bold text-primary-foreground hover:text-accent transition-colors duration-300 ${isActive(item.href) ? 'text-accent' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-accent/60" />
          <span className="w-2 h-2 rounded-full bg-accent/30" />
        </div>
      </div>
    </>
  );
};
