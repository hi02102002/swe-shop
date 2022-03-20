import Box from 'components/Box';
import Checkbox from 'components/Checkbox';
import React, { useCallback } from 'react';
import { filters } from './dataFilter';
import { StyledFilterSidebar } from './FilterSidebar.styles';

const FilterSidebar: React.FC<{
   filterResult: any;
   setFilterResult: any;
}> = ({ filterResult, setFilterResult }) => {
   const isChecked = useCallback(
      (name: string, value: string) => {
         return filterResult[name]?.some((item: any) => item === value);
      },
      [filterResult]
   );

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      const valueExist = filterResult[name].find((item: any) => item === value);

      if (valueExist) {
         setFilterResult((currentValue: any) => {
            return {
               ...currentValue,
               [name]: [...currentValue[name]].filter((item) => item !== value),
            };
         });
      } else {
         setFilterResult((currentValue: any) => {
            return {
               ...currentValue,
               [name]: [...currentValue[name], value],
            };
         });
      }
   };

   // useEffect(() => {
   //    dispatch(filterSidebar(filterResult));
   // }, [dispatch, filterResult]);

   return (
      <StyledFilterSidebar>
         <Box>
            {filters.map((item) => (
               <div key={item.title} className="filter-section">
                  <h6>{item.title}</h6>
                  <ul>
                     {item.filters.map((filter) => {
                        return (
                           <li key={filter.value}>
                              <Checkbox
                                 label={filter.name}
                                 value={filter.value}
                                 name={item.title.toLowerCase()}
                                 checked={isChecked(
                                    item.title.toLowerCase(),
                                    filter.value
                                 )}
                                 onChange={handleChange}
                                 type="checkbox"
                              />
                           </li>
                        );
                     })}
                  </ul>
               </div>
            ))}
         </Box>
      </StyledFilterSidebar>
   );
};

export default React.memo(FilterSidebar);
