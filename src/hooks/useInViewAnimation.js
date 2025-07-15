import { useEffect, useRef, useState } from "react";

export function useInViewAnimation(animationClass = "animate__fadeInUp") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  return {
    ref,
    className: `animate__animated ${visible ? animationClass : ""}`,
  };
}
