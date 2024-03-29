---
id: doc_srv_api_serverconfig
title: Server Settings
sidebar_label: Server Settings
sidebar_position: 1
---

## Server Settings

### Enums

#### TeamAssignTypes

The `TeamAssignTypes` enum represents the possible approaches to team assignment. It has the values:

- `Balanced` - players are restricted to join teams so that each team has a balanced number of players
- `Unbalanced` - players are free to join either team irrespective of numbers
- `AutoAssign` - players are automatically assigned to teams

### Options

#### Timing

| Variable                          | Type | Default | Description                                                         |
| --------------------------------- | ---- | ------- | ------------------------------------------------------------------- |
| ServerSettings.TimeLimit          | int  | 25      | Game time limit in minutes                                          |
| ServerSettings.OvertimeLimit      | int  | 10      | Length of overtime in minutes                                       |
| ServerSettings.WarmupTime         | int  | 20      | Length of warmup time in seconds                                    |
| ServerSettings.RespawnTime        | int  | 5       | Respawn time in seconds                                             |
| ServerSettings.SniperRespawnDelay | int  | 0       | Additional respawn time incurred when the player has a sniper rifle |
| ServerSettings.AmmoPickupLifespan | int  | 15      | Time in seconds that ammo pickups dropped by dead players last      |
| ServerSettings.CTFFlagTimeout     | int  | 40      | Time in seconds before a dropped flag will return to base           |

#### Team Options

| Variable                        | Type           | Default                  | Description                                                           |
|---------------------------------|----------------|--------------------------|-----------------------------------------------------------------------|
| ServerSettings.MaxPlayers       | int            | 32                       | Maximum server player count                                           |
| ServerSettings.TeamAssignType   | TeamAssignType | TeamAssignTypes.Balanced | How players should be assigned to teams                               |
| ServerSettings.NakedSpawn       | boolean        | false                    |  Whether players should spawn naked (as lights without their loadout) |
| ServerSettings.AutoBalanceTeams | boolean        | true                     | Whether to auto-balance teams in-game                                 |

#### Scoring Options

| Variable                            | Type    | Default | Description                                         |
| ----------------------------------- | ------- | ------- | --------------------------------------------------- |
| ServerSettings.CTFCapLimit          | int     | 5       | Caps to win in CTF                                  |
| ServerSettings.TDMKillLimit         | int     | 100     | Kills to win in TDM                                 |
| ServerSettings.ArenaRounds          | int     | 3       | Number of rounds in Arena                           |
| ServerSettings.ArenaLives           | int     | 25      | Number of lives per round in Arena                  |
| ServerSettings.RabbitScoreLimit     | int     | 30      | Score to win in Rabbit                              |
| ServerSettings.CaHScoreLimit        | int     | 50      | Score to win in Capture and Hold                    |
| ServerSettings.CTFBlitzAllFlagsMove | boolean | false   | Whether both teams' flags move after a cap in Blitz |
| ServerSettings.TeamCredits          | boolean | false   | Whether player credits form a shared team pool      |

#### Friendly Fire

| Variable                                   | Type    | Default | Description                                                               |
|--------------------------------------------|---------|---------|---------------------------------------------------------------------------|
| ServerSettings.FriendlyFire                | boolean | false   | Whether friendly fire is enabled                                          |
| ServerSettings.FriendlyFireMultiplier      | float   | 1.0     | Multiplier for friendly fire damage                                       |
| ServerSettings.FriendlyFireDamageKickLimit | int     | 0       | Amount of friendly damage done before a player is kicked (0 for no limit) |
| ServerSettings.FriendlyFireKillKickLimit   | int     | 0       | Number of friendly players killed before kick (0 for no limit)            |
| ServerSettings.BaseDestructionKickLimit    | int     | 0       | Amount of damage to the friendly base done before kick (0 for no limit)   |

#### Vehicles

