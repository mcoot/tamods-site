---
id: doc_user_install
title: Installing TAMods
sidebar_label: Installing TAMods
---

TAMods is an unofficial modding framework for Tribes: Ascend which allows you to customise nearly every aspect of the game experience. You can customise your UI and the graphical look of your game, modify game hitsounds, record capping routes and view them via a UI guide or via a bot replay, and much more via built-in custom options and via Lua scripting.

TAMods does _not_ allow any gameplay-affecting changes, so that players using TAMods have no in-game advantage over those who do not.

## Getting TAMods

### Getting the launcher

The recommended way to get started with TAMods is to download [TribesLauncher here](https://github.com/mcoot/TribesLauncher/releases). TribesLauncher is an application which automatically keeps TAMods up-to-date, and allows you to run Tribes with TAMods enabled.

Once you've downloaded and installed the TribesLauncher, please close and re-open it (it will not be able to access required system components to inject TAMods when first launched after install).

If the launcher fails to detect your Tribes install path, it will prompt you to locate it. This will generally either be in your Steam folder (something like `C:\Program Files (x86)\Steam\SteamApps\Common\Tribes\Binaries\Win32\TribesAscend.exe`) or in the HiRez install directory (something like `C:\Program Files (x86)\HiRez Studios\HiRezGames\Tribes Ascend\Binaries\Win32\TribesAscend.exe`).

### Installing TAMods

![TribesLauncher prior to installation](assets/doc_user_install_1.png)

After re-launching it, click the `Update TAMods` button to install TAMods. Once installed, the `Update TAMods` button should change to `Launch Tribes`.

![TribesLauncher after installation](assets/doc_user_install_2.png)

### Configuration

Next, hit the `Configure T:A` button and click the `Enable Ubermenu Preset` button. This should not produce any errors, but clicking it again should display a message indicating that it is already enabled.

![TribesLauncher T:A Config screen](assets/doc_user_install_3.png)

Return to the main screen and click the `Configure Launcher` button. On this screen, ensure the Tribes Executable Path is correct. If your game is installed through Steam, the `Launch via Steam` option will allow the Steam Overlay to show in your game. If desired, you can enable the Auto-Inject feature to automatically load TAMods once the game has started. The rest of this tutorial assumes that Auto-Inject has been disabled.

![TribesLauncher Launcher Config screen](assets/doc_user_install_4.png)

### Running the game with TAMods

On the main screen, press `Launch Tribes`; the game should start. Log into Tribes as per usual, and once on the main menu, alt-tab out of the game, back to the launcher.

![TribesLauncher after game launch](assets/doc_user_install_5.png)

The bottom-right button should now say `Inject TAMods`. Press this button; if you have Windows User Account Control enabled, a prompt should ask you for administrator permission to run the injector. Grant this permission. Then, you should hear the Blue Plate Special sound, and the button should become greyed out and say `Injected`. This indicates that injection has been successful. If you see an error message, see [below](#what-to-do-if-injection-fails) for troubleshooting steps.

![TribesLauncher after injection](assets/doc_user_install_6.png)

To check that the injection has worked correctly, enter a server in-game (Roam Map mode is fine). Then, open the T:A console. Note that a bug in Tribes causes the `~` key to open the Unreal Engine console rather than the T:A one; you may need to change your keybinding in the menus, under `Settings > Keybindings > Interface > Chat Console` to a different key.

Once you've opened the T:A console, it should appear semi-transparent; if you scroll down you should see ASCII art indicating that TAMods is running. If you see this, it has installed correctly. If not, see [below](#what-to-do-if-injection-succeeds-but-tamods-isn-t-working) for troubleshooting steps.

![Tribes with TAMods startup in the console](assets/doc_user_install_7.png)

While still in a server, hit the `F1` key. You should see a menu appear on the left-hand side of the screen, which can be controlled with the arrow keys. This is the Ubermenu and will allow you to configure many TAMods settings in-game. If you don't see this, see [below](#what-to-do-if-injection-succeeds-but-tamods-isn-t-working) for troubleshooting steps.

![Tribes with the UberMenu visible](assets/doc_user_install_8.png)

### Success!

If you've followed to this point, you now have TAMods installed and working! You can hit `F1` to access the Ubermenu whenever you're in a server, and customise most TAMods features in-game.

A few features, like Weapon Model Customisation, can't be changed in-game. For these you will have to click `Configure T:A` from the launcher, and then `Launch External Config Tool`, which will launch a configuration editor allowing you to change the settings.

## Troubleshooting

### Contact

For help with TAMods related issues, please contact one of the TAMods developers. This can be done via the [Australian Tribes discord](https://discord.gg/ySkx6Cg), or by messaging /u/avianistheterm (mcoot) or /u/dodgesabre (dodge) on Reddit.

### What to do if injection fails

If injection fails, there are a number of possible common causes.

1. Ensure the game is running
2. In the Launcher Configuration panel, ensure that the path to the game binary is correct, and that the path to TAMods.dll is correct
3. Make sure you have all Microsoft Visual C++ redistributables installed. These can be found [here](https://support.microsoft.com/en-au/help/2977003/the-latest-supported-visual-c-downloads)

### What to do if injection succeeds but TAMods isn't working

#### I can't see the TAMods logo in the console

If you don't see an error message and you hear the blue plate sound, but TAMods features do not work, check the following potential causes:

1. Make sure you have all Microsoft Visual C++ redistributables installed. These can be found [here](https://support.microsoft.com/en-au/help/2977003/the-latest-supported-visual-c-downloads)
2. If you have changed your configuration, try reloading it in game with `/rc`; if this shows Lua errors then there is an error in your configuration or custom scripts

#### I can see the logo in the console, but pressing F1 does not show the Ubermenu

This indicates that the Ubermenu preset is not loaded. Try using the `Enable Ubermenu Preset` button in the Launcher's Configure T:A panel. If this does not work, try to set the preset to Ubermenu in the external configuration tool.