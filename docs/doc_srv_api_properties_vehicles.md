---
id: doc_srv_api_properties_vehicles
title: Game Balance - Vehicles
sidebar_label: Game Balance - Vehicles
---

## Overview

Vehicle Property Modification can be used to modify the balance properties inherent to vehicles (Grav Cycles, Beowulfs and Shrikes), and also to modify their weapons.

Modification functions for the vehicles themselves fall under the `Vehicles` namespace, and their properties are under `Vehicles.Properties` (e.g. `Vehicles.Properties.HealthPool`).

Modification functions for vehicle weapons fall under the `VehicleWeapons` namespace, and their properties are under `VehicleWeapons.Properties` (e.g. `VehicleWeapons.Properties.ClipSize`). Vehicle weapons are named after their associated vehicle (e.g. `Shrike` for the Shrike cannon); the Beowulf has both the `Beowulf Cannon` and `Beowulf Chaingun` weapons.

### Setting Vehicle Properties

Getter and Setter functions for property values are provided.

`Vehicles.setProperty(vehicleName: string, property: ItemProperty, value: T)`

`setProperty` sets the value of the property `property` for the vehicle `vehicleName`. The type `T` represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string.

`Vehicles.getProperty(vehicleName: string, property: ItemProperty): T`

`getProperty` retrieves the value of the given property. The type `T` is the type of values of that property.

### Setting Vehicle Weapon Properties

Getter and Setter functions for property values are provided.

`VehicleWeapons.setProperty(vehicleWeaponName: string, property: ItemProperty, value: T)`

`setProperty` sets the value of the property `property` for the vehicle weapon `vehicleWeaponName`. The type `T` represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string.

`VehicleWeapons.getProperty(vehicleWeaponName: string, property: ItemProperty): T`

`getProperty` retrieves the value of the given property. The type `T` is the type of values of that property.

## Vehicle Base Stats

| Property                | Type    | Applicable Vehicles | Value Restrictions | Units      | Description                                                          |
| ----------------------- | ------- | ------------------- | ------------------ | ---------- | -------------------------------------------------------------------- |
| HealthPool              | integer | All                 | > 0                | Health     | Health pool for the vehicle                                          |
| EnergyPool              | float   | All                 | >= 0               | Energy     | Energy pool for the vehicle                                          |
| EnergyRechargeRate      | float   | All                 | >= 0               | Energy / S | Rate of energy recovery                                              |
| IsArmored               | boolean | All                 |                    |            | Whether the vehicle counts as armoured when considering damage dealt |
| IsHomingTarget          | boolean | All                 |                    |            | Whether the vehicle may be targeted by the Sabre Launcher            |
| CanCarryFlagAsPilot     | boolean | All                 |                    |            | Whether you can carry the flag while piloting the vehicle            |
| CanCarryFlagAsPassenger | boolean | Grav, Beowulf       |                    |            | Whether you can carry the flag as a passenger of the vehicle         |
| TimeBeforeSelfDestruct  | float   | All                 | >= 0               | S          | Time before an empty vehicle self-destructs                          |

## Vehicle Movement

| Property                 | Type  | Applicable Vehicles | Value Restrictions | Units      | Description                                                                           |
| ------------------------ | ----- | ------------------- | ------------------ | ---------- | ------------------------------------------------------------------------------------- |
| MaxSpeed                 | float | All                 | >= 0               | UU / S     | Maximum speed the vehicle can attain via normal acceleration                          |
| MaxDivingSpeedMultiplier | float | Shrike              | >= 0               |            | Multiplier to allow the Shrike to go slightly faster than its normal max while diving |
| BoostMultiplier          | float | All                 | >= 0               |            | Multiplier applied to maximum vehicle speed while boosting                            |
| BoostEnergyCost          | float | All                 | >= 0               | Energy / S | Energy cost of boosting                                                               |
| BoostMinUsableProportion | float | All                 | 0 <= x <= 1        |            | Proportion of energy required to start boosting                                       |
| MaxPlayerExitSpeed       | float | All                 | >= 0               | UU / S     | Cap on the speed a player can inherit when exiting the vehicle                        |
| GravityScale             | float | All                 | >= 0               |            | Effect of gravity on the vehicle                                                      |

## Vehicle Self Damage

