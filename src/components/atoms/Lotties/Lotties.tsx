import Folder from "../../../assets/folder.svg";
import Launch from "../../../assets/export.svg";
import Dark from "../../../assets/dark.gif";
import Light from "../../../assets/light.gif";
import LinkedIn from "../../../assets/linkedin.svg"
import GitHub from "../../../assets/github.svg"
import Menu from "../../../assets/menu.svg"
import classes from "./Icons.module.css"

type Props = {
  width: string;
  type: string;
};

const Lotties = ({ width, type }: Props) => {
  return (
    <>
      <img
        src={
          type === "folder"
            ? Folder
            : type === "launch"
            ? Launch
            : type === "dark"
            ? Dark
            : type === "light"
            ? Light
            : type === "linkedin"
            ? LinkedIn
            : type === "git"
            ? GitHub
            : type === "menu"
            ? Menu
            : ""
        }
        style={{
          width: `${parseInt(width)}px`
        }}
        className={classes.lottie}
        alt={`${type} icon`}
      />
    </>
  );
};

export default Lotties;
