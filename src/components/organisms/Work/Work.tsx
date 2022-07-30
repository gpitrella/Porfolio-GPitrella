import React from "react";
import "./Work.css";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import { ProjectsList } from "../../../assets/Details";
import CardProyect from "../../organisms/CardProyect/CardProyect";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
// const CustomLeftArrow = ({ onClick }:CustomLeftArrowProps) => {
//   return <div onClick={() => onClick()}>This is My custom arrow</div>
// }
// const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
//   return (
//     <div>
//       <button onClick={() => previous()} />
//       <button onClick={() => next()} />
//     </div>
//   );
// };
// const CustomDots = ({ index, active, onClick, carouselState }:DotProps) => {
//   return <div onClick={() => onClick }>This is a Custom dots</div>
// }


type Props = {};

const Work = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section className="work" ref={ref}>
      <Header>
        <Title content="Projects" />
      </Header>
      {/* <ul className={classes.work__container}> */}
      <Carousel
        ssr
        partialVisbile
        // deviceType={deviceType}
        itemClass="imageitem"
        responsive={responsive}
      >
        {ProjectsList.map((project, index) => (
          <CardProyect key={index} projectDetail={project} alt={false} />
        ))}
        </Carousel>
      {/* </ul> */}
    </section>
  );
});

export default Work;
