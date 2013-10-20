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
BaseCrm.prototype.get = function(path) {
	return require('./get')(this, 'GET', path);
}
BaseCrm.prototype.post = function(path) {
	return require('./get')(this, 'POST', path);
}
BaseCrm.prototype.put = function(path) {
	return require('./get')(this, 'PUT', path);
}
module.exports = BaseCrm;