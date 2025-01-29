'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var react_2 = require("react");
var navigation_1 = require("next/navigation");
var Products_1 = require("../lib/Products");
var ProductCard_1 = require("../components/ProductCard");
var layout_1 = require("../layout");
var navigation_2 = require("next/navigation");
var Page = function () {
    var _a;
    var productId = (_a = navigation_1.useSearchParams()) === null || _a === void 0 ? void 0 : _a.get('productId');
    var _b = react_2.useState(0), index = _b[0], setIndex = _b[1];
    var addToCart = layout_1.useStore(function (state) { return state.addToCart; });
    var cartOpen = layout_1.useStore(function (state) { return state.cartOpen; });
    var imageArray = ['/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
    ];
    var router = navigation_2.useRouter();
    if (productId && typeof (parseInt(productId)) === 'number') {
        var productObject_1 = Products_1["default"][parseInt(productId) - 1];
        var quality_1 = productObject_1.quality;
        return (react_1["default"].createElement("div", { className: 'p-2' },
            react_1["default"].createElement("div", { className: 'text-xl font-bold ' },
                " ",
                productObject_1.quality,
                "  Makahana "),
            react_1["default"].createElement("div", { className: 'text-lg' },
                " Size: ",
                productObject_1.sizeStringA,
                "  || ",
                productObject_1.sizeStringB,
                " "),
            react_1["default"].createElement("div", { className: 'p-2 flex border-black ' },
                react_1["default"].createElement("div", { onClick: function () { return setIndex(function (index) { return (index - 1) % 4; }); }, className: ' flex justify-center w-[15%] ' },
                    react_1["default"].createElement(image_1["default"], { src: '/back.svg', alt: '', width: 20, height: 20 })),
                react_1["default"].createElement("div", { className: ' border flex justify-between p-4 w-[70%]' },
                    react_1["default"].createElement("img", { src: imageArray[parseInt(productId) * 4 + index], alt: '', className: 'w-full aspect-video' })),
                react_1["default"].createElement("div", { className: 'flex justify-center w-[15%]', onClick: function () { return setIndex(function (index) { return (index + 1) % 4; }); } },
                    react_1["default"].createElement(image_1["default"], { src: '/next.svg', alt: '', width: 20, height: 20 }))),
            react_1["default"].createElement("div", { className: 'font-bold py-2 flex ' },
                react_1["default"].createElement("div", { className: 'w-[20%]' }, "  Color: "),
                "   ",
                react_1["default"].createElement("div", null,
                    "   ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, "  Red  "),
                    "  ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, " White  "),
                    "  ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, " Green "),
                    " ")),
            react_1["default"].createElement("div", { className: 'font-bold py-2 flex ' },
                react_1["default"].createElement("div", { className: 'w-[20%]' }, "  Texture : "),
                " ",
                react_1["default"].createElement("div", null,
                    "    ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, "  xyz  "),
                    "  ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, " abc  "),
                    "  ",
                    react_1["default"].createElement("button", { className: 'bg-gray-300 rounded-md px-2' }, " def "),
                    " ")),
            react_1["default"].createElement("div", { className: 'font-bold py-2 flex ' },
                react_1["default"].createElement("div", { className: 'w-[20%]' }, "  Price : "),
                " ",
                react_1["default"].createElement("div", null,
                    "  ",
                    productObject_1.price,
                    "  ")),
            react_1["default"].createElement("div", { className: 'py-2 flex justify-center gap-4' },
                react_1["default"].createElement("button", { className: 'px-4 py-2 bg-black text-white mr-2 rounded-2xl', onClick: function () { addToCart(productObject_1.productId); cartOpen(); } }, "Add to cart"),
                react_1["default"].createElement("button", { className: 'px-4 py-2  bg-black text-white mr-2 rounded-2xl', onClick: function () { addToCart(productObject_1.productId); router.replace('/app/checkout'); } }, "Buy now")),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("div", { className: 'py-4' },
                react_1["default"].createElement("div", { className: 'font-bold text-2xl' },
                    " ",
                    quality_1,
                    " Makhana other products "),
                react_1["default"].createElement("div", { className: 'grid grid-cols-2 gap-2' }, Products_1["default"].map(function (element) {
                    if (element.quality === quality_1 && element.productId !== productObject_1.productId) {
                        return (react_1["default"].createElement(ProductCard_1["default"], { element: element }));
                    }
                    return null;
                })))));
    }
    else {
        return react_1["default"].createElement("div", null, "Invalid query parameters.");
    }
};
exports["default"] = Page;
