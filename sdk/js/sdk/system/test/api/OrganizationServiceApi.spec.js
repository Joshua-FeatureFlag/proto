/*
 * system.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
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
    factory(root.expect, root.Systemproto);
  }
}(this, function(expect, Systemproto) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Systemproto.OrganizationServiceApi();
  });

  describe('(package)', function() {
    describe('OrganizationServiceApi', function() {
      describe('organizationServiceCreateOrganization', function() {
        it('should call organizationServiceCreateOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for organizationServiceCreateOrganization call and complete the assertions
          /*

          instance.organizationServiceCreateOrganization(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Systemproto.V1Organization);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('organizationServiceDeleteOrganization', function() {
        it('should call organizationServiceDeleteOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for organizationServiceDeleteOrganization call and complete the assertions
          /*
          var opts = {};

          instance.organizationServiceDeleteOrganization(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Systemproto.V1Organization);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('organizationServiceGetOrganization', function() {
        it('should call organizationServiceGetOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for organizationServiceGetOrganization call and complete the assertions
          /*
          var opts = {};

          instance.organizationServiceGetOrganization(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Systemproto.V1Organization);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('organizationServiceUpdateOrganization', function() {
        it('should call organizationServiceUpdateOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for organizationServiceUpdateOrganization call and complete the assertions
          /*

          instance.organizationServiceUpdateOrganization(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Systemproto.V1Organization);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));