const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano")({
  preset: "default",
});
const config = {
  plugins: [autoprefixer, cssnano],
};

module.exports = config;
