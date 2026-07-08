# Ascend

An atmospheric endless-flight browser game built with HTML, CSS, and JavaScript.

## Play locally

Open `index.html` in a browser. Cloud leaderboards require a Firebase Firestore project, the values in `leaderboard-config.js`, and the rules from `firebase.rules`.

## Firebase leaderboard

1. Create a Firebase project and add a Web app.
2. Create a Firestore database in production mode.
3. Publish the contents of `firebase.rules` in Firestore Database > Rules.
4. Copy the Web app's `projectId` and `apiKey` into `leaderboard-config.js`.

## Tests

Run `node game.test.cjs`.
