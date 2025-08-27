import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useStore } from '../../store/useStore';
import cartPng from '../../assets/shopping-cart.png';
import { ItemCart } from './ItemCart';
export const Cart = () => {
    const [hover, setHover] = useState(false);
    const { cart } = useStore();
    console.log('cart', cart);
    return (_jsxs("div", { className: 'relative', children: [_jsxs("div", { className: 'relative cursor-pointer', onClick: () => setHover(true), children: [_jsx("img", { src: cartPng, alt: "cart-icon", className: 'h-10 w-10' }), cart.length > 0 ? (_jsx("span", { className: 'absolute top-0 right-0 bg-red-600 text-white w-5 h-5 flex flex-col justify-center items-center rounded-3xl', children: cart.length })) : false] }), hover && cart.length > 0 && (_jsxs("div", { className: "absolute right-0 top-5 w-96 max-h-[80vh] bg-blue-700 p-4 flex flex-col gap-4 overflow-y-auto rounded shadow-lg z-50", children: [_jsx("div", { className: "flex justify-end", children: _jsx("button", { className: "text-black text-lg font-bold border-0", onClick: () => setHover(false), "aria-label": "Cerrar carrito", children: "\u00D7" }) }), cart.map(item => (_jsx(ItemCart, { item: item })))] }))] }));
};
