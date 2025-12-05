'use client';
import { useEffect, useState } from 'react';

export default function ColorRevealCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const radius = 500; // カーソル周辺のカラー表示半径（px）

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{
        // グラデーションの分岐点を調整してぼかしを強くする
        // black 40% -> transparent 100% のようにすると、中心40%は完全表示、そこから徐々に透明になる
        maskImage: `radial-gradient(circle ${radius}px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${radius}px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/city.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 元の画像より明るく、コントラストを強くする
          filter: 'brightness(1.3) contrast(1.1)',
        }}
      />
    </div>
  );
}
