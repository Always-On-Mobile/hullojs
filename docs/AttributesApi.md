# hullojs.AttributesApi

All URIs are relative to *https://app.hullo.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttributes**](AttributesApi.md#getAttributes) | **GET** /endpoints/attributes | Gets the list of attributes



## getAttributes

> [Attribute] getAttributes()

Gets the list of attributes

Retrieves the list of attributes configured against a hullo account. Any configured attributes can be added to a member record.

### Example

```javascript
import hullojs from '@alwaysonmobile/hullojs';
let defaultClient = hullojs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new hullojs.AttributesApi();
apiInstance.getAttributes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Attribute]**](Attribute.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

