# FeatureFlag.UserServiceApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userServiceCreateUser**](UserServiceApi.md#userServiceCreateUser) | **POST** /v1/user/create | 
[**userServiceDeleteUser**](UserServiceApi.md#userServiceDeleteUser) | **DELETE** /v1/user/delete/{id} | 
[**userServiceGetUser**](UserServiceApi.md#userServiceGetUser) | **GET** /v1/user/{id} | 
[**userServiceUpdateUser**](UserServiceApi.md#userServiceUpdateUser) | **PUT** /v1/user/update | 

<a name="userServiceCreateUser"></a>
# **userServiceCreateUser**
> V1User userServiceCreateUser(body)



### Example
```javascript
import {FeatureFlag} from 'feature_flag';
let defaultClient = FeatureFlag.ApiClient.instance;

// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new FeatureFlag.UserServiceApi();
let body = new FeatureFlag.V1User(); // V1User | 

apiInstance.userServiceCreateUser(body, (error, data, response) => {
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
 **body** | [**V1User**](V1User.md)|  | 

### Return type

[**V1User**](V1User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userServiceDeleteUser"></a>
# **userServiceDeleteUser**
> V1User userServiceDeleteUser(id, opts)



### Example
```javascript
import {FeatureFlag} from 'feature_flag';
let defaultClient = FeatureFlag.ApiClient.instance;

// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FeatureFlag.UserServiceApi();
let id = "id_example"; // String | 
let opts = { 
  'name': "name_example", // String | 
  'organizationId': "organizationId_example" // String | 
};
apiInstance.userServiceDeleteUser(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **name** | **String**|  | [optional] 
 **organizationId** | **String**|  | [optional] 

### Return type

[**V1User**](V1User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userServiceGetUser"></a>
# **userServiceGetUser**
> V1User userServiceGetUser(id, opts)



### Example
```javascript
import {FeatureFlag} from 'feature_flag';
let defaultClient = FeatureFlag.ApiClient.instance;

// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FeatureFlag.UserServiceApi();
let id = "id_example"; // String | 
let opts = { 
  'name': "name_example", // String | 
  'organizationId': "organizationId_example" // String | 
};
apiInstance.userServiceGetUser(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **name** | **String**|  | [optional] 
 **organizationId** | **String**|  | [optional] 

### Return type

[**V1User**](V1User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userServiceUpdateUser"></a>
# **userServiceUpdateUser**
> V1User userServiceUpdateUser(body)



### Example
```javascript
import {FeatureFlag} from 'feature_flag';
let defaultClient = FeatureFlag.ApiClient.instance;

// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FeatureFlag.UserServiceApi();
let body = new FeatureFlag.V1User(); // V1User | 

apiInstance.userServiceUpdateUser(body, (error, data, response) => {
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
 **body** | [**V1User**](V1User.md)|  | 

### Return type

[**V1User**](V1User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

