import { motion, AnimationProps } from "framer-motion";

interface Props {
  theme: string,
  height: number,
  width: number,
  onClick?: () => void
}

const IconLogo = ({theme, height, width, ...rest}: Props) => {

  const themeColor = theme === "dark" ? "#fff" : "#191919"

  const mainPathVariant: AnimationProps = {
    transition: {
      duration: 1.7,
      ease: "easeInOut",
    },
    variants: {
      visible: {
        pathLength: 1,
      },
      hidden: {
        pathLength: 0,
      },
    },
  };

  return (
    <div {...rest} style={{cursor: "pointer"}}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 361 685"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <motion.path
          d="M10 9L343.5 250L10 490.5V155L343.5 402V685"
          stroke={themeColor}
          strokeWidth="50"
          {...mainPathVariant}
          animate="visible"
          initial="hidden"
        />
      </svg>
    </div>
  );
};

export default IconLogo;
