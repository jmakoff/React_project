/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: {
        "src/build/bundle": "./src/main.jsx",

    } ,

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude:/node_modules/,
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
};