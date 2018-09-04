---
id: doc_srv_api_overview
title: Overview
sidebar_label: Overview
---

The pages in this section present a reference for the Lua API exposed by TAMods-Server.

## Notes on type signature definition

Lua is dynamically typed, so there are no static checks for the type correctness of scripts. Generally, scripts with type errors will produce a console error message at runtime. Additionally, Lua does not check that functions receive the right number of arguments: extra arguments are ignored, and missing arguments are replaced with `nil`.

Function signatures in the reference denote the intended types of the function via the following (non-Lua) syntax:

`someFunction(arg1: Arg1Type, arg2: Arg2Type): ReturnType`

Note that where functions do not return a value, the `ReturnType` is omitted.

For clarity, the types `integer` and `float` are used to distinguish numerical arguments where appropriate, even though Lua's type system only supports a single `number` type.

Lua does not support 'arrays' in the traditional sense: most data structures in Lua are _Tables_. In the reference, `List<T>` is used to refer to a "list" of items of type `T`, where the "list" is actually a Table with sequentially numbered zero-indexed keys.

## Core Configuration

Core configuration and information about TAMods-Server.

### Core DLL Information

| Variable                         | Type   | Default / Example | Modifiable | Description                                                    |
|----------------------------------|--------|-------------------|------------|----------------------------------------------------------------|
| Core.DLL.Name                    | string | "TAMods-Server"   | No         | The name of this DLL                                           |
| Core.DLL.Version                 | string | "0.1.0"           | No         | The SemVer version of the DLL                                  |
| Core.DLL.TAServerProtocolVersion | string | "0.1.0"           | No         | The version of the TAServer controller protocol this DLL uses  |
| Core.DLL.TAModsProtocolVersion   | string | "0.1.0"           | No         | The version of the TAMods Client-Server protocol this DLL uses |

### DLL Operation Mode

| Variable                  | Type    | Default / Example | Modifiable | Description                                                                            |
|---------------------------|---------|-------------------|------------|----------------------------------------------------------------------------------------|
| Core.ConnectToTAServer    | boolean | true              | Yes        | Whether to attempt connection to the TAServer launcher                                 |
| Core.ConnectToClients     | boolean | true              | Yes        | Whether to attempt connection to modded clients via the TAMods protocol                |
| Core.AllowUnmoddedClients | boolean | true              | Yes        | If `Core.ConnectToClients` is enabled, whether to allow players without TAMods to join |

The `Core.ConnectToTAServer` option controls whether the integration with the TAServer custom login server system is enabled. This defaults to true, and it is recommended that this be left on unless you are trying to run the game server completely standalone. With this disabled, a number of features will not work (such as player-specifiable loadouts).

The `Core.ConnectToClients` option is not yet functional (associated features are a work in progress), but this will be required for features like game balance modification to function. The `Core.AllowUnmoddedClients` option is also not yet functional, but this will allow the server host to require clients support the TAMods Client-Server protocol in order to join a game team. Blocking unmodded players may be useful since some balance features require a modified client.

## Logging

TAMods-Server can keep a logfile at `C:\Users\<Username>\TAMods-Server.log`; this can be useful for debugging issues with configuration.

### Configuring the Logger

By default, nothing will be logged; to enable logging you must set the log level using the following function:

`Logger.setLevel(level: LogLevel)`

The possible log levels, listed below, are ordered such that every level logs messages of that level and above - so e.g. the `Warn` level will cause messages at the Warn, Error and Fatal levels to be logged.

- `Logger.Levels.None` - Log nothing
- `Logger.Levels.Fatal` - Log only fatal errors
- `Logger.Levels.Error` - Log any error-level message
- `Logger.Levels.Warn` - Log warning messages in addition to errors
- `Logger.Levels.Info` - Log informational messages in addition to warnings and errors
- `Logger.Levels.Debug` - Log everything, including debugging messages (this will display internal TAMods-Server debugging messages)

### Writing log messages

Once the logger is configured, you can log from Lua with the following functions, to log messages at each level:

`Logger.fatal(message: string)`

`Logger.error(message: string)`

`Logger.warn(message: string)`

`Logger.info(message: string)`

`Logger.debug(message: string)`