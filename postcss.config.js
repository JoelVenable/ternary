module.exports = ({
  env
}) => ({
  sourceMap: "inline",
  plugins: [
    require("postcss-import")(),
    require("postcss-simple-vars")(),
    require("postcss-nested")(),
    require("postcss-custom-properties")(),
    require("postcss-color-function")(),
    require("postcss-color-rgba-fallback")(),
    require("pixrem")(),
    require("postcss-calc")(),
    require("autoprefixer")(),
    require("postcss-preset-env")(),
    env === "production" ? require("cssnano")() : false
  ]
})