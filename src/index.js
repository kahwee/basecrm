var BaseCrm = function(token) {
	this.token = token;
	this.reqData = {
		uri: 'https://sales.futuresimple.com/api/v1/contacts.json',
		headers: {
			'X-Pipejump-Auth': token,
			'X-Futuresimple-Token': token
		}
	};
}
BaseCrm.prototype.get = function(path, data) {
	return require('./get')(this, 'GET', path, data);
}
BaseCrm.prototype.post = function(path, data) {
	return require('./get')(this, 'POST', path, data);
}
BaseCrm.prototype.put = function(path, data) {
	return require('./get')(this, 'PUT', path, data);
}
module.exports = BaseCrm;