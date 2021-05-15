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
                                <span> // Project Management & Software Development // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span className='K' variants={letter}>IEEE SCV CLP Website </motion.span>
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
                            <i>connecting university students with internship opportunities</i>
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
                                <t><i>HTML / CSS / PHP / WordPress  </i></t>
                                <br />
                                <t><i><b>Soft skills:</b> Project management, risk management, KPI and ROI analysis, leadership </i></t>
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>A website part of the IEEE domain to serve as the main hub for corporate partners to set up campus events as well as internship-seeking university students to find out more information on the Corporate Liaison Program (CLP).</i></t>
                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            With over ~12,000+ members and 32 chapters, IEEE's Corporate Liason Program needed a hub for section members, corporate partners, and university partners to easily access information on programs or events related to the CLP. <br />
                        </p>

                        <p>
                            <li> <i>Objectives</i>
                                <ul>
                                    - Foster a dialogue between the Silicon Valley (SCV) Section members and corporations. <br />
                                    - Cultivate relationships with CLP liaisons. <br />
                                    - Together, create visionary programs with values for corporations, academia, and IEEE alike. <br />
                                </ul>
                            </li>
                        </p>
                        <h2 className='title'>
                            The how.</h2>
                        <p>
                            We utilized many of IEEE's WordPress templates to give us a general idea of what the website should look like. We needed to make sure it fit their format, requirements, and needs before executing.
                            We also ensured mobile compatability, ported many of IEEE's existing WordPress pages/modules to HTML.
                        </p>
                        <h2 className='title'>
                            Challenges.
                        </h2>
                        <p>
                            One of the major challenges our team faced was a constantly-changing project scope. <br />
                            It was difficult to measure progress when our goal post kept moving. <br />
                            With cross-functional teams, it is difficult to convince everyone to prioritize certain modules over others. <i>"I'm working on this right now, can you talk to me about that later?"</i> <br />
                            The most important thing is to communicate and hold consistent scheduled meetings to check in with clients, partners, and team members to make sure everyone is on the same page.
                        </p>

                        <p><b><i>Project Insights</i></b><br />
                            Maybe it's my musical side speaking but the project development lifecycle is a lot like an orchestra. You have all the different instruments, musicians, and the conductor who are all skilled and specialized at their own instruments.
                            But it does not matter how good any of them are if they're not playing when they need to, ie. you need good sheet music. Everyone has got to be on the same page to have any hope at executing project or performing Beethoven's 5th. <br />
                            But every individual is <i>instrumental</i> to the project team and deserves to be heard.
                        </p>
                        <p>
                            At the end of the day, it's about the client and making sure their requirements, needs, and deliverables are met in a timely manner.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
