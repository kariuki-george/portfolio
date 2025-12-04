"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovered) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Check if mouse is within container bounds
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        setTransform({ x: 0, y: 0 });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      // Apply very subtle parallax effect (max 5px movement)
      const maxMove = 5;
      setTransform({
        x: deltaX * maxMove,
        y: deltaY * maxMove,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTransform({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${-transform.y * 0.0}deg) rotateY(${transform.x * 0.05}deg) translateZ(0)`,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
