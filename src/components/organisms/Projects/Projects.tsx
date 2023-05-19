import { useEffect, useState } from 'react';
import classes from "./Projects.module.scss";
//import Velocity from 'velocity-animate';
import $ from "jquery";
import { ProjectsList } from "../../../assets/Details";
import Icons from "../../atoms/Icons/Icons";

const Projects = () => {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [moveX, setMoveX] = useState(0);
  
    
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  interface JQuery {
    offset(): Object;
    offset(coordinates: any): JQuery;
    offset(func: (index: any, coords: any) => any): JQuery;
 }

    var data = { ProjectsList };

      var $items = $('.item');    
      
      $items.on({
        
        mousemove: function(e) {
          const $that: globalThis.JQuery<HTMLElement> = $(this);
          //setMoveX(Math.floor((e.pageX - mousePos.x) - (300 / 4)))
         // $that.find('.overflow > img').css('left', `${moveX / 10}%`);
          // console.log($that.find('.overflow > img').css('left', `${moveX / 100}%`))
          //$that.find('.overflow > img')[0].style.setProperty('left', '100');
          //Velocity($that.find('.overflow > img'), {
          //  translateZ: 0,
          //  translateX: Math.floor((e.pageX - $that[0].offsetLeft) - ($that[0].offsetWidth / 4)),
          //  translateY: Math.floor((e.pageY - $that[0].offsetTop) - ($that[0].offsetHeight / 4)),
          //  scale: '6',         
          //  duration: 400,
          //  easing: 'linear',
          //  queue: false
          //});

        },

        mouseleave: function() {
          //Velocity($(this).find('.overflow > img'), {
          //  translateZ: 0,
           // translateX: 0,
          //  translateY: 0,
          //  scale: '1',
          //  duration: 100,
          //  easing: 'easeOutSine',
          //  queue: false
          //});
        }
      }); 



    return (
      <section className={classes.container_projects}>        
        { data.ProjectsList.map((data, index) => (          
          <div className={`${classes.item} ${classes.nopadding} item`} key={index}>
            <div className={`${classes.overflow} overflow`}>
              <div className={classes.content_art}>                
                <div className={classes.links_details}>
                  { data.live != '' &&
                    <a href={ data.live } target="_blank" rel="noreferrer">
                      <Icons type="live" width="40" />
                    </a> }
                  { data.repo != '' &&
                  <a href={ data.repo } target="_blank" rel="noreferrer">
                    <Icons type="githubwhite" width="40" />
                  </a> }
                </div>
                <h4> { data.title } </h4>
              </div>
              <img src={data.image} alt={data.title} className={classes.img_responsive} />
            </div>
          </div>
        ))}
     </section>
    );
  };

export default Projects;
