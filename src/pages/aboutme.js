import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from '../components/sidebar';
import Prevbar from '../components/prevbar';
import ProgressiveImage from 'react-progressive-image'

const letter = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 8,
            duration: 1.5,
            delay: 1,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const projVariants = {
    left: {
        opacity: 0,
        x: -300
    },
    right: {
        opacity: 0,
        x: 300
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
        }
    },
    exit: {
        opacity: 0,

    }
}

const bodyVariants = {
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
            type: 'spring',
            mass: 0.5,
            damping: 8,
            duration: 1,
            delay: 0.6,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const pfpVariants = {
    initial: {
        y: -300,
        opacity: 0,
        scale: 1.6
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 8,
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
        },
    },
}

const AboutMe = ({ imageDetails, image }) => {

    const nextPage = "Portfolio"
    const prevPage = "Home"

    return (
        <main>
            <motion.div
                className="container"
                initial='initial'
                animate='animate'
                exit={
                    {
                        opacity: 0
                    }
                }
            >
                <Link to="/">
                    <Prevbar prevPage={prevPage} />
                </Link>
                <div className="proj-wrapper">

                    <div className='experience'>
                        <div className='container'>
                            <div className='row1'>
                                <div className='columns'>
                                    <motion.div className='col1' variants={bodyVariants}>
                                        <h2><i>I'm a storyteller. </i> :')</h2>
                                        <h6>I tell stories in English. I tell stories in code. I tell stories in music.</h6>
                                        <p>
                                            I'm an academic researcher with a passion for tech & people. I use a mix of qualitative and quantitative research methodologies to uncover user motivations and pain points to build better products.
                                            How do we use technology to enhance our lives? How much further can we innovate? I'm an artist and code is my canvas.
                                        </p>
                                        <p>
                                            What really excites me about my work is focusing on what matters most: <b>people</b>.
                                            Looking for innovative, unique, and creative ways of exposing problems in the user experience.
                                            To me, putting people at the center of product design is a huge factor in determining it's success.
                                            It inspires product design, evaluates problems, and ultimately measures the real impact we have on the world.
                                        </p>
                                        <p><b>Currently seeking opportunites in UI/UX Research and Software Development.</b></p>
                                    </motion.div>
                                    <motion.div className='col2' variants={pfpVariants}>
                                        <div className='image-container'>
                                            <div className='thumbnail'>
                                                <div className='frame'>
                                                    <div className='media pfp'>
                                                        <ProgressiveImage
                                                            src={require("../images/pfp3.jpg")}
                                                            placeholder={require("../images/zucker.webp")}>
                                                            {(src) => (
                                                                <motion.img src={src} />
                                                            )}
                                                        </ProgressiveImage>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="wrapper"
                                    variants={projVariants}
                                    initial="left"
                                    animate="animate"
                                    exit='exit'
                                >
                                    <motion.div
                                        className="text"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <h2>Research.</h2>
                                        <p>
                                            <b><i>Some of my preferred tools:</i></b> <br />
                                            IDI, Ethnography, Persona, Surveys, A/B Testing, Usability Testing, Prototyping
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="text"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <h2>Programming.</h2>
                                        <p>
                                            <b><i>Some of my preferred tools:</i></b> <br />
                                            HTML, CSS, SCSS, JS, Node, React, mongoDB, SQL, VB.NET
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="text"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <h2>Art & Design.</h2>
                                        <p>
                                            <b><i>Some of my preferred tools:</i></b> <br />
                                            Piano, Ableton, Figma. <br /> Graphite, Wireframing, Pen & Paper.
                                        </p>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/prt">
                    <Sidebar nextPage={nextPage} />
                </Link>
            </motion.div>
        </main >
    )
}

export default AboutMe;