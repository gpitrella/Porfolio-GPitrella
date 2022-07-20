import React from "react";
import classes from "./Header.module.css";

type Props = {
  children: string | JSX.Element;
  alt?: boolean;
};

const Header = ({ children, alt = false }: Props) => {
  return (
    <div className={!alt ? classes.header : classes["header--alt"]}>
      {children}
    </div>
  );
};

export default Header;
