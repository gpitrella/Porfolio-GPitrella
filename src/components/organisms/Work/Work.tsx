import React from "react";
import classes from "./Work.module.css";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import { ProjectsList } from "../../../assets/Details";
import CardProyect from "../../organisms/CardProyect/CardProyect"

type Props = {};

const Work = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section className={classes.work} ref={ref}>
      <Header>
        <Title content="Projects" />
      </Header>
      <ul className={classes.work__container}>
        {ProjectsList.map((project, index) => (
          <CardProyect key={index} projectDetail={project} alt={false} />
        ))}
      </ul>
    </section>
  );
});

export default Work;
