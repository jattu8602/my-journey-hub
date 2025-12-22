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

// Collection of different chess games/openings
const chessGames = [
  // Italian Game
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' },
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' },
    { from: '7-5', to: '4-2' }, { from: '7-5', to: '4-2' },
    { from: '6-3', to: '5-3' }, { from: '0-5', to: '3-2' },
    { from: '6-2', to: '4-2' }, { from: '2-2', to: '4-3' },
  ],
  // Sicilian Defense
  [
    { from: '6-4', to: '4-4' }, { from: '1-2', to: '3-2' },
    { from: '7-6', to: '5-5' }, { from: '1-3', to: '2-3' },
    { from: '6-3', to: '4-3' }, { from: '3-2', to: '4-3' },
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' },
    { from: '7-1', to: '5-2' }, { from: '6-0', to: '5-0' },
  ],
  // Queen's Gambit
  [
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' },
    { from: '6-2', to: '4-2' }, { from: '1-4', to: '3-4' },
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' },
    { from: '7-2', to: '4-5' }, { from: '0-5', to: '3-2' },
    { from: '4-2', to: '3-3' }, { from: '3-4', to: '4-3' },
  ],
  // Ruy Lopez
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' },
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' },
    { from: '7-5', to: '2-0' }, { from: '1-0', to: '2-0' },
    { from: '6-3', to: '5-3' }, { from: '0-6', to: '2-5' },
    { from: '5-5', to: '3-4' }, { from: '2-2', to: '3-4' },
  ],
  // French Defense
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '2-4' },
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' },
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' },
    { from: '4-4', to: '3-4' }, { from: '2-5', to: '3-3' },
    { from: '7-6', to: '5-5' }, { from: '1-2', to: '2-2' },
  ],
  // Caro-Kann Defense
  [
    { from: '6-4', to: '4-4' }, { from: '1-2', to: '2-2' },
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' },
    { from: '4-4', to: '3-4' }, { from: '0-2', to: '2-4' },
    { from: '7-6', to: '5-5' }, { from: '2-4', to: '3-5' },
    { from: '7-5', to: '4-2' }, { from: '1-4', to: '2-4' },
  ],
  // King's Indian Defense
  [
    { from: '6-3', to: '4-3' }, { from: '0-6', to: '2-5' },
    { from: '6-2', to: '4-2' }, { from: '1-6', to: '2-6' },
    { from: '7-1', to: '5-2' }, { from: '0-5', to: '1-6' },
    { from: '6-4', to: '4-4' }, { from: '1-3', to: '2-3' },
    { from: '7-6', to: '5-5' }, { from: '0-4', to: '0-6' },
  ],
  // Scandinavian Defense
  [
    { from: '6-4', to: '4-4' }, { from: '1-3', to: '3-3' },
    { from: '4-4', to: '3-3' }, { from: '0-3', to: '3-3' },
    { from: '7-1', to: '5-2' }, { from: '3-3', to: '4-0' },
    { from: '6-3', to: '4-3' }, { from: '0-6', to: '2-5' },
    { from: '7-6', to: '5-5' }, { from: '1-2', to: '2-2' },
  ],
  // Pirc Defense
  [
    { from: '6-4', to: '4-4' }, { from: '1-3', to: '2-3' },
    { from: '6-3', to: '4-3' }, { from: '0-6', to: '2-5' },
    { from: '7-1', to: '5-2' }, { from: '1-6', to: '2-6' },
    { from: '7-6', to: '5-5' }, { from: '0-5', to: '1-6' },
    { from: '7-5', to: '4-2' }, { from: '0-4', to: '0-6' },
  ],
  // London System
  [
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' },
    { from: '7-2', to: '4-5' }, { from: '0-6', to: '2-5' },
    { from: '6-4', to: '5-4' }, { from: '1-2', to: '2-2' },
    { from: '7-1', to: '5-3' }, { from: '0-3', to: '1-2' },
    { from: '7-6', to: '5-5' }, { from: '1-4', to: '2-4' },
  ],
  // Scotch Game
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' },
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' },
    { from: '6-3', to: '4-3' }, { from: '3-4', to: '4-3' },
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' },
    { from: '4-3', to: '2-2' }, { from: '1-1', to: '2-2' },
  ],
  // Vienna Game
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' },
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' },
    { from: '7-5', to: '4-2' }, { from: '2-5', to: '4-4' },
    { from: '7-3', to: '6-4' }, { from: '4-4', to: '5-2' },
    { from: '6-3', to: '5-2' }, { from: '1-3', to: '2-3' },
  ],
  // Dutch Defense
  [
    { from: '6-3', to: '4-3' }, { from: '1-5', to: '3-5' },
    { from: '6-6', to: '4-6' }, { from: '0-6', to: '2-5' },
    { from: '7-5', to: '4-2' }, { from: '1-4', to: '2-4' },
    { from: '7-6', to: '5-7' }, { from: '0-5', to: '3-2' },
    { from: '6-2', to: '5-2' }, { from: '0-4', to: '0-6' },
  ],
  // English Opening
  [
    { from: '6-2', to: '4-2' }, { from: '1-4', to: '3-4' },
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' },
    { from: '6-6', to: '5-6' }, { from: '1-3', to: '3-3' },
    { from: '7-5', to: '4-2' }, { from: '0-5', to: '3-2' },
    { from: '7-6', to: '5-5' }, { from: '0-4', to: '0-6' },
  ],
  // Bird's Opening
  [
    { from: '6-5', to: '4-5' }, { from: '1-3', to: '3-3' },
    { from: '7-6', to: '5-5' }, { from: '0-6', to: '2-5' },
    { from: '6-4', to: '5-4' }, { from: '1-6', to: '2-6' },
    { from: '7-5', to: '4-2' }, { from: '0-5', to: '1-6' },
    { from: '6-3', to: '5-3' }, { from: '0-4', to: '0-6' },
  ],
];

