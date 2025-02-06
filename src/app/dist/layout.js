"use strict";
exports.__esModule = true;
exports.viewport = exports.metadata = void 0;
require("./globals.css");
var google_1 = require("@react-oauth/google");
exports.metadata = {
    title: 'YK Devout Exports',
    description: 'Order premium makhana'
};
exports.viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: 'en' },
        React.createElement("body", { className: 'bg-[#FAFAFA] text-custom-text' }, process.env.GOOGLE_CLIENT_ID ?
            React.createElement(google_1.GoogleOAuthProvider, { clientId: process.env.GOOGLE_CLIENT_ID },
                React.createElement("div", { className: '' }, children)) :
            React.createElement("div", { className: '' }, children))));
}
exports["default"] = RootLayout;
