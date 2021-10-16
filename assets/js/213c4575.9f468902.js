"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1796],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5831:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],p={sidebar_position:1},i="Company",d={unversionedId:"roster-service/company",id:"roster-service/company",isDocsHomePage:!1,title:"Company",description:"Company Attributes",source:"@site/docs/roster-service/company.md",sourceDirName:"roster-service",slug:"/roster-service/company",permalink:"/documentation/docs/roster-service/company",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"API References",next:{title:"Department",permalink:"/documentation/docs/roster-service/department"}},s=[{value:"Company Attributes",id:"company-attributes",children:[]},{value:"Add Company",id:"add-company",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Get Company",id:"get-company",children:[{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Get All Companies",id:"get-all-companies",children:[{value:"Success Response",id:"success-response-2",children:[]}]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"company"},"Company"),(0,l.kt)("h2",{id:"company-attributes"},"Company Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Company name given by the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CreatedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"The date and time when the company was created")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"add-company"},"Add Company"),(0,l.kt)("p",null,"Add a Company to the database with basic information "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/companies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POST"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Data constraints")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "[1 to 30 chars]"\n}\n')),(0,l.kt)("h3",{id:"success-response"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a representation of the newly added Company."),(0,l.kt)("p",null,"For a Company with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"27b06c9d-a553-4a88-a681-b7cbc045a9e5")," and name ",(0,l.kt)("inlineCode",{parentName:"p"},"Company")," on the local database."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "27b06c9d-a553-4a88-a681-b7cbc045a9e5",\n  "name": "Company"\n}\n')),(0,l.kt)("h3",{id:"error-response"},"Error Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,l.kt)("p",null,"For a Company with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"27b06c9d-a553-4a88-a681-b7cbc045a9e5")," is not found on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Could not find company 27b06c9d-a553-4a88-a681-b7cbc045a9e5.\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"get-company"},"Get Company"),(0,l.kt)("p",null,"Get a Company to the database using the UUID"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/companies/{id}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h3",{id:"success-response-1"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a representation of the newly added Company."),(0,l.kt)("p",null,"For a Company with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"27b06c9d-a553-4a88-a681-b7cbc045a9e5")," and name ",(0,l.kt)("inlineCode",{parentName:"p"},"Company")," on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "27b06c9d-a553-4a88-a681-b7cbc045a9e5",\n  "name": "Company"\n}\n')),(0,l.kt)("h3",{id:"error-response-1"},"Error Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,l.kt)("p",null,"For a Company with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"27b06c9d-a553-4a88-a681-b7cbc045a9e5")," is not found on the local database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Could not find company 27b06c9d-a553-4a88-a681-b7cbc045a9e5.\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"get-all-companies"},"Get All Companies"),(0,l.kt)("p",null,"Get all Companies that exist in the database"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/companies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Method")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auth required")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Permissions required")),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h3",{id:"success-response-2"},"Success Response"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Content examples")),(0,l.kt)("p",null,"Response will reflect back an array of representation of companies."),(0,l.kt)("p",null,"For a local database with 3 companies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "efd12781-392b-4c97-b388-8722bd709601",\n    "name": "Company 1"\n  },\n  {\n    "id": "825e8966-606f-4ed1-808e-9a1bf7f977a2",\n    "name": "Company 2"\n  },\n  {\n    "id": "e1f10832-8eb3-4cde-bd35-91d80d8bf606",\n    "name": "Company 3"\n  }\n]\n')),(0,l.kt)("p",null,"Note that there will be no error thrown if database is empty."))}c.isMDXComponent=!0}}]);