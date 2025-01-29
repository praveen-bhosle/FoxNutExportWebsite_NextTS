"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var Footer = function () {
    return (react_1["default"].createElement("div", { className: 'bg-black  text-white px-4 py-4' },
        react_1["default"].createElement("div", { className: ' grid grid-cols-2 gap-2 text-lg py-4' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: 'text-xl font-bold' }, " Resources  "),
                react_1["default"].createElement(link_1["default"], { href: '', className: 'hover:underline block' }, " Blog   "),
                react_1["default"].createElement(link_1["default"], { href: '', className: 'hover:underline block' }, " Customer stories  ")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: 'text-xl font-bold' }, " Company  "),
                react_1["default"].createElement(link_1["default"], { href: '/about', className: 'hover:underline block cursor' }, " About us "),
                react_1["default"].createElement(link_1["default"], { href: '', className: 'hover:underline block' }, " Jobs ")),
            react_1["default"].createElement("div", { className: 'col-span-2' },
                react_1["default"].createElement("div", { className: 'text-xl font-bold' }, " Contact Us "),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(image_1["default"], { src: '/call.svg', alt: 'image', width: 20, height: 20, className: 'inline' }),
                    " +917899255947   "),
                react_1["default"].createElement("div", { className: '' },
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: '/mail.svg', alt: 'image', width: 20, height: 20, className: 'inline' }),
                    " ykdevoutexports2024@gmail.com  "),
                react_1["default"].createElement("div", null,
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: '/location.svg', alt: 'image', width: 20, height: 20, className: 'inline' }),
                    "  Rajendra Nagar, Madhubani Purnea, Purnea,  \u00A0\u00A0\u00A0\u00A0\u00A0Purnea,  Purnia- 854301, Bihar, India  "))),
        react_1["default"].createElement("div", { className: 'flex  gap-4 px-4 pb-4 ' },
            react_1["default"].createElement("div", { className: 'w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' },
                react_1["default"].createElement(image_1["default"], { src: '/instagram.svg', alt: 'image', width: 40, height: 40 }),
                " "),
            react_1["default"].createElement("div", { className: 'w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' },
                react_1["default"].createElement(image_1["default"], { src: '/yt.svg', alt: 'image', width: 44, height: 44 })),
            react_1["default"].createElement("div", { className: 'w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' },
                react_1["default"].createElement(image_1["default"], { src: '/facebook.svg', alt: 'image', width: 45, height: 45 })),
            react_1["default"].createElement("div", { className: 'w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' },
                react_1["default"].createElement(image_1["default"], { src: '/x.svg', alt: 'image', width: 50, height: 50 })),
            react_1["default"].createElement("div", { className: 'w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' },
                react_1["default"].createElement(link_1["default"], { href: 'mailto:ykdevoutexports2024@gmail.com?subject=MakhanaOrderQueries' },
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: '/mail.svg', alt: 'mail', width: 40, height: 40 }),
                    "  "),
                " "))));
};
exports["default"] = Footer;
/*

*/
