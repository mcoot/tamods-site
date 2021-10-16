---
id: doc_srv_api_properties_items
title: Game Balance - Items
sidebar_label: Items
sidebar_position: 3
---

## Overview

Item Property Modification can be used to modify the balance properties of equipment items, such as weapons, grenades, packs and deployables.

All item modification functions and properties fall under the `Items` namespace. Properties fall under the `Items.Properties` namespace. So for instance, one could reference a property with `Items.Properties.ClipAmmo`.

When listing weapon types: the term `shot weapons` is used to refer to all weapons which act via shooting - i.e. all except grenades, mines and deployables.

### Setting Item Properties

Getter and Setter functions for property values are provided.

`Items.setProperty(className: string, itemName: string, property: ItemProperty, value: T)`

`setProperty` sets the value of the property `property` for the item `itemName` on the class `className`. The type `T` represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string.

`Items.getProperty(className: string, itemName: string, property: ItemProperty): T`

`getProperty` retrieves the value of the given property. The type `T` is the type of values of that property.

#### Example

```lua
Logger.setLevel(Logger.Levels.Info)
Logger.info("Old AR clip size: " .. Items.getProperty("Medium", "Light Assault Rifle", Items.Properties.ClipAmmo))
Items.setProperty("Medium", "Light Assault Rifle", Items.Properties.ClipAmmo, 50)
Logger.info("New AR clip size: " .. Items.getProperty("Medium", "Light Assault Rifle", Items.Properties.ClipAmmo))
```

## Ammo

| Property      | Type    | Applicable Items    | Value Restrictions | Units   | Description                                                                                        |
| ------------- | ------- | ------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| ClipAmmo      | integer | Weapons with a clip | > 0                | Bullets | The number of bullets in a clip                                                                    |
| SpareAmmo     | integer | All weapons         | >= 0               | Bullets | Starting amount of spare ammo                                                                      |
| AmmoPerShot   | integer | All weapons         | >= 0               | Bullets | Amount of ammo consumed by each shot                                                               |
| LowAmmoCutoff | integer | All weapons         | >= 0               | Bullets | Ammo count (either in the clip, or overall) at which 'low ammo' warnings will appear on the weapon |

## Reloading and Firing

| Property                    | Type    | Applicable Items         | Value Restrictions | Units   | Description                                                                                    |
| --------------------------- | ------- | ------------------------ | ------------------ | ------- | ---------------------------------------------------------------------------------------------- |
| ReloadTime                  | float   | Shot weapons             | > 0                | Seconds | Reload time                                                                                    |
| FireInterval                | float   | Shot weapons             | > 0                | Seconds | Time between shots                                                                             |
| HoldToFire                  | boolean | All weapons              |                    |         | Whether the player can hold the button to keep firing                                          |
| CanZoom                     | boolean | All weapons              |                    |         | (Currently not working) Whether the weapon may be fired while zoomed                           |
| ReloadSingle                | boolean | Weapons with a clip      |                    |         | Whether the weapon should be reloaded one bullet at a time, like the Light's shotgun           |
| ReloadApplicationProportion | float   | Shot weapons             | 0 <= x <= 1        |         | Proportion of the way through the reload that ammo actually reloads; affects reload cancelling |
| BurstShotCount              | integer | Light Assault Rifle      | > 0                | Bullets | Number of shots in a LAR burst                                                                 |
| BurstShotRefireTime         | float   | Light Assault Rifle      | > 0                | Seconds | Time between shots in a LAR burst                                                              |
| SpinupTime                  | float   | Chain gun/cannon, X1 LMG | >= 0               | Seconds | Time for chain-gun type weapons to spin up before firing begins                                |
| ShotgunShotCount            | integer | Shotguns                 | > 0                | Shots   | Number of shots fired with each shotgun blast                                                  |
| ShotEnergyCost              | float   | Shot weapons             | >= 0               | Energy  | Amount of energy consumed by shooting                                                          |

## Damage and Impact

### Damage

