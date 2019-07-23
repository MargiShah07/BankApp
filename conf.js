var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['Customer.js'],
  // specs: ['calc_spec_pom.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  onPrepare:function(){
	  jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		  savePath:'target/Screenshots',
		  takeScreenshot: true,
		  takeScreenshotOnlyOnFailures:true,
		  cleanDestination:true,
	  }));
  }
};