| Variable                                 | Type    | Default | Description                                                                            |
| ---------------------------------------- | ------- | ------- | -------------------------------------------------------------------------------------- |
| ServerSettings.VehicleHealthMultiplier   | float   | 1.0     | Multiplier affecting all vehicles' health                                              |
| ServerSettings.GravCycleLimit            | int     | 4       | Number of Grav Cycles allowed per team                                                 |
| ServerSettings.ShrikeLimit               | int     | 2       | Number of Shrikes allowed per team                                                     |
| ServerSettings.BeowulfLimit              | int     | 2       | Number of Beowulfs allowed per team                                                    |
| ServerSettings.VehiclesEarnedWithCredits | bool    | false   | If true, vehicles are earned via credits (GOTY); if false, they spawn over time (OOTB) |
| ServerSettings.GravCycleCost             | int     | 500     | Credit cost for a Grav Cycle (GOTY)                                                    |
| ServerSettings.ShrikeCost                | int     | 4000    | Credit cost for a Shrike (GOTY)                                                        |
| ServerSettings.BeowulfCost               | int     | 2500    | Credit cost for a Beowulf (GOTY)                                                       |
| ServerSettings.GravCycleSpawnTime        | int     | 30      | Generation time for Grav Cycles in seconds (OOTB)                                      |
| ServerSettings.ShrikeSpawnTime           | int     | 120     | Generation time for Shrikes in seconds (OOTB)                                          |
| ServerSettings.BeowulfSpawnTime          | int     | 120     | Generation time for Beowulfs in seconds (OOTB)                                         |
| ServerSettings.GravCycleEjectionSeat     | boolean | true    | Whether Grav Cycles eject drivers on death                                             |
| ServerSettings.BeowulfEjectionSeat       | boolean | false   | Whether Beowulfs eject pilots on death                                                 |
| ServerSettings.ShrikeEjectionSeat        | boolean | false   | Whether Shrikes eject pilots on death                                                  |

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

#### Call-In Options

| Variable                                              | Type    | Default | Description                                                                        |
| ----------------------------------------------------- | ------- | ------- | ---------------------------------------------------------------------------------- |
| ServerSettings.EnableInventoryCallIn                  | boolean | true    | Whether inventory station call-ins are enabled                                     |
| ServerSettings.InventoryCallInCost                    | int     | 0       | Credits cost for an inventory call-in                                              |
| ServerSettings.InventoryCallInBuildUpTime             | float   | 2       | Seconds it takes to call in an inventory station                                   |
| ServerSettings.InventoryCallInCooldownTime            | float   | 10      | Personal cooldown after calling in an inventory station before you can do so again |
| ServerSettings.InventoryCallInBlocksPlayers           | boolean | true    | If false, players can pass through inventory stations without being blocked        |

##### Call-In Placement Tweaks

These variables tweak the collision checking used to determine if an inv station can be called at a given location.

| Variable                                                  | Type  | Default | Description                                                                                         |
| --------------------------------------------------------- | ----- | ------- | --------------------------------------------------------------------------------------------------- |
| ServerSettings.InventoryCallInMapCollisionCheckExtent     | float | 100     | The extent (distance) around the point used to check for terrain collisions                         |
| ServerSettings.InventoryCallInStationCollisionCheckExtent | float | 700     | The minimum distance in UU away another inv station may be when placing one                         |
| ServerSettings.InventoryCallInTerrainMaxAngle             | float | 70      | Maximium terrain incline in degrees at which an inv station may be placed                           |
| ServerSettings.InventoryCallInMeshMaxAngle                | float | 40      | Maximum mesh incline (e.g. a stand/base structure) in degrees at which an inv station may be placed |
|                                                           |       |         |                                                                                                     |

#### Gameplay Customisation

