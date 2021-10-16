"use strict";(self.webpackChunktamods_site=self.webpackChunktamods_site||[]).push([[2871],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,c=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"doc_srv_api_overview",title:"API Overview",sidebar_label:"API Overview",sidebar_position:2},s=void 0,p={unversionedId:"server/doc_srv_api_overview",id:"server/doc_srv_api_overview",isDocsHomePage:!1,title:"API Overview",description:"The pages in this section present a reference for the Lua API exposed by TAMods-Server.",source:"@site/docs/server/doc_srv_api_overview.md",sourceDirName:"server",slug:"/server/doc_srv_api_overview",permalink:"/docs/server/doc_srv_api_overview",editUrl:"https://github.com/mcoot/tamods-site/tree/master/docs/server/doc_srv_api_overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"doc_srv_api_overview",title:"API Overview",sidebar_label:"API Overview",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/server/doc_srv_intro"},next:{title:"Server Settings",permalink:"/docs/server/server-setup/doc_srv_api_serverconfig"}},d=[{value:"Notes on type signature definition",id:"notes-on-type-signature-definition",children:[],level:2},{value:"Core Configuration",id:"core-configuration",children:[{value:"Core DLL Information",id:"core-dll-information",children:[],level:3},{value:"DLL Operation Mode",id:"dll-operation-mode",children:[],level:3}],level:2},{value:"Game Balance Properties",id:"game-balance-properties",children:[],level:2},{value:"Logging",id:"logging",children:[{value:"Configuring the Logger",id:"configuring-the-logger",children:[],level:3},{value:"Writing log messages",id:"writing-log-messages",children:[],level:3}],level:2}],u={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The pages in this section present a reference for the Lua API exposed by TAMods-Server."),(0,o.kt)("h2",{id:"notes-on-type-signature-definition"},"Notes on type signature definition"),(0,o.kt)("p",null,"Lua is dynamically typed, so there are no static checks for the type correctness of scripts. Generally, scripts with type errors will produce a console error message at runtime. Additionally, Lua does not check that functions receive the right number of arguments: extra arguments are ignored, and missing arguments are replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,o.kt)("p",null,"Function signatures in the reference denote the intended types of the function via the following (non-Lua) syntax:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"someFunction(arg1: Arg1Type, arg2: Arg2Type): ReturnType")),(0,o.kt)("p",null,"Note that where functions do not return a value, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnType")," is omitted."),(0,o.kt)("p",null,"For clarity, the types ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," are used to distinguish numerical arguments where appropriate, even though Lua's type system only supports a single ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," type."),(0,o.kt)("p",null,"Lua does not support 'arrays' or 'tuples' in the traditional sense: most data structures in Lua are ",(0,o.kt)("em",{parentName:"p"},"Tables"),". In the reference, ",(0,o.kt)("inlineCode",{parentName:"p"},"List<T>"),' is used to refer to a "list" of items of type ',(0,o.kt)("inlineCode",{parentName:"p"},"T"),', where the "list" is actually a Table with sequentially numbered one-indexed keys (as Lua indexing normally starts at one).'),(0,o.kt)("p",null,"Tuples in Lua are essentially the same; in the reference they will be denoted like ",(0,o.kt)("inlineCode",{parentName:"p"},"(T1, T2)")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"T1")," is the type of the first element, ",(0,o.kt)("inlineCode",{parentName:"p"},"T2")," the second and so on. This corresponds again to a Lua Table with sequentially numbered one-indexed keys."),(0,o.kt)("h2",{id:"core-configuration"},"Core Configuration"),(0,o.kt)("p",null,"Core configuration and information about TAMods-Server."),(0,o.kt)("h3",{id:"core-dll-information"},"Core DLL Information"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default / Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.DLL.Name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"TAMods-Server"'),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of this DLL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.DLL.Version"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"0.1.0"'),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"The SemVer version of the DLL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.DLL.TAServerProtocolVersion"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"0.1.0"'),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"The version of the TAServer controller protocol this DLL uses")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.DLL.TAModsProtocolVersion"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"0.1.0"'),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"The version of the TAMods Client-Server protocol this DLL uses")))),(0,o.kt)("h3",{id:"dll-operation-mode"},"DLL Operation Mode"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default / Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.ConnectToTAServer"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to attempt connection to the TAServer launcher")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.ConnectToClients"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to attempt connection to modded clients via the TAMods protocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core.AllowUnmoddedClients"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"Core.ConnectToClients")," is enabled, whether to allow players without TAMods to join")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Core.ConnectToTAServer")," option controls whether the integration with the TAServer custom login server system is enabled. This defaults to true, and it is recommended that this be left on unless you are trying to run the game server completely standalone. With this disabled, a number of features will not work (such as player-specifiable loadouts)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Core.ConnectToClients")," option determines whether the server will run a TAMods protocol control server that incoming game clients may connect to. This control server allows the server to communicate additional information to clients running clientside TAMods - in particular, game balance modding information."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Core.AllowUnmoddedClients")," option allows the server owner to block unmodded players from participating in the game, which may be desirable if you are modifying game balance (which requires the control connection). If this option is true, unmodded clients will still be able to enter the server, but will not be able to join the team. They may still spectate the game."),(0,o.kt)("h2",{id:"game-balance-properties"},"Game Balance Properties"),(0,o.kt)("p",null,"TAMods-Server gives you the ability not just to run custom servers and modify their settings, but also to modify the properties of objects within the game."),(0,o.kt)("p",null,"Documentation on the specific modifications available can be found on the pages detailing how to modify ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/game-modification/doc_srv_api_properties_items"},"Items"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/game-modification/doc_srv_api_properties_classes"},"Classes")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/game-modification/doc_srv_api_properties_vehicles"},"Vehicles"),"."),(0,o.kt)("p",null,"Importantly, the mechanism for many of these modifications ",(0,o.kt)("strong",{parentName:"p"},"relies on players using a compatible version of clientside TAMods"),". If you set your server up with extensive game balance modification, a player joining your server without TAMods will likely have a bad experience, as their game client doesn't understand what's going on at all."),(0,o.kt)("p",null,"While generally these effects on unmodded players will cause issues only for them, there are no hard guarantees that players will not be able to gain some small advantage by having unmodded clients. If you wish to prevent this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Core.AllowUnmoddedClients")," flag can be used to prevent players without TAMods from joining teams in your server. They will still be able to spectate games, but cannot join either side."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"TAMods-Server can keep a logfile at ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<Username>\\TAMods-Server.log"),"; this can be useful for debugging issues with configuration."),(0,o.kt)("h3",{id:"configuring-the-logger"},"Configuring the Logger"),(0,o.kt)("p",null,"By default, nothing will be logged; to enable logging you must set the log level using the following function:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.setLevel(level: LogLevel)")),(0,o.kt)("p",null,"The possible log levels, listed below, are ordered such that every level logs messages of that level and above - so e.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"Warn")," level will cause messages at the Warn, Error and Fatal levels to be logged."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.None")," - Log nothing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.Fatal")," - Log only fatal errors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.Error")," - Log any error-level message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.Warn")," - Log warning messages in addition to errors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.Info")," - Log informational messages in addition to warnings and errors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logger.Levels.Debug")," - Log everything, including debugging messages (this will display internal TAMods-Server debugging messages)")),(0,o.kt)("h3",{id:"writing-log-messages"},"Writing log messages"),(0,o.kt)("p",null,"Once the logger is configured, you can log from Lua with the following functions, to log messages at each level:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.fatal(message: string)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.error(message: string)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.warn(message: string)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.info(message: string)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logger.debug(message: string)")))}g.isMDXComponent=!0}}]);