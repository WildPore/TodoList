const CopyPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: './src/index.html',
					to: `${__dirname}/dist/index.html`,
				},
				{
					from: './src/style.css',
					to: `${__dirname}/dist/style.css`,
				},
			],
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new HtmlMinimizerPlugin(),
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};