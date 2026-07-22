import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  useEffect(() => {
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      // Connect Lenis to GSAP's ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time: number) => {
        try {
          lenis.raf(time * 1000);
        } catch (e) {
          // ignore
        }
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        try {
          gsap.ticker.remove(updateTicker);
          lenis.destroy();
        } catch (e) {
          // ignore
        }
      };
    } catch (err) {
      console.warn('Lenis scroll initialization skipped:', err);
    }
  }, []);
};
