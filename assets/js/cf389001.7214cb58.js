(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),l=(n(0),n(126)),r={id:"doc_dev_tute_hudmodule",title:"Tutorial - Writing a HUDModule",sidebar_label:"Tutorial - Writing a HUDModule"},i={unversionedId:"doc_dev_tute_hudmodule",id:"doc_dev_tute_hudmodule",isDocsHomePage:!1,title:"Tutorial - Writing a HUDModule",description:"This tutorial will cover writing a custom HUD component for displaying your current speed, compatible with the Ubermenu preset.",source:"@site/docs/doc_dev_tute_hudmodule.md",slug:"/doc_dev_tute_hudmodule",permalink:"/docs/doc_dev_tute_hudmodule",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_dev_tute_hudmodule.md",version:"current",sidebar_label:"Tutorial - Writing a HUDModule",sidebar:"developer",previous:{title:"Tutorial - Writing a Script",permalink:"/docs/doc_dev_tute_script"},next:{title:"Overview",permalink:"/docs/doc_dev_api_overview"}},s=[{value:"Part 1: Setting up your hudmodule script",id:"part-1-setting-up-your-hudmodule-script",children:[{value:"Adding the skeleton",id:"adding-the-skeleton",children:[]},{value:"Drawing &quot;Hello World&quot;",id:"drawing-hello-world",children:[]},{value:"Testing it out",id:"testing-it-out",children:[]}]},{value:"Part 2: Writing a custom speedbar script",id:"part-2-writing-a-custom-speedbar-script",children:[{value:"Adding module options",id:"adding-module-options",children:[]},{value:"Calculating values",id:"calculating-values",children:[]},{value:"Drawing the speedbars",id:"drawing-the-speedbars",children:[]},{value:"Testing the module",id:"testing-the-module",children:[]}]},{value:"The final script",id:"the-final-script",children:[]}],d={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This tutorial will cover writing a custom HUD component for displaying your current speed, compatible with the Ubermenu preset."),Object(l.b)("p",null,"It is assumed you have TAMods and the Ubermenu working, and that you are familiar with customising the HUD in-game via the Ubermenu."),Object(l.b)("h2",{id:"part-1-setting-up-your-hudmodule-script"},"Part 1: Setting up your hudmodule script"),Object(l.b)("p",null,"Custom HUD component scripts must be stored within the Ubermenu preset, at ",Object(l.b)("inlineCode",{parentName:"p"},"<Documents>/My Games/Tribes Ascend/TribesGame/config/presets/ubermenu/hudmodules"),". Navigate to this directory and create a new file called ",Object(l.b)("inlineCode",{parentName:"p"},"Tutorial_Speedbar.lua"),"."),Object(l.b)("h3",{id:"adding-the-skeleton"},"Adding the skeleton"),Object(l.b)("p",null,"In this file, we'll first add the skeleton information that the Ubermenu needs for our HUDModule. The following is an annotated HUDModule skeleton; add it into your ",Object(l.b)("inlineCode",{parentName:"p"},"Tutorial_Speedbar.lua"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'-- The module object contains all the information about our custom HUD module\nlocal module = {}\n\n-- The name of the module - this must be the same as the filename without .lua on the end\nmodule.name = "Tutorial_Speedbar" \n-- The module.opts object will hold all the options for users to configure in the Ubermenu\nmodule.opts = {}\n\n-- The module.draw function is where we\'ll write the drawing logic for our module\nfunction module.draw(res_x, res_y)\n\nend\n\n-- Our script should return the module at the very end of the file\nreturn module\n')),Object(l.b)("h3",{id:"drawing-hello-world"},'Drawing "Hello World"'),Object(l.b)("p",null,"Now we have the skeleton, we can make our script draw something! To test that we've set things up correctly, let's start by simply drawing the text \"Hello World\"."),Object(l.b)("p",null,"Add the following inside the ",Object(l.b)("inlineCode",{parentName:"p"},"module.draw")," function:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'drawSmallText("Hello World", rgb(255, 255, 255), 10, 10, enums.TEXT_ALIGN_LEFT, 0, 1)\n')),Object(l.b)("p",null,"This draw command will draw the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello World")," in white in the console font, at pixel position ",Object(l.b)("inlineCode",{parentName:"p"},"(10, 10)")," on the screen."),Object(l.b)("h3",{id:"testing-it-out"},"Testing it out"),Object(l.b)("p",null,"To test this out, open the game, enter Roam Map, and open up the Ubermenu. Under ",Object(l.b)("inlineCode",{parentName:"p"},"HUD Maker > Add Module"),", you should now see an entry labelled ",Object(l.b)("inlineCode",{parentName:"p"},"Tutorial Speedbar"),'. Adding this module should cause "Hello World" to appear in the top left of the screen, as in the following:'),Object(l.b)("p",null,Object(l.b)("img",{alt:"Hello world displayed on the screen",src:n(188).default})),Object(l.b)("p",null,"If adding your module caused Lua errors to display in the console, then your script is incorrect. You will have to fix your script and use ",Object(l.b)("inlineCode",{parentName:"p"},"/reloadconfig")," to reload it before you can try adding it again."),Object(l.b)("h2",{id:"part-2-writing-a-custom-speedbar-script"},"Part 2: Writing a custom speedbar script"),Object(l.b)("p",null,"You can remove the ",Object(l.b)("inlineCode",{parentName:"p"},"drawSmallText")," call from your script. We will now make the script display a custom speedbar."),Object(l.b)("h3",{id:"adding-module-options"},"Adding module options"),Object(l.b)("p",null,"First, we'll add some options for the user to set to customise the speedbar. Add the following into your script, directly under where ",Object(l.b)("inlineCode",{parentName:"p"},"module.opts")," is assigned:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"module.opts.X_Position          = 5\nmodule.opts.Y_Position          = 40\nmodule.opts.Width               = 30\nmodule.opts.Height              = 200\nmodule.opts.Max_Speed_Color     = rgb(255, 0, 0)\nmodule.opts.Min_Speed_Color     = rgb(0, 255, 196)\nmodule.opts.Background_Color    = rgba(0, 0, 0, 125)\n")),Object(l.b)("p",null,"We're adding options for the user customise the ",Object(l.b)("inlineCode",{parentName:"p"},"X")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Y")," placement of the bar, its ",Object(l.b)("inlineCode",{parentName:"p"},"Width")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Height"),", as well as the colours used."),Object(l.b)("p",null,"Note that by convention, ",Object(l.b)("inlineCode",{parentName:"p"},"X")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Y")," positions for HUDModules should represent a ",Object(l.b)("em",{parentName:"p"},"percentage")," of the screen width/height. This will allow your module to display in the same place regardless of what resolution you play the game at. For this script however, the ",Object(l.b)("inlineCode",{parentName:"p"},"Width")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Height")," will be in pixels."),Object(l.b)("h3",{id:"calculating-values"},"Calculating values"),Object(l.b)("p",null,"Now we need to write our ",Object(l.b)("inlineCode",{parentName:"p"},"module.draw")," function to actually display the speedbar. First, we need to calculate the values we need for displaying it."),Object(l.b)("p",null,"Inside ",Object(l.b)("inlineCode",{parentName:"p"},"module.draw"),", add the following statements to ensure we only draw the speedbar when the player is alive and is skiing (or is in a vehicle):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"if not hud_data.alive then return end\nif not hud_data.vehicle and not player.isSkiing() then return end\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"hud_data")," variable is provided by Ubermenu to give access to particular parts of game information (e.g. whether the player is alive) without having to call ",Object(l.b)("inlineCode",{parentName:"p"},"player.isAlive()")," yourself. Ubermenu checks the status once and exposes the value to all modules via ",Object(l.b)("inlineCode",{parentName:"p"},"hud_data")," because there may be many different modules that ",Object(l.b)("em",{parentName:"p"},"all")," need to know whether the player is alive."),Object(l.b)("p",null,"These lines will cause the ",Object(l.b)("inlineCode",{parentName:"p"},"module.draw")," function to exit early, without drawing anything, in the event the player is dead or is not skiing/in a vehicle."),Object(l.b)("p",null,"Next, we will calculate the pixel positions we will use for drawing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"-- We're using the X_Position and Y_Position options as percentages, so we need to calculate the pixel values for them\nlocal xpos = math.floor(module.opts.X_Position / 100 * res_x)\nlocal ypos = math.floor(module.opts.Y_Position / 100 * res_y)\n-- Calculating the right, bottom and middle positions of the bar for use in drawing\nlocal xright = xpos + module.opts.Width\nlocal ybottom = ypos + module.opts.Height\nlocal xmiddle = xpos + module.opts.Width / 2\n")),Object(l.b)("p",null,"Next up, we will figure out what proportion of the bar we need to fill, based on the current speed:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"-- Get the current speed\nlocal curSpeed = hud_data.vehicle and vehicle.speed() or player.speed()\nlocal minVal = 50\nlocal maxVal = 300\n-- If the user has set custom min/max values for the default speedbars, let's use those\nif skiBarMin and skiBarMax then\n    minVal = skiBarMin\n    maxVal = skiBarMax\nend\n-- Calculate the proportion of the way between minVal and maxVal that the player's speed is\n-- But we will clamp the result between 0 and 1 \nlocal pct = math.max(0, math.min(1, (curSpeed - minVal) / (maxVal - minVal)))\n")),Object(l.b)("p",null,"Finally, we'll calculate the colour of our speedbar, by linearly interpolating between the minimum speed colour and the maximum speed colour:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"local barColor = lerpColor(module.opts.Min_Speed_Color, module.opts.Max_Speed_Color, pct)\n")),Object(l.b)("h3",{id:"drawing-the-speedbars"},"Drawing the speedbars"),Object(l.b)("p",null,"Now that we've calculated the values we need, we can actually draw our speedbars. First we'll draw a background and a border for our speedbar:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"-- Draw the background\ndrawRect(xpos, ypos, xright, ybottom, module.opts.Background_Color)\n-- Draw a border\ndrawBox(xpos, ypos, xright, ybottom, barColor)\n")),Object(l.b)("p",null,"Next we'll draw the bar itself:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"drawProgressBar(xpos + 4, ypos + 4, xright - 4, ybottom - 4, barColor, 0, pct)\n")),Object(l.b)("p",null,"The above command will draw our speedbar inside our border; the second last parameter specifies the direction of the bar (the bar fills upwards in our case)."),Object(l.b)("p",null,"And finally, we'll draw the player's actual speed underneath the bar:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"textSize = getUTTextSize(curSpeed, 1)\ndrawUTText(curSpeed, barColor, xmiddle, ybottom + 2 + textSize.y / 2, enums.TEXT_ALIGN_CENTER, 1, 1)\n")),Object(l.b)("p",null,"Here we are drawing the speed using an Unreal Tournament font; we've gotten the drawing size of the text so that we can offset its Y position to prevent it clipping into the bar."),Object(l.b)("h3",{id:"testing-the-module"},"Testing the module"),Object(l.b)("p",null,"The script is now complete. Try it out in the game and fix any errors (you can see the full, correct script ",Object(l.b)("a",{parentName:"p",href:"#the-final-script"},"below"),"). It should look something like the following screenshots:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Custom speedbar displayed on the screen",src:n(189).default})),Object(l.b)("p",null,"You've now written your first HUDModule! All HUDModules should use the same skeleton as this one; you can vary the options you present and the code in the ",Object(l.b)("inlineCode",{parentName:"p"},"module.draw")," function to display other things, and combine them with other TAMods features to build more complex custom HUDs."),Object(l.b)("h2",{id:"the-final-script"},"The final script"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'local module = {}\n\nmodule.name                     = "Tutorial_Speedbar"\nmodule.opts                     = {}\nmodule.opts.X_Position          = 5\nmodule.opts.Y_Position          = 40\nmodule.opts.Width               = 30\nmodule.opts.Height              = 200\nmodule.opts.Max_Speed_Color     = rgb(255, 0, 0)\nmodule.opts.Min_Speed_Color     = rgb(0, 255, 196)\nmodule.opts.Background_Color    = rgba(0, 0, 0, 125)\n\nfunction module.draw(res_x, res_y)\n    if not hud_data.alive then return end\n    if not hud_data.vehicle and not player.isSkiing() then return end\n\n    local xpos = math.floor(module.opts.X_Position / 100 * res_x)\n    local ypos = math.floor(module.opts.Y_Position / 100 * res_y)\n    local xright = xpos + module.opts.Width\n    local ybottom = ypos + module.opts.Height\n    local xmiddle = xpos + module.opts.Width / 2\n    \n    local curSpeed = hud_data.vehicle and vehicle.speed() or player.speed()\n    local minVal = 50\n    local maxVal = 300\n    if skiBarMin and skiBarMax then\n        minVal = skiBarMin\n        maxVal = skiBarMax\n    end \n    local pct = math.max(0, math.min(1, (curSpeed - minVal) / (maxVal - minVal)))\n\n    local barColor = lerpColor(module.opts.Min_Speed_Color, module.opts.Max_Speed_Color, pct)\n    \n    drawRect(xpos, ypos, xright, ybottom, module.opts.Background_Color)\n    drawBox(xpos, ypos, xright, ybottom, barColor)\n    \n    drawProgressBar(xpos + 4, ypos + 4, xright - 4, ybottom - 4, barColor, 0, pct)\n    \n    textSize = getUTTextSize(curSpeed, 1)\n    drawUTText(curSpeed, barColor, xmiddle, ybottom + 2 + textSize.y / 2, enums.TEXT_ALIGN_CENTER, 1, 1)\nend\n\nreturn module\n')))}u.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(r,".").concat(m)]||p[m]||c[m]||l;return n?a.a.createElement(b,i(i({ref:t},d),{},{components:n})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},189:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/doc_dev_tute_hudmodule-2-86ed99172e885aa96d2523191945e554.png"}}]);