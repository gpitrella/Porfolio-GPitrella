import React from "react";
import classes from "./CardNav.module.css";
import { Experience as Exp } from "../../../assets/Details";
import { motion } from "framer-motion";

type Props = {
  content: Exp[];
  selected: Exp;
  setSelected: (value: React.SetStateAction<Exp>) => void;
};

const CardNav = ({ content, selected, setSelected }: Props) => {
  return (
    <nav className={classes.tabs}>
      <ul className={classes.tabs__list}>
        {content.map((exp) => (
          <li
            key={exp.company}
            className={exp !== selected ? classes.tab : classes["tab--active"]}
            onClick={() => setSelected(exp)}
          >
            {exp.company}
            {exp === selected ? (
              <motion.div
                className={classes.tab__underline}
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CardNav;
