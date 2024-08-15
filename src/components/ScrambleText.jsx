import React, { useState, useEffect } from "react";

const ScrambleText = ({ text, duration = 2000, delay = 100 }) => {
    const [scrambledText, setScrambledText] = useState("");
    const characters =
        "二 三 四 五 六 七 八 九 十 目 手 足 口 耳 体 車 学 生 休 月 火 水 木 金 土 日";

    useEffect(() => {
        const startTime = Date.now();
        const textArray = text.split("");
        const totalSteps = Math.ceil(duration / delay);

        const revealText = () => {
            const elapsedTime = Date.now() - startTime;
            const step = Math.floor(elapsedTime / delay);

            if (step >= totalSteps) {
                setScrambledText(text);
                return;
            }

            const progress = step / totalSteps;

            const revealedText = textArray
                .map((char, i) => {
                    if (i < progress * textArray.length) {
                        return char;
                    }
                    return characters[
                        Math.floor(Math.random() * characters.length)
                    ];
                })
                .join("");

            setScrambledText(revealedText);
        };

        const interval = setInterval(revealText, 50);

        return () => clearInterval(interval);
    }, [text, duration, delay]);

    return (
        <div className="text-3xl xl:text-7xl 2xl:text-[200px] subpixel-antialiased  bg-transparent  overflow-hidden font-thin">
            {scrambledText}
        </div>
    );
};

export default ScrambleText;
