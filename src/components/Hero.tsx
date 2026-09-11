import React, { useEffect, useState } from "react";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import abhi from "../assets/abhi.jpeg";
import newabhi from "../assets/ssss.jpg";
import AnimatedLetter from "./AnimatedLetters/AnimatedLetter";

function Hero() {
   const [letterClass, setLetterClass] = useState("text-animate");

   useEffect(() => {
      setTimeout(() => {
         setLetterClass("text-animate-hover");
      }, 200);
   }, []);

   return (
      <>
         <section className="flex min-h-screen flex-wrap items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="w-full md:w-1/2"
            >
               <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-7xl xl:text-[7rem]">
                  <AnimatedLetter
                     letterClass={letterClass}
                     strArray={"Abhinandan".split("")}
                     idx={15}
                  />
               </h2>
               <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                  {HERO.greet}
               </p>
               <p className="mb-8 p-2 text-xl">{HERO.description}</p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="w-full md:w-1/2 lg:p-8 "
            >
               <div className="flex justify-center ">
                  <motion.img
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                     src={newabhi}
                     width={550}
                     height={550}
                     alt="Abhinandan Kumar"
                     className="rounded-3xl"
                     rel="preload"
                     fetchPriority="high"
                  />
               </div>
            </motion.div>
         </section>

         <motion.div
            className="fixed bottom-16 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
         >
            <Link to="/resume">
               <FileText className="w-8 h-8 text-white cursor-pointer" />
            </Link>
         </motion.div>
      </>
   );
}

export default Hero;
