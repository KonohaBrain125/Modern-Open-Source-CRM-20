module.exports = {
  rules: {
    "effect-components": require("./src/rules/effect-components"),
    "no-hardcoded-colors": require("./src/rules/no-hardcoded-colors"),
    "matching-state-variable": require("./src/rules/matching-state-variable"),
    "sort-css-properties-alphabetically": require("./src/rules/sort-css-properties-alphabetically"),
    "styled-components-prefixed-with-styled": require("./src/rules/styled-components-prefixed-with-styled"),
    "component-props-naming": require("./src/rules/component-props-naming"),
    "no-state-useref": require("./src/rules/no-state-useref"),
  },
};
