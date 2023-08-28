const path = require('path')
const resolvePath = (pathUrl) => path.resolve(__dirname, pathUrl)

const CracoLessPlugin = require('craco-less');

module.exports = {
  // less
  // webpack
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ],
  webpack: {
    // alias
    alias: {
      "@": resolvePath("src"),
      "components": resolvePath("src/components"),
      "utils": resolvePath("src/utils"),

    }
  }

}
