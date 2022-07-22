import React from "react";
import { AboutMe } from "../../../assets/Details";
import Image from "../../atoms/Image/Image";
import Info from "../../molecules/Info/Info";
import Skills from "../../molecules/Skills/Skills";
import classes from "./About.module.css";
import GoTo from "../../molecules/GoTo/GoTo";

type Props = {
  profileImage: string;
  skillList: string[]
};

const resumeLink =
  "https://drive.google.com/file/d/1YTrqBcevYOJmnYcPW4hqsSQVAtBG17e1/view?usp=sharing";

const About = React.forwardRef<HTMLElement, Props>(
  ({ profileImage, skillList }: Props, ref) => {
    return (
      <section ref={ref} className={classes.about}>
        <div className={classes.info}>
          <Info title={AboutMe.title} text={AboutMe.text}/>
          <Skills skillList={skillList}/>
          <GoTo link={resumeLink}>My Resume</GoTo>
        </div>
        <div className={classes.pic}>
          <Image image={profileImage} />
        </div>
      </section>
    );
  }
);

export default About;
