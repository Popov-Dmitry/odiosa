import { useEffect, useMemo, useState } from "react";

export const BREAKPOINTS = {
  DESKTOP: 1024
};

const useResponsive = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const isMobile = useMemo<boolean>(
    () => size.width < BREAKPOINTS.DESKTOP,
    [size.width]
  );
  const isDesktop = useMemo<boolean>(
    () => size.width >= BREAKPOINTS.DESKTOP,
    [size.width]
  );

  return {
    isMobile,
    isDesktop
  };
};

export default useResponsive;
