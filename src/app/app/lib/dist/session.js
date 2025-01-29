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
exports.verifySession = exports.deleteSession = exports.updateSession = exports.createSession = exports.decrypt = exports.encrypt = exports.encryptCredentials = void 0;
require("server-only");
var headers_1 = require("next/headers");
var crypto_1 = require("crypto");
if (!process.env.AES_KEY) {
    throw new Error('AES_KEY is undefined');
}
if (!process.env.AES_IV) {
    throw new Error('AES_IV is undefined');
}
var key = Buffer.from(process.env.AES_KEY, 'base64');
var iv = Buffer.from(process.env.AES_IV, 'base64');
exports.encryptCredentials = {
    key: key,
    iv: iv
};
exports.encrypt = function (data, key, iv) {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }
    var cipher = crypto_1["default"].createCipheriv('aes-256-cbc', key, iv);
    var encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};
exports.decrypt = function (data, key, iv) {
    var cipher = crypto_1["default"].createDecipheriv('aes-256-cbc', key, iv);
    var decrypted = cipher.update(data, 'hex', 'utf8');
    decrypted += cipher.final('utf8');
    return decrypted;
};
function createSession(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var expiresAt, sessionObject, sessionValue, cookieStore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
                    sessionObject = { userId: userId, expiresAt: expiresAt };
                    sessionValue = exports.encrypt(sessionObject, key, iv);
                    return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookieStore = _a.sent();
                    cookieStore.set('session', sessionValue, {
                        httpOnly: true,
                        secure: false,
                        expires: expiresAt,
                        sameSite: 'lax',
                        path: '/'
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.createSession = createSession;
function updateSession() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cookies_, session, payload, expires;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookies_ = _b.sent();
                    session = (_a = cookies_.get('session')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!session)
                        return [2 /*return*/];
                    payload = exports.decrypt(session, key, iv);
                    if (!payload)
                        return [2 /*return*/];
                    expires = 24 * 60 * 60 * 1000;
                    cookies_.set('session', session, {
                        expires: expires,
                        httpOnly: true,
                        secure: false,
                        sameSite: 'lax',
                        path: '/'
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateSession = updateSession;
exports.deleteSession = function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookieStore;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, headers_1.cookies()];
            case 1:
                cookieStore = _a.sent();
                cookieStore["delete"]('session');
                return [2 /*return*/];
        }
    });
}); };
exports.verifySession = function () { return __awaiter(void 0, void 0, void 0, function () {
    var sessionValue, payload, payloadParsed;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, headers_1.cookies()];
            case 1:
                sessionValue = (_a = (_b.sent()).get('session')) === null || _a === void 0 ? void 0 : _a.value;
                if (!sessionValue)
                    return [2 /*return*/, { isAuth: false }];
                payload = exports.decrypt(sessionValue, key, iv);
                payloadParsed = JSON.parse(payload);
                if (!payloadParsed.userId) {
                    return [2 /*return*/, { isAuth: false }];
                }
                return [2 /*return*/, { isAuth: true, userId: payloadParsed.userId }];
        }
    });
}); };
