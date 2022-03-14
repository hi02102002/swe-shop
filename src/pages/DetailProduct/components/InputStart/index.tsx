import Box from 'components/Box';
import React, { useMemo, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { v4 } from 'uuid';
import { StyledInputRating } from './InputRating.styles';

interface StarProps {
   index: number;
   onMouseEnter: (index: number) => any;
   onMouseLeave: () => any;
   onSaveRate: (index: number) => any;
   hoverRating: number;
   rating: number;
}

const Star: React.FC<StarProps> = ({
   index,
   onMouseEnter,
   onMouseLeave,
   onSaveRate,
   hoverRating,
   rating,
}) => {
   const isFill = useMemo(() => {
      if (hoverRating >= index) {
         return true;
      } else if (!hoverRating && rating >= index) {
         return true;
      }
      return false;
   }, [hoverRating, index, rating]);

   return (
      <div
         className="star"
         onMouseEnter={() => {
            onMouseEnter(index);
         }}
         onClick={() => {
            onSaveRate(index);
         }}
         onMouseLeave={() => {
            onMouseLeave();
         }}
      >
         {isFill ? (
            <AiFillStar className="fill" />
         ) : (
            <AiOutlineStar className="fill" />
         )}
      </div>
   );
};

const InputRating: React.FC<{
   rating: number;
   setRating: any;
   label?: string;
}> = ({ rating, setRating, label }) => {
   const [hoverRating, setHoverRating] = useState<number>(0);
   return (
      <StyledInputRating>
         {label && <label>{label}</label>}
         <Box>
            {[1, 2, 3, 4, 5].map((index) => (
               <Star
                  key={v4()}
                  hoverRating={hoverRating}
                  rating={rating}
                  index={index}
                  onMouseEnter={(index) => {
                     setHoverRating(index);
                  }}
                  onSaveRate={(index) => {
                     setRating(index);
                  }}
                  onMouseLeave={() => {
                     setHoverRating(0);
                  }}
               />
            ))}
         </Box>
      </StyledInputRating>
   );
};

export default React.memo(InputRating);
