import React from "react";
import classes from "./Button.module.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  type?: string;
  rest?: React.DOMAttributes<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ children, type = "normal", ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={
        type === "normal" ? classes.button : classes["button--download"]
      }
    >
      {children}
    </button>
  );
};

export default Button;
