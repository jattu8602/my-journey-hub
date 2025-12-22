import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  Python: 'bg-green-500',
  Java: 'bg-orange-500',
  HTML: 'bg-red-500',
  CSS: 'bg-purple-500',
  'C++': 'bg-pink-500',
  C: 'bg-gray-500',
  Ruby: 'bg-red-600',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  PHP: 'bg-indigo-400',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-600',
  Dart: 'bg-blue-400',
};

const REPOS_PER_PAGE = 9;

const Code = () => {
  useLenis();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/jattu8602/repos?sort=updated&per_page=100'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);
  const startIndex = (currentPage - 1) * REPOS_PER_PAGE;
  const currentRepos = repos.slice(startIndex, startIndex + REPOS_PER_PAGE);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <section className="min-h-screen px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="section-heading mb-4 sm:mb-6">Code<span className="accent-dot" /></h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-4 px-2">
              My public repositories and open source contributions.
            </p>
            <a
              href="https://github.com/jattu8602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-body text-sm sm:text-base"
            >
              <Code2 className="w-5 h-5" />
              @jattu8602 on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="journey-card p-4 sm:p-6 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-3 bg-muted rounded w-full mb-2" />
                  <div className="h-3 bg-muted rounded w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-muted rounded w-16" />
                    <div className="h-6 bg-muted rounded w-16" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No public repositories found.</p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journey-card p-4 sm:p-6 hover:border-accent/50 transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {repo.language && (
                        <>
                          <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-muted-foreground'}`} />
                          <span className="text-muted-foreground font-body text-sm">{repo.language}</span>
                        </>
                      )}
                      <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors break-words">
                      {repo.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </span>
                      <span className="text-xs ml-auto">
                        {formatDate(repo.updated_at)}
                      </span>
                    </div>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 flex-wrap">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 sm:p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first, last, current and adjacent pages
                      const showPage = page === 1 || 
                        page === totalPages || 
                        Math.abs(page - currentPage) <= 1;
                      
                      const showEllipsis = (page === 2 && currentPage > 3) || 
                        (page === totalPages - 1 && currentPage < totalPages - 2);

                      if (!showPage && !showEllipsis) return null;
                      
                      if (showEllipsis && !showPage) {
                        return (
                          <span key={page} className="px-2 text-muted-foreground">
                            ...
                          </span>
                        );
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-all ${
                            currentPage === page
                              ? 'bg-accent text-accent-foreground'
                              : 'border border-border hover:border-accent/50 hover:bg-accent/10'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 sm:p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Page info */}
              <p className="text-center text-muted-foreground text-sm mt-4">
                Showing {startIndex + 1}-{Math.min(startIndex + REPOS_PER_PAGE, repos.length)} of {repos.length} repositories
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Code;
