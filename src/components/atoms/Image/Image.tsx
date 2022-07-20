import React from "react";
import classes from "./Image.module.css"

type Props = {
  image: string
};

const Image = ({image}: Props) => {
  return (
    <img className={classes.img} alt="me" src={image} />
  );
};

export default Image;
