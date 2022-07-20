import React from "react";
import List from "../List/List";
import classes from "./Skills.module.css";

type Props = {
  skillList: string[];
};

const Skills = ({ skillList }: Props) => {
  return (
    <div className={classes.skill}>
      <List content={skillList}/>
    </div>
  );
};

export default Skills;
