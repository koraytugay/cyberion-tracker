# Cyberion Gameplay Tracker

A visual dashboard for tracking your Cyberion board game sessions. It features a complete matrix of all 32 extension combinations, tracking which ones you have mastered and providing a full history of your gameplays.

## Visual Design
The tracker is designed with an "Oniverse Industrial" aesthetic, inspired by the game's box art, featuring:
- Burnt Orange, Mustard Yellow, and Stone Gray color palette.
- High-contrast 1px solid black borders.
- A functional combination matrix where unbeaten rows are inverted (white on black) for clarity.
- Sticky table headers for easy navigation of long history logs.

## Getting Started
1. Open `index.html` in your browser to view your tracker.
2. Manually enter your gameplay data in `data.js`.

## Data Entry
In `data.js`, you can use numeric IDs to quickly add extensions to your sessions:
- **1**: Babybots
- **2**: Gigantobots
- **3**: Microbots
- **4**: Multibots
- **5**: Devious Cog

Example entry:
```javascript
{ date: "2026-04-20 14:00", extensions: [1, 3], won: true }
```

## Demo & Examples
An `example/` folder is included in this repository. 
- **Purpose**: This folder contains a demonstration of what the tracker looks like once it is populated with a rich history of gameplays and various mastered combinations.
- **Note**: The `example/` folder is for **demo purposes only**. You should perform your actual tracking by editing the files in the **root directory**.
