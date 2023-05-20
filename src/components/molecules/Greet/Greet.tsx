// import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
// import TypewriterElement from "../../atoms/Typewriter/Typewriter";
import { useTypewriter } from 'react-simple-typewriter';
// import { Cursor } from "../../atoms/Cursor/Cursor";
import classes from'./Greet.module.scss';
import AnimatedTitle from '../../atoms/AnimatedTitle/AnimatedTitle';

const Greet = () => {
  
  const {text} = useTypewriter({
    words: ['Hi! Welcome', 'Hello! Salutes', 'Bonjour! Saluts', 'Hola! Saludos'],
    loop: false, // Infinit
    typeSpeed: 160,
    deleteSpeed: 80,
    delaySpeed: 1100,
  })

  return (
    <div className={classes.containerGreet}>
      
      <div className={classes.color}>
        <h1 className={classes.colorh1}>HI! Welcome</h1>
      </div>
      <div className={classes.maindiv}>
        <AnimatedTitle />
      </div>
      <Text type={4}>
          <p><strong>FULL STACK DEVELOPER</strong> passionate about improving the world with new 
          technologies and building products that generate real impact for their users. </p>
      </Text>
    </div>
  );
};

export default Greet;
