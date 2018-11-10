---
id: doc_user_customserver_tutorial
title: Playing on a Custom Server
sidebar_label: Playing on a Custom Server
---

This guide explains how to join a custom server running TAMods-Server for the first time.

## What you need before starting

Before starting, you should have TAMods and the TribesLauncher application working on official HiRez servers, as described in the [Installation Guide](doc_user_install.md).

You will need:

1. A compatible copy of the TAMods core (a.k.a. `TAMods.dll`)

2. The IP address or hostname of the custom login server you want to connect to

## Connecting to the login server

Open the TribesLauncher application. In the "Configure Launcher" menu, make the following changes:

1. Change the `TAMods DLL Path` to point to the pre-release `TAMods.dll` file you have downloaded

2. Under `Login Server`, select `Custom` and in the `Login Server Host` box, enter the IP address / hostname for the login server

3. Uncheck `Launch Via Steam`; you may not need to do this, but some users have had issues injecting when launching through Steam

4. Ensure your other settings are correct - for instance, your `Tribes Executable Path` should be the correct path to your Tribes executable

Save these changes, launch the game, and log in.

You don't need to use your login details from the official servers - you can make up a new one; the name you log in with will be your in-game name. Avoid re-using a password you use for anything else.

If the game freezes for 10-20 seconds when you attempt to log in, it is failing to connect. This indicates that the IP address / hostname you set in the launcher is likely not correct.

If login succeeds, you will see your name appear as `unvrf-<myusername>`. This indicates you have successfully connected to the login server!

## Verification

The `unvrf` indicates that you are not _verified_ with this login server. Verificationprevents someone from stealing your name. Verification also allows your loadouts and account to persist between logins. To be verified you need a _code_ which can be obtained only from the owner of the login server - ask them for it.

Once they have given it to you, go to the Store in the Tribes main menu, and enter the code in the 'Redeem Promotion' box. Unfortunately T:A does not support copy-pasting into textboxes so you will need to copy the code by hand.

Once you have done this, restart the game and log in again. You should now no longer have `unvrf-` in front of your username. This indicates you are successfully verified with the login server.

## Connecting to the game server

Once you are verified and logged into the login server, ensure you have injected TAMods (via the TribesLauncher). You must do this _before_ attempting to join the game server - either at the login screen or on the main menu.

You can now join the game server, which should appear in the server browser. If you receive a "Failed to join" message, this likely indicates a networking issue on the server host's side (e.g. missing firewall rules or ports not being forwarded) - contact them about fixing it.

Once you have successfully joined the server, check that you can join a team. If you cannot, this indicates two things: first, the server owner has required TAMods to play, and your injection has failed.

## Success!

You should now be connected to a modded custom server! For subsequent connections with the same login server, you do not need to go through the verification step; you can simply start the game (with the login server host set in the launcher), inject TAMods and play!

If the server you are joining uses the GOTY ruleset, you can find more information on the [GOTY Tribes on Custom Servers page](doc_user_goty_info.md).