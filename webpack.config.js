//  npm install webpack -g
//  npm install webpack-dev-server -g
//  npm install react react-dom --save
//  npm install jquery --save
//  npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
//  npm install url-loader file-loader --save-dev
//  npm install css-loader style-loader --save-dev
//

// var path = require('path');
//
// module.exports = {
//     entry: {
//         path.resolve(__dirname, 'src/app.ts'),
//         path.resolve(__dirname, 'src/vendor.ts')
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: '[name].js'
//     },
//     module: {
//         loaders: loaders: [{
//             test: /\.ts$/
//             loaders: 'ts'
//         }, {
//           // import 匹配上了第二个 .css 模式，它有两个用叹号字符 (!) 串联起来的加载器。 Webpack 会 从右到左 逐个应用串联的加载器，
//           // 于是它先应用了 css 加载器 ( 用来平面化 CSS 的 @import 和 url(...) 语句 ) ， 然后应用了 style 加载器 ( 用来把 css 追加到页面上的 <style> 元素中 ) 。
//             test: /\.css$/
//             loaders: 'style!css'
//         }]
//     }
// }


module.exports = require('./config/webpack.dev.js');
