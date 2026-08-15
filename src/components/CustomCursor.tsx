'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor-text], a, button, input, [role="button"]');
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : isHovering ? 1.25 : 1})`,
      }}
    >
      {cursorText ? (
        <div className="bg-brutal-lime text-black font-mono font-bold text-xs uppercase px-3 py-1.5 border-2 border-black shadow-brutal flex items-center gap-1.5 whitespace-nowrap animate-bounce">
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          {cursorText}
        </div>
      ) : (
        <div
          className={`relative flex items-center justify-center ${
            isHovering ? 'w-8 h-8' : 'w-5 h-5'
          } transition-all duration-150`}
        >
          <div
            className={`w-full h-full rounded-none border-2 ${
              isHovering
                ? 'border-brutal-lime bg-brutal-lime/20'
                : 'border-white bg-transparent'
            } transition-colors`}
          />
          <div className="absolute w-1 h-1 bg-white" />
        </div>
      )}
    </div>
  );
}
