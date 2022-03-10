import Checkbox from 'components/Checkbox';
import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { filters } from './filters';
const Sidebar = () => {
   const [chooses, setChooses] = useState<{
      colors: string[];
      sizes: string[];
      types: string[];
   }>({
      colors: [],
      sizes: [],
      types: [],
   });

   const isChecked = (field: string, value: string) => {
      //@ts-ignore
      return chooses[field].some((item) => item === value);
   };

   return (
      <aside>
         <div>
            <BsFilter />
            <p>Filter by</p>
         </div>
         <div>
            {filters.map((filter) => (
               <div key={filter.title}>
                  <div className="filter-item-title">{filter.title}</div>
                  <ul>
                     {filter.content.map((item) => (
                        <li key={item.name}>
                           <div>
                              <Checkbox
                                 label={item.name}
                                 value={item.value}
                                 reverse
                                 checked={isChecked(
                                    filter.mainValue,
                                    item.value
                                 )}
                                 name={filter.mainValue}
                                 onChange={(e) => {
                                    //@ts-ignore
                                    const valueExit: string = chooses[
                                       e.target.name
                                    ].find(
                                       (item: string) => item === e.target.value
                                    );

                                    if (valueExit) {
                                       setChooses((chooses) => {
                                          return {
                                             ...chooses,
                                             [e.target.name]:
                                                //@ts-ignore
                                                chooses[e.target.name].filter(
                                                   (item: string) =>
                                                      item !== valueExit
                                                ),
                                          };
                                       });
                                    } else {
                                       setChooses((chooses) => {
                                          return {
                                             ...chooses,
                                             [e.target.name]: [
                                                //@ts-ignore
                                                ...chooses[e.target.name],
                                                e.target.value,
                                             ],
                                          };
                                       });
                                    }
                                 }}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </aside>
   );
};

export default React.memo(Sidebar);
