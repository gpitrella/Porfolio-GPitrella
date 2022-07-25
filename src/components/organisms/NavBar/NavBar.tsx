import { motion, AnimatePresence } from "framer-motion";
import { INavRefProps } from "./navbarTypes";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import classes from "./NavBar.module.scss";
// import Button from "../../atoms/Button/Button";
// import Icons from "../../atoms/Icons/Icons";
import Lotties from "../../atoms/Lotties/Lotties";
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
          {/* <Icon
            theme={theme}
            height={logoHeight}
            width={logoWidth}
            onClick={() => {
              window.location.reload();
          />
            }} */}
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
                <span onClick={themeHandler}><Lotties type="light" width="30px"/></span>
              ) : (
                <span onClick={themeHandler}><Lotties type="dark" width="35px"/></span>
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
              {/* <Button onClick={showSideBarHandler}>
                <Icons type="menu" width="20px" />
              </Button> */}
              {ctx.dark ? (
                <span onClick={themeHandler} className={classes.content__right__iconMobile}><Lotties type="light" width="30px"/></span>
              ) : (
                <span onClick={themeHandler} className={classes.content__right__iconMobile}><Lotties type="dark" width="30px"/></span>
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
