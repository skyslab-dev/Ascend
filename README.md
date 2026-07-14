# Ascend

Ascend is an atmospheric endless-flight browser game built with HTML, CSS, Canvas, and vanilla JavaScript. Launch a glowing paper aircraft, steer through procedural asteroid fields, collect lights, unlock cosmetics, and climb the leaderboards.

The interface and game world adapt to phones, tablets, and desktop browsers in portrait or landscape orientation.

## Current features

- Pointer and touch steering with smooth turning and constant forward flight
- Drag-and-release launch sequence
- Procedural solid and outlined asteroids with altitude-based difficulty
- Three lives, collision knockback, temporary invulnerability, and screen shake
- Rechargeable boost with aircraft-specific speed and duration
- Collectible pastel lights and a persistent light balance
- Aircraft and trail shop with unlockable advancement rewards
- Advancements with progress tracking and one-time completion notifications
- Height, score, and total-lights leaderboards
- Main menu, tutorial, settings, pause menu, and responsive mobile layouts
- Portable save codes containing profile progress and the active run
- Ambient music and gameplay sound effects

## Controls

### Pointer and touch

- **Launch:** Drag the launch arrow upward and release it.
- **Steer:** Move the pointer or finger in the direction the aircraft should fly.
- **Boost:** Press and hold the boost control in the bottom-left corner.
- **Shop:** Press the light counter while landed or paused.

### Keyboard

| Key | Action |
| --- | --- |
| `Space` | Hold to boost |
| `P` | Open or close the pause menu |
| `S` | Open the shop |
| `L` | Open the leaderboard |
| `A` | Open advancements |
| `Escape` | Close the current menu or return to the previous menu |

## Play locally

The game can be opened directly through `index.html`. Running a small local web server is recommended because it more closely matches a deployed website:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

No build step or package installation is required.

## Publish with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository's **Settings** page.
3. Select **Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.

GitHub Pages availability for private repositories depends on the GitHub account and plan. After deployment, use the Pages URL to play on another phone, tablet, or computer.

## Progress and save codes

Browser-local progress includes the pilot name, personal bests, light balance, owned cosmetics, equipped aircraft and trail, settings, advancements, and the current run.

The pause menu's **Save** action creates a portable code containing that data. Use **Play > Load Game** to restore it in another browser or device. Save codes are checksummed to catch accidental corruption, but they are not encrypted and should not contain private information.

Starting a **New Game** clears the current browser save and progression.

## Leaderboards

The game maintains a local leaderboard in browser storage and can merge it with a Firebase Firestore leaderboard. Each pilot name contributes only its highest score, and each leaderboard displays the top ten entries.

Three ranking views are available:

- Height reached
- Calculated run score
- Total lights collected

The run score considers height, distance traveled, lights collected, aircraft, and trail.

### Current Firebase security

This repository is currently configured as read-only:

- `leaderboard-config.js` sets `firebaseWritesEnabled` to `false`.
- `firebase.rules` allows public leaderboard reads but rejects all creates, updates, and deletes.
- Completed runs are still saved to the player's local leaderboard.

The Firebase Web API key is visible in browser code by design. Firestore Security Rules, not API-key secrecy, protect the database.

To connect a different read-only Firestore project:

1. Create a Firebase project and Web app.
2. Create a Firestore database.
3. Publish the rules in `firebase.rules` from **Firestore Database > Rules**.
4. Put the Web app's `projectId` and `apiKey` in `leaderboard-config.js`.

Do not enable unrestricted client writes for a public deployment. Shared score submission should go through a validated backend, such as a Firebase Cloud Function with rate limiting and abuse checks.

## Tests

Install Node.js, then run:

```bash
node game.test.cjs
```

The test harness validates core state transitions, menus, persistence, collisions, shop progression, and other game behavior without requiring a browser.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Game interface, menus, shop, tutorial, and HUD markup |
| `styles.css` | Responsive layouts and visual styling |
| `game.js` | Rendering, input, gameplay, audio, persistence, shop, and leaderboard logic |
| `game.test.cjs` | Node-based regression test harness |
| `leaderboard-config.js` | Firebase project configuration and write toggle |
| `firebase.rules` | Firestore leaderboard access rules |

## Development status

Ascend is actively being developed. Gameplay balance, content, audio, cosmetics, and online services may continue to change.
