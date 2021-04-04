(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{126:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,b=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return t?i.a.createElement(b,m(m({ref:n},l),{},{components:t})):i.a.createElement(b,m({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return m})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),r=(t(0),t(126)),o={id:"doc_srv_api_admin",title:"Server Administration",sidebar_label:"Server Administration"},m={unversionedId:"doc_srv_api_admin",id:"doc_srv_api_admin",isDocsHomePage:!1,title:"Server Administration",description:"TAMods-Server does not yet support the /sc commands used to run administrative commands on official servers. Support for this may come in future, but TAMods-Server has its own administration system.",source:"@site/docs/doc_srv_api_admin.md",slug:"/doc_srv_api_admin",permalink:"/docs/doc_srv_api_admin",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_srv_api_admin.md",version:"current",sidebar_label:"Server Administration",sidebar:"server",previous:{title:"Server Settings",permalink:"/docs/doc_srv_api_serverconfig"},next:{title:"Custom Maps",permalink:"/docs/doc_srv_api_custommaps"}},s=[{value:"Roles",id:"roles",children:[{value:"Example",id:"example",children:[]}]},{value:"Defining Commands",id:"defining-commands",children:[{value:"Argument Definition",id:"argument-definition",children:[]},{value:"Command Function",id:"command-function",children:[]},{value:"Complete Command Definition Example",id:"complete-command-definition-example",children:[]}]},{value:"Running Commands",id:"running-commands",children:[]},{value:"Administrative Lua Functionality",id:"administrative-lua-functionality",children:[{value:"Messaging",id:"messaging",children:[]},{value:"Map Changes",id:"map-changes",children:[]},{value:"Example",id:"example-1",children:[]}]}],l={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TAMods-Server does not yet support the ",Object(r.b)("inlineCode",{parentName:"p"},"/sc")," commands used to run administrative commands on official servers. Support for this may come in future, but TAMods-Server has its own administration system."),Object(r.b)("h2",{id:"roles"},"Roles"),Object(r.b)("p",null,"The admin system is based on defining ",Object(r.b)("em",{parentName:"p"},"roles")," which are attached to a set of commands they are permitted to run. Additionally, roles may have the ",Object(r.b)("inlineCode",{parentName:"p"},"canExecuteLua")," permission, which allows them to execute raw Lua on the server. Giving this permission to untrusted roles is dangerous, as users are effectively allowed to execute arbitrary code."),Object(r.b)("p",null,"To create and remove roles, you can use the functions:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Roles.add(name: string, password: string, canExecuteLua: boolean)")),Object(r.b)("p",null,"This adds a role with the given name and password, and defines whether this role has the ",Object(r.b)("inlineCode",{parentName:"p"},"canExecuteLua")," permission."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Roles.remove(name: string)")),Object(r.b)("p",null,"This removes the role with the given name from the pool of roles that a user may log into. It does not immediately log any users out of that role."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Roles.addAllowedCommand(rolename: string, commandname: string)")),Object(r.b)("p",null,"This adds permission for the role to execute the given command."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Roles.removeAllowedCommand(rolename: string, commandname: string)")),Object(r.b)("p",null,"This removes permission for the role to execute the given command."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"This example creates an admin role that can execute Lua commands, and gives it permission to access a command we've defined with the name ",Object(r.b)("inlineCode",{parentName:"p"},"NextMap"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'Admin.Roles.add("admin", "secretpassword", true)\nAdmin.Roles.addAllowedCommand("admin", "NextMap")\n')),Object(r.b)("h2",{id:"defining-commands"},"Defining Commands"),Object(r.b)("p",null,"The commands that roles may be granted permissions for are defined in Lua, using:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Command.define(commandname: string, arguments: ArgumentDefinition, func: Function)")),Object(r.b)("p",null,"Users will call your command in-game with ",Object(r.b)("inlineCode",{parentName:"p"},"/srvcmd <commandname> <arguments>"),". Definition of the arguments and command function are described in the below section."),Object(r.b)("h3",{id:"argument-definition"},"Argument Definition"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"arguments")," parameter to the command definition function allows you to provide names for each argument the user will provide to the command, and give them a ",Object(r.b)("em",{parentName:"p"},"type")," (boolean, integer, floating point or string) to validate user input against. When the user calls the command, if the arguments they provide do not match the order and type you specify, they will be shown an error message."),Object(r.b)("p",null,"A command may have at most six arguments."),Object(r.b)("p",null,"The ArgumentDefinition must be an array (i.e. a Lua table with 1-indexed integer keys), where each element is a two-element array (also a table) defining the name and type of the argument. An example of an ArgumentDefinition for a 'set next map' command with one parameter might be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'{\n    {"mapId", Admin.Command.ArgumentType.Int},\n}\n')),Object(r.b)("h4",{id:"valid-argument-types"},"Valid Argument Types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Admin.Command.ArgumentType.Boolean")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Admin.Command.ArgumentType.Int")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Admin.Command.ArgumentType.Float")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Admin.Command.ArgumentType.String"))),Object(r.b)("h3",{id:"command-function"},"Command Function"),Object(r.b)("p",null,"The function you provide as the final argument to the command definition is the name of a Lua function to call when a player executes the command."),Object(r.b)("p",null,"This function will be passed two arguments - the name of the player executing the command, and the role they are logged in as - plus an additional argument for every defined command argument. So if you defined three command arguments, the Lua function should have five arguments."),Object(r.b)("p",null,"So for instance, for a 'set next map' command, the Lua function definition might be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'\nfunction setNextMapCommand(playerName, roleName, mapId)\n    Admin.Game.NextMap(mapId)\n    Admin.SendConsoleMessageToPlayer(playerName, "Set next map to " .. mapId)\nend\n\n')),Object(r.b)("h3",{id:"complete-command-definition-example"},"Complete Command Definition Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'local nextMapParams = {\n    {"mapId", Admin.Command.ArgumentType.Int},\n}\n\nlocal function setNextMapCommand(playerName, roleName, mapId)\n    Admin.Game.NextMap(mapId)\n    Admin.SendConsoleMessageToPlayer(playerName, "Set next map to " .. mapId)\nend\n\nAdmin.Command.define("NextMap", nextMapParams, setNextMapCommand)\n')),Object(r.b)("h2",{id:"running-commands"},"Running Commands"),Object(r.b)("p",null,"The admin system is currently only accessible from a client running TAMods. Clientside TAMods exposes the following server commands that may be run at the console:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"/srvlogin <role> <password>")),Object(r.b)("p",null,"This attempts to log into the server you are currently in with the given role and password name. The server will respond with a console message on success or failure."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"/srvlua <lua>")),Object(r.b)("p",null,"This attempts to run a Lua statement on the server. This will fail if you are not currently logged into a role with permission to execute Lua."),Object(r.b)("p",null,"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"/srvlua")," command you can run ",Object(r.b)("em",{parentName:"p"},"any")," valid TAMods-Server Lua statement, including to modify a server setting or change a game balance modification. Some Lua actions and settings will not take place until the next map switch. In addition, running these commands does not modify your config on-disk and so will not persist between server restarts."),Object(r.b)("p",null,"You should be very careful in defining roles with permission to execute Lua commands, as this gives them access to run ",Object(r.b)("em",{parentName:"p"},"any")," Lua command. Running an invalid Lua command could crash the server - or worse, it could allow compromise of the computer the server is running on (since Lua can be used to interact with the filesystem!)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"/srvcmd <command> <arguments>")),Object(r.b)("p",null,"This attempts to run a defined command with the given arguments on the server. It will fail if the command doesn't exist, your current role does not have access to the command, or the arguments are invalid."),Object(r.b)("p",null,"Defining commands and explicitly allowing roles to execute them is safer than granting raw Lua access."),Object(r.b)("h2",{id:"administrative-lua-functionality"},"Administrative Lua Functionality"),Object(r.b)("p",null,"The following Lua functions exist which are primarily useful as Lua commands to be run via the admin interface. They ",Object(r.b)("em",{parentName:"p"},"can")," be run from a config file but are generally not useful in that context."),Object(r.b)("h3",{id:"messaging"},"Messaging"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.SendConsoleMessageToAllPlayers(message: string)")),Object(r.b)("p",null,"Sends a message to all connected modded clients which will appear in their console."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.SendConsoleMessageToPlayer(playername: string, message: string)")),Object(r.b)("p",null,"Sends a message to a specific connected modded player which will appear in their console."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.SendGameMessageToAllPlayers(message: string, time: float)")),Object(r.b)("p",null,"Sends a message to all connected modded clients which appears in the HUD, lasting for the specified time in seconds. This may not appear for players who have disabled certain HUD elements."),Object(r.b)("h3",{id:"map-changes"},"Map Changes"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Game.StartMap()")),Object(r.b)("p",null,"Force-starts the current map if in warmup."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Game.NextMap(map: Map)")),Object(r.b)("p",null,"Overrides the map rotation such that at the next map switch, the map will be the one specified. The map should be a valid map definition as per the ",Object(r.b)("a",{parentName:"p",href:"/docs/doc_srv_api_serverconfig#maps"},"Server Configuration page"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Admin.Game.EndMap()")),Object(r.b)("p",null,"Forcibly ends the current map."),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("p",null,"This example is run as a series of console commands from a client connected to the server, to set the next map and then swap to it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/srvlogin admin secretpassword\n/srvlua Admin.Game.NextMap(Maps.CTF.ArxNovena)\n/srvlua Admin.Game.EndMap()\n")))}c.isMDXComponent=!0}}]);