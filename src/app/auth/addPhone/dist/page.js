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
var react_2 = require("react");
var axios_1 = require("axios");
var otp_1 = require("../../app/components/otp");
var page = function () {
    var _a = react_2.useState('+91'), phone = _a[0], setPhone = _a[1];
    var _b = react_2.useState(''), isError = _b[0], setIsError = _b[1];
    var verficationButtonStyles = { backgroundColor: "#95A2ED", cursor: 'not-allowed' };
    if (phone.substring(0, 3) === '+91') {
        console.log(phone.length);
        if (phone.length >= 13) {
            verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' };
        }
    }
    else if (phone.substring(0, 2) === '+1') {
        console.log(phone.length);
        if (phone.length >= 12)
            verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' };
    }
    else {
        console.log(phone);
        verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' };
    }
    var sendVerificationCode = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('/api/authOTP/', { phoneNumber: phone })];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: 'flex flex-col justify-center  h-[70vh]   ' },
        react_1["default"].createElement("div", { className: 'flex justify-center ' },
            react_1["default"].createElement("div", { className: 'h-[398px]   w-[392px] rounded-xl p-[20px]  bg-[#E9EAF2] flex flex-col justify-between' },
                react_1["default"].createElement("div", { className: '' },
                    react_1["default"].createElement("div", { className: 'text-2xl font-semibold text-black text-center' },
                        "Welcome to ",
                        react_1["default"].createElement("span", { className: 'text-[#3F6EEA]' }, "YKDevoutExports")),
                    react_1["default"].createElement("div", { className: 'text-xs font-bold text-center ' }, "Signup to get exclusive products and services!")),
                react_1["default"].createElement("div", { className: 'text-lg  text-black text-center' }, " Enter Phone Number "),
                react_1["default"].createElement("div", { className: '' },
                    react_1["default"].createElement(otp_1["default"], { setPhone: setPhone })),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("button", { onClick: function () {
                        sendVerificationCode();
                    }, className: ' text-white  px-4 py-2 rounded-md w-full  text-xs', style: verficationButtonStyles },
                    ' ',
                    "Get Verification code ",
                    ' '))),
        isError &&
            (react_1["default"].createElement("div", { className: 'w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]' }, isError))));
};
exports["default"] = page;
