import Lottie from 'react-lottie';
import Light from '../../../assets/light.json';
import Dark from '../../../assets/dark.json';
import Person from '../../../assets/person.json';


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
