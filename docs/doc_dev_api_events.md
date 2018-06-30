---
id: doc_dev_api_events
title: Event Handling and I/O
sidebar_label: Event Handling and I/O
---

## Event Handling and Input/Output in TAMods

The code in your `config.lua`, `custom.lua` and any custom scripts is run when TAMods loads the config (on injection, and when the `/reloadconfig` command is used). Generally you will want your mod to be able to run code at other times during the game. To do this, you need to set up _event handlers_ which are triggered by certain events in the game.

TAMods allows you to write handlers for a number of ingame events. You can also attach handlers to input from the player via keybinds (discussed below).

You can output information back to the player in TAMods through the console, via [custom Hud drawing](doc_dev_api_drawing.md), or via manipulating configuration variables.

## Writing Event Handlers

Event handlers are defined by writing a Lua function with the name of the event. The handler function should have a signature appropriate for that event (see [below](#available-event-handlers) for available event handlers with signatures).

Often you will want to attach _multiple_ event handlers to one event (or use presets/scripts which attach handlers to the same event). Specifying the handler function multiple times will overwrite the handler, and only the last definition will be executed.

Hence, you should always write event handlers following the pattern in the example below to execute any pre-existing event handler before running yours.

```lua
-- Variable to hold a reference to any existing handler for SomeEvent
local onSomeEventOld
-- If there's already an onSomeEvent handler, save it into onSomeEventOld
if type(onSomeEvent) == "function" then
    onSomeEventOld = onSomeEvent
end

-- Define our new handler
function onSomeEvent(someArg1, someArg2)
    -- If we saved a previous handler, execute that handler
    if onSomeEventOld then onSomeEventOld(someArg1, someArg2) end

    -- Do our own handling
    doEventHandlingStuffHere()
end
```

If event handlers are defined using this structure (substituting `SomeEvent` and the handling logic as need be), multiple handlers for the same event will execute correctly.

## Available Event Handlers

The below function signatures represent the intended signature of the handler function you write for each event.

### onChatMessage

`onChatMessage(team: Team, channel: ChatChannel, sender: string, message: string, isVGS: boolean)`

Event which fires when a chat message is received (including from this player). See the [Team enum](doc_dev_api_gameinfo.md#team-enum) for possible values of the `team` parameter.

##### ChatChannel enum

- `enums.CHAT_CHANNEL_GAME` = 2 - the game-wide global chat channel
- `enums.CHAT_CHANNEL_TEAM` = 3 - the team chat channel

### onGameMessage

`onGameMessage(message: string, persistence: float)`

Event which fires when an in-game message appears (e.g. on flag return, kill streak, warm-up timer). `persistence` represents the length of time in seconds that the message is intended to be shown for.

### onKillMessage

`onKillMessage(message: string, playerName: string)`

Event which fires when the player kills another player. `deathMessage` is the text normally in the killbox (i.e. `"You killed"` or `"Kill credit for"`).

### onAddToCombatLog

`onAddToCombatLog(killerTeam: integer, killerName: string, killType: KillType, victimName: string, victimTeam: string)`

Event which fires when a player dies. `killerTeam` and `victimTeam` will _normally_ be a `Team` (as per the [Team enum](doc_dev_api_gameinfo.md#team-enum)) unless the killer or the victim is the current player, in which case it will be `<player team> + 2`: so `2` if the player is on BE and `3` if the player is on DS.

If the death is due to suicide, then the `killerName` will be `Suicide`.

The `killType` does not distinguish with high granularity between weapons - e.g. the index for a kill from an auto is the same as for a kill from a shotgun.

##### KillType enum

- `enums.KILL_TYPE_EXPLOSIVE` = 1
- `enums.KILL_TYPE_STICKY` = 2
- `enums.KILL_TYPE_SQUISH` = 3
- `enums.KILL_TYPE_MELEE` = 4
- `enums.KILL_TYPE_FALLING` = 5
- `enums.KILL_TYPE_VEHICLE` = 6
- `enums.KILL_TYPE_BULLET` = 7
- `enums.KILL_TYPE_SNIPER` = 8
- `enums.KILL_TYPE_BASE_TURRET` = 9
- `enums.KILL_TYPE_HEADSHOT` = 10
- `enums.KILL_TYPE_GENERIC` = 11
- `enums.KILL_TYPE_SPINFUSOR` = 12
- `enums.KILL_TYPE_TURRET` = 13
- `enums.KILL_TYPE_CLAIMED` = 14

### onQueueAccolade

`onQueueAccolade(iconId: integer, accoladeName: string, legacy: "", isBadge: boolean)`

Event which fires when the player receives an accolade. The `legacy` parameter is no longer used by TAMods and will always be passed the empty string. The `isBadge` parameter will be true if the accolade being received is a badge.

### onDamageNumberCreate

`onDamageNumberCreate(existingDamageNumbers: DamageNumberArray, number: integer, location: FVector4, isShield: boolean)`

Event called _instead_ of creating a damage number (i.e. handling this event replaces the native handler).

The `existingDamageNumbers` parameter is a [DamageNumberArray](doc_dev_api_datatypes.md#damagenumberarray-class) of the current existing damage numbers.

### onDamageNumberUpdate

`onDamageNumberUpdate(damageNumbers: DamageNumberArray, hud: HUD, deltaTime: float)`

Event called once per frame _instead_ of the normal damage number update (i.e. replaces the native handler), to update and draw damage numbers. The `hud` parameter provides the handler with a reference to the player's [HUD](doc_dev_api_drawing.md#hud-data-type). `deltaTime` is the time in seconds since the last update.

### onDrawHealthBar

`onDrawHealthBar(x: float, y: float, isFriendly: boolean, healthPct: float)`

Event called to draw  IFF indicator health bars _instead_ of the normal function (i.e. replaces the native handler). The `x` and `y` parameters define the normal HUD position of the top-left of the healthbar. The `healthPct` parameter is the proportion of health the player having their health bar drawn has.

### onDrawCustomHud

`onDrawCustomHud(xRes: int, yRes: int)`

Event called once per frame to draw the custom HUD. The parameters give the resolution of the game view.

Further information about custom HUD drawing is available on the [Drawing page](doc_dev_api_drawing.md).

### onInputEvent

`onInputEvent(keyPressed: string, eventType: InputEventType, ctrl: boolean, shift: boolean, alt: boolean)`

Event to intercept all key/mouse presses for custom input handling. The last three parameters allow for checking whether ctrl, alt and/or shift were held down while the key was pressed.

It is highly recommended that you **do not** handle this event directly; instead, use the keybinding API described [below](#key-binding).

## Key Binding

### InputEventType enum

This enum under the `enums` namespace enumerates the possibl types of input event.

- `enums.INPUT_EVENT_TYPE_PRESSED` - event occurs when the key is pressed down
- `enums.INPUT_EVENT_TYPE_RELEASED` - event occurs when the key is released
- `enums.INPUT_EVENT_TYPE_REPEAT` - event triggers repeatedly while the key is held down
- `enums.INPUT_EVENT_TYPE_DOUBLECLICK` - event triggers when the key is pressed twice in quick succession

### Binding Functions

`bindKey(key: string, eventType: InputEventType, func: function): boolean`

Binds a key to execute the given function, returning whether the bind was successfully added. Multiple binds to the same key are allowed. The handler function should have the signature:

`func(keyPressed: string, eventType: InputEventType, ctrl: boolean, shift: boolean, alt: boolean)`

The key pressed, the input event type, and whether ctrl/shift/alt were held down will be passed to your handler as arguments.

`unbindKey(key: string, eventType: InputEventType): boolean`

Unbinds a key, returning whether the unbinding was successful.

### Retrieving Keybinds from TribesInput

`searchTribesInputCommands(action: regex string): list<KeyBind>`

Retrieve a list of native Unreal Engine bindings for actions matching the given regex, such as those set via the in-game menus or via `tribesinput.ini`.

#### KeyBind class

The KeyBind class represents a native Unreal Engine keybind.

##### Properties

| Property      | Type    | Description                                    |
|---------------|---------|------------------------------------------------|
| `name`        | string  | The key pressed                                |
| `command`     | string  | The command to be executed                     |
| `ctrl`        | boolean | Whether the bind requires Control held         |
| `shift`       | boolean | Whether the bind requires Shift held           |
| `alt`         | boolean | Whether the bind requires Alt held             |
| `ignoreCtrl`  | boolean | Whether the bind is ignored if Control is held |
| `ignoreShift` | boolean | Whether the bind is ignored if Shift is held   |
| `ignoreAlt`   | boolean | Whether the bind is ignored if Alt is held     |