module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'prettier',
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error',
        eqeqeq: 'off',
        'no-new': 'off',
        'no-unused-expressions': 'off',
        'space-before-function-paren': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/valid-define-emits': 'off',
        'vue/one-component-per-file': 'off',
        'vue/no-v-html': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
    },
}
