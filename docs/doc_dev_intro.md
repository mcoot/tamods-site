---
id: doc_dev_intro
title: Introduction to Modding
sidebar_label: Introduction to Modding
---

## So You Want To Mod Tribes: Ascend

This documentation is for developers, and those who want to understand how TAMods works. If you're an end user, you don't need to read this. ;)

Before you begin writing mods or trying out scripts, you should make sure you have TAMods installed and working. It's also highly recommended that you keep backups of your T:A config folder if you plan to write or modify TAMods scripts.

## How does TAMods actually work?

TAMods consists of two components: the TAMods _core_, and the user scripts.

The TAMods core is the closed source code contained in `TAMods.dll`. The TAMods core can interface with Tribes: Ascend's internal code once injected into the process. It exposes an API for mod authors via the [Lua](https://www.lua.org/) scripting language.

As soon as TAMods is injected, it will look for two files in your T:A configuration folder (normally located at `<Documents folder>/My Games/Tribes Ascend/TribesGame/config`): first, `config.lua`, and then (if it exists) `custom.lua`. It runs these lua scripts in the TAMods core to apply user configuration and mods.

## Where to write scripts

The `config.lua` file is modified by the TAMods configuration tool and should generally not be manually modified.

The TAMods config tool provides the concept of _presets_: base configurations which can be sourced via Lua's `require` command. In practice this system is deprecated, as the bundled Ubermenu preset provides more granular support for customisation.

Hence if you want to write custom scripts for TAMods, you will probably do so in one of two ways:

1. By adding code in `custom.lua` (or writing scripts in files `require`d by `custom.lua`).
2. If creating a custom HUD component, by writing HUDModules in the Ubermenu preset.

To get started, walk through the tutorial for writing your first custom script here LINK. You can also learn how to write your first HUDModule here LINK.

An API reference for the Lua API is available here LINK.