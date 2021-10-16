"use strict";(self.webpackChunktamods_site=self.webpackChunktamods_site||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"doc_dev_api_drawing",title:"Drawing",sidebar_label:"Drawing",sidebar_position:8},p=void 0,d={unversionedId:"developer/api/doc_dev_api_drawing",id:"developer/api/doc_dev_api_drawing",isDocsHomePage:!1,title:"Drawing",description:"HUD Data Type",source:"@site/docs/developer/api/doc_dev_api_drawing.md",sourceDirName:"developer/api",slug:"/developer/api/doc_dev_api_drawing",permalink:"/docs/developer/api/doc_dev_api_drawing",editUrl:"https://github.com/mcoot/tamods-site/tree/master/docs/developer/api/doc_dev_api_drawing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"doc_dev_api_drawing",title:"Drawing",sidebar_label:"Drawing",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Capping and Route Recording",permalink:"/docs/developer/api/doc_dev_api_routes"},next:{title:"Miscellaneous Data Types",permalink:"/docs/developer/api/doc_dev_api_datatypes"}},s=[{value:"HUD Data Type",id:"hud-data-type",children:[{value:"Associated functions",id:"associated-functions",children:[],level:4}],level:2},{value:"Accessing a custom Hud drawing context",id:"accessing-a-custom-hud-drawing-context",children:[{value:"The <code>onDrawCustomHud</code> hook",id:"the-ondrawcustomhud-hook",children:[{value:"Example using <code>onDrawCustomHud</code>",id:"example-using-ondrawcustomhud",children:[],level:4}],level:3},{value:"Custom Huds using Ubermenu",id:"custom-huds-using-ubermenu",children:[],level:3}],level:2},{value:"Data Types and Enums",id:"data-types-and-enums",children:[{value:"Color Data Type",id:"color-data-type",children:[{value:"Associated functions",id:"associated-functions-1",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"TextAlignment Enum",id:"textalignment-enum",children:[],level:3},{value:"Viewport Information",id:"viewport-information",children:[],level:3}],level:2},{value:"Canvas Drawing",id:"canvas-drawing",children:[{value:"Drawing Primitives",id:"drawing-primitives",children:[],level:3},{value:"Drawing Text",id:"drawing-text",children:[{value:"Damage Number Font",id:"damage-number-font",children:[],level:4},{value:"Small Font",id:"small-font",children:[],level:4},{value:"Unreal Tournament Fonts",id:"unreal-tournament-fonts",children:[],level:4}],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hud-data-type"},"HUD Data Type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HUD")," datatype has a single property, ",(0,o.kt)("inlineCode",{parentName:"p"},"canvas"),", which gives access to the HUD's drawing canvas."),(0,o.kt)("h4",{id:"associated-functions"},"Associated functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getHUD(): HUD")),(0,o.kt)("p",null,"Gets a reference to the player's HUD."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"project(hud: HUD, vector: Vector): Vector")),(0,o.kt)("p",null,"Projects a 3D vector onto the 2D canvas of the HUD. The resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," is still a 3D vector type, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," components represent the 2D projected coordinates."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawDamageNumber(hud: HUD, num: string, color: Color, location: Vector, xScale: float, yScale: float)")),(0,o.kt)("p",null,"Draws a damage number with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"num")," (which can be any text). The ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," components determine the 2D positioning of the damage number on the HUD canvas, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"Z")," component determines its depth/draw order."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isOnScreen(hud: HUD, position: Vector): boolean")),(0,o.kt)("p",null,"Returns true if the given world position is within the bounds of the HUD."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getPlayerPos(hud: HUD): Vector")),(0,o.kt)("p",null,"Gets the world position of the player."),(0,o.kt)("h2",{id:"accessing-a-custom-hud-drawing-context"},"Accessing a custom Hud drawing context"),(0,o.kt)("h3",{id:"the-ondrawcustomhud-hook"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"onDrawCustomHud")," hook"),(0,o.kt)("p",null,"Custom Hud drawing in TAMods is enabled via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api/doc_dev_api_events#ondrawcustomhud"},(0,o.kt)("inlineCode",{parentName:"a"},"onDrawCustomHud")," event"),"."),(0,o.kt)("p",null,"The user can draw their custom Hud elements in an event handler for ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrawCustomHud"),". In practice, it's highly recommended to not use this method, and instead draw custom functions via the Ubermenu preset using the method defined in the next section."),(0,o.kt)("h4",{id:"example-using-ondrawcustomhud"},"Example using ",(0,o.kt)("inlineCode",{parentName:"h4"},"onDrawCustomHud")),(0,o.kt)("h3",{id:"custom-huds-using-ubermenu"},"Custom Huds using Ubermenu"),(0,o.kt)("p",null,"The Ubermenu preset defines an abstracted way to draw Hud components, handling ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrawCustomHud")," automatically."),(0,o.kt)("h2",{id:"data-types-and-enums"},"Data Types and Enums"),(0,o.kt)("h3",{id:"color-data-type"},"Color Data Type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," type has the following properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"r")),(0,o.kt)("td",{parentName:"tr",align:null},"integer (0-255)"),(0,o.kt)("td",{parentName:"tr",align:null},"Red component of the color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"g")),(0,o.kt)("td",{parentName:"tr",align:null},"integer (0-255)"),(0,o.kt)("td",{parentName:"tr",align:null},"Green component of the color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"b")),(0,o.kt)("td",{parentName:"tr",align:null},"integer (0-255)"),(0,o.kt)("td",{parentName:"tr",align:null},"Blue component of the color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"a")),(0,o.kt)("td",{parentName:"tr",align:null},"integer (0-255)"),(0,o.kt)("td",{parentName:"tr",align:null},"Alpha (opacity) component of the color")))),(0,o.kt)("h4",{id:"associated-functions-1"},"Associated functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rgba(r: integer, g: integer, b: integer, a: integer): Color")),(0,o.kt)("p",null,"Constructs a ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," with the given components."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rgb(r: integer, g: integer, b: integer): Color")),(0,o.kt)("p",null,"Constructs a ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," with full opacity (",(0,o.kt)("inlineCode",{parentName:"p"},"a == 255"),") and the given components."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lerpColor(c1: Color, c2: Color: alpha: float): Color")),(0,o.kt)("p",null,"Linearly interpolates between colors ",(0,o.kt)("inlineCode",{parentName:"p"},"c1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"c2"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha")," parameter is a float between ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," determines the proportions: ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," gives 100% of ",(0,o.kt)("inlineCode",{parentName:"p"},"c1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," gives 100% of ",(0,o.kt)("inlineCode",{parentName:"p"},"c2"),"."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'c1 = rgba(255, 0, 0, 128)\nc2 = rgb(0, 0, 255)\nc3 = lerpColor(c1, c2, 0.5)\nconsole("Color c3 has values (r: " .. c3.r .. ", g:" .. c3.g .. ", b:" .. c3.b .. ", a:" .. c3.a .. ")")\nconsole("AND IT GIVES YOU NICE PURPLE TEXT", c3)\n')),(0,o.kt)("h3",{id:"textalignment-enum"},"TextAlignment Enum"),(0,o.kt)("p",null,"Enumerates the possible text alignments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_LEFT")," = 0 - Left-aligned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_CENTER")," = 0 - Center-aligned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_RIGHT")," = 0 - Right-aligned")),(0,o.kt)("h3",{id:"viewport-information"},"Viewport Information"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"viewport")," namespace gives information about the current HUD viewport (drawable area)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"viewport.size(): Vector2")),(0,o.kt)("p",null,"Gets the current size of the HUD viewport as a vector."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"viewport.isMainMenuOpen(): boolean")),(0,o.kt)("p",null,"Returns true if the player has the menu open."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"viewport.isScoreboardOpen(): boolean")),(0,o.kt)("p",null,"Returns true if the player currently has the scoreboard open."),(0,o.kt)("h2",{id:"canvas-drawing"},"Canvas Drawing"),(0,o.kt)("p",null,"The functions described below can be used in event handlers for a ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api/doc_dev_api_events#available-event-handlers"},"drawing event"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrawCustomHud")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrawHealthBar"),"."),(0,o.kt)("h3",{id:"drawing-primitives"},"Drawing Primitives"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawRect(x1: float, y1: float, x2: float, y2: float, color: Color)")),(0,o.kt)("p",null,"Draw a filled rectangle with the given coordinates and colour."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawBox(x1: float, y1: float, x2: float, y2: float, color: Color)")),(0,o.kt)("p",null,"Draw an outline rectangle with the given coordinates and colour."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawProgressBar(x1: float, y1: float, x2: float, y2: float, color: Color, direction: integer, proportion: float)")),(0,o.kt)("p",null,"Draws a rectangle progress bar filled to the given proportion. The ",(0,o.kt)("inlineCode",{parentName:"p"},"direction")," parameter can be one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," - up"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1")," - right"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2")," - down"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3")," - left")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"draw2dLine(x1: float, y1: float, x2: float, y2: float, color: Color)")),(0,o.kt)("p",null,"Draws a line between the two given points."),(0,o.kt)("h3",{id:"drawing-text"},"Drawing Text"),(0,o.kt)("p",null,"TAMods provides text drawing in three different font types: default (the damage number font), small (the console font) and the Unreal Tournament font set."),(0,o.kt)("h4",{id:"damage-number-font"},"Damage Number Font"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, scale: float)")),(0,o.kt)("p",null,"Draw text in the damage number font. The ",(0,o.kt)("inlineCode",{parentName:"p"},"scale")," parameter performs bitmap scaling on the text (so ",(0,o.kt)("inlineCode",{parentName:"p"},"scale")," > 1 will produce blurriness)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getTextSize(text: string, scale: float): Vector2")),(0,o.kt)("p",null,"Get the display size of the given text printed in damage number font, as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api/doc_dev_api_datatypes#vector2"},"2D vector"),"."),(0,o.kt)("h4",{id:"small-font"},"Small Font"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawSmallText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, scale: float)")),(0,o.kt)("p",null,"Draw text in the console font. The ",(0,o.kt)("inlineCode",{parentName:"p"},"shadowSize")," value determines the distance of the drop shadow (",(0,o.kt)("inlineCode",{parentName:"p"},"0")," gives no shadow). The ",(0,o.kt)("inlineCode",{parentName:"p"},"scale")," parameter performs bitmap scaling."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getSmallTextSize(text: string, scale: float): Vector2")),(0,o.kt)("p",null,"Get the display size of the text in the console font."),(0,o.kt)("h4",{id:"unreal-tournament-fonts"},"Unreal Tournament Fonts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawUTText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer)")),(0,o.kt)("p",null,"Draw text in one of the Unreal Tournament fonts. ",(0,o.kt)("inlineCode",{parentName:"p"},"fontNum")," is an integer in the range of ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"; roughly speaking the lower values correspond to smaller fonts."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drawUTTextScaled(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer, scale: float)")),(0,o.kt)("p",null,"Draw text in one of the Unreal Tournament fonts, with bitmap scaling applied."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getUTTextSize(text: string, fontNum: integer): Vector2")),(0,o.kt)("p",null,"Get the display size of the text in the given UT font."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getUTTextSizeScaled(text: string, fontNum: integer, scale: float): Vector2")),(0,o.kt)("p",null,"Get the display size of the text in the given UT font, after bitmap scaling."))}c.isMDXComponent=!0}}]);