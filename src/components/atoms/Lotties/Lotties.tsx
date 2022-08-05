import Lottie from 'react-lottie';
import Light from '../../../assets/light.json';
import Dark from '../../../assets/dark.json';
import Person from '../../../assets/person.json';
import Charging from '../../../assets/charging.json';
import Bubbles from '../../../assets/bubbles.json';
import Bubbles2 from '../../../assets/bubble2.json';
import LionFish from '../../../assets/lionfish.json';
import Medusa from '../../../assets/medusa.json';
import Turtle from '../../../assets/turtle.json';
import Seaweed from '../../../assets/seaweed.json';


type Props = {
  width: string;
  type: string;
};

const Lotties = ({ width, type }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: type === 'light' 
                      ? Light 
                      : type === 'dark'
                      ? Dark
                      : type === 'person'
                      ? Person
                      : type === 'charging'
                      ? Charging
                      : type === 'bubbles'
                      ? Bubbles
                      : type === 'bubbles2'
                      ? Bubbles2
                      : type === 'lionfish'
                      ? LionFish
                      : type === 'medusa'
                      ? Medusa
                      : type === 'turtle'
                      ? Turtle
                      : type === 'seaweed'
                      ? Seaweed
                      : '',
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        width={`${parseInt(width)}px`}
      />
    </div>
  );
};

export default Lotties;
