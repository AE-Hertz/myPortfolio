import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";
import Card from "./ui/card";

function Bio() {
    return (
        <section id="bio" className="flex max-w-4xl flex-col gap-6 pt-20">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-3xl lg:text-4xl"
            >
                Bio
            </motion.h2>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                {BIO.map((bio, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <Card className="mb-2">
                            <p className="text-lg lg:text-xl">{bio}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Bio;
