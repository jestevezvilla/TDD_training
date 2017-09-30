// Autoriza la navagación con certificados autofirmados
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var assert = require("chai").assert,
Browser = require('zombie');
Browser.waitDuration = '30s';

describe('Login', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('http://axinstgeccwps1-oysho.central.inditex.grp/es/', done);
  });

  it('should see welcome page', function() {

      browser.assert.success();

  });


  // describe('click en el botón de login', function() {

  //   // before(function(done) {
  //   //   browser
  //   //     .fill('email',    'zombie@underworld.dead')
  //   //     .fill('password', 'eat-the-living')
  //   //     .pressButton('Sign Me Up!', done);
  //   // });

  //   it('should be successful', function() {
  //     browser.assert.success();
  //   });

  //   it('should see welcome page', function() {
  //     browser.assert.text('title', 'Welcome To Brains Depot');
  //   });
  // });
});