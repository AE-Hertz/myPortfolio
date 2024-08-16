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
import { PROJECTS } from "./constants/index";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isScrollDraw, setIsScrollDraw] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            return PROJECTS.map((project) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = project.image;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });
        };

        const loadComponents = async () => {
            await Promise.all([
                ...preloadImages(),
                new Promise((resolve) => setTimeout(resolve, 2000)),
                import("./constants/index"),
                import("./components/Hero"),
                import("./components/Navbar"),
                import("./components/Projects"),
                import("./components/Bio"),
                import("./components/Skills"),
                import("./components/WorkExperience"),
                import("./components/Education"),
                import("./components/ContactForm"),
                import("./components/Footer"),
                import("./components/ScrollDrawSVG"),
            ]);

            setIsLoading(false);
            setIsScrollDraw(true);
        };

        loadComponents();
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
                className="relative h-full overflow-y-auto antialiased cursor-fancy"
            >
                <div className="fixed inset-0 bg-fixed bg-center bg-img"></div>
                <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
                    {isLoading ? (
                        <div className="fixed inset-0 flex items-center justify-center drop-shadow-2xl shadow-red-600 content-end bg-black text-white cursor-default hover:backdrop:blur-2xl hover:bg-none">
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
                {isScrollDraw && <ScrollDrawSVG />}
            </div>
        </>
    );
}

export default App;
