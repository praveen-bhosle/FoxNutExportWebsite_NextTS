"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var page = function () {
    return (react_1["default"].createElement("div", { className: 'text-[#1E1919] ' },
        react_1["default"].createElement("div", { className: 'text-[#F7F5F2] bg-[#1F1919]  text-center text-6xl   py-32 px-4 font-serif   ' },
            react_1["default"].createElement("div", { className: ' leading-[70px] ' }, "  Our mission is to  supply quality  products across  the globe  ")),
        react_1["default"].createElement("div", { className: '' },
            react_1["default"].createElement("video", { src: '/promotional.MOV', autoPlay: true, loop: true, muted: true })),
        react_1["default"].createElement("div", { className: 'flex flex-col gap-16 px-8 py-16 bg-[#F7F5F2]' },
            react_1["default"].createElement("div", { className: 'text-center text-black text-4xl  font-mono font-bold ' }, " Our story  "),
            react_1["default"].createElement("div", { className: 'text-2xl' }, "  Back in December 2024, our journey began with a goal to bring the highest quality makhana to people who value health and wellness. What started as a passion for creating healthy snack options has grown into a mission to make premium, nutrient-rich makhana easily accessible to everyone. "),
            react_1["default"].createElement("div", { className: 'text-2xl' },
                " In today",
                "’",
                "s fast-paced world, finding snacks that are both healthy and satisfying can be a challenge. Most snacks are filled with empty calories, artificial additives, and unhealthy fats. We wanted to change that. "),
            react_1["default"].createElement("div", { className: 'text-2xl' }, " We believe in a healthier way to snack  that nourishes your body without compromising on taste. Our makhana is not just a snack, it\u2019s a promise of quality, wellness, and sustainability. From sourcing the finest ingredients to ensuring every bite is fresh and flavorful, we focus on creating products that you can trust. "),
            react_1["default"].createElement("div", { className: 'text-2xl' }, " At our core, we\u2019re here to help you make better snacking choices, stay energized throughout the day, and take a step toward a healthier lifestyle. Explore our range of premium makhana and experience the difference. ")),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: 'flex flex-col gap-16 px-8 py-16 text-[#F7F5F2] bg-[#1F1919]' },
                react_1["default"].createElement("div", { className: 'text-center text-4xl  font-mono font-bold ' }, "Our team"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(image_1["default"], { src: '', alt: 'image' }),
                    "Guruprasad Kulakarni, Co-founder and"),
                react_1["default"].createElement("div", null)),
            react_1["default"].createElement("div", { className: 'flex flex-col gap-16 px-8 py-16 ' },
                react_1["default"].createElement("div", { className: 'text-center text-4xl font-bold  font-mono ' }, "Board of Directors"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(image_1["default"], { src: '', alt: 'image' }),
                    "Guruprasad Kulakarni, Co-founder and"),
                react_1["default"].createElement("div", null))),
        react_1["default"].createElement("div", null)));
};
exports["default"] = page;
