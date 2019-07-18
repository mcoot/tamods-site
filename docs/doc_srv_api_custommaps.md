---
id: doc_srv_api_custommaps
title: Custom Maps
sidebar_label: Custom Maps
---

Since dedicated servers are now available, custom maps are a natural next step. It has been proven that custom maps are _possible_, but they have not yet been implemented in a way that is practical or user-friendly enough for widespread adoption.

Getting this working right now requires a fair bit of technical knowledge, so try at your own risk.

# Setting Up Mapping in the UDK

This document describes the current process for getting a custom map running on your server.

The process of setting up custom mapping is very similar to how it worked for the old leaked SDK. A few guides for that:
- http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK
- http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy
- http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping

You need the January 2011 UDK beta specifically (build 7748); another version won't work.

You'll need the actor classes (http://library.theexiled.pwnageservers.com/file.php?id=2948) and the asset packages (http://library.theexiled.pwnageservers.com/category.php?id=202).

Since those above guides exist I'm not going into full detail here on setting the UDK editor up for Tribes mapping.

# Making It Actually Work With T:A Parting Gifts

If you follow the above guides, you'll find you can successfully run your map on the leaked SDK build of Tribes. If you try to run the maps in the Parting Gifts clients, you'll find that it first attempts to compile missing shaders, which fails and crashes the game/server. On-the-fly compilation of missing shaders seems to be broken in the release version of T:A.

So we need a way to precompile the shaders the custom map uses. Unreal engine stores the shaders in a file in CookedPC called `RefShaderCache-PC-D3D-SM3.upk`. If you cook your custom map in the UDK Frontend (available in the binaries folder of the UDK), it will generate such a RefShaderCache file with your shaders. But there's a problem: this file contains your map's shaders, but it _doesn't_ contain the shaders that Tribes normally has, so if you replace the game's cache with the one you built, the game will completely fail to boot. What we need is a shader cache file which merges the existing T:A shaders with the ones for your map.

It's possible to achieve this by taking advantage of the fact that in its uncooked state, the UDK editor puts its compiled shaders in a different file - `LocalShaderCache-PC-D3D-SM3.upk`, in the Content directory for UDKGame.

So what you need to do is compile your map's shaders into the editor (by loading the map package, and making sure you've 'fully loaded' the TA asset packages), and then take the normal T:A RefShaderCache and put it into the Content directory alongside the LocalShaderCache.

Then, when you cook your packages, the resulting RefShaderCache will contain the shaders from both the RefShaderCache and LocalShaderCache. You can loosely verify this by checking that the filesize of the resulting RefShaderCache is larger than the one you took from T:A's CookedPC directory.

Finally, put the newly cooked RefShaderCache into Tribes' CookedPC (backing up the old one first!), and you should be able to run your server without it attempting and failing to compile missing shaders.