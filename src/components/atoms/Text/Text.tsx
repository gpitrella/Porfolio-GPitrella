import React from "react";
import classes from "./Text.module.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  type?: number;
};

const Text = ({ children, type = 1 }: Props) => {
  return (
    <p
      className={
        type === 2
          ? classes["text--alt-2"]
          : type === 3
          ? classes["text--alt-3"]
          : type === 4
          ? classes["text--alt-4"]
          : classes.text
      }
    >
      {children}
    </p>
  );
};

export default Text;
