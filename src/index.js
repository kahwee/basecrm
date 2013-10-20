var BaseCrm = function(token) {
	this.token = token;
	this.reqData = {
		uri: 'https://sales.futuresimple.com/api/v1/contacts.json',
		method: 'GET',
		headers: {
			'X-Pipejump-Auth': token,
			'X-Futuresimple-Token': token
		}
	};
}
BaseCrm.prototype.get = function(path) {
	return require('./get')(this, path);
}
module.exports = BaseCrm;