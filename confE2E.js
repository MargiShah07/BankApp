var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config =
	{
		directConnect: true,

		capabilities: {
			'browserName': 'chrome'
		},
		framework: 'jasmine',
		specs: ['Script.js'],

		onPrepare: function () {
			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
				savePath: 'target/Screenshots',
				takeScreenshot: true,
				takeScreenshotOnlyOnFailures: true,
				cleanDestination: true,
			}));
		}
	};
