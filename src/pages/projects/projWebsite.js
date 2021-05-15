import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";


//Components
import ScrollForMore from "../../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: -20,
        opacity: 0,
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

const Project = ({ imageDetails }) => {
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
                {/* <img src={require('../../images/rose.jpg')} /> */}
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
                                <span> // Web Development // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span variants={letter}>P</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>r</motion.span>
                                <motion.span variants={letter}>t</motion.span>
                                <motion.span variants={letter}>f</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>i</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                            </motion.span>
                            <motion.span className='last' variants={lastName}>
                                <motion.span variants={letter}>W</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>b</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>i</motion.span>
                                <motion.span variants={letter}>t</motion.span>
                                <motion.span variants={letter}>e</motion.span>
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
                            <i>a hub for my work</i>
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
                                <t><i> HTML / CSS/SASS / JS / React</i></t>
                                <br />
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>Just a simple website to practice web development and showcase some of my work.</i></t>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
