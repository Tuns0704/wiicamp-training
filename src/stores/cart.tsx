import { create } from 'zustand';
import { ICartItem } from '../types/cart-item';
import { StoreName } from './store-name';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface CartState {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => {
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

  return {
    cart: storedCart,
    addToCart: (item) => {
      set((state) => {
        const existingItem = state.cart.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingItem].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }
        const updatedCart = [...state.cart, item];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    },
    removeFromCart: (id) => {
      set((state) => {
        const updatedCart = state.cart.filter((cartItem) => cartItem.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    },
    updateQuantity: (id, quantity) => {
      set((state) => {
        const updatedCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity };
          }
          return cartItem;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    },
  };
});

export const cartStoreActions = {
  addToCart: (item: ICartItem) => {
    useCartStore.getState().addToCart(item);
  },
  removeFromCart: (id: number) => {
    useCartStore.getState().removeFromCart(id);
  },
};

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreName.CartStore, useCartStore);
}
