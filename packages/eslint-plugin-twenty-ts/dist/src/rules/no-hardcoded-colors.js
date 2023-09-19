"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://docs.twenty.com`);
const noHardcodedColorsRule = createRule({
    create(context) {
        return {
            TaggedTemplateExpression(node) {
                if (context.getFilename().endsWith("themes.ts")) {
                    return;
                }
                node.quasi.quasis.forEach((quasi) => {
                    const colorRegex = /(?:rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*\d+\.?\d*)?\))|(?:#[0-9a-fA-F]{6})/i;
                    if (colorRegex.test(quasi.value.raw)) {
                        context.report({
                            node,
                            messageId: "hardcodedColor",
                            data: {
                                color: quasi.value.raw,
                            },
                        });
                    }
                });
            },
        };
    },
    name: "no-hardcoded-colors",
    meta: {
        docs: {
            description: "Do not use hardcoded RGBA or Hex colors. Please use a color from the theme file.",
        },
        messages: {
            hardcodedColor: "Hardcoded color {{ color }} found. Please use a color from the theme file.",
        },
        type: "suggestion",
        schema: [],
        fixable: "code",
    },
    defaultOptions: [],
});
module.exports = noHardcodedColorsRule;
exports.default = noHardcodedColorsRule;
