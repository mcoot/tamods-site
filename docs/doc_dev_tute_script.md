---
id: doc_dev_tute_script
title: Tutorial - Writing a Script
sidebar_label: Tutorial - Writing a Script
---

This tutorial will cover writing your first TAMods script, to add useful keybinds for TAMods' Route Recordings function.

It is assumed that you already have TAMods installed and have the Ubermenu preset working.

## Part 1: Setting up your script

To get started, navigate to your config directory - `<Documents>\My Games\Tribes Ascend\TribesGame\config`. It should contain your Tribes config files, as well as TAMods' configuration files. Create two new files in the config directory: `custom.lua` and `route_binds.lua`, and open both in your favourite text editor.

### Creating a "Hello World" script

In `route_binds.lua`, we're going to add a simple "Hello World" message which will be printed when the script is loaded. Enter the following into `route_binds.lua`:

```lua
console("Hello World")
```

Since we just included the `console` command in the raw script, it will be executed as soon as TAMods loads it. But currently, it won't be called at all because TAMods doesn't know it needs to load the `route_binds.lua` file.

The `custom.lua` file is special: on load TAMods will first run the `config.lua` script, and then run `custom.lua`. Hence, any custom scripts you write should be called from `custom.lua`.

To call our `route_binds.lua` script and ensure it is run, add the following into `custom.lua`:

```lua
require("route_binds")
```

### Testing your setup

The script we have should print `Hello World` into the console when TAMods loads its configuration. To test this, run the game and ensure TAMods is injected; then, enter Roam Map (any map). Since you were not in a game when you first injected TAMods, you'll have to reload your config by entering the `/reloadconfig` command in the console. Once you do so, you should see text which looks similar to the following in your console:

![Hello world printed in the console](\img\docs\doc_dev_tute_script-1.png)

If you see errors in your console, or the `Hello World` text was not printed, make sure your `route_binds.lua` and `custom.lua` are exactly as in the above section, and that TAMods is properly injected.

Once you see this message, you've successfully loaded a custom script into TAMods! Now we can write a script to actually do something useful. Note that you don't have to restart the game when you edit your script: you can leave the game running in the background, and use the `/reloadconfig` command to load the new version of your script after you edit it.

## Part 2: Route recordings bindings

We have a custom TAMods script being loaded into the game, but at present all it does is print `Hello World`. Instead, we're going to use this script to add keybinds to help with accessing TAMods route recordings. Specifically, we're going to have binds to cycle through the routes available to us, and to save and teleport back to positions in Roam Map mode.

We need to do two things to achieve this: first, write some logic to allow us to keep track of the loaded route and switch between them, and second, add keybindings to trigger those functions.

Feel free to remove the `console("Hello World")` call from your `route_binds.lua` at this point.

### Writing functions to switch routes

From here on we only need to edit `route_binds.lua`. We'll need to keep track of which route number we currently have loaded; to do this we'll keep a global variable around. Add the following to the script:

```lua
curRoute = 0
```

We're initialising our current route state to zero (no valid route) on config load.

Then, we need a function to load the next route. The following is an annotated definition for the function; add it to your `route_binds.lua`:

```lua
-- Defining a function which will load the next routes
function loadNextRoute()
    -- Get the number of routes for the current map on the player's team
	numRoutes = route.getTeam()
    
    if numRoutes < 1 then
        -- We can't load routes if there aren't any available
		console("No routes :(")
    elseif curRoute >= numRoutes then
        -- If we've reached the end of the routes, loop back to the first one
		curRoute = 1
    else
        -- Otherwise, select the next route
		curRoute = curRoute + 1
    end
    -- Load the new route
	route.load(curRoute)
end
```

Add a similar definition for a function to load the previous route:

```lua
function loadPrevRoute()
	numRoutes = route.getTeam()
	
	if numRoutes < 1 then
		console("No routes :(")
	elseif curRoute <= 1 then
		curRoute = numRoutes
	else
		curRoute = curRoute - 1
	end
	route.load(curRoute)
end
```

At this point, we have functions defined to perform route switching, but we don't have any way to call them.

### Adding keybindings

To actually be able to use these functions in-game, we need to bind them to keys, using TAMods' `bindKey` function.

We can add binds for our functions as follows:

```lua
-- Bind the numpad plus key to switch to the next route
bindKey("Add", Input.PRESSED, loadNextRoute)
-- Bind the numpad minus key to switch to the previous route
bindKey("Subtract", Input.PRESSED, loadPrevRoute)
-- Bind the numpad zero key to reset the route (to display no route)
bindKey("NumPadZero", Input.PRESSED, route.reset)
```

Here we're creating keybinds for the numpad plus and minus keys; when these are pressed, the `loadNextRoute` and `loadPrevRoute` functions will be called, respectively. We've also added a third bind to the built-in `route.reset()` function, which unloads the current route. These can be changed to whatever keys you like (see the list of keys [here](https://wiki.unrealengine.com/List_of_Key/Gamepad_Input_Names)).

For good measure, let's add key bindings for two more built-in functions: `state.save()`, which saves your current position, and `state.tp()` which teleports you back to the saved position. These features will only function in Roam Map.

```lua
-- Bind the multiply and divide numpad keys to save/teleport to a position
bindKey("Multiply", Input.PRESSED, state.save)
bindKey("Divide", Input.PRESSED, state.tp)
```

### Testing it out

The script is now complete. If your game is still open, use `/reloadconfig` to reload the script; otherwise start the game up and inject TAMods. If `/reloadconfig` shows Lua errors, then your script is not correct - ensure it matches the segments above (or the [final script below](#the-final-script)).

Once the script loads, try pressing the Numpad Plus and Minus keys while in Roam Map. If you're in a CTF map which has route files, you should see it switch between the available routes. If you're on a map / team with no route file (or not in a CTF map), the console should show a `No routes :(` message. Also try out reseting the route with Numpad Zero, and saving / teleporting to states with Multiply and Divide.

## Where to go from here

So you've written your first script. From here, you can take a look at the [Hudmodule tutorial](doc_dev_tute_hudmodule.md) for information on writing Ubermenu-compatible custom HUD components. Or, take a look at the [API reference](doc_dev_api_overview.md) to see the tools you have at your disposal for writing custom scripts.

## The final script

```lua
-- Global variable to keep track of the current route
curRoute = 0

-- Switches to the next route
function loadNextRoute()
	numRoutes = route.getTeam()
	
	if numRoutes < 1 then
		console("No routes :(")
	elseif curRoute >= numRoutes then
		curRoute = 1
	else
		curRoute = curRoute + 1
	end
	route.load(curRoute)
end

-- Switches to the previous route
function loadPrevRoute()
	numRoutes = route.getTeam()
	
	if numRoutes < 1 then
		console("No routes :(")
	elseif curRoute <= 1 then
		curRoute = numRoutes
	else
		curRoute = curRoute - 1
	end
	route.load(curRoute)
end

-- Route binds

-- Bind the numpad plus key to switch to the next route
bindKey("Add", Input.PRESSED, loadNextRoute)
-- Bind the numpad minus key to switch to the previous route
bindKey("Subtract", Input.PRESSED, loadPrevRoute)
-- Bind the numpad zero key to reset the route (to display no route)
bindKey("NumPadZero", Input.PRESSED, route.reset)
-- Bind the multiply and divide numpad keys to save/teleport to a position
bindKey("Multiply", Input.PRESSED, state.save)
bindKey("Divide", Input.PRESSED, state.tp)
```