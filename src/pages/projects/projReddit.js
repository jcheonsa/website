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
        scale: 1.6
    },
    animate: {
        y: -20,
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
                                <span> // Research // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span className='first' variants={firstName}>
                                    <motion.span className='K' variants={letter}>Searching on Reddit.</motion.span>
                                </motion.span>
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
                            <i>a look at how Reddit handles user search queries</i>
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
                                <t><i> Culture / Social / Technology</i></t>
                                <br />
                                <t><i><b>Primary research methodologies utilized:</b> surveys, usability testing, A/B testing </i></t>
                                <br />
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>I look at Reddit's current method of generating search results and attempt to improve on it's design. </i></t>
                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            I wanted to understand be able to explain the importance of search functionalities as part of any company's website; not just Google or Bing.
                        </p>
                        <p>
                            <b>Some questions that needed answering.</b>
                            <li>What are the most commonly made search queries?</li>
                            <li>Are the search results relevant?</li>
                            <li>What are the most used filters?</li>
                            <li>What are some key factors that make Reddit's search engine unique and user-friendly?</li>
                            <li>How can we maintain search result quality and give the users what they want quicker?</li>
                            <li>How do we deal with noisy data?</li>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
