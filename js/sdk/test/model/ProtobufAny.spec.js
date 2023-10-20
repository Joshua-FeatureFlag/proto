/*
 * system.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Systemproto);
  }
}(this, function(expect, Systemproto) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ProtobufAny', function() {
      beforeEach(function() {
        instance = new Systemproto.ProtobufAny();
      });

      it('should create an instance of ProtobufAny', function() {
        // TODO: update the code to test ProtobufAny
        expect(instance).to.be.a(Systemproto.ProtobufAny);
      });

      it('should have the property type (base name: "@type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
