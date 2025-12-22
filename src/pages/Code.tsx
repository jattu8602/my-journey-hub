import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';

const Code = () => {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-5xl">
          <h1 className="section-heading mb-6">Code<span className="accent-dot" /></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Featured projects and open source contributions.
          </p>
          
          {/* Projects grid placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="journey-card p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-accent font-body text-sm">Featured</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Project Name</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Brief description of the project and technologies used.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">TypeScript</span>
              </div>
            </div>
            
            <div className="journey-card p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground font-body text-sm">Open Source</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Another Project</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Brief description of the project and technologies used.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">API</span>
              </div>
            </div>
            
            <div className="journey-card p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground font-body text-sm">Side Project</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Side Project</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Brief description of the project and technologies used.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Code;
