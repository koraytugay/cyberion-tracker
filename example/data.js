/**
 * Cyberion Gameplay Data
 * 
 * Extension Mapping:
 * 1: Babybots
 * 2: Gigantobots
 * 3: Microbots
 * 4: Multibots
 * 5: Devious Cog
 * 
 * Format:
 * {
 *   date: "yyyy-MM-dd hh:mm",
 *   extensions: [1, 2, ...], // Use the numbers above. Empty array for base game only.
 *   won: true | false
 * }
 */
const gameData = [
  { date: "2024-03-10 14:30", extensions: [], won: true },
  { date: "2024-03-12 18:45", extensions: [1], won: false },
  { date: "2024-03-15 20:15", extensions: [2, 3], won: true },
  { date: "2024-03-18 10:00", extensions: [4, 5], won: false },
  { date: "2024-03-20 22:30", extensions: [1, 2, 3, 4, 5], won: true },
  { date: "2024-03-22 14:00", extensions: [3], won: true },
  { date: "2024-03-24 19:15", extensions: [1, 5], won: false },
  { date: "2024-03-25 11:30", extensions: [4], won: true },
  { date: "2024-03-27 21:00", extensions: [1, 2], won: false },
  { date: "2024-03-29 16:45", extensions: [5], won: true },
  { date: "2024-04-01 10:20", extensions: [3, 4], won: true },
  { date: "2024-04-03 23:10", extensions: [2], won: false },
  { date: "2024-04-05 15:40", extensions: [1, 3, 4], won: true },
  { date: "2024-04-07 12:00", extensions: [], won: false },
  { date: "2024-04-09 20:30", extensions: [2, 5], won: true }
];
