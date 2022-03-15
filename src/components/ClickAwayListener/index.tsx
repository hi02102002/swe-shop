import { AnimationProps, motion, MotionProps } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
const ClickAwayListener: React.FC<{
   onClickAway: () => any;
   className?: string;
   animation?: AnimationProps & MotionProps;
}> = ({ onClickAway, className, children, animation }) => {
   const rootRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const handleClickAway = (e: globalThis.MouseEvent) => {
         const eventTarget = e.target as Node;
         const isClickInside = rootRef.current?.contains(eventTarget); // check click inside
         if (!isClickInside) onClickAway();
      };
      window.addEventListener('click', handleClickAway);
      return () => {
         window.removeEventListener('click', handleClickAway);
      };
   }, [onClickAway]);

   return (
      <motion.div ref={rootRef} className={className} {...animation}>
         {children}
      </motion.div>
   );
};

export default ClickAwayListener;
