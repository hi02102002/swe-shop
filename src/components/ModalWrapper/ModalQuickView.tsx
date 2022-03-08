import Button from 'components/Button';
import InputAmount from 'components/InputAmount';
import Sizes from 'components/Sizes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from 'shared/types';
import ModalWrapper from './ModalWrapper';
import {
   StyledBody,
   StyledContent,
   StyledGallery,
   StyledHeader,
   StyledModalQuickView,
} from './style';

interface Props {
   onClose: () => any;
   product: ProductItem;
}

const ModalQuickView: React.FC<Props> = ({ onClose, product }) => {
   const [choseSize, setChoseSize] = useState<string>(product.size[0]);
   const [amount, setAmount] = useState<number>(1);
   const navigate = useNavigate();

   return (
      <ModalWrapper>
         <StyledModalQuickView onClickAway={onClose}>
            <StyledHeader>
               <h5>Product Information</h5>
            </StyledHeader>
            <StyledBody>
               <StyledGallery>
                  <img src={product.imgs[0]} alt={product.name} />
               </StyledGallery>
               <StyledContent>
                  <h5>{product.name}</h5>
                  {product.desc.trim().length > 0 && <p>{product.desc}</p>}
                  <div className="color-wrap">
                     <h6>Color: </h6>
                     <p>{product.color}</p>
                  </div>
                  <Sizes
                     sizes={product.size}
                     choseSize={choseSize}
                     setChoseSize={setChoseSize}
                  />
                  <InputAmount amount={amount} setAmount={setAmount} />
                  <div className="button-group">
                     <Button>Add to cart</Button>
                     <Button
                        onClick={() => {
                           navigate(`${product.id}`);
                        }}
                     >
                        View full info
                     </Button>
                  </div>
               </StyledContent>
            </StyledBody>
         </StyledModalQuickView>
      </ModalWrapper>
   );
};

export default ModalQuickView;
