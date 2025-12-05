import React from "react";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "14px",
        height: "14px",
        background: "url('/assets/images/rupee.png') no-repeat center center / contain",
        pointerEvents: "none",
        zIndex: 9999,
        top: -10,
        left: 0,
        transform: "translate3d(0, 0, 0)",
      }}
    />
  );
};

export default Cursor;
