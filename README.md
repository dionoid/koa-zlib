koa-zlib
===========

Very simple wrapper to node's built-in zlib library for use in koa.  
By 'thunkifying' zlib's convenience methods, they can be 'yielded' inside koa generator functions.


To install simply run:
```bash
npm install koa-zlib
```

Require koa first and will only work on node v0.11.7 or newer.

You must run node with --harmony flag (--harmony-generators works as well)

```bash
node --harmony example.js
```

Simple example using koa-zlib in koa:

```js
var koa = require('koa');
var zlib = require('koa-zlib');
 
var app = koa();

app.use(function *() {

	var buffer = yield zlib.deflate('dionoid was here'); //Yay, zipping with no callbacks!
	this.body = 'Zipped text: ' + buffer.toString('base64');

	buffer = new Buffer('eJxLyczPy89MUShPLFbISC1KBQA0pwYW', 'base64');
	this.body += '\nUnzipped text: ' + (yield zlib.unzip(buffer)).toString();
});

app.listen(process.env.PORT || 8080);
```