| Property                   | Type  | Applicable Vehicles | Value Restrictions | Units  | Description                                                                                    |
| -------------------------- | ----- | ------------------- | ------------------ | ------ | ---------------------------------------------------------------------------------------------- |
| MaxCrashDamage             | float | All                 | >= 0               | Damage | Amount of damage sustained by crashing at or beyond the `MaxCrashDamageSpeed`                  |
| MinCrashDamage             | float | All                 | >= 0               | Damage | Amount of damage sustained when crashing at `MinCrashDamageSpeed`                              |
| MaxCrashDamageSpeed        | float | All                 | >= 0               | UU / S | Speed at which the maximum crashing damage will be applied                                     |
| MinCrashDamageSpeed        | float | All                 | >= 0               | UU / S | Minimum speed at which crashing causes damage                                                  |
| MaxVehicleCrashDamage      | float | All                 | >= 0               | Damage | Amount of damage sustained when hitting another vehicle at or beyond the `MaxCrashDamageSpeed` |
| MinVehicleCrashDamage      | float | All                 | >= 0               | Damage | Amount of damage sustained when hitting another vehicle at `MinCrashDamageSpeed`               |
| MaxVehicleCrashDamageSpeed | float | All                 | >= 0               | UU / S | Speed of collision with another vehicle at which the maximum crashing damage will be applied   |
| MinVehicleCrashDamageSpeed | float | All                 | >= 0               | UU / S | Minimum speed at which crashing into another vehicle causes damage                             |

## Vehicle Ramming

| Property           | Type  | Applicable Vehicles | Value Restrictions | Units  | Description                                                |
| ------------------ | ----- | ------------------- | ------------------ | ------ | ---------------------------------------------------------- |
| RamMinSpeed        | float | All                 | >= 0               | UU / S | Minimum speed at which ramming a player causes them damage |
| RamMaxDamageSpeed  | float | All                 | >= 0               | UU / S | Speed at which ramming a player causes them max damage     |
| RamMinDamage       | float | All                 | >= 0               | Damage | Minimum damage caused by ramming                           |
| RamMaxDamage       | float | All                 | >= 0               | Damage | Maximum damage caused by ramming                           |
| RamPlayerPushSpeed | float | All                 | >= 0               | UU / S | Speed at which rammed players are pushed                   |
| RamFlagPushSpeed   | float | All                 | >= 0               | UU / S | Speed at which a rammed flag is pushed                     |

## Vehicle Weapon Ammo

| Property    | Type    | Applicable Vehicle Weapons | Value Restrictions | Units   | Description                                                           |
| ----------- | ------- | -------------------------- | ------------------ | ------- | --------------------------------------------------------------------- |
| ClipAmmo    | integer | All except Beowulf Cannon  | >= 0               | Bullets | Number of bullets in a clip                                           |
| SpareAmmo   | integer | All                        | >= 0               | Bullets | Spare ammo carried by each vehicle (normally all vehicles have 10000) |
| AmmoPerShot | integer | All                        | >= 0               | Bullets | Ammo cost for each shot                                               |

## Vehicle Weapon Reloading and Firing

| Property                    | Type    | Applicable Vehicle Weapons | Value Restrictions | Units   | Description                                                 |
| --------------------------- | ------- | -------------------------- | ------------------ | ------- | ----------------------------------------------------------- |
| ReloadTime                  | float   | All                        | >= 0               | S       | Time taken to reload                                        |
| FireInterval                | float   | All                        | >= 0               | S       | Time between consecutive shots                              |
| ReloadSingle                | boolean | All except Beowulf Cannon  |                    |         | Whether bullets are reloaded one at a time                  |
| ReloadApplicationProportion | float   | All                        | 0 <= x <= 1        |         | Proportion through the reload that the actual reload occurs |
| BurstShotCount              | integer | Shrike                     | > 0                | Bullets | Number of bullets fired in a single burst                   |

## Vehicle Weapon Damage and Impact

### Damage

| Property                          | Type  | Applicable Vehicle Weapons | Value Restrictions | Units  | Description                                                          |
| --------------------------------- | ----- | -------------------------- | ------------------ | ------ | -------------------------------------------------------------------- |
| Damage                            | float | All                        | >= 0               | Damage | Damage the weapon does, before considering multipliers, falloff etc. |
| DirectHitMultiplier               | float | All                        | >= 0               |        | Damage multiplier to apply to the damage done on a direct hit        |
| EnergyDrain                       | float | All                        | >= 0               | Energy | Amount of energy to drain from targets                               |
| DamageAgainstArmorMultiplier      | float | All                        | >= 0               |        | Multiplier for damage against armoured targets                       |
| DamageAgainstGeneratorMultiplier  | float | All                        | >= 0               |        | Multiplier for damage against generators                             |
| DamageAgainstBaseTurretMultiplier | float | All                        | >= 0               |        | Multiplier for damage against base turrets                           |
| DamageAgainstBaseSensorMultiplier | float | All                        | >= 0               |        | Multiplier for damage against sensors                                |
| DamageAgainstGravCycleMultiplier  | float | All                        | >= 0               |        | Multiplier for damage against Grav Cycles                            |
| DamageAgainstBeowulfMultiplier    | float | All                        | >= 0               |        | Multiplier for damage against Beowulfs                               |
| DamageAgainstShrikeMultiplier     | float | All                        | >= 0               |        | Multiplier for damage against Shrikes                                |


