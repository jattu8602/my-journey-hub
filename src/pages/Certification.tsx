import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';

const Certification = () => {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-4xl">
          <h1 className="section-heading mb-6">Certifications<span className="accent-dot" /></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            My professional certifications and achievements.
          </p>
          
          {/* Certifications grid placeholder */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="journey-card p-6">
              <span className="text-accent font-body text-sm">2024</span>
              <h3 className="text-xl font-display font-bold mt-2 mb-2">Certification Name</h3>
              <p className="text-muted-foreground text-sm">Issuing Organization</p>
            </div>
            
            <div className="journey-card p-6">
              <span className="text-accent font-body text-sm">2023</span>
              <h3 className="text-xl font-display font-bold mt-2 mb-2">Another Certification</h3>
              <p className="text-muted-foreground text-sm">Issuing Organization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
