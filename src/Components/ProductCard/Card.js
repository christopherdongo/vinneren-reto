import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useStore } from '../../store/useStore';
export const Card = ({ product }) => {
    const { addToCart } = useStore();
    return (_jsxs("div", { className: "border rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition", children: [_jsx("img", { src: product.image, alt: product.title, className: "h-32 object-contain mb-2" }), _jsx("h2", { className: "font-semibold text-center text-sm line-clamp-2", children: product.title }), _jsxs("p", { className: "text-lg font-bold text-green-600", children: ["$", product.price] }), _jsx("button", { onClick: () => addToCart(product), className: "text-black mt-2 px-3 py-1 bg-blue-600 rounded border hover:border-b-blue-950", children: "agregar al carrito" })] }));
};
