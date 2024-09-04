const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Adding necessary rules for SCSS handling
      const rules = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
      rules.unshift({
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
              sourceMap: true,
            },
          },
        ],
      });
      return webpackConfig;
    },
  },
};