import { useState, useEffect } from "react";

export function useViewportHeight() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
}
