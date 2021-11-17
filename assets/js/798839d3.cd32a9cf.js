"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3159],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,b=u["".concat(o,".").concat(c)]||u[c]||m[c]||s;return n?a.createElement(b,l(l({ref:t},i),{},{components:n})):a.createElement(b,l({ref:t},i))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return i},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=["components"],p={sidebar_position:8},o="Art Request",d={unversionedId:"roster-service/art_request",id:"roster-service/art_request",isDocsHomePage:!1,title:"Art Request",description:"Art Request Attributes",source:"@site/docs/roster-service/art_request.md",sourceDirName:"roster-service",slug:"/roster-service/art_request",permalink:"/documentation/docs/roster-service/art_request",editUrl:"https://github.com/CS203-G1/documentation/docs/roster-service/art_request.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"API References",next:{title:"Company",permalink:"/documentation/docs/roster-service/company"}},i=[{value:"Art Request Attributes",id:"art-request-attributes",children:[]},{value:"Add Art Request",id:"add-art-request",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Get Art Request from Employee",id:"get-art-request-from-employee",children:[{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Get Art Request from Company",id:"get-art-request-from-company",children:[{value:"Success Response",id:"success-response-2",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]},{value:"Review Art Request",id:"review-art-request",children:[{value:"Success Response",id:"success-response-3",children:[]},{value:"Error Response",id:"error-response-3",children:[]}]}],m={toc:i};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"art-request"},"Art Request"),(0,s.kt)("h2",{id:"art-request-attributes"},"Art Request Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Id")),(0,s.kt)("td",{parentName:"tr",align:null},"UUID"),(0,s.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Employee")),(0,s.kt)("td",{parentName:"tr",align:null},"Employee"),(0,s.kt)("td",{parentName:"tr",align:null},"The Employee this ArtRequest Object is associated with")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"RequestStatus")),(0,s.kt)("td",{parentName:"tr",align:null},"enum"),(0,s.kt)("td",{parentName:"tr",align:null},"The current status of the request")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"HealthStatus")),(0,s.kt)("td",{parentName:"tr",align:null},"enum"),(0,s.kt)("td",{parentName:"tr",align:null},"The health status of the employee as indicated by the art test")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"ImageUrl")),(0,s.kt)("td",{parentName:"tr",align:null},"URL"),(0,s.kt)("td",{parentName:"tr",align:null},"The url to the picture attached to the art request")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"CreatedAt")),(0,s.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,s.kt)("td",{parentName:"tr",align:null},"The date and time when the art request was created")))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"add-art-request"},"Add Art Request"),(0,s.kt)("p",null,"Add a Art Request that belongs to an Employee to the Database and upload an image to the S3 Bucket"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"URL")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/api/employees/{employeeId}/requests/art-request"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Method")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"POST"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Auth required")),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Permissions required")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYEE"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Data constraints")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-multipart-form"},"file: file.jpg\n")),(0,s.kt)("h3",{id:"success-response"},"Success Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back a representation of the newly added Art Request."),(0,s.kt)("p",null,"For a Art Request with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"8e8f7ce8-191d-42ea-9dbf-35d061ad457c")," on the local database."),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,s.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8e8f7ce8-191d-42ea-9dbf-35d061ad457c",\n  "employee": {\n    "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n    "department": {\n      "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "C1D1",\n      "createdAt": "2021-10-09T08:19:21.653043"\n    },\n    "company": {\n      "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n      "name": "Company 1",\n      "createdAt": "2021-10-07T10:09:41.837"\n    },\n    "name": "Arvin Aik",\n    "vaccinationStatus": "SECOND_DOSE",\n    "vaccinationBrand": "PFIZER",\n    "healthStatus": "ILL",\n    "createdAt": "2021-10-04T10:58:54",\n    "isInCompany": true\n  },\n  "date": "2021-10-24",\n  "requestStatus": "PENDING",\n  "healthStatus": null,\n  "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",\n  "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n}\n')),(0,s.kt)("h3",{id:"error-response"},"Error Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back an error when the Employee does not exist in the database."),(0,s.kt)("p",null,"For a invalid Employee"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-24T03:30:43.385+00:00",\n  "status": 400,\n  "error": "Bad Request",\n  "path": "/employees/6149483b5c17-45ae-9564-34e7b40dbfd8/requests/art-request"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"get-art-request-from-employee"},"Get Art Request from Employee"),(0,s.kt)("p",null,"Get all Art Requests with a specified requestStatus from an Employee in the database using employeeId and requestStatus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"URL")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/api/employees/{employeeId}/requests/art-request/{requestStatus}"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Method")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"GET"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Auth required")),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Permissions required")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,s.kt)("h3",{id:"success-response-1"},"Success Response"),(0,s.kt)("p",null,"Response will reflect back an array of representation of the Art Requests from the Employee."),(0,s.kt)("p",null,"For an Employee with 2 PENDING requests:\n",(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "8a6f169e-06b4-4ef7-90d2-63862141bfe3",\n    "employee": {\n      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n      "department": {\n        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n        "company": {\n          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n          "name": "Company 1",\n          "createdAt": "2021-10-07T10:09:41.837"\n        },\n        "name": "C1D1",\n        "createdAt": "2021-10-09T08:19:21.653043"\n      },\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "Arvin Aik",\n      "vaccinationStatus": "SECOND_DOSE",\n      "vaccinationBrand": "PFIZER",\n      "healthStatus": "ILL",\n      "createdAt": "2021-10-04T10:58:54",\n      "isInCompany": true\n    },\n    "date": "2021-10-24",\n    "requestStatus": "PENDING",\n    "healthStatus": null,\n    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",\n    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n  },\n  {\n    "id": "acfa267d-b2fc-49aa-b859-69f13d3781cf",\n    "employee": {\n      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n      "department": {\n        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n        "company": {\n          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n          "name": "Company 1",\n          "createdAt": "2021-10-07T10:09:41.837"\n        },\n        "name": "C1D1",\n        "createdAt": "2021-10-09T08:19:21.653043"\n      },\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "Arvin Aik",\n      "vaccinationStatus": "SECOND_DOSE",\n      "vaccinationBrand": "PFIZER",\n      "healthStatus": "ILL",\n      "createdAt": "2021-10-04T10:58:54",\n      "isInCompany": true\n    },\n    "date": "2021-10-24",\n    "requestStatus": "PENDING",\n    "healthStatus": null,\n    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",\n    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n  }\n]\n')),(0,s.kt)("h3",{id:"error-response-1"},"Error Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back an error when the Employee does not exist in the database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-24T03:37:47.146+00:00",\n  "status": 400,\n  "error": "Bad Request",\n  "path": "/employees/6149483b5c17-45ae-9564-34e7b40dbfd8/requests/art-request/PENDING"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"get-art-request-from-company"},"Get Art Request from Company"),(0,s.kt)("p",null,"Get all Art Requests with a specified requestStatus from a Company in the database using companyId and requestStatus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"URL")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/api/companies/{companyId}/requests/art-request/{requestStatus}"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Method")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"GET"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Auth required")),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Permissions required")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,s.kt)("h3",{id:"success-response-2"},"Success Response"),(0,s.kt)("p",null,"Response will reflect back an array of representation of the Art Requests from the Company."),(0,s.kt)("p",null,"For a Company with 2 APPROVED requests:\n",(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "103024df-0cd1-4de3-858b-652de86b6186",\n    "employee": {\n      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n      "department": {\n        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n        "company": {\n          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n          "name": "Company 1",\n          "createdAt": "2021-10-07T10:09:41.837"\n        },\n        "name": "C1D1",\n        "createdAt": "2021-10-09T08:19:21.653043"\n      },\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "Arvin Aik",\n      "vaccinationStatus": "SECOND_DOSE",\n      "vaccinationBrand": "PFIZER",\n      "healthStatus": "ILL",\n      "createdAt": "2021-10-04T10:58:54",\n      "isInCompany": true\n    },\n    "date": "2021-10-23",\n    "requestStatus": "APPROVED",\n    "healthStatus": "HEALTHY",\n    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-23",\n    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n  },\n  {\n    "id": "8e8f7ce8-191d-42ea-9dbf-35d061ad457c",\n    "employee": {\n      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n      "department": {\n        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n        "company": {\n          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n          "name": "Company 1",\n          "createdAt": "2021-10-07T10:09:41.837"\n        },\n        "name": "C1D1",\n        "createdAt": "2021-10-09T08:19:21.653043"\n      },\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "Arvin Aik",\n      "vaccinationStatus": "SECOND_DOSE",\n      "vaccinationBrand": "PFIZER",\n      "healthStatus": "ILL",\n      "createdAt": "2021-10-04T10:58:54",\n      "isInCompany": true\n    },\n    "date": "2021-10-24",\n    "requestStatus": "APPROVED",\n    "healthStatus": "HEALTHY",\n    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",\n    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n  }\n]\n')),(0,s.kt)("h3",{id:"error-response-2"},"Error Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back an error when the Company does not exist in the database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-24T03:43:17.135+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "path": "/companies/4f671b0-511e-43e4-86bb-6828f7a8e12d/requests/art-request/APPROVED"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"review-art-request"},"Review Art Request"),(0,s.kt)("p",null,"Update an ArtRequest that belongs to an Employee with HealthStatus and RequestStatus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"URL")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/api/requests/art-request/{artRequestId}"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Method")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"PUT"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Auth required")),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Permissions required")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Data constraints")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthStatus" : "HEALTHY",\n    "requestStatus" : "APPROVED"\n}\n')),(0,s.kt)("h3",{id:"success-response-3"},"Success Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back a representation of the newly updated Art Request."),(0,s.kt)("p",null,"For a Art Request with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"8a6f169e-06b4-4ef7-90d2-63862141bfe3")," on the local database with updated healthStatus of ",(0,s.kt)("inlineCode",{parentName:"p"},"HEALTHY")," and updated requestStatus of ",(0,s.kt)("inlineCode",{parentName:"p"},"APPROVED"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8a6f169e-06b4-4ef7-90d2-63862141bfe3",\n  "employee": {\n    "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",\n    "department": {\n      "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",\n      "company": {\n        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n        "name": "Company 1",\n        "createdAt": "2021-10-07T10:09:41.837"\n      },\n      "name": "C1D1",\n      "createdAt": "2021-10-09T08:19:21.653043"\n    },\n    "company": {\n      "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",\n      "name": "Company 1",\n      "createdAt": "2021-10-07T10:09:41.837"\n    },\n    "name": "Arvin Aik",\n    "vaccinationStatus": "SECOND_DOSE",\n    "vaccinationBrand": "PFIZER",\n    "healthStatus": "ILL",\n    "createdAt": "2021-10-04T10:58:54",\n    "isInCompany": true\n  },\n  "date": "2021-10-24",\n  "requestStatus": "APPROVED",\n  "healthStatus": "HEALTHY",\n  "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",\n  "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"\n}\n')),(0,s.kt)("h3",{id:"error-response-3"},"Error Response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"404 Bad Request")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"Response will reflect back an error when the Art Request does not exist in the database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-24T03:48:45.385+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "path": "/requests/art-request/8a6f169e-06b4-4ef7-90d2-63862141bfe"\n}\n')))}u.isMDXComponent=!0}}]);