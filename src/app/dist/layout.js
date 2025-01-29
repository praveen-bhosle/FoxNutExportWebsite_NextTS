'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
require("./globals.css");
var react_1 = require("react");
function RootLayout(_a) {
    var children = _a.children;
    var router = navigation_1.useRouter();
    var url = navigation_1.usePathname();
    console.log(url);
    react_1.useEffect(url === '/' ?
        function () { router.push('/new'); } : function () { }, []);
    return (React.createElement("html", { lang: 'en' },
        React.createElement("body", { className: 'bg-[#FAFAFA] text-black' },
            React.createElement("div", { className: '' }, children))));
}
exports["default"] = RootLayout;
