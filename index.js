const chalk = require('chalk');
const fs = require('fs');
const globAll = require('glob-all');
const htmllint = require('htmllint');
const htmllintMessages = require('htmllint/lib/messages');
const mocha = require('mocha');

module.exports = function (patterns, options) {
	describe('htmllint', function () {
		globAll.sync(patterns).forEach(function (file) {
			it(`${file} should pass lint rules`, function(done) {
				fs.readFile(file, 'utf8', function(err, html) {
					htmllint(html, options, function(err, issues) {
						if (err) {
							return done(err);
						}

						if (issues && issues.length > 0) {
							let message = `${chalk.red('HTML did not pass lint rules')}
${issues.map(issue => `	${issue.line}:${issue.column} ${htmllintMessages.renderIssue(issue)}`).join('\n')}
`;

							return done(new Error(message));
						}

						done();
					});
				});
			});
		});
	});
}