const ChessBoard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [boardState, setBoardState] = useState<BoardState>(getInitialBoard());
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStable, setIsStable] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [currentGame, setCurrentGame] = useState<typeof chessGames[0]>([]);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const selectRandomGame = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * chessGames.length);
    setCurrentGame(chessGames[randomIndex]);
  }, []);

  const applyMove = useCallback((moveIndex: number) => {
    if (moveIndex < 0 || moveIndex >= currentGame.length) return;
    
    const move = currentGame[moveIndex];
    
    setBoardState(prev => {
      const newState = { ...prev };
      const piece = newState[move.from];
      if (piece) {
        delete newState[move.from];
        newState[move.to] = piece;
      }
      return newState;
    });
  }, [currentGame]);

  const playForward = useCallback(() => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }
    
    setIsPlaying(true);
    let index = currentMoveIndex;
    
    playIntervalRef.current = setInterval(() => {
      index++;
      if (index >= currentGame.length) {
        if (playIntervalRef.current) {
          clearInterval(playIntervalRef.current);
        }
        setIsPlaying(false);
        setGameComplete(true);
        return;
      }
      setCurrentMoveIndex(index);
      applyMove(index);
    }, 800);
  }, [currentMoveIndex, currentGame.length, applyMove]);

  const reverseGame = useCallback(() => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }
    
    setGameComplete(false);
    setBoardState(getInitialBoard());
    setCurrentMoveIndex(-1);
    setIsPlaying(false);
    selectRandomGame();
  }, [selectRandomGame]);

  useEffect(() => {
    selectRandomGame();
  }, [selectRandomGame]);

  useEffect(() => {
    if (!containerRef.current || !boardRef.current) return;

    const ctx = gsap.context(() => {
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

  useEffect(() => {
    if (isStable && !isPlaying && currentGame.length > 0 && currentMoveIndex < currentGame.length - 1 && !gameComplete) {
      const timer = setTimeout(() => {
        playForward();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isStable, isPlaying, currentMoveIndex, gameComplete, currentGame.length, playForward]);

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
      </div>

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

        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.1) 0%, transparent 70%)',
            transform: 'translateY(20px) scale(1.2)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      <p className="mt-12 text-center text-muted-foreground/70 font-body italic max-w-md">
        "Every chess master was once a beginner." — Irving Chernev
      </p>
    </section>
  );
};

export default ChessBoard;
