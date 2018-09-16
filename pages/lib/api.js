import axios from 'axios';
import qs from 'qs';

class Api {
	constructor(req, config) {
		this.client = axios.create(
			Object.assign(
				{
					baseURL: process.browser ? '/apis' : `${process.env.SELF_URL}/apis`,
					paramsSerializer: function(params) {
						return qs.stringify(params, { encode: false });
					},
					headers: req ? {
						Cookie: req.headers.cookie || ''
					} : undefined
				},
				config
			)
		);
	}

	getClient() {
		return this.client;
	}
}

export default Api;
