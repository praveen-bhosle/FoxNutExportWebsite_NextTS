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
var image_1 = require("next/image");
var link_1 = require("next/link");
var url_1 = require("@/app/url");
var otp_1 = require("@/app/app/components/otp");
var page = function () {
    var _a = react_2.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_2.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_2.useState('+91'), phone = _c[0], setPhone = _c[1];
    var _d = react_2.useState('email'), mode = _d[0], setMode = _d[1];
    var _e = react_2.useState('initial'), globalState = _e[0], setGlobalState = _e[1];
    var _f = react_2.useState(''), isError = _f[0], setIsError = _f[1];
    var _g = react_2.useState('initial'), finalState = _g[0], setFinalState = _g[1];
    var _h = react_2.useState(''), OTP_ = _h[0], setOTP = _h[1];
    var _j = react_2.useState(0), otpId = _j[0], setOtpId = _j[1];
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
    var hasLowerCase = function (str) { return /[a-z]/.test(str); };
    var hasUpperCase = function (str) { return /[A-Z]/.test(str); };
    var hasNumber = function (str) { return /[0-9]/.test(str); };
    var hasSpecialCharacter = function (str) { return /[^a-zA-Z0-9\s]/.test(str); };
    if (mode === 'email' && globalState !== 'signedUp') {
        return (react_1["default"].createElement("div", { className: 'flex flex-col justify-center  h-[70vh]  ' },
            react_1["default"].createElement("div", { className: 'flex justify-center ' },
                react_1["default"].createElement("div", { className: 'h-[398px]   w-[392px] rounded-xl p-[20px]  bg-[#E9EAF2] flex flex-col justify-between' },
                    react_1["default"].createElement("div", { className: '' },
                        react_1["default"].createElement("div", { className: 'text-2xl font-semibold text-black text-center' },
                            "Welcome to ",
                            react_1["default"].createElement("span", { className: 'text-[#3F6EEA]' }, "YKDevoutExports")),
                        react_1["default"].createElement("div", { className: 'text-xs font-bold text-center ' }, "Signup to get exclusive products and services!")),
                    globalState === 'initial' ? react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("div", { className: 'mx-4 mb-4 text-black ' },
                            react_1["default"].createElement("div", null, " Enter your email address "),
                            react_1["default"].createElement("input", { type: 'text', placeholder: 'name@email.com', value: email, onChange: function (e) {
                                    setEmail(e.target.value);
                                }, className: 'p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full mb-2' }),
                            react_1["default"].createElement("br", null),
                            react_1["default"].createElement("button", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var body, res, resBody, e_1;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                setGlobalState('loading');
                                                body = { email: email };
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/, axios_1["default"].post('/api/brevoEmail/sendOTP', body)];
                                            case 2:
                                                res = _a.sent();
                                                resBody = res.data;
                                                console.log(resBody);
                                                console.log(res);
                                                if (resBody.success === 'true') {
                                                    setOtpId(resBody.id);
                                                    setGlobalState('success');
                                                    setIsError('');
                                                }
                                                else {
                                                    setGlobalState('initial');
                                                    setIsError(resBody.msg);
                                                }
                                                return [3 /*break*/, 4];
                                            case 3:
                                                e_1 = _a.sent();
                                                console.log(e_1);
                                                setGlobalState('initial');
                                                setIsError('Internal server error.');
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); }, className: ' text-white  px-4 py-2 rounded-md w-full bg-[#95A2ED] text-xs' },
                                ' ',
                                "Get verification code",
                                ' ')),
                        react_1["default"].createElement("div", { className: 'mx-[19%] ' },
                            react_1["default"].createElement("button", { className: 'bg-[#5826EB] w-full text-white py-2 px-4 text-sm rounded-md' }, " Sign up with Phone Number   ")),
                        "   ")
                        : globalState === 'loading' ?
                            react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("div", { className: 'text-center' }, " Loading... "),
                                react_1["default"].createElement("div", { className: 'text-[#E9EAF2] select-none' }, " sampletext  "))
                            :
                                react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("div", { className: 'mb-2 mx-2 text-lg font-bold text-black' }, " Enter the six digit  OTP  "),
                                        react_1["default"].createElement("div", { className: 'flex justify-center' },
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement("input", { type: 'text', value: OTP_, onChange: function (e) {
                                                        setOTP(e.target.value);
                                                    }, className: 'px-2 py-2 outline-none rounded-md text-xl font-bold text-black w-[100px] ' }))),
                                        react_1["default"].createElement("div", { className: 'flex justify-center' },
                                            react_1["default"].createElement("div", { className: ' text-center mt-4 bg-black  w-[40%] text-white font-bold  rounded-[20px] border-2 cursor-pointer py-[4px] select-none ', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var response;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, axios_1["default"].post(url_1["default"] + "/api/authcheckOTP/", { OTP: otp_1["default"], otpId: otpId, email: email }).then(function (res) { return res.data; })];
                                                            case 1:
                                                                response = _a.sent();
                                                                if (response.success === 'true') {
                                                                    setGlobalState('signedUp');
                                                                }
                                                                else {
                                                                    setIsError(response.msg);
                                                                }
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); } }, "Submit"))),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { className: 'w-full text-center bg-[#3E6EEA] p-2 text-white rounded-md  ' }, "Go back"))))),
            isError &&
                (react_1["default"].createElement("div", { className: 'w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]' }, isError))));
    }
    else if (mode === 'phone' && globalState !== 'signedUp') {
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
                        }, className: ' text-white  px-4 py-2 rounded-md w-full  text-xs', style: verficationButtonStyles }, "Get Verification code"),
                    react_1["default"].createElement("div", { className: 'mx-[19%] ' },
                        react_1["default"].createElement("button", { className: 'bg-[#5826EB] w-full text-white py-2 px-4 text-sm rounded-md', onClick: function () { return setMode('email'); } }, " Sign up with Email    ")))),
            isError &&
                (react_1["default"].createElement("div", { className: 'w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]' }, isError))));
    }
    else {
        return (react_1["default"].createElement("div", { className: 'flex flex-col justify-center  h-[70vh]   ' },
            react_1["default"].createElement("div", { className: 'flex justify-center ' },
                react_1["default"].createElement("div", { className: 'h-[398px]   w-[392px] rounded-xl p-[20px]  bg-[#E9EAF2] flex flex-col justify-between' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: 'text-2xl font-semibold text-black text-center' },
                            "Welcome to ",
                            react_1["default"].createElement("span", { className: 'text-[#3F6EEA]' }, "YKDevoutExports")),
                        react_1["default"].createElement("div", { className: 'text-black' }, "Signed up and logged in successfully.")),
                    finalState === 'initial' ?
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: 'my-2 text-black' }, " Enter password "),
                                react_1["default"].createElement("input", { type: 'text', className: 'focus:outline-none px-2 rounded-md', value: password, onChange: function (e) { return setPassword(e.target.value); } }),
                                react_1["default"].createElement("div", { className: 'text-xs' },
                                    " Password should follow this pattern:",
                                    react_1["default"].createElement("li", { className: '' },
                                        "   Atleast 8 characters long.   ",
                                        password.length >= 8 && react_1["default"].createElement(image_1["default"], { src: '/tick4.svg', alt: 'image', width: 10, height: 10, className: 'inline' }),
                                        "  "),
                                    react_1["default"].createElement("li", null,
                                        " Atleast one lowercase letter.   ",
                                        hasLowerCase(password) && react_1["default"].createElement(image_1["default"], { src: '/tick4.svg', alt: 'image', width: 10, height: 10, className: 'inline' }),
                                        "   "),
                                    react_1["default"].createElement("li", null,
                                        " Atleast one uppercase letter.   ",
                                        hasUpperCase(password) && react_1["default"].createElement(image_1["default"], { src: '/tick4.svg', alt: 'image', width: 10, height: 10, className: 'inline' }),
                                        "  "),
                                    react_1["default"].createElement("li", null,
                                        "      Atleast one number.  ",
                                        hasNumber(password) && react_1["default"].createElement(image_1["default"], { src: '/tick4.svg', alt: 'image', width: 10, height: 10, className: 'inline' }),
                                        "  "),
                                    react_1["default"].createElement("li", null,
                                        " Atleast one special character. ",
                                        "{@,#,!,<,etc}",
                                        "  ",
                                        hasSpecialCharacter(password) && react_1["default"].createElement(image_1["default"], { src: '/tick4.svg', alt: 'image', width: 10, height: 10, className: 'inline' }),
                                        "  ")),
                                password.length >= 8 && hasLowerCase(password) && hasUpperCase(password) && hasNumber(password) && hasSpecialCharacter(password) &&
                                    react_1["default"].createElement("button", { className: 'my-2 text-black bg-[#3E6EEA] text-white  px-2 rounded-xl', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        setFinalState('loading');
                                                        return [4 /*yield*/, axios_1["default"].post("/api/setPassword", { email: email, password: password }).then(function (response) { return response.data; })];
                                                    case 1:
                                                        res = _a.sent();
                                                        if (res.success) {
                                                            setFinalState('final');
                                                        }
                                                        else {
                                                            setIsError(res.msg);
                                                            setFinalState('initial');
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); } }, "Set up password"),
                                react_1["default"].createElement("span", { className: 'text-xs block text-black font-bold mt-2' }, "  * Setting password is optional.You can also login by getting a verification  code to your email/phone.  ")),
                            " ") :
                        finalState === 'loading' ? react_1["default"].createElement("div", { className: 'text-center text-xl font-bold text-black ' }, "Loading... ") :
                            react_1["default"].createElement("div", { className: 'text-center text-xl font-bold text-black' }, "Password set successfully."),
                    react_1["default"].createElement(link_1["default"], { href: "/", className: 'w-full text-center bg-[#3E6EEA] text-white rounded-md py-[2px]  ' }, "Go to home page"))),
            isError &&
                (react_1["default"].createElement("div", { className: 'w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]' }, isError))));
    }
};
exports["default"] = page;
