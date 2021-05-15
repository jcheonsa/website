import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from 'react-typed';
import ProgressiveImage from 'react-progressive-image'

/********** COMPONENTS ************/
// import Contact from '../components/contact'
import Sidebar from '../components/sidebar'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const pageTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  }
}

const firstName = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 1.6
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Home = () => {

  const nextPage = "About Me"
  // const prevPage = "Contact Me"

  return (
    <main>
      <motion.div
        exit={
          {
            opacity: 0
          }
        }
        transition={pageTransition}
      >
        <div className='container'>
          <motion.div
            className='row'
            exit='exit'
          >
            <h1>
              <motion.div className="intro">
                <motion.div variants={letter} initial="initial" animate="animate" >
                  <motion.t className="text-end">Hi</motion.t>,
                <br></br>
                  <motion.t>I'm</motion.t>
                  <motion.t className="myName" variants={firstName}>Johnnie</motion.t>,
                <br></br>
                  <motion.t >writer</motion.t>
                  <motion.t >of</motion.t>
                  <motion.t className="text-end">things</motion.t>.
                </motion.div>
              </motion.div>
            </h1>

            <Typed
              className="typed-text"
              strings={
                [
                  "ux research", "information systems", "computer science", "cultural studies", "storyteller & artist", "music addict", "avid cyclist", "fighting game lover", "peas belong in fried rice"
                ]
              }
              typeSpeed={40}
              backSpeed={30}
              smartBackspace
              loop
            >
            </Typed>

          </motion.div>

          <motion.div
            className='row2'
            exit='exit'
          >
            <div className='image-container'>
              <div
                className='thumbnail'
                style={{
                  width: "524px",
                  height: "654px",
                }}>
                <div className='frame'>
                  <div className='media'>
                  </div>
                </div>
              </div>
              <p><i>Likely a projects carousel to be placed here.</i></p>
            </div>
          </motion.div>
          <Link to={`/abt`}>
            <Sidebar nextPage={nextPage} />
          </Link>
        </div>
      </motion.div>
    </main>
  )
};

export default Home;
