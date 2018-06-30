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

### Gameplay

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

### MagicChain

## Roam Map

## Sound Customisation