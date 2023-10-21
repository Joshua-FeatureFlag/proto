# systemproto

Systemproto - JavaScript client for systemproto
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: version not set
- Package version: version not set
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install systemproto --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
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
var Systemproto = require('systemproto');

var api = new Systemproto.OrganizationServiceApi()
var body = new Systemproto.V1Organization(); // {V1Organization} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.organizationServiceCreateOrganization(body, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Systemproto.OrganizationServiceApi* | [**organizationServiceCreateOrganization**](docs/OrganizationServiceApi.md#organizationServiceCreateOrganization) | **POST** /v1/organization/create | 
*Systemproto.OrganizationServiceApi* | [**organizationServiceDeleteOrganization**](docs/OrganizationServiceApi.md#organizationServiceDeleteOrganization) | **DELETE** /v1/organization/delete/{id} | 
*Systemproto.OrganizationServiceApi* | [**organizationServiceGetOrganization**](docs/OrganizationServiceApi.md#organizationServiceGetOrganization) | **GET** /v1/organization/get/{id} | 
*Systemproto.OrganizationServiceApi* | [**organizationServiceUpdateOrganization**](docs/OrganizationServiceApi.md#organizationServiceUpdateOrganization) | **PUT** /v1/organization/update | 
*Systemproto.UserServiceApi* | [**userServiceCreateUser**](docs/UserServiceApi.md#userServiceCreateUser) | **POST** /v1/user/create | 
*Systemproto.UserServiceApi* | [**userServiceDeleteUser**](docs/UserServiceApi.md#userServiceDeleteUser) | **DELETE** /v1/user/delete/{id} | 
*Systemproto.UserServiceApi* | [**userServiceGetUser**](docs/UserServiceApi.md#userServiceGetUser) | **GET** /v1/user/{id} | 
*Systemproto.UserServiceApi* | [**userServiceUpdateUser**](docs/UserServiceApi.md#userServiceUpdateUser) | **PUT** /v1/user/update | 

## Documentation for Models

 - [Systemproto.ProtobufAny](docs/ProtobufAny.md)
 - [Systemproto.RpcStatus](docs/RpcStatus.md)
 - [Systemproto.V1Organization](docs/V1Organization.md)
 - [Systemproto.V1User](docs/V1User.md)

## Documentation for Authorization

 All endpoints do not require authorization.
