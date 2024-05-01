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
* Enum class MessageStatus.
* @enum {}
* @readonly
*/
export default class MessageStatus {
    
        /**
         * value: "FAILED"
         * @const
         */
        "FAILED" = "FAILED";

    
        /**
         * value: "ACCEPTED"
         * @const
         */
        "ACCEPTED" = "ACCEPTED";

    
        /**
         * value: "DELIVERED"
         * @const
         */
        "DELIVERED" = "DELIVERED";

    
        /**
         * value: "ISSUED"
         * @const
         */
        "ISSUED" = "ISSUED";

    
        /**
         * value: "REJECTED"
         * @const
         */
        "REJECTED" = "REJECTED";

    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
        /**
         * value: "STAGING"
         * @const
         */
        "STAGING" = "STAGING";

    
        /**
         * value: "N/A"
         * @const
         */
        "N/A" = "N/A";

    

    /**
    * Returns a <code>MessageStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageStatus} The enum <code>MessageStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

