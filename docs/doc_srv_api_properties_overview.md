---
id: doc_srv_api_properties_overview
title: Game Balance Overview
sidebar_label: Overview
---

One of the most powerful features of TAMods-Server is the Game Balance modification functionality, which allows a server owner to modify the properties and behaviour of in-game items, classes, vehicles and vehicle weapons.

## Properties vs ValueMods

There are two mechanisms by which a particular game object may be modified.

First, their _properties_ may be modified - this modifies the properties of the 'template' from which objects of a given kind are created.

Second, _value modifications_ (or ValueMods) may be applied to them - this hooks into the system the game uses for buffs and perks; ValueMods will typically apply some sort of buff to the player when they have that item or class equipped.

Properties can be modified on items, classes, vehicles and vehicle weapons, but ValueMods can only be modified on items and classes.

## Reference

See the [ValueMods](doc_srv_api_properties_valuemods.md) page for a reference on available ValueMods.

See the following pages for references on property modification:

* [Items](doc_srv_api_properties_items.md)
* [Classes](doc_srv_api_properties_classes.md)
* [Vehicles and Vehicle Weapons](doc_srv_api_properties_vehicles.md)