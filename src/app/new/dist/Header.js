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
var image_1 = require("next/image");
var link_1 = require("next/link");
var axios_1 = require("axios");
var layout_1 = require("../app/layout");
var Header = function () {
    var user = layout_1.useStore(function (state) { return state.user; });
    var setUser = layout_1.useStore(function (state) { return state.setUser; });
    react_1.useEffect(function () { if (user) {
        axios_1["default"].get;
    } }, [user]);
    react_1.useEffect(function () {
        var checkLoggedIn = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get('/api/auth/checkLogged').then(function (res) { return res.data; })];
                    case 1:
                        res = _a.sent();
                        if (res.loggedIn) {
                            setUser({ loggedIn: true });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        checkLoggedIn();
    }, [user]);
    return (react_1["default"].createElement("div", { className: 'bg-white  flex justify-between w-full fixed top-0 left-0' },
        react_1["default"].createElement(link_1["default"], { href: '/' },
            react_1["default"].createElement(image_1["default"], { src: '/logp.jpeg', alt: '', width: 50, height: 50 })),
        react_1["default"].createElement("div", { className: 'flex gap-4 py-2 px-4' }, user.loggedIn ?
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(link_1["default"], { href: '/app/profile' },
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: '/profile.svg', alt: '', width: 40, height: 40 }),
                    "  "),
                react_1["default"].createElement("button", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, axios_1["default"].put("/api/auth/signout")];
                                case 1:
                                    _a.sent();
                                    setUser({ loggedIn: false });
                                    return [2 /*return*/];
                            }
                        });
                    }); } }, " Log out "),
                " ")
            :
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(link_1["default"], { href: '/auth/signup' }, " Sign up  "),
                    react_1["default"].createElement(link_1["default"], { href: '/auth/signin' }, " Log in   ")))));
};
exports["default"] = Header;
