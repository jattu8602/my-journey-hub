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

// Collection of famous chess games - converted from PGN
const chessGames = [
  // Game 1: Quick checkmate with Qxf7#
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '7-5', to: '4-2' }, { from: '0-5', to: '2-3' }, // Bc4 Bc5
    { from: '7-3', to: '3-6' }, { from: '0-6', to: '2-5' }, // Qg4 Nf6
    { from: '3-6', to: '1-6' }, { from: '0-7', to: '1-6' }, // Qxg7 Rg8
    { from: '1-6', to: '1-5' }, // Qxf7#
  ],
  // Game 2: Fool's Mate - 3 move checkmate
  [
    { from: '6-4', to: '4-4' }, { from: '1-5', to: '2-5' }, // e4 f6
    { from: '6-3', to: '4-3' }, { from: '1-6', to: '3-6' }, // d4 g5
    { from: '7-3', to: '3-7' }, // Qh5#
  ],
  // Game 3: Fool's Mate for Black
  [
    { from: '6-5', to: '5-5' }, { from: '1-4', to: '3-4' }, // f3 e5
    { from: '6-6', to: '4-6' }, { from: '0-3', to: '4-7' }, // g4 Qh4#
  ],
  // Game 4: Fried Liver Attack finale
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '7-5', to: '4-2' }, { from: '0-6', to: '2-5' }, // Bc4 Nf6
    { from: '5-5', to: '3-6' }, { from: '1-3', to: '3-3' }, // Ng5 d5
    { from: '4-4', to: '3-3' }, { from: '2-5', to: '3-3' }, // exd5 Nxd5
    { from: '3-6', to: '1-5' }, { from: '0-4', to: '1-5' }, // Nxf7 Kxf7
    { from: '7-3', to: '5-5' }, { from: '3-3', to: '4-5' }, // Qf3+ Ke6
    { from: '7-1', to: '5-2' }, { from: '2-2', to: '4-1' }, // Nc3 Ncb4
    { from: '6-0', to: '5-0' }, { from: '4-1', to: '6-2' }, // a3 Nxc2+
    { from: '7-4', to: '7-3' }, { from: '6-2', to: '7-0' }, // Kd1 Nxa1
    { from: '5-2', to: '3-3' }, { from: '1-1', to: '3-1' }, // Nxd5 b5
    { from: '4-2', to: '6-0' }, { from: '0-2', to: '1-1' }, // Ba2 Bb7
    { from: '5-5', to: '4-4' }, { from: '0-3', to: '3-3' }, // Qe4 Qxd5
    { from: '6-0', to: '3-3' }, { from: '1-1', to: '3-3' }, // Bxd5+ Bxd5
    { from: '4-4', to: '3-6' }, { from: '4-5', to: '5-3' }, // Qg4+ Kd6
    { from: '6-3', to: '4-3' }, { from: '7-0', to: '5-1' }, // d4 Nb3
    { from: '4-3', to: '3-4' }, { from: '5-3', to: '4-4' }, // dxe5+ Kxe5
    { from: '7-2', to: '5-4' }, { from: '4-4', to: '5-4' }, // Bf4+ Kxf4
    { from: '3-6', to: '5-4' }, // Qxf4#
  ],
  // Game 5: King's Indian Attack finale
  [
    { from: '6-3', to: '4-3' }, { from: '0-6', to: '2-5' }, // d4 Nf6
    { from: '6-2', to: '4-2' }, { from: '1-6', to: '2-6' }, // c4 g6
    { from: '7-1', to: '5-2' }, { from: '0-5', to: '1-6' }, // Nc3 Bg7
    { from: '6-4', to: '4-4' }, { from: '1-3', to: '2-3' }, // e4 d6
    { from: '6-5', to: '5-5' }, { from: '0-4', to: '0-6' }, // f3 O-O
    { from: '7-2', to: '4-5' }, { from: '0-1', to: '2-2' }, // Be3 Nc6
    { from: '7-6', to: '5-4' }, { from: '1-0', to: '2-0' }, // Nge2 a6
    { from: '7-3', to: '6-3' }, { from: '0-7', to: '1-1' }, // Qd2 Rb8
    { from: '4-5', to: '3-7' }, { from: '1-6', to: '3-7' }, // Bh6 Bxh6
    { from: '6-3', to: '3-7' }, { from: '1-4', to: '3-4' }, // Qxh6 e5
    { from: '4-3', to: '3-3' }, { from: '2-2', to: '3-4' }, // d5 Nd4
    { from: '7-4', to: '7-2' }, { from: '1-1', to: '3-1' }, // O-O-O b5
    { from: '5-4', to: '3-4' }, { from: '3-4', to: '4-3' }, // Nxd4 exd4
    { from: '7-0', to: '3-4' }, { from: '3-1', to: '4-2' }, // Rxd4 bxc4
    { from: '7-5', to: '4-2' }, { from: '0-2', to: '1-3' }, // Bxc4 Bd7
    { from: '6-7', to: '5-7' }, { from: '2-5', to: '3-7' }, // h4 Nh5
    { from: '6-6', to: '4-6' }, { from: '0-3', to: '2-5' }, // g4 Qf6
    { from: '4-6', to: '3-7' }, { from: '2-5', to: '3-4' }, // gxh5 Qxd4
    { from: '3-7', to: '2-6' }, { from: '1-5', to: '2-6' }, // hxg6 fxg6
    { from: '3-7', to: '1-7' }, { from: '0-6', to: '1-7' }, // Qxh7+ Kxh7
    { from: '5-7', to: '4-7' }, { from: '2-6', to: '3-6' }, // h5 g5
    { from: '4-7', to: '3-7' }, { from: '3-4', to: '2-5' }, // h6 Qf6
    { from: '5-5', to: '4-5' }, { from: '3-6', to: '4-5' }, // f4 gxf4
    { from: '4-4', to: '3-4' }, { from: '2-5', to: '3-4' }, // e5 Qxe5
    { from: '4-2', to: '5-3' }, { from: '1-7', to: '1-6' }, // Bd3+ Kh8
    { from: '7-7', to: '1-7' }, { from: '2-5', to: '1-6' }, // Rg1 Qf6
    { from: '1-7', to: '1-6' }, // Rxg7#
  ],
  // Game 6: Sicilian Dragon Attack - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-2', to: '3-2' }, // e4 c5
    { from: '7-6', to: '5-5' }, { from: '1-3', to: '2-3' }, // Nf3 d6
    { from: '6-3', to: '4-3' }, { from: '3-2', to: '4-3' }, // d4 cxd4
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' }, // Nxd4 Nf6
    { from: '7-1', to: '5-2' }, { from: '1-0', to: '2-0' }, // Nc3 a6
    { from: '7-2', to: '4-5' }, { from: '1-4', to: '2-4' }, // Bg5 e6
    { from: '6-5', to: '4-5' }, { from: '0-3', to: '1-1' }, // f4 Qb6
    { from: '7-3', to: '6-3' }, { from: '1-1', to: '6-1' }, // Qd2 Qxb2
    { from: '7-0', to: '7-1' }, { from: '6-1', to: '5-0' }, // Rb1 Qa3
    { from: '4-5', to: '2-5' }, { from: '1-6', to: '2-5' }, // Bxf6 gxf6
    { from: '7-5', to: '5-4' }, { from: '1-7', to: '3-7' }, // Be2 h5
    { from: '7-1', to: '5-1' }, { from: '5-0', to: '5-0' }, // Rb3 Qa5
    { from: '7-4', to: '7-4' }, { from: '0-5', to: '3-7' }, // O-O Bh6
    { from: '6-3', to: '5-3' }, { from: '5-0', to: '4-2' }, // Qd3 Qc5
    { from: '5-2', to: '4-0' }, { from: '4-2', to: '5-0' }, // Na4 Qa7
    { from: '5-4', to: '3-7' }, { from: '1-1', to: '3-1' }, // Bxh5 b5
    { from: '7-4', to: '7-7' }, { from: '3-1', to: '4-0' }, // Kh1 bxa4
    { from: '5-3', to: '5-2' }, { from: '0-1', to: '1-3' }, // Qc3 Nd7
    { from: '5-1', to: '3-7' }, { from: '1-3', to: '3-4' }, // Rh3 Ne5
    { from: '4-5', to: '3-4' }, { from: '2-3', to: '3-4' }, // fxe5 dxe5
    { from: '4-3', to: '2-4' }, { from: '2-4', to: '1-4' }, // Nxe6+ Ke7
    { from: '2-4', to: '1-5' }, { from: '0-0', to: '1-3' }, // Nxf8 Rad8
    { from: '5-2', to: '0-2' }, { from: '1-3', to: '0-2' }, // Qc8 Rxd1+
    { from: '0-2', to: '0-0' }, // Qxd1#
  ],
  // Game 7: Long endgame - White wins eventually
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '7-5', to: '4-2' }, { from: '0-6', to: '2-5' }, // Bc4 Nf6
    { from: '5-5', to: '3-6' }, { from: '1-3', to: '3-3' }, // Ng5 d5
    { from: '4-4', to: '3-3' }, { from: '2-2', to: '4-0' }, // exd5 Na5
    { from: '4-2', to: '3-1' }, { from: '1-2', to: '2-2' }, // Bb5+ c6
    { from: '3-3', to: '2-2' }, { from: '1-1', to: '2-2' }, // dxc6 bxc6
    { from: '3-1', to: '5-4' }, { from: '1-7', to: '2-7' }, // Be2 h6
    { from: '3-6', to: '5-5' }, { from: '3-4', to: '4-4' }, // Nf3 e4
    { from: '5-5', to: '3-4' }, { from: '0-5', to: '2-3' }, // Ne5 Bd6
    { from: '6-3', to: '4-3' }, { from: '0-3', to: '2-2' }, // d4 Qc7
    { from: '7-2', to: '5-4' }, { from: '2-5', to: '3-3' }, // Bf4 Nd5
    { from: '5-4', to: '4-6' }, { from: '1-5', to: '2-5' }, // Bg3 f6
    { from: '3-4', to: '1-6' }, { from: '2-3', to: '4-6' }, // Ng6 Bxg3
    { from: '1-6', to: '0-7' }, { from: '4-4', to: '5-4' }, // Nxh8 e3
    { from: '6-7', to: '4-6' }, { from: '5-4', to: '6-5' }, // hxg3 exf2+
    { from: '7-4', to: '6-5' }, { from: '2-2', to: '4-6' }, // Kxf2 Qxg3+
    { from: '6-5', to: '7-4' }, { from: '3-3', to: '5-4' }, // Kg1 Ne3
    { from: '7-3', to: '3-7' }, { from: '0-4', to: '1-3' }, // Qh5+ Kd8
    { from: '3-7', to: '0-7' }, { from: '1-3', to: '2-2' }, // Qh8+ Kc7
    { from: '0-7', to: '1-6' }, { from: '1-6', to: '0-6' }, // Qxg7+ Qxg7
    { from: '7-7', to: '0-7' }, { from: '5-4', to: '7-5' }, // Rh7 Nxf1
    { from: '7-4', to: '7-5' }, { from: '0-2', to: '5-0' }, // Kxf1 Ba6+
    { from: '7-5', to: '6-5' }, { from: '5-0', to: '7-5' }, // Kf2 Bxf1
    { from: '6-5', to: '7-5' }, { from: '2-5', to: '3-5' }, // Kxf1 f5
    { from: '0-7', to: '1-7' }, { from: '2-2', to: '3-6' }, // Bxh7 Kg7
    { from: '7-1', to: '5-3' }, { from: '2-2', to: '3-2' }, // Nd2 c5
    { from: '4-3', to: '3-2' }, // dxc5 - continues to checkmate
  ],
  // Game 8: Scholar's Mate
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-3', to: '3-7' }, { from: '0-1', to: '2-2' }, // Qh5 Nc6
    { from: '7-5', to: '4-2' }, { from: '0-6', to: '2-5' }, // Bc4 Nf6
    { from: '3-7', to: '1-5' }, // Qxf7#
  ],
  // Game 9: Blackmar-Diemer Gambit - White wins
  [
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' }, // d4 d5
    { from: '6-4', to: '4-4' }, { from: '3-3', to: '4-4' }, // e4 dxe4
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' }, // Nc3 Nf6
    { from: '7-2', to: '4-5' }, { from: '0-2', to: '3-5' }, // Bg5 Bf5
    { from: '7-3', to: '5-4' }, { from: '1-4', to: '2-4' }, // Qe2 e6
    { from: '7-4', to: '7-2' }, { from: '0-5', to: '3-4' }, // O-O-O Be7
    { from: '4-5', to: '2-5' }, { from: '3-4', to: '2-5' }, // Bxf6 Bxf6
    { from: '5-2', to: '4-4' }, { from: '2-5', to: '4-4' }, // Nxe4 Bxe4
    { from: '5-4', to: '4-4' }, { from: '1-2', to: '2-2' }, // Qxe4 c6
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '1-3' }, // Nf3 Nd7
    { from: '5-5', to: '3-4' }, { from: '1-3', to: '3-4' }, // Ne5 Nxe5
    { from: '4-3', to: '3-4' }, { from: '0-3', to: '4-0' }, // dxe5 Qa5
    { from: '3-4', to: '2-5' }, { from: '2-5', to: '3-5' }, // exf6 Qxa2
    { from: '2-5', to: '1-6' }, { from: '3-5', to: '5-0' }, // fxg7 Qa1+
    { from: '7-2', to: '6-3' }, { from: '0-4', to: '0-2' }, // Kd2 O-O-O+
    { from: '7-5', to: '5-3' }, { from: '5-0', to: '6-1' }, // Bd3 Qxb2
    { from: '1-6', to: '0-7' }, // gxh8=Q - White wins
  ],
  // Game 10: English Opening - Black wins
  [
    { from: '6-2', to: '4-2' }, { from: '1-4', to: '3-4' }, // c4 e5
    { from: '7-1', to: '5-2' }, { from: '0-6', to: '2-5' }, // Nc3 Nf6
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '6-6', to: '5-6' }, { from: '1-3', to: '3-3' }, // g3 d5
    { from: '4-2', to: '3-3' }, { from: '2-5', to: '3-3' }, // cxd5 Nxd5
    { from: '7-5', to: '6-6' }, { from: '3-3', to: '5-1' }, // Bg2 Nb6
    { from: '7-4', to: '7-6' }, { from: '0-5', to: '3-4' }, // O-O Be7
    { from: '6-3', to: '5-3' }, { from: '0-4', to: '0-6' }, // d3 O-O
    { from: '7-2', to: '4-5' }, { from: '0-2', to: '3-5' }, // Be3 Be6
    { from: '7-3', to: '6-2' }, { from: '1-5', to: '3-5' }, // Qc1 f5
    { from: '5-5', to: '3-6' }, { from: '3-5', to: '4-5' }, // Ng5 Bxg5
    { from: '4-5', to: '4-6' }, { from: '0-3', to: '1-3' }, // Bxg5 Qd7
    { from: '6-5', to: '4-5' }, { from: '1-7', to: '3-7' }, // f4 h6
    { from: '4-5', to: '5-2' }, { from: '5-1', to: '4-2' }, // Bxc6 Nc5
    { from: '4-5', to: '3-4' }, { from: '3-5', to: '4-4' }, // exf4 gxf4
    { from: '5-6', to: '4-6' }, { from: '0-7', to: '1-5' }, // gxf4 Nh5
    { from: '3-6', to: '1-5' }, { from: '3-5', to: '5-1' }, // Nxh5 Qf5
    { from: '5-3', to: '4-3' }, { from: '5-1', to: '5-3' }, // d4 Nd3
    { from: '6-2', to: '6-1' }, { from: '5-3', to: '6-5' }, // Qc2 Nxf4
    { from: '6-1', to: '6-3' }, { from: '6-5', to: '5-4' }, // Qd3 Qe5
    { from: '4-6', to: '3-4' }, { from: '0-5', to: '7-5' }, // Bxe5+ Rxf1
    { from: '3-7', to: '2-7' }, // continues - Black eventually wins
  ],
  // Game 11: Ruy Lopez - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '7-5', to: '3-1' }, { from: '1-0', to: '2-0' }, // Bb5 a6
    { from: '3-1', to: '4-0' }, { from: '0-6', to: '2-5' }, // Ba4 Nf6
    { from: '7-4', to: '7-6' }, { from: '0-5', to: '3-4' }, // O-O Be7
    { from: '7-7', to: '7-4' }, { from: '1-1', to: '3-1' }, // Re1 b5
    { from: '4-0', to: '5-1' }, { from: '1-3', to: '2-3' }, // Bb3 d6
    { from: '6-2', to: '5-2' }, { from: '0-4', to: '0-6' }, // c3 O-O
    { from: '6-7', to: '5-7' }, { from: '0-1', to: '1-1' }, // h3 Nb8
    { from: '6-3', to: '4-3' }, { from: '1-1', to: '2-3' }, // d4 Nbd7
    { from: '5-2', to: '4-2' }, { from: '1-2', to: '2-2' }, // c4 c6
    { from: '4-2', to: '3-1' }, { from: '2-0', to: '3-1' }, // cxb5 axb5
    { from: '7-1', to: '5-2' }, { from: '0-2', to: '1-1' }, // Nc3 Bb7
    { from: '7-2', to: '4-5' }, { from: '3-1', to: '4-1' }, // Bg5 b4
    { from: '5-2', to: '7-1' }, { from: '2-5', to: '4-4' }, // Nb1 Nxe4
    { from: '4-5', to: '3-4' }, { from: '0-3', to: '3-4' }, // Bxe7 Qxe7
    { from: '7-4', to: '4-4' }, { from: '2-2', to: '3-2' }, // Rxe4 c5
    { from: '7-4', to: '7-4' }, { from: '3-2', to: '4-3' }, // Re1 cxd4
    { from: '7-1', to: '5-3' }, { from: '3-4', to: '4-3' }, // Nxd4 exd4
    { from: '5-3', to: '3-4' }, { from: '0-3', to: '4-6' }, // Nd5+ Qg5
    { from: '5-5', to: '5-5' }, { from: '2-3', to: '4-2' }, // Nf3 Nc5
    { from: '5-1', to: '4-2' }, { from: '2-3', to: '3-3' }, // Bc4 d5
    { from: '7-5', to: '7-5' }, { from: '3-4', to: '4-3' }, // Bf1 e4
    { from: '5-5', to: '4-4' }, { from: '3-7', to: '4-7' }, // Ne5 h5
    { from: '5-6', to: '4-6' }, { from: '3-3', to: '4-3' }, // g4 d4
    { from: '4-2', to: '3-3' }, { from: '4-7', to: '5-6' }, // Bc4 h4
    { from: '4-4', to: '5-7' }, { from: '1-1', to: '4-4' }, // Ng6 Bxe4
    { from: '7-4', to: '4-4' }, { from: '4-6', to: '4-4' }, // Rxe4 Qxe4
    { from: '5-3', to: '4-4' }, { from: '0-7', to: '4-4' }, // Qxd3 Rxe4
    { from: '5-7', to: '4-4' }, { from: '0-0', to: '1-3' }, // Nxe4 Rd8
    { from: '6-0', to: '5-0' }, { from: '4-1', to: '5-1' }, // a3 bxa3
    { from: '7-0', to: '5-0' }, { from: '1-3', to: '6-3' }, // Rxa3 Rb4
    { from: '5-0', to: '5-0' }, { from: '5-1', to: '6-1' }, // Ra2 Kf6
    { from: '7-4', to: '7-5' }, { from: '6-3', to: '5-3' }, // Kf1 Ke5
    { from: '6-4', to: '5-4' }, { from: '5-3', to: '4-3' }, // Ke2 f5
    { from: '7-5', to: '6-3' }, { from: '4-3', to: '3-3' }, // Kd3 Ke5
    { from: '4-4', to: '5-3' }, { from: '5-1', to: '3-1' }, // Ne3 Rb1
    { from: '7-4', to: '7-4' }, // continues - Black eventually wins
  ],
  // Game 12: Caro-Kann - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-2', to: '2-2' }, // e4 c6
    { from: '6-3', to: '4-3' }, { from: '1-3', to: '3-3' }, // d4 d5
    { from: '7-1', to: '5-2' }, { from: '3-3', to: '4-4' }, // Nc3 dxe4
    { from: '5-2', to: '4-4' }, { from: '0-2', to: '3-5' }, // Nxe4 Bf5
    { from: '4-4', to: '3-6' }, { from: '3-5', to: '2-6' }, // Ng3 Bg6
    { from: '6-7', to: '4-7' }, { from: '1-7', to: '2-7' }, // h4 h6
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '1-3' }, // Nf3 Nd7
    { from: '4-7', to: '3-7' }, { from: '2-6', to: '1-7' }, // h5 Bh7
    { from: '7-5', to: '5-3' }, { from: '1-7', to: '5-3' }, // Bd3 Bxd3
    { from: '7-3', to: '5-3' }, { from: '1-4', to: '2-4' }, // Qxd3 e6
    { from: '7-2', to: '5-4' }, { from: '0-6', to: '2-5' }, // Bf4 Ngf6
    { from: '7-4', to: '7-2' }, { from: '0-5', to: '3-4' }, // O-O-O Be7
    { from: '3-6', to: '4-4' }, { from: '0-3', to: '4-0' }, // Ne4 Qa5
    { from: '7-4', to: '7-1' }, { from: '0-4', to: '0-6' }, // Kb1 O-O
    { from: '6-6', to: '4-6' }, { from: '2-5', to: '4-6' }, // g4 Nxg4
    { from: '7-7', to: '1-7' }, { from: '1-5', to: '3-5' }, // Rhg1 f5
    { from: '4-4', to: '2-3' }, { from: '3-4', to: '2-3' }, // Nd6 Bxd6
    { from: '5-4', to: '2-3' }, { from: '0-7', to: '2-5' }, // Bxd6 Rf6
    { from: '7-3', to: '1-6' }, { from: '2-6', to: '4-5' }, // Rxg4 Rxg6
    { from: '4-5', to: '3-5' }, { from: '0-6', to: '1-3' }, // fxg5 Kd8
    { from: '5-3', to: '4-4' }, { from: '2-2', to: '3-2' }, // Qe4 c5
    { from: '3-5', to: '2-7' }, { from: '1-3', to: '2-2' }, // gxh6 Kc7
    { from: '4-4', to: '2-4' }, { from: '0-0', to: '2-5' }, // Qxe6 Raf8
    { from: '2-3', to: '6-7' }, // Bxf8 - White wins
  ],
  // Game 13: Scandinavian Defense - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-3', to: '3-3' }, // e4 d5
    { from: '4-4', to: '3-3' }, { from: '0-3', to: '3-3' }, // exd5 Qxd5
    { from: '7-1', to: '5-2' }, { from: '3-3', to: '4-0' }, // Nc3 Qa5
    { from: '6-3', to: '4-3' }, { from: '1-2', to: '2-2' }, // d4 c6
    { from: '7-6', to: '5-5' }, { from: '0-2', to: '3-5' }, // Nf3 Bf5
    { from: '7-5', to: '4-2' }, { from: '1-4', to: '2-4' }, // Bc4 e6
    { from: '7-4', to: '7-6' }, { from: '0-1', to: '1-3' }, // O-O Nd7
    { from: '7-7', to: '7-4' }, { from: '0-6', to: '2-5' }, // Re1 Ngf6
    { from: '5-5', to: '3-4' }, { from: '0-5', to: '4-1' }, // Ne5 Bb4
    { from: '7-2', to: '6-3' }, { from: '2-5', to: '3-4' }, // Bd2 Nxe5
    { from: '7-4', to: '3-4' }, { from: '4-0', to: '4-2' }, // Rxe5 Qc7
    { from: '7-2', to: '5-4' }, { from: '4-1', to: '2-3' }, // Bf4 Bd6
    { from: '3-4', to: '7-4' }, { from: '2-3', to: '5-4' }, // Re1 Bxf4
    { from: '6-6', to: '5-6' }, { from: '0-4', to: '0-2' }, // g3 O-O-O
    { from: '4-2', to: '5-0' }, { from: '1-1', to: '2-1' }, // Ba6 bxa6
    { from: '5-5', to: '2-2' }, { from: '4-2', to: '2-2' }, // Qxc6 Qxc6
    { from: '4-3', to: '3-3' }, { from: '2-4', to: '3-4' }, // d5 exd5
    { from: '7-4', to: '4-4' }, { from: '0-7', to: '1-3' }, // Re7 Rd7
    { from: '4-4', to: '1-3' }, { from: '2-2', to: '1-3' }, // Rxd7 Qxd7
    { from: '5-2', to: '3-3' }, { from: '2-5', to: '3-3' }, // Nxd5 Nxd5
    { from: '6-2', to: '4-2' }, { from: '3-3', to: '4-2' }, // c4 Nc7
    { from: '7-0', to: '7-3' }, { from: '0-2', to: '3-4' }, // Rd1 Be4
    { from: '5-1', to: '4-2' }, { from: '4-2', to: '6-3' }, // Nb6+ axb6
    { from: '7-3', to: '2-3' }, { from: '1-3', to: '2-3' }, // Rxd6 Qxd6
    { from: '4-2', to: '3-2' }, { from: '2-3', to: '4-2' }, // c5 Qxc5
    { from: '6-1', to: '5-1' }, { from: '4-2', to: '6-1' }, // b4 Qxb4
    { from: '6-0', to: '5-0' }, { from: '6-1', to: '5-3' }, // a3 Qd4
    { from: '7-2', to: '7-2' }, { from: '5-3', to: '6-3' }, // Rc1 Qd2
    { from: '7-2', to: '7-4' }, { from: '6-3', to: '7-4' }, // Rc4 Qe1#
  ],
  // Game 14: Reti Opening - Black wins
  [
    { from: '7-6', to: '5-5' }, { from: '1-3', to: '3-3' }, // Nf3 d5
    { from: '6-6', to: '5-6' }, { from: '1-2', to: '2-2' }, // g3 c6
    { from: '7-5', to: '6-6' }, { from: '0-2', to: '3-5' }, // Bg2 Bf5
    { from: '7-4', to: '7-6' }, { from: '1-4', to: '2-4' }, // O-O e6
    { from: '6-3', to: '5-3' }, { from: '1-7', to: '2-7' }, // d3 h6
    { from: '7-1', to: '5-3' }, { from: '0-6', to: '2-5' }, // Nbd2 Nf6
    { from: '7-3', to: '7-4' }, { from: '3-5', to: '2-7' }, // Qe1 Bh7
    { from: '6-4', to: '4-4' }, { from: '3-3', to: '4-4' }, // e4 dxe4
    { from: '5-3', to: '4-4' }, { from: '2-5', to: '4-4' }, // Nxe4 Nxe4
    { from: '5-3', to: '4-4' }, { from: '2-7', to: '4-4' }, // dxe4 Bxe4
    { from: '7-4', to: '5-4' }, { from: '0-1', to: '1-3' }, // Qxe4 Nd7
    { from: '7-2', to: '5-4' }, { from: '0-4', to: '0-6' }, // Bf4 O-O
    { from: '6-2', to: '4-2' }, { from: '0-7', to: '1-3' }, // c4 Rfd8
    { from: '6-1', to: '5-1' }, { from: '1-0', to: '2-0' }, // b3 a5
    { from: '7-0', to: '1-3' }, { from: '1-3', to: '7-3' }, // Rxd8+ Rxd8
    { from: '7-7', to: '7-3' }, { from: '2-5', to: '4-4' }, // Rd1 Rxd1+
    { from: '5-4', to: '7-3' }, { from: '0-5', to: '4-2' }, // Qxd1 Ne4
    { from: '5-5', to: '4-4' }, { from: '2-2', to: '3-2' }, // Nxe4+ Nc5
    { from: '4-2', to: '3-3' }, { from: '0-4', to: '1-4' }, // Bc4 f6
    { from: '6-7', to: '4-7' }, { from: '1-6', to: '3-6' }, // h4 g5
    { from: '4-7', to: '3-6' }, { from: '2-7', to: '3-6' }, // hxg5 hxg5
    { from: '5-6', to: '4-6' }, { from: '1-4', to: '2-3' }, // g4 Kd6
    { from: '7-4', to: '6-5' }, { from: '4-4', to: '3-4' }, // Kf3 Nd7
    { from: '6-5', to: '5-4' }, { from: '1-3', to: '2-2' }, // Ke4 Nc5+
    { from: '5-4', to: '4-5' }, { from: '2-3', to: '3-4' }, // Kf5 Ke7
    { from: '4-5', to: '3-6' }, { from: '3-4', to: '4-5' }, // Kg6 Ne6
    { from: '3-3', to: '4-5' }, { from: '1-4', to: '4-5' }, // Bxe6 Kxe6
    { from: '3-6', to: '4-6' }, { from: '4-4', to: '5-4' }, // Kxg5 e4
    { from: '4-6', to: '5-5' }, { from: '5-4', to: '6-4' }, // Kg4 Kd4
    { from: '4-4', to: '5-4' }, { from: '6-4', to: '7-4' }, // g5 e3
    { from: '5-5', to: '6-4' }, { from: '7-4', to: '7-5' }, // Kf3 Kc3
    { from: '5-4', to: '4-4' }, { from: '7-5', to: '6-5' }, // g6 e2
    { from: '6-4', to: '7-4' }, { from: '6-5', to: '5-5' }, // Kxe2 Kb2
    { from: '4-4', to: '3-4' }, { from: '5-5', to: '6-0' }, // g7 Kxa2
    { from: '3-4', to: '2-4' }, // g8=Q - then Black eventually wins
  ],
  // Game 15: Scotch Game - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '6-3', to: '4-3' }, { from: '3-4', to: '4-3' }, // d4 exd4
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' }, // Nxd4 Nf6
    { from: '7-1', to: '5-2' }, { from: '0-5', to: '4-1' }, // Nc3 Bb4
    { from: '4-3', to: '2-2' }, { from: '1-1', to: '2-2' }, // Nxc6 bxc6
    { from: '7-5', to: '5-3' }, { from: '1-3', to: '3-3' }, // Bd3 d5
    { from: '4-4', to: '3-3' }, { from: '2-2', to: '3-3' }, // exd5 cxd5
    { from: '7-4', to: '7-6' }, { from: '0-4', to: '0-6' }, // O-O O-O
    { from: '7-2', to: '4-5' }, { from: '1-2', to: '2-2' }, // Bg5 c6
    { from: '7-3', to: '5-5' }, { from: '1-7', to: '2-7' }, // Qf3 h6
    { from: '4-5', to: '2-5' }, { from: '0-3', to: '2-5' }, // Bxf6 Qxf6
    { from: '5-5', to: '2-5' }, { from: '1-6', to: '2-5' }, // Qxf6 gxf6
    { from: '5-2', to: '5-4' }, { from: '4-1', to: '2-3' }, // Ne2 Bd6
    { from: '5-4', to: '4-3' }, { from: '0-2', to: '1-3' }, // Nd4 Bd7
    { from: '4-3', to: '2-5' }, { from: '1-3', to: '2-5' }, // Nf5 Bxf5
    { from: '5-3', to: '2-5' }, { from: '0-7', to: '0-4' }, // Bxf5 Rfe8
    { from: '7-7', to: '7-4' }, { from: '1-6', to: '2-6' }, // Rfe1 Kg7
    { from: '6-2', to: '5-2' }, { from: '0-4', to: '3-4' }, // c3 Re5
    { from: '2-5', to: '5-7' }, { from: '0-0', to: '0-4' }, // Bh3 Rae8
    { from: '7-4', to: '7-5' }, { from: '2-2', to: '3-2' }, // Kf1 c5
    { from: '7-0', to: '7-3' }, { from: '3-3', to: '4-3' }, // Rad1 d4
    { from: '5-2', to: '4-3' }, { from: '3-2', to: '4-3' }, // cxd4 cxd4
    { from: '7-3', to: '3-4' }, { from: '2-5', to: '3-4' }, // Rxe5 fxe5
    { from: '7-4', to: '6-4' }, { from: '0-4', to: '1-1' }, // Ke2 Rb8
    { from: '7-3', to: '6-3' }, { from: '2-6', to: '3-5' }, // Rd2 Kf6
    { from: '5-6', to: '5-6' }, { from: '4-1', to: '3-1' }, // g3 Bb4
    { from: '6-3', to: '6-2' }, { from: '3-4', to: '4-4' }, // Rc2 e4
    { from: '6-2', to: '6-4' }, { from: '4-3', to: '5-3' }, // Rc4 d3+
    { from: '6-4', to: '5-4' }, { from: '3-1', to: '5-0' }, // Ke3 Ba5
    { from: '6-4', to: '4-4' }, { from: '5-0', to: '4-1' }, // Rxe4 Bb6+
    { from: '5-4', to: '5-3' }, { from: '1-1', to: '1-3' }, // Kxd3 Rd8+
    { from: '5-3', to: '5-2' }, { from: '4-1', to: '6-5' }, // Kc2 Bxf2
    { from: '5-7', to: '6-6' }, { from: '1-3', to: '4-2' }, // Bg2 Rc8+
    { from: '5-2', to: '5-3' }, { from: '4-2', to: '4-2' }, // Kd3 Rc1
    { from: '4-4', to: '4-4' }, { from: '6-5', to: '5-6' }, // Re2 Bg1
    { from: '6-7', to: '4-7' }, { from: '4-2', to: '4-4' }, // h4 Rc5
    { from: '6-6', to: '5-5' }, { from: '4-4', to: '4-1' }, // Bf3 Rb5
    { from: '5-6', to: '4-6' }, { from: '4-1', to: '5-1' }, // g4 Rb4
    { from: '5-1', to: '5-1' }, { from: '5-1', to: '5-3' }, // b3 Rd4+
    { from: '5-3', to: '5-2' }, { from: '5-3', to: '5-4' }, // Kc3 Rf4
    { from: '5-5', to: '4-4' }, { from: '5-4', to: '4-6' }, // Be4 Rxg4
    { from: '4-4', to: '1-7' }, { from: '4-6', to: '4-7' }, // Bxh7 Rxh4
    { from: '5-2', to: '5-3' }, { from: '4-7', to: '1-7' }, // Kd3 Rxh7
    { from: '5-3', to: '5-4' }, { from: '1-7', to: '1-4' }, // Kc4 Rh5
    { from: '6-0', to: '5-0' }, { from: '1-4', to: '3-4' }, // a4 Re5
    { from: '4-4', to: '3-4' }, { from: '3-5', to: '4-4' }, // Rxe5 Kxe5
    { from: '5-1', to: '4-1' }, { from: '1-5', to: '3-5' }, // b4 f5
    { from: '5-0', to: '4-0' }, { from: '3-5', to: '4-5' }, // a5 f4
    { from: '4-1', to: '3-1' }, { from: '4-5', to: '5-5' }, // b5 f3
    { from: '3-1', to: '2-1' }, { from: '5-5', to: '6-5' }, // b6 f2
    { from: '2-1', to: '1-1' }, { from: '6-5', to: '7-5' }, // b7 f1=Q+
    { from: '5-4', to: '4-1' }, { from: '7-5', to: '7-4' }, // Kb4 Qe1+
    { from: '4-1', to: '3-1' }, { from: '7-4', to: '7-4' }, // Kb5 Qe5+
    { from: '3-1', to: '2-0' }, { from: '7-4', to: '1-1' }, // Ka6 Qb8
    { from: '2-0', to: '1-1' }, // continues - Black wins
  ],
  // Game 16: Italian Game Trap - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-5', to: '4-2' }, { from: '0-1', to: '2-2' }, // Bc4 Nc6
    { from: '7-3', to: '3-7' }, { from: '1-6', to: '2-6' }, // Qh5 g6
    { from: '3-7', to: '5-5' }, { from: '0-6', to: '2-5' }, // Qf3 Nf6
    { from: '7-6', to: '5-4' }, { from: '0-5', to: '1-6' }, // Ne2 Bg7
    { from: '6-3', to: '5-3' }, { from: '1-3', to: '2-3' }, // d3 d6
    { from: '6-7', to: '5-7' }, { from: '0-4', to: '0-6' }, // h3 O-O
    { from: '7-2', to: '4-5' }, { from: '1-7', to: '2-7' }, // Bg5 h6
    { from: '4-5', to: '5-7' }, { from: '2-6', to: '3-6' }, // Bh4 g5
    { from: '5-7', to: '4-6' }, { from: '2-2', to: '4-0' }, // Bg3 Na5
    { from: '4-2', to: '5-1' }, { from: '4-0', to: '5-1' }, // Bb3 Nxb3
    { from: '6-0', to: '5-1' }, { from: '0-2', to: '3-5' }, // axb3 Be6
    { from: '7-1', to: '5-2' }, { from: '2-5', to: '1-3' }, // Nbc3 Nd7
    { from: '5-7', to: '4-7' }, { from: '1-5', to: '3-5' }, // h4 f5
    { from: '4-4', to: '3-5' }, { from: '3-5', to: '3-5' }, // exf5 Bxf5
    { from: '4-7', to: '3-6' }, { from: '0-3', to: '4-6' }, // hxg5 Qxg5
    { from: '5-5', to: '5-3' }, { from: '3-5', to: '1-1' }, // Qd5+ Kh8
    { from: '5-3', to: '6-1' }, { from: '3-6', to: '4-6' }, // Qxb7 Nc5
    { from: '6-1', to: '5-2' }, { from: '0-0', to: '4-2' }, // Qxc7 Rac8
    { from: '5-2', to: '2-3' }, { from: '0-7', to: '1-3' }, // Qxd6 Rfd8
    { from: '2-3', to: '5-0' }, { from: '4-2', to: '5-2' }, // Qa3 b5
    { from: '4-6', to: '4-5' }, { from: '1-1', to: '5-3' }, // Bxe5 Bxd3
    { from: '5-0', to: '7-0' }, { from: '4-2', to: '6-2' }, // Qxa7 Nxb3
    { from: '7-4', to: '7-3' }, { from: '6-2', to: '7-0' }, // Kd1 Nxa1
    { from: '6-5', to: '4-5' }, { from: '1-6', to: '3-4' }, // f4 Qe3
    { from: '4-5', to: '3-4' }, { from: '5-3', to: '5-4' }, // Bxg7+ Kxg7
    { from: '7-0', to: '4-6' }, { from: '1-3', to: '5-3' }, // Qa5 Qd3+
    { from: '5-4', to: '6-4' }, { from: '0-7', to: '7-5' }, // Ke1 Rf8+
    { from: '5-2', to: '7-5' }, { from: '4-6', to: '5-4' }, // Nf1 Qxe2
    { from: '7-4', to: '7-7' }, { from: '5-4', to: '3-7' }, // Kh2 Qh5+
    { from: '7-7', to: '7-4' }, { from: '3-7', to: '5-3' }, // Kg1 Qxd1+
    { from: '7-4', to: '7-7' }, { from: '5-3', to: '3-7' }, // Kh2 Qh5+
    { from: '7-7', to: '7-4' }, { from: '3-7', to: '5-3' }, // Kg1 Qd1+
    { from: '7-4', to: '7-7' }, { from: '5-3', to: '7-0' }, // Kh2 Qxa1
    { from: '7-7', to: '6-7' }, { from: '7-0', to: '6-1' }, // g3 Qxb2
    { from: '6-7', to: '5-6' }, { from: '0-5', to: '6-6' }, // hxg7+ Qxg7
    { from: '4-6', to: '3-4' }, { from: '0-7', to: '2-5' }, // Bxe5 Rf6
    { from: '5-4', to: '4-6' }, { from: '2-5', to: '2-7' }, // g4 Rh6+
    { from: '4-6', to: '5-6' }, { from: '2-7', to: '0-7' }, // Kg2 Qf3+
    { from: '5-6', to: '5-4' }, { from: '2-7', to: '0-7' }, // Kg1 Rxh1#
  ],
  // Game 17: Evans Gambit - White wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '7-5', to: '4-2' }, { from: '0-5', to: '2-3' }, // Bc4 Bc5
    { from: '6-1', to: '4-1' }, { from: '2-3', to: '4-1' }, // b4 Bxb4
    { from: '6-2', to: '5-2' }, { from: '4-1', to: '5-0' }, // c3 Ba5
    { from: '6-3', to: '4-3' }, { from: '3-4', to: '4-3' }, // d4 exd4
    { from: '7-4', to: '7-6' }, { from: '4-3', to: '5-3' }, // O-O d3
    { from: '7-3', to: '5-1' }, { from: '0-3', to: '2-5' }, // Qb3 Qf6
    { from: '4-4', to: '3-4' }, { from: '0-6', to: '1-4' }, // e5 Qg6
    { from: '7-7', to: '7-4' }, { from: '1-4', to: '0-6' }, // Re1 Nge7
    { from: '7-2', to: '5-0' }, { from: '1-1', to: '3-1' }, // Ba3 b5
    { from: '5-1', to: '3-1' }, { from: '0-7', to: '1-1' }, // Qxb5 Rb8
    { from: '3-1', to: '4-0' }, { from: '5-0', to: '4-1' }, // Qa4 Bb6
    { from: '7-1', to: '5-3' }, { from: '0-2', to: '1-1' }, // Nbd2 Bb7
    { from: '5-3', to: '4-4' }, { from: '2-5', to: '3-5' }, // Ne4 Qf5
    { from: '5-0', to: '0-6' }, { from: '0-6', to: '0-7' }, // Bxd3 Nxe7
    { from: '4-0', to: '4-0' }, { from: '4-1', to: '5-1' }, // Qa4 Bb6
    { from: '4-4', to: '2-5' }, { from: '1-6', to: '2-5' }, // Nf6+ gxf6
    { from: '3-4', to: '2-5' }, { from: '0-7', to: '1-6' }, // exf6 Rg8
    { from: '2-5', to: '0-6' }, { from: '2-2', to: '0-6' }, // fxe7 Nxe7
    { from: '5-0', to: '0-6' }, { from: '0-3', to: '5-4' }, // Bxe7 Qe3
    { from: '4-6', to: '1-6' }, { from: '1-6', to: '1-6' }, // Qg6 Qxg2#
  ],
  // Game 18: Sicilian Dragon - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-2', to: '3-2' }, // e4 c5
    { from: '7-6', to: '5-5' }, { from: '1-3', to: '2-3' }, // Nf3 d6
    { from: '6-3', to: '4-3' }, { from: '3-2', to: '4-3' }, // d4 cxd4
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' }, // Nxd4 Nf6
    { from: '7-1', to: '5-2' }, { from: '1-6', to: '2-6' }, // Nc3 g6
    { from: '7-2', to: '4-5' }, { from: '0-5', to: '1-6' }, // Be3 Bg7
    { from: '6-5', to: '5-5' }, { from: '0-4', to: '0-6' }, // f3 O-O
    { from: '7-3', to: '6-3' }, { from: '0-1', to: '2-2' }, // Qd2 Nc6
    { from: '7-4', to: '7-2' }, { from: '1-3', to: '3-3' }, // O-O-O d5
    { from: '4-4', to: '3-3' }, { from: '2-5', to: '3-3' }, // exd5 Nxd5
    { from: '4-3', to: '2-2' }, { from: '1-1', to: '2-2' }, // Nxc6 bxc6
    { from: '7-5', to: '4-3' }, { from: '1-4', to: '3-4' }, // Bd4 e5
    { from: '4-3', to: '4-2' }, { from: '0-7', to: '0-4' }, // Bc5 Re8
    { from: '5-2', to: '3-3' }, { from: '2-2', to: '3-3' }, // Nxd5 cxd5
    { from: '4-2', to: '3-1' }, { from: '0-2', to: '1-3' }, // Bb5 Bd7
    { from: '3-1', to: '1-3' }, { from: '0-3', to: '1-3' }, // Bxd7 Qxd7
    { from: '6-3', to: '3-3' }, { from: '3-4', to: '4-4' }, // Qxd5 Qb7
    { from: '4-2', to: '2-3' }, { from: '0-0', to: '1-3' }, // Bd6 Rad8
    { from: '2-3', to: '4-2' }, { from: '0-4', to: '0-3' }, // Bc7 Rxd1+
    { from: '6-3', to: '0-3' }, { from: '1-3', to: '4-2' }, // Qxd1 Qxc7
    { from: '0-3', to: '3-3' }, { from: '4-2', to: '4-1' }, // Qd5 Rd8
    { from: '3-3', to: '4-4' }, { from: '4-4', to: '5-4' }, // Qe4 f5
    { from: '4-4', to: '4-5' }, { from: '4-4', to: '5-4' }, // Qe3 e4
    { from: '5-5', to: '4-5' }, { from: '4-1', to: '5-1' }, // f4 Qb7
    { from: '6-2', to: '5-2' }, { from: '4-1', to: '0-3' }, // c3 Rd3
    { from: '4-5', to: '5-2' }, { from: '4-4', to: '5-4' }, // Qc5 e4
    { from: '7-7', to: '7-4' }, { from: '5-4', to: '4-4' }, // Re1 Qxe4
    { from: '7-4', to: '4-4' }, { from: '5-1', to: '4-4' }, // Rxe4 Qxe4
    { from: '7-4', to: '7-1' }, { from: '4-4', to: '4-0' }, // Kb1 Qa4
    { from: '7-1', to: '5-0' }, { from: '6-1', to: '1-0' }, // Ka1 Qxb2#
  ],
  // Game 19: Same as Game 11 but with different outcome
  [
    { from: '6-4', to: '4-4' }, { from: '1-4', to: '3-4' }, // e4 e5
    { from: '7-6', to: '5-5' }, { from: '0-1', to: '2-2' }, // Nf3 Nc6
    { from: '6-3', to: '4-3' }, { from: '3-4', to: '4-3' }, // d4 exd4
    { from: '5-5', to: '4-3' }, { from: '0-6', to: '2-5' }, // Nxd4 Nf6
    { from: '7-1', to: '5-2' }, { from: '0-5', to: '4-1' }, // Nc3 Bb4
    { from: '4-3', to: '2-2' }, { from: '1-1', to: '2-2' }, // Nxc6 bxc6
    { from: '7-5', to: '5-3' }, { from: '1-3', to: '3-3' }, // Bd3 d5
    { from: '4-4', to: '3-3' }, { from: '2-2', to: '3-3' }, // exd5 cxd5
    { from: '7-4', to: '7-6' }, { from: '0-4', to: '0-6' }, // O-O O-O
    { from: '7-2', to: '4-5' }, { from: '1-2', to: '2-2' }, // Bg5 c6
    { from: '7-3', to: '5-5' }, { from: '1-7', to: '2-7' }, // Qf3 h6
    { from: '4-5', to: '2-5' }, { from: '0-3', to: '2-5' }, // Bxf6 Qxf6
    { from: '5-5', to: '2-5' }, { from: '1-6', to: '2-5' }, // Qxf6 gxf6
    { from: '5-2', to: '5-4' }, { from: '4-1', to: '2-3' }, // Ne2 Bd6
    { from: '5-4', to: '4-3' }, { from: '0-2', to: '1-3' }, // Nd4 Bd7
    { from: '4-3', to: '2-5' }, { from: '1-3', to: '2-5' }, // Nf5 Bxf5
    { from: '5-3', to: '2-5' }, { from: '0-7', to: '0-4' }, // Bxf5 Rfe8
    { from: '7-7', to: '7-4' }, { from: '1-6', to: '2-6' }, // Rfe1 Kg7
    { from: '6-2', to: '5-2' }, { from: '0-4', to: '3-4' }, // c3 Re5
    { from: '2-5', to: '5-7' }, { from: '0-0', to: '0-4' }, // Bh3 Rae8
    { from: '7-4', to: '7-5' }, { from: '2-2', to: '3-2' }, // Kf1 c5
    { from: '7-0', to: '7-3' }, { from: '3-3', to: '4-3' }, // Rad1 d4
    { from: '5-2', to: '4-3' }, { from: '3-2', to: '4-3' }, // cxd4 cxd4
    { from: '7-3', to: '3-4' }, { from: '2-5', to: '3-4' }, // Rxe5 fxe5
    { from: '7-4', to: '6-4' }, { from: '0-4', to: '1-1' }, // Ke2 Rb8
    { from: '7-3', to: '6-3' }, { from: '2-6', to: '3-5' }, // Rd2 Kf6
    { from: '5-6', to: '5-6' }, { from: '4-1', to: '3-1' }, // g3 Bb4
    { from: '6-3', to: '6-2' }, { from: '3-4', to: '4-4' }, // Rc2 e4
    { from: '6-2', to: '6-4' }, { from: '4-3', to: '5-3' }, // Rc4 d3+
    { from: '6-4', to: '5-4' }, { from: '3-1', to: '5-0' }, // Ke3 Ba5
    { from: '6-4', to: '4-4' }, { from: '5-0', to: '4-1' }, // Rxe4 Bb6+
    { from: '5-4', to: '5-3' }, { from: '1-1', to: '1-3' }, // Kxd3 Rd8+
    { from: '5-3', to: '5-2' }, { from: '4-1', to: '6-5' }, // Kc2 Bxf2
    { from: '5-7', to: '6-6' }, { from: '1-3', to: '4-2' }, // Bg2 Rc8+
    { from: '5-2', to: '5-3' }, { from: '4-2', to: '4-2' }, // Kd3 Rc1
    { from: '4-4', to: '4-4' }, { from: '6-5', to: '5-6' }, // Re2 Bg1
    { from: '6-7', to: '4-7' }, { from: '4-2', to: '4-4' }, // h4 Rc5
    { from: '6-6', to: '5-5' }, { from: '4-4', to: '4-1' }, // Bf3 Rb5
    { from: '5-6', to: '4-6' }, { from: '4-1', to: '5-1' }, // g4 Rb4
    { from: '5-1', to: '5-1' }, { from: '5-1', to: '5-3' }, // b3 Rd4+
    { from: '5-3', to: '5-2' }, { from: '5-3', to: '5-4' }, // Kc3 Rf4
    { from: '5-5', to: '4-4' }, { from: '5-4', to: '4-6' }, // Be4 Rxg4
    { from: '4-4', to: '1-7' }, { from: '4-6', to: '4-7' }, // Bxh7 Rxh4
    { from: '5-2', to: '5-3' }, { from: '4-7', to: '1-7' }, // Kd3 Rxh7
    { from: '5-3', to: '5-4' }, { from: '1-7', to: '1-4' }, // Kc4 Rh5
    { from: '6-0', to: '5-0' }, { from: '1-4', to: '3-4' }, // a4 Re5
    { from: '4-4', to: '3-4' }, { from: '3-5', to: '4-4' }, // Rxe5 Kxe5
    { from: '5-1', to: '4-1' }, { from: '1-5', to: '3-5' }, // b4 f5
    { from: '5-0', to: '4-0' }, { from: '3-5', to: '4-5' }, // a5 f4
    { from: '4-1', to: '3-1' }, { from: '4-5', to: '5-5' }, // b5 f3
    { from: '3-1', to: '2-1' }, { from: '5-5', to: '6-5' }, // b6 f2
    { from: '2-1', to: '1-1' }, { from: '6-5', to: '7-5' }, // b7 f1=Q+
    { from: '5-4', to: '4-1' }, { from: '7-5', to: '7-4' }, // Kb4 Qe1+
    { from: '4-1', to: '3-1' }, { from: '7-4', to: '7-4' }, // Kb5 Qe5+
    { from: '3-1', to: '2-0' }, { from: '7-4', to: '1-1' }, // Ka6 Qb8
    { from: '2-0', to: '1-1' }, { from: '2-3', to: '3-3' }, // Kb7 Kd6
    { from: '4-0', to: '3-0' }, { from: '7-4', to: '4-2' }, // a6 Qc7+
    { from: '3-1', to: '3-1' }, { from: '4-2', to: '4-2' }, // Kb5 Qc5+
    { from: '3-1', to: '4-0' }, { from: '4-2', to: '1-1' }, // Ka4 Qb6
    { from: '3-0', to: '2-0' }, { from: '1-1', to: '2-0' }, // a7 Qxa7+
    { from: '4-0', to: '3-1' }, { from: '2-0', to: '1-1' }, // Kb5 Qb6+
    { from: '3-1', to: '4-2' }, { from: '1-1', to: '4-2' }, // Kc4 Qc5+
    { from: '4-2', to: '5-3' }, { from: '4-2', to: '5-4' }, // Kd3 Qe3+
    { from: '5-3', to: '5-2' }, { from: '5-4', to: '5-4' }, // Kc2 Qe2+
    { from: '5-2', to: '4-1' }, { from: '5-4', to: '5-3' }, // Kb3 Qd3+
    { from: '4-1', to: '5-0' }, { from: '3-3', to: '4-2' }, // Ka4 Kc5
    { from: '1-1', to: '0-1' }, { from: '5-3', to: '4-2' }, // b8=Q Qc4+
    { from: '0-1', to: '4-1' }, { from: '4-2', to: '4-1' }, // Qb4+ Qxb4#
  ],
  // Game 20: Grob's Attack - Black wins
  [
    { from: '6-4', to: '4-4' }, { from: '1-6', to: '3-6' }, // e4 g5
    { from: '6-3', to: '4-3' }, { from: '1-7', to: '2-7' }, // d4 h6
    { from: '7-6', to: '5-5' }, { from: '1-3', to: '2-3' }, // Nf3 d6
    { from: '7-5', to: '4-2' }, { from: '1-4', to: '2-4' }, // Bc4 e6
    { from: '7-4', to: '7-6' }, { from: '0-6', to: '2-4' }, // O-O Ne7
    { from: '7-1', to: '5-2' }, { from: '2-4', to: '1-6' }, // Nc3 Ng6
    { from: '4-4', to: '3-4' }, { from: '3-6', to: '4-6' }, // e5 g4
    { from: '5-5', to: '7-4' }, { from: '2-3', to: '3-4' }, // Ne1 dxe5
    { from: '4-3', to: '3-4' }, { from: '0-3', to: '7-3' }, // dxe5 Qxd1
    { from: '7-4', to: '7-3' }, { from: '1-6', to: '3-4' }, // Nxd1 Nxe5
    { from: '4-2', to: '5-1' }, { from: '3-4', to: '5-3' }, // Bb3 Nd3
    { from: '7-2', to: '6-3' }, { from: '0-2', to: '1-3' }, // Bd2 Bd7
    { from: '7-3', to: '5-4' }, { from: '0-7', to: '2-7' }, // Nf2 Rh6
    { from: '5-4', to: '5-3' }, { from: '5-3', to: '7-5' }, // Nxd3 Nxf1
    { from: '7-4', to: '7-5' }, { from: '1-5', to: '3-5' }, // Kxf1 f5
    { from: '5-1', to: '3-3' }, { from: '2-4', to: '3-4' }, // Bxe6 exf5
    { from: '5-3', to: '4-4' }, { from: '1-3', to: '4-4' }, // Nxf5 Bxf5
    { from: '7-7', to: '7-4' }, { from: '0-4', to: '1-3' }, // Re1+ Kd8
    { from: '7-2', to: '1-6' }, { from: '2-7', to: '1-6' }, // Bg7 Rg6
    { from: '1-6', to: '0-5' }, { from: '1-6', to: '0-5' }, // Bf6+ Rxf6
    { from: '6-6', to: '0-5' }, { from: '0-5', to: '2-4' }, // gxf6 Be5
    { from: '0-5', to: '1-6' }, { from: '1-3', to: '2-4' }, // f7 Ke7
    { from: '1-6', to: '0-6' }, { from: '0-0', to: '0-6' }, // f8=Q Rxf8
    { from: '7-4', to: '2-4' }, { from: '2-4', to: '3-4' }, // Bxc6 Kxe6
    { from: '2-4', to: '2-2' }, { from: '1-1', to: '2-2' }, // Bxb7 bxc6
    { from: '7-7', to: '2-7' }, { from: '1-6', to: '2-5' }, // Rh7 Rf7
    { from: '7-4', to: '6-4' }, { from: '2-5', to: '3-6' }, // Ke2 Kf6
    { from: '6-6', to: '5-6' }, { from: '2-7', to: '1-7' }, // g3 h4
    { from: '5-6', to: '4-7' }, { from: '1-7', to: '0-7' }, // gxh4 f4
    { from: '6-4', to: '5-4' }, { from: '3-6', to: '4-5' }, // Ke3 Kg5
    { from: '4-7', to: '3-7' }, { from: '0-7', to: '1-7' }, // h5 g3
    { from: '6-7', to: '5-6' }, { from: '4-5', to: '5-7' }, // hxg3 Kh3
    { from: '7-7', to: '5-7' }, { from: '1-7', to: '2-7' }, // h3 h2
    { from: '5-7', to: '4-7' }, { from: '2-7', to: '3-7' }, // h4 h1=Q
    { from: '4-7', to: '3-6' }, { from: '5-7', to: '6-6' }, // h5 Kg4
    { from: '3-6', to: '2-6' }, { from: '3-7', to: '4-6' }, // h6 g3
    { from: '2-6', to: '1-6' }, { from: '4-6', to: '5-5' }, // h7 Rf5
    { from: '1-6', to: '0-6' }, { from: '5-5', to: '5-4' }, // h8=Q Rxe3+
    { from: '7-4', to: '7-5' }, { from: '5-4', to: '6-4' }, // Kf2 Re2+
    { from: '7-5', to: '7-4' }, { from: '6-6', to: '5-6' }, // Kf1 Kg3
    { from: '0-6', to: '5-6' }, { from: '6-4', to: '1-6' }, // Qh6+ Rg1#
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
