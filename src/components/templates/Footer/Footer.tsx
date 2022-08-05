import Icons from "../../atoms/Icons/Icons";
import classes from "./Footer.module.scss";
import Lotties from "../../atoms/Lotties/Lotties";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__socials}>
          <a href="https://www.linkedin.com/in/gabrielpitrella" target="_blank" rel="noreferrer">
            <Icons type="linkedin" width="40" />
          </a>
          <a href="https://github.com/gpitrella" target="_blank" rel="noreferrer">
            <Icons type="git" width="40" />
          </a>
          <a href="mailto:gabrielpitrella@gmail.com" target="_blank" rel="noreferrer">
            <Icons type="mail" width="40" />
          </a>
        </div>
        <div className={classes.footer__container__info}>
            Designed and Developed by Gabriel Pitrella. Built with React.js,
            TypeScript & Styled-Components, Sass and more. Hosted on Vercel.
        </div>
      </div>
    </div>
  );
};

export default Footer;
