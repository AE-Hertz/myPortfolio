import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollDrawSVG from "./components/ScrollDrawSVG";
import ScrambleText from "./components/ScrambleText";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isScrollDraw, setIsScrollDraw] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setIsScrollDraw(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        function handleContextMenu(e) {
            e.preventDefault();
        }
        const rootElement = document.getElementById("my-component");
        rootElement.addEventListener("contextmenu", handleContextMenu);
        return () => {
            rootElement.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return (
        <>
            <div
                id="my-component"
                className="relative h-full overflow-y-auto antialiased cursor-fancy "
            >
                <div className="fixed inset-0 bg-fixed bg-center bg-img"></div>
                <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
                    {isLoading ? (
                        <div className="fixed inset-0 drop-shadow-2xl shadow-red-600 content-end bg-black text-white cursor-default hover:backdrop:blur-2xl hover:bg-none">
                            <ScrambleText
                                text="Welcome..."
                                duration={2000}
                                delay={100}
                            />
                        </div>
                    ) : (
                        <>
                            <Hero />
                            <Navbar />
                            <Projects />
                            <Bio />
                            <Skills />
                            <WorkExperience />
                            <Education />
                            <ContactForm />
                            <Footer />
                        </>
                    )}
                </div>
                {isScrollDraw && <ScrollDrawSVG />}{" "}
                {/* Can also use this {isScrollDraw ? <ScrollDrawSVG/> : null} */}
            </div>
        </>
    );
}

export default App;
