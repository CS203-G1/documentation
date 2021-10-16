"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3133],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||p;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),p=(n(7294),n(3905)),l=["components"],o={sidebar_position:2},d="Department",i={unversionedId:"roster-service/department",id:"roster-service/department",isDocsHomePage:!1,title:"Department",description:"Department Attributes",source:"@site/docs/roster-service/department.md",sourceDirName:"roster-service",slug:"/roster-service/department",permalink:"/documentation/docs/roster-service/department",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"API References",previous:{title:"Company",permalink:"/documentation/docs/roster-service/company"},next:{title:"Employee",permalink:"/documentation/docs/roster-service/employee"}},m=[{value:"Department Attributes",id:"department-attributes",children:[]},{value:"Add Department",id:"add-department",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Get Department",id:"get-department",children:[{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Update Department",id:"update-department",children:[{value:"Success Response",id:"success-response-2",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]},{value:"Delete Department",id:"delete-department",children:[{value:"Success Response",id:"success-response-3",children:[]},{value:"Error Response",id:"error-response-3",children:[]}]}],s={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"department"},"Department"),(0,p.kt)("h2",{id:"department-attributes"},"Department Attributes"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Id")),(0,p.kt)("td",{parentName:"tr",align:null},"UUID"),(0,p.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"CompanyId")),(0,p.kt)("td",{parentName:"tr",align:null},"UUID"),(0,p.kt)("td",{parentName:"tr",align:null},"UUID representing the company this department belongs to")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Name")),(0,p.kt)("td",{parentName:"tr",align:null},"String"),(0,p.kt)("td",{parentName:"tr",align:null},"Company name given by the user")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"CreatedAt")),(0,p.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,p.kt)("td",{parentName:"tr",align:null},"The date and time the department was created")))),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"add-department"},"Add Department"),(0,p.kt)("p",null,"Add a Department that belongs to a Company to the database with basic information "),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null}))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"URL")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"/api/companies/{companyId}/departments"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Method")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"POST"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Auth required")),(0,p.kt)("td",{parentName:"tr",align:null},"No")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Permissions required")),(0,p.kt)("td",{parentName:"tr",align:null},"None")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Data constraints")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "[1 to 30 chars]"\n}\n')),(0,p.kt)("h3",{id:"success-response"},"Success Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a representation of the newly added Department."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," and name ",(0,p.kt)("inlineCode",{parentName:"p"},"Department")," on the local database."),(0,p.kt)("p",null,"Note that ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,p.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "807549a2-8507-4a75-aef3-e0ad761e597d",\n    "name": "Department",    \n    "company": {\n        "id": "4926cf68-f829-4a08-8f51-077b1d42bf70",\n        "name": "Company"\n    }   \n}\n')),(0,p.kt)("h3",{id:"error-response"},"Error Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,p.kt)("p",null,"For a Company with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"27b06c9d-a553-4a88-a681-b7cbc045a9e5")," is not found on the local database."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Could not find company 27b06c9d-a553-4a88-a681-b7cbc045a9e5.\n")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"get-department"},"Get Department"),(0,p.kt)("p",null,"Get a Department that belongs to a Company using the Company Id and Department Id"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null}))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"URL")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"/api/companies/{companyId}/departments/{departmentId}"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Method")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"GET"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Auth required")),(0,p.kt)("td",{parentName:"tr",align:null},"No")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Permissions required")),(0,p.kt)("td",{parentName:"tr",align:null},"None")))),(0,p.kt)("h3",{id:"success-response-1"},"Success Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a representation of the Department."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," and name ",(0,p.kt)("inlineCode",{parentName:"p"},"Department")," on the local database."),(0,p.kt)("p",null,"Note that ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,p.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "807549a2-8507-4a75-aef3-e0ad761e597d",\n    "name": "Department",    \n    "company": {\n        "id": "4926cf68-f829-4a08-8f51-077b1d42bf70",\n        "name": "Company"\n    }   \n}\n')),(0,p.kt)("h3",{id:"error-response-1"},"Error Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," from Company with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," that is not found on the local database."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Could not find department efd12781-392b-4c97-b388-8722bd709601 from company 692b1d0e-fe49-4b05-8b01-f79607da7633\n")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"update-department"},"Update Department"),(0,p.kt)("p",null,"Do a complete update for a Department that belongs to a Company using the Company Id and Department Id"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null}))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"URL")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"/api/companies/{companyId}/departments/{departmentId}"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Method")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"PUT"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Auth required")),(0,p.kt)("td",{parentName:"tr",align:null},"No")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Permissions required")),(0,p.kt)("td",{parentName:"tr",align:null},"None")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Data constraints")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "[1 to 30 chars]"\n}\n')),(0,p.kt)("h3",{id:"success-response-2"},"Success Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a representation of the updated Department."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," and name ",(0,p.kt)("inlineCode",{parentName:"p"},"Department")," on the local database."),(0,p.kt)("p",null,"Note that ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,p.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "807549a2-8507-4a75-aef3-e0ad761e597d",\n    "name": "Department",    \n    "company": {\n        "id": "4926cf68-f829-4a08-8f51-077b1d42bf70",\n        "name": "Company"\n    }   \n}\n')),(0,p.kt)("h3",{id:"error-response-2"},"Error Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," from Company with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," that is not found on the local database."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Could not find department efd12781-392b-4c97-b388-8722bd709601 from company 692b1d0e-fe49-4b05-8b01-f79607da7633\n")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"delete-department"},"Delete Department"),(0,p.kt)("p",null,"Delete a Department that belongs to a Company using the Company Id and Department Id"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null}))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"URL")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"/api/companies/{companyId}/departments/{departmentId}"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Method")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"DELETE"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Auth required")),(0,p.kt)("td",{parentName:"tr",align:null},"No")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Permissions required")),(0,p.kt)("td",{parentName:"tr",align:null},"None")))),(0,p.kt)("h3",{id:"success-response-3"},"Success Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,p.kt)("h3",{id:"error-response-3"},"Error Response"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Code")," : ",(0,p.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Content examples")),(0,p.kt)("p",null,"Response will reflect back a string that explains what resource is not found."),(0,p.kt)("p",null,"For a Department with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," from Company with ID ",(0,p.kt)("inlineCode",{parentName:"p"},"807549a2-8507-4a75-aef3-e0ad761e597d")," that is not found on the local database."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Could not find department efd12781-392b-4c97-b388-8722bd709601 from company 692b1d0e-fe49-4b05-8b01-f79607da7633\n")),(0,p.kt)("hr",null))}u.isMDXComponent=!0}}]);