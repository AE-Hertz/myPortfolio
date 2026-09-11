import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import Card from "./ui/card";

function WorkExperience() {
    return (
        <section className="pt-20" id="work">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-4xl font-semibold tracking-tighter"
            >
                Work Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.12 }}
                        key={index}
                    >
                        <Card className="h-full">
                            <h3 className="text-xl font-semibold">
                                {experience.title}
                            </h3>
                            <p className="text-md text-stone-200">{experience.company}</p>
                            <p className="text-sm text-stone-300">{experience.duration}</p>
                            <p className="mt-3 text-sm text-stone-100">{experience.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default WorkExperience;
