---
id: doc_srv_api_properties_classes
title: Game Balance - Classes
sidebar_label: Game Balance - Classes
---

## Overview

Class Property Modification can be used to modify the balance properties inherent to player classes (i.e. light, medium, heavy).

All class modification functions and properties fall under the `Classes` namespace. Pproperties fall under the `Classes.Properties` namespace. So for instance, one could reference a property with `Classes.Properties.HealthPool`.

### Setting Class Properties

Getter and Setter functions for property values are provided.

`Classes.setProperty(className: string, property: ItemProperty, value: T)`

`setProperty` sets the value of the property `property` for the class `className`. The type `T` represents the type of the values of that property - depending on the property this may be a boolean, integer, float or string.

`Classes.getProperty(className: string, property: ItemProperty): T`

`getProperty` retrieves the value of the given property. The type `T` is the type of values of that property.

## Base Stats

## Movement and Skiing

## Jetting and Air Control

## Collision