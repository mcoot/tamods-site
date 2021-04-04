(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{126:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),c=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,m=s["".concat(r,".").concat(u)]||s[u]||p[u]||l;return t?i.a.createElement(m,o(o({ref:n},d),{},{components:t})):i.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),l=(t(0),t(126)),r={id:"doc_dev_api_events",title:"Event Handling and I/O",sidebar_label:"Event Handling and I/O"},o={unversionedId:"doc_dev_api_events",id:"doc_dev_api_events",isDocsHomePage:!1,title:"Event Handling and I/O",description:"Console Input & Output",source:"@site/docs/doc_dev_api_events.md",slug:"/doc_dev_api_events",permalink:"https://www.tamods.org/docs/doc_dev_api_events",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_dev_api_events.md",version:"current",sidebar_label:"Event Handling and I/O",sidebar:"developer",previous:{title:"Console Commands",permalink:"https://www.tamods.org/docs/doc_dev_api_consolecommands"},next:{title:"Game Information",permalink:"https://www.tamods.org/docs/doc_dev_api_gameinfo"}},b=[{value:"Console Input &amp; Output",id:"console-input--output",children:[]},{value:"Event Handling in TAMods",id:"event-handling-in-tamods",children:[]},{value:"Writing Event Handlers",id:"writing-event-handlers",children:[]},{value:"Available Event Handlers",id:"available-event-handlers",children:[{value:"onChatMessage",id:"onchatmessage",children:[]},{value:"onGameMessage",id:"ongamemessage",children:[]},{value:"onKillMessage",id:"onkillmessage",children:[]},{value:"onAddToCombatLog",id:"onaddtocombatlog",children:[]},{value:"onQueueAccolade",id:"onqueueaccolade",children:[]},{value:"onDamageNumberCreate",id:"ondamagenumbercreate",children:[]},{value:"onDamageNumberUpdate",id:"ondamagenumberupdate",children:[]},{value:"onDrawHealthBar",id:"ondrawhealthbar",children:[]},{value:"onDrawCustomHud",id:"ondrawcustomhud",children:[]},{value:"onInputEvent",id:"oninputevent",children:[]}]},{value:"Key Binding",id:"key-binding",children:[{value:"InputEventType enum",id:"inputeventtype-enum",children:[]},{value:"Binding Functions",id:"binding-functions",children:[]},{value:"Retrieving Keybinds from TribesInput",id:"retrieving-keybinds-from-tribesinput",children:[]}]}],d={toc:b};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"console-input--output"},"Console Input & Output"),Object(l.b)("p",null,"TAMods allows you to output information via the console. It does not currently support direct console input, but you can open the console with a prompt which will execute Lua (via the ",Object(l.b)("inlineCode",{parentName:"p"},"/lua")," command)."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"console(message: string)")),Object(l.b)("p",null,"Prints the message to the console. Also aliased to ",Object(l.b)("inlineCode",{parentName:"p"},"print(message: string)")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"consoleRGB(message: string, color: Color)")),Object(l.b)("p",null,"Prints the message to the console in the given colour."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"notify(title: string, message: string)")),Object(l.b)("p",null,"Displays a dropdown notification with the given title and message."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"openConsole(prompt: string)")),Object(l.b)("p",null,"Opens the console, with the prompt pre-filled into the command text entry."),Object(l.b)("p",null,"This can be used to prompt users for input by pre-filling the ",Object(l.b)("inlineCode",{parentName:"p"},"/lua")," command. The example below would prompt the user to provide a value for ",Object(l.b)("inlineCode",{parentName:"p"},"MyConfigVariable"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'openConsole("/lua MyConfigVariable = ")\n')),Object(l.b)("h2",{id:"event-handling-in-tamods"},"Event Handling in TAMods"),Object(l.b)("p",null,"The code in your ",Object(l.b)("inlineCode",{parentName:"p"},"config.lua"),", ",Object(l.b)("inlineCode",{parentName:"p"},"custom.lua")," and any custom scripts is run when TAMods loads the config (on injection, and when the ",Object(l.b)("inlineCode",{parentName:"p"},"/reloadconfig")," command is used). Generally you will want your mod to be able to run code at other times during the game. To do this, you need to set up ",Object(l.b)("em",{parentName:"p"},"event handlers")," which are triggered by certain events in the game."),Object(l.b)("p",null,"TAMods allows you to write handlers for a number of ingame events. You can also attach handlers to input from the player via keybinds (discussed below)."),Object(l.b)("h2",{id:"writing-event-handlers"},"Writing Event Handlers"),Object(l.b)("p",null,"Event handlers are defined by writing a Lua function with the name of the event. The handler function should have a signature appropriate for that event (see ",Object(l.b)("a",{parentName:"p",href:"#available-event-handlers"},"below")," for available event handlers with signatures)."),Object(l.b)("p",null,"Often you will want to attach ",Object(l.b)("em",{parentName:"p"},"multiple")," event handlers to one event (or use presets/scripts which attach handlers to the same event). Specifying the handler function multiple times will overwrite the handler, and only the last definition will be executed."),Object(l.b)("p",null,"Hence, you should always write event handlers following the pattern in the example below to execute any pre-existing event handler before running yours."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'-- Variable to hold a reference to any existing handler for SomeEvent\nlocal onSomeEventOld\n-- If there\'s already an onSomeEvent handler, save it into onSomeEventOld\nif type(onSomeEvent) == "function" then\n    onSomeEventOld = onSomeEvent\nend\n\n-- Define our new handler\nfunction onSomeEvent(someArg1, someArg2)\n    -- If we saved a previous handler, execute that handler\n    if onSomeEventOld then onSomeEventOld(someArg1, someArg2) end\n\n    -- Do our own handling\n    doEventHandlingStuffHere()\nend\n')),Object(l.b)("p",null,"If event handlers are defined using this structure (substituting ",Object(l.b)("inlineCode",{parentName:"p"},"SomeEvent")," and the handling logic as need be), multiple handlers for the same event will execute correctly."),Object(l.b)("h2",{id:"available-event-handlers"},"Available Event Handlers"),Object(l.b)("p",null,"The below function signatures represent the intended signature of the handler function you write for each event."),Object(l.b)("h3",{id:"onchatmessage"},"onChatMessage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onChatMessage(team: Team, channel: ChatChannel, sender: string, message: string, isVGS: boolean)")),Object(l.b)("p",null,"Event which fires when a chat message is received (including from this player). See the ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_gameinfo#team-enum"},"Team enum")," for possible values of the ",Object(l.b)("inlineCode",{parentName:"p"},"team")," parameter."),Object(l.b)("h5",{id:"chatchannel-enum"},"ChatChannel enum"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.CHAT_CHANNEL_GAME")," = 2 - the game-wide global chat channel"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.CHAT_CHANNEL_TEAM")," = 3 - the team chat channel")),Object(l.b)("h3",{id:"ongamemessage"},"onGameMessage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onGameMessage(message: string, persistence: float)")),Object(l.b)("p",null,"Event which fires when an in-game message appears (e.g. on flag return, kill streak, warm-up timer). ",Object(l.b)("inlineCode",{parentName:"p"},"persistence")," represents the length of time in seconds that the message is intended to be shown for."),Object(l.b)("h3",{id:"onkillmessage"},"onKillMessage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onKillMessage(message: string, playerName: string)")),Object(l.b)("p",null,"Event which fires when the player kills another player. ",Object(l.b)("inlineCode",{parentName:"p"},"deathMessage")," is the text normally in the killbox (i.e. ",Object(l.b)("inlineCode",{parentName:"p"},'"You killed"')," or ",Object(l.b)("inlineCode",{parentName:"p"},'"Kill credit for"'),")."),Object(l.b)("h3",{id:"onaddtocombatlog"},"onAddToCombatLog"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onAddToCombatLog(killerTeam: integer, killerName: string, killType: KillType, victimName: string, victimTeam: string)")),Object(l.b)("p",null,"Event which fires when a player dies. ",Object(l.b)("inlineCode",{parentName:"p"},"killerTeam")," and ",Object(l.b)("inlineCode",{parentName:"p"},"victimTeam")," will ",Object(l.b)("em",{parentName:"p"},"normally")," be a ",Object(l.b)("inlineCode",{parentName:"p"},"Team")," (as per the ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_gameinfo#team-enum"},"Team enum"),") unless the killer or the victim is the current player, in which case it will be ",Object(l.b)("inlineCode",{parentName:"p"},"<player team> + 2"),": so ",Object(l.b)("inlineCode",{parentName:"p"},"2")," if the player is on BE and ",Object(l.b)("inlineCode",{parentName:"p"},"3")," if the player is on DS."),Object(l.b)("p",null,"If the death is due to suicide, then the ",Object(l.b)("inlineCode",{parentName:"p"},"killerName")," will be ",Object(l.b)("inlineCode",{parentName:"p"},"Suicide"),"."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"killType")," does not distinguish with high granularity between weapons - e.g. the index for a kill from an auto is the same as for a kill from a shotgun."),Object(l.b)("h5",{id:"killtype-enum"},"KillType enum"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_EXPLOSIVE")," = 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_STICKY")," = 2"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_SQUISH")," = 3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_MELEE")," = 4"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_FALLING")," = 5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_VEHICLE")," = 6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_BULLET")," = 7"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_SNIPER")," = 8"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_BASE_TURRET")," = 9"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_HEADSHOT")," = 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_GENERIC")," = 11"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_SPINFUSOR")," = 12"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_TURRET")," = 13"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.KILL_TYPE_CLAIMED")," = 14")),Object(l.b)("h3",{id:"onqueueaccolade"},"onQueueAccolade"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'onQueueAccolade(iconId: integer, accoladeName: string, legacy: "", isBadge: boolean)')),Object(l.b)("p",null,"Event which fires when the player receives an accolade. The ",Object(l.b)("inlineCode",{parentName:"p"},"legacy")," parameter is no longer used by TAMods and will always be passed the empty string. The ",Object(l.b)("inlineCode",{parentName:"p"},"isBadge")," parameter will be true if the accolade being received is a badge."),Object(l.b)("h3",{id:"ondamagenumbercreate"},"onDamageNumberCreate"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onDamageNumberCreate(existingDamageNumbers: DamageNumberArray, number: integer, location: Vector4, isShield: boolean)")),Object(l.b)("p",null,"Event called ",Object(l.b)("em",{parentName:"p"},"instead")," of creating a damage number (i.e. handling this event replaces the native handler)."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"existingDamageNumbers")," parameter is a ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_datatypes#damagenumberarray-class"},"DamageNumberArray")," of the current existing damage numbers."),Object(l.b)("h3",{id:"ondamagenumberupdate"},"onDamageNumberUpdate"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onDamageNumberUpdate(damageNumbers: DamageNumberArray, hud: HUD, deltaTime: float)")),Object(l.b)("p",null,"Event called once per frame ",Object(l.b)("em",{parentName:"p"},"instead")," of the normal damage number update (i.e. replaces the native handler), to update and draw damage numbers. The ",Object(l.b)("inlineCode",{parentName:"p"},"hud")," parameter provides the handler with a reference to the player's ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_drawing#hud-data-type"},"HUD"),". ",Object(l.b)("inlineCode",{parentName:"p"},"deltaTime")," is the time in seconds since the last update."),Object(l.b)("p",null,"This event is a drawing event, so custom HUD drawing functions may be used."),Object(l.b)("p",null,"You will generally want to draw damage numbers in this function using the ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_drawing#hud-data-type"},Object(l.b)("inlineCode",{parentName:"a"},"drawDamageNumber"))," function."),Object(l.b)("h3",{id:"ondrawhealthbar"},"onDrawHealthBar"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onDrawHealthBar(x: float, y: float, isFriendly: boolean, healthPct: float)")),Object(l.b)("p",null,"Event called to draw  IFF indicator health bars ",Object(l.b)("em",{parentName:"p"},"instead")," of the normal function (i.e. replaces the native handler). The ",Object(l.b)("inlineCode",{parentName:"p"},"x")," and ",Object(l.b)("inlineCode",{parentName:"p"},"y")," parameters define the normal HUD position of the top-left of the healthbar. The ",Object(l.b)("inlineCode",{parentName:"p"},"healthPct")," parameter is the proportion of health the player having their health bar drawn has."),Object(l.b)("p",null,"This event is a drawing event, so custom HUD drawing functions may be used."),Object(l.b)("h3",{id:"ondrawcustomhud"},"onDrawCustomHud"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onDrawCustomHud(xRes: int, yRes: int)")),Object(l.b)("p",null,"Event called once per frame to draw the custom HUD. The parameters give the resolution of the game view."),Object(l.b)("p",null,"This event is a drawing event, so custom HUD drawing functions may be used."),Object(l.b)("p",null,"Further information about custom HUD drawing is available on the ",Object(l.b)("a",{parentName:"p",href:"https://www.tamods.org/docs/doc_dev_api_drawing"},"Drawing page"),"."),Object(l.b)("h3",{id:"oninputevent"},"onInputEvent"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onInputEvent(keyPressed: string, eventType: InputEventType, ctrl: boolean, shift: boolean, alt: boolean)")),Object(l.b)("p",null,"Event to intercept all key/mouse presses for custom input handling. The last three parameters allow for checking whether ctrl, alt and/or shift were held down while the key was pressed."),Object(l.b)("p",null,"It is highly recommended that you ",Object(l.b)("strong",{parentName:"p"},"do not")," handle this event directly; instead, use the keybinding API described ",Object(l.b)("a",{parentName:"p",href:"#key-binding"},"below"),"."),Object(l.b)("h2",{id:"key-binding"},"Key Binding"),Object(l.b)("p",null,"The key names used for keybinding are as per the ",Object(l.b)("a",{parentName:"p",href:"https://wiki.unrealengine.com/List_of_Key/Gamepad_Input_Names"},"Unreal Engine documentation"),"."),Object(l.b)("h3",{id:"inputeventtype-enum"},"InputEventType enum"),Object(l.b)("p",null,"This enum under the ",Object(l.b)("inlineCode",{parentName:"p"},"enums")," namespace enumerates the possible types of input event."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.INPUT_EVENT_TYPE_PRESSED")," - event occurs when the key is pressed down"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.INPUT_EVENT_TYPE_RELEASED")," - event occurs when the key is released"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.INPUT_EVENT_TYPE_REPEAT")," - event triggers repeatedly while the key is held down"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enums.INPUT_EVENT_TYPE_DOUBLECLICK")," - event triggers when the key is pressed twice in quick succession")),Object(l.b)("h3",{id:"binding-functions"},"Binding Functions"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"bindKey(key: string, eventType: InputEventType, func: function): boolean")),Object(l.b)("p",null,"Binds a key to execute the given function, returning whether the bind was successfully added. Multiple binds to the same key are allowed. The handler function should have the signature:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"func(keyPressed: string, eventType: InputEventType, ctrl: boolean, shift: boolean, alt: boolean)")),Object(l.b)("p",null,"The key pressed, the input event type, and whether ctrl/shift/alt were held down will be passed to your handler as arguments."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"unbindKey(key: string, eventType: InputEventType): boolean")),Object(l.b)("p",null,"Unbinds a key, returning whether the unbinding was successful."),Object(l.b)("h3",{id:"retrieving-keybinds-from-tribesinput"},"Retrieving Keybinds from TribesInput"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"searchTribesInputCommands(action: regex string): list<KeyBind>")),Object(l.b)("p",null,"Retrieve a list of native Unreal Engine bindings for actions matching the given regex, such as those set via the in-game menus or via ",Object(l.b)("inlineCode",{parentName:"p"},"tribesinput.ini"),"."),Object(l.b)("h4",{id:"keybind-class"},"KeyBind class"),Object(l.b)("p",null,"The KeyBind class represents a native Unreal Engine keybind."),Object(l.b)("h5",{id:"properties"},"Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"name")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The key pressed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"command")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The command to be executed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ctrl")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind requires Control held")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"shift")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind requires Shift held")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"alt")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind requires Alt held")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ignoreCtrl")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind is ignored if Control is held")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ignoreShift")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind is ignored if Shift is held")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ignoreAlt")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the bind is ignored if Alt is held")))))}c.isMDXComponent=!0}}]);