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
  { date: "2026-04-20 14:00", extensions: [], won: true },
  { date: "2026-04-21 10:00", extensions: [1], won: false },
  { date: "2026-04-22 10:00", extensions: [1], won: false }
];
