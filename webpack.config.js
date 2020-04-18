const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/footer.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "footer.js",
		libraryTarget: "commonjs2",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ["file-loader?name=[name].[ext]"],
			},
		],
	},
};
