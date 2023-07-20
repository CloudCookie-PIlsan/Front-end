import React, { useState, useEffect } from "react";
import { StTypingText } from "./styled";

const TypingText = ({ text, speed }) => {
    const [Text, setText] = useState("");
    const [Count, setCount] = useState(0);

    useEffect(() => {
        let typingText = text ? text : ""; //기본값
        let typingSpeed = speed ? speed : 350; //기본값
        const interval = setInterval(() => {
            setText((Text) => {
                let updated = Text;
                updated = Text + typingText[Count];
                return updated;
            });
            setCount(Count + 1);
        }, typingSpeed);
        if (Count > typingText.length) {
            clearInterval(interval);
            setCount(0);
            setText("");
        }
        return () => clearInterval(interval);
    });
    return <StTypingText>{Text}</StTypingText>;
};

export default TypingText;