### Impulse

| Property       | Type  | Applicable Vehicle Weapons  | Value Restrictions | Units    | Description                                               |
| -------------- | ----- | --------------------------- | ------------------ | -------- | --------------------------------------------------------- |
| ImpactMomentum | float | All except Beowulf Chaingun | >= 0               | Momentum | Amount of momentum applied to a player hit by this weapon |

### Falloff

| Property                 | Type  | Applicable Vehicle Weapons  | Value Restrictions | Units | Description                                                           |
| ------------------------ | ----- | --------------------------- | ------------------ | ----- | --------------------------------------------------------------------- |
| ExplosiveRadius          | float | All except Beowulf Chaingun | >= 0               | UU    | Size of the weapon's damaging explosion                               |
| BulletDamageRange        | float | Beowulf Chaingun            | >= 0               | UU    | Size of the damage range (_not_ the total range of the weapon)        |
| MaxDamageRangeProportion | float | All                         | 0 <= x <= 1        |       | Proportion of the damage range at which falloff starts                |
| MinDamageRangeProportion | float | All                         | 0 <= x <= 1        |       | Proportion of the damage range at which falloff ends                  |
| MinDamageProportion      | float | All                         | 0 <= x <= 1        |       | Proportion of the normal damage dealt at the MinDamageRangeProportion |

Falloff for these weapons works the same as for [regular weapons](doc_srv_api_properties_items.md#Falloff).

### Miscellaneous

| Property         | Type    | Applicable Vehicle Weapons  | Value Restrictions | Units        | Description                                                             |
| ---------------- | ------- | --------------------------- | ------------------ | ------------ | ----------------------------------------------------------------------- |
| DoesImpulseFlag  | boolean | All except Beowulf Chaingun |                    |              | Whether the weapon's explosion pushes the flag around                   |
| DoesGibOnKill    | boolean | All                         |                    |              | Whether this weapon will cause a killed enemy to explode into pieces    |
| GibImpulseRadius | float   | All                         |                    | Unreal Units | Radius for which gibbing impulse is applied to pieces of deceased enemy |
| GibStrength      | float   | All                         |                    | Momentum     | Momentum applied to gibbed pieces of an enemy                           |

## Vehicle Weapon Projectiles

| Property                   | Type  | Applicable Vehicle Weapons | Value Restrictions | Units  | Description                                                     |
| -------------------------- | ----- | -------------------------- | ------------------ | ------ | --------------------------------------------------------------- |
| ProjectileSpeed            | float | All                        | >= 0               | UU / S | Launch speed of the projectile                                  |
| ProjectileMaxSpeed         | float | All                        | >= 0               | UU / S | Cap on the absolute projectile speed, regardless of inheritance |
| CollisionSize              | float | All                        | >= 0               | UU     | Radius of the projectile's collision sphere                     |
| ProjectileInheritance      | float | All                        | >= 0               |        | Proportion of the shooter's velocity the projectile inherits    |
| ProjectileLifespan         | float | All                        | >= 0               | S      | How long the projectile travels for before exploding in midair  |
| ProjectileGravity          | float | All                        | >= 0               |        | Multiplier by which gravity affects the projectile              |
| ProjectileTerminalVelocity | float | All                        | >= 0               | UU / S | Terminal velocity due to gravity                                |

## Vehicle Weapon Accuracy

| Property               | Type  | Applicable Vehicle Weapons | Value Restrictions | Units | Description                                     |
| ---------------------- | ----- | -------------------------- | ------------------ | ----- | ----------------------------------------------- |
| Accuracy               | float | All                        | 0 <= x <= 1        |       | Proportion of accuracy for the weapon's shot    |
| AccuracyLossOnShot     | float | All                        | 0 <= x <= 1        |       | Accuracy decrease after shooting                |
| AccuracyLossMax        | float | All                        | 0 <= x <= 1        |       | Maximum decrease in accuracy at a given time    |
| AccuracyCorrectionRate | float | All                        | 0 <= x <= 1        |       | Rate at which accuracy returns after decreasing |