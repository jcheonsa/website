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
                                <span> // Research // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span className='K' variants={letter}>GDPR & Blockchain Technology </motion.span>
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
                            <i>conflict where conflict shouldn't be</i>
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
                                <t><i>Market Research / Law & Politics / Technology </i></t>
                                <br />
                                <t><i><b>Primary research methodologies utilized:</b> surveys, in-depth interviews, focus groups, literature review</i></t>

                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>A study of blockchain technology, its role in data privacy, and complications with the EU's General Data Protection Regulation.</i></t>
                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            In 2018, Facebook's Mark Zuckerberg had testified in Congress and the European Parliament on data protection amid Cambridge Analytica gaining unauthorized access to approximately 87 million Facebook users' personal information. <br />
                            Not long after, the European Union implemented the <b>General Data Protection Regulation</b> to give identifiable persons within the EU more control over their data and limiting the collected data to only what is deemed necessary. <br />
                            The crux of the conflict is between the protection of individual user's data and the decentralized, distributed, immutability of blockchain technology.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
