// 0 -> disabled, 1 -> warning, 2 -> error
module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    camelcase: 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [0, 'self'],
    'constructor-super': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    eqeqeq: 2,
    'func-names': 2,
    'func-style': [2, 'declaration'],
    'global-require': 2,
    'handle-callback-err': [2, '^.*(e|E)rr'],
    indent: [2, 2, {SwitchCase: 1, ObjectExpression: 'first', ArrayExpression: 'first'}],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [2, 3],
    'new-parens': 2,
    'new-cap': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-continue': 2,
    'no-dupe-class-members': 2,
    'no-labels': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-native-reassign': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-process-env': 2,
    'no-proto': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': [2, { builtinGlobals: true }],
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': [2, { typeof: true }],
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-with': 2,
    'one-var': [2, 'never'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'prefer-spread': 2,
    quotes: [2, 'single'],
    'quote-props': [2, 'as-needed'],
    radix: 2,
    semi: [2, 'always'],
    'semi-spacing': [2, {before: false, after: true}],
    'keyword-spacing': [2, {before: true, after: true}],
    'space-before-blocks': 2,
    'space-before-function-paren': 2,
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always', { exceptions: ['-']}],
    strict: [0, 'global'],
    'wrap-iife': 2,
    yoda: 2,
  },
};
