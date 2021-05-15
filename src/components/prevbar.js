import React from 'react'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const btnVariants = {
    hover: {
        scale: 1.1,
        x: "-80px"
    },
};

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-40px"
    },

    hover: {
        opacity: 1,
        x: "13px",
        y: 0,
        scale: 1.1,
    },
}

const barVariants = {
    initial: {
        opacity: 0,
        x: "-200px",
    },
    animate: {
        opacity: 1,
        x: "0px",
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 8,
            duration: 1.5,
            delay: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },

}

const Prevbar = (props) => {

    return (
        <main>
            <motion.div className='sidebar prev'
                variants={barVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
            >
                <motion.item
                    initial="initial"
                    variants={pageVariants}
                    transition={transition}
                >
                    <b> {props.prevPage} </b>
                </motion.item>
                <motion.div
                    className="arrow-down"
                    transition={transition}
                    variants={btnVariants}
                >
                    <img
                        src={require("../images/down-arrow.svg")}
                        alt="page arrow"
                    >
                    </img>
                </motion.div>
            </motion.div >
        </main>
    )
}

export default Prevbar
