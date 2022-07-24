import { useContext, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { useWindowSize } from "./hooks/useWindowSize";
import NavBar from "./components/organisms/NavBar/NavBar";
import Icon from "./components/atoms/IconLogo/IconLogo";
import "./Portfolio.css";
import Body from "./components/templates/Body/Body";
import Footer from "./components/templates/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
// import Background from "./components/atoms/Background/Background";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const ctx = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const widthCondition = windowSize?.width === undefined ? 0 : windowSize.width;
  const logoHeight = 55;
  const logoWidth = 50;

  const navRefs = { aboutRef, workRef, experienceRef, contactRef };

  const theme = !ctx.dark ? "light" : "dark";

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => {
      clearTimeout();
    };
  }, []);

  const scrollIntoViewHandler = (targetRef: React.RefObject<HTMLElement>) => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="Portfolio" data-theme={theme}>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
              {/* <div className="background"><Background/></div> */}
              <NavBar
                width={widthCondition}
                theme={theme}
                navRefs={navRefs}
                scrollIntoView={scrollIntoViewHandler}
              />
              <div className="content">
                <Body theme={theme} navRefs={navRefs} />
                <Footer />
              </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            <Icon theme={theme} width={logoWidth} height={logoHeight} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
