const path = require('path');

module.exports = {
    // this needs to be a relative path, telling file what to compile
    entry: './src/index.ts',
    // with "module" I'm gonna tell webpack to take ts and change it into js
    module: {
        rules: [
            {
                 // if the files don't pass this test webpack won't do anything with them
                // in this case, a file needs to have the '.ts' ending
                test: /\.ts$/,
                // if it passes we will use ts-loader on the file
                use: 'ts-loader',
                // this include property specifies where the ts files should be, again an absolute path
                include:[path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        // what do you wanna call the js file that will appear in public folder
        filename: 'bundle.js',
        // the path here needs to be an absolute path, use the path module
        path: path.resolve(__dirname, 'public') 
    }
}