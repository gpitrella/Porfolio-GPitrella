import React from "react";
import Greet from "../../molecules/Greet/Greet";
import ReadMore from "../../molecules/ReadMore/ReadMore";
import { navRefs } from "../../organisms/NavBar/navbarTypes";
import classes from "./Main.module.css";

type Props = {
  navRefs: navRefs;
  scrollIntoView: (targetRef: React.RefObject<HTMLElement>) => void;
};

// const About = React.forwardRef<HTMLElement, Props>(
//   ({ profileImage, skillList }: Props, ref) => {
const Main = React.forwardRef<HTMLElement, Props>(
  ({ navRefs, scrollIntoView }: Props, ref) => {
  // const resumeLink =
  //   "https://drive.google.com/file/d/1YTrqBcevYOJmnYcPW4hqsSQVAtBG17e1/view?usp=sharing";
    return (
      <section ref={ref} className={classes.main}>
        <div className={classes.content}>
          <Greet />
          <ReadMore navRefs={navRefs} scrollIntoView={scrollIntoView}/>
          {/* <GoTo link={resumeLink}>Download my Resume</GoTo> */}
        </div>
      </section>
    );
  }
);

export default Main;
