// import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
// import TypewriterElement from "../../atoms/Typewriter/Typewriter";
import { useTypewriter } from 'react-simple-typewriter'
// import { Cursor } from "../../atoms/Cursor/Cursor";
import classes from'./Greet.module.scss'

const Greet = () => {
  
  const {text} = useTypewriter({
    words: ['Hi! Welcome', 'Hello! Salutes', 'Bonjour! Saluts', 'Hola! Saludos'],
    loop: false, // Infinit
    typeSpeed: 200,
    deleteSpeed: 80,
    delaySpeed: 1100,
  })

  return (
    <div className={classes.containerGreet}>
      <div className={classes.color}>
        <h1 className={classes.colorh1}>{`${text}`}</h1>
      </div>
      <div className={classes.maindiv}>
        <Title size="main-title" content={`I'm Gabriel Pitrella`} />
      </div>
      <Text type={4}>
          FULL STACK DEVELOPER passionate about improve the world with the new 
          technology and build products that generated a real impact to its users.
      </Text>
    </div>
  );
};

export default Greet;