| Property                          | Type  | Applicable Items   | Value Restrictions | Units  | Description                                                          |
| --------------------------------- | ----- | ------------------ | ------------------ | ------ | -------------------------------------------------------------------- |
| Damage                            | float | All weapons        | >= 0               | Damage | Damage the weapon does, before considering multipliers, falloff etc. |
| DirectHitMultiplier               | float | Projectile weapons | >= 0               |        | Damage multiplier to apply to the damage done on a direct hit        |
| EnergyDrain                       | float | All weapons        | >= 0               | Energy | Amount of energy to drain from targets                               |
| DamageAgainstArmorMultiplier      | float | All weapons        | >= 0               |        | Multiplier for damage against armoured targets                       |
| DamageAgainstGeneratorMultiplier  | float | All weapons        | >= 0               |        | Multiplier for damage against generators                             |
| DamageAgainstBaseTurretMultiplier | float | All weapons        | >= 0               |        | Multiplier for damage against base turrets                           |
| DamageAgainstBaseSensorMultiplier | float | All weapons        | >= 0               |        | Multiplier for damage against sensors                                |
| DamageAgainstGravCycleMultiplier  | float | All weapons        | >= 0               |        | Multiplier for damage against Grav Cycles                            |
| DamageAgainstBeowulfMultiplier    | float | All weapons        | >= 0               |        | Multiplier for damage against Beowulfs                               |
| DamageAgainstShrikeMultiplier     | float | All weapons        | >= 0               |        | Multiplier for damage against Shrikes                                |

### Impulse

| Property                     | Type  | Applicable Items   | Value Restrictions | Units    | Description                                                                                   |
| ---------------------------- | ----- | ------------------ | ------------------ | -------- | --------------------------------------------------------------------------------------------- |
| ImpactMomentum               | float | Projectile weapons | >= 0               | Momentum | Amount of momentum applied to a player hit by this weapon                                     |
| SelfImpactMomentumMultiplier | float | Projectile weapons | >= 0               |          | Multiplier to apply to the impact momentum when the player hit is the one who shot the weapon |
| SelfImpactExtraZMomentum     | float | Projectile weapons | >= 0               | Momentum | Additional vertical momentum to apply when self-impulsing                                     |

To give a sense of the reasonable scale for values: the Spinfusor gives `85000` units of `ImpactMomentum`, with a `SelfImpactMomentumMultiplier` of `1.5`.

### Falloff

| Property                 | Type  | Applicable Items  | Value Restrictions | Units | Description                                                           |
| ------------------------ | ----- | ----------------- | ------------------ | ----- | --------------------------------------------------------------------- |
| ExplosiveRadius          | float | Explosive weapons | >= 0               | UU    | Size of the weapon's damaging explosion                               |
| BulletDamageRange        | float | Bullet Weapons    | >= 0               | UU    | Size of the damage range (_not_ the total range of the weapon)        |
| MaxDamageRangeProportion | float | All weapons       | 0 <= x <= 1        |       | Proportion of the damage range at which falloff starts                |
| MinDamageRangeProportion | float | All weapons       | 0 <= x <= 1        |       | Proportion of the damage range at which falloff ends                  |
| MinDamageProportion      | float | All weapons       | 0 <= x <= 1        |       | Proportion of the normal damage dealt at the MinDamageRangeProportion |

Weapon falloff is applied both to explosive and bullet weapons. For explosive weapons, falloff causes lower damage to targets further away from the explosion. For bullet weapons, falloff causes lower dmaage to targets further from the shooting player.

In both cases falloff is calculated over a distance scale known as the _damage range_; falloff is not necessarily linear over this range.

For explosive weapons, the damage range is the range from the central point of the explosion through to the damage radius (the `ExplosiveRadius`). For bullet weapons, the damage range is the range from the shooting player's position through to the value of the `BulletDamageRange` property. For hitscan weapons, the damage range is the `WeaponRange`.

Within this damage range, there is a `MaxDamageRangeProportion` - the proportion of the whole damage range for which the maximum damage is applied. Similarly there is a `MinDamageRangeProportion`, the distance after which the `MinDamageProportion`, the minimum proportion of the normal damage, is applied.

Below is an example set values and a graph:

| Property                 | Value |
| ------------------------ | ----- |
| Damage                   | 500   |
| ExplosiveRadius          | 300   |
| MaxDamageRangeProportion | 0.3   |
| MinDamageRangeProportion | 0.7   |
| MinDamageProportion      | 0.4   |

![Function describing damage done](\img\docs\doc_srv_api_properties_items_falloff_ex1.png)

Below is the graph for the (Medium) Spinfusor, for which falloff is linear over the radius of its explosion.

![Function describing damage done](\img\docs\doc_srv_api_properties_items_falloff_ex2.png)

