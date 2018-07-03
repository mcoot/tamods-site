---
id: doc_dev_api_overview
title: Overview
sidebar_label: Overview
---

The pages in this section present a reference for the Lua API exposed by TAMods core.

## Notes on type signature definition

Lua is dynamically typed, so there are no static checks for the type correctness of scripts. Generally, scripts with type errors will produce a console error message at runtime. Additionally, Lua does not check that functions receive the right number of arguments: extra arguments are ignored, and missing arguments are replaced with `nil`.

Function signatures in the reference denote the intended types of the function via the following (non-Lua) syntax:

`someFunction(arg1: Arg1Type, arg2: Arg2Type): ReturnType`

Note that where functions do not return a value, the `ReturnType` is omitted.

For clarity, the types `integer` and `float` are used to distinguish numerical arguments where appropriate, even though Lua's type system only supports a single `number` type.

Lua does not support 'arrays' in the traditional sense: most data structures in Lua are _Tables_. In the reference, `List<T>` is used to refer to a "list" of items of type `T`, where the "list" is actually a Table with sequentially numbered zero-indexed keys.