const webpack = require('webpack')
const path = require('path')
const pkg = require('./../package.json')


const rootPath = path.resolve(__dirname,'../')

const config = {
    entry:path.resolve(rootPath,'src','index.js'),
    devtool:'inline-source-map',
    output:{
        filename:'snapPackage.min.js',
        path:path.resolve(rootPath,'min'),
        library:'snapPackage',
        libraryTarget:'umd'
    }
}

module.exports = config