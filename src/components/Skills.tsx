import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import Card from "./ui/card";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
    },
};

function Skills() {
    return (
        <section id="skills" className="container mx-auto">
            <h2 className="mb-8 mt-20 text-center text-4xl font-semibold">Skills</h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-2"
            >
                {SKILLS.map((skill, index) => (
                    <motion.div variants={itemVariants} key={index}>
                        <Card className="flex items-center justify-between px-4 py-3">
                            <div className="flex items-center">
                                <div className="mr-4">{skill.icon}</div>
                                <h3 className="text-lg font-medium">{skill.name}</h3>
                            </div>
                            <div className="text-sm font-semibold text-stone-200">{skill.experience}</div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;
