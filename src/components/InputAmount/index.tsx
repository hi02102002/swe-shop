import Box from 'components/Box';
import React, { useRef } from 'react';
import { HiMinus, HiOutlinePlus } from 'react-icons/hi';
import { StyledInputAmount } from './styles';
interface Props {
   amount: number;
   setAmount: any;
   className?: string;
   onRemove?: () => any;
}

const InputAmount: React.FC<Props> = ({
   amount,
   setAmount,
   className,
   onRemove,
}) => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   return (
      <StyledInputAmount className={className || ''} onBlur={() => {}}>
         <Box>
            <button
               onClick={(e) => {
                  e.stopPropagation();
                  setAmount((amount: number) => {
                     if (amount <= 1) {
                        onRemove && onRemove();
                        return 1;
                     }
                     return amount - 1;
                  });
               }}
            >
               <HiMinus />
            </button>
            <input
               type="text"
               ref={inputRef}
               value={amount}
               onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setAmount(+value);
               }}
               onBlur={(e) => {
                  e.stopPropagation();
                  if (e.target.value === '0' && inputRef.current) {
                     inputRef.current.value = '1';
                     setAmount(1);
                  }
               }}
            />
            <button
               onClick={(e) => {
                  e.stopPropagation();
                  setAmount(amount + 1);
               }}
            >
               <HiOutlinePlus />
            </button>
         </Box>
      </StyledInputAmount>
   );
};

export default React.memo(InputAmount);
