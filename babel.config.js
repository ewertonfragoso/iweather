const presets = ["module:metro-react-native-babel-preset"];
const plugins = [];

plugins.push([
  "module:react-native-dotenv",
  {
      moduleName: "@env",
      path: ".env",
  },
]);

module.exports = {
  presets,
  plugins,
};