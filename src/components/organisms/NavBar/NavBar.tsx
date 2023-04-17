import { motion, AnimatePresence } from "framer-motion";
import { INavRefProps } from "./navbarTypes";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import classes from "./NavBar.module.scss";
import sunrise from "../../../assets/sunrise.png";
import moon from "../../../assets/moon.png";
import SideBar from "../../molecules/SideBar/SideBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ width, theme, navRefs, scrollIntoView }: INavRefProps) => {
  const ctx = useContext(ThemeContext);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const showNavBarBackground = () => {
    window.scrollY > 5 ? setShowNavBar(true) : setShowNavBar(false);
  };

  const showSideBarHandler = () => {
    setShowSideBar((prevState: boolean) => !prevState);
  };

  const mobileSideBarActionHandler = (nav: React.RefObject<HTMLElement>) => {
    setShowSideBar((prevState: boolean) => !prevState);
    scrollIntoView(nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavBarBackground);
    return () => {
      window.removeEventListener("scroll", showNavBarBackground);
    };
  }, [showNavBar]);

  const themeHandler = (): void => {
    ctx.toggleDark && ctx.toggleDark();
  };

  return (
    <nav
      className={`${classes.navbar} ${showNavBar ? classes.navbar__down : ""}`}
    >
      <section className={classes.navbar__content}>
        <div className={classes.content__left}>
        <span onClick={() => scrollIntoView(navRefs.mainRef)}>
          <h1 className={classes.gp}>GP</h1>
        </span>
        </div>
        <motion.div className={classes.content__right}>
          {width > 900 ? (
            <motion.div
              className={classes.content__right__content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span onClick={() => scrollIntoView(navRefs.aboutRef)}>
                About Me
              </span>
              <span onClick={() => scrollIntoView(navRefs.experienceRef)}>
                Tech Skills
              </span>
              <span onClick={() => scrollIntoView(navRefs.workRef)}>
                Projects
              </span>
              <span onClick={() => scrollIntoView(navRefs.contactRef)}>
                Contact
              </span>
              {ctx.dark ? (
                <span onClick={themeHandler}><img src={sunrise} className={classes.button_theme} width="25px" height="auto" alt="sun button"/></span>
              ) : (
                <span onClick={themeHandler}><img src={moon} className={classes.button_theme} width="25px" height="auto" alt="sun button"/></span>
              )}
            </motion.div>
          ) : (
            <motion.div
              className={classes.content__right__content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            <IconButton
              edge="start"
              sx={{ fontSize: "40" }}
              color="inherit"
              aria-label="menu"
              onClick={showSideBarHandler}
            >
              <MenuIcon />
            </IconButton>
              {ctx.dark ? (
                <span onClick={themeHandler} className={classes.content__right__iconMobile}><img src={sunrise} className="button_theme" width="25px" height="auto" alt="sun button"/></span>
              ) : (
                <span onClick={themeHandler} className={classes.content__right__iconMobile}><img src={moon} className="button_theme" width="25px" height="auto" alt="sun button"/></span>
              )}
            </motion.div>
          )}
          <AnimatePresence exitBeforeEnter>
            {showSideBar && (
              <SideBar
                showSidebar={showSideBarHandler}
                mobileSidebar={mobileSideBarActionHandler}
                navRefs={navRefs}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </nav>
  );
};

export default NavBar;
