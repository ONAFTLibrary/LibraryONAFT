module.exports = {
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.(ts|js)$/,
                loaders: [
                    'angular-router-loader'
                ]
            }
        ]
}
