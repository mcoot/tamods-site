---
id: doc_srv_api_serverconfig
title: Server Settings
sidebar_label: ServerSettings
---

## Server Settings

### Enums

#### TeamAssignTypes

The `TeamAssignTypes` enum represents the possible approaches to team assignment. It has the values:

- `Balanced` - players are restricted to join teams so that each team has a balanced number of players
- `Unbalanced` - players are free to join either team irrespective of numbers
- `AutoAssign` - players are automatically assigned to teams

### Options
| Variable                                   | Type           | Default / Example        | Description                                                                             |
|--------------------------------------------|----------------|--------------------------|-----------------------------------------------------------------------------------------|
| ServerSettings.TimeLimit                   | integer        | 25                       | Time limit of the match in minutes                                                      |
| ServerSettings.OvertimeLimit               | integer        | 10                       | Amount of overtime, in minutes                                                          |
| ServerSettings.WarmupTime                  | integer        | 20                       | Warmup time in seconds                                                                  |
| ServerSettings.RespawnTime                 | integer        | 5                        | Respawn time in seconds                                                                 |
| ServerSettings.SniperRespawnTime           | integer        | -1                       | Respawn timer used if the player has a sniper rifle; if -1, normal respawn time is used |
| ServerSettings.MaxPlayers                  | integer        | 32                       | The maximum number of players in the server                                             |
| ServerSettings.TeamAssignType              | TeamAssignType | TeamAssignTypes.Balanced | How to assign players to teams                                                          |
| ServerSettings.NakedLightSpawns            | boolean        | false                    | Whether players spawn as lights without loadout                                         |
| ServerSettings.AutoBalanceTeams            | boolean        | true                     | Whether to auto-balance teams in-game                                                   |
| ServerSettings.FlagDragLight               | integer        | 0                        | The speed a light can carry the flag before flag-drag occurs (0 for off)                |
| ServerSettings.FlagDragMedium              | integer        | 0                        | Medium speed before flag-drag occurs (0 for off)                                        |
| ServerSettings.FlagDragHeavy               | integer        | 0                        | Heavy speed before flag-drag occurs (0 for off)                                         |
| ServerSettings.FlagDragDeceleration        | integer        | 0                        | The deceleration rate applied during flag-drag                                          |
| ServerSettings.FriendlyFire                | boolean        | false                    | Whether friendly fire is enabled                                                        |
| ServerSettings.FriendlyFireMultiplier      | float          | 1.0                      | Multiplier for how much damage friendly fire does                                       |
| ServerSettings.FriendlyFireDamageKickLimit | int            | 0                        | How much damage a player must do to teammates before being kicked (0 for no limit)      |
| ServerSettings.FriendlyFireKillKickLimit   | int            | 0                        | How many teammates a player must kill before being kicked (0 for no limit)              |
| ServerSettings.BaseDestructionKickLimit    | int            | 0                        | How much damage a player must do to their base before being kicked (0 for no limit)     |
|                                            |                |                          |                                                                                         |
|                                            |                |                          |                                                                                         |
|                                            |                |                          |                                                                                         |
|                                            |                |                          |                                                                                         |
|                                            |                |                          |                                                                                         |
## Map Rotation