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
//import React from 'react'
var axios_1 = require("axios");
var react_1 = require("react");
var url_1 = require("@/app/url");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var Page = function () {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(true), passwordHidden = _c[0], setPasswordHidden = _c[1];
    var _d = react_1.useState('email'), mode = _d[0], setMode = _d[1];
    var _e = react_1.useState(''), phone = _e[0], setPhone = _e[1];
    var _f = react_1.useState(1), stage = _f[0], setStage = _f[1];
    var _g = react_1.useState('password'), type_ = _g[0], setType_ = _g[1];
    var _h = react_1.useState('initial'), otpPhoneState = _h[0], setOtpPhoneState = _h[1];
    var _j = react_1.useState('initial'), otpEmailState = _j[0], setOtpEmailState = _j[1];
    var _k = react_1.useState('initial'), passwordEmailState = _k[0], setPasswordEmailState = _k[1];
    var _l = react_1.useState('initial'), passwordPhoneState = _l[0], setPasswordPhoneState = _l[1];
    var _m = react_1.useState(''), isError = _m[0], setIsError = _m[1];
    var _o = react_1.useState(''), otp = _o[0], setOtp = _o[1];
    var router = navigation_1.useRouter();
    var checkPasswordWithEmail = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPasswordEmailState('loading');
                    return [4 /*yield*/, axios_1["default"].post('/api/auth/signin', { email: email, password: password }).then(function (res) { return res.data; })];
                case 1:
                    res = _a.sent();
                    if (!res.success) {
                        setIsError(res.msg);
                        setPasswordEmailState('initial');
                        return [2 /*return*/];
                    }
                    setPasswordEmailState('success');
                    router.replace('/new');
                    return [2 /*return*/];
            }
        });
    }); };
    var checkPasswordWithPhone = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPasswordPhoneState('loading');
                    return [4 /*yield*/, axios_1["default"].post(url_1["default"] + "/api/auth/signin", { email: email, password: password }).then(function (res) { return res.data; })];
                case 1:
                    res = _a.sent();
                    if (!res.success) {
                        setIsError(res.msg);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var sendOtpToEmail = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setOtpEmailState('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post('/api/auth/sendOTP/', { email: email }).then(function (res) { return res.data; })];
                case 2:
                    res = _a.sent();
                    if (!res.success) {
                        setIsError(res.msg);
                        setOtpEmailState('initial');
                        return [2 /*return*/];
                    }
                    setOtpEmailState('success');
                    setIsError('');
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    setIsError(JSON.stringify(e_1));
                    setOtpEmailState('initial');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var sendOtpToPhone = function () {
    };
    return (React.createElement("div", { className: '' },
        React.createElement("div", { className: 'flex flex-col justify-center items-center  h-[90vh]  gap-8' },
            React.createElement("div", { className: ' rounded-xl p-2   bg-white border-[1px] flex flex-col gap-16 justify-between  ' },
                React.createElement("div", { className: '' },
                    React.createElement("div", { className: 'text-2xl font-semibold text-black text-center cursor-pointer', onClick: function () { return router.replace('/new'); } }, "Welcome to YKDevoutExports"),
                    React.createElement("div", { className: 'text-xs font-bold text-center ' }, "Login to get exclusive products and services!")),
                mode === 'email' ? React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'flex flex-col gap-2' },
                        React.createElement("label", { className: 'block  text-xs text-black mb-[2px]', htmlFor: 'email' }, "Email "),
                        React.createElement("input", { type: 'text', placeholder: 'name@email.com', value: email, onChange: function (e) {
                                setEmail(e.target.value);
                            }, className: 'p-2 outline-none text-xs rounded-md bg-[#E9EAF2] text-black w-full', id: 'password' }),
                        React.createElement("label", { className: 'block  text-black text-xs ', htmlFor: 'password' }, "Password"),
                        React.createElement("div", null,
                            React.createElement("input", { value: password, onChange: function (e) {
                                    setPassword(e.target.value);
                                }, className: 'outline-none text-xs  rounded-sm bg-[#E9EAF2] text-black w-[90%] p-2', id: 'password', type: passwordHidden ? 'password' : 'text' }),
                            React.createElement("span", { className: "w-max  ", onClick: function () { return setPasswordHidden(!passwordHidden); } },
                                "  ",
                                passwordHidden ? React.createElement(image_1["default"], { className: "inline", src: '/eye.svg', alt: "", width: 20, height: 20 }) : React.createElement(image_1["default"], { alt: "", className: "inline", src: '/eyeclose.svg', width: 20, height: 20 }),
                                "  ")),
                        React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-black  text-lg text-center font-bold cursor-pointer', onClick: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(!email || !password)) return [3 /*break*/, 1];
                                        setIsError('Fill out the credentials first');
                                        return [3 /*break*/, 3];
                                    case 1:
                                        if (!(passwordEmailState === 'initial')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, checkPasswordWithEmail()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            }); }); } }, passwordEmailState === 'initial' ? 'Log in' : passwordEmailState === 'loading' ? 'Loading...' : 'Logged in successfully'),
                        React.createElement("div", { className: "text-center text-lg font-bold" }, " OR "),
                        React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-black  text-lg text-center font-bold cursor-pointer', onClick: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!email) return [3 /*break*/, 1];
                                        setIsError('Enter the email first');
                                        return [3 /*break*/, 3];
                                    case 1:
                                        if (!(otpEmailState === 'initial')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, sendOtpToEmail()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            }); }); } }, otpEmailState === 'initial' ? 'Send OTP for verfication' : otpEmailState === 'loading' ? 'Loading...' : otpEmailState === 'success' ?
                            React.createElement("div", { className: "flex flex-col  gap-2  " },
                                "  ",
                                React.createElement("input", { type: 'text', value: otp, onChange: function (e) { return setOtp(e.target.value); }, className: "block   outline-none  text-xl  text-black text-center rounded-md  " }),
                                " ",
                                React.createElement("button", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    setOtpEmailState('loading');
                                                    return [4 /*yield*/, axios_1["default"].post('/api/auth/checkOTP', { otp: otp }).then(function (res) { return res.data; })];
                                                case 1:
                                                    res = _a.sent();
                                                    if (!res.success) {
                                                        setIsError(res.msg);
                                                        setOtpEmailState('success');
                                                        return [2 /*return*/];
                                                    }
                                                    setOtpEmailState('done');
                                                    router.push('/new');
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, className: "bg-white text-black font-bold   text-xl rounded-2xl mx-[100px] " }, " Submit   "),
                                "  ") : 'Logged in successfuly')),
                    React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-black  text-sm text-center font-bold cursor-pointer', onClick: function () { return setMode('email'); } }, "  Login using phone number    "))
                    :
                        React.createElement(React.Fragment, null,
                            "   ",
                            React.createElement("div", { className: 'flex flex-col gap-2' },
                                React.createElement("label", { className: 'block  text-xs text-black mb-[2px]', htmlFor: 'phone' }, "Phone"),
                                React.createElement("input", { type: 'text', placeholder: '', value: phone, onChange: function (e) {
                                        setEmail(e.target.value);
                                    }, className: 'p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full', id: 'password' }),
                                React.createElement("label", { className: 'block  text-black text-xs ', htmlFor: 'password' }, "Password"),
                                React.createElement("div", null,
                                    React.createElement("input", { value: password, onChange: function (e) {
                                            setPassword(e.target.value);
                                        }, className: ' outline-none text-xs  rounded-sm bg-[#DDDEE7] text-black w-[90%] p-2', id: 'password', type: passwordHidden ? 'password' : 'text' }),
                                    React.createElement("span", { className: "w-max  ", onClick: function () { return setPasswordHidden(!passwordHidden); } },
                                        "  ",
                                        passwordHidden ? React.createElement(image_1["default"], { className: "inline", src: '/eye.svg', alt: "", width: 20, height: 20 }) : React.createElement(image_1["default"], { alt: "", className: "inline", src: '/eyeclose.svg', width: 20, height: 20 }),
                                        "  ")),
                                React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer', onClick: function () { return checkPasswordWithPhone; } }, "Log in"),
                                React.createElement("div", { className: "text-center text-lg" }, " OR "),
                                React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer', onClick: function () { return sendOtpToPhone; } }, "  Login using   OTP ")),
                            React.createElement("div", { className: ' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ', onClick: function () { setMode('email'); } }, "  Login using email    "))),
            isError &&
                React.createElement("div", { className: 'flex justify-center w-full' },
                    React.createElement("div", { className: 'w-[50%]  text-center  font-bold  rounded-md  text-white text-xl bg-red-500 p-2' }, isError),
                    React.createElement("button", { onClick: function () { return setIsError(''); }, className: "bg-blue-400  rounded-md" },
                        React.createElement(image_1["default"], { className: "", src: '/close.svg', alt: "", width: 20, height: 20 }))))));
};
exports["default"] = Page;
