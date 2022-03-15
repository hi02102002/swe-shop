import { sweApi } from 'api/sweApi';
import Button from 'components/Button';
import { authSelector } from 'features/auth';
import { addToastItem } from 'features/toastSlide';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ReviewItem } from 'shared/types';
import { v4 } from 'uuid';
import FormReview from '../FormReview';
import { ListReviews, Review, StyledReviews } from './Reviews.styles';

const Reviews: React.FC<{
   productId: string;
}> = ({ productId }) => {
   const [reviews, setReviews] = useState<ReviewItem[]>([]);
   const [showForm, setShowForm] = useState<boolean>(false);
   const { currentUser } = useAppSelector(authSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      const handleGetReviews = async () => {
         if (productId) {
            const { data } = await sweApi.getAllReviews(productId, 1, 10);
            setReviews(
               data.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            );
         }
      };
      handleGetReviews();
   }, [productId]);

   useEffect(() => {
      setShowForm(false);
   }, [productId]);

   return (
      <StyledReviews>
         <h5>Reviews</h5>
         {reviews.length === 0 && <p className="alter">No reviews yet</p>}
         <Button
            className="write-review"
            onClick={() => {
               if (!currentUser) {
                  dispatch(
                     addToastItem({
                        id: v4(),
                        content: 'You must login before add review',
                        type: 'ERROR',
                     })
                  );
                  return;
               }
               setShowForm(!showForm);
            }}
         >
            Write a review
         </Button>
         {showForm && (
            <FormReview
               onClose={() => {
                  setShowForm(false);
               }}
               productId={productId}
            />
         )}
         {reviews.length > 0 ? (
            <ListReviews>
               {reviews.map((review) => (
                  <li key={v4()}>
                     <Review>
                        <div className="rate">
                           {[1, 2, 3, 4, 5].map((value) => {
                              return value <= review.star ? (
                                 <AiFillStar key={v4()} />
                              ) : (
                                 <AiOutlineStar key={v4()} />
                              );
                           })}
                        </div>
                        <h6 className="title">{review.title}</h6>
                        <div
                           style={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '0.5rem',
                           }}
                        >
                           <h6>{review.name || 'No name'}</h6>
                           on
                           <h6>
                              {new Date(review.createdAt).toLocaleDateString()}
                           </h6>
                        </div>
                        <p>{review.content}</p>
                     </Review>
                  </li>
               ))}
            </ListReviews>
         ) : null}
      </StyledReviews>
   );
};

export default React.memo(Reviews);
