var through = require('through2');
var viralify = require('viralify');
var transformed = false;

module.exports = function(file) {
	if (transformed) return through();
	try {
		viralify.sync(__dirname, ['ws'], 'browserify-optional', true);
		transformed = true;
	} catch (e) {
		console.error('Failed to correctly handle optional dependencies in ws');
	}
	return through();
};