import React from "react";
import classes from "./Title.module.css";

type Props = {
  size?: string;
  content: string;
};

const Title = ({ size, content }: Props) => {
  let cssClass;
  switch (size) {
    case "main-title":
      cssClass = classes["main-title"];
      break;
    case "large":
      cssClass = classes["title--l"];
      break;
    case "large-alt":
      cssClass = classes["title--l-alt"];
      break;
    case "medium":
      cssClass = classes["title--m"];
      break;
    case "small":
      cssClass = classes["title--s"];
      break;

    default:
      cssClass = classes.title
      break;
  }
  return <h1 className={cssClass}>{content}</h1>;
};

export default Title;
