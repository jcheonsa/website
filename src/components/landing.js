import React from 'react';
import { motion } from "framer-motion";
import '../App.scss'

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};


const text = {
    initial: {
        opacity: 1,
        y: 0,
    },
    animate: {
        y: 1000,
        opacity: 0,
        transition: {
            duration: 2,
            delay: 1.1,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Landing = () => {
    return (
        <div>
            <div className="initial-loading">
                <motion.div
                    className="loading-screen"
                    initial="initial"
                    animate="animate"
                    variants={blackBox}
                    onAnimationStart={() => document.querySelector("body").classList.add("no-scroll")}
                >
                    <motion.div
                        className='text'
                        variants={text}
                    >
                        <>
                            <motion.img
                                // initial={{ opacity: 0, x: -260 }}
                                // animate={{
                                //     opacity: 1,
                                //     x: 0,
                                //     transition: {...transition },
                                // }}
                                src={require("../images/jtanlogo.gif")} alt="" />
                        </>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -260 }}
                        animate={{
                            opacity: 1,
                            x: -120,
                            transition: { delay: 0.5, ...transition },
                        }}>
                        Best viewed in fullscreen. Mobile-compatibility is WIP.</motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default Landing
