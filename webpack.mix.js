const mix = require("laravel-mix");

mix
  .disableNotifications()
  .js("assets/js/main.js", "dist/js")
  .sass("assets/scss/main.scss", "dist/css")
  .sourceMaps()
  .webpackConfig({
    devtool: "source-map",
    externals: {
      jquery: "jQuery",
    },
  })
  .copy("assets/img/*", "dist/img");
