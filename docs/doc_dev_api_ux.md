---
id: doc_dev_api_ux
title: User Experience Features
sidebar_label: User Experience Features
---

This page catalogues the miscellanious UI and User Experience settings TAMods provides.

## UI Customisation

### Damage Numbers

The variables below provide simple damage number customisation; more complex modification can be achieved with the [damage number events](doc_dev_api_events.md#ondamagenumbercreate).

| Variable                               | Type    | Default              | Description                                                                     |
|----------------------------------------|---------|----------------------|---------------------------------------------------------------------------------|
| `damageNumbersLimit`                   | integer | `0`                  | Hides damage numbers below this amount of damage                                |
| `damageNumbersOffsetX`                 | float   | `0.0`                | X offset to apply to damage numbers                                             |
| `damageNumbersOffsetY`                 | float   | `0.0`                | Y offset to apply to damage numbers                                             |
| `damageNumbersScale`                   | float   | `1.0`                | Scaling factor to apply to damage numbers                                       |
| `revertOriginalDamageNumbers`          | boolean | `false`              | Use GOTY (pre-OOTB) damage number positioning                                   |
| `revertOriginalDamageNumbersThreshold` | integer | `150`                | If the above is `true`, use GOTY positioning below this amount                  |
| `showDamageNumberStream`               | boolean | `false`              | Show total damage done rather than damage per shot                              |
| `showChainBulletHitCount`              | boolean | `false`              | Show the hit count rather than damage per shot                                  |
| `damageNumberStreamTimeout`            | float   | `0.5`                | Reset the damage/hit stream count after not landing a hit for this many seconds |
| `damageNumberCustomText`               | string  | `""`                 | Show custom text instead of damage numbers                                      |
| `showRainbow`                          | boolean | `false`              | Rainbow damage numbers                                                          |
| `damageNumbersColorMin`                | Color   | `rgb(255, 255, 255)` | The initial colour of the damage number                                         |
| `damageNumbersColorMax`                | Color   | `rgb(248, 83, 83)`   | The final colour of the damage number                                           |

### Gameplay and Graphics

| Variable             | Type    | Default             | Description                                                                                          |
|----------------------|---------|---------------------|------------------------------------------------------------------------------------------------------|
| `showWeapon`         | boolean | true                | Whether to show the weapon model                                                                     |
| `showBodyMesh`       | boolean | true                | Whether to show the player body mesh                                                                 |
| `useFOVScaling`      | boolean | true                | Whether to scale sensitivity with FOV; disabling may improve precision with whole number sensitivity |
| `sens`               | float   | 10.0                | Mouse sensitivity for when FOV scaling is disabled                                                   |
| `sensZoom`           | float   | 5.0                 | First zoom level sensitivity for when FOV scaling is disabled                                        |
| `sensZoooom`         | float   | 2.0                 | Second zoom level sensitivity for when FOV scaling is disabled                                       |
| `customWeaponOffset` | boolean | false               | Whether to offset the position of the weapon model                                                   |
| `weaponOffset`       | Vector  | Vector(0.0,0.0,0.0) | The weapon model offset to use                                                                       |

`sensitivity(sens: float)`

Modify in-game sensitivity (either FOV-scaled or not) to the given value.

`gamma(gamma: float)`

Set the in-game graphics gamma to the given value.

### Hud Colours

| Variable                 | Type  | Default            | Description                                       |
|--------------------------|-------|--------------------|---------------------------------------------------|
| `friendlyChatColor`      | Color | `rgb(158,208,212)` | Colour for friendly console messages              |
| `enemyChatColor`         | Color | `rgb(255,111,111)` | Colour for enemy console messages                 |
| `whisperChatColor`       | Color | `rgb(207,165,101)` | Colour for private messages                       |
| `friendlyHUDChatColor`   | Color | `rgb(158,208,211)` | Colour for friendly HUD chat messages             |
| `enemyHUDChatColor`      | Color | `rgb(249,32,32)`   | Colour for enemy HUD chat messages                |
| `friendlyColor`          | Color | `rgb(119,186,255)` | Colour for friendly UI elements                   |
| `enemyColor`             | Color | `rgb(248,83,83)`   | Colour for enemy UI elements                      |
| `friendlyMarkerColor`    | Color | `rgb(115,225,255)` | Colour for friendly player IFF markers            |
| `enemyMarkerColor`       | Color | `rgb(255,23,23)`   | Colour for enemy player IFF markers               |
| `friendlyIsFMarkerColor` | Color | `rgb(81,250,85)`   | Colour for friended, friendly player IFF markers  |
| `enemyIsFMarkerColor`    | Color | `rgb(239,164,0)`   | Colour for friended, enemy player IFF markers     |

### UI Display

#### Crosshairs

| Variable         | Type    | Default            | Description                                                                      |
|------------------|---------|--------------------|----------------------------------------------------------------------------------|
| `showCrosshair`  | boolean | `true`             | Whether to show default crosshairs (disabling this does not disable hitmarkers!) |
| `crosshairScale` | float   | `1.0`              | Scaling factor to apply to crosshairs                                            |
| `crosshairColor` | Color   | `rgb(255,255,255)` | Colour to apply to crosshairs                                                    |

#### Icons

| Variable               | Type    | Default | Description                                              |
|------------------------|---------|---------|----------------------------------------------------------|
| `showObjectiveIcon`    | boolean | true    | Whether to show objective icons                          |
| `showObjectiveText`    | boolean | true    | Whether to show objective text                           |
| `showFlagBaseIcon`     | boolean | true    | Whether to show the flag base icon                       |
| `showFlagHomeBaseIcon` | boolean | true    | Whether to show the flag base icon when the flag is home |
| `showCTFBaseIcon`      | boolean | true    | Whether to show the base icon in CTF                     |
| `showNuggetIcon`       | boolean | true    | Whether to show the nugget icon                          |
| `showPlayerIcon`       | boolean | true    | Whether to show player icons                             |
| `showVehicleIcon`      | boolean | true    | Whether to show the Vehicle Pad icon                     |
| `showMineIcon`         | boolean | true    | Whether to show icons for mines                          |
| `showMineText`         | boolean | true    | Whether to show text for mines                           |
| `showSensorIcon`       | boolean | true    | Whether to show sensor icons                             |

#### Miscellaneous UI

| Variable              | Type    | Default | Description                                                                 |
|-----------------------|---------|---------|-----------------------------------------------------------------------------|
| `skiBarMin`           | integer | 30      | Minimum value to display on the ski bars                                    |
| `skiBarMax`           | integer | 300     | Maximum value to display on the ski bars                                    |
| `IFFScale`            | float   | 1.0     | Scale factor to apply to IFF markers                                        |
| `showFirstPersonAmmo` | boolean | false   | Whether to always show the floating ammo counter even when disabled in-game |
| `consoleSize`         | float   | 0.75    | The proportion of the screen the full console covers                        |
| `consoleTransparency` | float   | 0.8     | The background transparency of the console                                  |

### MagicChain

The MagicChain feature allows for user-adjustable latency compensation for automatic weapons.

| Variable                  | Type    | Default                 | Description                                                                   |
|---------------------------|---------|-------------------------|-------------------------------------------------------------------------------|
| `useMagicChain`           | boolean | false                   | Enables MagicChain compensation                                               |
| `useSmallBullets`         | boolean | false                   | Whether to use smaller chain tracers (a.k.a. 'simulated projectiles off')     |
| `centerBulletSpawn`       | boolean | false                   | Spawn bullet tracers in the centre of the screen                              |
| `bulletPingMultiplier`    | float   | 1.0                     | Latency compensation multiplier (2x will compensate for twice your ping etc.) |
| `bulletSpawnDelay`        | float   | 0.0                     | Delay before spawning bullet tracers                                          |
| `customBulletSpawnOffset` | boolean | false                   | Whether use a custom spawn offset for bullet tracers                          |
| `bulletSpawnOffset`       | Vector  | Vector(180.0, 0.0, 0.0) | The custom spawn offset to use for bullet tracers                             |

## Roam Map

| Variable                   | Type    | Default | Description                                                      |
|----------------------------|---------|---------|------------------------------------------------------------------|
| `disableBaseTurrets`       | boolean | false   | Whether to turn off base turrets in roam map                     |
| `disablePower`             | boolean | false   | Whether to disable gen power in roam map                         |
| `maxSpeedWithFlag`         | integer | 0       | The flag drag speed cap in roam map (0 = no flag drag)           |
| `decelerationRateWithFlag` | integer | 10      | The deceleration to use with flag drag in roam map               |

In addition, the following functions correspond to console commands, and are available via the API to allow for keybinds.

`toggleTurrets()`

Toggles roam map base turrets on / off.

`togglePower()`

Toggles roam map base power on / off.

`returnFlags()`

Returns both flags in roam map.

## Statistics

TAMods can display and save player and team statistics at the end of a match.

The team statistics in particular are useful for recording game results (this feature has been used to log results of Australian pickup games for analysis).

| Variable          | Type    | Default | Description                                       |
|-------------------|---------|---------|---------------------------------------------------|
| `recordStats`     | boolean | false   | Whether to enable individual statistics           |
| `recordTeamStats` | boolean | false   | If `recordStats` is enabled, also save team stats |
| `saveStats`       | boolean | false   | Whether to save individual statistics to file     |
| `saveTeamStats`   | boolean | false   | Whether to save team statistics to file           |

Statistics files are saved in comma-separated value (CSV) format to the configuration directory; stats for multiple matches will be appended to the same file.

## Chat

`say(message: string)`

Say the given message in global game chat.

`teamsay(message: string)`

Say the message in team chat.

## Global Player Mute

The global player mute allows you to mute chat and direct messages from a player, persisting between game restarts (unlike the in-game mechanism). It is also customisable - you can mute only VGS commands from a given player, for instance.

#### MutedPlayer Data Type

The `MutedPlayer` datatype has the following properties

| Property            | Type    | Description                                   |
|---------------------|---------|-----------------------------------------------|
| `username`          | string  | The user to mute                              |
| `muteVGS`           | boolean | Whether to mute VGS from this user            |
| `muteText`          | boolean | Whether to mute text chat from this user      |
| `muteDirectMessage` | boolean | Whether to mute direct message from this user |

#### Associated Functions

`mplayer(username: string): MutedPlayer`

Create a `MutedPlayer` object with all options muted. This does not actually _mute_ the player, it merely creates the object.

`mplayer_custom(username: string, muteVGS: boolean, muteText: boolean, muteDirectMessage: boolean)`

Create a `MutedPlayer` object with the given muting options. This does not actually _mute_ the player, it merely creates the object.

`mutePlayer(player: MutedPlayer)`

Mute a player with the settings defined by the given `MutedPlayer`.

## Sound Customisation

| Variable            | Type    | Default | Description                                                                                                                 |
|---------------------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| `muteVGS`           | boolean | false   | Whether to mute all VGS sounds                                                                                              |
| `hitSoundMode`      | integer | 1       | What kind of hit sound pitch adjustment to use (1 = normal, 2 = pitch decrease with damage, 3 = pitch increase with damage) |
| `hitSoundPitchMin`  | float   | 0.4     | Minimum pitch hit sounds can be played at                                                                                   |
| `hitSoundPitchMax`  | float   | 1.6     | Maximum pitch hit sounds can be played at                                                                                   |
| `hitSoundDamageRef` | integer | 600     | Damage number to use as the reference for dynamic pitch hit sounds (i.e. at this amount of damage, the pitch will be 1.0)   |

### Sound Replacement and Volume Adjustment

#### Adjusting Default Sounds

You can adjust the volume and pitch of any sound in the game by searching their names.

`modifySound(name: string, pitch: float, volume: float)`

Modify the sound with the exact given name, adjusting its pitch and volume by the multiplicative factors given.

`modifySoundRe(regex: string, pitch: float, volume: float)`

Modify sounds matching the given regex pattern, adjusting pitch and volume.

`searchSoundRe(regex: string)`

Search for sounds matching the regex, printing results to the console.

#### Replacing In-Game Sounds

Certain in-game sounds can be replaced with a custom sound by setting the variable with the form `sound<SoundName>` (e.g. `soundBluePlate`) to be the file path to the desired sound. _File paths should be relative to the config directory_.

Custom sounds can be volume-adjusted by setting the variable with the form `volume<SoundName>` (e.g. `volumeBluePlate`) to be the desired `float` volume level

The following sounds are available for modification:

#### Hits and Kills

- `Hit`
- `Headshot`
- `Kill`
- `AirMail`
- `BluePlate`
- `FirstBlood`
- `HeadShotKill`
- `ArtilleryShot`
- `MeleeKill`
- `RoadKill`

#### Sprees and Multi-kills

- `Streak1` (Killing Spree)
- `Streak2` (Rampage)
- `Streak3` (Relentless)
- `Streak4` (Unstoppable)
- `Streak5` (The Slayer)
- `MultiKill1` (Double Kill)
- `MultiKill2` (Triple Kill)
- `MultiKill3` (Quatra Kill)
- `MultiKill4` (Ultra Kill)
- `MultiKill5` (Team Kill)

#### Flag Events

- `FastGrab`
- `FlagBlueGrab`
- `FlagRedGrab`
- `FlagBluePickup`
- `FlagRedPickup`
- `FlagBlueCapture`
- `FlagRedCapture`
- `FlagBlueReturn`
- `FlagRedReturn`
- `FlagBlueDrop`
- `FlagRedDrop`