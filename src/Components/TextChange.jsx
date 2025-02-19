import React from "react";
import { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Nilanjan", "MERN stack developer", "Backend Specialist"];
  //const texts = ["Chut Paglu", "Hijru Boy", "Pedo Specialist"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setEndValue(1); // Reset endValue for the next text
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div>
      <div className="min-h-[40px] md:min-h-[80px]">Hey, I'm </div>
      {/* <div className="font-mono transition ease duration-300 min-h-[80px]" >{currentText}</div> */}
      <div className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                transition ease duration-300 min-h-[80px] 
                [text-shadow:_0_0_2px_rgb(255,255,255,0.3)] 
                [webkit-text-stroke:2px_theme(colors.blue.700)]">
          {currentText}
      </div>


    </div>
    
  )
};

export default TextChange;