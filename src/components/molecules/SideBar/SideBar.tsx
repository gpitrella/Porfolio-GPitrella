import { motion } from "framer-motion";
import React from "react";
// import Button from "../../atoms/Button/Button";
import classes from "./SideBar.module.css";
import { navRefs } from "../../organisms/NavBar/navbarTypes";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  navRefs: navRefs;
  showSidebar: () => void;
  mobileSidebar: (nav: React.RefObject<HTMLElement>) => void;
};

function SideBar({ showSidebar, mobileSidebar, navRefs }: Props) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={classes.sidebar}
    >
      <div className={classes.sidebar__items}>
        <div className={classes.sidebar__item}>
            <IconButton
              edge="start"
              sx={{ fontSize: "40px", marginTop: "1.5rem", marginRight: "1.5rem" }}
              color="inherit"
              aria-label="menu"
              onClick={showSidebar}
            >
              <CloseIcon />
            </IconButton>
          {/* <Button onClick={showSidebar}>close</Button> */}
        </div>
        <span
          className={classes.sidebar__item}
          onClick={() => mobileSidebar(navRefs.aboutRef)}
        >
          About Me
        </span>
        <span
          className={classes.sidebar__item}
          onClick={() => mobileSidebar(navRefs.experienceRef)}
        >
          Soft Skills
        </span>
        <span
          className={classes.sidebar__item}
          onClick={() => mobileSidebar(navRefs.workRef)}
        >
          Projects
        </span>
        <span
          className={classes.sidebar__item}
          onClick={() => mobileSidebar(navRefs.contactRef)}
        >
          Contact
        </span>
      </div>
    </motion.div>
  );
}

export default SideBar;
