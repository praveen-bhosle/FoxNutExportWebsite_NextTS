"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var layout_1 = require("../layout");
var CartItem = function (_a) {
    var product = _a.product, p2 = _a.p2, p3 = _a.p3;
    var addToCart = layout_1.useStore(function (state) { return state.addToCart; });
    var removeFromCart = layout_1.useStore(function (state) { return state.removeFromCart; });
    var removeOneFromCart = layout_1.useStore(function (state) { return state.removeOneFromCart; });
    var p3_ = p3 * product.quantityAdded;
    var p4 = p3_.toFixed(2);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'flex my-2 ' },
            react_1["default"].createElement("div", { className: '' },
                react_1["default"].createElement(image_1["default"], { src: product.image, width: 150, height: 150, alt: 'image' })),
            react_1["default"].createElement("div", { className: ' p-2 w-[300px] ' },
                react_1["default"].createElement("div", { className: 'text-gray-800 font-bold text-sm ' },
                    "$",
                    p4,
                    " || \u20B9",
                    p2 * product.quantityAdded),
                react_1["default"].createElement("div", { className: 'text-black font-bold text-sm  ' },
                    "Quality: ",
                    product.quality),
                react_1["default"].createElement("div", { className: 'text-black  font-semibold text-xs     ' },
                    "Size: ",
                    product.sizeStringB,
                    " || ",
                    product.sizeStringA),
                react_1["default"].createElement("div", { className: 'flex  justify-between ' },
                    react_1["default"].createElement("div", { className: 'flex align-center' },
                        react_1["default"].createElement("button", { onClick: function () {
                                addToCart(product.productId);
                            }, className: 'bg-gray-200 rounded-md mr-2' },
                            react_1["default"].createElement(image_1["default"], { src: '/plus.svg', width: 25, height: 25, alt: 'image' })),
                        react_1["default"].createElement("span", { className: 'text-black text-2xl font-bold select-none ' }, product.quantityAdded),
                        react_1["default"].createElement("button", { onClick: function () {
                                removeOneFromCart(product.productId);
                            }, className: 'bg-gray-200 rounded-md ml-2' },
                            react_1["default"].createElement(image_1["default"], { src: '/minus.svg', width: 25, height: 25, alt: 'image' }))),
                    react_1["default"].createElement("button", { onClick: function () {
                            removeFromCart(product.productId);
                        }, className: 'block' },
                        react_1["default"].createElement(image_1["default"], { src: '/delete.svg', width: 25, height: 25, alt: 'image' }))))),
        react_1["default"].createElement("hr", null)));
};
exports["default"] = CartItem;
