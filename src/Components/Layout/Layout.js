import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
export const Layout = ({ children }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: 'min-h-screen w-full pt-30', children: children }), _jsx(Footer, {})] }));
};
