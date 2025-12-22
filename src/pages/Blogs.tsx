import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'nextjs-for-beginners',
    title: 'Next.js for Beginners',
    excerpt: 'A comprehensive guide to getting started with Next.js 14 - the React framework for building full-stack web applications with ease.',
    date: 'December 22, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    tags: ['Next.js', 'React', 'Tutorial'],
  },
  {
    id: '2',
    slug: 'transformers-in-ai',
    title: 'Transformers in AI',
    excerpt: 'A deep dive into the Transformer architecture that revolutionized AI - from attention mechanisms to GPT, BERT, and beyond.',
    date: 'December 22, 2024',
    readTime: '25 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['AI', 'Machine Learning', 'Transformers'],
  },
];

const Blogs = () => {
  useLenis();

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <section className="min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-heading mb-6">Blogs<span className="accent-dot" /></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Thoughts, tutorials, and insights on development and design.
            </p>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full rounded-xl border border-border/50 bg-card/50 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* More coming soon */}
          {blogPosts.length < 3 && (
            <div className="text-center mt-16 p-8 rounded-xl border border-dashed border-border/50">
              <p className="text-muted-foreground">
                More articles coming soon...
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
