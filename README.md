basecrm
=======

[![Greenkeeper badge](https://badges.greenkeeper.io/kahwee/basecrm.svg)](https://greenkeeper.io/)

## Insatll

```
Not available.

```

## Basic


```javascript
var BaseCrm = require('basecrm');
var base = new BaseCrm('<YOUR_TOKEN_HERE>');

base.post('/deals', {
	name: 'Good deal',
	entity_id: 4234354
}).then(function(success) {
	// Do Success
}, function(fail) {
	// Do fail
});

```
## Supporting for XML

```javascript
var BaseCrm = require('basecrm');
var base = new BaseCrm('<YOUR_TOKEN_HERE>', 'xml');
```

