import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from '../components/sidebar';
import Prevbar from '../components/prevbar';

const Experience = () => {

    const nextPage = "Artwork"
    const prevPage = "Portfolio"

    return (
        <main>
            <motion.div
                className="container"
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <Link to="prt">
                    <Prevbar prevPage={prevPage} />
                </Link>
                <div className="proj-wrapper">
                    <h1>Experience</h1>


                    <div className='experience'>
                        <div className='container'>
                            <div className='row1'>
                                <div className='columns'>
                                    <div>
                                        <h2><i>Researcher.</i></h2>
                                        <t><i> Culture / Marketing / Social / Legal & Politics</i></t>
                                        <br />
                                        <t><i><b>Primary research methodologies utilized:</b> literature reviews, ethnography, in-depth interviews, user persona testing </i></t>
                                        <br />
                                    </div>
                                    <div>
                                        <h3><i>About.</i></h3>
                                        <t><i>Discusses the marketing, business model, and ethics surrounding the production of Korean Popular music.</i></t>
                                    </div>

                                </div>
                                <div className='columns'>
                                    <div>
                                        <h2><i>Developer.</i></h2>
                                        <p>enene</p>
                                    </div>
                                    <div>
                                        <h2><i>Data Analyst.</i></h2>
                                        <p>enene</p>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div>
                                        <h2><i>Project Manager.</i></h2>
                                        <p>enene</p>
                                    </div>
                                    <div>
                                        <h2><i>Data Analyst.</i></h2>
                                        <p>enene</p>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div>
                                        <h2><i>Data Analyst.</i></h2>
                                        <p>enene</p>
                                    </div>
                                    <div>
                                        <h2><i>Data Analyst.</i></h2>
                                        <p>enene</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Link to="/art">
                    <Sidebar nextPage={nextPage} />
                </Link>
            </motion.div>

        </main>
    )
}

export default Experience;