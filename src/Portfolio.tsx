import { useContext, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { useWindowSize } from "./hooks/useWindowSize";
import NavBar from "./components/organisms/NavBar/NavBar";
import Icon from "./components/atoms/IconLogo/IconLogo";
import "./Portfolio.css";
import Body from "./components/templates/Body/Body";
import Footer from "./components/templates/Footer/Footer";
import Background from "./components/atoms/Background/Background";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const ctx = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const widthCondition = windowSize?.width === undefined ? 0 : windowSize.width;
  const logoHeight = 55;
  const logoWidth = 50;

  const navRefs = { aboutRef, workRef, experienceRef, contactRef, mainRef };

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
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
              <div><Background/></div>
              <NavBar
                width={widthCondition}
                theme={theme}
                navRefs={navRefs}
                scrollIntoView={scrollIntoViewHandler}
              />
              <div className="content">
                <Body theme={theme} navRefs={navRefs} scrollIntoView={scrollIntoViewHandler}/>
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
