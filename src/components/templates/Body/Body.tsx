import Main from "../../organisms/Main/Main";
import About from "../../organisms/About/About";
import Experience from "../../organisms/Experience/Experience";
import Work from "../../organisms/Work/Work";
import Contact from "../../organisms/Contact/Contact";
import { navRefs } from "../../organisms/NavBar/navbarTypes";
import classes from "./Body.module.css";
import ProfileImage from "../../../assets/img.jpeg";
import { SkillList } from "../../../assets/Details";

interface Props {
  theme: string;
  navRefs: navRefs;
  scrollIntoView: (targetRef: React.RefObject<HTMLElement>) => void;
}

const Body = ({ navRefs, scrollIntoView }: Props) => {
  return (
    <div className={classes.section}>
      <Main ref={navRefs.mainRef} navRefs={navRefs} scrollIntoView={scrollIntoView}/>
      <About ref={navRefs.aboutRef} profileImage={ProfileImage} skillList={SkillList}/>
      <Experience ref={navRefs.experienceRef} />
      <Work ref={navRefs.workRef} />
      <Contact ref={navRefs.contactRef} />
    </div>
  );
};

export default Body;
