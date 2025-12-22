import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import TableOfContents from '@/components/blog/TableOfContents';
import { ArrowLeft, Calendar, Clock, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface BlogLayoutProps {
  title: string;
  titleAccent?: string;
  description: string;
  date: string;
  readTime: string;
  author?: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

const BlogLayout = ({
  title,
  titleAccent = '.',
  description,
  date,
  readTime,
  author = 'Nitesh',
  tocItems,
  children,
}: BlogLayoutProps) => {
  useLenis();
  const [showMobileToc, setShowMobileToc] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {/* Mobile TOC Toggle */}
          <button
            onClick={() => setShowMobileToc(!showMobileToc)}
            className="lg:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            {showMobileToc ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            {showMobileToc ? 'Hide Contents' : 'Table of Contents'}
          </button>

          {/* Mobile TOC */}
          {showMobileToc && (
            <div className="lg:hidden mb-6 p-4 rounded-xl bg-card/50 border border-border/50">
              <TableOfContents items={tocItems} onItemClick={() => setShowMobileToc(false)} />
            </div>
          )}

          <div className="flex gap-8 lg:gap-12">
            {/* Sidebar - Desktop only */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0 max-w-3xl">
              {/* Header */}
              <header className="mb-8 sm:mb-12">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {author}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                  {title}<span className="text-accent">{titleAccent}</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </header>

              {/* Blog content */}
              <div className="blog-content">
                {children}
              </div>
            </main>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogLayout;
