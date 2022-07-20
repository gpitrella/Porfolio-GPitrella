import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";

const Greet = () => {
  return (
    <>
      <Text type={2}>Hi!, mi name is</Text>
      <Title size="large" content="Ricardo Vera." />
      <Title size="large-alt" content="I Build things for the web." />
      <Text>
        I'm a Front-End (and occasionally Back-End) Web Developer and a fresh
        graduate electronic engineer.
      </Text>
    </>
  );
};

export default Greet;