The Assault Rifle is not linear over its whole range. Note that for bullet weapons, the `BulletDamageRange`, defining its damage range is _not_ the same thing as the range for the bullet; for projectiles, total range is controlled by the `ProjectileLifespan` property (described in [Projectile and Tracer](#projectile-and-tracer) below).

![Function describing damage done](\img\docs\doc_srv_api_properties_items_falloff_ex3.png)

The formula for the final proportion of the normal damage after falloff is:

![Function describing damage done](\img\docs\doc_srv_api_properties_items_falloff_eqn.png)

where `x` is the distance, `r` is the damage range, `m` is the minimum damage proportion, `p_max` is the maximum range proportion and `p_min` is the minimum range proportion.

### Sniper Rifles

| Property                 | Type  | Applicable Items   | Value Restrictions | Units   | Description                                                     |
| ------------------------ | ----- | ------------------ | ------------------ | ------- | --------------------------------------------------------------- |
| PhaseDamagePerEnergy     | float | Phase Rifle, SAP20 | > 0                | Damage  | Damage done per unit energy consumed by the Phase Rifle / SAP20 |
| PhaseMaxConsumedEnergy   | float | Phase Rifle, SAP20 | > 0                | Damage  | Maximum energy consumed by the Phase Rifle                      |
| BXTChargeMaxDamage       | float | BXT1               | > 0                | Damage  | Damage done by the BXT when fully charged                       |
| BXTChargeTime            | float | BXT1               | > 0                | Seconds | Time for a full BXT charge                                      |
| BXTChargeMultCoefficient | float | BXT1               | > 0                |         | Multiplicative coefficient controlling BXT charge curve         |
| BXTChargeDivCoefficient  | float | BXT1               | > 0                |         | Divisor coefficient controlling BXTcharge curve                 |

### Miscellaneous

| Property         | Type    | Applicable Items  | Value Restrictions | Units        | Description                                                             |
| ---------------- | ------- | ----------------- | ------------------ | ------------ | ----------------------------------------------------------------------- |
| DoesImpulseFlag  | boolean | Explosive weapons |                    |              | Whether the weapon's explosion pushes the flag around                   |
| DoesGibOnKill    | boolean | All weapons       |                    |              | Whether this weapon will cause a killed enemy to explode into pieces    |
| GibImpulseRadius | float   | All weapons       |                    | Unreal Units | Radius for which gibbing impulse is applied to pieces of deceased enemy |
| GibStrength      | float   | All weapons       |                    | Momentum     | Momentum applied to gibbed pieces of an enemy                           |


## Projectile and Tracer

| Property                   | Type  | Applicable Items   | Value Restrictions | Units  | Description                                                                            |
| -------------------------- | ----- | ------------------ | ------------------ | ------ | -------------------------------------------------------------------------------------- |
| ProjectileSpeed            | float | Projectile weapons | >= 0               | UU / S | Launch speed of the projectile                                                         |
| ProjectileMaxSpeed         | float | Projectile weapons | >= 0               | UU / S | Cap on the absolute projectile speed, regardless of inheritance                        |
| CollisionSize              | float | Projectile weapons | >= 0               | UU     | Radius of the projectile's collision sphere                                            |
| ProjectileInheritance      | float | Projectile weapons | >= 0               |        | Proportion of the shooter's velocity the projectile inherits                           |
| ProjectileLifespan         | float | Projectile weapons | >= 0               | S      | How long the projectile travels for before exploding in midair                         |
| ProjectileGravity          | float | Projectile weapons | >= 0               |        | Multiplier by which gravity affects the projectile                                     |
| ProjectileTerminalVelocity | float | Projectile weapons | >= 0               | UU / S | Terminal velocity due to gravity                                                       |
| ProjectileBounceDamping    | float | Projectile weapons | >= 0               |        | For projectiles which don't explode on impact, the proportion of energy lost on bounce |
| HitscanRange               | float | Hitscan weapons    | >= 0               |        | The range of the hitscan weapon                                                        |
| FireOffsetX                | float | All weapons        |                    | UU     | Offset to the player of the spawned projectile in the X direction (forwards/backwards) |
| FireOffsetY                | float | All weapons        |                    | UU     | Offset to the player of the spawned projectile in the Y direction (left/right)         |
| FireOffsetZ                | float | All weapons        |                    | UU     | Offset to the player of the spawned projectile in the Z direction (up/down)            |

## Fractal Grenades

| Property                 | Type  | Applicable Items | Value Restrictions | Units   | Description                                                       |
| ------------------------ | ----- | ---------------- | ------------------ | ------- | ----------------------------------------------------------------- |
| FractalDuration          | float | Fractals         | > 0                | Seconds | Duration of the Fractal effect                                    |
| FractalShardInterval     | float | Fractals         | > 0                | Seconds | Interval at which Fractal 'shards' fire                           |
| FractalAscentTime        | float | Fractals         | > 0                | Seconds | How long the Fractal takes to float off the ground to full height |
| FractalAscentHeight      | float | Fractals         | >= 0               | UU      | Height off the ground that the Fractal ascends to                 |
| FractalShardDistance     | float | Fractals         | > 0                | UU      | Horizontal distance which Fractal shards extend to                |
| FractalShardHeight       | float | Fractals         | >= 0               | UU      | Vertical distance above/below the Fractal which shards extend to  |
| FractalShardDamage       | float | Fractals         | >= 0               | Damage  | Damage done by each shard                                         |
| FractalShardDamageRadius | float | Fractals         | > 0                | UU      | Damage radius from the end of each shard                          |

## Melee

| Property          | Type  | Applicable Items | Value Restrictions | Units   | Description                                |
| ----------------- | ----- | ---------------- | ------------------ | ------- | ------------------------------------------ |
| MeleeDamageRadius | float | Melee            | >= 0               | UU      | Distance at which melee will hit           |
| MeleeConeAngle    | float | Melee            | 0 <= x <= 360      | Degrees | Angle of the cone for which melee will hit |

## Accuracy

| Property               | Type    | Applicable Items | Value Restrictions | Units | Description                                                                                                                  |
| ---------------------- | ------- | ---------------- | ------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| Accuracy               | float   | All weapons      | 0 <= x <= 1        |       | Proportion of accuracy for the weapon's shot                                                                                 |
| AccuracyLossOnShot     | float   | All weapons      | 0 <= x <= 1        |       | Accuracy decrease after shooting                                                                                             |
| AccuracyLossOnJump     | float   | All weapons      | 0 <= x <= 1        |       | Accuracy decrease when jumping                                                                                               |
| AccuracyLossMax        | float   | All weapons      | 0 <= x <= 1        |       | Maximum decrease in accuracy at a given time                                                                                 |
| AccuracyCorrectionRate | float   | All weapons      | 0 <= x <= 1        |       | Rate at which accuracy returns after decreasing                                                                              |
| ShotgunUseGOTYSpread   | boolean | Shotguns         |                    |       | Whether to use the older GOTY-patch shotgun spread (tighter, random) as opposed to the OOTB-patch spread (wider, non-random) |

## Grenades and Thrown Weapons

| Property                | Type    | Applicable Items | Value Restrictions | Units | Description                                                                           |
| ----------------------- | ------- | ---------------- | ------------------ | ----- | ------------------------------------------------------------------------------------- |
| ThrowDelay              | float   | Thrown weapons   | >= 0               | S     | Time taken for the projectile to be thrown                                            |
| ThrowPullPinTime        | float   | Thrown weapons   | >= 0               | S     | Time before the pin is pulled; after this it will be spawned even if the thrower dies |
| StuckDamageMultiplier   | float   | Sticky weapons   | >= 0               |       | Multiplier for damage when projectile is stuck to an enemy                            |
| StuckMomentumMultiplier | float   | Sticky weapons   | >= 0               |       | Multiplier for impulse when projectile is stuck to an enemy                           |
| FuseTimer               | float   | Thrown Weapons   | >= 0               | S     | Fuse time on the grenade                                                              |
| ExplodeOnContact        | boolean | Thrown weapons   |                    |       | Whether the projectile explodes on contact with an enemy                              |
| ExplodeOnFuse           | boolean | Thrown weapons   |                    |       | Whether the projectile explodes after its fuse timer                                  |
| MustBounceBeforeExplode | boolean | Thrown weapons   |                    |       | Whether the projectile must bounce at least once before exploding due to a fuse       |

## Packs

| Property                           | Type  | Applicable Items | Value Restrictions | Units           | Description                                                                  |
| ---------------------------------- | ----- | ---------------- | ------------------ | --------------- | ---------------------------------------------------------------------------- |
| PackSustainedEnergyCost            | float | Active Packs     | >= 0               | Energy / S      | Energy per second to maintain a given pack                                   |
| ThrustPackEnergyCost               | float | Thrust Pack      | >= 0               | Energy          | Energy cost to thrust                                                        |
| ThrustPackImpulse                  | float | Thrust Pack      |                    | Momentum        | Forward momentum given by a thrust                                           |
| ThrustPackSidewaysImpulse          | float | Thrust Pack      |                    | Momentum        | Sideways momentum given by a thrust                                          |
| ThrustPackMinVerticalImpulse       | float | Thrust Pack      | >= 0               | Momentum        | Minimum amount of vertical impulse given by a thrust                         |
| ThrustPackCooldownTime             | float | Thrust Pack      | >= 0               | S               | Cooldown before thrust can be used again                                     |
| ThrustPackSpeedRangeStart          | float | Thrust Pack      | >= 0               | UU / S          | Speed at which impulse generated by a thrust begins to falloff               |
| ThrustPackSpeedRangeEnd            | float | Thrust Pack      | >= 0               | UU / S          | Speed cap at which thrust impulse is fully lowered                           |
| ThrustPackSpeedCapReduction        | float | Thrust Pack      | 0 <= x <= 1        |                 | Proportion of thrust impulse reduced when past the speed cap                 |
| ShieldPackEnergyCostPerDamagePoint | float | Shield Pack      | >= 0               | Energy / Damage | How much energy is consumed by the shield pack when taking a point of damage |
| JammerPackRange                    | float | Jammer Pack      | >= 0               | UU              | Radius for how far the jammer pack effect extends                            |
| PackBuffAmount                     | float | Buffing Packs    | >= 0               | Various         | Buff effect amount for buffing packs like the energy recharge pack           |
| StealthPackMaxSpeed                | float | Stealth Pack     | >= 0               | UU / S          | Speed threshold past which a stealthed player is visible                     |

## Deployables

| Property                  | Type    | Applicable Items   | Value Restrictions | Units  | Description                                                                       |
| ------------------------- | ------- | ------------------ | ------------------ | ------ | --------------------------------------------------------------------------------- |
| DeployableRange           | float   | Deployables        | >= 0               | UU     | Range of a deployable (e.g. turret range)                                         |
| DeployableMaxAllowed      | integer | Deployables        | >= 0               |        | Maximum number of deployables of this type a player can have                      |
| DeployableMinProximity    | float   | Deployables        | >= 0               | UU     | How close two deployables of the same type can be placed                          |
| TurretTimeToAcquireTarget | float   | Deployable Turrets | >= 0               | S      | How long a turret takes to lock onto a target                                     |
| TurretCanTargetVehicle    | boolean | Deployable Turrets |                    |        | Whether the turret can target vehicles                                            |
| ForcefieldMinDamage       | float   | Forcefield         | >= 0               | Damage | Minimum damage incurred by passing through a forcefield                           |
| ForcefieldMaxDamage       | float   | Forcefield         | >= 0               | Damage | Maximum damage incurred by passing through a forcefield                           |
| ForcefieldMinDamageSpeed  | float   | Forcefield         | >= 0               | UU / S | The minimum speed at which damage will be dealt when passing through a forcefield |
| ForcefieldMaxDamageSpeed  | float   | Forcefield         | >= 0               | UU / S | The speed at which the maximum forcefield damage occurs                           |

## Mines

| Property                    | Type    | Applicable Items | Value Restrictions | Units   | Description                                                |
| --------------------------- | ------- | ---------------- | ------------------ | ------- | ---------------------------------------------------------- |
| MineDeployTime              | float   | Mines            | >= 0               | S       | How long before the mine is active and armed               |
| MineMaxAllowed              | integer | Mines            | >= 0               |         | Maximum number of mines of this type a player can have out |
| MineCollisionCylinderRadius | float   | Mines            | >= 0               | UU      | Radius of the collision cylinder used to check detonation  |
| MineCollisionCylinderHeight | float   | Mines            | >= 0               | UU      | Height of the collision cylinder used to check detonation  |
| ClaymoreDetonationAngle     | float   | Claymore Mines   | 0 <= x <= 360      | Degrees | Cone angle at which the Claymore will trigger              |
| PrismMineTripDistance       | float   | Prism Mines      | >= 0               | UU      | Amount the Prism Mine's tripwire extends left and right    |
