module.exports = {
  //브라우저환경, nodejs에서 동작하는 전역개념들을 코드검사를 하겠다 라는 의미
  env: {
    
    browser: true,
    node: true
  },

  //eslint를 통해 코드검사를 할 기본적인 규칙
  extends: [
    //vue
    //'plugin:vue/vue3-essential', //LV1
    'plugin:vue/vue3-strongly-recommended', //LV2
    //'plugin:vue/vue3-recommended', //LV3

    //js
    //eslint에서 권장하는 코드 규칙
    'eslint:recommeded'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
     "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
     }],

    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}