import React, { useEffect, useState } from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import AnimatedLetter from "./AnimatedLetters/AnimatedLetter";
import IconButton from "./ui/icon-button";
import Badge from "./ui/badge";

function Footer() {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 200);
    }, []);

    return (
        <footer className="mb-8 mt-20">
            <div className="flex flex-col items-center justify-center gap-3">
                <Badge variant="outline">Let's build something meaningful</Badge>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.95 }}
                    className="my-8 font-glaser text-xl lg:text-2xl xl:text-3xl"
                >
                    <AnimatedLetter letterClass={letterClass} strArray={"Abhinandan".split("")} idx={15} />
                </motion.p>
            </div>

            <div className="flex items-center justify-center gap-4">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.12 }}
                    >
                        <IconButton label={`link-${index}`} className="text-white">
                            {link.icon}
                        </IconButton>
                    </motion.a>
                ))}
            </div>

            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">&copy; AE-Hertz | All rights reserved.</p>
        </footer>
    );
}

export default Footer;
