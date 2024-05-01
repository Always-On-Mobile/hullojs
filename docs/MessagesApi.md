# hullojs.MessagesApi

All URIs are relative to *https://app.hullo.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](MessagesApi.md#createMessage) | **POST** /endpoints/messages | Send a message
[**getMessages**](MessagesApi.md#getMessages) | **GET** /endpoints/messages/{phoneNumber} | Gets the messages for a specific subscriber



## createMessage

> Message createMessage(message)

Send a message

Allows messages to be sent to members. Members must be fully opted-in in order to be sent a message, otherwise this operation will reject the call. If a message is longer than 160 characters - using the GSM character set (https://en.wikipedia.org/wiki/GSM_03.38) - then the message will be split into multiple 140 character parts.  If any characters fall outside of the supported GSM character set then the message will be converted to UTF-16 (https://en.wikipedia.org/wiki/UTF-16) and split into multiple 70 character parts. The parts will be reconstructed and displayed to the member as a single message on their handset. 

### Example

```javascript
import hullojs from '@alwaysonmobile/hullojs';
let defaultClient = hullojs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new hullojs.MessagesApi();
let message = {"phoneNumber":"447700912345","messageText":"Hi, don't forget your appointment on Thursday at 11:00"}; // Message | A JSON object containing message information
apiInstance.createMessage(message, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**Message**](Message.md)| A JSON object containing message information | 

### Return type

[**Message**](Message.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMessages

> [Message] getMessages(phoneNumber, opts)

Gets the messages for a specific subscriber

Retrieves any messages sent / received for a specific subscriber. The messages will be ordered by date  descending, so the newest messages will appear at the top.

### Example

```javascript
import hullojs from '@alwaysonmobile/hullojs';
let defaultClient = hullojs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new hullojs.MessagesApi();
let phoneNumber = "phoneNumber_example"; // String | The phone number of the member
let opts = {
  'limit': 50 // Number | 
};
apiInstance.getMessages(phoneNumber, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | **String**| The phone number of the member | 
 **limit** | **Number**|  | [optional] [default to 50]

### Return type

[**[Message]**](Message.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

