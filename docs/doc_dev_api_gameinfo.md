---
id: doc_dev_api_gameinfo
title: Game Information
sidebar_label: Game Information
---

Information about the ongoing game is available under the namespaces `game`, `player`, `weapon`, `currentWeapon`, `vehicle`, `flag`, `arena`, `rabbit`, and `cah`.

## Enums

The `enums` namespace contains constants and useful enumerations, including the following enumerations of game information values.

### Team enum

Enumerates the possible values for a team number.

- `enums.TEAM_BLOOD_EAGLE` = 0
- `enums.TEAM_DIAMOND_SWORD` = 1
- `enums.TEAM_SPECTATOR` = 255 - used as a catch-all (for instance, Private Messages are considered to come from the Spectator team)

### EquipPoint enum

Enumerates the possible values for an equipment slot.

- `enums.EQUIPMENT_NONE`= 0 - null/invalid equipment slot
- `enums.EQUIPMENT_MELEE` = 1 - melee slot
- `enums.EQUIPMENT_PRIMARY` = 2 - first weapon slot
- `enums.EQUIPMENT_SECONDARY` = 3 - second weapon slot
- `enums.EQUIPMENT_TERTIARY` = 4 - third weapon slot
- `enums.EQUIPMENT_QUARTERNARY` = 5 - fourth weapon slot (no classes currently have a fourth weapon)
- `enums.EQUIPMENT_PACK` = 6 - pack item slot
- `enums.EQUIPMENT_BELT` = 7 - belt item slot
- `enums.EQUIPMENT_DEPLOYABLE` = 8 - deployed deployable slot
- `enums.EQUIPMENT_LASERTARGET` = 9 - laser targetter slot  

### ReticuleType enum

Enumerates the possible types of reticule / crosshair.

- `enums.RETICULE_TYPE_SPINFUSOR`
- `enums.RETICULE_TYPE_SMG`
- `enums.RETICULE_TYPE_RIFLE`
- `enums.RETICULE_TYPE_LOCKED_ON`
- `enums.RETICULE_TYPE_CROSSBOW`
- `enums.RETICULE_TYPE_FLAMETHROWER`
- `enums.RETICULE_TYPE_CHAINGUN`
- `enums.RETICULE_TYPE_THUMPER`
- `enums.RETICULE_TYPE_NANITE`
- `enums.RETICULE_TYPE_SHOTGUN`
- `enums.RETICULE_TYPE_UNKNOWN`
- `enums.RETICULE_TYPE_LASER`
- `enums.RETICULE_TYPE_CH_V13`
- `enums.RETICULE_TYPE_SCOPE`
- `enums.RETICULE_TYPE_PISTOL`
- `enums.RETICULE_TYPE_GRENADE_LAUNCHER`
- `enums.RETICULE_TYPE_MELEE`
- `enums.RETICULE_TYPE_SHRIKE`
- `enums.RETICULE_TYPE_SPECTATOR`
- `enums.RETICULE_TYPE_CHAIN`
- `enums.RETICULE_TYPE_BXT1`
- `enums.RETICULE_TYPE_PHASE`
- `enums.RETICULE_TYPE_SAP20`
- `enums.RETICULE_TYPE_PLASMA`

## Game

Provides information about the current on-going game.

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

Provides information about the player.

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

Get the player's team (see the Team enum definition).

`player.kills(): integer`

Gets the player's kills.

`player.assists(): integer`

Gets the player's assists.

`player.deaths(): integer`

Gets the player's deaths.

`player.score(): integer`

Gets the player's current score (credits earned). In Rabbit this gives the Rabbit score.

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

Provides information about the player's weapon loadout.

`weapon.name(eqp: EquipPoint): string`

