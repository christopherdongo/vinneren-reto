import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from './Card';
import { useStore } from '../../store/useStore';
export const ProductCard = () => {
    const { products, filter: filterText } = useStore();
    const productFilter = filterText.length > 0 ? products.filter(item => item.title.toLowerCase().includes(filterText)) : products;
    return (_jsx("div", { className: 'grid gap-5 p-4', style: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }, children: productFilter.map((product) => (_jsx(Card, { product: product }, product.id))) }));
};
