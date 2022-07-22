// import Button from "../../atoms/Button/Button";
// import Link from "../../atoms/Link/Link";
import "./ReadMore.css";

type Props = {
  link?: string;
  children?: JSX.Element | JSX.Element[] | string;
};

const ReadMore = ({ link, children }: Props) => {
  return (
    <div>
      <button className="custom-btn btn-16">Read More</button>
    </div>
  );
};

export default ReadMore;
