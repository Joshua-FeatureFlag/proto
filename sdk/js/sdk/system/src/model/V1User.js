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
import {ApiClient} from '../ApiClient';

/**
 * The V1User model module.
 * @module model/V1User
 * @version version not set
 */
export class V1User {
  /**
   * Constructs a new <code>V1User</code>.
   * @alias module:model/V1User
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1User} obj Optional instance to populate.
   * @return {module:model/V1User} The populated <code>V1User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1User();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('organizationId'))
        obj.organizationId = ApiClient.convertToType(data['organizationId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V1User.prototype.id = undefined;

/**
 * @member {String} name
 */
V1User.prototype.name = undefined;

/**
 * @member {String} organizationId
 */
V1User.prototype.organizationId = undefined;
