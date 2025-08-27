export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    count: number;
    rating: {
        rate: number;
        count: number;
    };
};
export interface StoreState {
    cart: Product[];
    products: Product[];
    filter: string;
    getProducts: () => Promise<void>;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    setFilter: (text: string) => void;
    getProductsStorage: () => void;
}
