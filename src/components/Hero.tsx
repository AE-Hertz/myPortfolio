import React, { useEffect, useState } from "react";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Button from "./ui/button";
import Badge from "./ui/badge";
import Avatar from "./ui/avatar";
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
         <section className="flex min-h-screen flex-wrap items-center gap-8 py-8">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="w-full md:w-1/2"
            >
               <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Available for work</Badge>
                  <Badge variant="outline">React • TypeScript</Badge>
               </div>

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
               <p className="mb-8 p-2 text-xl text-stone-200">{HERO.description}</p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="w-full md:w-1/2 lg:p-8"
            >
               <div className="flex justify-center">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Avatar src={newabhi} alt="Abhinandan Kumar" size="lg" className="h-[330px] w-[330px] rounded-[2rem] border-stone-500/60 shadow-2xl shadow-stone-900/70" />
                  </motion.div>
               </div>
            </motion.div>
         </section>

         <motion.div
            className="fixed bottom-16 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
         >
            <Link to="/resume">
                <Button variant="outline" className="flex items-center gap-2 rounded-full px-4 py-2">
                    <FileText className="h-5 w-5" />
                    <span className="hidden sm:inline">Resume</span>
                </Button>
            </Link>
         </motion.div>
      </>
   );
}

export default Hero;
