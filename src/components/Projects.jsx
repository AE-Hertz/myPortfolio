import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

function Projects() {
    let boxVarient = {};
    let textVariant = {};

    const isMobile = window.innerWidth <= 1020;
    console.log(isMobile);

    if (isMobile) {
        boxVarient = {
            hover: {
                scale: 1.1,
            },
            initial: {
                opacity: 1,
                y: -20,
            },
            inView: {
                opacity: 1,
                y: 0,
            },
        };

        textVariant = {
            initial: {
                opacity: 0,
                y: 20,
                scale: 0.8,
            },
            inView: {
                opacity: 0.8,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                },
            },
        };
    } else {
        boxVarient = {
            hover: {
                scale: 1.1,
            },
            initial: {
                opacity: 0,
                y: -20,
            },
            inView: {
                opacity: 1,
                y: 0,
            },
        };
    }

    return (
        <>
            <section className="pt-20" id="projects">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-center text-3xl lg:text-4xl"
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project) => (
                        <motion.div
                            variants={boxVarient}
                            initial="initial"
                            whileInView="inView"
                            transition={{ duration: 0.5 }}
                            whileHover="hover"
                            key={project.id}
                            className="group relative overflow-hidden rounded-3xl"
                        >
                            <motion.img
                                variants={boxVarient}
                                whileHover="hover"
                                src={project.image}
                                alt={project.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            ></motion.img>
                            <motion.div
                                variants={boxVarient}
                                initial="initial"
                                whileHover="hover"
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                            >
                                <motion.h3
                                    variants={textVariant}
                                    initial="initial"
                                    whileInView="inView"
                                    transition={{ duration: 0.6 }}
                                    className="mb-2 text-xl"
                                >
                                    {project.name}
                                </motion.h3>
                                <motion.p
                                    variants={textVariant}
                                    initial="initial"
                                    whileInView="inView"
                                    transition={{ duration: 0.7 }}
                                    className="mb-12 p-4"
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    variants={textVariant}
                                    initial="initial"
                                    whileInView="inView"
                                    transition={{ duration: 0.8 }}
                                    className="flex space-x-2"
                                >
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-white px-4 py-4 text-black hover:bg-gray-300 cursor-pointer"
                                    >
                                        <div className="flex items-center cursor-pointer">
                                            <span>View on Github</span>
                                            <MdArrowOutward />
                                        </div>
                                    </a>
                                    <a
                                        href={project.tryLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-stone-900 px-4 py-4 text-white hover:bg-stone-800 cursor-pointer"
                                    >
                                        <div className="flex items-center cursor-pointer">
                                            <span>Try</span>
                                            <MdArrowOutward />
                                        </div>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
