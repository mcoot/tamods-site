---
id: doc_dev_api_drawing
title: Drawing
sidebar_label: Drawing
---

## HUD Data Type

The `HUD` datatype has a single property, `canvas`, which gives access to the HUD's drawing canvas.

#### Associated functions

`getHUD(): HUD`

Gets a reference to the player's HUD.

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

## Data Types and Enums

### Color Data Type

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

### TextAlignment Enum

Enumerates the possible text alignments.

- `enums.TEXT_ALIGN_LEFT` = 0 - Left-aligned
- `enums.TEXT_ALIGN_CENTER` = 0 - Center-aligned
- `enums.TEXT_ALIGN_RIGHT` = 0 - Right-aligned

### Viewport Information

The `viewport` namespace gives information about the current HUD viewport (drawable area).

`viewport.size(): Vector2`

Gets the current size of the HUD viewport as a vector.

`viewport.isMainMenuOpen(): boolean`

Returns true if the player has the menu open.

`viewport.isScoreboardOpen(): boolean`

Returns true if the player currently has the scoreboard open.

## Canvas Drawing

The functions described below can be used in event handlers for a [drawing event](doc_dev_api_events.md#available-event-handlers), such as `onDrawCustomHud` or `onDrawHealthBar`.

### Drawing Primitives

`drawRect(x1: float, y1: float, x2: float, y2: float, color: Color)`

Draw a filled rectangle with the given coordinates and colour.

`drawBox(x1: float, y1: float, x2: float, y2: float, color: Color)`

Draw an outline rectangle with the given coordinates and colour.

`drawProgressBar(x1: float, y1: float, x2: float, y2: float, color: Color, direction: integer, proportion: float)`

Draws a rectangle progress bar filled to the given proportion. The `direction` parameter can be one of:

- `0` - up
- `1` - right
- `2` - down
- `3` - left

`draw2dLine(x1: float, y1: float, x2: float, y2: float, color: Color)`

Draws a line between the two given points.

### Drawing Text

TAMods provides text drawing in three different font types: default (the damage number font), small (the console font) and the Unreal Tournament font set.

#### Damage Number Font

`drawText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, scale: float)`

Draw text in the damage number font. The `scale` parameter performs bitmap scaling on the text (so `scale` > 1 will produce blurriness).

`getTextSize(text: string, scale: float): Vector2`

Get the display size of the given text printed in damage number font, as a [2D vector](doc_dev_api_datatypes.md#vector2).

#### Small Font

`drawSmallText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, scale: float)`

Draw text in the console font. The `shadowSize` value determines the distance of the drop shadow (`0` gives no shadow). The `scale` parameter performs bitmap scaling.

`getSmallTextSize(text: string, scale: float): Vector2`

Get the display size of the text in the console font.

#### Unreal Tournament Fonts

`drawUTText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer)`

Draw text in one of the Unreal Tournament fonts. `fontNum` is an integer in the range of `0` to `3`; roughly speaking the lower values correspond to smaller fonts.

`drawUTTextScaled(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer, scale: float)`

Draw text in one of the Unreal Tournament fonts, with bitmap scaling applied.

`getUTTextSize(text: string, fontNum: integer): Vector2`

Get the display size of the text in the given UT font.

`getUTTextSizeScaled(text: string, fontNum: integer, scale: float): Vector2`

Get the display size of the text in the given UT font, after bitmap scaling.
