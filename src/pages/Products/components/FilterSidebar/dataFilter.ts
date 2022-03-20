import { FilterItem } from 'shared/types';

export const filters: FilterItem[] = [
   {
      title: 'Types',
      filters: [
         {
            name: 'Full',
            value: 'full',
         },
         {
            name: 'Bikini',
            value: 'bikini',
         },
         {
            name: 'Outerwear',
            value: 'outerwear',
         },
         {
            name: 'Hoodie',
            value: 'hoodie',
         },
         {
            name: 'Bottom',
            value: 'bottom',
         },
         {
            name: 'Trouser',
            value: 'trouser',
         },
         {
            name: 'Top',
            value: 'top',
         },
         {
            name: 'T-shirt',
            value: 't-shirt',
         },
         {
            name: 'Jacket',
            value: 'jacket',
         },
      ],
   },
   {
      title: 'Color',
      filters: [
         { name: 'Black', value: 'black' },
         { name: 'White', value: 'white' },
         { name: 'Blue', value: 'blue' },
         { name: 'Red', value: 'red' },
      ],
   },
   {
      title: 'Size',
      filters: [
         {
            name: 'S',
            value: 'S',
         },
         {
            name: 'M',
            value: 'M',
         },
         {
            name: 'L',
            value: 'L',
         },
         {
            name: 'XL',
            value: 'XL',
         },
      ],
   },
];
