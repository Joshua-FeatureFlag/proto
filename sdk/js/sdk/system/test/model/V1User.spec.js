/*
 * FeatureFlag
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
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
    factory(root.expect, root.FeatureFlag);
  }
}(this, function(expect, FeatureFlag) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1User', function() {
      beforeEach(function() {
        instance = new FeatureFlag.V1User();
      });

      it('should create an instance of V1User', function() {
        // TODO: update the code to test V1User
        expect(instance).to.be.a(FeatureFlag.V1User);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property organizationId (base name: "organizationId")', function() {
        // TODO: update the code to test the property organizationId
        expect(instance).to.have.property('organizationId');
        // expect(instance.organizationId).to.be(expectedValueLiteral);
      });

    });
  });

}));