| Variable                                      | Type    | Default | Description                                                                          |
| --------------------------------------------- | ------- | ------- | ------------------------------------------------------------------------------------ |
| ServerSettings.EnergyMultiplier               | float   | 1.0     | Multiplier affecting the energy pools of all players                                 |
| ServerSettings.AoESizeMultiplier              | float   | 1.0     | Multiplier affecting the size of all Area-of-Effect explosions                       |
| ServerSettings.AoEDamageMultiplier            | float   | 1.0     | Multiplier affecting the damage done by Area-of-Effect explosions                    |
| ServerSettings.SkiingEnabled                  | boolean | true    | Whether skiing is enabled                                                            |
| ServerSettings.UseGOTYShieldPack              | boolean | false   | If true, shield pack effects are reverted to GOTY patch behaviour*                   |
| ServerSettings.UseGOTYBXTCharging             | boolean | false   | If true, the BXT rifles work as in GOTY with respect to charging and unscoped damage |
| ServerSettings.InventoryStationsRestoreEnergy | boolean | false   | If true, players will have energy restored when entering an inventory station        |

\* With UseGOTYShieldPack on, taking damage which is absorbed by shields will not block regen, and the heavy shield pack will not reduce impulse received when active.

#### Flag Drag

| Variable                            | Type | Default | Description                                 |
|-------------------------------------|------|---------|---------------------------------------------|
| ServerSettings.FlagDragLight        | int  | 0       | Speed at which flag-drag occurs for lights  |
| ServerSettings.FlagDragMedium       | int  | 0       | Speed at which flag-drag occurs for mediums |
| ServerSettings.FlagDragHeavy        | int  | 0       | Speed at which flag-drag occurs for heavies |
| ServerSettings.FlagDragDeceleration | int  | 0       | Deceleration rate for flag-drag             |

## Map Rotation

### Rotation Mode

The map rotation is either _sequential_ (default), where each map is played in the order they are added to the rotation, or _random_, where after each map a new map is selected at random from the rotation (this can be the same map).

This can be controlled via the following variable:

`ServerSettings.MapRotation.Mode`

This should have one of the following values:
- `ServerSettings.MapRotation.Modes.Sequential`
- `ServerSettings.MapRotation.Modes.Random`

### Setting the Rotation

The rotation itself may be controlled via the below functions:

`ServerSettings.MapRotation.add(map: Map)`

