import React from "react";
import "./AnimatedTitle.scss";

const AnimatedTitle = () => {	
	const [ elements, setElements ] = React.useState(document.querySelectorAll('.rolling-text') as NodeListOf<HTMLElement>)

	React.useEffect(() => {
		setElements(document.querySelectorAll('.rolling-text') as NodeListOf<HTMLElement>);
	}, []);

	React.useEffect(() => {

		elements.forEach(element => {
			let innerText = element.innerText;
			element.innerHTML = '';
			
			let textContainer = document.createElement('div');
			textContainer.classList.add('block');
			
			for (let letter of innerText) {
			  let span = document.createElement('span');
			  span.innerText = letter.trim() === '' ? '\xa0': letter;
			  span.classList.add('letter');
			  textContainer.appendChild(span);
			}
			
			element.appendChild(textContainer);
			element.appendChild(textContainer.cloneNode(true));
		
		  }); 

		  // for presentation purpose
			setTimeout(() => {
				elements.forEach(element => {
				element.classList.add('play');
				})
			}, 50);
			
			elements.forEach(element => {
				element.addEventListener('mouseover', () => {
				element.classList.remove('play');
				});
			});
	  }, [elements]);
	  
	
  return (
    <a className="rolling-text" href="#">
		I'm Gabriel Pitrella
 	</a>
  );
};

export default AnimatedTitle;
