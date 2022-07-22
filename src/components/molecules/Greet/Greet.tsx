// import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
// import TypewriterElement from "../../atoms/Typewriter/Typewriter";
import { useTypewriter } from 'react-simple-typewriter'
// import { Cursor } from "../../atoms/Cursor/Cursor";
import './Greet.css'

const Greet = () => {
  
  const {text} = useTypewriter({
    words: ['Hi!', 'Hello!', 'Salut!', 'Hola!', 'Salam!', 'Hallo!', 'Ciao!', 'Olá!', 'Hej!', 'Aloha!'],
    loop: false, // Infinit
  })
  return (
    <>
      <span className="color"><Title size="large" content={`${text}`}/></span>
      <div className="maindiv">
        <Title size="large" content={`I'm Gabriel Pitrella`} /><Title size="large-alt" content="Full Stack Developer" />
      </div>
      <Text type={4}>
          I'm Full Stack Developer passionate about improve the world with the new technology and 
          build products that generated a real impact to its users.
      </Text>
    </>
  );
};

export default Greet;
