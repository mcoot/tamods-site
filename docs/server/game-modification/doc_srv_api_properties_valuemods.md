---
id: doc_srv_api_properties_valuemods
title: Game Balance - ValueMods
sidebar_label: ValueMods
sidebar_position: 2
---

Value Modifications (or ValueMods) can be applied to items or classes to grant players buffs of various kinds to that item, or just whenever they have that item or class equipped.

## Setting Value Mods

An object can have a list of ValueMods applied to it. Setting the ValueMods for an item/class implies _replacing_ whatever ValueMods were applied to it in the unmodded game. Therefore, if you want to extend the ValueMods applied but keep existing ones, you will have to make use of the provided getter functions to retrieve the original mods before overwriting.

In the below function definitions, `T` is the type of the value for the ValueMod in that pair, which could be a float, integer, boolean or string depending on the mod.

To set the ValueMods for an item:

`Items.setValueMods(class: string, itemName: string, mods: List<(ValueMod, T)>)`

To get the ValueMods for an item:

`Items.getValueMods(class: string, itemName: string): List<(ValueMod, T)>`

ValueMods may also be applied to classes, like the OOTB "Light", "Medium" and "Heavy, or the pre-OOTB classes like "Pathfinder", "Sentinel" or "Brute". To set the ValueMods for a class:

`Classes.setValueMods(class: string, mods: List<(ValueMod, T)>)`

To get the ValueMods for a class:

`Classes.getValueMods(class: string): List<(ValueMod, T)>`

### Example

In the below example, the Light Assault Rifle is modified such that when equipped, the player will be given the Rage perk. In addition, whenever the player has the Brute armor class, they will have the SuperHeavy perk.

```lua
Items.setValueMods("Light", "Light Assault Rifle", {
    {ValueMods.Rage, true},
    {ValueMods.RageTime, 15},
    {ValueMods.RageEnergyRegen, 100},
    {ValueMods.RageMassChange, -0.2},
    {ValueMods.RageHealthRestoration, 0.5},
})
Classes.setValueMods("Brute", {
    {ValueMods.MassBuff, 0.8},
    {ValueMods.SuperHeavy, true},
})
```

## Available ValueMods

Below is the list of available value mods. All ValueMods fall under the `ValueMods` namespace, so for instance you could refernce one with `ValueMods.Rage`.

### Perk Effects

The ValueMods listed below are those that correspond to particular perks which existed pre-OOTB. Some are listed twice.

