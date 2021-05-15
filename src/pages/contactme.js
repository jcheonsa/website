import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Prevbar from '../components/prevbar';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

function Input(props) {
    return props.field === "input" ? (
        <div className="input-wrapper">
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    ) : (
        <div className="input-wrapper input-wrapper-big">
            <textarea placeholder={props.placeholder} />
        </div>
    );
}

const ContactMe = () => {

    const prevPage = "Portfolio"

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
                <Link to="/prt">
                    <Prevbar prevPage={prevPage} />
                </Link>

                <div className='contact-me'>
                    <div className='detailed-information'>
                        <motion.div className='container' variants={letter} initial="initial" animate="animate">
                            <div className='row1'>
                                <div>
                                    <h2>Send me a message!</h2>
                                    <p>Feel free to get in touch with me with anything related to my work, new opportunities, or you can just say hi!
                                       <br />
                                        I'll get back to you as soon as possible.</p>
                                    <p>See ya round!</p>
                                    <p><b>NOTE: </b>this is just a template, it's not functional yet!</p>
                                </div>
                                <div>
                                    <Input id="name" type="text" placeholder="Enter your name" field="input" />
                                    <Input id="email" type="email" placeholder="Enter your email" field="input" />
                                    <Input id="subject" type="text" placeholder="Subject" field="input" />
                                    <Input id="message" type="text" placeholder="Message" field="textarea" />
                                        <button>Submit</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </main >
    )
}

export default ContactMe;