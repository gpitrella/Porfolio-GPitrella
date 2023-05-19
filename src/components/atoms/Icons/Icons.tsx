import Folder from "../../../assets/folder.svg";
import Launch from "../../../assets/export.svg";
import Dark from "../../../assets/dark.gif";
import Light from "../../../assets/light.gif";
import LinkedIn from "../../../assets/linkedin.svg";
import GitHub from "../../../assets/github.svg";
import Menu from "../../../assets/menu.svg";
import classes from "./Icons.module.css";
import Mail from "../../../assets/mail.svg";
import Live from "../../../assets/live-white.svg";
import GitHubWhite from "../../../assets/github-white.svg";

type Props = {
  width: string;
  type: string;
};

const Icons = ({ width, type }: Props) => {
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
            : type === "mail"
            ? Mail
            : type === "githubwhite"
            ? GitHubWhite
            : type === "live"
            ? Live
            : ''
        }
        style={{
          width: `${parseInt(width)}px`
        }}
        className={classes.icon}
        alt={`${type} icon`}
      />
    </>
  );
};

export default Icons;
