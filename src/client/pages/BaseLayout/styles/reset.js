"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = {
    "@global": (_a = {
            "*": {
                margin: "0",
                padding: "0",
                border: "0",
                boxSizing: "border-box",
                "-webkit-font-smoothing": "antialised",
                "-moz-osx-font-smoothing": "grayscale",
            },
            "::-webkit-scrollbar": {
                "-webkit-appearance": "none",
                width: "1px",
                height: "1px"
            }
        },
        _a["\n            html, body, div, span, applet, object, iframe,\n            h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n            a, abbr, acronym, address, big, cite, code,\n            del, dfn, em, img, ins, kbd, q, s, samp,\n            small, strike, strong, sub, sup, tt, var,\n            b, u, i, center,\n            dl, dt, dd, ol, ul, li,\n            fieldset, form, label, legend, button,\n            table, caption, tbody, tfoot, thead, tr, th, td,\n            article, aside, canvas, details, embed,\n            figure, figcaption, footer, header, hgroup,\n            menu, nav, output, ruby, section, summary,\n            time, mark, audio, video\n        "] = {
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
        },
        _a.button = {
            backgroundColor: "rgba(0, 0, 0, 0)",
            userSelect: "none",
            outline: "none"
        },
        _a["\n            article, aside, details, figcaption, figure,\n            footer, header, hgroup, menu, nav, section\n        "] = {
            display: "block"
        },
        _a.html = {
            fontSize: "16px"
        },
        _a.body = {
            "-webkit-print-color-adjust": ["exact", "!important"],
            lineHeight: "1"
        },
        _a["ol, ul"] = {
            listStyle: "none"
        },
        _a["blockquote, q"] = {
            quotes: "none"
        },
        _a["blockquote:before, blockquote:after:after, q:before, q:after"] = {
            content: ""
        },
        _a.table = {
            borderCollapse: "collapse",
            borderSpacing: "0"
        },
        _a.a = {
            color: "inherit",
            fontSize: "inherit",
            textDecoration: "inherit"
        },
        _a["input, button, textarea"] = {
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            borderRadius: "0",
            outline: "none",
            boxShadow: "none",
            appearance: "none",
            margin: "0",
            padding: "0",
            "&:focus": {
                outline: "none"
            }
        },
        _a.input = {
            wordBreak: "normal",
            "&:invalid": {
                boxShadow: "none"
            },
            "&[type='number']": {
                "&::-webkit-outer-spin-button, &::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    opacity: "0.5"
                }
            },
            "&[type='search']": (_b = {
                    "-webkit-appearance": "none",
                    borderRadius: "0"
                },
                _b["\n                    &::-webkit-search-decoration,\n                    &::-webkit-search-cancel-button,\n                    &::-webkit-search-results-button,\n                    &::-webkit-search-results-decoration \n                "] = {
                    display: "none"
                },
                _b),
            "&::-ms-clear": {
                display: "none"
            }
        },
        _a)
};
//# sourceMappingURL=reset.js.map