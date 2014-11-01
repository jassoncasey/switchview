'use strict';

describe('Directive: switchview', function () {

  // load the directive's module
  beforeEach(module('switchviewApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<switchview></switchview>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the switchview directive');
  }));
});
