'use strict';

describe('Service: LastFmService', function () {

  // load the service's module
  beforeEach(module('testerApp'));

  // instantiate service
  var LastFmService;
  beforeEach(inject(function (_LastFmService_) {
    LastFmService = _LastFmService_;
  }));

  it('should do something', function () {
    expect(!!LastFmService).toBe(true);
  });

});
