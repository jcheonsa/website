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
                                <span> // Software Development // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span className='K' variants={letter}>East vs West: </motion.span>
                                <motion.div className='K' variants={letter}>An Intellectual Property Trade War</motion.div>
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
                            <i>a discussion on corporate governance in an age of hegemonic rivalry between two global superpowers</i>
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
                                <t><i>Socioeconomics / Law & Politics </i></t>
                                <br />
                                <t><i><b>Primary research methodologies utilized:</b> in-depth interviews, literature review</i></t>

                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>A critical review of the lures and effects of economic nationalism, state capitalism and sovereigns as shareholders.</i></t>
                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            In 2017, China’s Ant Financial sought to takeover take-over a United States financial services
                            corporation, MoneyGram, outbidding a competing offer by a significant margin - providing a
                            boon to shareholders.
                            </p>
                        <p>
                            The transaction was cancelled due to national security grounded US regulatory objection - over the possibility that a foreign buyer would
                            manage the busines in favor of the home jurisdiction - which trumped shareholder value in the home of shareholder-value governance.
                            </p>
                        <p>
                            The rejection of Ant's offer constituted a quintessential example of the hegemonic rivalry's impact on corporate governance. The failed bid was proximately caused by the transformative era of hegemonic rivalry between the current dominant global power, the United States of America, and its ascendant challenger, the People's Republic of China.
                            </p>
                        <p>
                            This was not the first time national security concerns played a proximate cause in foreign investments and the governance of a US corporation, and would likely not be the last.
                            </p>
                        <p>
                            This paper focuses on China's efforts in trying to restore itself and replace the US as the world's major dominant economic, political, and military power.
                        </p>
                        <h2 className='title'>
                            The how.</h2>
                        <p>
                            By focusing on existing research, policy, and current events, we bring focus to the legal/political implications and background to intellectual property issues that come with trade tensions as consequence of this rivalry. <br />
                            I conducted an extensive comparative analysis on American and Chinese law, practice, and policies to identify what parts specifically are unfair toward one or the other.
                        </p>
                        <p>
                            By not just reiterating, but uncovering the specific parts of Chinese or American law/polices that facilitate IP infringement, this manuscript serves as a sufficient legal analysis to identify any unfairness in trade agreements between the two global superpowers.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
