'use client';
"use strict";
exports.__esModule = true;
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
var react_1 = require("react");
var image_1 = require("next/image");
function Layout(_a) {
    var children = _a.children;
    var _b = react_1.useState(0), i = _b[0], setI = _b[1];
    var interval = setInterval(function () { if (i < 1)
        setI(function (i) { return i + 1; }); clearInterval(interval); }, 500);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 1 ? react_1["default"].createElement("div", { className: "h-[100vh] w-[100vw] flex justify-center items-center border-black border-2 " },
        react_1["default"].createElement("div", { className: "border" },
            react_1["default"].createElement(image_1["default"], { src: '/logp.jpeg', alt: 'image', width: 400, height: 400 })))
        :
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Header_1["default"], null),
                react_1["default"].createElement("div", { className: " mt-[50px]   px-4" }, children),
                react_1["default"].createElement(Footer_1["default"], null))));
}
exports["default"] = Layout;
