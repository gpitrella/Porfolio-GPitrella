import React from "react";
import classes from "./Link.module.css";

type Props = {
  link: string;
  children?: JSX.Element | JSX.Element[] | string;
  isText?: boolean;
};

const Link = ({ link, children, isText=true }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${classes.link}`}
    >
      {children}
    </a>
  );
};

export default Link;
