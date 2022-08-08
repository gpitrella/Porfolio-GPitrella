import React from "react";
import { AboutMe } from "../../../assets/Details";
import Info from "../../molecules/Info/Info";
import Skills from "../../molecules/Skills/Skills";
import classes from "./About.module.css";
import Lotties from "../../atoms/Lotties/Lotties";
import Resume from "../../molecules/Resume/Resume";

type Props = {
  profileImage: string;
  skillList: string[]
};

const resumeLink =
  "https://res.cloudinary.com/djgghmpgh/image/upload/fl_attachment/v1658949548/Gabriel_Pitrella_-_CV_-_Full_Stack_Developer_-_EN_lirxke.pdf";

const About = React.forwardRef<HTMLElement, Props>(
  ({ profileImage, skillList }: Props, ref) => {
    const Fade = require("react-reveal/Fade")
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
  
    React.useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);

    return (
      <section ref={ref} className={classes.about}>
        <div className={classes.info}>
          <Info title={AboutMe.title} text={AboutMe.text}/>
          <Skills skillList={skillList}/>
          <Resume link={resumeLink}/>
        </div>
        <Fade clear={isMobile} top={isDesktop} duration={1500} delay={500} distance="100px">
          <div className={classes.pic}>
            <Lotties type="person" width="350px"/>
          </div>
        </Fade>
      </section>
    );
  }
);

export default About;
