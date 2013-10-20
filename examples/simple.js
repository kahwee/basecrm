var BaseCrm = require('../index');
var base = new BaseCrm('<YOUR_TOKEN_HERE>');
base.get('/contacts/').then(function(success) {
	console.log(success);
}, function(failed) {

});