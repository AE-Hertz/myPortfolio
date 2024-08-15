import logo from "../assets/logo.png";
import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <div>
                <nav className="fixed left-0 right-0 top-4 z-50">
                    {/* Desktop Menu */}
                    <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                        <div className="flex items-center justify-between gap-6">
                            <div>
                                <a href="#">
                                    <img
                                        className="cursor-pointer"
                                        src={logo}
                                        width={150}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div>
                                <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    variants={containerVariants}
                                    className="flex items-center gap-4"
                                >
                                    {NAVIGATION_LINKS.map((item, index) => (
                                        <motion.li
                                            variants={itemVariants}
                                            key={index}
                                        >
                                            <a
                                                className="text-sm hover:text-yellow-400 cursor-pointer"
                                                href={item.href}
                                                onClick={(e) =>
                                                    handleLinkClick(
                                                        e,
                                                        item.href
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div className="rounded-lg backdrop-blur-md lg:hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <a href="#">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        width={90}
                                        className="m-2"
                                    />
                                </a>
                            </div>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.2 }}
                                className="flex items-center"
                            >
                                <button
                                    className="focus:outline-none lg:hidden"
                                    onClick={toggleMobileMenu}
                                >
                                    {isMobileMenuOpen ? (
                                        <FaTimes className="m-2 h-6 w-5" />
                                    ) : (
                                        <FaBars className="m-2 h-6 w-5" />
                                    )}
                                </button>
                            </motion.div>
                        </div>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <a
                                            href={item.href}
                                            className="block w-full text-lg"
                                            onClick={(e) =>
                                                handleLinkClick(e, item.href)
                                            }
                                        >
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
