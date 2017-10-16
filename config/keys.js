if(process.env.NODE_ENV == 'production') {
	module.exports = require('./dev_prod')
} else {
	module.exports = require('./dev_key')
}
