"use client";
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
var react_1 = require("react");
var layout_1 = require("../layout");
//import CartItem from '../CartItem'
var image_1 = require("next/image");
var link_1 = require("next/link");
var Page = function () {
    var products = layout_1.useStore(function (state) { return state.products; });
    var cartClose = layout_1.useStore(function (state) { return state.cartClose; });
    var user = layout_1.useStore(function (state) { return state.user; });
    var removeFromCart = layout_1.useStore(function (state) { return state.removeFromCart; });
    var removeOneFromCart = layout_1.useStore(function (state) { return state.removeOneFromCart; });
    var addToCart = layout_1.useStore(function (state) { return state.addToCart; });
    var total = products.reduce(function (accumulator, product) {
        if (product.quantityAdded > 0) {
            accumulator += product.quantityAdded;
        }
        return accumulator;
    }, 0);
    var totalPriceInINR = products.reduce(function (accumulator, product) {
        var p1 = product.price.slice(4);
        var p2 = parseFloat(p1 ? product.price.slice(1, 5) : product.price.slice(1, 4));
        if (product.quantityAdded > 0) {
            accumulator += product.quantityAdded * p2;
        }
        return accumulator;
    }, 0);
    function convertToUSD(totalPriceInINR) {
        var y = totalPriceInINR * 0.012;
        var ans = y.toFixed(2);
        return parseFloat(ans);
    }
    var _a = react_1.useState(false), isOpen1 = _a[0], setIsOpen1 = _a[1];
    var totalPriceInUSD = convertToUSD(totalPriceInINR);
    react_1.useEffect(function () { cartClose(); }, []);
    var _b = react_1.useState({ address: user.address, city: user.city, state: user.state, country: user.country, zipcode: user.zipcode }), addressObject = _b[0], setAddressObject = _b[1];
    var _c = react_1.useState(''), gateway = _c[0], setGateway = _c[1];
    return (react_1["default"].createElement("div", { className: 'text-black' },
        react_1["default"].createElement("div", { className: 'border-2 rounded-md' },
            react_1["default"].createElement("div", { className: 'flex justify-between bg-[#F5F5F5] px-2 ', onClick: function () {
                    console.log("hi");
                    setIsOpen1(!isOpen1);
                } },
                react_1["default"].createElement("div", { className: 'font-bold select-none' }, "Order Summary"),
                react_1["default"].createElement("div", { className: 'font-bold select-none' },
                    "Product Cost:   \u20B9",
                    totalPriceInINR,
                    " || $",
                    totalPriceInUSD)),
            isOpen1 && (react_1["default"].createElement("div", { className: 'p-2' }, products.map(function (product, index) {
                var p1 = product.price.slice(4);
                var p2 = parseFloat(p1 ? product.price.slice(1, 5) : product.price.slice(1, 4));
                var p3 = p2 * 0.012;
                if (product.quantityAdded > 0) {
                    return (react_1["default"].createElement("div", { className: ' flex  my-2 rounded-md  border-grey-500  border-2 px-2 py-[2px] text-black font-bold ', key: index },
                        react_1["default"].createElement("div", { className: 'w-[35%] flex gap-2' },
                            react_1["default"].createElement("div", { className: ' text-[10px] text-black  font-bold' },
                                react_1["default"].createElement("div", { className: '' },
                                    " ",
                                    product.quality,
                                    " "),
                                react_1["default"].createElement("div", { className: '' },
                                    product.sizeStringA,
                                    "  "),
                                react_1["default"].createElement("div", null, product.sizeStringB))),
                        react_1["default"].createElement("div", { className: 'w-[45%]' },
                            react_1["default"].createElement("div", { className: 'flex justify-between h-full items-center  ' },
                                react_1["default"].createElement("div", { className: 'flex gap-2 border-[1px] rounded-md border-black text-black font-bold  text-lg p-[2px] ' },
                                    react_1["default"].createElement("button", { className: 'bg-blue-100  border-2 rounded-md ' },
                                        react_1["default"].createElement(image_1["default"], { src: '/minus.svg', width: 20, height: 20, alt: 'image', className: '', onClick: function () { return removeOneFromCart(product.productId); } })),
                                    product.quantityAdded,
                                    react_1["default"].createElement("button", { className: 'bg-blue-100  border-2 rounded-md', onClick: function () { return addToCart(product.productId); } },
                                        react_1["default"].createElement(image_1["default"], { src: '/plus.svg', width: 20, height: 20, alt: 'image' }))),
                                react_1["default"].createElement("div", { className: 'cursor-pointer', onClick: function () { return removeFromCart(product.productId); } },
                                    react_1["default"].createElement(image_1["default"], { src: '/delete.svg', width: 35, height: 35, alt: 'image' })))),
                        react_1["default"].createElement("div", { className: 'w-[20%]  text-right text-xs  items-center ' },
                            react_1["default"].createElement("div", { className: ' flex h-full items-center justify-end' },
                                react_1["default"].createElement("div", null,
                                    "\u20B9",
                                    p2 * product.quantityAdded,
                                    " ",
                                    react_1["default"].createElement("br", null),
                                    " $",
                                    (p3 * product.quantityAdded).toFixed(2),
                                    " ")))));
                }
                return null;
            })))),
        user.loggedIn ?
            react_1["default"].createElement(react_1["default"].Fragment, null,
                "  ",
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", null, " Email "),
                            "  ",
                            user.email ? react_1["default"].createElement("input", { type: 'text', required: true, className: 'text-sm px-2 outline-none  border-2 border-black', disabled: true }) : react_1["default"].createElement(link_1["default"], { href: '/auth/signup' }, " Add email "),
                            "  "),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", null, " Phone"),
                            "  ",
                            user.phone ? react_1["default"].createElement("input", { type: 'text', className: 'text-sm px-2 outline-none  border-2 border-black ', value: user.phone }) : react_1["default"].createElement(link_1["default"], { href: '/autn/signup' }, " Add Phome   ")),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", { htmlFor: 'address' }, " Address "),
                            "   ",
                            react_1["default"].createElement("input", { type: 'text', required: true, id: 'address', name: 'address', className: 'text-sm px-2 outline-none  border-2 border-black', value: addressObject.address, onChange: function (e) {
                                    setAddressObject(__assign(__assign({}, addressObject), { address: e.target.value }));
                                } })),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", { htmlFor: 'city' }, " City  "),
                            "        ",
                            react_1["default"].createElement("input", { type: 'text', required: true, id: 'city', name: 'city', className: 'text-sm px-2 outline-none border-2 border-black', value: addressObject.city, onChange: function (e) {
                                    setAddressObject(__assign(__assign({}, addressObject), { city: e.target.value }));
                                } }),
                            " "),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", { htmlFor: 'state' }, " State    "),
                            "    ",
                            react_1["default"].createElement("input", { type: 'text', required: true, id: 'state', name: 'state', className: 'text-sm px-2 outline-none border-2 border-black', value: addressObject.state, onChange: function (e) {
                                    setAddressObject(__assign(__assign({}, addressObject), { state: e.target.value }));
                                } }),
                            " "),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", { htmlFor: 'country' }, " Country  "),
                            "  ",
                            react_1["default"].createElement("input", { type: 'text', required: true, id: 'country', name: 'country', className: 'text-sm px-2 outline-none border-2 border-black', value: addressObject.country, onChange: function (e) {
                                    setAddressObject(__assign(__assign({}, addressObject), { country: e.target.value }));
                                } }),
                            " "),
                        react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                            react_1["default"].createElement("label", { htmlFor: 'pin' }, " ZIP/PIN Code  "),
                            "  ",
                            react_1["default"].createElement("input", { type: 'text', required: true, id: 'pin', name: 'pin', className: 'text-sm px-2 outline-none border-2 border-black', value: addressObject.zipcode, onChange: function (e) {
                                    setAddressObject(__assign(__assign({}, addressObject), { zipcode: e.target.value }));
                                } }),
                            " "))),
                react_1["default"].createElement("div", { className: 'p-2 border-2 border-gray-200' },
                    react_1["default"].createElement("div", { className: 'font-bold text-black' }, " Payment Method "),
                    react_1["default"].createElement("div", { className: 'text-xs' }, "All transactions are secure and encrypted."),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("form", null,
                            react_1["default"].createElement("label", { className: 'block w-full' },
                                react_1["default"].createElement("input", { type: 'radio', name: 'gateway', value: 'razorpay', onClick: function () { return setGateway('Razorpay'); } }),
                                react_1["default"].createElement("span", null, " Razorpay  ")),
                            react_1["default"].createElement("label", { className: 'block w-full' },
                                react_1["default"].createElement("input", { type: 'radio', name: 'gateway', value: 'paypal', onClick: function () { return setGateway('Paypal'); } }),
                                react_1["default"].createElement("span", null, " Paypal "))))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'flex justify-between' },
                        react_1["default"].createElement("div", { className: 'text-xs' },
                            " Subtotal ",
                            total,
                            " items "),
                        react_1["default"].createElement("div", { className: 'text-xs' },
                            ' ',
                            "\u20B9",
                            totalPriceInINR,
                            " || $",
                            totalPriceInUSD,
                            ' ')),
                    react_1["default"].createElement("div", { className: 'flex justify-between' },
                        react_1["default"].createElement("div", { className: 'tex-xs' }, " Shipping "),
                        react_1["default"].createElement("div", { className: 'text-xs' }, " 0 ")),
                    react_1["default"].createElement("div", { className: 'flex justify-between' },
                        react_1["default"].createElement("div", { className: 'text-lg font-bold' }, " Total "),
                        react_1["default"].createElement("div", { className: 'text-lg font-bold' },
                            ' ',
                            "\u20B9",
                            totalPriceInINR,
                            " || $",
                            totalPriceInUSD,
                            ' '))),
                react_1["default"].createElement("div", { className: 'flex justify-center w-full py-2' },
                    react_1["default"].createElement("div", { className: 'text-2xl font-bold bg-black text-white p-2  cursor-pointer' }, " Pay Now ")))
            :
                react_1["default"].createElement("div", { className: 'border-2 my-2' },
                    react_1["default"].createElement(link_1["default"], { href: "/auth/signup" }, " Sign up to order   "))));
};
exports["default"] = Page;
