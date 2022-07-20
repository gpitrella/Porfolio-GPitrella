import React from "react";
import { ContactInfo } from "../../../assets/Details";
import GoTo from "../../molecules/GoTo/GoTo";
import Info from "../../molecules/Info/Info";
import classes from "./Contact.module.css";

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
  const contactLink = "mailto:ricardoverarondon@gmail.com";
  return (
    <section className={classes.contact} ref={ref}>
      <div className={classes.contact__container}>
        <Info title={ContactInfo.title} text={ContactInfo.text} />
        <GoTo link={contactLink}>Say Hi!</GoTo>
      </div>
    </section>
  );
});

export default Contact;
