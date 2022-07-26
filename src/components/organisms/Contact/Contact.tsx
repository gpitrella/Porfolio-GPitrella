import React from "react";
import { ContactInfo } from "../../../assets/Details";
import GoTo from "../../molecules/GoTo/GoTo";
import Info from "../../molecules/Info/Info";
import classes from "./Contact.module.css";
import ContactMe from "../../molecules/ContactMe/ContactMe";

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
  const contactLink = "mailto:gabrielpitrella@gmail.com";
  return (
    <section className={classes.contact} ref={ref}>
      <div className={classes.contact__container}>
        <Info title={ContactInfo.title} text={ContactInfo.text} />
        <ContactMe link={contactLink}/>
      </div>
    </section>
  );
});

export default Contact;
