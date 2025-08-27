import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cart } from '../Cart';
import { Search } from '../Search';
export const Header = () => {
    return (_jsxs("header", { className: 'flex justify-between items-center p-4 bg-blue-600 text-white fixed w-full', children: [_jsx("h1", { className: 'text-xl font-bold', children: "Fake Store" }), _jsxs("div", { className: 'flex justify-between items-center gap-5', children: [_jsx(Search, {}), _jsx(Cart, {})] })] }));
};
