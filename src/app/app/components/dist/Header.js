'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var layout_1 = require("../layout");
var CartItem_1 = require("./CartItem");
var axios_1 = require("axios");
var Header = function () {
    var _a;
    var products = layout_1.useStore(function (state) { return state.products; });
    var isCartOpen = layout_1.useStore(function (state) { return state.isCartOpen; });
    var cartOpen = layout_1.useStore(function (state) { return state.cartOpen; });
    var cartClose = layout_1.useStore(function (state) { return state.cartClose; });
    var user = layout_1.useStore(function (state) { return state.user; });
    var setUser = layout_1.useStore(function (state) { return state.setUser; });
    console.log(products);
    var total = products
        .reduce(function (accumulator, product) {
        if (product.addedToCard) {
            accumulator += product.quantityAdded;
        }
        return accumulator;
    }, 0)
        .toString();
    var total_ = total;
    if (parseInt(total) < 10) {
        total_ = '0' + total;
    }
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
    var totalPriceInUSD = convertToUSD(totalPriceInINR);
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    react_1.useEffect(function () {
        function checkIfLogged() {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios_1["default"].get('http://localhost:3000/api/checkLogged')];
                        case 1:
                            res = _a.sent();
                            setUser(res.data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        checkIfLogged().then(function () { return console.log(user); });
    }, []);
    var _c = react_1.useState(false), profileBarOpen = _c[0], setProfileBarOpen = _c[1];
    return (react_1["default"].createElement("div", { className: 'border  w-full fixed  bg-white  top-[0px] left-[0px] ' },
        react_1["default"].createElement("div", { className: 'flex justify-between mb-2  align-center mx-4 mt-[9px] h-[30px]     ' },
            react_1["default"].createElement("div", { className: '' }, user.loggedIn ?
                react_1["default"].createElement("button", { className: ' rounded-[25px]  overflow-hidden', onClick: function () {
                        setProfileBarOpen(!profileBarOpen);
                    } }, profileBarOpen ? react_1["default"].createElement(image_1["default"], { src: '/close.svg', alt: 'profile', width: 25, height: 25 }) : react_1["default"].createElement(image_1["default"], { src: '/profile1.svg', width: 25, height: 25, alt: 'image' }))
                :
                    react_1["default"].createElement("button", { onClick: function () {
                            setIsOpen(function (prev) { return !prev; });
                        }, className: '' }, isOpen ? (react_1["default"].createElement(image_1["default"], { src: '/close.svg', width: 25, height: 25, alt: 'image' })) : (react_1["default"].createElement(image_1["default"], { alt: 'image', src: '/menu.svg', width: 25, height: 25 })))),
            react_1["default"].createElement("div", { className: 'relative bottom-[4px]' },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement(image_1["default"], { src: '/logo.jpg', alt: 'logo', width: 60, height: 50 }))),
            react_1["default"].createElement("div", { className: 'flex gap-2' },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("button", { onClick: function () {
                            cartOpen();
                        } },
                        react_1["default"].createElement(image_1["default"], { src: '/cart.svg', alt: 'cart', width: 25, height: 25 })),
                    parseInt(total_) > 0 ? (react_1["default"].createElement("div", { className: 'w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[40px] left-[15px] ' },
                        react_1["default"].createElement("span", { className: 'relative left-[3px] top-[2px] ' }, total_))) : (react_1["default"].createElement("div", { className: 'w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[30px] left-[15px] opacity-0 ' },
                        react_1["default"].createElement("span", { className: 'relative left-[3px] top-[2px]  ' }, " 00 ")))))),
        isOpen && (react_1["default"].createElement("div", { className: 'm-2' },
            react_1["default"].createElement(link_1["default"], { className: 'block w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md', href: '/auth/signup' }, "Sign Up"),
            react_1["default"].createElement(link_1["default"], { className: 'block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md', href: '/auth/signin' }, "Sign In"),
            react_1["default"].createElement(link_1["default"], { className: 'block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md', href: '/auth/signin' }, "My orders"),
            react_1["default"].createElement(link_1["default"], { className: 'block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md', href: '/auth/signin' }, "My addresses"))),
        isCartOpen && (react_1["default"].createElement("div", { className: 'px-4 py-2  rounded-md' },
            react_1["default"].createElement("div", { className: 'mb-2  align-center flex' },
                react_1["default"].createElement("span", { className: 'text-black font-bold mr-2' },
                    "Shopping Cart ", "(" + total_ + ")"),
                react_1["default"].createElement("button", { onClick: function () { return cartClose(); }, className: 'hover:bg-gray-100 rounded-md' },
                    react_1["default"].createElement(image_1["default"], { src: '/close.svg', width: 25, height: 25, alt: 'close' }))),
            react_1["default"].createElement("div", null, products.map(function (product, index) {
                if (product.quantityAdded > 0) {
                    var p1 = product.price.slice(4);
                    var p2 = parseFloat(p1 ? product.price.slice(1, 5) : product.price.slice(1, 4));
                    var p3 = p2 * 0.012;
                    return (react_1["default"].createElement(CartItem_1["default"], { product: product, p2: p2, p3: p3, key: index }));
                }
                return null;
            })),
            react_1["default"].createElement("div", { className: 'mt-2 flex bg-black justify-between p-2 align-center' },
                react_1["default"].createElement("div", { className: ' font-extrabold text-white border-white   align-center  ' },
                    react_1["default"].createElement("span", { className: 'block  relative top-[6px] ' },
                        "Total Price: $",
                        totalPriceInUSD,
                        " || \u20B9",
                        totalPriceInINR)),
                react_1["default"].createElement(link_1["default"], { href: "/app/checkout", className: 'bg-white text-black text-lg py-1  px-2 rounded-md font-bold' }, "CheckOut")))),
        profileBarOpen && (react_1["default"].createElement("div", { className: 'px-4 py-2 rounded-md' },
            react_1["default"].createElement("div", { className: ' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer' }, user.profileCreated ? react_1["default"].createElement("div", null,
                "Hi  ", (_a = user.firstName) === null || _a === void 0 ? void 0 :
                _a.toUpperCase())
                :
                    react_1["default"].createElement(link_1["default"], { href: '/profile' }, "Create Profile")),
            react_1["default"].createElement("div", { className: 'w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer' }, " My orders   "),
            react_1["default"].createElement("div", { className: 'w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer' }, " Settings "),
            react_1["default"].createElement("div", { className: ' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer' }, " Log out  ")))));
};
exports["default"] = Header;
