"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./footer.css");
const Footer = (github, name) => {
    return (React.createElement("footer", { className: "footer" },
        React.createElement("p", { className: "footer-p" },
            React.createElement("a", { href: github, className: "footer-a", target: "_blank", rel: "noreferrer noopener" },
                React.createElement("span", { className: "footer-span" }, "Developed by"),
                "\u00A0",
                name,
                "\u00A0",
                React.createElement("img", { className: "github", src: "./github.png", alt: "github icon" })),
            React.createElement("span", { className: "footer-span left" }, "All Rights Reserved \u00AE"))));
};
exports.default = Footer;
//# sourceMappingURL=footer.js.map