"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var header = function () {
    return (react_1["default"].createElement("div", { className: 'bg-white text-black flex justify-between w-full fixed top-0 left-0' },
        react_1["default"].createElement(link_1["default"], { href: '/' },
            react_1["default"].createElement(image_1["default"], { src: '/logo.jpg', alt: '', width: 10, height: 10 })),
        react_1["default"].createElement("div", { className: 'flex' },
            react_1["default"].createElement(link_1["default"], { href: '/signup' }, " Sign up  "),
            react_1["default"].createElement(link_1["default"], { href: '/signin' }, " Log in    "))));
};
exports["default"] = header;
