"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6772],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Testing Convention guidelines",u={unversionedId:"guideline/testing_guideline",id:"guideline/testing_guideline",isDocsHomePage:!1,title:"Testing Convention guidelines",description:"Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit.",source:"@site/docs/guideline/testing_guideline.md",sourceDirName:"guideline",slug:"/guideline/testing_guideline",permalink:"/documentation/docs/guideline/testing_guideline",editUrl:"https://github.com/CS203-G1/documentation/docs/guideline/testing_guideline.md",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Formatting Guideline",permalink:"/documentation/docs/guideline/format_guideline"},next:{title:"Must Haves",permalink:"/documentation/docs/code-practice/must_have"}},c=[{value:"Testing Conventions",id:"testing-conventions",children:[{value:"Test Classes",id:"test-classes",children:[]},{value:"Method Unit Test",id:"method-unit-test",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-convention-guidelines"},"Testing Convention guidelines"),(0,o.kt)("p",null,"Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit."),(0,o.kt)("h2",{id:"testing-conventions"},"Testing Conventions"),(0,o.kt)("h3",{id:"test-classes"},"Test Classes"),(0,o.kt)("p",null,"Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassTest")),(0,o.kt)("p",null,"Casing: ",(0,o.kt)("inlineCode",{parentName:"p"},"CamelCasing")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CompanyServiceTest")," represents the class used to conduct unit tests for CompanyService")),(0,o.kt)("h3",{id:"method-unit-test"},"Method Unit Test"),(0,o.kt)("p",null,"Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodName_Scenario_ExpectedResult")),(0,o.kt)("p",null,"Casing: ",(0,o.kt)("inlineCode",{parentName:"p"},"CamelCasing")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCompanyById_CompanyExists_ReturnCompany")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"CompanyServiceTest")," represents the unit test for the method CompanyService#getCompanyById, where the ",(0,o.kt)("inlineCode",{parentName:"li"},"Company")," is returned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCompanyByID_CompanyDoesNotExist_ThrowException")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"CompanyServiceTest")," represents the unit test for the method CompanyService#getCompanyById, where the ",(0,o.kt)("inlineCode",{parentName:"li"},"Company")," with the given Id is not found, and an exception is thrown.")))}d.isMDXComponent=!0}}]);