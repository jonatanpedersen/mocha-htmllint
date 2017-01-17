const chalk = require('chalk');
const fs = require('fs');
const globAll = require('glob-all');
const htmllint = require('htmllint');
const htmllintMessages = require('htmllint/lib/messages');
const mocha = require('mocha');
const textTable = require('text-table');

module.exports = function (patterns, options) {
	describe('htmllint', function () {
		globAll.sync(patterns).forEach(function (file) {
			describe(file, () => {
				it(`should pass htmllint rules`, function(done) {
					fs.readFile(file, 'utf8', function(err, html) {
						htmllint(html, options, function(err, issues) {
							if (err) {
								return done(err);
							}

							if (issues && issues.length > 0) {
								let message = chalk.white.underline(`\n${file} did not pass htmllint rules\n`);
								message += issuesTable(issues);
								message += chalk.red.bold(`\n\n✖ ${issues.length} ${issues.length === 1 ? 'issue' : 'issues'}\n`);

								let error = new Error(message);
								delete error.stack; // Yeah, I know, but we don't care about the stack here.
								return done(error);
							}

							done();
						});
					});
				});
			});
		});
	});
}

function issuesTable (issues) {
	return textTable(
		issues.map(function (issue) {
			return [
				chalk.white(''),
				`line ${issue.line || 0}`,
				`column ${issue.column || 0}`,
				issue.code,
				chalk.cyan(htmllintMessages.renderIssue(issue) || JSON.stringify(issue.data)),
				chalk.white.bold(issue.rule)
			]
		}),
		{
			align: ['', 'r', 'l'],
			stringLength: function (str) {
				return chalk.stripColor(str).length;
			}
		}
	);
}