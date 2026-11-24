import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already within viewport immediately on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isRevealed };
}

export default useScrollReveal;
