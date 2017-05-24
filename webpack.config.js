const path = require('path')

module.exports = {

  // Entry point chunks.
  entry: [ './app/2dContext.js', './app/card.js', './app/index.js' ],

  // Set options related to how webpack emits its results.
  output: {

    // Path where the packaged assets are compiled.
    path: path.resolve(__dirname, "dist"),

    // Supply a file name.
    filename: 'bundle.js',
  }
}
