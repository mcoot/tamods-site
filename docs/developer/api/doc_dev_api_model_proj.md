---
id: doc_dev_api_model_proj
title: Model and Projectile Modification
sidebar_label: Model and Projectile Modification
sidebar_position: 6
---

## Models

TAMods allows you to swap the first person weapon models of weapons with others, including those of weapons removed from the game.

Weapon model swapping will only affect the first person view. Note that as of TAMods v0.7, weapon model swapping is not graphically perfect. Swapping a weapon for one that is totally different (e.g. a sniper rifle for a pistol) will look a bit strange and have some animation issues. Generally, the more similar the source and replacement models, the more likely the swap is to look 'correct'.

It is not recommended to do scripted / dynamic swapping of weapon models - the nature of this system is that often changes will not appear until the game is restarted, and rapid switches can cause crashes.

#### Functions

`setWeaponModel(sourceClass: string, sourceWeapon: string, replacementClass: string, replacementWeapon: string, swapAnims: boolean, leavePositioning: boolean)`

The `Class` parameters should be one of `Light`, `Medium` or `Heavy`, and the `Weapon` parameters should be weapon names.

This function will swap the source weapon's first person model with that of the replacement weapon.

The `swapAnims` parameter determines whether to also swap weapon animations. Generally you will want this set to `true`.

The `leavePositioning` parameter determines whether the weapon positioning should be adjusted. Generally you will want this set to `false`.

#### Example

```lua
-- Get the SAP20 back :D
setWeaponModel("Light", "Phase Rifle", "Light", "SAP20", true, false)
```

## Projectiles

TAMods allows you to modify and swap the projectile particle systems of weapons, including swapping to projectiles removed from the game.

Projectile swapping/modification will only affect _your_ projectiles, not those of other players. The projectile swapping is based on the [Particle Systems](doc_dev_api_particlesystems.md) features, but understanding of that (hideously complex) system is not necessary to merely modify or swap projectiles.

Swapping weapons with actual projectile models rather than particle systems (e.g. many grenades) will not produce actual model swaps. Also, projectile swaps generally do not function correctly in roam map.

#### Functions

`getProjectile(class: string, weapon: string): ParticleSystem`

Gets the particle system associated with the given weapon.

`cloneProjectile(ps: ParticleSystem): ParticleSystem`

Clones a given particle system (such as a projectile's), so that modifications to the clone do not apply to the original.

`setProjectile(class: string, weapon: string, replacement: ParticleSystem)`

Replaces the projectile of the given weapon with the given particle system.

`setProjectileColor(ps: ParticleSystem, color: Color, intensity: float)`

Modify the given particle system to tint it the given colour, with the given intensity (roughly maps to brightness).

#### Example

```lua
-- Modify the spinfusor projectile to be red
setProjectileColor(getProjectile("Medium", "Spinfusor"), rgb(255, 0, 0), 10.0)

-- Replace the Falcon's bullets with heavy spinfusor shots
setProjectile("Light", "Falcon", cloneProjectile(getProjectile("Heavy", "Heavy Spinfusor")))
```

## Available weapons for modification

### Light

#### Impact

- Light Spinfusor
- Dueling Spinfusor
- Stealth Spinfusor
- Bolt Launcher
- Light Twinfusor
- Blinksfusor

#### Timed

- Light Grenade Launcher
- Jackal

#### Speciality

- BXT1 Rifle
- BXT-1A Rifle
- Phase Rifle
- SAP20

#### Bullet

- Light Assault Rifle
- Falcon
- Sparrow
- Throwing Knives
- Rhino SMG
- Arctic Rhino SMG
- SN7 Silenced Pistol
- Arctic SN7 Silenced Pistol

#### Short Range

- Shotgun
- Holdout Shotgun
- Accurized Shotgun
- Shocklance

#### Belt

- Impact Nitrons
- Explosive Nitrons
- Compact Nitrons
- T5 Grenades
- Sticky Grenades
- Sticky Grenades XL
- Claymore Mines
- Prism Mines
- Chaff Grenades

### Medium

#### Impact

- Spinfusor
- Thumper
- Thumper D
- Thumper DX
- Twinfusor
- Blinksfusor
- Honorfusor

#### Timed

- Arx Buster
- Dust Devil
- Grenade Launcher

#### Speciality

- Improved Repair Tool
- Long Range Repair TOol
- ELF Projector

#### Bullet

- Assault Rifle
- Gast Rifle
- NJ4 SMG
- Desert NJ4 SMG
- NJ5-B SMG
- TCN4 SMG
- TCN4 Rockwind SMG
- TC24
- Plasma Gun
- Nova Blaster
- Eagle Pistol

#### Short Range

- Sawed-off Shotgun
- Flak Cannon

#### Belt

- AP Grenades
- Frag Grenades XL
- EMP Grenades
- EMP XL Grenades
- Blackout Grenades
- Cluster Grenades
- Proximity Grenades
- Short-Fuse Frag Grenades

### Heavy

#### Impact

- Heavy Spinfusor
- Heavy Blinksfusor
- Devastator Spinfusor
- Spinfusor MKD
- Spinfusor MK-X
- Heavy Bolt Launcher
- Heavy Twinfusor

#### Timed

- Fusion Mortar
- Fusion Mortar Deluxe
- MIRV Launcher

#### Speciality

- Saber Launcher
- Titan Launcher
- Gladiator

#### Bullet

- Chaingun
- Chain Cannon
- X1 LMG
- Plasma Cannon
- Nova Colt
- Nova Blaster MX

#### Short Range

- Automatic Shotgun
- The Hammer
- EFG

#### Belt

- Frag Grenades
- Fractal Grenades
- Extended Fractals
- Light Sticky Grenades
- Mines
- Spinfusor Disks