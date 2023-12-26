////////////////////////////////////////////////////////
                                                          Create Support Case
 
Default primary drop-down values api.

Step1:- Request new access token for Okta AUthorization. (https://{{authEndpoint}}/oauth2/{{authorizationId}}/v1/authorize) use provided test user credentials.

        From response copy "id_token" value.
 
Step2:- Request new access token for HID. (https://alfrescosoftware-customer.oktapreview.com/oauth2/aus11k9r8cy7CNeGT0h8/v1/authorize) pass the copied id_token as bearer token in this request. 

        From response copy "Access Token" value.

Step3:- Trigger GetACRByContactId API with the above copied acces token as AUthorization token in headers. (https://dev-idapi.hyland.com/api/v1/Users/contexts)

        Expected response:- 

		{

    "count": 1,

    "identities": [

        {

            "oktaUserId": null,

            "acrId": "07k5300000BlWEJAA3",

            "isPrimary": true,

            "isPartner": false,

            "contactId": "0035300000JXJ6iAAH",

            "accountId": "0015c00002SJXcYAAX",

            "accountHsi": "21",

            "accountName": "Sherwin-Williams Company",

            "type": "Customer",

            "industry": "Commercial",

            "isAmbassador": true

        }

    ]

}

        Copy the response.

Step4:- Request new acces token for MS. (https://alfrescosoftware-customer.oktapreview.com/oauth2/aus1cedhu5lbvtZhD0h8/v1/authorize) pass the copied id_token as bearer token in this request.

        From response copy "Access Token" value.

Step4:- Trigger GetSupportTypeCaseAPI with accountId added in the url .(https://hydev-vertic-supportcases.azurewebsites.net/api/supportCase/types/{accountId}).

        With AUthorization token passed in header (MS acces token).

		Sample response as follows:-

		{

    "managed-services": true,

    "help-ticket": true,

    "cloud-platform-request": false,

    "technical-support-case": true,

    "customer-care": true

}


Product Drop-down API. (Variant 1)
 
Step1:-  Request new access token for Okta AUthorization. (https://{{authEndpoint}}/oauth2/{{authorizationId}}/v1/authorize) use provided test user credentials.

         From response copy "id_token" value.

Step2:- Request new acces token for MS. (https://alfrescosoftware-customer.oktapreview.com/oauth2/aus1cedhu5lbvtZhD0h8/v1/authorize) pass the copied id_token as bearer token in this request.

        From response copy "Access Token" value.
 
Step3:- Trigger GetProductLines API (https://hydev-vertic-supportcases.azurewebsites.net/api/metadata/productLines). Pass the copied MS access token as AUthorization token in this request.

         Sample response as follows:- 

		 {

    "totalSize": 26,

    "done": true,

    "nextRecordsUrl": null,

    "strippedNextRecordsUrl": null,

    "records": [

        {

            "id": "aEZ5c000000k9bNGAQ",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Process (BPM)",

            "currencyIsoCode": "USD",

            "createdDate": "2022-10-17T17:08:10.000+0000",

            "createdById": "0058b00000GXb8KAAT",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DguGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "AirBase",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:29.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-14T14:27:16.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-14T14:27:16.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh1GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "ShareBase",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:42:07.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgsGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Nolij",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:31.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgmGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Brainware",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:38.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DhMGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Streamline",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:42:20.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgGGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "OnBase",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-08T18:33:03.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DfmGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Alfresco",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-02T17:11:30.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-10-17T17:08:10.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-10-17T17:08:10.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DhPGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Saperion",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:42:02.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DglGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "AnyDoc",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:33.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgvGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Hyland Credentials",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:06.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-14T14:27:16.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-14T14:27:16.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh8GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "PACSgear",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:41.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2023-06-12T18:16:13.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2023-06-12T18:16:13.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DhOGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "R4",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:59.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgkGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "AcroSoft",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:19.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh6GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Liberty",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:19.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-14T14:27:16.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-14T14:27:16.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgnGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Content Composer",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:42.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DhEGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Hyland Experience Platform",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:13.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgqGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Enterprise Search",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:54.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh0GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Process Mining",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:54.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-14T14:27:16.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-14T14:27:16.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgrGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Media Manager",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:24.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgzGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Document Filters",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:47.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh5GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Hyland RPA",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:16.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DhKGAU",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Perceptive Content",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:48.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgoGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "NilRead",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:27.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004DgpGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Acuo",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:40:24.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        },

        {

            "id": "aEZ8b0000004Dh7GAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "OneContent",

            "currencyIsoCode": "USD",

            "createdDate": "2022-09-13T16:41:37.000+0000",

            "createdById": "0058b00000GXCoXAAX",

            "lastModifiedDate": "2022-12-08T19:06:39.000+0000",

            "lastModifiedById": "0058b00000GXb8KAAT",

            "systemModstamp": "2022-12-08T19:06:39.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": null,

            "available_for_Support__c": true,

            "available_in_Hyland_Jira__c": false

        }

    ]

}
 
Product Drop-down API.(Variant 1)
 
Step1:-  Request new access token for Okta AUthorization. (https://{{authEndpoint}}/oauth2/{{authorizationId}}/v1/authorize) use provided test user credentials.

         From response copy "id_token" value.

Step2:- Request new acces token for MS. (https://alfrescosoftware-customer.oktapreview.com/oauth2/aus1cedhu5lbvtZhD0h8/v1/authorize) pass the copied id_token as bearer token in this request.

        From response copy "Access Token" value.
 
Step3:- Trigger GetProductLines API (https://hydev-vertic-supportcases.azurewebsites.net/api/metadata/productLines/components?ProductLine={productid}). 

        Pass the copied MS access token as AUthorization token in this request and pass selected productid

         Sample response as follows:- 

		 {

    "totalSize": 1,

    "done": true,

    "nextRecordsUrl": null,

    "strippedNextRecordsUrl": null,

    "records": [

        {

            "id": "aEY5c000000oLkkGAE",

            "ownerId": "0058b00000GY5wgAAD",

            "isDeleted": false,

            "name": "Airbase",

            "currencyIsoCode": "USD",

            "recordTypeId": "0125c000001cxLxAAI",

            "createdDate": "2022-10-17T17:16:25.000+0000",

            "createdById": "0058b00000GXb8KAAT",

            "lastModifiedDate": "2022-11-15T15:34:15.000+0000",

            "lastModifiedById": "0058b00000GXCoXAAX",

            "systemModstamp": "2023-03-27T07:00:28.000+0000",

            "lastViewedDate": null,

            "lastReferencedDate": null,

            "external_Id__c": "aEY5c000000oLkkGAE",

            "license_Generation_Behavior__c": null,

            "parent_Component__c": null,

            "product_Line__c": "aEZ8b0000004DguGAE",

            "assets_Module_Key__c": null,

            "assets_Module_Key_Link__c": null,

            "product_Line_Name__c": null,

            "default_License_Version__c": null,

            "license_Expiration_Eligible__c": false,

            "available_for_Support__c": false,

            "community_Name__c": "AirBase",

            "legacy_MM_Id__c": null,

            "legacy_PLF_Id__c": null,

            "licensing_Method__c": null,

            "license_Code__c": null,

            "external_License_Visibility__c": null,

            "outdate_Previous_Licenses__c": false,

            "is_Licensed_Product_Line_Component__c": false,

            "support_Case_Exception__c": false

        }

    ]

}

 
Service request drop-down API (Variant 2)
 
Step1:-  Request new access token for Okta AUthorization. (https://{{authEndpoint}}/oauth2/{{authorizationId}}/v1/authorize) use provided test user credentials.

         From response copy "id_token" value.

Step2:- Request new acces token for MS. (https://alfrescosoftware-customer.oktapreview.com/oauth2/aus1cedhu5lbvtZhD0h8/v1/authorize) pass the copied id_token as bearer token in this request.

        From response copy "Access Token" value.
 
Step3:- Trigger GetProductLines API (https://hydev-vertic-supportcases.azurewebsites.net/api/cloudservice/catalog). Pass the copied MS access token as AUthorization token in this request.

         Sample response as follows:- 

		 [

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blJxCAI"

        },

        "id": "aHd5c000000blJxCAI",

        "name": "Customer to Hyland Firewall - IP Restriction - Hyland Community",

        "citsm__Description__c": "<p>Request for inbound IP Whitelisting</p>",

        "system_Introduction_Prompt_Display_Text__c": "This request is utilized for requesting the allowance of incoming (ingress) Customer IPs to access Hyland Cloud",

        "system_External_Unique_Ref__c": "CPEF_Req_87COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OOmCAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OOmCAM"

            },

            "id": "aKs5c0000008OOmCAM",

            "locator_Key__c": "HylCommIP",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p>Business Reason:</p><p>Environment (PROD/UT1/UT2/ etc.) :</p><p>Source (Customer NAT/Public IPs):</p><p>Destination (Hyland URL you want to access):</p><p>Port (443 by default):</p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blK2CAI"

        },

        "id": "aHd5c000000blK2CAI",

        "name": "Add or remove a Citrix Account - Hyland Community",

        "citsm__Description__c": "<p><span style=\"font-size: 14px;\">Request to add or remove Citrix accounts for customer solutions</span></p>",

        "system_Introduction_Prompt_Display_Text__c": "This request is solely for CST and CTX account handling.  Virtual application requests will be cancelled.  Customers are limited to 5 Citrix accounts.  Additional accounts require a Purchase Order, please work with your Hyland Account Manager to start the process of purchasing additional accounts",

        "system_External_Unique_Ref__c": "CPEF_Req_146COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OOrCAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OOrCAM"

            },

            "id": "aKs5c0000008OOrCAM",

            "locator_Key__c": "HylCommCitrix",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p>Service Type (Add or Remove):</p><p><span style=\"background-color: rgb(255, 255, 255); font-size: 14px;\">Instance Name (PROD,UT1,UT2):</span></p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blK7CAI"

        },

        "id": "aHd5c000000blK7CAI",

        "name": "Add, modify, or remove SFTP Folders - Hyland Community",

        "citsm__Description__c": "<p>Request to add, modify, or remove a SFTP Folders</p>",

        "system_Introduction_Prompt_Display_Text__c": "Request to add, modify, or remove a SFTP Folders",

        "system_External_Unique_Ref__c": "CPEF_Req_152COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OOwCAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OOwCAM"

            },

            "id": "aKs5c0000008OOwCAM",

            "locator_Key__c": "HylCommSFTP",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p><span style=\"color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);\">Service Type (Add, Modify, Remove):</span></p><p>Instance Name (Prod,UT1,UT2):</p><p>Directory (Incoming or Outgoing):</p><p>Folder Name:</p><p>SFTP Usernames:</p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blJsCAI"

        },

        "id": "aHd5c000000blJsCAI",

        "name": "Add or remove a CSA/FNC from a Customer's Cloud Account - Hyland Community",

        "citsm__Description__c": "<p>Add or remove a Customer Security Admin (CSA) or Failure Notification Contact (FNC)</p>",

        "system_Introduction_Prompt_Display_Text__c": "This is a request to add or remove a Customer Security Admin (CSA) or Failure Notification Contact (FNC) from a Customer's Cloud Account record.  A CSA can authorize changes to a Hyland hosted environment and also receives Maintenance Notifications.  The FNC would only receive maintenance and failure notifications.  Hyland Partners if you need to provide access to multiple accounts please provide the list of HSI Numbers for your Partner Accounts.",

        "system_External_Unique_Ref__c": "CPEF_Req_82COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OOhCAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OOhCAM"

            },

            "id": "aKs5c0000008OOhCAM",

            "locator_Key__c": "HylCommCSA",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p>Service Type (Add or Remove):</p><p><span style=\"background-color: rgb(255, 255, 255); font-size: 14px; color: rgb(68, 68, 68);\">Cloud Contact Role (CSA or FNC):</span></p><p><span style=\"font-size: 10.5pt;\">Cloud Contact&#39;s Full Name:</span></p><p><span style=\"font-size: 10.5pt;\">Cloud Contact&#39;s Email address:</span></p><p><span style=\"font-size: 10.5pt;\">HSI Number(s) If Applicable:</span></p><p><br></p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blKCCAY"

        },

        "id": "aHd5c000000blKCCAY",

        "name": "Password Reset or Account Unlock - Hyland Community",

        "citsm__Description__c": "<p><span style=\"font-size: 14px;\">Password Reset or Account Unlock</span></p>",

        "system_Introduction_Prompt_Display_Text__c": "Use this request to request an account unlock or password reset.  Note: Cloud Portal accounts auto-unlock after 15 minutes and Hyland does not have the ability to reset your password.",

        "system_External_Unique_Ref__c": "CPEF_Req_41COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OP1CAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OP1CAM"

            },

            "id": "aKs5c0000008OP1CAM",

            "locator_Key__c": "HylCommAccount",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p><span style=\"font-size: 10pt; color: rgb(51, 51, 51);\">User&#39;s Full Name</span></p><p><span style=\"font-size: 10pt; color: rgb(51, 51, 51);\">User&#39;s Email Address</span></p><p><span style=\"font-size: 10pt; color: rgb(51, 51, 51);\">Username (if known)</span></p><p><span style=\"font-size: 10pt; color: rgb(51, 51, 51);\">Account Type (Hyland Cloud/Citrix, OnBase, Content Brainware, etc...)</span></p><p><span style=\"font-size: 10pt; color: rgb(51, 51, 51);\">Please describe request (Password Reset, Unlock)</span></p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000blKHCAY"

        },

        "id": "aHd5c000000blKHCAY",

        "name": "Add, modify, or remove SFTP Notifications - Hyland Community",

        "citsm__Description__c": "<p>Request to add or remove a SFTP Notifications</p>",

        "system_Introduction_Prompt_Display_Text__c": "Please list the notification type to add or remove from the following list: Notify Receipt, Notify Error, Check Duplicate, Check ZIP Duplicates",

        "system_External_Unique_Ref__c": "CPEF_Req_153COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c0000008OP6CAM",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c0000008OP6CAM"

            },

            "id": "aKs5c0000008OP6CAM",

            "locator_Key__c": "HylCommNotify",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);\">Service Type (Add or Remove):</span></p><p>Instance Name (Prod,UT1,UT2):</p><p>SFTP Usernames:</p><p>Notification Type:</p>"

        }

    },

    {

        "attributes": {

            "type": "citsm__Service_Catalog_Item__c",

            "url": "/services/data/v55.0/sobjects/citsm__Service_Catalog_Item__c/aHd5c000000k9bhCAA"

        },

        "id": "aHd5c000000k9bhCAA",

        "name": "Custom Code Security Review - Hyland Community",

        "citsm__Description__c": "<p>Request for a Custom Code Security Review or Deploy</p>",

        "system_Introduction_Prompt_Display_Text__c": "You will be solicited to provide the code at request assignment either via email or secure link.  Please ensure you have read the following guidelines prior to submitting at https://community.hyland.com/en/hyland-cloud/documentation/reference-information/design-considerations/custom-code-in-the-hyland-cloud",

        "system_External_Unique_Ref__c": "CPEF_Req_03COMM",

        "system_Hyland_Community_Enabled__c": true,

        "itsM_Record_Item__c": "aKs5c000000PAuTCAW",

        "itsM_Record_Item__r": {

            "attributes": {

                "type": "ITSM_Record_Item__c",

                "url": "/services/data/v55.0/sobjects/ITSM_Record_Item__c/aKs5c000000PAuTCAW"

            },

            "id": "aKs5c000000PAuTCAW",

            "locator_Key__c": "HylCommCode",

            "available_for_Record_Type__c": "Service_Request",

            "available_for_RecordType_ID__c": "0128b000001HTsOAAW",

            "richText_Input_Template__c": "<p>Submission Type (New/Revision or Promote from UT to Prod)</p><p>Revision Comments (if applicable, none state NA)</p><p>Developer Name/Contact (Email &amp; Name)</p><p>Describe code/application</p><p>Provide Installation Instructions</p><p>Instances (Prod, UT1, UT2, etc...)</p>"

        }

    }

]

