"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./footer.css");
const Footer = (props) => {
    return (react_1.default.createElement("footer", { className: "footer" },
        react_1.default.createElement("p", { className: "footer-p" },
            react_1.default.createElement("a", { href: props.github, className: "footer-a", target: "_blank", rel: "noreferrer noopener" },
                react_1.default.createElement("span", { className: "footer-span" }, "Developed by"),
                "\u00A0",
                props.name,
                "\u00A0",
                react_1.default.createElement("img", { className: "github", src: "./assets/github.png", alt: "github icon" })),
            react_1.default.createElement("span", { className: "footer-span left" }, "All Rights Reserved \u00AE"))));
};
exports.default = Footer;
//# sourceMappingURL=footer.js.map