"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(g,l(l({ref:t},s),{},{components:n})):i.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={id:"Publication",title:"Interface: Publication",sidebar_label:"Publication",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"plugins/api/interfaces/Publication",id:"plugins/api/interfaces/Publication",title:"Interface: Publication",description:"Properties",source:"@site/docs/plugins/api/interfaces/Publication.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/Publication",permalink:"/readergata-plugin-typings/plugins/api/interfaces/Publication",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Publication",title:"Interface: Publication",sidebar_label:"Publication",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PluginInfo",permalink:"/readergata-plugin-typings/plugins/api/interfaces/PluginInfo"},next:{title:"PublicationSource",permalink:"/readergata-plugin-typings/plugins/api/interfaces/PublicationSource"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"apiId",id:"apiid",level:3},{value:"authors",id:"authors",level:3},{value:"images",id:"images",level:3},{value:"pluginId",id:"pluginid",level:3},{value:"sources",id:"sources",level:3},{value:"summary",id:"summary",level:3},{value:"title",id:"title",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"apiid"},"apiId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"apiId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Id from third party service this Publication was retrieved from."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"authors"},"authors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"authors"),": ",(0,r.kt)("a",{parentName:"p",href:"/readergata-plugin-typings/plugins/api/interfaces/Author"},(0,r.kt)("inlineCode",{parentName:"a"},"Author")),"[]"),(0,r.kt)("p",null,"List of Publication authors"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"images"},"images"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"images"),": ",(0,r.kt)("a",{parentName:"p",href:"/readergata-plugin-typings/plugins/api/interfaces/ImageInfo"},(0,r.kt)("inlineCode",{parentName:"a"},"ImageInfo")),"[]"),(0,r.kt)("p",null,"Images associated with publication"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pluginid"},"pluginId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"pluginId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Plugin Id of plugin where Publication was retrieved from. Set by ReaderGata."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sources"},"sources"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"sources"),": ",(0,r.kt)("a",{parentName:"p",href:"/readergata-plugin-typings/plugins/api/interfaces/PublicationSource"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicationSource")),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"summary"},"summary"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"summary"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Summary of publication"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"title"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Title of publication"))}c.isMDXComponent=!0}}]);