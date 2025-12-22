import { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
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
};

const REPOS_PER_PAGE = 10;

export const GitHubRepos = () => {
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
        if (!response.ok) throw new Error('Failed to fetch');
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
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-8 sm:mb-12 text-center">
            Code<span className="accent-dot" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="journey-card p-4 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-heading mb-4">
            Code<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            My public repositories from GitHub
          </p>
          <a
            href="https://github.com/jattu8602"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
          >
            <Code2 className="w-4 h-4" />
            @jattu8602
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {currentRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="journey-card p-4 hover:border-accent/50 transition-all group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-display font-bold group-hover:text-accent transition-colors break-words flex-1">
                  {repo.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              
              <p className="text-muted-foreground text-xs sm:text-sm font-body mb-3 line-clamp-2">
                {repo.description || 'No description'}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-muted-foreground'}`} />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
                <span className="ml-auto">{formatDate(repo.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-border hover:border-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-accent text-accent-foreground'
                      : 'border border-border hover:border-accent/50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-border hover:border-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            to="/code"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
