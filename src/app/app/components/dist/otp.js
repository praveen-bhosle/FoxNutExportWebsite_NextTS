"use strict";
exports.__esModule = true;
var react_1 = require("react");
var countryCodes_1 = require("../lib/countryCodes");
var image_1 = require("next/image");
var OTP = function (_a) {
    var setPhone = _a.setPhone;
    var _b = react_1.useState(''), filter = _b[0], setFilter = _b[1];
    var _c = react_1.useState({ country: 'India', code: '91' }), countryObject = _c[0], setCountryObject = _c[1];
    var _d = react_1.useState(false), container = _d[0], setContainer = _d[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: ' px-2 py-1 text-black' },
            react_1["default"].createElement("div", { className: ' text-center cursor-pointer  border-2  border-black  rounded-md', onClick: function () { return setContainer(!container); } }, countryObject.country.trim()),
            react_1["default"].createElement("div", { className: 'mt-[30px] flex justify-center ' },
                react_1["default"].createElement("span", { className: 'mr-2 bg-white p-2 rounded-md select-none' },
                    "+",
                    countryObject.code.trim()),
                react_1["default"].createElement("input", { type: 'text', className: 'outline-none bg-white text-black rounded-md px-2', onKeyDown: function (e) {
                        if (isNaN(parseInt(e.key))) {
                            if (e.key !== 'Backspace')
                                e.preventDefault();
                        }
                    }, onChange: function (e) { setPhone('+' + countryObject.code.trim() + e.target.value); } }))),
        container &&
            react_1["default"].createElement("div", { className: 'bg-white absolute  p-[2px]  rounded-md bg-blue-50  w-[280px]  ' },
                react_1["default"].createElement("div", { className: 'flex gap-1 mt-[3px] mb-2' },
                    react_1["default"].createElement(image_1["default"], { width: 10, height: 10, src: '/search.svg', alt: 'search' }),
                    react_1["default"].createElement("input", { type: 'text', className: 'bg-[#F0F2F5] px-2 py-[2px] text-sm rounded-md  focus:outline-none', value: filter, onChange: function (e) { setFilter(e.target.value); } }),
                    filter ? react_1["default"].createElement(image_1["default"], { width: 10, height: 10, alt: 'close', src: '/close.svg', onClick: function () { setFilter(''); } }) : react_1["default"].createElement(image_1["default"], { width: 10, height: 10, alt: 'close', src: '/close.svg', className: 'opacity-0' })),
                react_1["default"].createElement("div", { className: 'h-[150px] overflow-y-scroll px-2' }, countryCodes_1.countryCodes.map(function (element, index) {
                    if (element[0].toLowerCase().includes(filter.toLowerCase())) {
                        return (react_1["default"].createElement("div", { key: index, className: 'flex justify-between py-2 hover:bg-[#F0F2F5] rounded-md px-2  text-sm select-none', onClick: function () {
                                setCountryObject({ country: element[0], code: element[1] });
                                setContainer(false);
                                setPhone('+' + element[1].trim());
                            } },
                            react_1["default"].createElement("div", { className: 'text-black' },
                                " ",
                                element[0],
                                " "),
                            react_1["default"].createElement("div", null,
                                " ",
                                element[1],
                                " ")));
                    }
                    return null;
                })))));
};
exports["default"] = OTP;
// add for phone 
