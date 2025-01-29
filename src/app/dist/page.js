"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var page = function () {
    return (react_1["default"].createElement("div", { className: "h-[100vh] w-[100vw] flex justify-center items-center border-black border-2 " },
        react_1["default"].createElement("div", { className: "border" },
            react_1["default"].createElement(image_1["default"], { src: '/logo.jpg', alt: 'image', width: 400, height: 400 }))));
};
exports["default"] = page;
