import { useEffect, useRef, useState } from "react";

export function useInViewAnimation(animationClass = "animate__fadeInUp") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    // If the user prefers reduced motion, mark as visible immediately with no animation
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return {
    ref,
    // Skip animation class entirely for reduced-motion users
    className: prefersReducedMotion
      ? ""
      : `animate__animated ${visible ? animationClass : ""}`,
  };
}
