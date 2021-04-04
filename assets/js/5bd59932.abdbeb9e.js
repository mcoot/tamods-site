(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(r,".").concat(p)]||d[p]||c[p]||o;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(126)),r={id:"doc_srv_api_loadouts",title:"Loadouts and Item Bans",sidebar_label:"Loadouts and Item Bans"},l={unversionedId:"doc_srv_api_loadouts",id:"doc_srv_api_loadouts",isDocsHomePage:!1,title:"Loadouts and Item Bans",description:"Loadouts",source:"@site/docs/doc_srv_api_loadouts.md",slug:"/doc_srv_api_loadouts",permalink:"/docs/doc_srv_api_loadouts",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_srv_api_loadouts.md",version:"current",sidebar_label:"Loadouts and Item Bans",sidebar:"server",previous:{title:"Custom Maps",permalink:"/docs/doc_srv_api_custommaps"},next:{title:"Custom Classes",permalink:"/docs/doc_srv_api_customclasses"}},s=[{value:"Loadouts",id:"loadouts",children:[{value:"Equip Points",id:"equip-points",children:[]},{value:"Hardcoded Loadouts",id:"hardcoded-loadouts",children:[]}]},{value:"Limits and Bans",id:"limits-and-bans",children:[{value:"Class Limits",id:"class-limits",children:[]},{value:"Weapon Bans",id:"weapon-bans",children:[]},{value:"Mutual Exclusions",id:"mutual-exclusions",children:[]},{value:"Equipment Slots",id:"equipment-slots",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"loadouts"},"Loadouts"),Object(o.b)("h3",{id:"equip-points"},"Equip Points"),Object(o.b)("p",null,"Weapons and items must be equipped at 'item slots' or ",Object(o.b)("em",{parentName:"p"},"equip points"),"; the Equip Points enum gives the possible slots at which an item may be equipped."),Object(o.b)("p",null,"The available equip points are listed below. Note that not all equip points are fully functional in the current version of the game."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.None")," (Invalid equip point which will not apply a weapon)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Melee")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Primary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Secondary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Tertiary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Quarternary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Pack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Belt")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Deployable")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.LaserTarget")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Armor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.PerkA")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.PerkB")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Skin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Loadouts.EquipPoints.Voice"))),Object(o.b)("h3",{id:"hardcoded-loadouts"},"Hardcoded Loadouts"),Object(o.b)("p",null,"The server admin can specify a set of hardcoded loadouts, which will be used as a fallback if the player's own selected loadouts cannot be retrieved - usually because the server is running standalone (not connected to a TAServer login server). Alternately these can be used to override a player's selected loadout with the ",Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.ForceHardcodedLoadouts")," option."),Object(o.b)("p",null,"Nine loadouts, numbered ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to ",Object(o.b)("inlineCode",{parentName:"p"},"8")," (corresponding to Loadouts ",Object(o.b)("inlineCode",{parentName:"p"},"A")," through ",Object(o.b)("inlineCode",{parentName:"p"},"I")," in-game) can be set for each class, via the following class of functions:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Loadouts.Hardcoded.<ClassType>.set(loadoutNumber: integer, equipPoint: EquipPoint, itemName: string)")),Object(o.b)("p",null,"Getter functions are also provided:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Loadouts.Hardcoded.<ClassType>.get(loadoutNumber: integer, equipPoint: EquipPoint): string")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<ClassType>")," should be one of ",Object(o.b)("inlineCode",{parentName:"p"},"Light"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Medium")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Heavy"),", as in the following example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'Loadouts.Hardcoded.Light.set(0, Loadouts.EquipPoints.Primary, "Light Spinfusor")\nLoadouts.Hardcoded.Medium.set(3, Loadouts.EquipPoints.Belt, "EMP Grenades")\nLoadouts.Hardcoded.Heavy.set(8, Loadouts.EquipPoints.Pack, "Forcefield")\n')),Object(o.b)("h4",{id:"forcing-hardcoded-loadouts"},"Forcing Hardcoded Loadouts"),Object(o.b)("p",null,"Via the ",Object(o.b)("inlineCode",{parentName:"p"},"ForceHardcodedLoadouts")," server setting, it is possible to have server-side hardcoded loadouts take precedence over player-selected ones (rather than them being a fallback). This may be useful if you want to restrict players to ",Object(o.b)("em",{parentName:"p"},"only")," using specific loadouts."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ServerSettings.ForceHardcodedLoadouts"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"false"),Object(o.b)("td",{parentName:"tr",align:null},"If true, game server hardcoded loadouts will take precedence over player selected loadouts")))),Object(o.b)("h2",{id:"limits-and-bans"},"Limits and Bans"),Object(o.b)("p",null,"TAMods-Server allows for limiting class numbers, banning weapons, and also restricting the available equip points (i.e. item slots) for players."),Object(o.b)("h3",{id:"class-limits"},"Class Limits"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ServerSettings.LightCountLimit"),Object(o.b)("td",{parentName:"tr",align:null},"int"),Object(o.b)("td",{parentName:"tr",align:null},"32"),Object(o.b)("td",{parentName:"tr",align:null},"Maximum number of lights allowed per team")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ServerSettings.MediumCountLimit"),Object(o.b)("td",{parentName:"tr",align:null},"int"),Object(o.b)("td",{parentName:"tr",align:null},"32"),Object(o.b)("td",{parentName:"tr",align:null},"Maximum number of mediums allowed per team")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ServerSettings.HeavyCountLimit"),Object(o.b)("td",{parentName:"tr",align:null},"int"),Object(o.b)("td",{parentName:"tr",align:null},"32"),Object(o.b)("td",{parentName:"tr",align:null},"Maximum number of heavies allowed per team")))),Object(o.b)("h3",{id:"weapon-bans"},"Weapon Bans"),Object(o.b)("p",null,"Weapon bans can be added or removed via the following functions:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.BannedItems.add(class: string, itemName: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.BannedItems.remove(class: string, itemName: string)")),Object(o.b)("p",null,"So for instance, to ban the Light Spinfusor, the Assault Rifle and the Nova Colt, you would use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'ServerSettings.BannedItems.add("Light", "Light Spinfusor")\nServerSettings.BannedItems.add("Medium", "Assault Rifle")\nServerSettings.BannedItems.add("Heavy", "Nova Colt")\n')),Object(o.b)("h3",{id:"mutual-exclusions"},"Mutual Exclusions"),Object(o.b)("p",null,"A slightly more advanced form of control is to make two items ",Object(o.b)("em",{parentName:"p"},"mutually exclusive"),", so that either weapon on its own is allowed, but the combination is not. These can be modified through the functions:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.MutuallyExclusiveItems.add(class1: string, itemName1: string, class2: string, itemname2: string)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.MutuallyExclusiveItems.remove(class1: string, itemName1: string, class2: string, itemname2: string)")),Object(o.b)("p",null,"So for instance, to make the Assault Rifle incompatible with the Spinfusor, you could use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'ServerSettings.MutuallyExclusiveItems.add("Medium", "Assault Rifle", "Medium", "Spinfusor")\n')),Object(o.b)("h3",{id:"equipment-slots"},"Equipment Slots"),Object(o.b)("p",null,"You can also restrict the equipment slots available based on class. This can be used to, for instance, give the Light class two weapons rather than three, or to ban grenades. The equip point is selected using the ",Object(o.b)("a",{parentName:"p",href:"#equip-points"},"Equip Points")," enum."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.DisabledEquipPoints.add(class: string, equipPoint: EquipPoint)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ServerSettings.DisabledEquipPoints.remove(class: string, equipPoint: EquipPoint)")),Object(o.b)("p",null,"So to give Lights and Mediums two weapons rather than three, you would use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'ServerSettings.DisabledEquipPoints.add("Light", Loadouts.EquipPoints.Tertiary)\nServerSettings.DisabledEquipPoints.add("Medium", Loadouts.EquipPoints.Tertiary)\n')))}b.isMDXComponent=!0}}]);