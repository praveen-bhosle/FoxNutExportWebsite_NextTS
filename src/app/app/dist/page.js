'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Products_1 = require("./lib/Products");
var ProductCard_1 = require("./components/ProductCard");
var navigation_1 = require("next/navigation");
var page = function () {
    var current1 = 'Handpicked';
    var options = ['Handpicked', 'Semi Handpicked', 'Without Handpicked'];
    var searchParams = navigation_1.useSearchParams();
    var optionNumber = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get('option');
    console.log(typeof (optionNumber));
    if (optionNumber && typeof (optionNumber) === 'string')
        current1 = options[parseInt(optionNumber)];
    console.log(current1);
    var _a = react_1.useState(current1), current = _a[0], setCurrent = _a[1];
    var current_ = current;
    if (current === 'Without Handpicked') {
        current_ = 'Machine-Picked';
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'text-lg flex justify-between bg-white py-2 fixed top-[45px] w-full px-2 ' },
            current === 'Handpicked' ? react_1["default"].createElement("button", { className: 'rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold', onClick: function () { setCurrent('Handpicked'); } }, " Handpicked  ") :
                react_1["default"].createElement("button", { className: 'bg-black text-white rounded-2xl px-2 font-bold', onClick: function () { setCurrent('Handpicked'); } }, " Handpicked  "),
            current === 'Semi Handpicked' ? react_1["default"].createElement("button", { className: 'rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold', onClick: function () { setCurrent('Semi Handpicked'); } }, " Semi-Handpicked  ") :
                react_1["default"].createElement("button", { className: 'bg-black text-white rounded-2xl px-2 font-bold', onClick: function () { return setCurrent('Semi Handpicked'); } }, "  Semi-Handpicked  "),
            current === 'Without Handpicked' ? react_1["default"].createElement("button", { className: 'rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold', onClick: function () { setCurrent('Without Handpicked'); } }, " Machine-Handpicked  ") :
                react_1["default"].createElement("button", { className: 'bg-black text-white rounded-2xl px-2 font-bold', onClick: function () { return setCurrent('Without Handpicked'); } }, "  Machine-Handpicked  ")),
        react_1["default"].createElement("div", { className: 'mt-[100px] py-2 px-2' },
            react_1["default"].createElement("div", { className: 'text-4xl font-bold mb-4 text-center' },
                current_ ? current_ + " Makahana" : 'Invalid query parameters',
                "     "),
            react_1["default"].createElement("div", { className: 'grid grid-cols-2 gap-2 ' }, Products_1["default"].map(function (element, index) {
                return element.quality == current &&
                    (react_1["default"].createElement(ProductCard_1["default"], { key: index, element: element }));
            })))));
};
exports["default"] = page;
