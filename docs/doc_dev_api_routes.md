---
id: doc_dev_api_routes
title: Capping and Route Recording
sidebar_label: Capping and Route Recording
---

## Stopwatch

TAMods offers a built-in stopwatch feature, useful for timing capping routes.

#### Configuration Variables

| Variable                 | Type    | Default | Description                                                                  |
|--------------------------|---------|---------|------------------------------------------------------------------------------|
| `stopwatchStopOnCap`     | boolean | false   | Whether the stopwatch should stop when the flag is capped                    |
| `stopwatchStopOnDeath`   | boolean | true    | Whether the stopwatch should stop when the player dies                       |
| `stopwatchNotifications` | boolean | true    | Whether to show dropdown notifications for the stopwatch on flag pickup etc. |

#### Functions

These functions in the `stopwatch` namespace correspond to console commands, accessible via the Lua API to allow for keybinding.

`stopwatch.start()`

Start (and reset) the stopwatch.

`stopwatch.stop()`

End the stopwatch.

`stopwatch.toggle()`

Start the stopwatch if it is stopped; stop it otherwise.

`stopwatch.isRunning(): boolean`

Returns true if the stopwatch is running.

`stopwatch.time(): float`

Get the time on the stopwatch in seconds.

`stopwatch.timeStr(): string`

Get the time on the stopwatch as a formatted string.

## State Saving

The state functions allow for the saving of specific locations on the map, and recalling / teleporting to them (in roam map only).

#### Configuration Variables

| Variable                   | Type    | Default | Description                                                      |
|----------------------------|---------|---------|------------------------------------------------------------------|
| `showSavedLocations`       | boolean | true    | Whether to display markers for saved state locations in roam map |

#### Functions

These functions in the `state` namespace correspond to console commands, accessible via the Lua API to allow for keybinding.

`state.save()`

Save the current player position into the default (first) save slot.

`state.saveTo(slot: integer)`

Save the current player position into the given slot (`1 <= slot <= 9`).

`state.tp()`

Teleport to the default (first) saved state, restoring position only.

`state.tpTo(slot: integer)`

Teleport to the given saved state, restoring position only.

`state.recall()`

Recall to the default (first) saved state, restoring not just position but complete state at that time (e.g. health, energy, velocity, flag status).

`state.recallTo(slot: integer)`

Recall to the given saved state, restoring not just position but complete state at that time (e.g. health, energy, velocity, flag status).

`state.reset()`

Remove all saved states.

`state.setToSpawns()`

Set saved states to the team's spawn locations.

## Route Recording

#### Configuration Variables

| Variable                | Type    | Default | Description                                                        |
|-------------------------|---------|---------|--------------------------------------------------------------------|
| `routeDrawInterval`     | integer | 500     | How frequently to draw markers on recorded routes, in milliseconds |
| `routeDrawETAInterval`  | integer | 5       | How frequently to draw route times, in seconds                     |
| `routeDrawTransparency` | float   | 0.8     | The transparency of route markers                                  |
| `routeReplayRotation`   | boolean | true    | Whether to rotation the player/bot view during route replay        |
| `routeCinematicMode`    | boolean | false   | Whether to adjust route replay to be smoother                      |

#### Functions

These functions in the `route` namespace correspond to console commands, accessible via the Lua API to allow for keybinding.

##### Recording

`route.record()`

Toggle route recording (aliased to `route.rec()`).

`route.recStart()`

Start route recording.

`route.recStop()`

End route recording.

`route.reset()`

Reset the current route. Stops any on-going recording.

##### Replay

Route replay is only available in roam map.

`route.replay()`

Toggle in-game replay of the current route.

`route.replayStart(startTime: float)`

Start in-game replay of the current route at the given time in the route.

`route.replayStop()`

Stop replay of the current route.

`route.enableBot(on: boolean)`

Enable or disable bot replay. If bot replay is off, replaying a route will replay from the player's perspective.

##### Loading / Saving

`route.getAll()`

Load all route files for the current map into the game.

`route.getTeam()`

Load only route files for the player's current team on the current map.

`route.getEnemy()`

Load only route file for the opposing team on the current map.

`route.getTable(): List<string>`

Get a Lua table containing all currently loaded route names (in the form of a 0-indexed list).

`route.save(description: string)`

Save the current route, with the given route name / description. Details about the map, team, player class, player name, route length etc. will be automatically saved.

`route.load(routeNumber: integer)`

Set the current route to the given numbered route in the listings for the current map.

`route.find(regex: string)`

Find loaded routes matching the given regex, and print them to the console. Aliased to `route.search(regex: string)`.

`route.list()`

List all loaded routes to the console.