import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useStore } from '../../store/useStore';
export const ItemCart = ({ item }) => {
    const { removeFromCart } = useStore();
    return (_jsxs("div", { className: "flex gap-4 border-2 border-red-400 p-2 rounded bg-white", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-20 h-20 object-contain" }), _jsxs("div", { className: "flex flex-col justify-center flex-1", children: [_jsx("p", { className: "text-sm font-semibold text-black", children: item.title }), _jsxs("p", { className: "text-green-600 font-bold", children: ["$", item.price] }), _jsxs("p", { className: "text-green-600 font-bold", children: ["Cantidad: ", _jsx("span", { children: item.count })] }), _jsx("button", { className: "text-red-600 text-sm mt-2 hover:underline", onClick: () => removeFromCart(item.id), children: "Eliminar" })] })] }, item.id));
};
