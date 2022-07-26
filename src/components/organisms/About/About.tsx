import React from "react";
import { AboutMe } from "../../../assets/Details";
import Info from "../../molecules/Info/Info";
import Skills from "../../molecules/Skills/Skills";
import classes from "./About.module.css";
import Lotties from "../../atoms/Lotties/Lotties";
import Resume from "../../molecules/Resume/Resume"

type Props = {
  profileImage: string;
  skillList: string[]
};

const resumeLink =
  "https://res.cloudinary.com/djgghmpgh/image/upload/fl_attachment/v1658830366/Gabriel_Pitrella_-_CV_-_Full_Stack_Developer_gaqbze.pdf";

const About = React.forwardRef<HTMLElement, Props>(
  ({ profileImage, skillList }: Props, ref) => {
    return (
      <section ref={ref} className={classes.about}>
        <div className={classes.info}>
          <Info title={AboutMe.title} text={AboutMe.text}/>
          <Skills skillList={skillList}/>
          <Resume link={resumeLink}/>
        </div>
        <div className={classes.pic}>
          <Lotties type="person" width="350px"/>
          {/* <Image image={profileImage} /> */}
        </div>
      </section>
    );
  }
);

export default About;
