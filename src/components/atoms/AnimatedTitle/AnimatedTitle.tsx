import React from "react";
import classes from "./AnimatedTitle.module.scss";

type Props = {

};

const AnimatedTitle = ({}: Props) => {
  
 
  return (
    <div>
			<h3 id={classes.resizingh3} className={""} >
					<span>
							<div className={classes.stage}>
								<div className={classes.cubespinner}>
									<div className={classes.face1}>Gabriel Pitrella</div>
									<div className={classes.face2}>FullStack Developer</div>
									<div className={classes.face4}>FrontEnd / BackEnd</div>
									<div className={classes.face3}>Creative</div>
								</div>
							</div>
						</span>
					</h3>
				</div>
  );
};

export default AnimatedTitle;
