// import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
// import TypewriterElement from "../../atoms/Typewriter/Typewriter";
import { useTypewriter } from 'react-simple-typewriter'
// import { Cursor } from "../../atoms/Cursor/Cursor";
import './Greet.css'

const Greet = () => {
  
  const {text} = useTypewriter({
    words: ['Hi! Welcome', 'Hello! Welcome', 'Salut!', 'Hola! Welcome'],
    loop: false, // Infinit
    typeSpeed: 200,
    deleteSpeed: 200,
    delaySpeed: 1000,
  })
  return (
    <div className="containerGreet">
      <div className="color">
        <h1 className="colorh1">{`${text}`}</h1>
      </div>
      <div className="maindiv">
        <Title size="large" content={`I'm Gabriel Pitrella`} />
        {/* <Title size="large-alt" content="Full Stack Developer" /> */}
      </div>
      <Text type={4}>
          FULL STACK DEVELOPER passionate about improve the world with the new 
      </Text>
      <Text type={4}>
          technology and build products that generated a real impact to its users.
      </Text>
    </div>
  );
};

export default Greet;
