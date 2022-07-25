import React from "react";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

type Props = {
  title: string;
  text: string[] | string;
  type?: number;
  isCard?: boolean;
};

const Info: React.FC<Props> = ({
  text,
  title,
  type = 1,
  isCard = false,
}: Props) => {
  return (
    <>
      {isCard ? (
        <Title content={title}/>
      ) : (
        <Header>
          <Title content={title} />
        </Header>
      )}
      {Array.isArray(text) ? (
        text.map((txt, idx) => <Text key={idx}>{txt}</Text>)
      ) : type === 2 ? (
        <Text type={2}>{text}</Text>
      ) : (
        <Text type={3}>{text}</Text>
      )}
    </>
  );
};
export default Info;
