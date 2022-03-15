import Product from 'components/Product';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ProductItem } from 'shared/types';
import { StyledListProducts } from './styles';

const ListProducts: React.FC<{
   products: ProductItem[];
   type?: 'product' | 'wishlist';
   col?: number;
}> = ({ products, type, col }) => {
   return (
      <StyledListProducts col={col}>
         <AnimatePresence>
            {products.map((product) => {
               return (
                  <motion.li
                     key={product.productId}
                     layout
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     <Product product={product} type={type} />
                  </motion.li>
               );
            })}
         </AnimatePresence>
      </StyledListProducts>
   );
};

export default ListProducts;
