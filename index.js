var fs = require('fs');
var path = require('path');
var base64img = require('base64-img');

function ImageReporter(globalConfig, options) {
  var DIFF_OUTPUT = options.diffPath;
  if (!DIFF_OUTPUT) { throw new Error('diffPath option not provided for jest-screenshot-base64-reporter'); }

  this.onTestResult = function onTestResult(_, testResult) {
    if (testResult.numFailingTests && testResult.failureMessage.match(/different from snapshot/)) {
      var diffs = fs.readdirSync(DIFF_OUTPUT);

      diffs.forEach((diff) => {
        var diffPath = path.join(DIFF_OUTPUT, diff);
        var base64Snapshot = base64img.base64Sync(diffPath);

        console.log(`Diff file: ${diffPath}`);
        console.log(base64Snapshot);
        console.log('\n');
      });
    }
  }
}

module.exports = ImageReporter;
