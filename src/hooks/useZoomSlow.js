import { useState, useEffect, useRef } from "react";

export default function useZoomSlow(threshold = 0.5) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let prevVisible = false;

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;

      if (isVisible !== prevVisible) {
        setVisible(isVisible);
        prevVisible = isVisible;
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
