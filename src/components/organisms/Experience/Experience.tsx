import React from "react";
import classes from "./Experience.module.css";
import Title from "../../atoms/Title/Title";
import Header from "../../atoms/Header/Header";
import IconSkills from "../../organisms/IconSkills/IconSkills";

type Props = {};

const Experience = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section ref={ref} className={classes.exp}>
      <Header>
        <Title content="Tech Skills" />
      </Header>
      <IconSkills />
    </section>
  );
});

export default Experience;
