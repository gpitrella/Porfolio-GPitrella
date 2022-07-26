// import Button from "../../atoms/Button/Button";
// import Link from "../../atoms/Link/Link";
import classes from "./Resume.module.scss";
import Link from "../../atoms/Link/Link";

type Props = {
  link: string;
  children?: JSX.Element | JSX.Element[] | string;
};

// const Resume = ({ link, children, navRefs, scrollIntoView }: Props) => {

const Resume = ({ link, children }: Props) => {
  return (
    <div className={classes.mainresume}>
      <button className={`${classes.custombtn} ${classes.btn7}`}>
        <Link link={link}><span>Resume</span></Link>
      </button>
    </div>
  );
};

export default Resume;