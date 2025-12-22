import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Chess pieces using Unicode characters
const pieces = {
  king: '♚',
  queen: '♛',
  rook: '♜',
  bishop: '♝',
  knight: '♞',
  pawn: '♟',
};

type PieceData = { piece: string; color: 'white' | 'black' };
type BoardState = { [key: string]: PieceData };

// Initial chess setup
const getInitialBoard = (): BoardState => ({
  '0-0': { piece: pieces.rook, color: 'black' },
  '0-1': { piece: pieces.knight, color: 'black' },
  '0-2': { piece: pieces.bishop, color: 'black' },
  '0-3': { piece: pieces.queen, color: 'black' },
  '0-4': { piece: pieces.king, color: 'black' },
  '0-5': { piece: pieces.bishop, color: 'black' },
  '0-6': { piece: pieces.knight, color: 'black' },
  '0-7': { piece: pieces.rook, color: 'black' },
  '1-0': { piece: pieces.pawn, color: 'black' },
  '1-1': { piece: pieces.pawn, color: 'black' },
  '1-2': { piece: pieces.pawn, color: 'black' },
  '1-3': { piece: pieces.pawn, color: 'black' },
  '1-4': { piece: pieces.pawn, color: 'black' },
  '1-5': { piece: pieces.pawn, color: 'black' },
  '1-6': { piece: pieces.pawn, color: 'black' },
  '1-7': { piece: pieces.pawn, color: 'black' },
  '6-0': { piece: pieces.pawn, color: 'white' },
  '6-1': { piece: pieces.pawn, color: 'white' },
  '6-2': { piece: pieces.pawn, color: 'white' },
  '6-3': { piece: pieces.pawn, color: 'white' },
  '6-4': { piece: pieces.pawn, color: 'white' },
  '6-5': { piece: pieces.pawn, color: 'white' },
  '6-6': { piece: pieces.pawn, color: 'white' },
  '6-7': { piece: pieces.pawn, color: 'white' },
  '7-0': { piece: pieces.rook, color: 'white' },
  '7-1': { piece: pieces.knight, color: 'white' },
  '7-2': { piece: pieces.bishop, color: 'white' },
  '7-3': { piece: pieces.queen, color: 'white' },
  '7-4': { piece: pieces.king, color: 'white' },
  '7-5': { piece: pieces.bishop, color: 'white' },
  '7-6': { piece: pieces.knight, color: 'white' },
  '7-7': { piece: pieces.rook, color: 'white' },
});

// A simplified draw game (repetition draw scenario)
const gameMoves = [
  { from: '6-4', to: '4-4' }, // e4
  { from: '1-4', to: '3-4' }, // e5
  { from: '7-6', to: '5-5' }, // Nf3
  { from: '0-6', to: '2-5' }, // Nf6
  { from: '5-5', to: '3-4' }, // Nxe5
  { from: '1-3', to: '2-3' }, // d6
  { from: '3-4', to: '5-5' }, // Nf3
  { from: '2-5', to: '4-4' }, // Nxe4
  { from: '7-3', to: '4-0' }, // Qe2 (using different path)
  { from: '4-4', to: '5-6' }, // Ng5 (knight retreat)
  { from: '4-0', to: '4-4' }, // Qe4+
  { from: '0-5', to: '1-4' }, // Be7
  { from: '4-4', to: '1-7' }, // Qh4 
  { from: '5-6', to: '4-4' }, // Ne4
  { from: '1-7', to: '4-4' }, // Qxe4
  { from: '1-4', to: '4-7' }, // Bh4
  { from: '4-4', to: '4-7' }, // Qxh4
  { from: '0-4', to: '1-4' }, // Kd7
  { from: '4-7', to: '1-4' }, // Qxd7 - simplified
  // Draw by agreement after material exchange
];

const ChessBoard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [boardState, setBoardState] = useState<BoardState>(getInitialBoard());
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStable, setIsStable] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pieceRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  // Apply a move with animation
  const applyMove = useCallback((moveIndex: number, reverse: boolean = false) => {
    if (moveIndex < 0 || moveIndex >= gameMoves.length) return;
    
    const move = gameMoves[moveIndex];
    const from = reverse ? move.to : move.from;
    const to = reverse ? move.from : move.to;
    
    setBoardState(prev => {
      const newState = { ...prev };
      const piece = newState[from];
      if (piece) {
        delete newState[from];
        newState[to] = piece;
      }
      return newState;
    });
  }, []);

  // Play game forward automatically
  const playForward = useCallback(() => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }
    
    setIsPlaying(true);
    let index = currentMoveIndex;
    
    playIntervalRef.current = setInterval(() => {
      index++;
      if (index >= gameMoves.length) {
        if (playIntervalRef.current) {
          clearInterval(playIntervalRef.current);
        }
        setIsPlaying(false);
        setGameComplete(true);
        return;
      }
      setCurrentMoveIndex(index);
      applyMove(index, false);
    }, 800); // Move every 800ms
  }, [currentMoveIndex, applyMove]);

  // Reverse game quickly
  const reverseGame = useCallback(() => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }
    
    setIsPlaying(true);
    setGameComplete(false);
    
    // Reset to initial state immediately
    setBoardState(getInitialBoard());
    setCurrentMoveIndex(-1);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !boardRef.current) return;

    const ctx = gsap.context(() => {
      // Board perspective animation - smooth scrub
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
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
            onEnter: () => setIsStable(false),
            onLeave: () => setIsStable(true),
            onEnterBack: () => {
              setIsStable(false);
              reverseGame();
            },
            onLeaveBack: () => setIsStable(false),
          },
        }
      );

      // Pieces fade in
      gsap.fromTo(
        '.chess-piece',
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          stagger: 0.01,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, [reverseGame]);

  // Start playing when board becomes stable
  useEffect(() => {
    if (isStable && !isPlaying && currentMoveIndex < gameMoves.length - 1 && !gameComplete) {
      const timer = setTimeout(() => {
        playForward();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isStable, isPlaying, currentMoveIndex, gameComplete, playForward]);

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0;
    const key = `${row}-${col}`;
    const pieceData = boardState[key];

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
        {pieceData && (
          <span
            ref={(el) => { pieceRefs.current[key] = el; }}
            className={`
              chess-piece leading-none select-none transition-all duration-300
              text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]
              ${pieceData.color === 'white' ? 'text-white' : 'text-gray-900'}
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
        {isPlaying && (
          <p className="text-primary font-body text-sm mt-2 animate-pulse">
            Game in progress...
          </p>
        )}
        {gameComplete && (
          <p className="text-green-500 font-body text-sm mt-2 font-semibold">
            Game Over — Draw! ½-½
          </p>
        )}
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
