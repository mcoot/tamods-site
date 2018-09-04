---
id: doc_srv_api_serverconfig
title: Server Settings
sidebar_label: Server Settings
---

## Server Settings

### Enums

#### TeamAssignTypes

The `TeamAssignTypes` enum represents the possible approaches to team assignment. It has the values:

- `Balanced` - players are restricted to join teams so that each team has a balanced number of players
- `Unbalanced` - players are free to join either team irrespective of numbers
- `AutoAssign` - players are automatically assigned to teams

### Options

#### Time Limits and Respawn Time

| Variable                          | Type | Default | Description                                                         |
|-----------------------------------|------|---------|---------------------------------------------------------------------|
| ServerSettings.TimeLimit          | int  | 25      | Game time limit in minutes                                          |
| ServerSettings.OvertimeLimit      | int  | 10      | Length of overtime in minutes                                       |
| ServerSettings.WarmupTime         | int  | 20      | Length of warmup time in seconds                                    |
| ServerSettings.RespawnTime        | int  | 5       | Respawn time in seconds                                             |
| ServerSettings.SniperRespawnDelay | int  | 0       | Additional respawn time incurred when the player has a sniper rifle |

#### Team Options

| Variable                        | Type           | Default                  | Description                                                           |
|---------------------------------|----------------|--------------------------|-----------------------------------------------------------------------|
| ServerSettings.MaxPlayers       | int            | 32                       | Maximum server player count                                           |
| ServerSettings.TeamAssignType   | TeamAssignType | TeamAssignTypes.Balanced | How players should be assigned to teams                               |
| ServerSettings.NakedSpawn       | boolean        | false                    |  Whether players should spawn naked (as lights without their loadout) |
| ServerSettings.AutoBalanceTeams | boolean        | true                     | Whether to auto-balance teams in-game                                 |

#### Scoring Options

| Variable                            | Type    | Default | Description                                         |
|-------------------------------------|---------|---------|-----------------------------------------------------|
| ServerSettings.CTFCapLimit          | int     | 5       | Caps to win in CTF                                  |
| ServerSettings.TDMKillLimit         | int     | 100     | Kills to win in TDM                                 |
| ServerSettings.ArenaRounds          | int     | 3       | Number of rounds in Arena                           |
| ServerSettings.ArenaLives           | int     | 25      | Number of lives per round in Arena                  |
| ServerSettings.RabbitScoreLimit     | int     | 30      | Score to win in Rabbit                              |
| ServerSettings.CaHScoreLimit        | int     | 50      | Score to win in Capture and Hold                    |
| ServerSettings.CTFBlitzAllFlagsMove | boolean | false   | Whether both teams' flags move after a cap in Blitz |

#### Friendly Fire

| Variable                                   | Type    | Default | Description                                                               |
|--------------------------------------------|---------|---------|---------------------------------------------------------------------------|
| ServerSettings.FriendlyFire                | boolean | false   | Whether friendly fire is enabled                                          |
| ServerSettings.FriendlyFireMultiplier      | float   | 1.0     | Multiplier for friendly fire damage                                       |
| ServerSettings.FriendlyFireDamageKickLimit | int     | 0       | Amount of friendly damage done before a player is kicked (0 for no limit) |
| ServerSettings.FriendlyFireKillKickLimit   | int     | 0       | Number of friendly players killed before kick (0 for no limit)            |
| ServerSettings.BaseDestructionKickLimit    | int     | 0       | Amount of damage to the friendly base done before kick (0 for no limit)   |

#### Vehicles

| Variable                               | Type  | Default | Description                                |
|----------------------------------------|-------|---------|--------------------------------------------|
| ServerSettings.VehicleHealthMultiplier | float | 1.0     | Multiplier affecting all vehicles' health  |
| ServerSettings.GravCycleLimit          | int   | 4       | Number of Grav Cycles allowed per team     |
| ServerSettings.ShrikeLimit             | int   | 2       | Number of Shrikes allowed per team         |
| ServerSettings.BeowulfLimit            | int   | 2       | Number of Beowulfs allowed per team        |
| ServerSettings.GravCycleSpawnTime      | int   | 30      | Generation time for Grav Cycles in seconds |
| ServerSettings.ShrikeSpawnTime         | int   | 120     | Generation time for Shrikes in seconds     |
| ServerSettings.BeowulfSpawnTime        | int   | 120     | Generation time for Beowulfs in seconds    |

