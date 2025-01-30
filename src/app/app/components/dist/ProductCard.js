'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Products_1 = require("../lib/Products");
var layout_1 = require("../layout");
var navigation_1 = require("next/navigation");
var ProductCard = function (_a) {
    var element = _a.element;
    var addToCart = layout_1.useStore(function (set) { return set.addToCart; });
    var cartOpen = layout_1.useStore(function (set) { return set.cartOpen; });
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement("div", { className: 'bg-[#2A2A2A]  hover:bg-black rounded-lg   text-white cursor-pointer  h-[30vh] border-white border-2', onClick: function () { return router.replace("/app/product?productId=" + element.productId); } },
        react_1["default"].createElement("div", { className: ' p-2 flex flex-col justify-between h-[100%] gap-2 ' },
            react_1["default"].createElement("div", { className: ' font-bold' },
                react_1["default"].createElement("span", { className: 'text-md  block' },
                    " ",
                    element.sizeStringA,
                    " "),
                react_1["default"].createElement("span", { className: 'text-md  block' },
                    " ",
                    element.sizeStringB,
                    " ")),
            react_1["default"].createElement("div", { className: ' flex justify-center h-[60%] w-[100%]' },
                react_1["default"].createElement("img", { src: element.image })),
            react_1["default"].createElement("div", { className: '' },
                react_1["default"].createElement("span", { className: 'text-sm block font-semibold select-none' },
                    ' ',
                    element.price,
                    ' '),
                react_1["default"].createElement("button", { onClick: function () {
                        addToCart(element.productId);
                        cartOpen();
                        console.log(Products_1["default"]);
                    }, className: 'bg-white text-black rounded-[12px] px-2 py-[1px]  w-[100%]' },
                    ' ',
                    "Add to cart",
                    ' ')))));
};
exports["default"] = ProductCard;
