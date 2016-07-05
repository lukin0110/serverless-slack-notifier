module.exports = {
    "rules": {
        "indent": [2, 4],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"],
        "comma-spacing": [2, {"before": false, "after": true}],
        "space-before-function-paren": [2, "never"],
        "no-whitespace-before-property": 2,
        "no-spaced-func": 2,
        "space-in-parens": [2, "never"],
        "space-before-blocks": [2, {"functions": "always"}],
        "eol-last": 2,
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-const-assign": 2,
        "no-console": 0                 // 'console' is used to write log statements in lambda functions
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended"
};
