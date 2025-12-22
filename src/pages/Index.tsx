import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Journey } from '@/components/Journey';
import { useLenis } from '@/hooks/useLenis';

const Index = () => {
  useLenis();

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Journey />
      
      {/* Placeholder sections for future content */}
      <section id="certification" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="section-heading mb-6">Certifications<span className="accent-dot" /></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Coming soon — My professional certifications and achievements.
          </p>
        </div>
      </section>

      <section id="blogs" className="min-h-screen flex items-center justify-center px-6 bg-secondary/30">
        <div className="text-center">
          <h2 className="section-heading mb-6">Blogs<span className="accent-dot" /></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Coming soon — Thoughts and insights on development and design.
          </p>
        </div>
      </section>

      <section id="code" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="section-heading mb-6">Code<span className="accent-dot" /></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Coming soon — Featured projects and open source contributions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
