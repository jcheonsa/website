import React from 'react'
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const navVariant = {
    hover: {
        x: "2vh"
    }
}

function contact({ image }) {

    return (
        <main>
            <div className="contact">
                <motion.div
                    className="icon-thumbnail"
                    ref={image}
                >
                    <motion.div className='frame'
                        style={{
                            backgroundColor: "#d6c9d1"
                        }}>
                        <a href='https://github.com/jcheonsa'>
                            <ProgressiveImage
                                src={require("../images/github.svg")}
                                placeholder={require("../images/github.svg")}>
                                {(src) => (
                                    <motion.img
                                        src={src}
                                        alt='GitHub'
                                        variants={navVariant}
                                        whileHover="hover"
                                        transition={transition}
                                        style={{
                                            backgroundColor: "#d6c9d1"
                                        }}
                                    />
                                )}
                            </ProgressiveImage>
                        </a>

                    </motion.div>
                    <motion.div
                        className='frame'
                        style={{
                            backgroundColor: "#648cbd"
                        }}>
                        <Link to={`/prt`}>
                            <ProgressiveImage
                                src={require("../images/linkedin.svg")}
                                placeholder={require("../images/github.svg")}>
                                {(src) => (
                                    <motion.img
                                        src={src}
                                        alt='GitHub'
                                        variants={navVariant}
                                        whileHover="hover"
                                        transition={transition}
                                        style={{
                                            backgroundColor: "#648cbd"
                                        }}
                                    />
                                )}
                            </ProgressiveImage>
                        </Link>
                    </motion.div><motion.div
                        className='frame'
                        style={{
                            backgroundColor: "#bd6060"
                        }}>
                        <a href={`mailto:johnnie.tan27@gmail.com`}>
                            <ProgressiveImage
                                src={require("../images/email.svg")}
                                placeholder={require("../images/github.svg")}>
                                {(src) => (
                                    <motion.img
                                        src={src}
                                        alt='email'
                                        variants={navVariant}
                                        whileHover="hover"
                                        transition={transition}
                                        style={{
                                            backgroundColor: "#bd6060"
                                        }}
                                    />
                                )}
                            </ProgressiveImage>
                        </a>
                    </motion.div>


                    <motion.div
                        className='frame'
                        style={{
                            backgroundColor: "#679e62"
                        }}>
                        <Link to={`/prt`}>
                            <ProgressiveImage
                                src={require("../images/discord.svg")}
                                placeholder={require("../images/github.svg")}>
                                {(src) => (
                                    <motion.img
                                        src={src}
                                        alt='discord'
                                        variants={navVariant}
                                        whileHover="hover"
                                        transition={transition}
                                        style={{
                                            backgroundColor: "#679e62"
                                        }}
                                    />
                                )}
                            </ProgressiveImage>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default contact
