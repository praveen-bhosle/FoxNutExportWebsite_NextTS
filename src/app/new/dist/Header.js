"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var Header = function () {
    return (react_1["default"].createElement("div", { className: 'bg-white text-black flex justify-between w-full fixed top-0 left-0' },
        react_1["default"].createElement(link_1["default"], { href: '/' },
            react_1["default"].createElement(image_1["default"], { src: '/logp.jpeg', alt: '', width: 50, height: 50 })),
        react_1["default"].createElement("div", { className: 'flex gap-4 py-2 px-4' },
            react_1["default"].createElement(link_1["default"], { href: '/auth/signup' }, " Sign up  "),
            react_1["default"].createElement(link_1["default"], { href: '/auth/signin' }, " Log in   "))));
};
exports["default"] = Header;
