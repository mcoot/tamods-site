---
id: doc_dev_api_gameinfo
title: Game Information
sidebar_label: Game Information
---

Information about the ongoing game is available under the namespaces `game`, `player`, `weapon`, `currentWeapon`, `vehicle`, `flag`, `arena`, `rabbit`, and `cah`.

## Game

`game.type(): string `

Gets the current game type.

`game.isOfflinePlay(): boolean`

Returns true if currently in offline play (Roam Map etc.).

`game.isWarmUp(): boolean`

Returns true if the game is currently in warm-up.

`game.isOver(): boolean`

Returns true if the game has ended.

`game.time(): integer`

Gets the time remaining in the game.

`game.timeLimit(): integer`

Gets the time limit for the game in seconds (gives elapsed time in training mode).

`game.overTimeLimit(): integer`

Gets the time limit for overtime.

`game.timeStr(): string`

Gets a formatted string of the current game time.

`game.timeSeconds(): float`

Gets the time in seconds since the current game started, not counting game pauses (not terribly relevant to T:A...).

`game.realTimeSeconds(): float`

Gets the time in seconds since the current game started.

`game.score(teamNum: integer): integer`

Gets the current score for the given team (0 = BE, 1 = DS).

`game.scoreLimit(): integer`

Gets the score required to win the game.

`game.isGenUp(teamNum: integer): boolean`

Returns true if the given team's generator is up.

`game.genAutoRepairTime(teamNum: integer): integer`

Returns the time until the given team's generator auto-repairs (0 if up or auto-repair is off).

`game.players(): table`

Gets a Lua table of information about the players in the game, with keys for each possible Team (as per the Team enum described in [Data Types](doc_dev_api_datatypes.md)).

Each of the sub-tables contains the following stringkeys:

| Key         | Type    | Description                      |
|-------------|---------|----------------------------------|
| `"name"`    | string  | Player's name                    |
| `"rank"`    | integer | Player's rank                    |
| `"class"`   | string  | Player's armour class            |
| `"kills"`   | integer | Player's kills                   |
| `"assists"` | integer | Player's assists                 |
| `"score"`   | integer | Player's scores (credits earned) |
| `"ping"`    | integer | Player's ping                    |

`game.spectators(): string`

Gets the list of spectating players as a comma-separated string, with a preceding count.

Gives a result of the form: `(3) player1, player2, player3`.

## Player

`player.name(): string`

Gets the current player's name.

`player.classId(): integer`

Gets the current player's class: 1 for light, 2 for medium, 3 for heavy

`player.ping(): integer`

Gets the player's ping.

`player.isFirstPerson(): boolean`

Returns true if the player is currently viewing in first person.

`player.isVehicle(): boolean`

Returns true if the player is currently in a vehicle.

`player.teamNum(): Team`

Get the player's team number (see [Data Types](doc_dev_api_datatypes.md) for enum definition).

`player.kills(): integer`

Gets the player's kills.

`player.assists(): integer`

Gets the player's assists.

`player.deaths(): integer`

Gets the player's deaths.

`player.score(): integer`

Gets the player's current score (credits earned).

`player.arenaSpawnsLeft(): integer`

Gets the number of spawns the player has left in the Arena game type.

`player.rabbitRank(): integer`

Gets the player's rank in the Rabbit game type.

`player.isAlive(): boolean`

Returns true if the player is currently alive.

`player.respawnTime(): integer`

Gets the number of seconds left until respawn (0 if player is alive).

`player.health(): integer`

Get the player's current health.

`player.healthMax(): integer`

Get the player's maximum health.

`player.energy(): float`

Get the player's current energy.

`player.energyMax(): float`

Get the player's maximum energy.

`player.energyPct(): float`

Get the player's energy as a percentage of the maximum.

`player.speed(): integer`

Get the player's current speed.

`player.numDeployables(): integer`

Get the number of deployables the player has currently deployed.

`player.numMines(): integer`

Get the number of mines the player has currently deployed.

`player.isShielded(): boolean`

Returns true if the player is currently shielded.

`player.isRaged(): boolean`

Returns true if the player has rage.

`player.hasFlag(): boolean`

Returns true if the player has the flag.

## Weapon

`weapon.name(eqp: EquipPoint): string`

Returns the name of the weapon equipped at EquipPoint `eqp` (see [Data Types](doc_dev_api_datatypes.md) for enum definition).

`weapon.isPack(eqp: EquipPoint): boolean`

Returns true if the weapon at `eqp` is a pack item.

`weapon.isReadyToFire(eqp: EquipPoint): boolean`

Returns true if the weapon is currently ready to fire.

`weapon.isReloading(eqp: EquipPoint): boolean`

Returns true if the weapon is currently reloading.

`weapon.isPassiveReady(eqp: EquipPoint): boolean`

Returns true if the weapon has passively reloaded.

`weapon.isLowAmmo(eqp: EquipPoint): boolean`

Returns true if the weapon is low on ammo.

`weapon.reloadTime(eqp: EquipPoint): float`

Gets the reload time of the weapon (in seconds), if reloaded partway through a clip.

`weapon.reloadTimeFull(eqp: EquipPoint): float`

Gets the reload time of the weapon (in seconds), if reloaded at the end of a clip.

`weapon.ammo(eqp: EquipPoint): integer`

Gets the amount of ammo left in the clip.

`weapon.ammoMax(eqp: EquipPoint): integer`

Gets the total size of the clip.

`weapon.ammoCarried(eqp: EquipPoint): integer`

Gets the amount of spare ammo, not including the current clip.

`weapon.ammoMaxCarried(eqp: EquipPoint): integer`

Gets the maximum amount of spare ammo, not including the initial full clip.

`weapon.ammoTotal(eqp: EquipPoint): integer`

Gets the total amount of current ammo, including the current clip and spare ammo.

## CurrentWeapon

currentWeapon applies to whatever weapon the player is currently using.

`currentWeapon.name(): string`

Gets the current weapon's name.

`currentWeapon.equippedAt(): EquipPoint`

Get the equip point of the current weapon.

`currentWeapon.reticuleIndex(): ReticuleType`

`currentWeapon.isPack()`

Returns true if the current weapon is a pack item.

## Vehicle

## Flag

## Arena

## Rabbit

## CaH