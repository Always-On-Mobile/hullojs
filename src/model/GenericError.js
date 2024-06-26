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

import ApiClient from '../ApiClient';

/**
 * The GenericError model module.
 * @module model/GenericError
 * @version 1.0.0
 */
class GenericError {
    /**
     * Constructs a new <code>GenericError</code>.
     * **Provides information about the error that occurred when calling an operation. The code can be one of the following:** | Status           | Code        | Reason                                                                                                                                                     | | ---------------- | ------------| -----------------------------------------------------------------------------------------------------------------------------------------------------------| | 500              | SE001       | HTTP 500 Internal Server Error                                                                                                                             | | 500              | SE002       | HTTP 500 Internal Server Error - Configuration Error                                                                                                       | | 500              | SE003       | HTTP 500 Internal Server Error - External System Error                                                                                                     | | 400              | BR001       | JSON request invalid, it must contain %s in a valid JSON format                                                                                            | | 400              | BR002       | The &#39;%s&#39; parameter must be provided                                                                                                                        | | 400              | BR003       | The request body was not valid                                                                                                                             | | 400              | BR004       | The &#39;%s&#39; parameter must be in the ISO-8601 extended offset date-time format                                                                                | | 400              | BR012       | The account does not have enough credit to send the requested message. Estimated credit required: %s Credit available: %s                                  | | 400              | BR013       | The &#39;%s&#39; parameter must be at least %s seconds or more in the future                                                                                       | | 400              | BR016       | The &#39;%s&#39; parameter must be between %s and %s characters                                                                                                    | | 400              | BR025       | The &#39;%s&#39; parameter must contain a valid value                                                                                                              | | 400              | BR027       | Member not opted in                                                                                                                                        | | 400              | BR039       | Member opted out                                                                                                                                           | | 400              | BR044       | At least one of the specified parameters &#39;%s&#39; must be provided                                                                                             | | 400              | BR049       | %s is a mandatory attribute and must be provided                                                                                                           | | 401              | UA001       | Access denied: check API key                                                                                                                               | | 401              | UA002       | Access denied: &#39;%s&#39;                                                                                                                                        | | 401              | UA005       | Account disabled                                                                                                                                           | | 403              | FB001       | Access denied                                                                                                                                              | | 404              | NF001       | %s not found                                                                                                                                               | | 429              | TR001       | Too Many Requests                                                                                                                                          | 
     * @alias module:model/GenericError
     */
    constructor() { 
        
        GenericError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenericError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericError} obj Optional instance to populate.
     * @return {module:model/GenericError} The populated <code>GenericError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenericError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenericError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}



/**
 * @member {String} code
 */
GenericError.prototype['code'] = undefined;

/**
 * @member {String} text
 */
GenericError.prototype['text'] = undefined;






export default GenericError;

