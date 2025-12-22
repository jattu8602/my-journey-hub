import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const GitHubContributions = () => {
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabletScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the right (current day) when image loads
  const handleImageLoad = () => {
    setLoading(false);
    
    // Scroll all containers to the right (current contributions)
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
      }
      if (tabletScrollRef.current) {
        tabletScrollRef.current.scrollLeft = tabletScrollRef.current.scrollWidth;
      }
      if (mobileScrollRef.current) {
        mobileScrollRef.current.scrollLeft = mobileScrollRef.current.scrollWidth;
      }
    }, 100);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            GitHub Activity<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            My coding journey visualized through contributions
          </p>
        </div>

        <div className="journey-card p-4 sm:p-6 md:p-8">
          {/* GitHub Profile Header */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <a
              href="https://github.com/jattu8602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center">
                <Github className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display font-bold text-lg sm:text-xl group-hover:text-accent transition-colors flex items-center gap-2">
                  jattu8602
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">@jattu8602</p>
              </div>
            </a>
          </div>

          {/* Contribution Graph - Desktop (scrollable for full timeline) */}
          <div 
            ref={scrollContainerRef}
            className="hidden md:block relative overflow-x-auto scrollbar-thin pb-2"
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="bg-white p-4 rounded-lg">
              <img
                src="https://github-contributions-api.jogruber.de/v4/jattu8602"
                alt="GitHub Contributions - Last Year"
                className="w-full h-auto"
                onLoad={handleImageLoad}
                onError={() => setLoading(false)}
              />
            </div>
          </div>

          {/* Contribution Graph - Tablet */}
          <div 
            ref={tabletScrollRef}
            className="hidden sm:block md:hidden relative overflow-x-auto scrollbar-thin pb-2"
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="bg-white p-3 rounded-lg">
              <img
                src="https://github-contributions-api.jogruber.de/v4/jattu8602"
                alt="GitHub Contributions - Last Year"
                className="w-full h-auto"
                onLoad={handleImageLoad}
                onError={() => setLoading(false)}
              />
            </div>
          </div>

          {/* Contribution Graph - Mobile */}
          <div 
            ref={mobileScrollRef}
            className="block sm:hidden relative overflow-x-auto scrollbar-thin pb-2"
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="bg-white p-2 rounded-lg">
              <img
                src="https://github-contributions-api.jogruber.de/v4/jattu8602"
                alt="GitHub Contributions - Last Year"
                className="w-full h-auto"
                onLoad={handleImageLoad}
                onError={() => setLoading(false)}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-accent">
                365
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">
                Daily
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Commits</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-green-500">
                Active
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Status</div>
            </div>
          </div>
        </div>

        {/* View Profile Link */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/jattu8602"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm sm:text-base font-medium"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View Full Profile
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
