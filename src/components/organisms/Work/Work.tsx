import React from "react";
import Icons from "../../atoms/Icons/Icons";
import Card from "../../atoms/Card/Card";
import classes from "./Work.module.css";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import { ProjectsList } from "../../../assets/Details";
import List from "../../molecules/List/List";
import Info from "../../molecules/Info/Info";
import Link from "../../atoms/Link/Link";
import CardProyect from "../../organisms/CardProyect/CardProyect"

type Props = {};

const Work = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section className={classes.work} ref={ref}>
      <Header>
        <Title content="Projects" />
      </Header>
      {/* <CardProyect /> */}
      <ul className={classes.work__container}>
        {ProjectsList.map((project, index) => (
          <CardProyect key={index} projectDetail={project} alt={false} />
          // <Card key={index} alt={false}>
          //   <>
          //     <Header alt={true}>
          //       <>
          //         <Link isText={false} link={project.repo}>
          //           <Icons type="folder" width="45" />
          //         </Link>
          //         <Link isText={false} link={project.live}>
          //           <Icons type="launch" width="30" />
          //         </Link>
          //       </>
          //     </Header>
          //     <Info
          //       title={project.title}
          //       text={project.description}
          //       type={3}
          //       isCard={true}
          //     />
          //     <List isAlt={true} content={project.techs} />
          //   </>
          // </Card>
        ))}
      </ul>
    </section>
  );
});

export default Work;
