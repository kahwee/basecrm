var request = require('request');
var when = require('when');
var uri = 'https://sales.futuresimple.com/api/v1/contacts.json';

module.exports = function(base, path) {
	var reqData = base.reqData;
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
	}
	var deferred = when.defer();
	request(
		reqData,
		function(error, response, body) {
			if (!error && response.statusCode == 200) {
				deferred.resolver.resolve(body);
			} else {
				deferred.resolver.reject(err);
			}
		}
	);
	return deferred.promise;
}