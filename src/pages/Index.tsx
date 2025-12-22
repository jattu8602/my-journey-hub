import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { GitHubContributions } from '@/components/GitHubContributions';
import { Education } from '@/components/Education';
import { Journey } from '@/components/Journey';
import ChessBoard from '@/components/ChessBoard';
import { useLenis } from '@/hooks/useLenis';

const Index = () => {
  useLenis();

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <GitHubContributions />
      <Education />
      <Journey />
      <ChessBoard />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Nitesh Chourasiya. All rights reserved.
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
