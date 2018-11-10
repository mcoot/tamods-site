---
id: doc_srv_api_admin
title: Server Administration
sidebar_label: Server Administration
---

TAMods-Server does not yet support the `/sc` commands used to run administrative commands on official servers. Support for this may come in future, but TAMods-Server has its own administration system.

## Roles

The admin system is based on defining _roles_ which are attached to a set of permissions. This system is currently very limited, as there is only one permission that can be given; in future it may be expanded to allow defining permissions such that you could have, for example, an "admin" role and a "moderator" role with different sets of permissions.

To create and remove roles, you can use the functions:

`Admin.Roles.add(name: string, password: string, canExecuteLua: boolean)`

This adds a role with the given name and password, and defines whether this role has the `canExecuteLua` permission.

`Admin.Roles.remove(name: string)`

This removes the role with the given name from the pool of roles that a user may log into. It does not immediately log any users out of that role.

### Example

This example creates an admin role that can execute Lua commands.

```lua
Admin.Roles.add("admin", "secretpassword", true)
```

## Running Commands

The admin system is currently only accessible from a client running TAMods. Clientside TAMods exposes the following server commands that may be run at the console:

`/srvlogin <role> <password>`

This attempts to log into the server you are currently in with the given role and password name. The server will respond with a console message on success or failure.

`/srvlua <lua>`

This attempts to run a Lua statement on the server. This will fail if you are not currently logged into a role with permission to execute Lua.

Using the `/srvlua` command you can run _any_ valid TAMods-Server Lua statement, including to modify a server setting or change a game balance modification. Some Lua actions and settings will not take place until the next map switch. In addition, running these commands does not modify your config on-disk and so will not persist between server restarts.

You should be very careful in defining roles with permission to execute Lua commands, as this gives them access to run _any_ Lua command. Running an invalid Lua command could crash the server - or worse, it could allow compromise of the computer the server is running on (since Lua can be used to interact with the filesystem!).

## Administrative Commands

The following Lua functions exist which are primarily useful as Lua commands to be run via the admin interface. They _can_ be run from a config file but are generally not useful in that context.

### Messaging

`Admin.SendConsoleMessageToAllPlayers(message: string)`

Sends a message to all connected modded clients which will appear in their console.

`Admin.SendGameMessageToAllPlayers(message: string, time: float)`

Sends a message to all connected modded clients which appears in the HUD, lasting for the specified time in seconds. This may not appear for players who have disabled certain HUD elements.

### Map Changes

`Admin.Game.StartMap()`

Force-starts the current map if in warmup.

`Admin.Game.NextMap(map: Map)`

Overrides the map rotation such that at the next map switch, the map will be the one specified. The map should be a valid map definition as per the [Server Configuration page](doc_srv_api_serverconfig.md#maps).

`Admin.Game.EndMap()`

Forcibly ends the current map.

### Example

This example is run as a series of console commands from a client connected to the server, to set the next map and then swap to it.

```
/srvlogin admin secretpassword
/srvlua Admin.Game.NextMap(Maps.CTF.ArxNovena)
/srvlua Admin.Game.EndMap()
```