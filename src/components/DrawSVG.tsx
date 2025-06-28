import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function LogoDraw() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-96">
        <motion.path
          ref={pathRef}
          d="/tomymaritano.svg" // ← poné el path de tu SVG convertido
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ strokeDashoffset: '100%' }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
