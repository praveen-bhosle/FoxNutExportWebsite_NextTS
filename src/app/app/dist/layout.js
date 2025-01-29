'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useStore = void 0;
require("../globals.css");
var Footer_1 = require("../new/Footer");
var Header_1 = require("./components/Header");
var Products_1 = require("./lib/Products");
/*
export const metadata: Metadata = {
  title: 'YK DEVOUT EXPORTS',
  description: 'We export Fox Nuts/ Makhana'
}*/
var zustand_1 = require("zustand");
var react_1 = require("react");
exports.useStore = zustand_1.create()(function (set) { return ({
    user: {
        loggedIn: false
    },
    setUser: function (user) { set(function () { return ({ user: user }); }); },
    products: Products_1["default"],
    addToCart: function (productId) {
        return set(function (state) { return ({
            products: state.products.map(function (product) {
                return product.productId === productId
                    ? __assign(__assign({}, product), { addedToCard: true, quantityAdded: product.quantityAdded + 1 }) : product;
            })
        }); });
    },
    removeOneFromCart: function (productId) {
        return set(function (state) { return ({
            products: state.products.map(function (product) {
                return product.productId === productId
                    ? __assign(__assign({}, product), { quantityAdded: product.quantityAdded - 1 }) : product;
            })
        }); });
    },
    removeFromCart: function (productId) {
        return set(function (state) { return ({
            products: state.products.map(function (product) {
                return productId === product.productId
                    ? __assign(__assign({}, product), { addedToCard: false, quantityAdded: 0 }) : product;
            })
        }); });
    },
    isCartOpen: false,
    cartOpen: function () { return set(function () { return ({ isCartOpen: true }); }); },
    cartClose: function () { return set(function () { return ({ isCartOpen: false }); }); }
}); });
function RootLayout(_a) {
    var children = _a.children;
    var _b = react_1.useState(0), i = _b[0], setI = _b[1];
    var interval = setInterval(function () {
        if (i < 1)
            setI(function (i) { return i + 1; });
        clearInterval(interval);
    }, 200);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: 'mt-[50px]' }, children),
        React.createElement("hr", null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = RootLayout;
