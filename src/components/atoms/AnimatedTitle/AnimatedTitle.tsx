import React from "react";
import "./AnimatedTitle.scss";

type Props = {
};

const AnimatedTitle = ({}: Props) => {

	let elements = document.getElementsByClassName(
			'rollingtext',
		) as HTMLCollectionOf<HTMLElement>;
		for (let i = 0; i < 1; i++) {
				let innerText = elements[i].innerText;
				elements[i].innerHTML = '';

				let textContainer = document.createElement('div');
				textContainer.classList.add('block');

				for (let letter of innerText) {
				  let span = document.createElement('span');
				  span.innerText = letter.trim() === '' ? '\xa0': letter;
				  span.classList.add('letter');
				  textContainer.appendChild(span);
				}

				elements[i].appendChild(textContainer);
				elements[i].appendChild(textContainer.cloneNode(true));
			}
			
	
	// for presentation purpose
	setTimeout(() => {
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.add('play');	 
		}
	}, 1600);
	
	// for (let i = 0; i < elements.length; i++) {
	// 	elements[0].addEventListener('mouseover', () => {
	// 		elements[0].classList.remove('play');
	// 	  });	 
	// // }
	


  return (
    <a className={"rollingtext"} href="#">
		R
	</a>
  );
};

export default AnimatedTitle;
