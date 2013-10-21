var request = require('request');
var when = require('when');
var uri = 'https://sales.futuresimple.com/api/v1/contacts.json';

module.exports = function(base, method, path, data) {
	var reqData = base.reqData;
	reqData.method = method;
	if (data) {
		if ((method === 'POST' || method === 'PUT')) {
			reqData.form = data;
		} else if (method === 'GET') {
			reqData.qs = data;
		}
	}
	var parts = {};
	if (typeof path === 'string') {
		parts = path.split('/');
	}
	if (!parts) {
		throw {
			name: "Invalid path",
			message: 'The path ' + path + ' is not valid.',
			toString: function() {
				return this.name + ": " + this.message
			}
		}
	}
	if (parts[0] === 'contacts') {
		reqData.uri = 'https://sales.futuresimple.com/api/v1/contacts.json';
	} else if (parts[0] === 'deals') {
		reqData.uri = 'https://sales.futuresimple.com/api/v1/deals.json';
	}
	var deferred = when.defer();
	request(
		reqData,
		function(err, response, body) {
			if (!err && response.statusCode == 200) {
				deferred.resolver.resolve(body);
			} else {
				deferred.resolver.reject(err);
			}
		}
	);
	return deferred.promise;
}