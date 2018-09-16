const routes = require('next-routes')();

routes
	.add('index', '/', '/modules/home');

module.exports = routes;
