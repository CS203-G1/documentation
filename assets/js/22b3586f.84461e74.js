"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7437],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6406:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:0},p="Roster Database",m={unversionedId:"database/roster_database",id:"database/roster_database",isDocsHomePage:!1,title:"Roster Database",description:"Schema Diagram",source:"@site/docs/database/roster_database.md",sourceDirName:"database",slug:"/database/roster_database",permalink:"/documentation/docs/database/roster_database",editUrl:"https://github.com/CS203-G1/documentation/docs/database/roster_database.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"Design and Architecture",previous:{title:"Functions as a Service",permalink:"/documentation/docs/architecture/faas"},next:{title:"Analytics Database",permalink:"/documentation/docs/database/analytics_database"}},d=[{value:"Schema Diagram",id:"schema-diagram",children:[]},{value:"Tables",id:"tables",children:[{value:"Company",id:"company",children:[]},{value:"Department",id:"department",children:[]},{value:"Employee",id:"employee",children:[]},{value:"Roster Employee",id:"roster-employee",children:[]},{value:"Roster",id:"roster",children:[]},{value:"Work Location",id:"work-location",children:[]}]}],u={toc:d};function s(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"roster-database"},"Roster Database"),(0,l.kt)("h2",{id:"schema-diagram"},"Schema Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Diagram",src:a(8345).Z})),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("h3",{id:"company"},"Company"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Company name given by the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CreatedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"The date and time when the company was created")))),(0,l.kt)("p",null,"The database can house a list of companies as it is hosted on cloud and we want to serve our product to many companies as our client. "),(0,l.kt)("p",null,"A company can have many departments and employees."),(0,l.kt)("h3",{id:"department"},"Department"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CompanyId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID representing the company this department belongs to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Company name given by the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CreatedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"The date and time the department was created")))),(0,l.kt)("p",null,"Each department can only belong to one and only one company."),(0,l.kt)("p",null,"A department can have many work locations."),(0,l.kt)("h3",{id:"employee"},"Employee"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DepartmentId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The department this employee is assigned to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CompanyId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The company this employee belongs to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Employee's name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"VaccinationStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum type of vaccination status for a particular employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"VaccinationBrand")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum type of the vaccine brand for a particular employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HealthStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Current health status of the employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"IsInCompany")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the employee in the company")))),(0,l.kt)("p",null,"Each employee can belong to one and only one company and one and only one department. "),(0,l.kt)("p",null,"An employee can be assigned to multiple rosters but can only be assigned to one roster every day. "),(0,l.kt)("h3",{id:"roster-employee"},"Roster Employee"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"RosterId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The Roster this RosterEmployee object is associated with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"EmployeeId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The Employee this RosterEmployee object is associated with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"FromDateTime")),(0,l.kt)("td",{parentName:"tr",align:null},"LocalDateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Start time of the Roster for a given Employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ToDateTime")),(0,l.kt)("td",{parentName:"tr",align:null},"LocalDateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"End time of the Roster for a given Employee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CurrentHealthStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"The health status of the Employee at that point in time\xce")))),(0,l.kt)("p",null,"Roster Employee is a many-to-many relationship entity between Roster and Employee."),(0,l.kt)("p",null,"Each Roster Employee must belong to one and only one Employee and one and only one Roster."),(0,l.kt)("h3",{id:"roster"},"Roster"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"WorkLocationId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The work location this roster is for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},"LocalDate"),(0,l.kt)("td",{parentName:"tr",align:null},"The date the roster is for")))),(0,l.kt)("p",null,"Each roster belongs to one and only one work location. "),(0,l.kt)("p",null,"A roster can have many employees assigned to it."),(0,l.kt)("h3",{id:"work-location"},"Work Location"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID generated automatically by Spring Boot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DepartmentId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The department this work location belongs to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CompanyId")),(0,l.kt)("td",{parentName:"tr",align:null},"UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"The company of the department this work location belongs to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Company name given by the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Address")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the the work location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Capacity")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum capacity of the work location")))),(0,l.kt)("p",null,"Each work location can only belong to one and only one department. By transitive relationship, that means it also can only belong to one and only one company. Think of an office branch."))}s.isMDXComponent=!0},8345:function(t,e,a){e.Z=a.p+"assets/images/roster_db-bb0cf75bdf9cc097a06b2a27c121a054.png"}}]);