import React from "react";
import classes from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { AllExperience, Experience as Exp } from "../../../assets/Details";
import Title from "../../atoms/Title/Title";
import CardNav from "../../molecules/CardNav/CardNav";
import Card from "../../atoms/Card/Card";
import Header from "../../atoms/Header/Header";
import List from "../../molecules/List/List";
import IconSkills from "../../organisms/IconSkills/IconSkills";

type Props = {};

const Experience = React.forwardRef<HTMLElement>((props: Props, ref) => {
  const [selectedTab, setSelectedTab] = React.useState<Exp>(AllExperience[0]);
  return (
    <section ref={ref} className={classes.exp}>
      <Header>
        <Title content="Where I’ve Worked" />
      </Header>
      <IconSkills />
      <Card alt={true}>
        <>
          <CardNav
            content={AllExperience}
            selected={selectedTab}
            setSelected={setSelectedTab}
          />
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.company : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={classes.exp__content}
            >
              {selectedTab ? (
                <>
                  <Title size="small" content={selectedTab.title} />
                  <List content={selectedTab.tasks}/>
                </>
              ) : (
                null
              )}
            </motion.div>
          </AnimatePresence>
        </>
      </Card>
    </section>
  );
});

export default Experience;
