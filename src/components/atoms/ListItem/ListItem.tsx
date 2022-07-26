import React from "react";
import classes from "./ListItem.module.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  isAlt?: boolean;
};

const ListItem = ({ children, isAlt = false }: Props) => {
  return (
    <li className={isAlt ? classes["item-alt"] : classes.item}>{children}</li>
  );
};

export default ListItem;
