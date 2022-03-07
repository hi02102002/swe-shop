import React, { useEffect, useRef } from 'react';

const ClickAwayListener: React.FC<{
   onClickAway: () => any;
}> = ({ onClickAway, children }) => {
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

   return <div>{children}</div>;
};

export default ClickAwayListener;
