---
id: doc_srv_api_admin
title: Server Administration
sidebar_label: Server Administration
sidebar_position: 2
---

TAMods-Server does not yet support the `/sc` commands used to run administrative commands on official servers. Support for this may come in future, but TAMods-Server has its own administration system.

## Roles

The admin system is based on defining _roles_ which are attached to a set of commands they are permitted to run. Additionally, roles may have the `canExecuteLua` permission, which allows them to execute raw Lua on the server. Giving this permission to untrusted roles is dangerous, as users are effectively allowed to execute arbitrary code.

To create and remove roles, you can use the functions:

`Admin.Roles.add(name: string, password: string, canExecuteLua: boolean)`

This adds a role with the given name and password, and defines whether this role has the `canExecuteLua` permission.

You can also create a "loginless" role, which uses a list of allowed users instead of a password. When a member of a role joins a server, they will automatically be logged into the role. Unverified users can not be added to a loginless role.

```
Admin.Roles.addLoginlessRole(roleName: string, canExecuteLua: boolean)
Admin.Roles.addMember(roleName: string, userName: string)
```
Note that `addMember()` will only work if the role was created with `addLoginlessRole()`.

To remove a role:


`Admin.Roles.remove(name: string)`

This removes the role with the given name from the pool of roles that a user may log into. It does not immediately log any users out of that role.

`Admin.Roles.addAllowedCommand(rolename: string, commandname: string)`

This adds permission for the role to execute the given command.

`Admin.Roles.removeAllowedCommand(rolename: string, commandname: string)`

This removes permission for the role to execute the given command.

### Example

This example creates an admin role that can execute Lua commands, and gives it permission to access a command we've defined with the name `NextMap`.

```lua
Admin.Roles.add("admin", "secretpassword", true)
Admin.Roles.addAllowedCommand("admin", "NextMap")
```

## Defining Commands

The commands that roles may be granted permissions for are defined in Lua, using:

`Admin.Command.define(commandname: string, arguments: ArgumentDefinition, func: Function)`

Users will call your command in-game with `/srvcmd <commandname> <arguments>`. Definition of the arguments and command function are described in the below section.

### Argument Definition

The `arguments` parameter to the command definition function allows you to provide names for each argument the user will provide to the command, and give them a _type_ (boolean, integer, floating point or string) to validate user input against. When the user calls the command, if the arguments they provide do not match the order and type you specify, they will be shown an error message.

A command may have at most six arguments.

The ArgumentDefinition must be an array (i.e. a Lua table with 1-indexed integer keys), where each element is a two-element array (also a table) defining the name and type of the argument. An example of an ArgumentDefinition for a 'set next map' command with one parameter might be:

```lua
{
    {"mapId", Admin.Command.ArgumentType.Int},
}
```

#### Valid Argument Types

- `Admin.Command.ArgumentType.Boolean`
- `Admin.Command.ArgumentType.Int`
- `Admin.Command.ArgumentType.Float`
- `Admin.Command.ArgumentType.String`

### Command Function

The function you provide as the final argument to the command definition is the name of a Lua function to call when a player executes the command.

This function will be passed two arguments - the name of the player executing the command, and the role they are logged in as - plus an additional argument for every defined command argument. So if you defined three command arguments, the Lua function should have five arguments.

So for instance, for a 'set next map' command, the Lua function definition might be:

```lua

function setNextMapCommand(playerName, roleName, mapId)
    Admin.Game.NextMap(mapId)
    Admin.SendConsoleMessageToPlayer(playerName, "Set next map to " .. mapId)
end

```

### Complete Command Definition Example

```lua
local nextMapParams = {
    {"mapId", Admin.Command.ArgumentType.Int},
}

local function setNextMapCommand(playerName, roleName, mapId)
    Admin.Game.NextMap(mapId)
    Admin.SendConsoleMessageToPlayer(playerName, "Set next map to " .. mapId)
end

Admin.Command.define("NextMap", nextMapParams, setNextMapCommand)
```

## Running Commands

The admin system is currently only accessible from a client running TAMods. Clientside TAMods exposes the following server commands that may be run at the console:

`/srvlogin <role> <password>`

This attempts to log into the server you are currently in with the given role and password name. The server will respond with a console message on success or failure.

`/srvlua <lua>`

This attempts to run a Lua statement on the server. This will fail if you are not currently logged into a role with permission to execute Lua.

Using the `/srvlua` command you can run _any_ valid TAMods-Server Lua statement, including to modify a server setting or change a game balance modification. Some Lua actions and settings will not take place until the next map switch. In addition, running these commands does not modify your config on-disk and so will not persist between server restarts.

You should be very careful in defining roles with permission to execute Lua commands, as this gives them access to run _any_ Lua command. Running an invalid Lua command could crash the server - or worse, it could allow compromise of the computer the server is running on (since Lua can be used to interact with the filesystem!).

`/srvcmd <command> <arguments>`

This attempts to run a defined command with the given arguments on the server. It will fail if the command doesn't exist, your current role does not have access to the command, or the arguments are invalid.

Defining commands and explicitly allowing roles to execute them is safer than granting raw Lua access.

## Administrative Lua Functionality

The following Lua functions exist which are primarily useful as Lua commands to be run via the admin interface. They _can_ be run from a config file but are generally not useful in that context.

### Messaging

`Admin.SendConsoleMessageToAllPlayers(message: string)`

Sends a message to all connected modded clients which will appear in their console.

`Admin.SendConsoleMessageToPlayer(playername: string, message: string)`

Sends a message to a specific connected modded player which will appear in their console.

`Admin.SendGameMessageToAllPlayers(message: string, time: float)`

Sends a message to all connected modded clients which appears in the HUD, lasting for the specified time in seconds. This may not appear for players who have disabled certain HUD elements.

### Map Changes

`Admin.Game.StartMap()`

Force-starts the current map if in warmup.

`Admin.Game.NextMapById(map: Map)`

Overrides the map rotation such that at the next map switch, the map will be the one specified. The map should be a valid map definition as per the [Server Configuration page](doc_srv_api_serverconfig.md#maps).

`Admin.Game.NextMapByFilename(mapname: string)`

Overrides the map rotation such that at the next map switch, the map will be the one specified. The map should be the exact filename of a default or custom map without an extension, e.g. `TrCTF-ArxNovena`. The list of available maps can be found in your Tribes install in the `CookedPC/Maps` directory and its subdirectories.

`Admin.Game.EndMap()`

Forcibly ends the current map.

### Example

This example is run as a series of console commands from a client connected to the server, to set the next map and then swap to it.

```
/srvlogin admin secretpassword
/srvlua Admin.Game.NextMap(Maps.CTF.ArxNovena)
/srvlua Admin.Game.EndMap()
```