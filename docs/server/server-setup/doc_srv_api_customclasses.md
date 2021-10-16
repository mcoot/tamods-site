---
id: doc_srv_api_customclasses
title: Custom Classes
sidebar_label: Custom Classes
sidebar_position: 5
---

One major change that the Out of the Blue patch to the game made was the removal of six of the previous nine classes. TAMods-Server has a _custom class_ system that allows you to bring old armour classes back, and create combinations of items defining the allowable loadouts for a custom class. This is particular useful to, for example, bring back the classes that existed prior to the OOTB patch.

The major caveat is that these classes are defined _implicitly_ by the items allowed on each class. They don't show up in the client menus, but rather if a player chooses a loadout suitable for a custom class, they will spawn as that class.

To use this functionality, you must first enable the `ServerSettings.CustomClasses.Enabled` flag:

| Variable                             | Type    | Default | Description                                                             |
| ------------------------------------ | ------- | ------- | ----------------------------------------------------------------------- |
| ServerSettings.CustomClasses.Enabled | boolean | off     | Whether to enforce that player loadouts must fit a defined custom class |

When this mode is enabled, player loadouts are validated against the list of defined custom classes. If their loadout fits a custom class, then they will spawn as that class. If their loadout fits no custom class, they will not spawn with any weapons - for example, with pre-OOTB classes defined, if the user selects a Sentinel's Phase rifle and a Pathfinder's Light Assault Rifle then they do not fit either custom class.

## Defining Custom Classes

### Creating the Custom Class

Custom classes can be created via the following function:

`ServerSettings.CustomClasses.new(name: string, ootbClass: string, armorClass: string, equipPointsToValidate: List<EquipPoint>)`

This function creates a new custom class denoted by the given name. `ootbClass` is the OOTB-style armour category this class falls under - i.e. `"Light"`, `"Medium"` or `"Heavy"`.

The `armorClass` parameter is the actual armour class you want players to spawn as. This can be an OOTB class (`"Light"` etc.), but can also be a pre-OOTB class name (e.g. `"Pathfinder"`, `"Raider"` or `"Juggernaut"`). If you want more than three custom classes, you will need to make use of the pre-OOTB armours.

Finally, the `equipPointsToValidate` parameter is a list of [equip points](doc_srv_api_loadouts.md#equip-points) which player loadout items will be validated against to determine if they fit a custom class. This parameter may be omitted, in which case it defaults to requiring players to match their weapons, belt item, pack item and skin with weapons allowed for the custom class.

### Adding Allowed Items to a Custom Class

In order to actually use a custom class, you need to give it a set of allowed weapons and items for player loadouts to be validated against.

This can be done with the following function:

`ServerSettings.CustomClasses.addItem(customClass: string, itemClass: string, itemName: string)`

This function adds the item `itemName`, normally found on the OOTB class `itemClass`, to the custom class named `customClass`.

## Example

An example of a custom class is the following, which defines allowable loadouts similar to that of a pre-OOTB Sentinel:

```lua
ServerSettings.CustomClasses.new("MySentinel", "Light", "Sentinel", {
    Loadouts.EquipPoints.Primary,
    Loadouts.EquipPoints.Secondary,
    Loadouts.EquipPoints.Belt,
    Loadouts.EquipPoints.Pack,
    Loadouts.EquipPoints.Skin,
})

ServerSettings.CustomClasses.addItem("MySentinel", "Light", "BXT1")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "BXT1A")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Phase Rifle")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "SAP20")
ServerSettings.CustomClasses.addItem("MySentinel", "Medium", "Nova Blaster")
ServerSettings.CustomClasses.addItem("MySentinel", "Heavy", "Nova Blaster MX")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Falcon")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Accurized Shotgun")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "T5 Grenades")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Claymore Mines")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Motion Mines")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Light Energy Pack")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Sentinel")
ServerSettings.CustomClasses.addItem("MySentinel", "Light", "Specter")
```