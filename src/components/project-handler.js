import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProjKaiba from '../pages/projects/projKaiba';
import ProjRosé from '../pages/projects/projRosé';
import ProjBBKE from '../pages/projects/projBBKE';
import ProjSPARTAN from '../pages/projects/projSearchEngine';
import ProjIEEE from '../pages/projects/projIEEE';
import ProjWEB from '../pages/projects/projWebsite';

import ProjGDPR from '../pages/projects/projGDPR';
import ProjKPOP from '../pages/projects/projKPOP';
import ProjIPT from '../pages/projects/projIPT';
import ProjREDDIT from '../pages/projects/projReddit';
import ProjMeme from '../pages/projects/projMeme';
import ProjGlam from '../pages/projects/projGlam';

const variants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
}

const infoVariants = {
  open: {
    y: "-850px",
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      delay: 0.5,
      ease: [0.87, 0, 0.13, 1]
    }
  },
  closed: {
    y: "-200vh",
    opacity: 0
  },
}


const Open = ({ isOpen, setisOpen, id, imageDetails }) => {

  if (id === "KAIBA") {
    var modal = <ProjKaiba imageDetails={imageDetails}></ProjKaiba>
  };

  if (id === "ROSÉ") {
    var modal = <ProjRosé imageDetails={imageDetails}></ProjRosé>
  };

  if (id === "WEBSITE") {
    var modal = <ProjWEB />
  };

  if (id === "SPARTAN") {
    var modal = <ProjSPARTAN />
  };

  if (id === "BBKE") {
    var modal = <ProjBBKE imageDetails={imageDetails}></ProjBBKE>
  };

  if (id === "IEEE") {
    var modal = <ProjIEEE />
  };

  if (id === "GDPR") {
    var modal = <ProjGDPR />
  };

  if (id === "KPOP") {
    var modal = <ProjKPOP />
  };

  if (id === "IPT") {
    var modal = <ProjIPT />
  };

  if (id === "REDDIT") {
    var modal = <ProjREDDIT />
  };

  if (id === "MEME") {
    var modal = <ProjMeme />
  };

  if (id === "GLAM") {
    var modal = <ProjGlam />
  };

  return (

    <AnimatePresence exitBeforeEnter onExitComplete={() => setisOpen(false)}>
      { isOpen && (
        <div className="modal">
          <motion.div
            className="lightbox"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
          </motion.div>
          <>
            <motion.div
              className="info"
              variants={infoVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div>{modal}</div>
              <img src={require('../images/x.svg')}
                width="30px"
                height="30px"
                alt="close"
                onClick={() => setisOpen(false)}></img>

            </motion.div>
          </>
        </div>
      )}
    </AnimatePresence>
  )
}


export default Open;