import React from "react";
import ListItem from "../../atoms/ListItem/ListItem";
import classes from "./List.module.css"

type Props = {
  content: string[];
  isAlt?: boolean;
};

const List = ({ content, isAlt = false }: Props) => {
  return (
    <ul className={isAlt ? classes["list--alt"] : classes.list}>
      {content?.map((item, index) => (
        <ListItem key={index} isAlt={isAlt}>
          {item}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
