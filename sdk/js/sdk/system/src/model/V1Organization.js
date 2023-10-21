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
import {V1User} from './V1User';

/**
 * The V1Organization model module.
 * @module model/V1Organization
 * @version version not set
 */
export class V1Organization {
  /**
   * Constructs a new <code>V1Organization</code>.
   * @alias module:model/V1Organization
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1Organization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Organization} obj Optional instance to populate.
   * @return {module:model/V1Organization} The populated <code>V1Organization</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1Organization();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('users'))
        obj.users = ApiClient.convertToType(data['users'], [V1User]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V1Organization.prototype.id = undefined;

/**
 * @member {String} name
 */
V1Organization.prototype.name = undefined;

/**
 * @member {Array.<module:model/V1User>} users
 */
V1Organization.prototype.users = undefined;

