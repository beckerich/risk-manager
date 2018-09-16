require('dotenv').config();

const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const Next = require('next');
const routes = require('./routes');

const port = process.env.PORT || 4001;
const next = Next({ dev: process.env.NODE_ENV !== 'production' });

(async () => {
	await next.prepare();

	const app = express();

	app.use(compression());
	app.use(bodyParser.json());
	app.use(sslRedirect(['production'], 301));

	app.use(routes.getRequestHandler(next));

	app.listen(port, () => {
		const { name, version } = require('./package.json');

		console.log(`${name} v${version} listening on port ${port}`);
	});
})();

const errorWare = (error, req, res, done) => {
	console.log('ROUTE ERR', error);

	return res.sendStatus(500);
};

