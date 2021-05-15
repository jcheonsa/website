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
                            <img src={require("../images/jtanlogo.gif")} alt=""
                                width="200px"
                                height="200px">
                            </img>
                        </>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Landing
