module.exports = {
  parser: "babel-eslint",
  plugins: [
    "import",
    "react",
    "react-native",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  settings: {
    react: {
      "version": "16.6",
    },
    "import/resolver": {
      "babel-module": {},
    },
  },
};
