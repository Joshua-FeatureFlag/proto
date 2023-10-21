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
import {ApiClient} from "../ApiClient";
import {RpcStatus} from '../model/RpcStatus';
import {V1Organization} from '../model/V1Organization';

/**
* OrganizationService service.
* @module api/OrganizationServiceApi
* @version version not set
*/
export class OrganizationServiceApi {

    /**
    * Constructs a new OrganizationServiceApi. 
    * @alias module:api/OrganizationServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the organizationServiceCreateOrganization operation.
     * @callback moduleapi/OrganizationServiceApi~organizationServiceCreateOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Organization{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/V1Organization} body 
     * @param {module:api/OrganizationServiceApi~organizationServiceCreateOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    organizationServiceCreateOrganization(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling organizationServiceCreateOrganization");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Organization;

      return this.apiClient.callApi(
        '/v1/organization/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the organizationServiceDeleteOrganization operation.
     * @callback moduleapi/OrganizationServiceApi~organizationServiceDeleteOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Organization{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {module:api/OrganizationServiceApi~organizationServiceDeleteOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    organizationServiceDeleteOrganization(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizationServiceDeleteOrganization");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Organization;

      return this.apiClient.callApi(
        '/v1/organization/delete/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the organizationServiceGetOrganization operation.
     * @callback moduleapi/OrganizationServiceApi~organizationServiceGetOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Organization{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {module:api/OrganizationServiceApi~organizationServiceGetOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    organizationServiceGetOrganization(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizationServiceGetOrganization");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Organization;

      return this.apiClient.callApi(
        '/v1/organization/get/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the organizationServiceUpdateOrganization operation.
     * @callback moduleapi/OrganizationServiceApi~organizationServiceUpdateOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Organization{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/V1Organization} body 
     * @param {module:api/OrganizationServiceApi~organizationServiceUpdateOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    organizationServiceUpdateOrganization(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling organizationServiceUpdateOrganization");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Organization;

      return this.apiClient.callApi(
        '/v1/organization/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}