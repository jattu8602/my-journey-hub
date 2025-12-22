import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';

const Experience = () => {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-4xl">
          <h1 className="section-heading mb-6">Experience<span className="accent-dot" /></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            My professional journey and work experience.
          </p>
          
          {/* Experience content placeholder */}
          <div className="space-y-8 text-left">
            <div className="journey-card p-8">
              <span className="text-accent font-body text-sm">2023 - Present</span>
              <h3 className="text-2xl font-display font-bold mt-2 mb-3">Senior Developer</h3>
              <p className="text-muted-foreground">Company Name</p>
              <p className="text-muted-foreground mt-4 font-body leading-relaxed">
                Description of your role and responsibilities. Key achievements and technologies used.
              </p>
            </div>
            
            <div className="journey-card p-8">
              <span className="text-accent font-body text-sm">2021 - 2023</span>
              <h3 className="text-2xl font-display font-bold mt-2 mb-3">Developer</h3>
              <p className="text-muted-foreground">Previous Company</p>
              <p className="text-muted-foreground mt-4 font-body leading-relaxed">
                Description of your role and responsibilities. Key achievements and technologies used.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
