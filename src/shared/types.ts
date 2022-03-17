export interface ProductItem {
   name: string;
   price: number;
   size: string[];
   types: string[];
   color: string;
   imgs: string[];
   desc: string;
   id: string;
   productId: string;
}

export interface CartItem {
   name: string;
   price: number;
   amount: number;
   size: string;
   color: string;
   id: string;
   img: string;
   userId: string;
   productId: string;
}

export interface WishlistItem extends ProductItem {
   userId: string;
   wishListId: string;
}

export interface ToastItem {
   id: string;
   content: string;
   type: 'SUCCESS' | 'ERROR' | 'WARN';
}

export interface ReviewItem {
   createdAt: string;
   name: string;
   content: string;
   star: number;
   userId: string;
   productId: string;
   id: string;
   title: string;
}
