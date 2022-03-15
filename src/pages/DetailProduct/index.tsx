import { sweApi } from 'api/sweApi';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductItem } from 'shared/types';
import Content from './components/Content';
import ImageLibrary from './components/ImageLibrary';
import Reviews from './components/Reviews';
import SimilarProduct from './components/SimilarProduct';
import {
   StyledContainer,
   StyledDetailProduct,
   StyledMain,
} from './DetailProduct.styles';

const DetailProduct = () => {
   const { productId } = useParams();
   const [product, setProduct] = useState<ProductItem | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   // const [error, setError] = useState<any>();

   useEffect(() => {
      const getProductHandler = async () => {
         try {
            setIsLoading(true);
            const { data } = await sweApi.getProduct(productId as string);
            setProduct(data);
            setIsLoading(false);
         } catch (error) {
            console.log(error);
            setIsLoading(false);
         }
      };
      getProductHandler();
   }, [productId]);

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [productId]);

   useEffect(() => {
      if (product) {
         document.title = `${product?.name} - SWE`;
      }
   }, [product]);

   return isLoading && !product ? (
      <Loader />
   ) : (
      <Layout>
         <Hero
            content={product?.name as string}
            path={product?.name as string}
         />
         <StyledDetailProduct>
            <div className="container">
               <StyledContainer>
                  <StyledMain>
                     <ImageLibrary images={product?.imgs as string[]} />
                     <Content product={product} />
                  </StyledMain>
                  <Reviews productId={product?.productId as string} />
                  <SimilarProduct
                     types={product?.types as string[]}
                     productId={product?.productId as string}
                  />
               </StyledContainer>
            </div>
         </StyledDetailProduct>
      </Layout>
   );
};

export default React.memo(DetailProduct);
