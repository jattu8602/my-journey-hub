import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';

const Blogs = () => {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-4xl">
          <h1 className="section-heading mb-6">Blogs<span className="accent-dot" /></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Thoughts and insights on development and design.
          </p>
          
          {/* Blog posts placeholder */}
          <div className="space-y-6 text-left">
            <article className="journey-card p-6 hover:border-accent/50 transition-colors cursor-pointer">
              <span className="text-accent font-body text-sm">December 2024</span>
              <h3 className="text-xl font-display font-bold mt-2 mb-3">Blog Post Title</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                A brief excerpt or description of the blog post content goes here...
              </p>
            </article>
            
            <article className="journey-card p-6 hover:border-accent/50 transition-colors cursor-pointer">
              <span className="text-accent font-body text-sm">November 2024</span>
              <h3 className="text-xl font-display font-bold mt-2 mb-3">Another Blog Post</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                A brief excerpt or description of the blog post content goes here...
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
