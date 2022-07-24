import React, { useEffect, useState } from 'react';
// import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import css3 from '@iconify-icons/logos/css-3';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import javascriptIcon from '@iconify-icons/logos/javascript';
import html5 from '@iconify-icons/logos/html-5';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import sequelizeIcon from '@iconify-icons/logos/sequelize';
import expressIcon from '@iconify-icons/logos/express';
import passportIcon from '@iconify-icons/logos/passport';
import gatsbyIcon from '@iconify-icons/logos/gatsby';
import sassIcon from '@iconify-icons/logos/sass';
import graphqlIcon from '@iconify-icons/logos/graphql';
import mysqlIcon from '@iconify-icons/logos/mysql';
import firebaseIcon from '@iconify-icons/logos/firebase';
import Title from '../../atoms/Title/Title';
import './IconSkills.scss';

const IconSkills = () => {
  const Fade = require("react-reveal/Fade")
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title size="large" content={`Skills`} />
          <Fade clear={isMobile} bottom={isDesktop} duration={1500} delay={500} distance="150px">
            <div className="skills-wrapper__container">
              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={javascriptIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Javascript</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={html5} className="skills-wrapper__size-icon" />
                </div>
                <p>HTML</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={css3} className="skills-wrapper__size-icon" />
                </div>
                <p>CSS</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={reactIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>React</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={reduxIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Redux</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={postgresqlIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>PostgreSQL</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={gatsbyIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Gatsby</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={passportIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Passport</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={expressIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Express</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={nodejsIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Node.js</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={sequelizeIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Sequelize</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={bootstrapIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Bootstrap</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={sassIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Sass</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={graphqlIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>GraphQL</p>
              </div>

              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={mysqlIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>MySQL</p>
              </div>
              <div className="skills-wrapper__item">
                <div className="skills-wrapper__icon">
                  <Icon icon={firebaseIcon} className="skills-wrapper__size-icon" />
                </div>
                <p>Firebase</p>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default IconSkills;