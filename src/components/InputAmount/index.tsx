import Box from 'components/Box';
import React, { useRef } from 'react';
import { HiMinus, HiOutlinePlus } from 'react-icons/hi';
import { StyledInputAmount } from './styles';
interface Props {
   amount: number;
   setAmount: any;
   className?: string;
}

const InputAmount: React.FC<Props> = ({ amount, setAmount, className }) => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   return (
      <StyledInputAmount className={className || ''}>
         <h6>Quantity: </h6>
         <Box>
            <button
               onClick={() => {
                  setAmount((amount: number) => {
                     if (amount <= 1) {
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
                  console.log(e.target.value);
                  if (e.target.value === '0' && inputRef.current) {
                     inputRef.current.value = '1';
                  }
               }}
            />
            <button
               onClick={() => {
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
