/* global browser, global, protractor */
'use strict';

var port = process.env.E2E_SANDBOX_PORT || 8765;
var sandboxUrl = 'http://localhost:' + port + '/';

global.By = protractor.By;

beforeEach(function() {
  browser.get(sandboxUrl);
});

module.exports = {
  help: function(i) {
    i = i || 0;
    return i < 1 ? '... I need somebody.' : 'not just anybody!';
  }
};
