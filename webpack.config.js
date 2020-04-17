const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.[contentHash].js",
		libraryTarget: "commonjs2",
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"],
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader!ts-loader",
					},
				],
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "babel-loader",
			},
			{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
			// "style-loader"
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets",
						},
					},
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
};
