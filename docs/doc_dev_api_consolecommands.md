---
id: doc_dev_api_consolecommands
title: Console Commands
sidebar_label: Console Commands
---

This page provides a full list of the available console commands in TAMods.

## TAMods Configuration and Scripting

| Command          | Aliases | Description                  |
|------------------|---------|------------------------------|
| `/help`          |         | Show a list of all commands  |
| `/reloadconfig`  | `/rc`   | Reload the Lua TAMods config |
| `/reloadsounds`  | `/rs`   | Reload custom sound files    |
| `/lua <command>` |         | Execute a line of Lua code   |

## Game

| Command              | Aliases             | Description                                                              |
|----------------------|---------------------|--------------------------------------------------------------------------|
| `/say <message>`     |                     | Send a global chat message                                               |
| `/teamsay <message>` |                     | Send a team chat message                                                 |
| `/playerlist`        | `/list`, `/players` | List all players in the game, with their Player IDs                      |
| `/votekickid`        |                     | Start a votekick by Player ID (avoids issues with untypeable characters) |

## Server Administration

| Command                           | Aliases                | Description                                                         |
|-----------------------------------|------------------------|---------------------------------------------------------------------|
| `/sc help`                        |                        | Display list of server commands                                     |
| `/sc select <serverid>`           |                        | Select a server                                                     |
| `/sc login <serverid> <password>` |                        | Login to a aserver                                                  |
| `/sc server status`               |                        | Show the server status                                              |
| `/sc server start`                |                        | Start the server (make it available in the server browser)          |
| `/sc server stop`                 |                        | Immediately end the match and remove the server from the browser    |
| `/sc server shutdown`             |                        | Remove the server from the browser, but don't end the current match |
| `/sc player list`                 |                        | List all players                                                    |
| `/sc player specs`                |                        | List all spectators                                                 |
| `/sc player kick <player>`        |                        | Kick the player from the server                                     |
| `/sc player ban <player>`         |                        | Ban the player from the server                                      |
| `/sc map next <mapid>`            | `/mapnext`, `/nextmap` | Set the next map in the cycle                                       |
| `/sc map start <mapid>`           | `/map`                 | Skip to the given map, or skip warm-up time if no ID is provided    |
| `/sc map end`                     |                        | End the current map                                                 |
| `/maplist`                        | `/maps`                | List all maps with their IDs                                        |

## User Settings

| Command                    | Aliases | Description                                   |
|----------------------------|---------|-----------------------------------------------|
| `/setbind <key> <command>` |         | Add a key binding                             |
| `/setsensitivity <value>`  | `/sens` | Set the mouse sensitivity                     |
| `/gamma <value>`           |         | Set the display gamma                         |
| `/shot`                    |         | Take a screenshot                             |
| `/printstats`              |         | Print the player's stats for the current game |

## Routes and Capping

### Stopwatch

| Command           | Aliases | Description                     |
|-------------------|---------|---------------------------------|
| `/stopwatch`      | `/sw`   | Toggle the stopwatch            |
| `/stopwatchstart` |         | Start (and reset) the stopwatch |
| `/stopwatchstop`  |         | Stop the stopwatch              |

### State Saving

| Command               | Aliases   | Description                                                                                                 |
|-----------------------|-----------|-------------------------------------------------------------------------------------------------------------|
| `/statesave <slot>`   | `/save`   | Save the current position to the given slot (default is 1)                                                  |
| `/statetp <slot>`     | `/tp`     | Teleport to the state in the given slot, restoring health and ammo  (default slot is 1)                     |
| `/staterecall <slot>` | `/recall` | Recall to the given state slot, restoring the velocity, health etc. at the time of save (default slot is 1) |
| `/statespawns`        | `/spawns` | Set the saved locations to the player's team's spawns                                                       |
| `/statereset`         |           | Reset all saved states                                                                                      |

### Route Recording

| Command                         | Aliases   | Description                                                                  |
|---------------------------------|-----------|------------------------------------------------------------------------------|
| `/routerec`                     | `/rec`    | Toggle route recording                                                       |
| `/routerecstart`                |           | Start route recording                                                        |
| `/routerecstop`                 |           | End route recording                                                          |
| `/routereplay`                  | `/replay` | Begin route replay                                                           |
| `/routereplaystart <starttime>` |           | Start route replay at the given point of the route (or the start by default) |
| `/routereplaystop`              |           | End route replay                                                             |
| `/routebot <on|off>`            |           | If `on`, replay is performed by a bot rather than by the player              |
| `/routereset`                   |           | Stop recording and reset the current route                                   |
| `/routesave <description>`      |           | Save the current route with the given description                            |
| `/routeload <number>`           |           | Load a route by number                                                       |
| `/routefind <searchstring>`     |           | Find the routes on the current map that match the search string              |
| `/routelist`                    | `/routes` | List all routes for the current map                                          |

## Roam Map

The below commands only work in roam map mode.

| Command          | Aliases    | Description                       |
|------------------|------------|-----------------------------------|
| `/toggleturrets` | `/turrets` | Toggle base turrets on and off    |
| `/togglepower`   | `/power`   | Toggle generator power on and off |
| `/returnflags`   | `/flags`   | Return loose flags to base        |