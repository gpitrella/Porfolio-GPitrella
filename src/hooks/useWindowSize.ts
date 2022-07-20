import { useState, useEffect } from "react";

interface window {
  width: number | undefined;
  heigth: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<window>();

  useEffect(()=>{
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[])

  return windowSize
};
