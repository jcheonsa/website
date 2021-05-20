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

const imgVariants = {
    hover: {
        scale: 1,
    }
}

const Project = () => {
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
                                <span> // Web Development/UI Design // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span className='K' variants={letter}>Sugarcheek Bakery Website </motion.span>
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
                            <i>UI/UX Design</i>
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
                                <t><i> HTML / CSS / JS / Figma</i></t>
                                <br />
                                <t><i> An application of webpage development and managing a SQL database for customer transactions as well as inventory.</i></t>
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>A mock online store front specializing in baked goods. Features fully functional shopping cart, transaction, and feedback system.</i></t>
                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            A local business looking to establish an online presence. Allow site visitors to look at past products, make an order, leave feedback, etc.<br />
                        </p>
                        <p>
                            Designed a prototype on Figma with screenshots of some of the frames below:
                        </p>
                        <div>
                            <div className="container">
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar1.png")}></img>
                                </motion.div>
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar2.png")}></img>
                                </motion.div>
                            </div>
                            <div className="container">
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar5.png")}></img>
                                </motion.div>
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar8.png")}></img>
                                </motion.div>
                            </div>
                            <div className="container">
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar3.png")}></img>
                                </motion.div>
                                <motion.div variants={imgVariants} whileHover="hover">
                                    <img src={require("./assets/sugarIMG/sugar4.png")}></img>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
