const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@paths': path.resolve(__dirname, 'src/paths/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      "@pages": path.resolve(__dirname, 'src/pages/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
    },
  },
};
