const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Find the existing rule that handles SCSS files and remove it
      const oneOfRule = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf));
      if (oneOfRule) {
        oneOfRule.oneOf = oneOfRule.oneOf.filter(rule => !(rule.test && rule.test.toString().includes('scss')));
      }

      // Add custom SCSS loader configuration
      oneOfRule.oneOf.unshift({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Use Dart Sass
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, 'src'), // Include your source directory
      });

      return webpackConfig;
    },
  },
};