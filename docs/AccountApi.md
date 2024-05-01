# hullojs.AccountApi

All URIs are relative to *https://app.hullo.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountApi.md#getAccount) | **GET** /endpoints/account | Get details about the account



## getAccount

> Account getAccount()

Get details about the account

Allows the caller to get information about the account being used to access the API. Currently this allows access to the name given when creating the API key in the hullo application. This can be useful for allowing a client application to verify the key being used.

### Example

```javascript
import hullojs from '@alwaysonmobile/hullojs';
let defaultClient = hullojs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new hullojs.AccountApi();
apiInstance.getAccount((error, data, response) => {
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

[**Account**](Account.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

