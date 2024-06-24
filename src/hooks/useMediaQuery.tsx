import { useCallback, useEffect, useRef, useState } from "react";

const screens = {
  sm: "(max-width: 767px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

const useMediaQuery = (target: keyof typeof screens) => {
  const query = useRef(
    typeof window !== "undefined"
      ? window.matchMedia(screens[target])
      : undefined
  );
  const [matches, setMatches] = useState(query.current?.matches ?? false);

  const checkMediaQuery = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const innerQuery = query.current ?? window.matchMedia(screens[target]);
    innerQuery.addEventListener("change", checkMediaQuery);
    return () => {
      innerQuery.removeEventListener("change", checkMediaQuery);
    };
  }, [checkMediaQuery, target]);

  return matches;
};

export default useMediaQuery;
