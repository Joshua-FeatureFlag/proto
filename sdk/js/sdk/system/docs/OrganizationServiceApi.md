# FeatureFlag.OrganizationServiceApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationServiceCreateOrganization**](OrganizationServiceApi.md#organizationServiceCreateOrganization) | **POST** /v1/organization/create | 
[**organizationServiceDeleteOrganization**](OrganizationServiceApi.md#organizationServiceDeleteOrganization) | **DELETE** /v1/organization/delete/{id} | 
[**organizationServiceGetOrganization**](OrganizationServiceApi.md#organizationServiceGetOrganization) | **GET** /v1/organization/get/{id} | 
[**organizationServiceUpdateOrganization**](OrganizationServiceApi.md#organizationServiceUpdateOrganization) | **PUT** /v1/organization/update | 

<a name="organizationServiceCreateOrganization"></a>
# **organizationServiceCreateOrganization**
> V1Organization organizationServiceCreateOrganization(body)



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

let apiInstance = new FeatureFlag.OrganizationServiceApi();
let body = new FeatureFlag.V1Organization(); // V1Organization | 

apiInstance.organizationServiceCreateOrganization(body, (error, data, response) => {
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
 **body** | [**V1Organization**](V1Organization.md)|  | 

### Return type

[**V1Organization**](V1Organization.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="organizationServiceDeleteOrganization"></a>
# **organizationServiceDeleteOrganization**
> V1Organization organizationServiceDeleteOrganization(id, opts)



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

let apiInstance = new FeatureFlag.OrganizationServiceApi();
let id = "id_example"; // String | 
let opts = { 
  'name': "name_example" // String | 
};
apiInstance.organizationServiceDeleteOrganization(id, opts, (error, data, response) => {
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

### Return type

[**V1Organization**](V1Organization.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationServiceGetOrganization"></a>
# **organizationServiceGetOrganization**
> V1Organization organizationServiceGetOrganization(id, opts)



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

let apiInstance = new FeatureFlag.OrganizationServiceApi();
let id = "id_example"; // String | 
let opts = { 
  'name': "name_example" // String | 
};
apiInstance.organizationServiceGetOrganization(id, opts, (error, data, response) => {
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

### Return type

[**V1Organization**](V1Organization.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationServiceUpdateOrganization"></a>
# **organizationServiceUpdateOrganization**
> V1Organization organizationServiceUpdateOrganization(body)



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

let apiInstance = new FeatureFlag.OrganizationServiceApi();
let body = new FeatureFlag.V1Organization(); // V1Organization | 

apiInstance.organizationServiceUpdateOrganization(body, (error, data, response) => {
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
 **body** | [**V1Organization**](V1Organization.md)|  | 

### Return type

[**V1Organization**](V1Organization.md)

### Authorization

[BearerAuth](../README.md#BearerAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

