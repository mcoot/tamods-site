---
id: doc_dev_api_drawing
title: Hud Drawing
sidebar_label: Hud Drawing
---

## HUD Data Type

The `HUD` datatype has a single property, `canvas`, which gives access to the HUD's drawing canvas.

#### Associated functions

`project(hud: HUD, vector: Vector): Vector`

Projects a 3D vector onto the 2D canvas of the HUD. The resulting `Vector` is still a 3D vector type, but the `X` and `Y` components represent the 2D projected coordinates.

`drawDamageNumber(hud: HUD, num: string, color: Color, location: Vector, xScale: float, yScale: float)`

Draws a damage number with the value `num` (which can be any text). The `Vector`'s `X` and `Y` components determine the 2D positioning of the damage number on the HUD canvas, while the `Z` component determines its depth/draw order.

`isOnScreen(hud: HUD, position: Vector): boolean`

Returns true if the given world position is within the bounds of the HUD.

`getPlayerPos(hud: HUD): Vector`

Gets the world position of the player.

## Accessing a custom Hud drawing context

### The `onDrawCustomHud` hook

Custom Hud drawing in TAMods is enabled via the [`onDrawCustomHud` event](doc_dev_api_events.md#ondrawcustomhud).

The user can draw their custom Hud elements in an event handler for `onDrawCustomHud`. In practice, it's highly recommended to not use this method, and instead draw custom functions via the Ubermenu preset using the method defined in the next section.

#### Example using `onDrawCustomHud`

### Custom Huds using Ubermenu

The Ubermenu preset defines an abstracted way to draw Hud components, handling `onDrawCustomHud` automatically.

<HUD MODULES>

## Color Data Type

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