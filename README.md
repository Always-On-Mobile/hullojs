# @alwaysonmobile/hullojs

hullojs - JavaScript client for @alwaysonmobile/hullojs
Welcome to the hullo API.  

With this API you can perform operations on your hullo account programmatically that you can call using the hullo
console. The operations currently available include:  

* Add / Update a member
* Get the details of a member
* Get the messages sent / received from a member
* Send a message to a member

The hullo API is an easy to use RESTful API that can be called by any modern programming language that 
supports HTTP calls, and also has out of the box support for several programming languages including:  
* Java
* Javascript  

In order to use the API you will first need to generate an API key using the hullo console application, assigning
it the the relevant scopes required for the operations you wish to call.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @alwaysonmobile/hullojs --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @alwaysonmobile/hullojs from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var hullojs = require('@alwaysonmobile/hullojs');

var defaultClient = hullojs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-KEY'] = "Token"

var api = new hullojs.AccountApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccount(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.hullo.me/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*hullojs.AccountApi* | [**getAccount**](docs/AccountApi.md#getAccount) | **GET** /endpoints/account | Get details about the account
*hullojs.AttributesApi* | [**getAttributes**](docs/AttributesApi.md#getAttributes) | **GET** /endpoints/attributes | Gets the list of attributes
*hullojs.MembersApi* | [**getMember**](docs/MembersApi.md#getMember) | **GET** /endpoints/members/{phoneNumber} | Gets the details for a member
*hullojs.MembersApi* | [**optOutMember**](docs/MembersApi.md#optOutMember) | **POST** /endpoints/members/{phoneNumber}/optout | Opts the member out from the hullo member store
*hullojs.MembersApi* | [**upsertMember**](docs/MembersApi.md#upsertMember) | **POST** /endpoints/members | Adds or updates a member
*hullojs.MessagesApi* | [**createMessage**](docs/MessagesApi.md#createMessage) | **POST** /endpoints/messages | Send a message
*hullojs.MessagesApi* | [**getMessages**](docs/MessagesApi.md#getMessages) | **GET** /endpoints/messages/{phoneNumber} | Gets the messages for a specific subscriber


## Documentation for Models

 - [hullojs.Account](docs/Account.md)
 - [hullojs.Attribute](docs/Attribute.md)
 - [hullojs.AttributeEditType](docs/AttributeEditType.md)
 - [hullojs.AttributeType](docs/AttributeType.md)
 - [hullojs.GenericError](docs/GenericError.md)
 - [hullojs.Member](docs/Member.md)
 - [hullojs.Message](docs/Message.md)
 - [hullojs.MessageStatus](docs/MessageStatus.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header
