import React from "react";
import Greet from "../../molecules/Greet/Greet";
import GoTo from "../../molecules/GoTo/GoTo";
import ReadMore from "../../molecules/ReadMore/ReadMore";
import classes from "./Main.module.css";
const Main = () => {
  // const resumeLink =
  //   "https://drive.google.com/file/d/1YTrqBcevYOJmnYcPW4hqsSQVAtBG17e1/view?usp=sharing";
  return (
    <section className={classes.main}>
      <div className={classes.content}>
        <Greet />
        <ReadMore />
        {/* <GoTo link={resumeLink}>Download my Resume</GoTo> */}
      </div>
    </section>
  );
};

export default Main;
