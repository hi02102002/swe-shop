import { removeToastItem, toastSelector } from 'features/toastSlide';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { StyledToast, ToastItem } from './Toast.styles';
const toast = document.querySelector('#toast') as Element;

interface Props {
   left?: string;
   right?: string;
   bottom?: string;
   top?: string;
}

const variants = {
   initial: { x: -100, opacity: 0 },
   visible: { opacity: 1, x: 0 },
   hidden: { opacity: 0, x: -100 },
};

const Toast: React.FC<Props> = ({ bottom, left, right, top }) => {
   const { toasts } = useAppSelector(toastSelector);
   const dispatch = useAppDispatch();
   useEffect(() => {
      if (toasts.length === 0) {
         return;
      }
      const timer = setTimeout(() => {
         dispatch(removeToastItem({ id: toasts[0].id }));
      }, 2000);
      return () => clearTimeout(timer);
   }, [dispatch, toasts]);
   return createPortal(
      <StyledToast left={left} right={right} bottom={bottom} top={top}>
         <AnimatePresence>
            {toasts.map((toast) => (
               <motion.li
                  layout
                  variants={variants}
                  initial="initial"
                  animate="visible"
                  exit="hidden"
                  key={toast.id}
               >
                  <ToastItem type={toast.type}>
                     <span>{toast.content}</span>
                     <button
                        onClick={() => {
                           dispatch(removeToastItem({ id: toast.id }));
                        }}
                     >
                        <IoCloseOutline />
                     </button>
                  </ToastItem>
               </motion.li>
            ))}
         </AnimatePresence>
      </StyledToast>,
      toast
   );
};

export default Toast;