#### Base

| Variable                              | Type    | Default | Description                                                |
|---------------------------------------|---------|---------|------------------------------------------------------------|
| ServerSettings.BaseAssets             | boolean | true    | Whether turrets and sensors are enabled                    |
| ServerSettings.BaseUpgrades           | boolean | true    | Whether base upgrades are enabled                          |
| ServerSettings.PoweredDeployables     | boolean | true    | Whether deployables (e.g. turrets) require generator power |
| ServerSettings.GeneratorRegen         | boolean | false   | Whether the generator regenerates automatically over time  |
| ServerSettings.GeneratorDestroyable   | boolean | true    | Whether the generator can be destroyed                     |
| ServerSettings.BaseAssetFriendlyFire  | boolean | false   | Whether friendly fire applies to base assets               |
| ServerSettings.DeployableFriendlyFire | boolean | false   | Whether friendly fire applies to deployables               |

#### Gameplay Customisation

| Variable                           | Type    | Default | Description                                                       |
|------------------------------------|---------|---------|-------------------------------------------------------------------|
| ServerSettings.EnergyMultiplier    | float   | 1.0     | Multiplier affecting the energy pools of all players              |
| ServerSettings.AoESizeMultiplier   | float   | 1.0     | Multiplier affecting the size of all Area-of-Effect explosions    |
| ServerSettings.AoEDamageMultiplier | float   | 1.0     | Multiplier affecting the damage done by Area-of-Effect explosions |
| ServerSettings.SkiingEnabled       | boolean | true    | Whether skiing is enabled                                         |

#### Flag Drag

| Variable                            | Type | Default | Description                                 |
|-------------------------------------|------|---------|---------------------------------------------|
| ServerSettings.FlagDragLight        | int  | 0       | Speed at which flag-drag occurs for lights  |
| ServerSettings.FlagDragMedium       | int  | 0       | Speed at which flag-drag occurs for mediums |
| ServerSettings.FlagDragHeavy        | int  | 0       | Speed at which flag-drag occurs for heavies |
| ServerSettings.FlagDragDeceleration | int  | 0       | Deceleration rate for flag-drag             |

## Loadouts

### Equip Points

Weapons and items must be equipped at 'item slots' or _equip points_; the Equip Points enum gives the possible slots at which an item may be equipped.

The available equip points are listed below. Note that not all equip points are fully functional in the current version of the game (e.g. perks).

- `Loadouts.EquipPoints.None` (Invalid equip point which will not apply a weapon)
- `Loadouts.EquipPoints.Melee`
- `Loadouts.EquipPoints.Primary`
- `Loadouts.EquipPoints.Secondary`
- `Loadouts.EquipPoints.Tertiary`
- `Loadouts.EquipPoints.Quarternary`
- `Loadouts.EquipPoints.Pack`
- `Loadouts.EquipPoints.Belt`
- `Loadouts.EquipPoints.Deployable`
- `Loadouts.EquipPoints.LaserTarget`
- `Loadouts.EquipPoints.Armor`
- `Loadouts.EquipPoints.PerkA`
- `Loadouts.EquipPoints.PerkB`
- `Loadouts.EquipPoints.Skin`
- `Loadouts.EquipPoints.Voice`

### Hardcoded Loadouts

The server admin can specify a set of hardcoded loadouts, which will be used as a fallback if the player's own selected loadouts cannot be retrieved - usually because the server is running standalone (not connected to a TAServer login server). Alternately these can be used to override a player's selected loadout with the `ServerSettings.ForceHardcodedLoadouts` option.

Nine loadouts, numbered `0` to `8` (corresponding to Loadouts `A` through `I` in-game) can be set for each class, via the following class of functions:

`Loadouts.Hardcoded.<ClassType>.set(loadoutNumber: integer, equipPoint: EquipPoint, itemName: string)`

Getter functions are also provided:

`Loadouts.Hardcoded.<ClassType>.get(loadoutNumber: integer, equipPoint: EquipPoint): string`

