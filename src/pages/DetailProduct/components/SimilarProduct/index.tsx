import { sweApi } from 'api/sweApi';
import Product from 'components/Product';
import { useIsMounted } from 'hooks';
import React, { useEffect, useState } from 'react';
import { ProductItem } from 'shared/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSimilarProduct } from './SimilarProduct.styles';

const SimilarProduct: React.FC<{
   types: string[];
   productId: string;
}> = ({ types, productId }) => {
   const [products, setProducts] = useState<ProductItem[]>([]);
   const isMounted = useIsMounted();

   useEffect(() => {
      const getSimilarProduct = async () => {
         if (types) {
            const params = {
               types: types,
            };
            const { data } = await sweApi.getAllProducts(params);
            const newData = data.filter((item) => item.productId !== productId);
            if (isMounted()) {
               setProducts(newData);
            }
         }
      };
      getSimilarProduct();
   }, [types, isMounted, productId]);

   return products.length > 0 ? (
      <StyledSimilarProduct>
         <h5>Related Products</h5>
         <Swiper
            slidesPerView={5}
            spaceBetween={15}
            breakpoints={{
               320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               // when window width is >= 480px
               480: {
                  slidesPerView: 3,
                  spaceBetween: 15,
               },
               // when window width is >= 640px
               768: {
                  slidesPerView: 5,
                  spaceBetween: 15,
               },
            }}
         >
            {products.map((product) => (
               <SwiperSlide key={product.productId}>
                  <Product product={product} type="product" />
               </SwiperSlide>
            ))}
         </Swiper>
      </StyledSimilarProduct>
   ) : null;
};

export default React.memo(SimilarProduct);
