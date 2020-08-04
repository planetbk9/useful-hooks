const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    watchContentBase: true,
    compress: true,
    port: 9009,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x|)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
  mode: 'development',
};
