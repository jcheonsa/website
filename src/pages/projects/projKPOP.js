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
                                <motion.span className='K' variants={letter}>The 'Pop' of K-POP: </motion.span>
                                <motion.div className='K' variants={letter}><i>Aegyo</i>, Girl Crush, and Gender Identity</motion.div>
                            </motion.span>

                        </motion.div>
                        <motion.div
                            className='project-category'
                            initial={{ opacity: 0, x: -260, y: 20 }}
                            animate={{
                                opacity: 1,
                                x: -120,
                                y: 16,
                                transition: { delay: 1.2, ...transition },
                            }}
                        >
                            <i>an empirical approach to idol marketing</i>
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
                                <t><i> Academic / Culture / Marketing / Social</i></t>
                                <br />
                                <t><i><b>Primary research methodologies utilized:</b> surveys, in-depth interviews, focus groups, ethnography, A/B testing, user persona testing, cross-sectional examination, literature review</i></t>
                                <br />
                                <t><i><b>Some keypoints:</b> Cultural technology, how idols/products are marketed, what attracts consumers, South Korean (gender) identity, parasocial relationship </i></t>
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>An exhaustive study of the South Korean Entertainment industry, it's history and how Korean Popular Music has become one of the country's largest and most successful exports of the century.</i></t>
                                <br />
                                <t><i><b>Publishing date is currently postponed until Q4 2021.</b></i></t>

                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            This study provides insight into the role of relationship marketing, social media, and culture by investigating how different types of interactions influence customers' activity.
                            </p>
                        <p>
                            There are very few deep studies into the history of the South Korean Entertainment industry and the role gender identity plays in it's successful product marketing.
                            I wanted to create a <b>systematic approach to understanding consumer motivations</b>.
                            </p>
                        <p>
                            South Korean gender identity, relations, and history have a profound influence on the marketing, portrayal, and ultimate success of K-Pop idols. We just needed the empirical data to prove it. <br />
                            <b>Korean Popular Music as more than just a product of an industrializing neoliberal South Korea.</b>
                        </p>

                        <h2 className='title'>
                            The how.</h2>
                        <p>
                            <li>Defining <i>aegyo</i> (cuteness) as a "product" of Korea.
                                <ul>
                                    - Understand and be able to contextualize Korean gender identity, relations, and history. <br />
                                    - Consume hundreds of hours of Korean entertainment products in both audio and visual mediums noting specific gestures, visual codes, patterns, and other commonalities.
                                </ul>
                            </li>
                            <li>What makes a successful K-Pop product?
                                <ul>
                                    - Look at album sales, video clicks, shares, tags, followers, etc. <br />
                                    - How do K-Pop idols compare to each other as well as other foreign artists? <br />
                                    - Interviewees reveal what draws them to particular groups. <br />
                                    - How do companies and idols leverage social media and other technology to create a more unique customer experience?
                                </ul>
                            </li>
                            <li>K-Pop's perception by domestic and international consumers.
                                <ul>
                                    - Conduct surveys and interviews with different consumers of demographics. <br />
                                    - What were/are people's first impressions of K-Pop?
                                </ul>
                            </li>
                            <li>How is South Korean culture & people perceived and what, if any, are the effects on this perception by K-Pop?
                                <ul>
                                    - Are there any differences in what cultures value more? (visuals, talent, sound, etc.)  <br />
                                    - What are people's general thoughts on South Korea with and without exposure to Korean entertainment, culture, etc.? <br />
                                    - Determine the changes in how South Korea is perceived after consuming K-Pop products. (are there any behavioral or observable patterns/changes)
                                </ul>
                            </li>
                        </p>

                        <p><b><i>Mixed-Method Research</i></b><br />
                            For the survey portion, I had created a Qualtrics survey and distributed the questionnaire online on social media sites like Reddit, Facebook, and Discord. I wanted to get a variety of responses from different demographics as well as from individuals with varying levels of exposure to the Korean Entertainment Industry.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
