(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(126)),i={id:"doc_srv_api_overview",title:"API Overview",sidebar_label:"API Overview"},l={unversionedId:"doc_srv_api_overview",id:"doc_srv_api_overview",isDocsHomePage:!1,title:"API Overview",description:"The pages in this section present a reference for the Lua API exposed by TAMods-Server.",source:"@site/docs/doc_srv_api_overview.md",slug:"/doc_srv_api_overview",permalink:"/docs/doc_srv_api_overview",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_srv_api_overview.md",version:"current",sidebar_label:"API Overview",sidebar:"server",previous:{title:"Introduction to Custom Servers",permalink:"/docs/doc_srv_intro"},next:{title:"Server Settings",permalink:"/docs/doc_srv_api_serverconfig"}},s=[{value:"Notes on type signature definition",id:"notes-on-type-signature-definition",children:[]},{value:"Core Configuration",id:"core-configuration",children:[{value:"Core DLL Information",id:"core-dll-information",children:[]},{value:"DLL Operation Mode",id:"dll-operation-mode",children:[]}]},{value:"Game Balance Properties",id:"game-balance-properties",children:[]},{value:"Logging",id:"logging",children:[{value:"Configuring the Logger",id:"configuring-the-logger",children:[]},{value:"Writing log messages",id:"writing-log-messages",children:[]}]}],b={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The pages in this section present a reference for the Lua API exposed by TAMods-Server."),Object(o.b)("h2",{id:"notes-on-type-signature-definition"},"Notes on type signature definition"),Object(o.b)("p",null,"Lua is dynamically typed, so there are no static checks for the type correctness of scripts. Generally, scripts with type errors will produce a console error message at runtime. Additionally, Lua does not check that functions receive the right number of arguments: extra arguments are ignored, and missing arguments are replaced with ",Object(o.b)("inlineCode",{parentName:"p"},"nil"),"."),Object(o.b)("p",null,"Function signatures in the reference denote the intended types of the function via the following (non-Lua) syntax:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"someFunction(arg1: Arg1Type, arg2: Arg2Type): ReturnType")),Object(o.b)("p",null,"Note that where functions do not return a value, the ",Object(o.b)("inlineCode",{parentName:"p"},"ReturnType")," is omitted."),Object(o.b)("p",null,"For clarity, the types ",Object(o.b)("inlineCode",{parentName:"p"},"integer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"float")," are used to distinguish numerical arguments where appropriate, even though Lua's type system only supports a single ",Object(o.b)("inlineCode",{parentName:"p"},"number")," type."),Object(o.b)("p",null,"Lua does not support 'arrays' or 'tuples' in the traditional sense: most data structures in Lua are ",Object(o.b)("em",{parentName:"p"},"Tables"),". In the reference, ",Object(o.b)("inlineCode",{parentName:"p"},"List<T>"),' is used to refer to a "list" of items of type ',Object(o.b)("inlineCode",{parentName:"p"},"T"),', where the "list" is actually a Table with sequentially numbered one-indexed keys (as Lua indexing normally starts at one).'),Object(o.b)("p",null,"Tuples in Lua are essentially the same; in the reference they will be denoted like ",Object(o.b)("inlineCode",{parentName:"p"},"(T1, T2)")," where ",Object(o.b)("inlineCode",{parentName:"p"},"T1")," is the type of the first element, ",Object(o.b)("inlineCode",{parentName:"p"},"T2")," the second and so on. This corresponds again to a Lua Table with sequentially numbered one-indexed keys."),Object(o.b)("h2",{id:"core-configuration"},"Core Configuration"),Object(o.b)("p",null,"Core configuration and information about TAMods-Server."),Object(o.b)("h3",{id:"core-dll-information"},"Core DLL Information"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default / Example"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiable"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.DLL.Name"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},'"TAMods-Server"'),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"The name of this DLL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.DLL.Version"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},'"0.1.0"'),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"The SemVer version of the DLL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.DLL.TAServerProtocolVersion"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},'"0.1.0"'),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"The version of the TAServer controller protocol this DLL uses")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.DLL.TAModsProtocolVersion"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},'"0.1.0"'),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"The version of the TAMods Client-Server protocol this DLL uses")))),Object(o.b)("h3",{id:"dll-operation-mode"},"DLL Operation Mode"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default / Example"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiable"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.ConnectToTAServer"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Whether to attempt connection to the TAServer launcher")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.ConnectToClients"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Whether to attempt connection to modded clients via the TAMods protocol")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Core.AllowUnmoddedClients"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"If ",Object(o.b)("inlineCode",{parentName:"td"},"Core.ConnectToClients")," is enabled, whether to allow players without TAMods to join")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Core.ConnectToTAServer")," option controls whether the integration with the TAServer custom login server system is enabled. This defaults to true, and it is recommended that this be left on unless you are trying to run the game server completely standalone. With this disabled, a number of features will not work (such as player-specifiable loadouts)."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Core.ConnectToClients")," option determines whether the server will run a TAMods protocol control server that incoming game clients may connect to. This control server allows the server to communicate additional information to clients running clientside TAMods - in particular, game balance modding information."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Core.AllowUnmoddedClients")," option allows the server owner to block unmodded players from participating in the game, which may be desirable if you are modifying game balance (which requires the control connection). If this option is true, unmodded clients will still be able to enter the server, but will not be able to join the team. They may still spectate the game."),Object(o.b)("h2",{id:"game-balance-properties"},"Game Balance Properties"),Object(o.b)("p",null,"TAMods-Server gives you the ability not just to run custom servers and modify their settings, but also to modify the properties of objects within the game."),Object(o.b)("p",null,"Documentation on the specific modifications available can be found on the pages detailing how to modify ",Object(o.b)("a",{parentName:"p",href:"/docs/doc_srv_api_properties_items"},"Items"),", ",Object(o.b)("a",{parentName:"p",href:"/docs/doc_srv_api_properties_classes"},"Classes")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/doc_srv_api_properties_vehicles"},"Vehicles"),"."),Object(o.b)("p",null,"Importantly, the mechanism for many of these modifications ",Object(o.b)("strong",{parentName:"p"},"relies on players using a compatible version of clientside TAMods"),". If you set your server up with extensive game balance modification, a player joining your server without TAMods will likely have a bad experience, as their game client doesn't understand what's going on at all."),Object(o.b)("p",null,"While generally these effects on unmodded players will cause issues only for them, there are no hard guarantees that players will not be able to gain some small advantage by having unmodded clients. If you wish to prevent this, the ",Object(o.b)("inlineCode",{parentName:"p"},"Core.AllowUnmoddedClients")," flag can be used to prevent players without TAMods from joining teams in your server. They will still be able to spectate games, but cannot join either side."),Object(o.b)("h2",{id:"logging"},"Logging"),Object(o.b)("p",null,"TAMods-Server can keep a logfile at ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Users\\<Username>\\TAMods-Server.log"),"; this can be useful for debugging issues with configuration."),Object(o.b)("h3",{id:"configuring-the-logger"},"Configuring the Logger"),Object(o.b)("p",null,"By default, nothing will be logged; to enable logging you must set the log level using the following function:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.setLevel(level: LogLevel)")),Object(o.b)("p",null,"The possible log levels, listed below, are ordered such that every level logs messages of that level and above - so e.g. the ",Object(o.b)("inlineCode",{parentName:"p"},"Warn")," level will cause messages at the Warn, Error and Fatal levels to be logged."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.None")," - Log nothing"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.Fatal")," - Log only fatal errors"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.Error")," - Log any error-level message"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.Warn")," - Log warning messages in addition to errors"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.Info")," - Log informational messages in addition to warnings and errors"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Logger.Levels.Debug")," - Log everything, including debugging messages (this will display internal TAMods-Server debugging messages)")),Object(o.b)("h3",{id:"writing-log-messages"},"Writing log messages"),Object(o.b)("p",null,"Once the logger is configured, you can log from Lua with the following functions, to log messages at each level:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.fatal(message: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.error(message: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.warn(message: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.info(message: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Logger.debug(message: string)")))}c.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(g,l(l({ref:t},b),{},{components:n})):a.a.createElement(g,l({ref:t},b))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);