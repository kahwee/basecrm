var BaseCrm = function(token, format) {
	this.token = token;
	this.format = format ? format : 'json';
	this.reqData = {
		headers: {
			'X-Pipejump-Auth': token,
			'X-Futuresimple-Token': token
		}
	};
}
BaseCrm.prototype.get = function(path, data) {
	return require('./http')(this, 'GET', path, data);
}
BaseCrm.prototype.post = function(path, data) {
	return require('./http')(this, 'POST', path, data);
}
BaseCrm.prototype.put = function(path, data) {
	return require('./http')(this, 'PUT', path, data);
}
module.exports = BaseCrm;