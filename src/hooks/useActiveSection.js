import { useEffect, useState } from 'react';

const SECTIONS = ['top-header', 'about', 'skills', 'project-contain', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return active;
}
