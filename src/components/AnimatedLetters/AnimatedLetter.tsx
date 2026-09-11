import React from "react";

type AnimatedLetterProps = {
  letterClass?: string;
  strArray: string[];
  idx?: number;
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letterClass = "", strArray, idx = 0 }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetter;
