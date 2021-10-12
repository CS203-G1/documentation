"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9453],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,c=u["".concat(p,".").concat(m)]||u[m]||k[m]||o;return n?r.createElement(c,l(l({ref:t},i),{},{components:n})):r.createElement(c,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return i},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:5},p="Roster",d={unversionedId:"roster-service/roster",id:"roster-service/roster",isDocsHomePage:!1,title:"Roster",description:"Roster Attributes",source:"@site/docs/roster-service/roster.md",sourceDirName:"roster-service",slug:"/roster-service/roster",permalink:"/documentation/docs/roster-service/roster",editUrl:"https://github.com/CS203-G1/documentation/docs/roster-service/roster.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Roster Employee",permalink:"/documentation/docs/roster-service/roster_employee"},next:{title:"Work Location",permalink:"/documentation/docs/roster-service/work_location"}},i=[{value:"Roster Attributes",id:"roster-attributes",children:[]},{value:"Add Roster",id:"add-roster",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Update Roster",id:"update-roster",children:[{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Get Rosters",id:"get-rosters",children:[{value:"Success Response",id:"success-response-2",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]},{value:"Get Roster",id:"get-roster",children:[{value:"Success Response",id:"success-response-3",children:[]},{value:"Error Response",id:"error-response-3",children:[]}]},{value:"Delete Roster",id:"delete-roster",children:[{value:"Success Response",id:"success-response-4",children:[]},{value:"Error Response",id:"error-response-4",children:[]}]}],k={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roster"},"Roster"),(0,o.kt)("h2",{id:"roster-attributes"},"Roster Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"UUID"),(0,o.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"date")),(0,o.kt)("td",{parentName:"tr",align:null},"LocalDate"),(0,o.kt)("td",{parentName:"tr",align:null},"The date the roster is for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"WorkLocation")),(0,o.kt)("td",{parentName:"tr",align:null},"WorkLocation"),(0,o.kt)("td",{parentName:"tr",align:null},"The work location this roster is for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"RosterEmployee")),(0,o.kt)("td",{parentName:"tr",align:null},"Set"),(0,o.kt)("td",{parentName:"tr",align:null},"Set of RosterEmployee objects this Roster has")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-roster"},"Add Roster"),(0,o.kt)("p",null,"Add an Roster that belongs to a WorkLocation to the database with basic information "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"URL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/work-locations/{workLocationId}/rosters"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Auth required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Permissions required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data constraints")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "date": "YYYY-MM-DD"\n}\n')),(0,o.kt)("h3",{id:"success-response"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back a representation of the newly added Roster."),(0,o.kt)("p",null,"For a Roster with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c0c13d3a-060b-4149-8b33-cc2d20a22ced")," and for the date of ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-09-16")," on the local database."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",\n  "date": "2021-09-16"\n}\n\n')),(0,o.kt)("h3",{id:"error-response"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an error when the Request Body does not conform to the constraints."),(0,o.kt)("p",null,"For a Roster with invalid Date format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-03T03:29:23.389+00:00",\n  "status": 400,\n  "error": "Bad Request",\n  "path": "/departments/692b1d0e-fe49-4b05-8b01-f79607da7632/employees"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"update-roster"},"Update Roster"),(0,o.kt)("p",null,"Update an Roster that belongs to a WorkLocation to the database with the updated date"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"URL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/work-locations/{workLocationId}/rosters/{rosterId}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PUT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Auth required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Permissions required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data constraints")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "date": "YYYY-MM-DD"\n}\n')),(0,o.kt)("h3",{id:"success-response-1"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back a representation of the newly added Roster."),(0,o.kt)("p",null,"For a Roster with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c0c13d3a-060b-4149-8b33-cc2d20a22ced")," and for the date of ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-09-16")," on the local database."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",\n  "date": "2021-09-16"\n}\n\n')),(0,o.kt)("h3",{id:"error-response-1"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an error when the Request Body does not conform to the constraints."),(0,o.kt)("p",null,"For a Roster with invalid Date format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-03T03:29:23.389+00:00",\n  "status": 400,\n  "error": "Bad Request",\n  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"get-rosters"},"Get Rosters"),(0,o.kt)("p",null,"Get all Rosters that belongs to a particular Work Location from the database using the Work Location Id"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"URL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/work-locations/{workLocationId}/rosters"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GET"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Auth required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Permissions required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,o.kt)("h3",{id:"success-response-2"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an array of representations of the Roster that belongs to a Work Location."),(0,o.kt)("p",null,"For a Work Location with 2 Rosterss created."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n {\n    "id": "ae15ede6-d5af-4aab-ad4d-ad13ee49af70",\n    "date": "2021-09-16"\n  },\n  {\n    "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",\n    "date": "2021-09-17"\n  }\n]\n')),(0,o.kt)("h3",{id:"error-response-2"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an error when the WorkLocation does not exist in the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-03T04:11:25.710+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b5/rosters"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"get-roster"},"Get Roster"),(0,o.kt)("p",null,"Get a Roster from the database using the Roster Id and Work Location Id"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"URL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/work-locations/{workLocationId}/rosters/{rosterId}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GET"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Auth required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Permissions required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,o.kt)("h3",{id:"success-response-3"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back a representation of the Roster."),(0,o.kt)("p",null,"For a Roster with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c0c13d3a-060b-4149-8b33-cc2d20a22ced")," and for the date of ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-09-16")," on the local database."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is auto-generated and of ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",\n  "date": "2021-09-16"\n}\n\n')),(0,o.kt)("h3",{id:"error-response-3"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an error when the Department or Employee does not exist in the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-03T04:06:46.079+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"delete-roster"},"Delete Roster"),(0,o.kt)("p",null,"Delete a Roster that belongs to a Work Location using the Roster Id and Work Location Id"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"URL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/work-locations/{workLocationId}/rosters/{rosterId}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DELETE"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Auth required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Permissions required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ROLE_EMPLOYER"))))),(0,o.kt)("h3",{id:"success-response-4"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("h3",{id:"error-response-4"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content examples")),(0,o.kt)("p",null,"Response will reflect back an error when the Work Location or Roster does not exist in the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-10-03T04:16:23.786+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5ff42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"\n}\n')),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);