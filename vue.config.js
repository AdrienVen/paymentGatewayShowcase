const path = require('path'); 
module.exports = {
	devServer: {
      "disableHostCheck": true
    },
	configureWebpack : {
		resolve: {
			alias: {
			  'bn.js': path.resolve(__dirname, 'node_modules/bn.js/lib/bn.js'),
			  "readable-stream" : path.resolve(__dirname, 'node_modules/readable-stream')
			}
		}
		
	},
	publicPath : process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}