Returns the name of the weapon equipped at EquipPoint `eqp` (see the EquipPoint enum definition.

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

Provides information about the weapon the player is currently using.

`currentWeapon.name(): string`

Gets the current weapon's name.

`currentWeapon.equippedAt(): EquipPoint`

Get the equip point of the current weapon.

`currentWeapon.reticuleIndex(): ReticuleType`

Gets the reticule type for the current weapon (see the ReticuleType enum definition).

`currentWeapon.isPack(): boolean`

Returns true if the current weapon is a pack item.

`currentWeapon.reloadTime(): float`

Get the reload time (in seconds), if the weapon is reloaded partway through a clip.

`currentWeapon.reloadTimeFull(): float`

Get the reload time (in seconds), if the weapon is reloaded at the end of a clip.

`currentWeapon.isReadyToFire(): boolean`

Returns true if the weapon is finished reloading and is ready to fire.

`currentWeapon.isReloading(): boolean`

Returns true if the weapon is currently reloading.

`currentWeapon.isReloaded(): boolean`

Returns true if the weapon has completed reloading. Note that for many weapons this happens _before_ the end of the animation (when the weapon becomes Ready To Fire). If `isReloaded()` is true but `isReadyToFire()` is false, then the weapon can be reload-cancelled.

`currentWeapon.isLowAmmo(): boolean`

Returns true if the weapon is low on ammo.

`currentWeapon.ammo(): integer`

Gets the amount of ammo left in the clip.

`currentWeapon.ammoMax(): integer`

Gets the total size of the clip.

`currentWeapon.ammoCarried(): integer`

Gets the amount of spare ammo, not including the current clip.

`currentWeapon.ammoMaxCarried(): integer`

Gets the maximum amount of spare ammo, not including the initial full clip.

`currentWeapon.ammoTotal(): integer`

Gets the total amount of current ammo, including the current clip and spare ammo.


## Vehicle

Provides information about the vehicle the player is currently piloting. Will not provide useful information if the player is not in a vehicle.

`vehicle.name(): string`

Gets the name of the current vehicle (`"Grav Cycle"`, `"Beowulf"`, or `"Shrike"`).

`vehicle.seatName(): string`

Gets the name of the seat in the vehicle the player is occupying (`"Pilot"`, `"Gunner"`, or `"Passenger"`).

`vehicle.seatIndex(): string`

Gets the index number of the seat the player is occupying.

`vehicle.seatCount(): int`

Gets the number of seats the vehicle has.

`vehicle.health(): integer`

Gets the current health of the vehicle.

`vehicle.healthMax(): integer`

Gets the maximum health of the vehicle.

`vehicle.energyPct(): float`

Gets the vehicle's current energy as a percentage of the total.

`vehicle.ammo(): integer`

Gets the amount of ammo the vehicle's weapon currently has.

`vehicle.ammoMax(): integer`

Gets the maximum ammo for the vehicle.

`vehicle.speed(): integer`

Gets the vehicle's current speed.

## Flag

Provides information about the flag in CTF.

`flag.isHome(teamNum: Team): boolean`

Returns true if the given team's flag is currently on its stand.

`flag.returnTime(teamNum: Team): integer`

Gets the number of seconds before the flag returns (`0` if flag is not loose in field).

`flag.holderName(teamNum: Team): string`

Gets the name of the player holding the given team's flag (`""` if the flag is not being held).

## Arena

Provides Arena-specific game information.

`arena.round(): integer`

Gets the current round number.

`arena.roundScore(teamNum: Team): integer`

Gets the number of lives the given team has left for this round.

`arena.playerStatus(teamNum: Team, playerNum: integer): integer`

Gets a bitmask indicating status of the given player index on the given team.

##### Bit mask specification

| Bit Position | Binary mask (least significant bits) | Description                      |
|--------------|--------------------------------------|----------------------------------|
| `1`s place   | `0001`                               | Bit on if player exists          |
| `2`s place   | `0010`                               | Bit on if player is alive        |
| `4`s place   | `0100`                               | Bit on if player has spawns left |

##### Possible values

| Value        | Description                                |
|--------------|--------------------------------------------|
| `0 = 0b0000` | Player does not exist                      |
| `1 = 0b0001` | Player exists, is not alive, has no spawns |
| `3 = 0b0011` | Player exists, is alive, has no spawns     |
| `5 = 0b0101` | Player exists, is not alive, has spawns    |
| `7 = 0b0111` | Player exists, is alive, has spawns        |

## Rabbit

Provides Rabbit-specific game information. Note that in the Rabbit game mode, `player.score()` will return the current player's Rabbit points.

`rabbit.rabbitName(): string`

Gets the name of the current rabbit.

`rabbit.leaderBoardScore(position: integer): integer`

Gets the score of one of the players on the rabbit scoreboard. `position` must be `0` (first place), `1` (second place), or `2` (third place).

`rabbit.leaderBoardName(position: integer): string`

Gets the name of the player at `position` on the rabbit scoreboard.

## CaH

Provides Capture and Hold-specific game information.

`cah.pointsNum(): integer`

Gets the number of control points on the current map.

`cah.pointsHeld(teamNum: Team): integer`

Gets the number of control points held by the given team.

`cah.pointHolder(pointIndex: integer): Team`

Gets the team which holds the point with the given index.

`cah.pointLabel(pointIndex: integer): character`

Gets the single-character label (`'A'`, `'B'` etc.) for the point with the given index.