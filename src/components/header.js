import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import scroller from 'react-scroll';

const pageVariants = {
  initial: {
    opacity: 0,
    y: "20px"
  },

  hover: {
    opacity: 1,
    y: 0,
  },
}


const Header = () => {
  return (
    <motion.header
      className='header'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>
              <img src={require("../images/jtanlogo.png")}
                width="50px"
                height="50px"
                alt="logo"
              >
              </img>
            </Link>
          </div>
          <div className='navbar'>

            <motion.div className='nav-item' whileHover='hover'>
              <Link to={'/'}>
                <div>
                  <motion.div variants={pageVariants}>
                    <p>home</p>
                  </motion.div>
                  <img src={require("../images/home.svg")}
                    alt="logo"
                  >
                  </img>
                </div>
              </Link>
            </motion.div>

            <motion.div className='nav-item' whileHover='hover'>
              <Link to={'/abt'}>
                <div>
                  <motion.div variants={pageVariants}>
                    <p>about</p>
                  </motion.div>
                  <img src={require("../images/aboutme.svg")}
                    alt="logo"
                  >
                  </img>
                </div>
              </Link>
            </motion.div>

            <motion.div className='nav-item' whileHover='hover'>
              <Link to='/prt'>
                <div>
                  <motion.div variants={pageVariants}>
                    <p>portfolio</p>
                  </motion.div>
                  <img src={require("../images/portfolio.svg")}
                    alt="logo"
                  >
                  </img>
                </div>
              </Link>
            </motion.div>

            <motion.div className='nav-item' whileHover='hover'>
              <motion.div variants={pageVariants}>
                <p>artwork</p>
              </motion.div>
              <img src={require("../images/art.svg")}
                alt="logo"
              >
              </img>
            </motion.div>

            <motion.div className='nav-item' whileHover='hover'>
              <Link to='cnt'>
                <div>
                  <motion.div variants={pageVariants}>
                    <p>contact</p>
                  </motion.div>
                  <img src={require("../images/contactme.svg")}
                    alt="logo"
                  >
                  </img>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

    </motion.header>
  );
};

export default Header;
