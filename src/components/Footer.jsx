import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import AnimatedLetter from "./AnimatedLetters/AnimatedLetter";

function Footer() {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 200);
    }, []);

    return (
        <>
            <div className="mb-8 mt-20 ">
                <div className="flex items-center justify-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="my-20 font-glaser text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl "
                    >
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={"Abhinandan".split("")}
                            idx={15}
                        />{" "}
                    </motion.p>
                </div>
                <div className="flex items-center justify-center gap-8 ">
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <motion.a
                            className="cursor-pointer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.5 }}
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
                <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                    &copy; AE-Hertz | All rights reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;
