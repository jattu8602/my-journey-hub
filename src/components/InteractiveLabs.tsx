import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Gamepad2, Sword, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import ChessBoard from '@/components/ChessBoard';
import { Button } from '@/components/ui/button';

export const InteractiveLabs = () => {
  const [activeTab, setActiveTab] = useState<'gazette' | 'chess' | 'dragon'>('gazette');

  return (
    <section id="labs" className="py-24 px-6 relative bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Web Experiences</span>
          </div>
          <h2 className="section-heading text-4xl md:text-6xl mb-4">
            Interactive Experimental Labs<span className="accent-dot" />
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-body">
            Explore live interactive components engineered directly into the portfolio—from broadsheet newspapers to playable React chess engines.
          </p>
        </div>

        {/* Lab Switcher Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('gazette')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-mono transition-all duration-300 ${
              activeTab === 'gazette'
                ? 'bg-accent text-accent-foreground font-bold shadow-lg scale-105'
                : 'bg-card border border-border text-muted-foreground hover:border-accent/40'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Broadsheet Gazette (/design)</span>
          </button>

          <button
            onClick={() => setActiveTab('chess')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-mono transition-all duration-300 ${
              activeTab === 'chess'
                ? 'bg-accent text-accent-foreground font-bold shadow-lg scale-105'
                : 'bg-card border border-border text-muted-foreground hover:border-accent/40'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>React Chess Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('dragon')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-mono transition-all duration-300 ${
              activeTab === 'dragon'
                ? 'bg-accent text-accent-foreground font-bold shadow-lg scale-105'
                : 'bg-card border border-border text-muted-foreground hover:border-accent/40'
            }`}
          >
            <Sword className="w-4 h-4" />
            <span>Dragon Canvas Game (/dragon)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="journey-card p-6 md:p-10 rounded-3xl border border-border bg-card shadow-2xl relative overflow-hidden">
          
          {/* TAB 1: GAZETTE PREVIEW */}
          {activeTab === 'gazette' && (
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs uppercase">
                  <span>FEATURED EDITORIAL EXPERIMENT</span>
                </div>
                <h3 className="font-cinzel text-3xl md:text-5xl font-black leading-tight">
                  THE JOURNEY GAZETTE
                </h3>
                <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
                  A high-fidelity broadsheet newspaper web experience styled after "The Hindu" international edition. Features multi-column text reflow, drop-caps, scrolling stock shares ticker, and a live "Press Run" theme stamp (Newsprint Sepia vs. Midnight Charcoal).
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  <span className="px-3 py-1 bg-secondary rounded-md">Responsive Grid</span>
                  <span className="px-3 py-1 bg-secondary rounded-md">Theme Switcher</span>
                  <span className="px-3 py-1 bg-secondary rounded-md">Modal Article Reader</span>
                </div>
                <div>
                  <Link to="/design">
                    <Button className="gap-2 font-mono text-sm shadow-xl hover:scale-105 transition-transform">
                      <span>EXPLORE THE GAZETTE (/design)</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full border-2 border-dashed border-accent/30 rounded-2xl p-4 bg-secondary/30 relative overflow-hidden group">
                <img 
                  src="/developer_sketch.png" 
                  alt="Newspaper Editorial Preview" 
                  className="w-full h-[320px] object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <span className="font-mono text-xs text-white">
                    NEWS EDITORIAL ILLUSTRATION • HIGH-CONTRAST INK ETCHING
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REACT CHESS ENGINE */}
          {activeTab === 'chess' && (
            <div className="flex flex-col items-center">
              <div className="text-center max-w-xl mb-6">
                <h3 className="text-2xl font-display font-bold mb-2">Live React Chess Engine</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-body">
                  Play chess right here! Built with React state management, move validation, and drag-and-drop gameplay.
                </p>
              </div>
              <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border">
                <ChessBoard />
              </div>
            </div>
          )}

          {/* TAB 3: DRAGON CANVAS GAME */}
          {activeTab === 'dragon' && (
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-mono text-xs uppercase">
                  <span>CANVAS GRAPHICS & PHYSICS</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                  Dragon Minigame Experience
                </h3>
                <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
                  A retro-style HTML5 Canvas minigame featuring a flying mythical dragon dodging obstacles. Demonstrates 60fps game loop rendering, collision detection, and parallax scrolling.
                </p>
                <div>
                  <Link to="/dragon">
                    <Button variant="secondary" className="gap-2 font-mono text-sm hover:scale-105 transition-transform">
                      <span>PLAY GAME AT /dragon</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full bg-black/90 rounded-2xl p-8 flex flex-col items-center justify-center border border-purple-500/30 text-center min-h-[300px]">
                <Sword className="w-16 h-16 text-purple-400 mb-4 animate-bounce" />
                <h4 className="font-display font-bold text-xl text-white mb-2">Mythical Dragon Arena</h4>
                <p className="font-mono text-xs text-muted-foreground max-w-sm">
                  Fly through the obstacle course using your keyboard controls. High scores tracked live!
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
