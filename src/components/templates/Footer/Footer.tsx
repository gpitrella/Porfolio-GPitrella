import Icons from "../../atoms/Icons/Icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__socials}>
          <a href="https://www.linkedin.com/in/ricardovera76" target="_blank" rel="noreferrer">
            <Icons type="linkedin" width="50" />
          </a>
          <a href="https://github.com/REXXAR-677" target="_blank" rel="noreferrer">
            <Icons type="git" width="50" />
          </a>
        </div>
        <div className={classes.footer__container__info}>
          Designed and Built by Ricardo Vera
        </div>
      </div>
    </div>
  );
};

export default Footer;
