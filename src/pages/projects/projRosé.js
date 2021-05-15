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
                                <span> // Software Development // </span>
                            </div>
                        </motion.div>
                        <motion.div className='project-name'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span variants={letter}>R</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>é</motion.span>
                                <motion.span variants={letter}>.</motion.span>
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
                            <i>"yes <b>that</b> Rosé"</i>
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
                                <t><i> JS / Node / mongoDB / Heroku / 1st and 3rd party API</i></t>
                                <br />
                                <t><i><b>Current third-party APIs being utilized:</b> YouTube Search, Instagram Basic Display, Spotify Web, Genius Lyrics, lastFM, Google Translate</i></t>
                                <br />
                            </div>
                            <div>
                                <h3><i>About.</i></h3>
                                <t><i>A bot that allows users to query and queue up links from YouTube, Spotify (WIP), and SoundCloud to stream audio to Discord voice channels.</i></t>
                                <br />
                                <t><i><b>New features are being added all the time:</b> Playback methods, queueing, searching, shuffle, playlist methods, scrobbling, lyrics, instagram, reminders, and text translations.</i></t>


                            </div>
                        </div>
                        <h2 className='title'>
                            The what & why.</h2>
                        <p>
                            Social media platforms saw record amounts of users hopping online. One of these platforms include Discord.
                            <br />
                            What started as a simple jukebox bot for my friends and I to jam out together to soon began to grow in scope as more and more people found themselves stuck indoors because of the COVID-19 pandemic.
                            <br />
                            Now hosted on Heroku, Rosé is serving hundreds of users across the Discord platform by providing quick and responsive audio streaming 24/7.
                            </p>
                        <h2 className='title'>
                            Okay, but how does she work?</h2>
                        <p>
                            Music queues are unique per server so people don't end up listening to another server's playlist.
                        </p>
                        <p>
                            Using the Discord API, Rosé listens for text-based events that start with her command prefix (by default it's "&"). Searching for a video on YouTube through Rosé is literally as simple as typing in one keyword followed by your search object. <br />
                            Let's say a user types in `&search Queen Bohemian Rhapsody`. `Queen Bohemian Rhapsody` are the specified query parameters sent to the YouTube API which then identifies and returns a collection of matching video search results.
                        </p>
                        <p>
                            This process is essentially the same for Rosé's interaction with all of the other APIs. I'm able to specific different query parameters so long as the associated API allows. Within the confines of Discord API, I'm able to make custom UI and buttons to act as event listeners to for example, like a photo on Instagram.
                        </p>
                        <h2>
                            Planning.
                        </h2>
                        <p>
                            The Discord API is most often wrapped by two libraries developers can choose from, <b>Discord.js for JS</b> and Discord.py for Python. I chose JS because I already had foundational exposure to the language through web development. Discord.js also had much better documentation than Discord.py
                            <br />
                            The real dealbreaker for me was JS's support for event emitters, allowing me to get pretty creative with listening to the different events Discord API had available. And with Node.js and NPM, I could do everything a scripting language like Python could do.
                            <br />
                            The original scope of the project did not include the data scraping Rosé would eventually be capable of in the coming months.
                            <br />
                            I also hosted the bot locally for much of its early deployment, it was only until a lot of users wanted to use the bot when I decided to look into cloud hosting services.
                        </p>


                        <h2>
                            Rosé's Design & Testing.
                        </h2>
                        <p>
                            The user was at the center of Rosé's design. <b>It was always about enhancing our experience on Discord together.</b> We could play games together and chat together, now we can listen to music together while studying and working from home. <br />
                            Throughout different development stages, I conducted usability tests, module prototyping, and surveys in order to not only meet, but exceed expectations for a Discord music bot.
                        </p>
                        <div>
                            <p><b><i>Research - Streaming Music.</i></b><br />
                                1) What features are essential to a jukebox, radio, and/or music streaming app? <br />
                                <i>All methods of controlling media playback like play, pause, skip, shuffle, volume control, etc. Searching up songs.</i> <br />
                                2) Sometimes it's difficult to tell when a song ends and the next one begins.<br />
                                <i>When songs begin to sound too similar, automatically notify users when the next song begins.</i><br />
                                3) I'm tired of adding songs one by one. Why can't I add a playlist to the music bot?<br />
                                <i>Be able to distinguish, query, and process individual video URLs from playlist URLs. (including timestamps)</i><br />
                                4) How long is this song? I don't want to accidentally add a 10-hour version or a music video.<br />
                                <i>The bot needs to return the duration of the video. Search results on Discord should include them.</i><br />
                                5) Sure, we can search results on YouTube but what happened to the personalization afforded by Kaiba.bot?<br />
                                <i>People love creating custom creations, including playlists. Allow users to read & write local playlists almost like a traditional jukebox.</i><br />
                            </p>
                            <div className="container">
                                <div>
                                    <img src={require("./assets/roséIMG/searchstep1.png")}></img>
                                </div>
                                <div>
                                    <img src={require("./assets/roséIMG/searchstep2.png")}></img>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="container">
                                <div>
                                    <img src={require("./assets/roséIMG/insta-UI.png")}></img>
                                </div>
                                <div>
                                    <img src={require("./assets/roséIMG/insta-UI2.png")}></img>
                                </div>
                            </div>
                            <div>
                                <p><b><i>Research - Browsing Instagram.</i></b><br />
                                1) What information should be available to users when browsing Instagram through Rosé and how should they be presented in the UI? <br />
                                    <i>Within the constraints of the Discord API: description, comments, likes, post URLs.</i> <br />
                                2) What write access methods are possible?<br />
                                    <i>Likes, (un)follows, comments, posting.</i><br />
                                3) How would <i>surfing</i> work on the Discord API?
                                <i>The solution I came up with is by storing the search results in an array, and using Discord's emote reactions as buttons to navigate through the array.</i>
                                </p>
                            </div>
                        </div>
                        <div className="columns">
                            <div>
                                <p><b><i>Research - Querying Spotify.</i></b><br />
                                1) What information should be available to users when browsing Spotify through Rosé and how should they be presented in the UI? <br />
                                    <i>Within the constraints of the Discord API: description, top tracks, albums, spotify page URLs, followers, likes, etc.</i> <br />
                                2) What write access methods are possible?<br />
                                    <i>Because these types of methods rquire authentication, Rosé instead allows Discord users to create local playlists, favorite artists lists, etc. using mongoDB.</i><br />
                                </p>
                            </div>
                            <div>
                                <div className="container">
                                    <img src={require("./assets/roséIMG/spotify-UI.png")}></img>
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div>
                                <p><b><i>The problem with existing Discord jukeboxes.</i></b><br />
                                    Popular music bots had basic features like playback, shuffling, and queueing. Other lacked some of those features in favor of complex functions like playlist handling, searching, or seeking. <br />
                                    Below is a use case example.
                                    <br />
                                    <b><u>Discord music bot:</u></b> <br />
                                    <i>
                                        1) I want to listen to John Mayer with my friends. <br />
                                        2) Open up your browser and go to YouTube.<br />
                                        3) Search results for John Mayer. <br />
                                        4) Copy the url from YouTube.  <br />
                                        5) Paste the url into Discord. <br />
                                    </i>
                                </p>
                            </div>
                            <div>
                                <p><b><i>The solution in the form of Rosé.</i></b><br />
                                    <b>Rosé acts as the liaison</b> between Discord and the YouTube API, allowing users to do everything from searching to queueing and playing songs in one place - no browser required. Giving you time to do other things!
                                    <br />
                                    <b><u>Rosé.bot:</u></b> <br />
                                    <i>
                                        1) I want to listen to John Mayer with my friends. <br />
                                        2) Type '&search John Mayer' on Discord.<br />
                                        3) Select the song by pressing a key. <br />
                                        4) Groove hard because John Mayer slaps. <br />
                                        5) Cry because I'm never going to be as talented as John Mayer. <br />
                                    </i>
                                </p>
                            </div>
                        </div>

                        <h2>
                            Deployment, Operation & Maintenance.
                        </h2>
                        <p>
                            The main challenge right now is troubleshooting rate-limiting issues from YouTube's API caused by the rapid influx of search queries. One of the proposed solutions is to set cookies for Rosé.
                        </p>
                        <div className="columns">
                            <div>
                                <p>
                                    Another challenge is because Rosé can only ever be connected to one voice channel per Discord server at a time, what happens when one group wants to listen to pop music but the another wants to listen to bluegrass?
                                </p>
                            </div>
                            <div>
                                <div className="container">
                                    <img src={require('./assets/roséIMG/lisabot.png')}></img>
                                    <p>
                                        More bots.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
