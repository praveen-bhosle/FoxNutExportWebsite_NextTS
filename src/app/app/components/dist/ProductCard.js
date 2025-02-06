'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Products_1 = require("../lib/Products");
var layout_1 = require("../layout");
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
var ProductCard = function (_a) {
    var element = _a.element;
    var addToCart = layout_1.useStore(function (set) { return set.addToCart; });
    var cartOpen = layout_1.useStore(function (set) { return set.cartOpen; });
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement("div", { className: 'bg-white  p-[1px]   rounded-sm    text-black cursor-pointer  h-[30vh]  border-[1px]', onClick: function () { return router.replace("/app/product?productId=" + element.productId); } },
        react_1["default"].createElement("div", { className: ' flex flex-col  h-[100%] p-2 ' },
            react_1["default"].createElement("div", { className: 'font-bold text-sm h-[20%]' },
                react_1["default"].createElement("span", { className: 'text-md  block' },
                    " ",
                    element.sizeStringA,
                    " "),
                react_1["default"].createElement("span", { className: 'text-md  block' },
                    " ",
                    element.sizeStringB,
                    " ")),
            react_1["default"].createElement("div", { className: ' flex justify-center h-[55%]  w-[100%] border-black border-2' },
                react_1["default"].createElement(image_1["default"], { src: element.image, alt: '', height: 100, width: 400, quality: 100, className: 'border-black border-2' })),
            react_1["default"].createElement("div", { className: ' h-[25%]' },
                react_1["default"].createElement("span", { className: 'text-sm block font-semibold select-none' },
                    ' ',
                    element.price,
                    ' '),
                react_1["default"].createElement("button", { onClick: function () {
                        addToCart(element.productId);
                        cartOpen();
                        console.log(Products_1["default"]);
                    }, className: 'bg-black text-white rounded-[12px] px-2 py-[1px]  w-[100%]' },
                    ' ',
                    "Add to cart",
                    ' ')))));
};
exports["default"] = ProductCard;
