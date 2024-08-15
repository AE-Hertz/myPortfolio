import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollDrawSVG = () => {
    const { scrollYProgress } = useScroll();

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            {/* DESKTOP SCROLL SVG */}

            <div className="invisible xl:visible 2xl:visible">
                <svg
                    className="absolute w-full h-full top-[-12px] left-0 z-0 opacity-20"
                    fill="none"
                    width="100%"
                    height="100%"
                >
                    <motion.path
                        d="M1031.31 3.99981C1531.21 1051.84 1541.22 1157.89 1031.31 2054.01C141.221 3365.85 -473.901 4236.93 512.695 5860"
                        stroke="url(#paint0_radial_2_2)"
                        strokeWidth="15"
                        style={{ pathLength }}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_2_2"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(853.48 705) rotate(90) scale(697 845.48)"
                        >
                            <stop stopColor="#696EFF" />
                            <stop offset="1" stopColor="#F8ACFF" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* MOBILE SCROLL SVG */}
            <motion.div
                className="visible xl:invisible 2xl:invisible fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 origin-[0%] z-20"
                style={{ scaleX: scrollYProgress }}
            />
        </>
    );
};

export default ScrollDrawSVG;
