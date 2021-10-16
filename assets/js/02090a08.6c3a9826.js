"use strict";(self.webpackChunktamods_site=self.webpackChunktamods_site||[]).push([[1117],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return o?r.createElement(f,a(a({ref:t},l),{},{components:o})):r.createElement(f,a({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5306:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={id:"doc_dev_intro",title:"Introduction to Modding",sidebar_label:"Introduction to Modding",sidebar_position:1},d=void 0,c={unversionedId:"developer/doc_dev_intro",id:"developer/doc_dev_intro",isDocsHomePage:!1,title:"Introduction to Modding",description:"So you want to mod Tribes: Ascend",source:"@site/docs/developer/doc_dev_intro.md",sourceDirName:"developer",slug:"/developer/doc_dev_intro",permalink:"/docs/developer/doc_dev_intro",editUrl:"https://github.com/mcoot/tamods-site/tree/master/docs/developer/doc_dev_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"doc_dev_intro",title:"Introduction to Modding",sidebar_label:"Introduction to Modding",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using TAMods",permalink:"/docs/user/doc_user_tutorial"},next:{title:"Tutorial - Writing a Script",permalink:"/docs/developer/doc_dev_tute_script"}},l=[{value:"So you want to mod Tribes: Ascend",id:"so-you-want-to-mod-tribes-ascend",children:[],level:2},{value:"How does TAMods actually work?",id:"how-does-tamods-actually-work",children:[],level:2},{value:"How to write scripts",id:"how-to-write-scripts",children:[],level:2}],u={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"so-you-want-to-mod-tribes-ascend"},"So you want to mod Tribes: Ascend"),(0,i.kt)("p",null,"This documentation is for developers, and those who want to understand how TAMods works. If you're an end user, you don't need to read this."),(0,i.kt)("p",null,"Before you begin writing mods or trying out scripts, you should make sure you have TAMods installed and working. It's also highly recommended that you keep backups of your T:A config folder if you plan to write or modify TAMods scripts."),(0,i.kt)("h2",{id:"how-does-tamods-actually-work"},"How does TAMods actually work?"),(0,i.kt)("p",null,"TAMods consists of two components: the TAMods ",(0,i.kt)("em",{parentName:"p"},"core"),", and the user scripts."),(0,i.kt)("p",null,"The TAMods core is the closed source code contained in ",(0,i.kt)("inlineCode",{parentName:"p"},"TAMods.dll"),". The TAMods core can interface with Tribes: Ascend's internal code once injected into the running game process. It exposes an API for mod authors via the ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/"},"Lua")," scripting language."),(0,i.kt)("p",null,"As soon as TAMods is injected, it will look for two files in your T:A configuration folder (normally located at ",(0,i.kt)("inlineCode",{parentName:"p"},"<Documents folder>/My Games/Tribes Ascend/TribesGame/config"),"): first, ",(0,i.kt)("inlineCode",{parentName:"p"},"config.lua"),", and then (if it exists) ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua"),". It runs these lua scripts in the TAMods core to apply user configuration and mods."),(0,i.kt)("h2",{id:"how-to-write-scripts"},"How to write scripts"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config.lua")," file is modified by the TAMods configuration tool and should generally not be manually modified."),(0,i.kt)("p",null,"The TAMods config tool provides the concept of ",(0,i.kt)("em",{parentName:"p"},"presets"),": base configurations which can be sourced via Lua's ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," command. In practice this system is deprecated, as the bundled Ubermenu preset provides more granular support for customisation."),(0,i.kt)("p",null,"Hence if you want to write custom scripts for TAMods, you will probably do so in one of two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By adding code in ",(0,i.kt)("inlineCode",{parentName:"li"},"custom.lua")," (or writing scripts in files ",(0,i.kt)("inlineCode",{parentName:"li"},"require"),"d by ",(0,i.kt)("inlineCode",{parentName:"li"},"custom.lua"),")."),(0,i.kt)("li",{parentName:"ol"},"If creating a custom HUD component, by writing HUDModules in the Ubermenu preset.")),(0,i.kt)("p",null,"To get started, walk through the tutorial for writing your first custom script ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/doc_dev_tute_script"},"here"),". You can also learn how to write your first HUDModule ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/doc_dev_tute_hudmodule"},"here"),"."),(0,i.kt)("p",null,"An API reference for the Lua API is available ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api/doc_dev_api_overview"},"here"),"."))}p.isMDXComponent=!0}}]);