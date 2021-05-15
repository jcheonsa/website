import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";


//Components
import ScrollForMore from "../../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

const lastName = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
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

const ProjKaiba = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div className='single'
      onAnimationComplete={() => setCanScroll(true)}
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='proj-header'>
        <div className='proj-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='tab'>
                <span> // Software Development // </span>
              </div>
            </motion.div>
            <motion.div className='project-name'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>K</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>b</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>.</motion.span>

              </motion.span>
            </motion.div>
            <motion.div
              className='project-category'
              initial={{ opacity: 0, x: -260 }}
              animate={{
                opacity: 1,
                x: -120,
                transition: { delay: 1.2, ...transition },
              }}
            >
              Discord Bot
                </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{
            opacity: 1,
            y: 40,
            transition: { delay: 1.2, ...transition },
          }}>
          <ScrollForMore />
        </motion.div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row1'>
            <div className='columns'>
              <div>
                <h3><i>Details.</i></h3>
                <t><i> JS / Node / mongoDB / Writing / Design / 1st and 3rd party API</i></t>
                <br />
                <t><i><b>Current third-party APIs being utilized:</b> YGOPRODeck API, YouTube Search </i></t>
              </div>
              <div>
                <h3><i>About.</i></h3>
                <t><i>Discord server moderation bot. Also comes with an optional RPG system featuring factions, economy, progression, etc.</i></t>
              </div>
            </div>
            <h2 className='title'>
              The what & why.
            </h2>
            <p>
              Kaiba is a Discord bot that includes many server moderation tools including but not limited to:
              role management, voice/text channel management, announcements, and scheduled reminders.
            </p>
            <p>
              Utilizes CanvasJS and mongoDB to allow users to dynamically create, save, and share their own duelist cards on the Discord API.
              Streamlines server management/moderation for server admins by automating almost all of the processes that would normally require clicking through a bunch of windows.
            </p>
            <h2>
              The how.
            </h2>
            <p>
              Kaiba is my first Discord bot and also my first major coding project. Initially, I wanted to create a simple data aggregator to listen to and record user inputs and run some scripts. Instead of paying any particular attention to JS best practices, Kaiba started out with very rudimentary code that just "got the job done".
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjKaiba;