Adds a map to the rotation. The map should be a value from the [Maps enum](#maps)

`ServerSettings.MapRotation.addCustom(mapName: string)`

Adds a map to the rotation by filename (as located in the game's CookedPC/maps directory). Can be used to run a custom map.

An example of adding maps to the rotation is given below:

```lua
ServerSettings.MapRotation.add(Maps.CTF.ArxNovena)
ServerSettings.MapRotation.add(Maps.TDM.DrydockNight)
ServerSettings.MapRotation.add(Maps.Arena.WalledIn)
ServerSettings.MapRotation.addCustom("TrCTF-Katabatic")
```

### Maps

The Maps enum gives values (i.e. map codes) for all non-custom maps existing in the game, under the following namespaces:

- `Maps.CTF`
- `Maps.TDM`
- `Maps.Arena`
- `Maps.Rabbit`
- `Maps.CaH`
- `Maps.Blitz`

#### Full Map List
```lua
-------------- Capture the Flag --------------
ServerSettings.MapRotation.add(Maps.CTF.Katabatic)
ServerSettings.MapRotation.add(Maps.CTF.ArxNovena)
ServerSettings.MapRotation.add(Maps.CTF.DangerousCrossing)
ServerSettings.MapRotation.add(Maps.CTF.Crossfire)
ServerSettings.MapRotation.add(Maps.CTF.Drydock)
ServerSettings.MapRotation.add(Maps.CTF.Terminus)
ServerSettings.MapRotation.add(Maps.CTF.Sunstar)
ServerSettings.MapRotation.add(Maps.CTF.BellaOmega)
ServerSettings.MapRotation.add(Maps.CTF.BellaOmegaNS)
ServerSettings.MapRotation.add(Maps.CTF.Blueshift)
ServerSettings.MapRotation.add(Maps.CTF.CanyonCrusade)
ServerSettings.MapRotation.add(Maps.CTF.Hellfire)
ServerSettings.MapRotation.add(Maps.CTF.IceCoaster)
ServerSettings.MapRotation.add(Maps.CTF.Perdition)
ServerSettings.MapRotation.add(Maps.CTF.Permafrost)
ServerSettings.MapRotation.add(Maps.CTF.Raindance)
ServerSettings.MapRotation.add(Maps.CTF.Stonehenge)
ServerSettings.MapRotation.add(Maps.CTF.Tartarus)
ServerSettings.MapRotation.add(Maps.CTF.TempleRuins)

-------------- Arena --------------

ServerSettings.MapRotation.add(Maps.Arena.WalledIn)
ServerSettings.MapRotation.add(Maps.Arena.Hinterland)
ServerSettings.MapRotation.add(Maps.Arena.FrayTown)
ServerSettings.MapRotation.add(Maps.Arena.Undercroft)
ServerSettings.MapRotation.add(Maps.Arena.AirArena)
ServerSettings.MapRotation.add(Maps.Arena.LavaArena)
ServerSettings.MapRotation.add(Maps.Arena.Whiteout)

-------------- Rabbit --------------

ServerSettings.MapRotation.add(Maps.Rabbit.Nightabatic)
ServerSettings.MapRotation.add(Maps.Rabbit.SulfurCove)
ServerSettings.MapRotation.add(Maps.Rabbit.Inferno)
ServerSettings.MapRotation.add(Maps.Rabbit.Crossfire)
ServerSettings.MapRotation.add(Maps.Rabbit.Outskirts)
ServerSettings.MapRotation.add(Maps.Rabbit.Quicksand)

-------------- Team Death Match --------------
ServerSettings.MapRotation.add(Maps.TDM.Outskirts)
ServerSettings.MapRotation.add(Maps.TDM.Quicksand)
ServerSettings.MapRotation.add(Maps.TDM.SulfurCove)
ServerSettings.MapRotation.add(Maps.TDM.DrydockNight)
ServerSettings.MapRotation.add(Maps.TDM.Nightabatic)
ServerSettings.MapRotation.add(Maps.TDM.Inferno)
ServerSettings.MapRotation.add(Maps.TDM.Miasma)

-------------- CTF Blitz --------------
ServerSettings.MapRotation.add(Maps.Blitz.ArxNovena)
ServerSettings.MapRotation.add(Maps.Blitz.BellaOmega)
ServerSettings.MapRotation.add(Maps.Blitz.Blueshift)
ServerSettings.MapRotation.add(Maps.Blitz.Crossfire)
ServerSettings.MapRotation.add(Maps.Blitz.CanyonCrusadeRevival)
ServerSettings.MapRotation.add(Maps.Blitz.Drydock)
ServerSettings.MapRotation.add(Maps.Blitz.Hellfire)
ServerSettings.MapRotation.add(Maps.Blitz.IceCoaster)
ServerSettings.MapRotation.add(Maps.Blitz.Katabatic)
ServerSettings.MapRotation.add(Maps.Blitz.Terminus)

-------------- Capture and Hold --------------
ServerSettings.MapRotation.add(Maps.CaH.Outskirts)
ServerSettings.MapRotation.add(Maps.CaH.Katabatic)
ServerSettings.MapRotation.add(Maps.CaH.Raindance)
ServerSettings.MapRotation.add(Maps.CaH.SulfurCove)
ServerSettings.MapRotation.add(Maps.CaH.Tartarus)
ServerSettings.MapRotation.add(Maps.CaH.CanyonCrusadeRevival)
```
:::danger

Player Made Maps need to be installed on both the `server` and each players `client`!

:::

```lua
-------------- Player Made Maps --------------
-- Note: These need to be installed manually on the server prior to enabling.
ServerSettings.MapRotation.addCustom("TrCTF-Blues")
ServerSettings.MapRotation.addCustom("TrCTF-Incidamus")
ServerSettings.MapRotation.addCustom("TrCTF-Periculo")
```
