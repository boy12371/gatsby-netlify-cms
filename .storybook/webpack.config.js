const path = require("path");

module.exports = ({ config, mode }) => {
    // Add typescript loader
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../stories"),
        loader: "awesome-typescript-loader",
        query: {
            configFileName: ".storybook/tsconfig.json"
        },
        exclude: /node_modules/
    });
    config.resolve.extensions.push(".ts", ".tsx");

    // Add css loader
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
