import classes from './Background.module.css';
import Lotties from "../../atoms/Lotties/Lotties";

const Background = () => {
  
  return (
    <div className={classes.area}>
        <ul className={classes.circles}>
            <span><Lotties type="bubbles2" width="500px"/></span>
            <li></li>
            <li></li>
            <li></li>
            <li><Lotties type="bubbles" width="200px"/></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li><Lotties type="bubbles" width="350px"/></li>
        </ul>
    </div >
  );
};

export default Background;
