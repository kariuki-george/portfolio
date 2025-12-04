"use client";

import type React from "react";
import { useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  onClick?: () => void;
  delay?: number; // delay between each letter in ms
  duration?: number; // duration of each letter animation in ms
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  onClick,
  delay = 100,
  duration = 600,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const letters = text.split("");

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ perspective: "1000px" }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${
            hasInteracted
              ? isHovered
                ? "animate-flip-up"
                : "animate-flip-down"
              : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            animationDuration: `${duration}ms`,
            animationDelay: `${
              isHovered ? index * delay : (letters.length - 1 - index) * delay
            }ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
