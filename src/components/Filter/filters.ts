export const filters: {
   title: string;
   mainValue: string;
   content: {
      name: string;
      value: string;
   }[];
}[] = [
   {
      title: 'By size',
      mainValue: 'size',
      content: [
         { name: 'S', value: 'S' },
         { name: 'M', value: 'M' },
         { name: 'L', value: 'L' },
         { name: 'Xl', value: 'Xl' },
      ],
   },
];
