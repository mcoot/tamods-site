"use strict";(self.webpackChunktamods_site=self.webpackChunktamods_site||[]).push([[9446],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5324:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"doc_srv_api_custommaps",title:"Custom Maps",sidebar_label:"Custom Maps",sidebar_position:3},p=void 0,l={unversionedId:"server/server-setup/doc_srv_api_custommaps",id:"server/server-setup/doc_srv_api_custommaps",isDocsHomePage:!1,title:"Custom Maps",description:"Since dedicated servers are now available, custom maps are a natural next step. It has been proven that custom maps are possible, but they have not yet been implemented in a way that is practical or user-friendly enough for widespread adoption.",source:"@site/docs/server/server-setup/doc_srv_api_custommaps.md",sourceDirName:"server/server-setup",slug:"/server/server-setup/doc_srv_api_custommaps",permalink:"/docs/server/server-setup/doc_srv_api_custommaps",editUrl:"https://github.com/mcoot/tamods-site/tree/master/docs/server/server-setup/doc_srv_api_custommaps.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"doc_srv_api_custommaps",title:"Custom Maps",sidebar_label:"Custom Maps",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server Administration",permalink:"/docs/server/server-setup/doc_srv_api_admin"},next:{title:"Loadouts and Item Bans",permalink:"/docs/server/server-setup/doc_srv_api_loadouts"}},c=[],u={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since dedicated servers are now available, custom maps are a natural next step. It has been proven that custom maps are ",(0,i.kt)("em",{parentName:"p"},"possible"),", but they have not yet been implemented in a way that is practical or user-friendly enough for widespread adoption."),(0,i.kt)("p",null,"Getting this working right now requires a fair bit of technical knowledge, so try at your own risk."),(0,i.kt)("h1",{id:"setting-up-mapping-in-the-udk"},"Setting Up Mapping in the UDK"),(0,i.kt)("p",null,"This document describes the current process for getting a custom map running on your server."),(0,i.kt)("p",null,"The process of setting up custom mapping is very similar to how it worked for the old leaked SDK. A few guides for that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK"},"http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy"},"http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping"},"http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping"))),(0,i.kt)("p",null,"You need the January 2011 UDK beta specifically (build 7748); another version won't work."),(0,i.kt)("p",null,"You'll need the actor classes (",(0,i.kt)("a",{parentName:"p",href:"http://library.theexiled.pwnageservers.com/file.php?id=2948"},"http://library.theexiled.pwnageservers.com/file.php?id=2948"),") and the asset packages (",(0,i.kt)("a",{parentName:"p",href:"http://library.theexiled.pwnageservers.com/category.php?id=202"},"http://library.theexiled.pwnageservers.com/category.php?id=202"),")."),(0,i.kt)("p",null,"Since those above guides exist I'm not going into full detail here on setting the UDK editor up for Tribes mapping."),(0,i.kt)("h1",{id:"making-it-actually-work-with-ta-parting-gifts"},"Making It Actually Work With T:A Parting Gifts"),(0,i.kt)("p",null,"If you follow the above guides, you'll find you can successfully run your map on the leaked SDK build of Tribes. If you try to run the maps in the Parting Gifts clients, you'll find that it first attempts to compile missing shaders, which fails and crashes the game/server. On-the-fly compilation of missing shaders seems to be broken in the release version of T:A."),(0,i.kt)("p",null,"So we need a way to precompile the shaders the custom map uses. Unreal engine stores the shaders in a file in CookedPC called ",(0,i.kt)("inlineCode",{parentName:"p"},"RefShaderCache-PC-D3D-SM3.upk"),". If you cook your custom map in the UDK Frontend (available in the binaries folder of the UDK), it will generate such a RefShaderCache file with your shaders. But there's a problem: this file contains your map's shaders, but it ",(0,i.kt)("em",{parentName:"p"},"doesn't")," contain the shaders that Tribes normally has, so if you replace the game's cache with the one you built, the game will completely fail to boot. What we need is a shader cache file which merges the existing T:A shaders with the ones for your map."),(0,i.kt)("p",null,"It's possible to achieve this by taking advantage of the fact that in its uncooked state, the UDK editor puts its compiled shaders in a different file - ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalShaderCache-PC-D3D-SM3.upk"),", in the Content directory for UDKGame."),(0,i.kt)("p",null,"So what you need to do is compile your map's shaders into the editor (by loading the map package, and making sure you've 'fully loaded' the TA asset packages), and then take the normal T:A RefShaderCache and put it into the Content directory alongside the LocalShaderCache."),(0,i.kt)("p",null,"Then, when you cook your packages, the resulting RefShaderCache will contain the shaders from both the RefShaderCache and LocalShaderCache. You can loosely verify this by checking that the filesize of the resulting RefShaderCache is larger than the one you took from T:A's CookedPC directory."),(0,i.kt)("p",null,"Finally, put the newly cooked RefShaderCache into Tribes' CookedPC (backing up the old one first!), and you should be able to run your server without it attempting and failing to compile missing shaders."))}h.isMDXComponent=!0}}]);