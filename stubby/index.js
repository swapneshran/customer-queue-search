const Stubby = require('stubby').Stubby;
const mockService = new Stubby();
const stubbyJson = require('./stubby.js')

mockService.start({
    stubs: 8082,
    admin: 8081,
    location: 'localhost',
    data:stubbyJson
});