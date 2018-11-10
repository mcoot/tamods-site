---
id: doc_srv_api_loadouts
title: Loadouts and Item Bans
sidebar_label: Loadouts and Item Bans
---

## Loadouts

### Equip Points

Weapons and items must be equipped at 'item slots' or _equip points_; the Equip Points enum gives the possible slots at which an item may be equipped.

The available equip points are listed below. Note that not all equip points are fully functional in the current version of the game.

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

`ServerSettings.BannedItems.add(class: string, itemName: string)`

`ServerSettings.BannedItems.remove(class: string, itemName: string)`

So for instance, to ban the Light Spinfusor, the Assault Rifle and the Nova Colt, you would use:

```lua
ServerSettings.BannedItems.add("Light", "Light Spinfusor")
ServerSettings.BannedItems.add("Medium", "Assault Rifle")
ServerSettings.BannedItems.add("Heavy", "Nova Colt")
```

### Mutual Exclusions

A slightly more advanced form of control is to make two items _mutually exclusive_, so that either weapon on its own is allowed, but the combination is not. These can be modified through the functions:

`ServerSettings.MutuallyExclusiveItems.add(class1: string, itemName1: string, class2: string, itemname2: string)`

`ServerSettings.MutuallyExclusiveItems.remove(class1: string, itemName1: string, class2: string, itemname2: string)`

So for instance, to make the Assault Rifle incompatible with the Spinfusor, you could use:

```lua
ServerSettings.MutuallyExclusiveItems.add("Medium", "Assault Rifle", "Medium", "Spinfusor")
```

### Equipment Slots

You can also restrict the equipment slots available based on class. This can be used to, for instance, give the Light class two weapons rather than three, or to ban grenades. The equip point is selected using the [Equip Points](#equip-points) enum.

`ServerSettings.DisabledEquipPoints.add(class: string, equipPoint: EquipPoint)`

`ServerSettings.DisabledEquipPoints.remove(class: string, equipPoint: EquipPoint)`

So to give Lights and Mediums two weapons rather than three, you would use:

```lua
ServerSettings.DisabledEquipPoints.add("Light", Loadouts.EquipPoints.Tertiary)
ServerSettings.DisabledEquipPoints.add("Medium", Loadouts.EquipPoints.Tertiary)
```