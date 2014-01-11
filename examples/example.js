var koa = require('koa');
var zlib = require('../index'); //koa-zlib
 
var app = koa();

app.use(function *() {

	var buffer = yield zlib.deflate('dionoid was here'); //Yay, zipping with no callbacks!
	this.body = 'Zipped text: ' + buffer.toString('base64');

	buffer = new Buffer('eJxLyczPy89MUShPLFbISC1KBQA0pwYW', 'base64');
	this.body += '\nUnzipped text: ' + (yield zlib.unzip(buffer)).toString();
});

app.listen(process.env.PORT || 8080);