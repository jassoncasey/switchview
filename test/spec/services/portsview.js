'use strict';

describe('Service: portsView', function () {

  // load the service's module
  beforeEach(module('switchviewApp'));

  // instantiate service
  var portsView;
  beforeEach(inject(function (_portsView_) {
    portsView = _portsView_;
  }));

  it('should do something', function () {
    expect(!!portsView).toBe(true);
  });

});