The `<ClassType>` should be one of `Light`, `Medium` or `Heavy`, as in the following example:

```lua
Loadouts.Hardcoded.Light.set(0, Loadouts.EquipPoints.Primary, "Light Spinfusor")
Loadouts.Hardcoded.Medium.set(3, Loadouts.EquipPoints.Belt, "EMP Grenades")
Loadouts.Hardcoded.Heavy.set(8, Loadouts.EquipPoints.Pack, "Forcefield")
```

#### Forcing Hardcoded Loadouts

Via the `ForceHardcodedLoadouts` server setting, it is possible to have server-side hardcoded loadouts take precedence over player-selected ones (rather than them being a fallback). This may be useful if you want to restrict players to _only_ using specific loadouts.

| Variable                              | Type    | Default | Description                                                                                |
|---------------------------------------|---------|---------|--------------------------------------------------------------------------------------------|
| ServerSettings.ForceHardcodedLoadouts | boolean | false   | If true, game server hardcoded loadouts will take precedence over player selected loadouts |

## Limits and Bans

TAMods-Server allows for limiting class numbers, banning weapons, and also restricting the available equip points (i.e. item slots) for players.

### Class Limits

| Variable                        | Type | Default | Description                                |
|---------------------------------|------|---------|--------------------------------------------|
| ServerSettings.LightCountLimit  | int  | 32      | Maximum number of lights allowed per team  |
| ServerSettings.MediumCountLimit | int  | 32      | Maximum number of mediums allowed per team |
| ServerSettings.HeavyCountLimit  | int  | 32      | Maximum number of heavies allowed per team |

### Weapon Bans

Weapon bans can be added or removed via the following functions:

`BannedItems.add(class: string, itemName: string)`

`BannedItems.remove(class: string, itemName: string)`

So for instance, to ban the Light Spinfusor, the Assault Rifle and the Nova Colt, you would use:

```lua
BannedItems.add("Light", "Light Spinfusor")
BannedItems.add("Medium", "Assault Rifle")
BannedItems.add("Heavy", "Nova Colt")
```

### Equipment Slots

You can also restrict the equipment slots available based on class. This can be used to, for instance, give the Light class two weapons rather than three, or to ban grenades. The equip point is selected using the [Equip Points](#equip-points) enum.

`DisabledEquipPoints.add(class: string, equipPoint: EquipPoint)`

`DisabledEquipPoints.remove(class: string, equipPoint: EquipPoint)`

So to give Lights and Mediums two weapons rather than three, you would use:

```lua
DisabledEquipPoints.add("Light", Loadouts.EquipPoints.Tertiary)
DisabledEquipPoints.add("Medium", Loadouts.EquipPoints.Tertiary)
```

## Map Rotation

### Rotation Mode

The map rotation is either _sequential_ (default), where each map is played in the order they are added to the rotation, or _random_, where after each map a new map is selected at random from the rotation (this can be the same map).

This can be controlled via the following variable:

`MapRotation.Mode`

This should have one of the following values:
- `MapRotation.Modes.Sequential`
- `MapRotation.Modes.Random`

### Setting the Rotation

The rotation itself may be controlled via the below functions:

`MapRotation.add(map: Map)`

Adds a map to the rotation. The map should be a value from the [Maps enum](#maps)

`MapRotation.addCustom(mapName: string)`

Adds a map to the rotation by filename (as located in the game's CookedPC/maps directory). Can be used to run a custom map.

An example of adding maps to the rotation is given below:

```lua
MapRotation.add(Maps.CTF.ArxNovena)
MapRotation.add(Maps.TDM.DrydockNight)
MapRotation.add(Maps.Arena.WalledIn)
MapRotation.addCustom("TrCTF-Katabatic")
```

### Maps

The Maps enum gives values (i.e. map codes) for all maps existing in the game, under the following namespaces:

- `Maps.CTF`
- `Maps.TDM`
- `Maps.Arena`
- `Maps.Rabbit`
- `Maps.CaH`
- `Maps.Blitz`

The full listing is omitted here, but the full names of all maps work, as do common contractions and initialisms (e.g. `Maps.CTF.Arx` or `Maps.CTF.DX`).