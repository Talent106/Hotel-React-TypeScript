const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This sets '@' to point to the 'src' folder
    },
  },
};