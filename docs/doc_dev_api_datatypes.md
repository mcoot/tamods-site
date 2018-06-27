---
id: doc_dev_api_datatypes
title: Data Types
sidebar_label: Data Types
---

## Enums

The `enums` namespace contains constants and useful enumerations.

### Teams enum

Enumerates the possible values for a team number.

- `enums.TEAM_BLOOD_EAGLE` = 0
- `enums.TEAM_DIAMOND_SWORD` = 1
- `enums.TEAM_SPECTATOR` = 255

### Equip Points enum

Enumerates the possible values for an equipment slot.

- `enums.EQUIPMENT_NONE`= 0 - null/invalid equipment slot
- `enums.EQUIPMENT_MELEE` = 1 - melee slot
- `enums.EQUIPMENT_PRIMARY` = 2 - first weapon slot
- `enums.EQUIPMENT_SECONDARY` = 3 - second weapon slot
- `enums.EQUIPMENT_TERTIARY` = 4 - third weapon slot
- `enums.EQUIPMENT_QUARTERNARY` = 5 - fourth weapon slot (no classes currently have a fourth weapon)
- `enums.EQUIPMENT_PACK` = 6 - pack item slot
- `enums.EQUIPMENT_BELT` = 7 - belt item slot
- `enums.EQUIPMENT_DEPLOYABLE` = 8 - deployed deployable slot
- `enums.EQUIPMENT_LASERTARGET` = 9 - laser targetter slot  

### Reticule Type enum

Enumerates the possible types of reticule / crosshair.

- aaa

## Color

The `Color` type has the following properties:

| Property | Type            | Description                            |
|----------|-----------------|----------------------------------------|
| `r`      | integer (0-255) | Red component of the color             |
| `g`      | integer (0-255) | Green component of the color           |
| `b`      | integer (0-255) | Blue component of the color            |
| `a`      | integer (0-255) | Alpha (opacity) component of the color |

#### Associated functions

`rgba(r: integer, g: integer, b: integer, a: integer): Color`

Constructs a `Color` with the given components.

`rgb(r: integer, g: integer, b: integer): Color`

Constructs a `Color` with full opacity (`a == 255`) and the given components.

`lerpColor(c1: Color, c2: Color: alpha: float): Color`

Linearly interpolates between colors `c1` and `c2`. The `alpha` parameter is a float between `0` and `1` determines the proportions: `0` gives 100% of `c1`, and `1` gives 100% of `c2`.

#### Example

```lua
c1 = rgba(255, 0, 0, 128)
c2 = rgb(0, 0, 255)
c3 = lerpColor(c1, c2, 0.5)
console("Color c3 has values (r: " .. c3.r .. ", g:" .. c3.g .. ", b:" .. c3.b .. ", a:" .. c3.a .. ")")
console("AND IT GIVES YOU NICE PURPLE TEXT", c3)
```

## Vector2

`Vector2` represents a 2D vector, and has the constructor function `Vector2(x: float, y: float): Vector2`.

| Property | Type  | Description               |
|----------|-------|---------------------------|
| `x`      | float | X component of the vector |
| `y`      | float | Y component of the vector |

#### Example

```lua
function addVector2s(vec1, vec2)
    return Vector2(vec1.x + vec2.x, vec1.y + vec2.y)
end

v1 = Vector2(1.5, 2)
v2 = Vector2(2, 3)
v3 = addVector2s(v1, v2)
```

## Vector

`Vector` represents a 3D vector, and has the constructor function `Vector(x: float, y: float, z: float): Vector`.

| Property | Type  | Description               |
|----------|-------|---------------------------|
| `x`      | float | X component of the vector |
| `y`      | float | Y component of the vector |
| `z`      | float | Z component of the vector |

## Vector4

`Vector4` represents a 4D vector, and has the constructor function `Vector4(x: float, y: float, z: float, w: float): Vector4`..

| Property | Type  | Description               |
|----------|-------|---------------------------|
| `x`      | float | X component of the vector |
| `y`      | float | Y component of the vector |
| `z`      | float | Z component of the vector |
| `w`      | float | W component of the vector |

## Object

`Object` represents a generic Unreal Engine object.

#### Methods

`Object.getName(): string`

Gets the name of this object.

`Object.getClassName(): string`

Gets the name of this object's class.

`Object.getFullName(): string`

Gets the full Unreal name for this object.

## FloatArray

`FloatArray` represents a C++ array of floating point numbers.

#### Methods

`FloatArray.add(item: float)`

Adds an item to the array.

`FloatArray.remove(index: integer)`

Removes the item at the given index.

`FloatArray.clear()`

Clears all elements from the array.

`FloatArray.size(): integer`

Gets the number of elements in the array.

`FloatArray.get(index: integer): float`

Gets the element at the given index.

`FloatArray.set(index: integer, item: float)`

Sets the element at the given index.