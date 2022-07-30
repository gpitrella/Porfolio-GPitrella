// import Button from "../../atoms/Button/Button";
// import Link from "../../atoms/Link/Link";
import classes from "./ReadMore.module.css";
import { navRefs } from "../../organisms/NavBar/navbarTypes";

type Props = {
  link?: string;
  children?: JSX.Element | JSX.Element[] | string;
  navRefs: navRefs;
  scrollIntoView: (targetRef: React.RefObject<HTMLElement>) => void;
}

const ReadMore = ({ link, children, navRefs, scrollIntoView }: Props) => {
  return (
    <div>
      <button className={`${classes.custombtn} ${classes.btn12}`} onClick={() => scrollIntoView(navRefs.aboutRef)}><span>Click!</span><span>Read More</span></button>
    </div>
  );
};

export default ReadMore;
