import Button from 'components/Button';
import { filterHeader } from 'features/productsSlice';
import { useAppDispatch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
   StyledDropdown,
   StyledFilterHeader,
   StyledLayout,
   StyledSort,
} from './FilterHeader.styles';

const valueSort = [
   {
      name: 'Features',
      value: 'features',
   },
   {
      name: 'Alphabetically, A-Z',
      value: 'a-z',
   },
   {
      name: 'Alphabetically, Z-A',
      value: 'z-a',
   },
   {
      name: 'Price, low to high',
      value: 'price-low-to-high',
   },
   {
      name: 'Price, high to low',
      value: 'price-high-to-low',
   },
];

const Sort = () => {
   const [choose, setChoose] = useState<{
      name: string;
      value: string;
   }>(valueSort[0]);
   const [showDropdown, setShowDropdown] = useState<boolean>(false);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(filterHeader(choose.value));
   }, [choose, dispatch]);

   return (
      <StyledSort>
         <Button
            onClick={() => {
               setShowDropdown(!showDropdown);
            }}
         >
            {choose.name}
         </Button>
         {showDropdown && (
            <StyledDropdown
               onClickAway={() => {
                  setShowDropdown(false);
               }}
               animation={{
                  initial: { y: 100, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 100, opacity: 0 },
                  transition: { duration: 0.3 },
               }}
            >
               <ul>
                  {valueSort.map((item) => (
                     <li
                        key={v4()}
                        id-value={item.value}
                        onClick={(e) => {
                           e.stopPropagation();
                           setChoose(item);
                        }}
                        className={
                           item.value === choose.value ? 'active' : undefined
                        }
                     >
                        {item.name}
                     </li>
                  ))}
               </ul>
            </StyledDropdown>
         )}
      </StyledSort>
   );
};

const Layout: React.FC<{
   setCol: (col: number) => any;
   col: number;
}> = ({ setCol, col }) => {
   return (
      <StyledLayout>
         <button
            onClick={(e) => {
               e.stopPropagation();
               setCol(3);
            }}
         >
            <svg
               width="18"
               height="18"
               viewBox="0 0 18 18"
               fill={col === 3 ? 'var(--swe-black)' : '#bec0c4'}
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect width="4.5" height="18"></rect>
               <rect x="6.75" width="4.5" height="18"></rect>
               <rect x="13.5" width="4.5" height="18"></rect>
            </svg>
         </button>
         <button
            onClick={(e) => {
               e.stopPropagation();
               setCol(4);
            }}
         >
            <svg
               width="24.5"
               height="18"
               viewBox="0 0 24.5 18"
               fill={col === 4 ? 'var(--swe-black)' : '#bec0c4'}
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect width="4.5" height="18"></rect>
               <rect x="6.75" width="4.5" height="18"></rect>
               <rect x="13.5" width="4.5" height="18"></rect>
               <rect x="20.25" width="4.5" height="18"></rect>
            </svg>
         </button>
      </StyledLayout>
   );
};

const FilterHeader: React.FC<{
   setCol: (col: number) => any;
   col: number;
}> = ({ setCol, col }) => {
   return (
      <StyledFilterHeader>
         <Sort />
         <Layout setCol={setCol} col={col} />
      </StyledFilterHeader>
   );
};

export default FilterHeader;
