var request = require('request');
var when = require('when');

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
		path = path.trim();
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
	if (['contacts', 'deals'].indexOf(parts[1]) >= 0) {
		reqData.uri = 'https://sales.futuresimple.com/api/v1';
	}
	reqData.uri += path;
	var deferred = when.defer();
	request(
		reqData,
		function(err, response, body) {
			console.log(err, response.statusCode, body);
			if (!err && response.statusCode == 200) {
				deferred.resolver.resolve(body);
			} else {
				deferred.resolver.reject(response.statusCode, body);
			}
		}
	);
	return deferred.promise;
}