(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(126)),r={title:"TAMods v0.7 Available Now",author:"mcoot",authorURL:"http://twitter.com/"},l={permalink:"https://www.tamods.org/blog/2018/07/15/tamods-0.7",editUrl:"https://github.com/mcoot/taserver/edit/master/website/blog/blog/2018-07-15-tamods-0.7.md",source:"@site/blog/2018-07-15-tamods-0.7.md",description:"A new major version of TAMods, version 0.7, has now been released and is available via the TribesLauncher application.",date:"2018-07-15T00:00:00.000Z",formattedDate:"July 15, 2018",tags:[],title:"TAMods v0.7 Available Now",readingTime:2.895,truncated:!0,prevItem:{title:"TAMods v1.18 Available Now",permalink:"https://www.tamods.org/blog/2019/02/25/tamods-1.18"}},c=[{value:"Changes",id:"changes",children:[{value:"Weapon Model Customisation",id:"weapon-model-customisation",children:[]},{value:"Stats Recording",id:"stats-recording",children:[]},{value:"New HUDModules",id:"new-hudmodules",children:[]},{value:"Developer Documentation",id:"developer-documentation",children:[]},{value:"Minor API Improvements",id:"minor-api-improvements",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A new major version of TAMods, version 0.7, has now been released and is available via ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mcoot/TribesLauncher/releases"},"the TribesLauncher application"),"."),Object(i.b)("p",null,"Read on for a list of major changes, read on!"),Object(i.b)("h2",{id:"changes"},"Changes"),Object(i.b)("h3",{id:"weapon-model-customisation"},"Weapon Model Customisation"),Object(i.b)("p",null,"Do you miss the SAP20? Well, it's back - or its weapon model is, at least! You can now swap the first person weapon model of any weapon out for that of any other - including models of the weapons removed in the Out of the Blue update. This can be done via the external configuration tool, the Ubermenu or via the ",Object(i.b)("inlineCode",{parentName:"p"},"setWeaponModel")," Lua function."),Object(i.b)("p",null,"Note that this system isn't quite perfect yet. First, updating model swaps while the game is running often does not work correctly, requiring a relaunch to apply. Second, some weapon animations do not transition correctly, causing the model to be held or animated wrong; this is most noticeable when swapping weapons with others of very different kinds (e.g. a sniper rifle for a pistol). Finally, there are ",Object(i.b)("em",{parentName:"p"},"very")," rare crashes associated with the weapon swapping subsystem, generally occurring when the game ends."),Object(i.b)("h3",{id:"stats-recording"},"Stats Recording"),Object(i.b)("p",null,"TAMods can now record game statistics and give you a summary at the end of a match. With the ",Object(i.b)("inlineCode",{parentName:"p"},"recordStats")," option enabled, you will now see a printout of your player statistics for the match, including everything from your fastest grab speed to that all important K/D ratio."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"recordTeamStats")," option will also print out information about the whole game - the map, who won, and the names of the players on each time."),Object(i.b)("p",null,"Both kinds of statistics can also optionally be logged out to a file (in your T:A config directory) by enabling the ",Object(i.b)("inlineCode",{parentName:"p"},"saveStats")," and ",Object(i.b)("inlineCode",{parentName:"p"},"saveTeamStats")," options."),Object(i.b)("h3",{id:"new-hudmodules"},"New HUDModules"),Object(i.b)("p",null,"The following HUDModules have been added and are now available in the Ubermenu HUD Maker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dodgeKillFeed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dodgeScoreboard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dodgeSpeedBar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"indiIFF Healthbars")," - alternate healthbars which show the percentage health of players"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcootKillNotifications")," - an alternate way of displaying player kills, more similar to that of other FPS games"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcootRabbitScoreboard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcootSpeedbars")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcootStats")," - an extension of the ",Object(i.b)("inlineCode",{parentName:"li"},"sqStats")," module which shows information including your current kill streak count"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcootVehicleHealthEnergy"))),Object(i.b)("h3",{id:"developer-documentation"},"Developer Documentation"),Object(i.b)("p",null,"A major change in this release is the comprehensive reference for the TAMods API on this website, accompanied by short tutorials for writing your first TAMods scripts."),Object(i.b)("h3",{id:"minor-api-improvements"},"Minor API Improvements"),Object(i.b)("p",null,"A number of new minor features have been added to the Lua API:"),Object(i.b)("h4",{id:"convenience-constants"},"Convenience constants"),Object(i.b)("p",null,"Constant values / enums used throughout the Lua API have been given named constants accessible under the ",Object(i.b)("inlineCode",{parentName:"p"},"enums")," namespace. Enums have been added for the following kinds of values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Team Number"),Object(i.b)("li",{parentName:"ul"},"Equip Points"),Object(i.b)("li",{parentName:"ul"},"Reticule Types"),Object(i.b)("li",{parentName:"ul"},"Chat Channels"),Object(i.b)("li",{parentName:"ul"},"Input Eventtypes"),Object(i.b)("li",{parentName:"ul"},"Kill Types"),Object(i.b)("li",{parentName:"ul"},"Text Alignments")),Object(i.b)("h4",{id:"new-functions"},"New Functions"),Object(i.b)("p",null,"The following functions have been added to the API:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getHud()")," - returns a reference to the HUD object, previously accessible only within certain events"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"drawUTTextScaled()")," - allows the drawing of text in Unreal Tournament fonts with bitmap scaling applied"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"player.isSkiing()")," - returns whether the player is currently skiing"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vehicle.name()")," - Get the name of the vehicle the player is in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vehicle.seatName()")," - Get the name of the current seat of the vehicle the player is in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vehicle.seatIndex()")," - Get the index of the seat of the vehicle the player is in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vehicle.seatCount()")," - Get the number of seats in the vehicle the player is in")))}b.isMDXComponent=!0}}]);