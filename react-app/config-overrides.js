const path = require('path');
const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');


module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@types': path.resolve(__dirname, 'src/types.ts'),
    '@utils': path.resolve(__dirname, 'src/utils.ts')
  }),

  addWebpackModuleRule({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, 'src')
  })
);
