---
id: doc_srv_api_properties_classes
title: Game Balance - Classes
sidebar_label: Classes
---

## Overview

Class Property Modification can be used to modify the balance properties inherent to player classes (i.e. Light, Medium, Heavy, or pre-OOTB classes like Pathfinder, Sentinel or Brute).

All class modification functions and properties fall under the `Classes` namespace. Properties fall under the `Classes.Properties` namespace. So for instance, one could reference a property with `Classes.Properties.HealthPool`.

### Setting Class Properties

Getter and Setter functions for property values are provided.

`Classes.setProperty(className: string, property: ItemProperty, value: T)`

`setProperty` sets the value of the property `property` for the class `className`. The type `T` represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string.

`Classes.getProperty(className: string, property: ItemProperty): T`

`getProperty` retrieves the value of the given property. The type `T` is the type of values of that property.

## Base Stats

| Property             | Type  | Value Restrictions | Units      | Description                                              |
| -------------------- | ----- | ------------------ | ---------- | -------------------------------------------------------- |
| Health Pool          | float | > 0                | Health     | Health pool for this class                               |
| Energy Pool          | float | >= 0               | Energy     | Energy pool for the class                                |
| EnergyRechargeRate   | float | >= 0               | Energy / S | Rate at which energy recovers                            |
| JetEnergyCost        | float | >= 0               | Energy / S | Energy per second needed to jet                          |
| InitialJetEnergyCost | float | >= 0               | Energy     | Amount of energy used in initiating the jetpack          |
| RegenTime            | float | >= 0               | S          | Time before health regen starts                          |
| RegenRate            | float | >= 0               |            | How fast to regenerate health while regen is ongoing     |
| LowHealthThreshold   | float | >= 0               |            | Percentage of health at which low health UI effects play |

## Movement and Skiing

| Property                    | Type    | Value Restrictions | Units  | Description                                                                                                      |
| --------------------------- | ------- | ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| Mass                        | float   | >= 0               |        | Mass for players of this type                                                                                    |
| GroundSpeed                 | float   | >= 0               | UU / S | Walking speed                                                                                                    |
| MaxSkiingSpeed              | float   |                    | UU / S | Max speed achievable via skiing                                                                                  |
| MaxSkiControl               | float   | 0 <= x <= 1        |        | Max proportion of turn control the player can have while skiing                                                  |
| SkiControlPeakSpeed         | float   | >= 0               | UU / S | Speed at which the player has maximum turning control; the mean of the normal curve for turn control             |
| SkiControlVariance          | float   | >= 0               |        | Variance of the normal / bell curve for turn control; larger values mean a broader speed range with high control |
| SkiSlopeGravity             | float   | >= 0               |        | Gravity applied to the player while skiing down a slope                                                          |
| VehicleSpeedInheritance     | float   | 0 <= x <= 1        |        | Proportion of speed to inherit when jumping out of a vehicle; affected by the vehicle's exit speed cap           |
| MomentumDampeningEnabled    | boolean |                    |        | Whether impulse from an explosive weapon is reduced when the player is moving fast enough                        |
| MomentumDampeningThreshold  | float   | >= 0               | UU / S | Speed threshold past which momentum dampening is active                                                          |
| MomentumDampeningProportion | float   | 0 <= x <= 1        |        | Proportional reduction in impulse when momentum is dampened                                                      |

## Jetting and Air Control

| Property                         | Type  | Value Restrictions | Units    | Description                                                           |
| -------------------------------- | ----- | ------------------ | -------- | --------------------------------------------------------------------- |
| MaxJettingSpeed                  | float | >= 0               | UU / S   | Max speed achievable via jetting                                      |
| JetAcceleration                  | float | >= 0               | UU / S^2 | Acceleration caused by jetting                                        |
| InitialJetAccelerationMultiplier | float | >= 0               |          | Multiplier to acceleration for an initial jetpack boost               |
| InitialJetLength                 | float | >= 0               | S        | How long the initial jetpack boost lasts                              |
| ForwardJetProportion             | float | 0 <= x <= 1        |          | Proportion of jetting acceleration applied to forwards momentum       |
| JetBoostMaxGroundSpeed           | float | >= 0               | UU / S   | Maximum ground speed achievable via jetting while skiing              |
| DefaultAirControl                | float | 0 <= x <= 1        |          | Base proportion of turn / strafe control the player has in the air    |
| AirControlMaxMultiplier          | float | >= 0               |          | Multiplier applied to air control at speeds below the reduction range |
| AirControlMinMultiplier          | float | >= 0               |          | Multiplier applied to air control at speeds above the reduction range |
| AirControlReductionRangeMax      | float | >= 0               | UU / S   | Speed at which air control begins to decrease                         |
| AirControlReductionRangeMin      | float | >= 0               | UU / S   | Speed at which air control stops decreasing                           |

Air control works in a similar way to damage falloff: there is a 'reduction range' of speeds between `AirControlReductionRangeMax` and `AirControlReductionRangeMin`, between which the multiplier applied to air control will drop off linearly.

## Collision

| Property                | Type  | Value Restrictions | Units | Description                              |
| ----------------------- | ----- | ------------------ | ----- | ---------------------------------------- |
| CollisionCylinderRadius | float | >= 0               | UU    | Radius of the class's collision cylinder |
| CollisionCylinderHeight | float | >= 0               | UU    | Height of the class's collision cylinder |