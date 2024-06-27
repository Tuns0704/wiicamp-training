import { create } from 'zustand';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => {
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
        } else {
          const updatedCart = [...state.cart, item];
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }
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

export default useCartStore;
