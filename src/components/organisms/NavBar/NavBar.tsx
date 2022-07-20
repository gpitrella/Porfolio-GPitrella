import { motion, AnimatePresence } from "framer-motion";
import { INavRefProps } from "./navbarTypes";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Icon from "../../atoms/IconLogo/IconLogo";
import classes from "./NavBar.module.css";
import Button from "../../atoms/Button/Button";
import Icons from "../../atoms/Icons/Icons";
import SideBar from "../../molecules/SideBar/SideBar";

const NavBar = ({ width, theme, navRefs, scrollIntoView }: INavRefProps) => {
  const ctx = useContext(ThemeContext);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const logoHeight = 35;
  const logoWidth = 30;

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
          <Icon
            theme={theme}
            height={logoHeight}
            width={logoWidth}
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
        <motion.div className={classes.content__right}>
          {width > 780 ? (
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
                Experience
              </span>
              <span onClick={() => scrollIntoView(navRefs.workRef)}>Work</span>
              <span onClick={() => scrollIntoView(navRefs.contactRef)}>
                Contact
              </span>
              <Button onClick={themeHandler}>
                {ctx.dark ? (
                  <Icons type="dark" width="23px" />
                ) : (
                  <Icons type="light" width="23px" />
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              className={classes.content__right__content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button onClick={showSideBarHandler}>
                <Icons type="menu" width="20px" />
              </Button>
              <Button onClick={themeHandler}>
                {ctx.dark ? (
                  <Icons type="dark" width="23px" />
                ) : (
                  <Icons type="light" width="23px" />
                )}
              </Button>
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
