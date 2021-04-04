(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,s=d["".concat(b,".").concat(u)]||d[u]||m[u]||l;return a?r.a.createElement(s,i(i({ref:t},c),{},{components:a})):r.a.createElement(s,i({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),l=(a(0),a(126)),b={id:"doc_srv_api_properties_classes",title:"Game Balance - Classes",sidebar_label:"Classes"},i={unversionedId:"doc_srv_api_properties_classes",id:"doc_srv_api_properties_classes",isDocsHomePage:!1,title:"Game Balance - Classes",description:"Overview",source:"@site/docs/doc_srv_api_properties_classes.md",slug:"/doc_srv_api_properties_classes",permalink:"/docs/doc_srv_api_properties_classes",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_srv_api_properties_classes.md",version:"current",sidebar_label:"Classes",sidebar:"server",previous:{title:"Game Balance - Items",permalink:"/docs/doc_srv_api_properties_items"},next:{title:"Game Balance - Vehicles",permalink:"/docs/doc_srv_api_properties_vehicles"}},p=[{value:"Overview",id:"overview",children:[{value:"Setting Class Properties",id:"setting-class-properties",children:[]}]},{value:"Base Stats",id:"base-stats",children:[]},{value:"Movement and Skiing",id:"movement-and-skiing",children:[]},{value:"Jetting and Air Control",id:"jetting-and-air-control",children:[]},{value:"Collision",id:"collision",children:[]}],c={toc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"Class Property Modification can be used to modify the balance properties inherent to player classes (i.e. Light, Medium, Heavy, or pre-OOTB classes like Pathfinder, Sentinel or Brute)."),Object(l.b)("p",null,"All class modification functions and properties fall under the ",Object(l.b)("inlineCode",{parentName:"p"},"Classes")," namespace. Properties fall under the ",Object(l.b)("inlineCode",{parentName:"p"},"Classes.Properties")," namespace. So for instance, one could reference a property with ",Object(l.b)("inlineCode",{parentName:"p"},"Classes.Properties.HealthPool"),"."),Object(l.b)("h3",{id:"setting-class-properties"},"Setting Class Properties"),Object(l.b)("p",null,"Getter and Setter functions for property values are provided."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Classes.setProperty(className: string, property: ItemProperty, value: T)")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"setProperty")," sets the value of the property ",Object(l.b)("inlineCode",{parentName:"p"},"property")," for the class ",Object(l.b)("inlineCode",{parentName:"p"},"className"),". The type ",Object(l.b)("inlineCode",{parentName:"p"},"T")," represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Classes.getProperty(className: string, property: ItemProperty): T")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"getProperty")," retrieves the value of the given property. The type ",Object(l.b)("inlineCode",{parentName:"p"},"T")," is the type of values of that property."),Object(l.b)("h2",{id:"base-stats"},"Base Stats"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Value Restrictions"),Object(l.b)("th",{parentName:"tr",align:null},"Units"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Health Pool"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"> 0"),Object(l.b)("td",{parentName:"tr",align:null},"Health"),Object(l.b)("td",{parentName:"tr",align:null},"Health pool for this class")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Energy Pool"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"Energy"),Object(l.b)("td",{parentName:"tr",align:null},"Energy pool for the class")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EnergyRechargeRate"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"Energy / S"),Object(l.b)("td",{parentName:"tr",align:null},"Rate at which energy recovers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"JetEnergyCost"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"Energy / S"),Object(l.b)("td",{parentName:"tr",align:null},"Energy per second needed to jet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"InitialJetEnergyCost"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"Energy"),Object(l.b)("td",{parentName:"tr",align:null},"Amount of energy used in initiating the jetpack")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegenTime"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"S"),Object(l.b)("td",{parentName:"tr",align:null},"Time before health regen starts")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegenRate"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"How fast to regenerate health while regen is ongoing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LowHealthThreshold"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Percentage of health at which low health UI effects play")))),Object(l.b)("h2",{id:"movement-and-skiing"},"Movement and Skiing"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Value Restrictions"),Object(l.b)("th",{parentName:"tr",align:null},"Units"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mass"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Mass for players of this type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GroundSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Walking speed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MaxSkiingSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Max speed achievable via skiing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MaxSkiControl"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"0 <= x <= 1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Max proportion of turn control the player can have while skiing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SkiControlPeakSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Speed at which the player has maximum turning control; the mean of the normal curve for turn control")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SkiControlVariance"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Variance of the normal / bell curve for turn control; larger values mean a broader speed range with high control")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SkiSlopeGravity"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Gravity applied to the player while skiing down a slope")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"VehicleSpeedInheritance"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"0 <= x <= 1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Proportion of speed to inherit when jumping out of a vehicle; affected by the vehicle's exit speed cap")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MomentumDampeningEnabled"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Whether impulse from an explosive weapon is reduced when the player is moving fast enough")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MomentumDampeningThreshold"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Speed threshold past which momentum dampening is active")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MomentumDampeningProportion"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"0 <= x <= 1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Proportional reduction in impulse when momentum is dampened")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MaxHealthRegenSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0 (disabled if -1)"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Speed threshold above which health regen is disabled")))),Object(l.b)("h2",{id:"jetting-and-air-control"},"Jetting and Air Control"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Value Restrictions"),Object(l.b)("th",{parentName:"tr",align:null},"Units"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MaxJettingSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Max speed achievable via jetting")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"JetAcceleration"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S^2"),Object(l.b)("td",{parentName:"tr",align:null},"Acceleration caused by jetting")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"InitialJetAccelerationMultiplier"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Multiplier to acceleration for an initial jetpack boost")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"InitialJetLength"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"S"),Object(l.b)("td",{parentName:"tr",align:null},"How long the initial jetpack boost lasts")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ForwardJetProportion"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"0 <= x <= 1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Proportion of jetting acceleration applied to forwards momentum")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"JetBoostMaxGroundSpeed"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum ground speed achievable via jetting while skiing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DefaultAirControl"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"0 <= x <= 1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Base proportion of turn / strafe control the player has in the air")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AirControlMaxMultiplier"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Multiplier applied to air control at speeds below the reduction range")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AirControlMinMultiplier"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Multiplier applied to air control at speeds above the reduction range")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AirControlReductionRangeMax"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Speed at which air control begins to decrease")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AirControlReductionRangeMin"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU / S"),Object(l.b)("td",{parentName:"tr",align:null},"Speed at which air control stops decreasing")))),Object(l.b)("p",null,"Air control works in a similar way to damage falloff: there is a 'reduction range' of speeds between ",Object(l.b)("inlineCode",{parentName:"p"},"AirControlReductionRangeMax")," and ",Object(l.b)("inlineCode",{parentName:"p"},"AirControlReductionRangeMin"),", between which the multiplier applied to air control will drop off linearly."),Object(l.b)("h2",{id:"collision"},"Collision"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Value Restrictions"),Object(l.b)("th",{parentName:"tr",align:null},"Units"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CollisionCylinderRadius"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU"),Object(l.b)("td",{parentName:"tr",align:null},"Radius of the class's collision cylinder")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CollisionCylinderHeight"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},">= 0"),Object(l.b)("td",{parentName:"tr",align:null},"UU"),Object(l.b)("td",{parentName:"tr",align:null},"Height of the class's collision cylinder")))))}o.isMDXComponent=!0}}]);