A listing of the _values_ of ValueMods for pre-OOTB perks can be found in the [tamods-gotylike preset](https://github.com/mcoot/tamods-server-gotylike/blob/master/gotylike/items.lua).

#### Close Combat

| ValueMod             | Type  | Units      | Description                                          |
| -------------------- | ----- | ---------- | ---------------------------------------------------- |
| MeleeDamageReduction | float | % decrease | Decrease in melee damage taken                       |
| BackstabMeleeBuff    | float | % increase | Increase in melee damage given when done from behind |

#### Determination

| ValueMod      | Type    | Units | Description                                                                                                 |
| ------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| Determination | boolean |       | If true, when you die without killing anyone, you get 100 extra health, up to a maximum of 300 bonus health |

#### Egocentric

| ValueMod                   | Type    | Units      | Description                                                                 |
| -------------------------- | ------- | ---------- | --------------------------------------------------------------------------- |
| SelfDamageReduction        | float   | % decrease | Decrease in proportion of self-damage taken                                 |
| IgnoreGrenadeEffectsOnSelf | boolean |            | If true, grenade effects (e.g. whiteout, EMP) will not apply to self-damage |

#### Lightweight

| ValueMod      | Type  | Units      | Description                                               |
| ------------- | ----- | ---------- | --------------------------------------------------------- |
| MassBuff      | float | % increase | Increase in player mass (negative value gives decrease)   |
| RegenTimeBuff | float | seconds    | Decrease in time to regen (negative value gives increase) |

#### Looter

| ValueMod       | Type    | Units      | Description                                         |
| -------------- | ------- | ---------- | --------------------------------------------------- |
| AmmoPickupBuff | float   | % increase | Increase in ammo gained from a pickup               |
| BeltPickupBuff | integer | ammo       | Absolute increase in belt ammo gained from a pickup |

#### Mechanic

| ValueMod                            | Type    | Units      | Description                                                                   |
| ----------------------------------- | ------- | ---------- | ----------------------------------------------------------------------------- |
| RepairToolDamagesEnemyObjectives    | boolean |            | If true, the repair tool damages enemy base assets and disables turrets       |
| RepairRateBuff                      | float   | % increase | Increase in repair rate                                                       |
| VehiclePassengerDamageReductionBuff | float   | % decrease | Decrease in damage done to passengers of a vehicle you pilot when it explodes |

#### Pilot

| ValueMod          | Type    | Units      | Description                                                     |
| ----------------- | ------- | ---------- | --------------------------------------------------------------- |
| VehicleHealthBuff | float   | % increase | Percentage increase in vehicle health                           |
| EjectionSeat      | boolean |            | If true, you eject from vehicles on explosion rather than dying |

#### Potential Energy

| ValueMod                          | Type    | Units      | Description                                       |
| --------------------------------- | ------- | ---------- | ------------------------------------------------- |
| PotentialEnergy                   | boolean |            | If true, you gain energy when you take damage     |
| PotentialEnergyDamageTransferBuff | float   | % increase | Increase in proportion of damage gained as energy |
| PotentialEnergyOnFallDamage       | boolean |            | Whether Potential Energy applies to fall damage   |

#### Quick Draw

| ValueMod      | Type  | Units      | Description                               |
| ------------- | ----- | ---------- | ----------------------------------------- |
| QuickDraw     | float | % decrease | Decrease in time taken to switch weapons  |
| QuickDrawBelt | float | % decrease | Decrease in time taken to throw a grenade |

#### Rage

| ValueMod              | Type    | Units      | Description                           |
| --------------------- | ------- | ---------- | ------------------------------------- |
| Rage                  | boolean |            | Whether Rage is enabled               |
| RageTime              | float   | seconds    | How long Rage lasts                   |
| RageEnergyRegen       | float   | Energy     | Amount of energy restored by Rage     |
| RageHealthRestoration | float   | % health   | Proportion of health restored by Rage |
| RageMassChange        | float   | % increase | Change in mass while Rage is active   |

#### Reach

| ValueMod       | Type    | Units | Description                                   |
| -------------- | ------- | ----- | --------------------------------------------- |
| Reach          | boolean |       | Whether Reach is enabled                      |
| ReachTier      | integer |       | 'Level' of Reach applied; should be 1, 2 or 3 |
| ReachOnPickups | boolean |       | Whether Reach also applies to ammo pickups    |

#### Safe Fall

| ValueMod               | Type  | Units      | Description                                             |
| ---------------------- | ----- | ---------- | ------------------------------------------------------- |
| FallDamageReduction    | float | % decrease | Decrease in proportion of fall damage taken             |
| RunoverDamageReduction | float | % decrease | Decrease to damage caused by being runover by a vehicle |

#### Safety Third

| ValueMod             | Type    | Units      | Description                                               |
| -------------------- | ------- | ---------- | --------------------------------------------------------- |
| ExtraBeltAmmo        | integer | ammo       | Number of additional belt items granted                   |
| BeltDamageRadiusBuff | float   | % increase | Increase in explosive radius of belt items                |
| ExtraMines           | integer | mines      | Number of additional mines which you may have out at once |

#### Sonic Punch

| ValueMod            | Type    | Units    | Description                                         |
| ------------------- | ------- | -------- | --------------------------------------------------- |
| SonicPunch          | boolean |          | Whether Sonic Punch is enabled                      |
| SonicPunchRange     | float   | UU       | Range for the Sonic Punch effect                    |
| SonicPunchKnockback | float   | Momentum | Knockback done by Sonic Punch                       |
| SonicPunchFlagDrop  | boolean |          | Whether Sonic Punch causes enemies to drop the flag |

#### Stealthy

| ValueMod                          | Type  | Units      | Description                                            |
| --------------------------------- | ----- | ---------- | ------------------------------------------------------ |
| SensorDetectionReduction          | float | % decrease | Decrease in range at which you are detected by sensors |
| AcquisitionTimeByEnemyTurretsBuff | float | % increase | Increase in time taken for enemy turrets to target you |

#### Super Capacitor (a.k.a. Ultra Capacitor I)

| ValueMod   | Type  | Units  | Description                             |
| ---------- | ----- | ------ | --------------------------------------- |
| EnergyBuff | float | Energy | Absolute increase to player energy pool |

#### Super Heavy

| ValueMod   | Type    | Units      | Description                                                  |
| ---------- | ------- | ---------- | ------------------------------------------------------------ |
| SuperHeavy | boolean |            | Whether enemies are damage by contact with you at high speed |
| MassBuff   | float   | % increase | Increase in mass                                             |

#### Survivalist

| ValueMod          | Type  | Units    | Description                                   |
| ----------------- | ----- | -------- | --------------------------------------------- |
| SurvivalistHealth | float | % health | Proportion of health restored by ammo pickups |
| SurvivalistEnergy | float | % energy | Proportion of energy restored by ammo pickups |

#### Ultra Capacitor (a.k.a. Ultra Capacitor II)

| ValueMod   | Type  | Units  | Description                             |
| ---------- | ----- | ------ | --------------------------------------- |
| EnergyBuff | float | Energy | Absolute increase to player energy pool |

#### Wheel Deal

| ValueMod          | Type  | Units      | Description                           |
| ----------------- | ----- | ---------- | ------------------------------------- |
| VehicleEnergyBuff | float | % increase | Percentage increase in vehicle energy |

### Miscellaneous ValueMods

Below is a listing of all ValueMods not associated with a perk. Some of these are associated with packs, some were associated with weapon upgrades in the past, and others are not used in the unmodded game at all.

| ValueMod                      | Type    | Units       | Description                                                                                          |
| ----------------------------- | ------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| None                          |         |             | ValueMod that has no effect                                                                          |
| HealthBuff                    | float   | Health      | Absolute increase to the player's health pool                                                        |
| HealthRegenTimeBuff           | float   | % decrease  | Decrease in time before health regen starts                                                          |
| HealthRegenRateBuff           | float   | % increase  | Increase in rate at which health regenerates                                                         |
| EnergyRegenTimeBuff           | float   | % decrease  | Decrease in time before energy regen starts (default is 0, so only negative values will have effect) |
| EnergyRegenRateBuff           | float   | % increase  | Increase in rate at which energy regenerates                                                         |
| WalkSpeedBuff                 | float   | % increase  | Increase to walking speed                                                                            |
| RadarLink                     | boolean |             | If true, sensors always show enemy markers at full visibility when in range                          |
| BuildTimeBuff                 | float   | % decrease  | Decrease in time taken to set up deployables                                                         |
| DeployableRepairRateBuff      | float   | % increase  | Increase in the rate of repairing deployables                                                        |
| StickyHands                   | boolean |             | If true, player is immune to concussive effects that would cause them to drop the flag               |
| EnergyDrainBuff               | float   | % increase  | Increase to energy drain effect of an item                                                           |
| TrapDetection                 | boolean |             | If true, the player can see markers for enemy mines                                                  |
| ThrustPackCostReduction       | float   | % decrease  | Decrease in energy cost for the thrust pack                                                          |
| ThrustPackPowerBuff           | float   | % increase  | Increase in the power of the thrust pack                                                             |
| ShieldPackBuff                | float   | % increase  | Increase in effictiveness for the shield pack                                                        |
| JammerPackRadiusBuff          | float   | % increase  | Increase in range for the jammer pack                                                                |
| DeployableHealthBuff          | float   | Health      | Additional health for deployable items                                                               |
| DeployableRangeBuff           | float   | % increase  | Increase in range for deployable sensors and turrets                                                 |
| ExtraDeployables              | integer | Deployables | Increase in the number of deployables allowed out at once                                            |
| ShocklanceEnergyCost          | float   | Energy      | Energy cost to use the Shocklance                                                                    |
| StealthPackEntryTimeReduction | float   | % decrease  | Decrease in time taken to go invisible, including after damage or jamming                            |
| StealthPackPulseIgnoreTime    | float   | seconds     | Time after going in stealth that you won't be uncloaked by damage                                    |
| BlackoutLengthReduction       | float   | % decrease  | Decrease in the length of the effect of Blackout grenades                                            |
| ExtraAmmoSpawnBuff            | float   | % increase  | Increase in amount of spawning ammo                                                                  |
| MaxSkiSpeed                   | float   | Speed       | Absolute increase in the maximum speed achievable by skiing alone                                    |
| TerminalSkiSpeed              | float   | Speed       | Absolute increase in the maximum possible skiing speed                                               |
| MaxJetSpeed                   | float   | Speed       | Absolute increase in maximum speed achievable by jetting alone                                       |
| TerminalJetSpeed              | float   | Speed       | Absolute increase in the maximum possible jetting speed                                              |
| MaxSkiControl                 | float   | % increase  | Increase in maximum amount of turning control while skiing                                           |
| PeakSkiControlSpeed           | float   | Speed       | Change in the speed value at which maximum ski control is reached                                    |
| SkiControlVariance            | float   | Variance    | Change in variance of the normal distribution for ski control around the peak                        |
| StoppingDistanceBuff          | float   | % increase  | Increase to stopping distance when skiing is stopped                                                 |