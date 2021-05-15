import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from '../components/sidebar';
import Prevbar from '../components/prevbar';
import Open from '../components/project-handler';

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

const page = {
    initial: {
        opacity: 0,
        scale: 1.6
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const projVariants = {
    // left: {
    //     opacity: 0,
    //     x: -300
    // },
    // right: {
    //     opacity: 0,
    //     x: 300
    // },
    // animate: {
    //     opacity: 1,
    //     x: 0,
    //     transition: {
    //         type: 'spring',
    //         mass: 0.4,
    //         damping: 8,
    //     }
    // },
    // exit: {
    //     opacity: 0,

    // }
}

const tabVariants = {
    tap: {
        opacity: 0,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        scale: 1.2,
    }
}

const pageTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Portfolio = () => {
    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const [canScroll, setCanScroll] = useState(true);

    useEffect(() => {
        document.querySelector("body").classList.add("no-scroll");
    }, [canScroll]);

    const [isSoftware, setSoftware] = useState(true);
    const [isResearch, setResearch] = useState(false);
    function toggle() {
        setSoftware(!isSoftware)
        setResearch(!isResearch)
    }

    const [isOpen, setisOpen] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const [isOpen3, setisOpen3] = useState(false);
    const [isOpen4, setisOpen4] = useState(false);
    const [isOpen5, setisOpen5] = useState(false);
    const [isOpen6, setisOpen6] = useState(false);
    const [isOpen7, setisOpen7] = useState(false);
    const [isOpen8, setisOpen8] = useState(false);
    const [isOpen9, setisOpen9] = useState(false);
    const [isOpen10, setisOpen10] = useState(false);
    const [isOpen11, setisOpen11] = useState(false);
    const [isOpen12, setisOpen12] = useState(false);

    const nextPage = "Contact Page"
    const prevPage = "About Me"

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
                transition={pageTransition}
            >

                <Link to="/abt">
                    <Prevbar prevPage={prevPage} />
                </Link>

                <motion.div className="proj-wrapper">
                    <motion.div variants={page}
                        initial="initial"
                        animate="animate">
                        <h1>Projects</h1>

                        <h5>
                            Below are some projects I've worked on throughout the planning, research, development, and maintenance stages. <br />
                            I employ a variety of programming tools and languages as well as qualitative and quantitative research methodlogies to deliver quality work.
                        </h5>
                    </motion.div>
                    {/******************* CODING *********************/}
                    <AnimatePresence exitBeforeEnter onExitComplete={
                        () => setisOpen(false),
                        () => setisOpen2(false),
                        () => setisOpen3(false),
                        () => setisOpen4(false),
                        () => setisOpen5(false),
                        () => setisOpen6(false),
                        () => setisOpen7(false),
                        () => setisOpen8(false),
                        () => setisOpen9(false),
                        () => setisOpen10(false),
                        () => setisOpen11(false),
                        () => setisOpen12(false)}>
                        {isSoftware && (
                            <div className="category-wrapper">
                                <div className="tab">
                                    <category>Software Development</category>
                                    <motion.img
                                        src={require("../images/tab.svg")}
                                        alt="toggle"
                                        onTap={toggle}
                                        variants={tabVariants}
                                        whileHover="hover"
                                    >
                                    </motion.img>
                                </div>
                                <motion.div
                                    className="wrapper"
                                    variants={projVariants}
                                    initial="left"
                                    animate="animate"
                                    exit='exit'
                                >
                                    <div className="meme"></div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <div className="layer" onClick={() => setisOpen(true)}>
                                            <p>Kaiba.BOT</p>
                                            <span>
                                                <t>JavaScript</t>
                                                <t>Node</t>
                                                <t>mongoDB</t>
                                            </span>
                                        </div>
                                        <img src={require("./projects/assets/kaibabot.png")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <div className="layer" onClick={() => setisOpen2(true)}>
                                            <p>Rosé.BOT</p>
                                            <span>
                                                <t>JavaScript</t>
                                                <t>Node</t>
                                                <t>UX Research</t>
                                            </span>
                                            <span>
                                                <t>mongoDB</t>
                                                <t>Heroku</t>
                                            </span>
                                        </div>
                                        <img src={require("./projects/assets/rosebot.png")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >

                                        <div className="layer" onClick={() => setisOpen3(true)}>
                                            <p>Personal Website</p>
                                            <span>
                                                <t>React</t>
                                                <t>JavaScript</t>
                                                <t>HTML</t>
                                            </span>
                                            <span>
                                                <t>SASS</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/johnnie.jpg")} alt="" />
                                    </motion.div>

                                </motion.div>
                                <motion.div className="wrapper"
                                    variants={projVariants}
                                    initial='right'
                                    exit='exit'
                                    animate='animate'
                                >

                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen4} setisOpen={setisOpen4} />
                                        <div className="layer" onClick={() => setisOpen4(true)}>
                                            <p><i>Spartan Job Search Engine</i></p>
                                            <span>
                                                <t>VB.NET</t>
                                                <t>SQL</t>
                                                <t>UX/UI Research</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/daigo1.png")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen5} setisOpen={setisOpen5} />
                                        <div className="layer" onClick={() => setisOpen5(true)}>
                                            <p><i>Big Bois Key Emporium</i></p>
                                            <span>
                                                <t>HTML</t>
                                                <t>CSS</t>
                                                <t>PHP</t>
                                            </span>
                                            <span>
                                                <t>SQL</t>
                                                <t>Bootstrap</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/bbkp.png")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen6} setisOpen={setisOpen6} />
                                        <div className="layer" onClick={() => setisOpen6(true)}>
                                            <p><i>IEEE SCV CLP Website</i></p>
                                            <span>
                                                <t>HTML</t>
                                                <t>CSS</t>
                                                <t>WordPress</t>
                                            </span>
                                            <span>
                                                <t>Project Management</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/ieee.png")} alt="" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                    {/*******************RESEARCH *********************/}
                    <AnimatePresence exitBeforeEnter onExitComplete={
                        () => setisOpen(false),
                        () => setisOpen2(false),
                        () => setisOpen3(false),
                        () => setisOpen4(false),
                        () => setisOpen5(false),
                        () => setisOpen6(false),
                        () => setisOpen7(false),
                        () => setisOpen8(false),
                        () => setisOpen9(false),
                        () => setisOpen10(false),
                        () => setisOpen11(false),
                        () => setisOpen12(false)}>
                        {isResearch && (
                            <div className="category-wrapper">
                                <div className="tab">
                                    <category>Research</category>
                                    <motion.img
                                        src={require("../images/tab.svg")}
                                        alt="toggle"
                                        onTap={toggle}
                                        variants={tabVariants}
                                        whileHover="hover"
                                    >
                                    </motion.img>
                                </div>
                                <motion.div
                                    className="wrapper"
                                    variants={projVariants}
                                    initial="left"
                                    animate="animate"
                                    exit='exit'
                                >
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen7} setisOpen={setisOpen7} />
                                        <div className="layer" onClick={() => setisOpen7(true)}>
                                            <p>GDPR & Blockchain Technology</p>
                                            <span>
                                                <t>Market Research</t>
                                                <t>Quantitative</t>
                                            </span>
                                            <span>
                                                <t>Technology</t>
                                                <t>Politics</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/ketchupo.webp")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen8} setisOpen={setisOpen8} />
                                        <div className="layer" onClick={() => setisOpen8(true)}>
                                            <p><i>The 'Pop' of K-Pop: Aegyo, Girl Crush, and Gender Identity</i></p>
                                            <span>
                                                <t>Academic Research</t>
                                                <t>Industry Research</t>
                                                <t>Mixed-Methods</t>
                                            </span>
                                            <span>
                                                <t>Culture</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/copythat.jpg")} alt="" />
                                    </motion.div>

                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen9} setisOpen={setisOpen9} />
                                        <div className="layer" onClick={() => setisOpen9(true)}>
                                            <p><i>East vs. West: An IP Trade War</i></p>
                                            <span>
                                                <t>Industry Research</t>
                                                <t>Quantitative</t>
                                            </span>
                                            <span>
                                                <t>Politics</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/scuffed.png")} alt="" />
                                    </motion.div>
                                </motion.div>
                                <motion.div className="wrapper"
                                    variants={projVariants}
                                    initial='right'
                                    animate='animate'
                                    exit='exit'
                                >
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen10} setisOpen={setisOpen10} />
                                        <div className="layer" onClick={() => setisOpen10(true)}>
                                            <p><i>Search Queries on Reddit</i></p>
                                            <span>
                                                <t>UX Research</t>
                                                <t>Qualitative</t>
                                            </span>
                                            <span>
                                                <t>Culture</t>
                                                <t>Technology</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/loveit2.png")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen11} setisOpen={setisOpen11} />
                                        <div className="layer" onClick={() => setisOpen11(true)}>
                                            <p><i>Tautology, Nuance, & Memetics</i></p>
                                            <span>
                                                <t>UX Research</t>
                                                <t>Market Research</t>
                                                <t>Mixed-Methods</t>
                                            </span>
                                            <span>
                                                <t>Culture</t>
                                                <t>Technology</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/autism.jpg")} alt="" />
                                    </motion.div>
                                    <motion.div
                                        className="media"
                                        variants={letter}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Open isOpen={isOpen12} setisOpen={setisOpen12} />
                                        <div className="layer" onClick={() => setisOpen12(true)}>
                                            <p><i>Behind the Glamour of K-Pop</i></p>
                                            <span>
                                                <t>Academic Research</t>
                                                <t>Qualitative</t>
                                            </span>
                                            <span>
                                                <t>Culture</t>
                                                <t>Politics</t>
                                            </span>
                                        </div>
                                        <img src={require("../images/bluebear.webp")} alt="" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                    {/* /************ LIGHTBOX PROJECTS ********* */}
                    <Open isOpen={isOpen} setisOpen={setisOpen} id="KAIBA" />
                    <Open isOpen={isOpen2} setisOpen={setisOpen2} id="ROSÉ" />
                    <Open isOpen={isOpen3} setisOpen={setisOpen3} id="WEBSITE" />
                    <Open isOpen={isOpen4} setisOpen={setisOpen4} id="SPARTAN" />
                    <Open isOpen={isOpen5} setisOpen={setisOpen5} id="BBKE" />
                    <Open isOpen={isOpen6} setisOpen={setisOpen6} id="IEEE" />

                    <Open isOpen={isOpen7} setisOpen={setisOpen7} id="GDPR" />
                    <Open isOpen={isOpen8} setisOpen={setisOpen8} id="KPOP" />
                    <Open isOpen={isOpen9} setisOpen={setisOpen9} id="IPT" />
                    <Open isOpen={isOpen10} setisOpen={setisOpen10} id="REDDIT" />
                    <Open isOpen={isOpen11} setisOpen={setisOpen11} id="MEME" />
                    <Open isOpen={isOpen12} setisOpen={setisOpen12} id="GLAM" />
                </motion.div>

                <Link to="/cnt">
                    <Sidebar nextPage={nextPage} />
                </Link>
            </motion.div>

        </main>
    )
};


export default Portfolio;

