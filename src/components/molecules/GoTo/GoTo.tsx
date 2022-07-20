import Button from "../../atoms/Button/Button";
import Link from "../../atoms/Link/Link";
import classes from "./GoTo.module.css";

type Props = {
  link: string;
  children: JSX.Element | JSX.Element[] | string;
};

const GoTo = ({ link, children }: Props) => {
  return (
    <div className={classes.goto}>
      <Button type="download">
        <Link link={link}>{children}</Link>
      </Button>
    </div>
  );
};

export default GoTo;
