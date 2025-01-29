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
var layout_1 = require("../layout");
var link_1 = require("next/link");
var axios_1 = require("axios");
var url_1 = require("@/app/url");
var Page = function () {
    var user = layout_1.useStore(function (state) { return state.user; });
    console.log(user);
    console.log(user.id + " " + user.email);
    var submitForm = function (formData) { return __awaiter(void 0, void 0, void 0, function () {
        var firstName, lastName, address, city, state, country, zipcode, profileObject, res;
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    firstName = (_a = formData.get('firstName')) === null || _a === void 0 ? void 0 : _a.toString();
                    lastName = (_b = formData.get('lastName')) === null || _b === void 0 ? void 0 : _b.toString();
                    address = (_c = formData.get('address')) === null || _c === void 0 ? void 0 : _c.toString();
                    city = (_d = formData.get('city')) === null || _d === void 0 ? void 0 : _d.toString();
                    state = (_e = formData.get('state')) === null || _e === void 0 ? void 0 : _e.toString();
                    country = (_f = formData.get('country')) === null || _f === void 0 ? void 0 : _f.toString();
                    zipcode = (_g = formData.get('zipcode')) === null || _g === void 0 ? void 0 : _g.toString();
                    console.log(user.id);
                    profileObject = {
                        firstName: firstName,
                        lastName: lastName,
                        address: address,
                        city: city,
                        state: state,
                        country: country,
                        zipcode: zipcode,
                        userID: user.id
                    };
                    if (!user.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios_1["default"].post('/api/createProfile', profileObject).then(function (res) { return res.data; })];
                case 1:
                    res = _h.sent();
                    if (!res.success) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios_1["default"].get(url_1["default"] + "/api/checkLogged")];
                case 2:
                    _h.sent();
                    _h.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (!user.profileCreated) {
        return (react_1["default"].createElement("div", { className: 'p-2 bg-[#E9EAF2] m-2 rounded-md text-black' },
            react_1["default"].createElement("form", { action: submitForm },
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'firstName' }, "  First  Name"),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', id: 'firstName', name: 'firstName', required: true, className: 'text-sm px-2 outline-none text-right' })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'lastName' }, "  Last Name"),
                    "   ",
                    react_1["default"].createElement("input", { type: 'text', id: 'lastName', name: 'lastName', required: true, className: 'text-sm px-2 outline-none text-right' })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", null, " Email "),
                    " ",
                    user.email ? react_1["default"].createElement("input", { type: 'text', placeholder: user.email, disabled: true, required: true, className: 'text-sm px-2 outline-none text-right' }) : react_1["default"].createElement("button", { className: '' }, " Add email"),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", null, " Phone"),
                    " ",
                    user.phone ? react_1["default"].createElement("input", { type: 'text', placeholder: user.phone, disabled: true, className: 'text-right' }) : react_1["default"].createElement(link_1["default"], { className: 'bg-blue-500 text-white font-bold px-2 rounded-sm', href: '/addPhone' }, " Add phone ")),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'address' }, " Address "),
                    "   ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'address', name: 'address', className: 'text-sm px-2 outline-none text-right' })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'city' }, " City  "),
                    "        ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'city', name: 'city', className: 'text-sm px-2 outline-none text-right' }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'state' }, " State    "),
                    "    ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'state', name: 'state', className: 'text-sm px-2 outline-none text-right' }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'country' }, " Country  "),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'country', name: 'country', className: 'text-sm px-2 outline-none text-right' }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'pin' }, " ZIP/PIN Code  "),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'pin', name: 'pin', className: 'text-sm px-2 outline-none text-right' }),
                    " "),
                react_1["default"].createElement("button", { className: 'w-[50%] align-center  bg-blue-500 text-white mx-[25%]', type: 'submit' }, " Update data "))));
    }
    else {
        return (react_1["default"].createElement("div", { className: 'p-2 bg-[#E9EAF2] m-2 rounded-md text-black' },
            react_1["default"].createElement("form", { action: submitForm },
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'firstName' }, "  First  Name"),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', id: 'firstName', placeholder: user.firstName, name: 'firstName', required: true, className: 'text-sm px-2 outline-none text-right', disabled: true })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'lastName' }, "  Last Name"),
                    "   ",
                    react_1["default"].createElement("input", { type: 'text', id: 'lastName', name: 'lastName', required: true, className: 'text-sm px-2 outline-none text-right', placeholder: user.lastName, disabled: true })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", null, " Email "),
                    " ",
                    user.email ? react_1["default"].createElement("input", { type: 'text', placeholder: user.email, disabled: true, required: true, className: 'text-sm px-2 outline-none text-right' }) : react_1["default"].createElement("button", { className: '' }, " Add email"),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", null, " Phone"),
                    " ",
                    user.phone ? react_1["default"].createElement("input", { type: 'text', placeholder: user.phone, disabled: true, className: 'text-right' }) : react_1["default"].createElement(link_1["default"], { className: 'bg-blue-500 text-white font-bold px-2 rounded-sm', href: '/addPhone' }, " Add phone ")),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'address' }, " Address "),
                    "   ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'address', name: 'address', className: 'text-sm px-2 outline-none text-right', placeholder: user.address, disabled: true })),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'city' }, " City  "),
                    "        ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'city', name: 'city', className: 'text-sm px-2 outline-none text-right', placeholder: user.city, disabled: true }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'state' }, " State    "),
                    "    ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'state', name: 'state', className: 'text-sm px-2 outline-none text-right', placeholder: user.state, disabled: true }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'country' }, " Country  "),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'country', name: 'country', className: 'text-sm px-2 outline-none text-right', placeholder: user.country, disabled: true }),
                    " "),
                react_1["default"].createElement("div", { className: 'flex justify-between my-2' },
                    react_1["default"].createElement("label", { htmlFor: 'pin' }, " ZIP/PIN Code  "),
                    "  ",
                    react_1["default"].createElement("input", { type: 'text', required: true, id: 'pin', name: 'pin', className: 'text-sm px-2 outline-none text-right', placeholder: user.zipcode, disabled: true }),
                    " "))));
    }
};
exports["default"] = Page;
