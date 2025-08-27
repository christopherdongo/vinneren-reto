import { create } from "zustand";
import { getProducts } from "../service/api";
import type { StoreState } from '../types/Products'

// Store con Zustand
export const useStore = create<StoreState>((set) => ({
  cart: [],
  products: [],
  filter: "",

  getProducts: async () => {
  const products = await getProducts(); // llama a tu función ya ajustada
  set({ products }); // actualiza el estado
  },

  getProductsStorage: () => {
   const productStorage = localStorage.getItem('cartProduct');

  if (productStorage) { 
    try {
      const products = JSON.parse(productStorage);
      set(() => ({ cart: products }));
    } catch (err) {
      console.error('error', err);
      set(() => ({ cart: [] }));
    }
  } else {
    set(() => ({ cart: [] }));
  }

  },

addToCart: (product) => {
  set((state) => {
    
    const existingProduct = state.cart.find((p) => p.id === product.id);

    let updatedCart;

    if (existingProduct) {
     
      updatedCart = state.cart.map((p) =>
        p.id === product.id ? { ...p, count: (p.count || 1) + 1 } : p
      );
    } else {
      updatedCart = [...state.cart, { ...product, count: 1 }];
    }

    // Guardar en localStorage
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));

    return { cart: updatedCart };
  });
},
    
 removeFromCart: (productId) => {
  set((state) => {
    // Buscar el producto en el carrito
    const existingProduct = state.cart.find((p) => p.id === productId);

    let updatedCart;

    if (existingProduct) {
      if (existingProduct.count && existingProduct.count > 1) {
        
        updatedCart = state.cart.map((p) =>
          p.id === productId ? { ...p, count: p.count - 1 } : p
        );
      } else {
        
        updatedCart = state.cart.filter((p) => p.id !== productId);
      }

    
      localStorage.setItem("cartProduct", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    }

    return state;
  });
},

  setFilter: (text: string) => set({ filter: text }),
}));
