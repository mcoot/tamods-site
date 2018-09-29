---
id: doc_srv_api_properties_vehicles
title: Game Balance - Vehicles
sidebar_label: Game Balance - Vehicles
---

## Overview

Vehicle Property Modification can be used to modify the balance properties inherent to vehicles (Grav Cycles, Beowulfs and Shrikes), and also to modify their weapons.

Modification functions for the vehicles themselves fall under the `Vehicles` namespace, and their properties are under `Vehicles.Properties` (e.g. `Vehicles.Properties.HealthPool`).

Modification functions for vehicle weapons fall under the `VehicleWeapons` namespace, and their properties are under `VehicleWeapons.Properties` (e.g. `VehicleWeapons.Properties.ClipSize`). Vehicle weapons are named after their associated vehicle (e.g. `Shrike` for the Shrike cannon); the Beowulf has both the `BeowulfCannon` and `BeowulfChaingun` weapons.

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

## Vehicle Movement

## Vehicle Self Damage

## Vehicle Ramming

## Vehicle Weapon Ammo

## Vehicle Weapon Reloading and Firing

## Vehicle Weapon Damage and Impact

## Vehicle Weapon Projectiles

## Vehicle Weapon Accuracy