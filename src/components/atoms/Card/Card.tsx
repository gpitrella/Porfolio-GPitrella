import classes from "./Card.module.css";

type Props = {
  children: JSX.Element;
  alt: boolean;
};

const Card = ({ children, alt = true}: Props) => {
  return (
    <div className={classes.card} style={{ padding: alt ? "0px" : "15px" }}>
      {children}
    </div>
  );
};

export default Card;
