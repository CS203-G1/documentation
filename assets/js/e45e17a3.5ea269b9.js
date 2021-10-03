"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],p={sidebar_position:1},i="Employee",s={unversionedId:"analytics-service/employee",id:"analytics-service/employee",isDocsHomePage:!1,title:"Employee",description:"Employee Attributes",source:"@site/docs/analytics-service/employee.md",sourceDirName:"analytics-service",slug:"/analytics-service/employee",permalink:"/documentation/docs/analytics-service/employee",editUrl:"https://github.com/CS203-G1/documentation/docs/analytics-service/employee.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Work Location",permalink:"/documentation/docs/roster-service/work_location"},next:{title:"Employee Vaccination",permalink:"/documentation/docs/analytics-service/employee_vaccination"}},m=[{value:"Employee Attributes",id:"employee-attributes",children:[]},{value:"Get Employee",id:"get-employee",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Get All Employees",id:"get-all-employees",children:[{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Update Employee",id:"update-employee",children:[{value:"Success Response",id:"success-response-2",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"employee"},"Employee"),(0,l.kt)("h2",{id:"employee-attributes"},"Employee Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Department")),(0,l.kt)("td",{parentName:"tr",align:null},"Department"),(0,l.kt)("td",{parentName:"tr",align:null},"Department that employee belongs to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vaccination Status")),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"Current vaccination status of the employee (i.e. Not Vaccinated)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vaccination Brand")),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"Brand of vaccine taken by employee (i.e. Pfizer)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Health Status")),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"Current health status of the employee (i.e. Healthy)")))),(0,l.kt)("h2",{id:"get-employee"},"Get Employee"),(0,l.kt)("p",null,"Get a Employee in the database using the Department ID, Employee Id"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/departmentId/{departmentId}/employees/{employeeId}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h3",{id:"success-response"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a representation of the newly added Company."),(0,l.kt)("p",null,"For an Employee with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"a88f8825-34e2-44cb-a9f5-4482c82bbc48")," on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",\n    "name": "Employee 1",\n    "vaccinationStatus": "SECOND_DOSE",\n    "vaccineBrand": "PFIZER",\n    "healthStatus": "HEALTHY"\n}\n')),(0,l.kt)("h3",{id:"error-response"},"Error Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,l.kt)("p",null,"For an Employee with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"c598568a-f66e-4d23-99e5-97b54b412107")," from Department with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"a88f8825-34e2-44cb-a9f5-4482c82bbc48")," is not found on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Unable to find employee c598568a-f66e-4d23-99e5-97b54b412107 from department a88f8825-34e2-44cb-a9f5-4482c82bbc48\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"get-all-employees"},"Get All Employees"),(0,l.kt)("p",null,"Get all Employees to belongs to a certain Department that exist in the database"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/departmentId/{departmentId}/employees/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h3",{id:"success-response-1"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back an array of representation of Employees."),(0,l.kt)("p",null,"For a local database with 3 Employees."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",\n    "name": "Employee 1",\n    "vaccinationStatus": "SECOND_DOSE",\n    "vaccineBrand": "PFIZER",\n    "healthStatus": "HEALTHY"\n    },\n    {\n    "id": "97a59744-ad57-4de7-ba87-0bf00c618c36",\n    "name": "Employee 2",\n    "vaccinationStatus": "FIRST_DOSE",\n    "vaccineBrand": "MODERNA",\n    "healthStatus": "HEALTHY"\n    }\n]\n')),(0,l.kt)("h3",{id:"error-response-1"},"Error Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,l.kt)("p",null,"For a Department with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"c598568a-f66e-4d23-99e5-97b54b412107")," that has no employees on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Department c598568a-f66e-4d23-99e5-97b54b412107 has no employees.\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"update-employee"},"Update Employee"),(0,l.kt)("p",null,"Update an Employee that belongs to a Department using the Department Id, Employee Id"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/departmentId/{departmentId}/employees/{employeeId}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PUT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h3",{id:"success-response-2"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a representation of the Work Location."),(0,l.kt)("p",null,"For a Employee with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"a88f8825-34e2-44cb-a9f5-4482c82bbc48")," on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",\n    "name": "Employee 1",\n    "vaccinationStatus": "SECOND_DOSE",\n    "vaccineBrand": "PFIZER",\n    "healthStatus": "HEALTHY"\n}\n')),(0,l.kt)("h3",{id:"error-response-2"},"Error Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,l.kt)("p",null,"For an Employee with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"a88f8825-34e2-44cb-a9f5-4482c82bbc48")," from Department with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"c598568a-f66e-4d23-99e5-97b54b412107")," is not found on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Unable to find employee a88f8825-34e2-44cb-a9f5-4482c82bbc48 from department c598568a-f66e-4d23-99e5-97b54b412107\n")))}c.isMDXComponent=!0}}]);