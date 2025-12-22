import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChessBoard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const pawnRef = useRef<HTMLDivElement>(null);

  // Chess pieces using Unicode characters
  const pieces = {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟',
  };

  // Initial chess setup (simplified for visual effect)
  const initialSetup: { [key: string]: { piece: string; color: 'white' | 'black' } } = {
    // Black pieces (top)
    '0-0': { piece: pieces.rook, color: 'black' },
    '0-1': { piece: pieces.knight, color: 'black' },
    '0-2': { piece: pieces.bishop, color: 'black' },
    '0-3': { piece: pieces.queen, color: 'black' },
    '0-4': { piece: pieces.king, color: 'black' },
    '0-5': { piece: pieces.bishop, color: 'black' },
    '0-6': { piece: pieces.knight, color: 'black' },
    '0-7': { piece: pieces.rook, color: 'black' },
    // Black pawns
    '1-0': { piece: pieces.pawn, color: 'black' },
    '1-1': { piece: pieces.pawn, color: 'black' },
    '1-2': { piece: pieces.pawn, color: 'black' },
    '1-3': { piece: pieces.pawn, color: 'black' },
    '1-4': { piece: pieces.pawn, color: 'black' },
    '1-5': { piece: pieces.pawn, color: 'black' },
    '1-6': { piece: pieces.pawn, color: 'black' },
    '1-7': { piece: pieces.pawn, color: 'black' },
    // White pawns
    '6-0': { piece: pieces.pawn, color: 'white' },
    '6-1': { piece: pieces.pawn, color: 'white' },
    '6-2': { piece: pieces.pawn, color: 'white' },
    '6-3': { piece: pieces.pawn, color: 'white' },
    '6-4': { piece: pieces.pawn, color: 'white' },
    '6-5': { piece: pieces.pawn, color: 'white' },
    '6-6': { piece: pieces.pawn, color: 'white' },
    '6-7': { piece: pieces.pawn, color: 'white' },
    // White pieces (bottom)
    '7-0': { piece: pieces.rook, color: 'white' },
    '7-1': { piece: pieces.knight, color: 'white' },
    '7-2': { piece: pieces.bishop, color: 'white' },
    '7-3': { piece: pieces.queen, color: 'white' },
    '7-4': { piece: pieces.king, color: 'white' },
    '7-5': { piece: pieces.bishop, color: 'white' },
    '7-6': { piece: pieces.knight, color: 'white' },
    '7-7': { piece: pieces.rook, color: 'white' },
  };

  useEffect(() => {
    if (!containerRef.current || !boardRef.current || !pawnRef.current) return;

    const ctx = gsap.context(() => {
      // Board perspective animation - starts tilted, straightens on scroll
      gsap.fromTo(
        boardRef.current,
        {
          rotateX: 55,
          scaleY: 0.6,
          scaleX: 1.1,
        },
        {
          rotateX: 15,
          scaleY: 0.95,
          scaleX: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // Pieces fade in animation (no position change)
      gsap.fromTo(
        '.chess-piece',
        {
          scale: 0.8,
          opacity: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // Animated pawn move (e2 to e4 - classic opening) - moves up 2 squares
      const squareSize = boardRef.current?.querySelector('.chess-square')?.getBoundingClientRect().height || 40;
      gsap.fromTo(
        pawnRef.current,
        {
          y: 0,
        },
        {
          y: -squareSize * 2, // Move up exactly two squares
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'center 30%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0;
    const key = `${row}-${col}`;
    const pieceData = initialSetup[key];
    
    // Special case for the animated pawn (e2 position = row 6, col 4)
    const isAnimatedPawn = row === 6 && col === 4;

    return (
      <div
        key={key}
        className={`
          chess-square aspect-square flex items-center justify-center relative
          ${isLight ? 'bg-amber-100/90' : 'bg-amber-800/90'}
        `}
        style={{
          boxShadow: isLight 
            ? 'inset 0 0 8px rgba(0,0,0,0.1)' 
            : 'inset 0 0 8px rgba(0,0,0,0.25)',
        }}
      >
        {pieceData && !isAnimatedPawn && (
          <span
            className={`
              chess-piece leading-none select-none
              text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]
              ${pieceData.color === 'white' 
                ? 'text-white' 
                : 'text-gray-900'}
            `}
            style={{
              textShadow: pieceData.color === 'white' 
                ? '0 2px 4px rgba(0,0,0,0.6), 0 0 8px rgba(255,255,255,0.3)' 
                : '0 2px 4px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))',
            }}
          >
            {pieceData.piece}
          </span>
        )}
        
        {/* Animated pawn */}
        {isAnimatedPawn && pieceData && (
          <span
            ref={pawnRef}
            className="chess-piece leading-none select-none text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-white absolute inset-0 flex items-center justify-center z-10"
            style={{
              textShadow: '0 0 12px rgba(34,197,94,0.7), 0 2px 4px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))',
            }}
          >
            {pieceData.piece}
          </span>
        )}
      </div>
    );
  };

  return (
    <section ref={containerRef} className="py-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Chess Enthusiast
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          1600+ rated on Chess.com • Strategic thinking applied to code
        </p>
      </div>

      {/* Chess board with 3D perspective */}
      <div 
        className="relative"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          ref={boardRef}
          className="grid grid-cols-8 w-64 sm:w-80 md:w-96 border-4 border-amber-900 rounded-lg overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 42, 0.3)',
          }}
        >
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => renderSquare(row, col))
          )}
        </div>

        {/* Decorative glow effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.1) 0%, transparent 70%)',
            transform: 'translateY(20px) scale(1.2)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Chess quote */}
      <p className="mt-12 text-center text-muted-foreground/70 font-body italic max-w-md">
        "Every chess master was once a beginner." — Irving Chernev
      </p>
    </section>
  );
};

export default ChessBoard;
