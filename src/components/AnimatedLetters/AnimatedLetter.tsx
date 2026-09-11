import "./index.scss";

interface AnimatedLetterProps {
    letterClass: string;
    strArray: string[];
    idx: number;
}

const AnimatedLetter = ({ letterClass, strArray, idx }: AnimatedLetterProps) => {
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
