const mochaHtmllint = require('../');

mochaHtmllint([
	'./test/files/**/*.html'
], {
	'line-end-style': false
});