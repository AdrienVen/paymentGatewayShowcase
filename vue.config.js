module.exports = {
	disableHostCheck: true,
	publicPath : process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}