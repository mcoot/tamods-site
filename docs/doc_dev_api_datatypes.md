---
id: doc_dev_api_datatypes
title: Miscellaneous Data Types
sidebar_label: Miscellaneous Data Types
---

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

`Vector4` represents a 4D vector, and has the constructor function `Vector4(x: float, y: float, z: float, w: float): Vector4`.

| Property | Type  | Description               |
|----------|-------|---------------------------|
| `x`      | float | X component of the vector |
| `y`      | float | Y component of the vector |
| `z`      | float | Z component of the vector |
| `w`      | float | W component of the vector |

## DamageNumber Class

`DamageNumber` represents a damage number. Has the constructor function `DamageNumber(number: integer, persistTime: float, location: FVector4, isShield: boolean)`

#### Properties

| Property       | Type     | Description                                              |
|----------------|----------|----------------------------------------------------------|
| `number`       | integer  | The number value of the damage                           |
| `time`         | float    | The remaining time this damage number should persist for |
| `location`     | FVector4 | The world-space location of the damage number            |
| `color`        | Color    | The current colour of the damage number                  |
| `scale`        | float    | The current scale of the damage number (1.0 = normal)    |
| `shieldDamage` | boolean  | Whether the damage number represents shield damage       |

## DamageNumberArray class

`DamageNumberArray` represents a C++ array of damage numbers. 

#### Methods

`DamageNumberArray:add(item: DamageNumber)`

Adds an item to the array.

`DamageNumberArray:remove(index: integer)`

Removes the item at the given index.

`DamageNumberArray:clear()`

Clears all elements from the array.

`DamageNumberArray:size(): integer`

Gets the number of elements in the array.

`DamageNumberArray:get(index: integer): DamageNumber`

Gets the element at the given index.

`DamageNumberArray:set(index: integer, item: DamageNumber)`

Sets the element at the given index.

## Object

`Object` represents a generic Unreal Engine object.

#### Methods

`Object:getName(): string`

Gets the name of this object.

`Object:getClassName(): string`

Gets the name of this object's class.

`Object:getFullName(): string`

Gets the full Unreal name for this object.

## FloatArray

`FloatArray` represents a C++ array of floating point numbers.

#### Methods

`FloatArray:add(item: float)`

Adds an item to the array.

`FloatArray:remove(index: integer)`

Removes the item at the given index.

`FloatArray:clear()`

Clears all elements from the array.

`FloatArray:size(): integer`

Gets the number of elements in the array.

`FloatArray:get(index: integer): float`

Gets the element at the given index.

`FloatArray:set(index: integer, item: float)`

Sets the element at the given index.