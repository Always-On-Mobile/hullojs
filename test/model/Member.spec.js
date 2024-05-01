/**
 * Always On Mobile - hullo API
 * Welcome to the hullo API.    With this API you can perform operations on your hullo account programmatically that you can call using the hullo console. The operations currently available include:    * Add / Update a member * Get the details of a member * Get the messages sent / received from a member * Send a message to a member  The hullo API is an easy to use RESTful API that can be called by any modern programming language that  supports HTTP calls, and also has out of the box support for several programming languages including:   * Java * Javascript    In order to use the API you will first need to generate an API key using the hullo console application, assigning it the the relevant scopes required for the operations you wish to call. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.hullojs);
  }
}(this, function(expect, hullojs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new hullojs.Member();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Member', function() {
    it('should create an instance of Member', function() {
      // uncomment below and update the code to test Member
      //var instance = new hullojs.Member();
      //expect(instance).to.be.a(hullojs.Member);
    });

    it('should have the property registrationDate (base name: "registrationDate")', function() {
      // uncomment below and update the code to test the property registrationDate
      //var instance = new hullojs.Member();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new hullojs.Member();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new hullojs.Member();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new hullojs.Member();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new hullojs.Member();
      //expect(instance).to.be();
    });

  });

}));