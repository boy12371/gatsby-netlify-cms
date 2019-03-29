const path = require("path");

module.exports = ({ config, mode }) => {
    // Add typescript loader
    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            {
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("babel-preset-react-app")]
                }
            },
            require.resolve("react-docgen-typescript-loader")
        ],
        exclude: /node_modules/
    });
    config.resolve.extensions.push(".ts", ".tsx");

    // Add less loader
    config.module.rules.push({
        test: /\.less$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    });
    config.resolve.extensions.push(".less");

    return config;
};
