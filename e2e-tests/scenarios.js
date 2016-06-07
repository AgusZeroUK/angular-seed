'use strict';

describe('my app', function() {


  it('should automatically redirect to /main when location hash/fragment is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/main");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('/#/main');
    });


    it('should render main when user navigates to /main', function() {
      expect(element.all(by.tagName('h1')).getText()).
        toMatch(/Welcome to Main/);
    });

  });


  describe('component1', function() {

    beforeEach(function() {
      browser.get('/#/component1');

      var EC = protractor.ExpectedConditions;
      browser.wait(EC.textToBePresentInElement($('h2'), 'Welcome to Component 1'), 5000);
    });


    it('should render component1 when user navigates to /component1', function() {
      expect(element.all(by.tagName('h2')).getText()).
        toMatch(/Welcome to Component 2/);
    });

  });
});
