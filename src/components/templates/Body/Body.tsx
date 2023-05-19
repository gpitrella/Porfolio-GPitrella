import Main from "../../organisms/Main/Main";
import About from "../../organisms/About/About";
import Experience from "../../organisms/Experience/Experience";
import Contact from "../../organisms/Contact/Contact";
import { navRefs } from "../../organisms/NavBar/navbarTypes";
import classes from "./Body.module.css";
import ProfileImage from "../../../assets/img.jpeg";
import { SkillList } from "../../../assets/Details";
import Resume from "../../molecules/Resume/Resume";
import { Link } from 'react-router-dom';

interface Props {
  theme: string;
  navRefs: navRefs;
  scrollIntoView: (targetRef: React.RefObject<HTMLElement>) => void;
}
const noLink = "";
  
const Body = ({ navRefs, scrollIntoView }: Props) => {
  return (
    <div className={classes.section}>
      <Main ref={navRefs.mainRef} navRefs={navRefs} scrollIntoView={scrollIntoView}/>
      <Link to='/projects'><span className={classes.button_projects}><Resume link={noLink} children={'PROJECTS'}/></span></Link>
      <About ref={navRefs.aboutRef} profileImage={ProfileImage} skillList={SkillList}/>
      <Experience ref={navRefs.experienceRef} />
      <Contact ref={navRefs.contactRef} />
    </div>
  );
};

export default Body;
