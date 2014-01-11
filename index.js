
/*
  Simple wrapper to node's internal zlib library
  http://nodejs.org/api/zlib.html
  For use in Koa.
*/
  
module.exports = exports = require('zlib');

//thunkify zlib's convenience methods
exports.deflate = (function() {
	var _deflate = exports.deflate;
	return function(buf, options) {
		return function(callback) { 
			_deflate(buf, options, callback); 
		}
	}
})();
exports.deflateRaw = (function() { var _deflateRaw = exports.deflateRaw; return function(buf, options) { return function(callback) { _deflateRaw(buf, options, callback); }}})();
exports.gzip = (function() { var _gzip = exports.gzip; return function(buf, options) { return function(callback) { _gzip(buf, options, callback); }}})();
exports.gunzip = (function() { var _gunzip = exports.gunzip; return function(buf, options) { return function(callback) { _gunzip(buf, options, callback); }}})();
exports.inflate = (function() { var _inflate = exports.inflate; return function(buf, options) { return function(callback) { _inflate(buf, options, callback); }}})();
exports.inflateRaw = (function() { var _inflateRaw = exports.inflateRaw; return function(buf, options) { return function(callback) { _inflateRaw(buf, options, callback); }}})();
exports.unzip = (function() { var _unzip = exports.unzip; return function(buf, options) { return function(callback) { _unzip(buf, options, callback); }}})();