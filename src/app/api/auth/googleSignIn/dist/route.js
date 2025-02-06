"use strict";
exports.__esModule = true;
exports.GET = void 0;
var server_1 = require("next/server");
var clientId = process.env.GOOGLE_CLIENT_ID || '';
var clientSecret = process.env.GOOGLE_CLIENT_SECRET;
var REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI ||
    'http://localhost:3000/auth/google/callback';
exports.GET = function () {
    var url = "https://accounts.google.com/o/oauth2/v2/auth?" +
        ("client_id=" + encodeURIComponent(clientId) + "&redirect_uri=" + encodeURIComponent(REDIRECT_URI) + "&response_type=code&scope=" + encodeURIComponent('profile email'));
    return server_1.NextResponse.redirect(url);
};
