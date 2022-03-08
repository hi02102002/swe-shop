import { useEffect } from 'react';
export const useOverFlowHiddenBody = (isShow: boolean) => {
   useEffect(() => {
      const body = document.querySelector('body') as HTMLBodyElement;
      if (isShow) {
         body.style.overflow = 'hidden';
      } else {
         body.style.overflow = 'unset';
      }
   }, [isShow]);
};
