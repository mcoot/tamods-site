"use strict";(self.webpackChunktamods_site=self.webpackChunktamods_site||[]).push([[6635],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7589:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"doc_dev_tute_script",title:"Tutorial - Writing a Script",sidebar_label:"Tutorial - Writing a Script",sidebar_position:2},l=void 0,s={unversionedId:"developer/doc_dev_tute_script",id:"developer/doc_dev_tute_script",isDocsHomePage:!1,title:"Tutorial - Writing a Script",description:"This tutorial will cover writing your first TAMods script, to add useful keybinds for TAMods' Route Recordings function.",source:"@site/docs/developer/doc_dev_tute_script.md",sourceDirName:"developer",slug:"/developer/doc_dev_tute_script",permalink:"/docs/developer/doc_dev_tute_script",editUrl:"https://github.com/mcoot/tamods-site/tree/master/docs/developer/doc_dev_tute_script.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"doc_dev_tute_script",title:"Tutorial - Writing a Script",sidebar_label:"Tutorial - Writing a Script",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Modding",permalink:"/docs/developer/doc_dev_intro"},next:{title:"Tutorial - Writing a HUDModule",permalink:"/docs/developer/doc_dev_tute_hudmodule"}},d=[{value:"Part 1: Setting up your script",id:"part-1-setting-up-your-script",children:[{value:"Creating a &quot;Hello World&quot; script",id:"creating-a-hello-world-script",children:[],level:3},{value:"Testing your setup",id:"testing-your-setup",children:[],level:3}],level:2},{value:"Part 2: Route recordings bindings",id:"part-2-route-recordings-bindings",children:[{value:"Writing functions to switch routes",id:"writing-functions-to-switch-routes",children:[],level:3},{value:"Adding keybindings",id:"adding-keybindings",children:[],level:3},{value:"Testing it out",id:"testing-it-out",children:[],level:3}],level:2},{value:"Where to go from here",id:"where-to-go-from-here",children:[],level:2},{value:"The final script",id:"the-final-script",children:[],level:2}],c={toc:d};function p(e){var t=e.components,u=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will cover writing your first TAMods script, to add useful keybinds for TAMods' Route Recordings function."),(0,i.kt)("p",null,"It is assumed that you already have TAMods installed and have the Ubermenu preset working."),(0,i.kt)("h2",{id:"part-1-setting-up-your-script"},"Part 1: Setting up your script"),(0,i.kt)("p",null,"To get started, navigate to your config directory - ",(0,i.kt)("inlineCode",{parentName:"p"},"<Documents>\\My Games\\Tribes Ascend\\TribesGame\\config"),". It should contain your Tribes config files, as well as TAMods' configuration files. Create two new files in the config directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua"),", and open both in your favourite text editor."),(0,i.kt)("h3",{id:"creating-a-hello-world-script"},'Creating a "Hello World" script'),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua"),', we\'re going to add a simple "Hello World" message which will be printed when the script is loaded. Enter the following into ',(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'console("Hello World")\n')),(0,i.kt)("p",null,"Since we just included the ",(0,i.kt)("inlineCode",{parentName:"p"},"console")," command in the raw script, it will be executed as soon as TAMods loads it. But currently, it won't be called at all because TAMods doesn't know it needs to load the ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua")," file."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua")," file is special: on load TAMods will first run the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.lua")," script, and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua"),". Hence, any custom scripts you write should be called from ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua"),"."),(0,i.kt)("p",null,"To call our ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua")," script and ensure it is run, add the following into ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'require("route_binds")\n')),(0,i.kt)("h3",{id:"testing-your-setup"},"Testing your setup"),(0,i.kt)("p",null,"The script we have should print ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," into the console when TAMods loads its configuration. To test this, run the game and ensure TAMods is injected; then, enter Roam Map (any map). Since you were not in a game when you first injected TAMods, you'll have to reload your config by entering the ",(0,i.kt)("inlineCode",{parentName:"p"},"/reloadconfig")," command in the console. Once you do so, you should see text which looks similar to the following in your console:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hello world printed in the console",src:n(1588).Z})),(0,i.kt)("p",null,"If you see errors in your console, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," text was not printed, make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.lua")," are exactly as in the above section, and that TAMods is properly injected."),(0,i.kt)("p",null,"Once you see this message, you've successfully loaded a custom script into TAMods! Now we can write a script to actually do something useful. Note that you don't have to restart the game when you edit your script: you can leave the game running in the background, and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/reloadconfig")," command to load the new version of your script after you edit it."),(0,i.kt)("h2",{id:"part-2-route-recordings-bindings"},"Part 2: Route recordings bindings"),(0,i.kt)("p",null,"We have a custom TAMods script being loaded into the game, but at present all it does is print ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World"),". Instead, we're going to use this script to add keybinds to help with accessing TAMods route recordings. Specifically, we're going to have binds to cycle through the routes available to us, and to save and teleport back to positions in Roam Map mode."),(0,i.kt)("p",null,"We need to do two things to achieve this: first, write some logic to allow us to keep track of the loaded route and switch between them, and second, add keybindings to trigger those functions."),(0,i.kt)("p",null,"Feel free to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},'console("Hello World")')," call from your ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua")," at this point."),(0,i.kt)("h3",{id:"writing-functions-to-switch-routes"},"Writing functions to switch routes"),(0,i.kt)("p",null,"From here on we only need to edit ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua"),". We'll need to keep track of which route number we currently have loaded; to do this we'll keep a global variable around. Add the following to the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"curRoute = 0\n")),(0,i.kt)("p",null,"We're initialising our current route state to zero (no valid route) on config load."),(0,i.kt)("p",null,"Then, we need a function to load the next route. The following is an annotated definition for the function; add it to your ",(0,i.kt)("inlineCode",{parentName:"p"},"route_binds.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Defining a function which will load the next routes\nfunction loadNextRoute()\n    -- Get the number of routes for the current map on the player's team\n    numRoutes = route.getTeam()\n    \n    if numRoutes < 1 then\n        -- We can't load routes if there aren't any available\n        console(\"No routes :(\")\n    elseif curRoute >= numRoutes then\n        -- If we've reached the end of the routes, loop back to the first one\n        curRoute = 1\n    else\n        -- Otherwise, select the next route\n        curRoute = curRoute + 1\n    end\n    -- Load the new route\n    route.load(curRoute)\nend\n")),(0,i.kt)("p",null,"Add a similar definition for a function to load the previous route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function loadPrevRoute()\n    numRoutes = route.getTeam()\n    \n    if numRoutes < 1 then\n        console("No routes :(")\n    elseif curRoute <= 1 then\n        curRoute = numRoutes\n    else\n        curRoute = curRoute - 1\n    end\n    route.load(curRoute)\nend\n')),(0,i.kt)("p",null,"At this point, we have functions defined to perform route switching, but we don't have any way to call them."),(0,i.kt)("h3",{id:"adding-keybindings"},"Adding keybindings"),(0,i.kt)("p",null,"To actually be able to use these functions in-game, we need to bind them to keys, using TAMods' ",(0,i.kt)("inlineCode",{parentName:"p"},"bindKey")," function."),(0,i.kt)("p",null,"We can add binds for our functions as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Bind the numpad plus key to switch to the next route\nbindKey("Add", Input.PRESSED, loadNextRoute)\n-- Bind the numpad minus key to switch to the previous route\nbindKey("Subtract", Input.PRESSED, loadPrevRoute)\n-- Bind the numpad zero key to reset the route (to display no route)\nbindKey("NumPadZero", Input.PRESSED, route.reset)\n')),(0,i.kt)("p",null,"Here we're creating keybinds for the numpad plus and minus keys; when these are pressed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadNextRoute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"loadPrevRoute")," functions will be called, respectively. We've also added a third bind to the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"route.reset()")," function, which unloads the current route. These can be changed to whatever keys you like (see the list of keys ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.unrealengine.com/List_of_Key/Gamepad_Input_Names"},"here"),")."),(0,i.kt)("p",null,"For good measure, let's add key bindings for two more built-in functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"state.save()"),", which saves your current position, and ",(0,i.kt)("inlineCode",{parentName:"p"},"state.tp()")," which teleports you back to the saved position. These features will only function in Roam Map."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Bind the multiply and divide numpad keys to save/teleport to a position\nbindKey("Multiply", Input.PRESSED, state.save)\nbindKey("Divide", Input.PRESSED, state.tp)\n')),(0,i.kt)("h3",{id:"testing-it-out"},"Testing it out"),(0,i.kt)("p",null,"The script is now complete. If your game is still open, use ",(0,i.kt)("inlineCode",{parentName:"p"},"/reloadconfig")," to reload the script; otherwise start the game up and inject TAMods. If ",(0,i.kt)("inlineCode",{parentName:"p"},"/reloadconfig")," shows Lua errors, then your script is not correct - ensure it matches the segments above (or the ",(0,i.kt)("a",{parentName:"p",href:"#the-final-script"},"final script below"),")."),(0,i.kt)("p",null,"Once the script loads, try pressing the Numpad Plus and Minus keys while in Roam Map. If you're in a CTF map which has route files, you should see it switch between the available routes. If you're on a map / team with no route file (or not in a CTF map), the console should show a ",(0,i.kt)("inlineCode",{parentName:"p"},"No routes :(")," message. Also try out reseting the route with Numpad Zero, and saving / teleporting to states with Multiply and Divide."),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,i.kt)("p",null,"So you've written your first script. From here, you can take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/doc_dev_tute_hudmodule"},"Hudmodule tutorial")," for information on writing Ubermenu-compatible custom HUD components. Or, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api/doc_dev_api_overview"},"API reference")," to see the tools you have at your disposal for writing custom scripts."),(0,i.kt)("h2",{id:"the-final-script"},"The final script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Global variable to keep track of the current route\ncurRoute = 0\n\n-- Switches to the next route\nfunction loadNextRoute()\n    numRoutes = route.getTeam()\n    \n    if numRoutes < 1 then\n        console("No routes :(")\n    elseif curRoute >= numRoutes then\n        curRoute = 1\n    else\n        curRoute = curRoute + 1\n    end\n    route.load(curRoute)\nend\n\n-- Switches to the previous route\nfunction loadPrevRoute()\n    numRoutes = route.getTeam()\n    \n    if numRoutes < 1 then\n        console("No routes :(")\n    elseif curRoute <= 1 then\n        curRoute = numRoutes\n    else\n        curRoute = curRoute - 1\n    end\n    route.load(curRoute)\nend\n\n-- Route binds\n\n-- Bind the numpad plus key to switch to the next route\nbindKey("Add", Input.PRESSED, loadNextRoute)\n-- Bind the numpad minus key to switch to the previous route\nbindKey("Subtract", Input.PRESSED, loadPrevRoute)\n-- Bind the numpad zero key to reset the route (to display no route)\nbindKey("NumPadZero", Input.PRESSED, route.reset)\n-- Bind the multiply and divide numpad keys to save/teleport to a position\nbindKey("Multiply", Input.PRESSED, state.save)\nbindKey("Divide", Input.PRESSED, state.tp)\n')))}p.isMDXComponent=!0},1588:function(e,t,n){t.Z=n.p+"assets/images/doc_dev_tute_script-1-3668299ef0f3aae83eec419aa4a4d74c.png"}}]);