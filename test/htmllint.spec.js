const mochaHtmllint = require('../');

describe('mochaHtmllint', () => {
	
	mochaHtmllint([
		'./test/files/**/*.html'
	], {
		'line-end-style': false
	});
});