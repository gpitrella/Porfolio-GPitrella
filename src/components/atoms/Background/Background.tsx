import classes from './Background.module.css';
import Lotties from "../../atoms/Lotties/Lotties";

const Background = () => {
  
  return (
    <div className={classes.area}>
            <span id={classes.turtlemove}><Lotties type="turtle" width="180px"/></span>
            <span id={classes.lionfish}><Lotties type="lionfish" width="180px"/></span>
        <ul className={classes.circles}>
            <span><Lotties type="bubbles2" width="500px"/></span>
            <span><Lotties type="bubbles" width="300px"/></span>
            <span><Lotties type="bubbles" width="150px"/></span>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li id={classes.medusa2}><Lotties type="medusa" width="270px"/></li>
            <li id={classes.medusa1}><Lotties type="medusa" width="250px"/></li>
        </ul>
    </div >
  );
};

export default Background;
