const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function makeClassList() {
  const values = new Set();
  return {
    add: (...names) => names.forEach((name) => values.add(name)),
    remove: (...names) => names.forEach((name) => values.delete(name)),
    toggle(name, force) {
      const shouldAdd = force === undefined ? !values.has(name) : force;
      if (shouldAdd) values.add(name);
      else values.delete(name);
      return shouldAdd;
    },
    contains: (name) => values.has(name)
  };
}

function makeElement() {
  const styleValues = {};
  return {
    children: [],
    classList: makeClassList(),
    textContent: "",
    attributes: {},
    style: {
      values: styleValues,
      setProperty(name, value) {
        styleValues[name] = value;
      }
    },
    addEventListener() {},
    append(child) {
      this.children.push(child);
    },
    replaceChildren() {
      this.children = [];
    },
    setAttribute(name, value) {
      this.attributes[name] = String(value);
    }
  };
}

const listeners = {};
const capturedPointers = new Set();
const gradient = { addColorStop() {} };
const context2d = new Proxy({}, {
  get(target, property) {
    if (property === "createLinearGradient" || property === "createRadialGradient") {
      return () => gradient;
    }
    if (!(property in target)) {
      target[property] = () => {};
    }
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    return true;
  }
});

const canvas = {
  width: 0,
  height: 0,
  listeners,
  getContext: () => context2d,
  getBoundingClientRect: () => ({ left: 0, top: 0 }),
  addEventListener(type, handler) {
    listeners[type] = handler;
  },
  setPointerCapture(id) {
    capturedPointers.add(id);
  },
  releasePointerCapture(id) {
    capturedPointers.delete(id);
  },
  hasPointerCapture(id) {
    return capturedPointers.has(id);
  }
};

const titleCanvas = {
  width: 0,
  height: 0,
  getContext: () => context2d,
  addEventListener() {}
};

const elements = {
  game: canvas,
  titleCanvas,
  titleScreen: makeElement(),
  splashScreen: makeElement(),
  pauseHeading: makeElement(),
  shopBack: makeElement(),
  shopLightCount: makeElement(),
  gameLightCounter: makeElement(),
  gameLightCount: makeElement(),
  shopStatus: makeElement(),
  shopAircraftClassic: makeElement(),
  shopAircraftDart: makeElement(),
  shopAircraftGlider: makeElement(),
  shopAircraftArrow: makeElement(),
  shopAircraftComet: makeElement(),
  shopAircraftWisp: makeElement(),
  shopAircraftDiamond: makeElement(),
  shopAircraftHalo: makeElement(),
  shopAircraftPrism: makeElement(),
  shopTrailWhite: makeElement(),
  shopTrailBlue: makeElement(),
  shopTrailPink: makeElement(),
  shopTrailPurple: makeElement(),
  shopTrailAurora: makeElement(),
  shopTrailStardust: makeElement(),
  shopTrailStars: makeElement(),
  shopTrailHearts: makeElement(),
  shopTrailDiamonds: makeElement(),
  shopTrailRings: makeElement(),
  shopTrailSparks: makeElement(),
  shopTrailPetals: makeElement(),
  shopAircraftClassicLabel: makeElement(),
  shopAircraftDartLabel: makeElement(),
  shopAircraftGliderLabel: makeElement(),
  shopAircraftArrowLabel: makeElement(),
  shopAircraftCometLabel: makeElement(),
  shopAircraftWispLabel: makeElement(),
  shopAircraftDiamondLabel: makeElement(),
  shopAircraftDiamondName: makeElement(),
  shopDescriptionPopup: makeElement(),
  shopAircraftHaloLabel: makeElement(),
  shopAircraftPrismLabel: makeElement(),
  shopTrailWhiteLabel: makeElement(),
  shopTrailBlueLabel: makeElement(),
  shopTrailPinkLabel: makeElement(),
  shopTrailPurpleLabel: makeElement(),
  shopTrailAuroraLabel: makeElement(),
  shopTrailStardustLabel: makeElement(),
  shopTrailStarsLabel: makeElement(),
  shopTrailHeartsLabel: makeElement(),
  shopTrailDiamondsLabel: makeElement(),
  shopTrailRingsLabel: makeElement(),
  shopTrailSparksLabel: makeElement(),
  shopTrailPetalsLabel: makeElement(),
  titleMenu: makeElement(),
  titleContinue: makeElement(),
  titlePlay: makeElement(),
  titleTutorial: makeElement(),
  titleSettings: makeElement(),
  titleLeaderboard: makeElement(),
  titleCredits: makeElement(),
  titleQuit: makeElement(),
  titlePlayPanel: makeElement(),
  titleNewGame: makeElement(),
  titleLoadGame: makeElement(),
  titlePlayBack: makeElement(),
  titleLoadPanel: makeElement(),
  loadCodeInput: makeElement(),
  loadCodeStatus: makeElement(),
  titleLoadConfirm: makeElement(),
  titleLoadBack: makeElement(),
  titleSettingsPanel: makeElement(),
  titleLeaderboardPanel: makeElement(),
  titleLeaderboardList: makeElement(),
  titleLeaderboardStatus: makeElement(),
  titleLeaderboardBack: makeElement(),
  titleLeaderboardHeading: makeElement(),
  titleLeaderboardLeft: makeElement(),
  titleLeaderboardRight: makeElement(),
  titleLeaderboardPersonal: makeElement(),
  titleSettingsBack: makeElement(),
  titleTutorialPanel: makeElement(),
  titleTutorialBack: makeElement(),
  titleCreditsPanel: makeElement(),
  titleCreditsBack: makeElement(),
  screenShakeSetting: makeElement(),
  musicSetting: makeElement(),
  sfxSetting: makeElement(),
  titleBestAltitude: makeElement(),
  gameShell: makeElement(),
  altitude: makeElement(),
  lives: makeElement(),
  startPanel: makeElement(),
  gameOverPanel: makeElement(),
  restart: makeElement(),
  centerRestart: makeElement(),
  returnToTitle: makeElement(),
  finalAltitude: makeElement(),
  bestAltitude: makeElement(),
  scoreBreakdown: makeElement(),
  menuToggle: makeElement(),
  menuClose: makeElement(),
  sideMenu: makeElement(),
  menuBackdrop: makeElement(),
  pauseMenuActions: makeElement(),
  pauseMainMenu: makeElement(),
  pauseShop: makeElement(),
  pauseAdvancements: makeElement(),
  pauseLeaderboard: makeElement(),
  pauseShop: makeElement(),
  pauseSave: makeElement(),
  pauseShopPanel: makeElement(),
  pauseShopBack: makeElement(),
  pauseSavePanel: makeElement(),
  pauseSaveBack: makeElement(),
  pauseAdvancementsPanel: makeElement(),
  pauseAdvancementsBack: makeElement(),
  pauseLeaderboardPanel: makeElement(),
  pauseLeaderboardList: makeElement(),
  pauseLeaderboardStatus: makeElement(),
  pauseLeaderboardBack: makeElement(),
  pauseLeaderboardHeading: makeElement(),
  pauseLeaderboardLeft: makeElement(),
  pauseLeaderboardRight: makeElement(),
  pauseLeaderboardPersonal: makeElement(),
  playerNamePrompt: makeElement(),
  playerNameInput: makeElement(),
  playerNameConfirm: makeElement(),
  playerNameSkip: makeElement(),
  playerNameStatus: makeElement(),
  advancementPopup: makeElement(),
  advancementPopupTitle: makeElement(),
  advancementPopupReward: makeElement(),
  saveCodeOutput: makeElement(),
  boostControl: makeElement(),
  boostButton: makeElement()
};

let nextFrameId = 1;
const animationFrames = new Map();
const windowListeners = {};
const storedValues = new Map();
const sandbox = {
  console,
  Math,
  btoa(value) {
    return Buffer.from(value, "binary").toString("base64");
  },
  atob(value) {
    return Buffer.from(value, "base64").toString("binary");
  },
  performance: { now: () => 1000 },
  document: {
    getElementById: (id) => elements[id],
    createElement: () => makeElement()
  },
  window: {
    __ASCEND_TEST__: true,
    innerWidth: 390,
    innerHeight: 844,
    devicePixelRatio: 2,
    localStorage: {
      getItem(key) {
        return storedValues.get(key) ?? null;
      },
      setItem(key, value) {
        storedValues.set(key, String(value));
      },
      removeItem(key) {
        storedValues.delete(key);
      }
    },
    addEventListener(type, handler) {
      windowListeners[type] = handler;
    }
  },
  requestAnimationFrame(callback) {
    const id = nextFrameId++;
    animationFrames.set(id, callback);
    return id;
  },
  cancelAnimationFrame(id) {
    animationFrames.delete(id);
  }
};

vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("game.js", "utf8"), sandbox);
const run = (code) => vm.runInContext(code, sandbox);
const state = run("state");

run('window.ASCEND_LEADERBOARD = { firebaseProjectId: "ascend-test", firebaseApiKey: "test-key" }');
assert.deepEqual(
  JSON.parse(JSON.stringify(run("getLeaderboardConfig()"))),
  {
    url: "https://firestore.googleapis.com/v1/projects/ascend-test/databases/(default)/documents",
    key: "test-key",
    writesEnabled: true
  }
);
assert.deepEqual(
  JSON.parse(JSON.stringify(run(`decodeFirestoreScore(${JSON.stringify({
    fields: {
      player_name: { stringValue: "Sky" },
      score: { integerValue: "1200" },
      height: { integerValue: "80" },
      total_lights: { integerValue: "7" }
    }
  })})`))),
  { player_name: "Sky", score: 1200, height: 80, total_lights: 7 }
);

assert.equal(state.lives, 3);
assert.equal(elements.lives.children.length, 3);
assert.equal(elements.altitude.textContent, "0 km");
assert.equal(state.flightSpeed, 350);
assert.ok(run("aircraftStats.dart.flightSpeed") > run("aircraftStats.classic.flightSpeed"));
assert.ok(run("aircraftStats.dart.turnSpeed") > run("aircraftStats.classic.turnSpeed"));
assert.ok(run("aircraftStats.dart.collisionScale") < run("aircraftStats.classic.collisionScale"));
assert.ok(run("aircraftStats.dart.boostDuration") < run("aircraftStats.classic.boostDuration"));
assert.ok(run("aircraftStats.dart.boostSpeed") > run("aircraftStats.classic.boostSpeed"));
assert.equal(run("aircraftStats.classic.boostSpeed"), 620);
assert.ok(run("aircraftStats.glider.flightSpeed") < run("aircraftStats.classic.flightSpeed"));
assert.ok(run("aircraftStats.glider.turnSpeed") < run("aircraftStats.classic.turnSpeed"));
assert.ok(run("aircraftStats.glider.boostDuration") > run("aircraftStats.classic.boostDuration"));
assert.ok(run("aircraftStats.glider.boostRecharge") > run("aircraftStats.classic.boostRecharge"));
assert.ok(run("aircraftStats.arrow.flightSpeed") > run("aircraftStats.classic.flightSpeed"));
assert.ok(run("aircraftStats.arrow.turnSpeed") > run("aircraftStats.classic.turnSpeed"));
assert.ok(run("aircraftStats.arrow.boostDuration") > run("aircraftStats.classic.boostDuration"));
assert.ok(run("aircraftStats.diamond.flightSpeed") < run("aircraftStats.classic.flightSpeed"));
assert.ok(run("aircraftStats.diamond.turnSpeed") > run("Math.max(...Object.entries(aircraftStats).filter(([name]) => name !== 'diamond').map(([, stats]) => stats.turnSpeed))"));
assert.ok(run("aircraftStats.diamond.boostDuration") > run("aircraftStats.wisp.boostDuration"));
assert.equal(
  run(`JSON.stringify(uniqueTopScores([
    { player_name: "A", score: 100 },
    { player_name: "a", score: 90 },
    { player_name: "B", score: 80 },
    { player_name: "Invalid", score: "not-a-score" }
  ]))`),
  JSON.stringify([{ player_name: "A", score: 100 }, { player_name: "B", score: 80 }])
);
assert.equal(
  run(`JSON.stringify(uniqueTopScores([
    { player_name: "Sky", score: 1200, height: 80, total_lights: 7, run_id: "older" },
    { player_name: "sky", score: 1500, height: 90, total_lights: 9, run_id: "new-best" }
  ]))`),
  JSON.stringify([{ player_name: "Sky", score: 1500, height: 90, total_lights: 9, run_id: "new-best" }])
);
assert.equal(
  run(`mergeLeaderboardScores(
    [{ player_name: "Sky", score: 1200, height: 80, total_lights: 7, run_id: "same-run" }],
    [{ player_name: "Sky", score: 1200, height: 80, total_lights: 7, run_id: "same-run" }]
  ).length`),
  1
);
assert.equal(
  run(`mergeLeaderboardScores(
    [{ player_name: "Sky", score: 1200, height: 80, total_lights: 7, run_id: "run-one" }],
    [{ player_name: "Sky", score: 1200, height: 80, total_lights: 7, run_id: "run-two" }]
  ).length`),
  2
);
assert.equal(
  run("getShopItems().findIndex(item => item.id === 'aircraft-diamond')"),
  run("getShopItems().findIndex(item => item.id === 'aircraft-halo') + 1")
);
assert.deepEqual(
  JSON.parse(run("JSON.stringify(getShopItems().filter(item => item.kind === 'aircraft' && item.price !== null).map(item => item.price))")),
  [0, 30, 45, 60, 75, 90]
);
assert.equal(state.titleScreenVisible, true);
assert.equal(state.splashVisible, true);
assert.equal(state.showLaunchPrompt, true);
assert.ok(titleCanvas.width > 0);
run("dismissSplashScreen()");
assert.equal(state.splashVisible, false);
assert.equal(state.titleScreenVisible, false);
assert.equal(elements.splashScreen.classList.contains("hidden"), true);
assert.equal(elements.boostControl.classList.contains("visible"), false);
assert.equal(elements.boostControl.classList.contains("available"), false);
assert.equal(elements.boostButton.classList.contains("visible"), true);
assert.equal(elements.boostButton.classList.contains("available"), false);
run("openLandedShop()");
assert.equal(state.shopScreenVisible, true);
assert.equal(state.titleScreenVisible, false);
assert.equal(state.paused, true);
assert.equal(elements.boostControl.classList.contains("visible"), false);
assert.equal(elements.boostButton.classList.contains("visible"), false);
assert.equal(elements.pauseHeading.textContent, "Shop");
assert.equal(elements.sideMenu.classList.contains("open"), true);
assert.equal(elements.sideMenu.classList.contains("shop-open"), true);
assert.equal(elements.menuBackdrop.classList.contains("open"), true);
run("closeLandedShop()");
assert.equal(state.shopScreenVisible, false);
assert.equal(state.titleScreenVisible, false);
assert.equal(state.paused, false);
assert.equal(elements.boostControl.classList.contains("visible"), false);
assert.equal(elements.boostButton.classList.contains("visible"), true);
assert.equal(elements.pauseHeading.textContent, "Paused");
assert.equal(elements.sideMenu.classList.contains("open"), false);
assert.equal(elements.sideMenu.classList.contains("shop-open"), false);
run("returnToTitleScreen()");
assert.equal(state.titleScreenVisible, true);
assert.equal(elements.boostControl.classList.contains("visible"), false);
assert.equal(elements.boostButton.classList.contains("visible"), false);
assert.equal(elements.titleContinue.classList.contains("hidden"), false);
run("openTitleSettings()");
assert.equal(elements.titleMenu.classList.contains("hidden"), true);
assert.equal(elements.titleSettingsPanel.classList.contains("hidden"), false);
run("closeTitleSettings()");
assert.equal(elements.titleMenu.classList.contains("hidden"), false);
assert.equal(elements.titleSettingsPanel.classList.contains("hidden"), true);
run("showTitlePanel(titleTutorialPanel)");
assert.equal(elements.titleMenu.classList.contains("hidden"), true);
assert.equal(elements.titleTutorialPanel.classList.contains("hidden"), false);
run("showTitleMenu()");
assert.equal(elements.titleMenu.classList.contains("hidden"), false);
assert.equal(elements.titleTutorialPanel.classList.contains("hidden"), true);
run("showTitlePanel(titlePlayPanel)");
assert.equal(elements.titleMenu.classList.contains("hidden"), true);
assert.equal(elements.titlePlayPanel.classList.contains("hidden"), false);
run("showTitleMenu()");
run("quitFromTitle()");
assert.equal(state.splashVisible, true);
assert.equal(state.titleScreenVisible, true);
assert.equal(elements.splashScreen.classList.contains("hidden"), false);
assert.equal(elements.titleScreen.classList.contains("splash-active"), true);
run("dismissSplashScreen()");
assert.equal(state.splashVisible, false);
assert.equal(state.titleScreenVisible, false);
run("returnToTitleScreen()");
state.bestAltitude = 321;
storedValues.set("ascend-best-altitude", "321");
run("clearSavedRun()");
run("continueFromTitle()");
assert.equal(state.titleScreenVisible, false);
assert.equal(state.bestAltitude, 321);
assert.equal(storedValues.get("ascend-best-altitude"), "321");
run("returnToTitleScreen()");
run("launch()");
assert.equal(state.launched, false);
run("dismissTitleScreen()");
assert.equal(state.titleScreenVisible, false);
assert.equal(elements.titleScreen.classList.contains("hidden"), true);
run("setViewTarget({ x: 0, y: 400 })");
assert.equal(state.targetViewOffsetX, 0);
assert.equal(state.viewOffsetX, 0);

run("launch()");
assert.equal(state.launched, true);
assert.equal(state.showLaunchPrompt, false);
assert.equal(storedValues.get("ascend-launch-prompt-seen"), "yes");
assert.equal(elements.startPanel.classList.contains("prompt-disabled"), true);
run("saveRun()");
assert.equal(JSON.parse(storedValues.get("ascend-saved-run")).version, 2);
run("showTitleMenu()");
assert.equal(elements.titleContinue.classList.contains("hidden"), false);
const portableCode = run("createSaveCode()");
assert.equal(portableCode.startsWith("ASC2-"), false);
assert.equal(run(`decodeSaveCode(${JSON.stringify(portableCode)}).run.version`), 2);
assert.equal(run(`decodeSaveCode(${JSON.stringify(`ASC2-${portableCode}`)}).run.version`), 2);
const tamperedCode = portableCode.slice(0, 18) +
  (portableCode[18] === "A" ? "B" : "A") + portableCode.slice(19);
assert.equal(run(`decodeSaveCode(${JSON.stringify(tamperedCode)})`), null);
run("setViewTarget({ x: 0, y: 400 })");
assert.ok(state.targetViewOffsetX > 0);
assert.equal(animationFrames.size, 1);
windowListeners.keydown({
  code: "KeyP",
  key: "p",
  repeat: false,
  preventDefault() {}
});
assert.equal(state.paused, true);
assert.equal(elements.sideMenu.classList.contains("open"), true);
windowListeners.keydown({
  code: "KeyP",
  key: "p",
  repeat: false,
  preventDefault() {}
});
assert.equal(state.paused, false);
assert.equal(elements.sideMenu.classList.contains("open"), false);
run("openMenu()");
assert.equal(state.paused, true);
assert.equal(state.animationFrameId, null);
assert.equal(elements.sideMenu.classList.contains("open"), true);
assert.equal(elements.menuToggle.classList.contains("menu-open"), true);
run("showSaveCode()");
assert.equal(elements.saveCodeOutput.value.startsWith("ASC2-"), false);
assert.equal(elements.pauseMenuActions.classList.contains("hidden"), true);
assert.equal(elements.pauseSavePanel.classList.contains("hidden"), false);
run("showPauseMenuActions()");
assert.equal(elements.pauseMenuActions.classList.contains("hidden"), false);
run("openShopFromPause()");
assert.equal(state.shopScreenVisible, true);
assert.equal(state.shopOpenedFromPause, true);
assert.equal(state.paused, true);
assert.equal(elements.sideMenu.classList.contains("shop-open"), true);
run("closeLandedShop()");
assert.equal(state.shopScreenVisible, false);
assert.equal(state.paused, true);
assert.equal(elements.sideMenu.classList.contains("open"), true);
assert.equal(elements.sideMenu.classList.contains("shop-open"), false);
run("closeMenu()");
assert.equal(state.paused, false);
assert.notEqual(state.animationFrameId, null);
assert.equal(animationFrames.size, 1);
assert.equal(elements.menuToggle.classList.contains("menu-open"), false);
assert.equal(state.boostCharge, 1);
run("setBoostHeld(true)");
run("updateBoost(0.4)");
assert.equal(state.boostActive, true);
assert.ok(state.boostCharge > 0.59 && state.boostCharge < 0.61);
assert.ok(run("getImpactAdjustedTravelSpeed()") > state.flightSpeed);
assert.equal(elements.boostControl.classList.contains("active"), true);
run("updateBoost(0.6)");
assert.equal(state.boostCharge, 0);
assert.equal(state.boostActive, false);
assert.equal(state.boostLocked, true);
run("setBoostHeld(false)");
run("updateBoost(20)");
assert.equal(state.boostCharge, 1);
assert.equal(elements.boostControl.style.values["--boost-charge"], 1);
assert.equal(elements.boostButton.style.values["--boost-charge"], 1);
assert.equal(elements.boostButton.style.values["--boost-empty"], "0%");
assert.equal(
  run("JSON.stringify(getBackgroundColors(100))"),
  JSON.stringify(["#7894ba", "#9187ba", "#c486b4", "#df91a6"])
);
assert.notEqual(
  run("JSON.stringify(getBackgroundColors(200))"),
  run("JSON.stringify(getBackgroundColors(300))")
);
const lowDifficultySpacing = run("Array.from({ length: 100 }, () => getAsteroidSpacing(0))");
const highDifficultySpacing = run("Array.from({ length: 100 }, () => getAsteroidSpacing(1))");
const openingSpacing = run("Array.from({ length: 100 }, () => getAsteroidSpacing(0, 0))");
assert.ok(Math.min(...lowDifficultySpacing) >= 145);
assert.ok(Math.max(...lowDifficultySpacing) <= 220);
assert.ok(Math.min(...highDifficultySpacing) >= 125);
assert.ok(Math.max(...highDifficultySpacing) <= 185);
assert.ok(Math.min(...openingSpacing) >= 200);
assert.ok(Math.max(...openingSpacing) <= 285);
assert.ok(Math.min(...openingSpacing) > Math.min(...lowDifficultySpacing));
assert.equal(run("getAsteroidFormationSize(0, 0)"), 1);
state.asteroids = [
  { x: 65, worldY: 900, radius: 80 },
  { x: 195, worldY: 900, radius: 80 },
  { x: 325, worldY: 900, radius: 80 }
];
assert.equal(run("findAsteroidSpawnX(900, 80)"), null);
state.asteroids = [];

state.asteroids = [{ x: 195, worldY: 900, radius: 80 }];
state.collectibles = [];
assert.equal(run("getCollectibleSpawnClearance(195, 900, 8)"), Infinity);
assert.equal(run("getCollectibleSpawnClearance(30, 900, 8)"), Infinity);
state.asteroids[0].points = [1, 1.1, 0.9, 1];
state.collectibles = [{
  x: 195,
  worldY: 900,
  radius: 8,
  color: "255, 211, 233",
  driftX: 0,
  driftY: 0,
  phase: 0
}];
state.nextCollectibleY = Infinity;
assert.equal(run("collectibleOverlapsAsteroid(state.collectibles[0])"), true);
assert.equal(run("getCollectibleOpacity(state.collectibles[0])"), 0.48);
state.collectibles[0].x = 284;
assert.equal(run("collectibleOverlapsAsteroid(state.collectibles[0])"), false);
assert.equal(run("getCollectibleOpacity(state.collectibles[0])"), 1);
state.collectibles[0].x = 265;
state.collectibles[0].worldY = 960;
assert.equal(run("collectibleOverlapsAsteroid(state.collectibles[0])"), false);
assert.equal(run("getCollectibleOpacity(state.collectibles[0])"), 1);
state.collectibles[0].x = 195;
state.collectibles[0].worldY = 900;
const stationaryCollectibleX = state.collectibles[0].x;
const stationaryCollectibleY = state.collectibles[0].worldY;
const unaffectedAsteroidX = state.asteroids[0].x;
run("updateCollectibles(0, { x: 0, y: -1 }, 0)");
assert.equal(state.collectibles.length, 1);
assert.equal(run("collectibleOverlapsAsteroid(state.collectibles[0], 4)"), true);
assert.equal(state.collectibles[0].x, stationaryCollectibleX);
assert.equal(state.collectibles[0].worldY, stationaryCollectibleY);
assert.equal(state.asteroids[0].x, unaffectedAsteroidX);
state.asteroids = [];

state.nextAsteroidY = Infinity;
state.nextLaneChallengeY = run("state.cameraY + getWorldScreenOriginY() + 400");
state.viewOffsetX = 0;
run("spawnAsteroids({ x: Math.SQRT1_2, y: -Math.SQRT1_2 })");
assert.equal(state.asteroids.filter((asteroid) => asteroid.laneChallenge).length, 1);
const diagonalChallenge = state.asteroids.find((asteroid) => asteroid.laneChallenge);
const diagonalApproachTime = 400 / (Math.SQRT1_2 * state.flightSpeed);
const diagonalArrivalX = run(
  `wrapAsteroidX(${diagonalChallenge.x} - Math.SQRT1_2 * state.flightSpeed * ${diagonalApproachTime}, ${diagonalChallenge.radius})`
);
assert.ok(Math.abs(diagonalArrivalX - state.aircraft.x) < 1);
assert.ok(Math.abs(diagonalChallenge.driftX) < 5);
state.asteroids = [];

state.pointerInside = true;
state.pointerX = state.width / 2;
state.pointerY = 0;
state.nextAsteroidY = Infinity;
state.nextLaneChallengeY = Infinity;
state.nextCollectibleY = Infinity;
const altitudeBefore = run("getAltitude()");
run("update(0.25)");
assert.ok(run("getAltitude()") > altitudeBefore);
assert.ok(state.aircraft.y < state.height * 0.65);

state.pointerInside = false;
const storedDirection = run("getFlightDirection()");
assert.ok(storedDirection.y < -0.9);

state.boostHeld = false;
state.boostActive = false;
listeners.pointerdown({ clientX: state.aircraft.x, clientY: state.aircraft.y, pointerId: 88 });
assert.equal(state.boostHeld, false);
assert.equal(state.boostActive, false);
listeners.pointerdown({ clientX: state.aircraft.x + 40, clientY: state.aircraft.y, pointerId: 89 });
assert.equal(state.boostHeld, true);
listeners.pointerup({ clientX: state.aircraft.x + 40, clientY: state.aircraft.y, pointerId: 89 });
assert.equal(state.boostHeld, false);
listeners.pointerup({ clientX: state.aircraft.x, clientY: state.aircraft.y, pointerId: 88 });
listeners.pointerdown({ clientX: state.aircraft.x, clientY: state.aircraft.y, pointerId: 90, pointerType: "mouse" });
assert.equal(state.boostHeld, true);
listeners.pointerup({ clientX: state.aircraft.x, clientY: state.aircraft.y, pointerId: 90, pointerType: "mouse" });
assert.equal(state.boostHeld, false);

state.lastFlightX = 0;
state.lastFlightY = -1;
state.pointerInside = true;
state.pointerX = state.aircraft.x + 200;
state.pointerY = state.aircraft.y;
state.groundOffsetX = 0;
run("updateGroundHorizontalOffset({ x: 1 }, 350, 0.1)");
assert.equal(state.groundOffsetX, -29.75);
state.groundOffsetX = 0;
const curvedDirection = run("getFlightDirection(0.1)");
assert.ok(curvedDirection.x > 0 && curvedDirection.x < 0.25);
assert.ok(curvedDirection.y < -0.9);
run("moveAircraft({ x: 0, y: -1 }, 0.016)");
assert.ok(Math.abs(run("normalizeAngle(state.aircraft.tilt - Math.PI / 2)")) < 0.1);

state.pointerX = state.width / 2;
state.pointerY = state.height / 2;
const headingBeforeDeadzone = Math.atan2(state.lastFlightY, state.lastFlightX);
run("getFlightDirection(0.1)");
const headingAfterDeadzone = Math.atan2(state.lastFlightY, state.lastFlightX);
assert.ok(Math.abs(headingAfterDeadzone - headingBeforeDeadzone) < 0.001);

const aircraftWorldY = run("state.cameraY + getWorldScreenOriginY() - state.aircraft.y");
assert.ok(Math.abs(run("worldToScreenY(" + aircraftWorldY + ")") - state.aircraft.y) < 0.001);

state.trail = [];
state.trailAccumulator = 0;
run("updateTrail(0.5, { x: 0, y: -1 })");
assert.ok(state.trail.length > 0);
run("updateTrail(1.6, { x: 0, y: 0 })");
assert.equal(state.trail.length, 0);

state.coinsCollected = 0;
state.collectionEffects = [];
state.collectibles = [{
  x: state.aircraft.x - state.viewOffsetX * 0.3,
  worldY: run("state.cameraY + getWorldScreenOriginY() - state.aircraft.y"),
  radius: 8,
  color: "248, 218, 238",
  driftX: 0,
  driftY: 0,
  phase: 0
}];
run("resolveCollectibleHits()");
assert.equal(state.coinsCollected, 1);
assert.equal(storedValues.get("ascend-light-balance"), "1");
assert.equal(state.collectibles.length, 0);
assert.equal(state.collectionEffects.length, 1);

const attractionTargetX = state.aircraft.x - state.viewOffsetX * 0.3;
const attractionTargetY = run("state.cameraY + getWorldScreenOriginY() - state.aircraft.y");
state.collectibles = [{
  x: attractionTargetX + 80,
  worldY: attractionTargetY + 20,
  radius: 8,
  color: "248, 218, 238",
  driftX: 0,
  driftY: 0,
  phase: 0,
  attracted: true,
  attractionAge: 0.54,
  orbitSign: 1
}];
run("updateCollectibles(0.02, { x: 0, y: -1 }, 350)");
assert.ok(Math.abs(state.collectibles[0].x - attractionTargetX) < 0.001);
assert.ok(Math.abs(state.collectibles[0].worldY - attractionTargetY) < 0.001);
run("resolveCollectibleHits()");
assert.equal(state.collectibles.length, 0);
assert.equal(state.coinsCollected, 2);
state.coinsCollected = 1;
run("saveLightBalance(1)");

state.lives = 3;
state.boostActive = true;
state.aircraft.x = 200;
state.aircraft.y = 400;
state.aircraft.previousX = 200;
state.aircraft.previousY = 400;
state.asteroids = [{
  x: 200,
  worldY: run("state.cameraY + getWorldScreenOriginY() - 400"),
  radius: 80,
  points: [1, 1, 1],
  rotation: 0,
  spin: 0,
  driftX: 0,
  driftY: 0,
  style: "outline"
}];
run("resolveAsteroidHits()");
assert.equal(state.lives, 3);
assert.equal(state.aircraft.x, 200);
assert.equal(state.aircraft.y, 400);
assert.equal(state.boostExitProtection, true);
state.boostActive = false;
run("resolveAsteroidHits()");
assert.equal(state.lives, 3);
assert.equal(state.boostExitProtection, true);
state.aircraft.x = 20;
state.aircraft.previousX = 20;
run("resolveAsteroidHits()");
assert.equal(state.lives, 3);
assert.equal(state.boostExitProtection, false);

state.lives = 3;
state.invulnerableTime = 0;
state.viewOffsetX = 0;
state.aircraft.x = 285;
state.aircraft.y = 400;
state.aircraft.previousX = 285;
state.aircraft.previousY = 400;
state.asteroids = [{
  x: 200,
  worldY: run("state.cameraY + getWorldScreenOriginY() - 400"),
  radius: 100,
  points: Array(12).fill(0.68),
  rotation: 0,
  spin: 0,
  driftX: 0,
  driftY: 0,
  style: "outline"
}];
run("resolveAsteroidHits()");
assert.equal(state.lives, 3);

state.lives = 3;
state.invulnerableTime = 0;
state.viewOffsetX = 0;
state.aircraft.x = 280;
state.aircraft.y = 400;
state.aircraft.previousX = 280;
state.aircraft.previousY = 400;
state.asteroids = [{
  x: 200,
  worldY: run("state.cameraY + getWorldScreenOriginY() - 400"),
  radius: 80,
  points: [1, 1, 1],
  rotation: 0,
  spin: 0,
  driftX: 0,
  driftY: 0,
  style: "outline"
}];
run("resolveAsteroidHits()");
assert.equal(state.lives, 2);

state.lives = 3;
state.invulnerableTime = 0;
state.asteroids = [{
  x: state.aircraft.x - state.viewOffsetX * 0.3,
  worldY: run("state.cameraY + getWorldScreenOriginY() - state.aircraft.y"),
  radius: 60,
  points: [1, 1, 1],
  rotation: 0,
  spin: 0,
  driftX: 0,
  driftY: 0,
  style: "outline"
}];
run("resolveAsteroidHits()");
assert.equal(state.lives, 2);
const bounceSpeed = Math.hypot(state.aircraft.vx, state.aircraft.vy);
assert.ok(bounceSpeed > 440 && bounceSpeed < 480);
assert.equal(state.bounceTime, 0.36);
assert.equal(state.impactSlowTime, 0.55);
assert.equal(state.impactRecoilTime, 0.18);
assert.ok(run("getImpactAdjustedTravelSpeed()") < 0);
assert.equal(state.shakeTime, 0.24);
const bouncedFromX = state.aircraft.x;
const bouncedFromY = state.aircraft.y;
run("moveAircraft({ x: 0, y: -1 }, 0.1)");
assert.ok(Math.hypot(
  state.aircraft.x - bouncedFromX,
  state.aircraft.y - bouncedFromY
) > 20);
state.impactRecoilTime = 0;
assert.ok(run("getImpactAdjustedTravelSpeed()") > 0);
assert.ok(run("getImpactAdjustedTravelSpeed()") < state.flightSpeed);
run("resolveAsteroidHits()");
assert.equal(state.lives, 2);

state.invulnerableTime = 1;
state.viewOffsetX = 0;
state.aircraft.vx = 0;
state.aircraft.vy = 0;
state.bounceTime = 0;
state.impactSlowTime = 0;
state.impactRecoilTime = 0;
state.shakeTime = 0;
state.aircraft.previousX = 100;
state.aircraft.previousY = 400;
state.aircraft.x = 300;
state.aircraft.y = 400;
state.asteroids = [{
  x: 200,
  worldY: run("state.cameraY + getWorldScreenOriginY() - 400"),
  radius: 45,
  points: [1, 1, 1],
  rotation: 0,
  spin: 0,
  driftX: 0,
  driftY: 0,
  style: "solid",
  touchingRocket: false
}];
run("resolveAsteroidHits()");
assert.equal(state.lives, 2);
assert.ok(state.aircraft.x < 200);
assert.equal(state.aircraft.vx, 0);
assert.equal(state.aircraft.vy, 0);
assert.equal(state.bounceTime, 0);
assert.equal(state.impactSlowTime, 0);
assert.equal(state.impactRecoilTime, 0);
assert.equal(state.shakeTime, 0);

state.invulnerableTime = 0;
run("registerHit()");
state.invulnerableTime = 0;
run("registerHit()");
assert.equal(state.lives, 0);
assert.equal(state.gameOver, true);
assert.equal(state.launched, false);
const expectedRunScore = run("Math.max(0, Math.floor((getAltitude() * 10 + Math.floor(state.runDistance) * 2 + state.runLights * 125) * (aircraftScoreMultipliers[state.shopProfile.aircraft] ?? 1) * (trailScoreMultipliers[state.shopProfile.trail] ?? 1)))");
assert.equal(elements.finalAltitude.textContent, expectedRunScore.toLocaleString());
assert.equal(elements.bestAltitude.textContent, state.bestScore.toLocaleString());
assert.equal(storedValues.get("ascend-best-altitude"), String(state.bestAltitude));
assert.equal(storedValues.get("ascend-best-score"), String(state.bestScore));
assert.equal(storedValues.has("ascend-saved-run"), false);
assert.equal(storedValues.has("ascend-light-balance"), true);
assert.equal(state.shakeTime, 0.48);
assert.equal(state.shakeStrength, 9);
assert.notEqual(elements.gameShell.style.values["--shake-x"], "0px");
assert.equal(elements.gameOverPanel.classList.contains("hidden"), false);
assert.equal(elements.startPanel.classList.contains("hidden"), true);
run("loop(state.lastTime + 16)");
assert.ok(state.shakeTime > 0 && state.shakeTime < 0.48);
assert.notEqual(state.animationFrameId, null);

sandbox.window.innerWidth = 768;
sandbox.window.innerHeight = 1024;
run("resize()");
assert.equal(state.lives, 0);
assert.equal(state.gameOver, true);

run("resetRun()");
assert.equal(state.lives, 3);
assert.equal(state.gameOver, false);
assert.equal(state.boostExitProtection, false);
assert.equal(state.coinsCollected, 1);
assert.equal(state.showLaunchPrompt, false);
assert.equal(elements.startPanel.classList.contains("prompt-disabled"), true);
assert.equal(state.titleScreenVisible, false);
assert.equal(elements.gameOverPanel.classList.contains("hidden"), true);
assert.equal(elements.startPanel.classList.contains("hidden"), false);

run("returnToTitleScreen()");
assert.equal(state.titleScreenVisible, true);
assert.equal(state.splashVisible, false);
assert.equal(elements.titleContinue.classList.contains("hidden"), false);
assert.equal(elements.titleScreen.classList.contains("hidden"), false);
assert.equal(elements.titleScreen.attributes["aria-hidden"], "false");
assert.equal(elements.titleMenu.classList.contains("hidden"), false);

storedValues.set("ascend-saved-run", JSON.stringify({
  version: 1,
  cameraY: 1500,
  aircraftX: 0.5,
  aircraftY: 0.5,
  lives: 2,
  boostCharge: 0.4,
  coinsCollected: 7,
  lastFlightX: 0,
  lastFlightY: -1
}));
assert.equal(run("loadSavedRun()"), true);
assert.equal(state.launched, true);
assert.equal(state.cameraY, 1500);
assert.equal(state.lives, 2);
assert.equal(state.boostCharge, 0.4);
assert.equal(state.coinsCollected, 7);
run("returnToTitleScreen()");
assert.equal(state.titleScreenVisible, true);
assert.equal(state.splashVisible, false);

state.launched = true;
state.gameOver = false;
state.asteroids = [{
  x: 240,
  worldY: 2600,
  radius: 64,
  points: [0.8, 1, 0.9, 1.1],
  rotation: 0.4,
  spin: -0.12,
  driftX: 7,
  driftY: -3,
  style: "outline",
  laneChallenge: true
}];
state.collectibles = [{
  x: 430,
  worldY: 2720,
  radius: 8,
  color: "205, 231, 255",
  driftX: 2,
  driftY: 1,
  phase: 0.7
}];
state.nextAsteroidY = 2900;
state.nextLaneChallengeY = 3100;
state.nextCollectibleY = 3000;
state.groundOffsetX = -725;
state.collectibles[0].attracted = true;
state.collectibles[0].attractionAge = 0.35;
const exactWorldCode = run("createSaveCode()");
state.asteroids = [];
state.collectibles = [];
elements.loadCodeInput.value = exactWorldCode;
assert.equal(run("loadGameFromCode()"), true);
assert.equal(state.asteroids.length, 1);
assert.equal(state.collectibles.length, 1);
assert.equal(state.asteroids[0].worldY, 2600);
assert.equal(state.asteroids[0].style, "outline");
assert.equal(state.collectibles[0].worldY, 2720);
assert.equal(state.nextAsteroidY, 2900);
assert.equal(state.nextLaneChallengeY, 3100);
assert.equal(state.nextCollectibleY, 3000);
assert.equal(state.groundOffsetX, -725);
assert.equal(state.collectibles[0].attracted, true);
assert.equal(state.collectibles[0].attractionAge, 0.35);
run("returnToTitleScreen()");

elements.loadCodeInput.value = portableCode;
assert.equal(run("loadGameFromCode()"), true);
assert.equal(state.launched, true);
assert.equal(elements.loadCodeStatus.textContent, "Save loaded");
run("returnToTitleScreen()");
state.bestAltitude = 999;
storedValues.set("ascend-best-altitude", "999");
assert.equal(storedValues.has("ascend-saved-run"), true);
state.coinsCollected = 65;
run("saveLightBalance(state.coinsCollected)");
run('buyOrEquipShopItem("aircraft-glider")');
assert.equal(state.coinsCollected, 20);
assert.equal(state.shopProfile.aircraft, "glider");
assert.equal(state.flightSpeed, 270);
assert.equal(state.turnSpeed, 1.6);
assert.equal(state.shopProfile.owned.includes("aircraft-glider"), true);
assert.equal(storedValues.get("ascend-light-balance"), "20");
run('buyOrEquipShopItem("trail-purple")');
assert.equal(state.coinsCollected, 0);
assert.equal(state.shopProfile.trail, "purple");
assert.equal(state.shopProfile.owned.includes("trail-purple"), true);
const cosmeticSaveCode = run("createSaveCode()");
assert.equal(
  run(`decodeSaveCode(${JSON.stringify(cosmeticSaveCode)}).profile.shopProfile.aircraft`),
  "glider"
);
assert.equal(
  run(`decodeSaveCode(${JSON.stringify(cosmeticSaveCode)}).profile.shopProfile.trail`),
  "purple"
);
assert.equal(run('normalizeShopProfile({ owned: [], aircraft: "glider", trail: "purple" }).aircraft'), "classic");
assert.equal(run('normalizeShopProfile({ owned: [], aircraft: "glider", trail: "purple" }).trail'), "white");
state.shopProfile.owned = state.shopProfile.owned.filter((id) => !["aircraft-halo", "aircraft-prism", "trail-aurora", "trail-stardust"].includes(id));
state.advancementProgress = { lifetimeLights: 0, survivedHits: 0, completed: [] };
state.bestAltitude = 0;
state.cameraY = 0;
run("updateShopCatalog()");
assert.equal(elements.shopAircraftHalo.classList.contains("hidden"), true);
assert.equal(elements.shopTrailAurora.classList.contains("hidden"), true);
state.advancementProgress.lifetimeLights = 100;
run("checkAdvancements(false)");
assert.equal(state.shopProfile.owned.includes("trail-aurora"), true);
state.bestAltitude = 1000;
run("checkAdvancements(false)");
assert.equal(state.shopProfile.owned.includes("aircraft-prism"), true);
assert.equal(elements.shopTrailAurora.classList.contains("hidden"), false);
assert.equal(elements.shopAircraftPrism.classList.contains("hidden"), false);
state.bestAltitude = 10000;
run("checkAdvancements(false)");
assert.equal(state.shopProfile.owned.includes("aircraft-halo"), true);
assert.equal(elements.shopAircraftHalo.classList.contains("hidden"), false);
elements.advancementPopup.classList.add("hidden");
state.advancementProgress.survivedHits = 20;
run("checkAdvancements(true)");
assert.equal(elements.advancementPopup.classList.contains("hidden"), false);
assert.equal(elements.advancementPopupTitle.textContent, "Resilient");
assert.equal(state.advancementProgress.completed.filter((id) => id === "resilient").length, 1);
elements.advancementPopup.classList.add("hidden");
run("checkAdvancements(true)");
assert.equal(elements.advancementPopup.classList.contains("hidden"), true);
assert.equal(state.advancementProgress.completed.filter((id) => id === "resilient").length, 1);
run("updateShopCatalog()");
assert.equal(elements.shopAircraftDiamond.classList.contains("hidden"), false);
assert.equal(elements.shopAircraftDiamondName.textContent, "???");
state.bestAltitude = 1_000_000;
run("checkAdvancements(false)");
assert.equal(state.shopProfile.owned.includes("aircraft-diamond"), true);
assert.equal(state.advancementProgress.completed.includes("million"), true);
assert.equal(elements.shopAircraftDiamondName.textContent, "Diamond");
storedValues.set("ascend-pilot-name", "OldPilot");
run("startNewGame()");
assert.equal(state.bestAltitude, 0);
assert.equal(state.coinsCollected, 0);
assert.equal(state.showLaunchPrompt, true);
assert.equal(storedValues.has("ascend-launch-prompt-seen"), false);
assert.equal(storedValues.has("ascend-best-altitude"), false);
assert.equal(storedValues.has("ascend-saved-run"), false);
assert.equal(storedValues.has("ascend-light-balance"), false);
assert.equal(storedValues.has("ascend-advancements"), false);
assert.equal(storedValues.has("ascend-pilot-name"), false);
assert.equal(JSON.stringify(state.advancementProgress), JSON.stringify({ lifetimeLights: 0, survivedHits: 0, completed: [] }));
assert.equal(state.titleScreenVisible, false);

const launchButtonY = state.launchButton.y;
listeners.pointerdown({ clientX: state.launchButton.x, clientY: launchButtonY, pointerId: 501, pointerType: "touch" });
listeners.pointerup({ clientX: state.launchButton.x, clientY: launchButtonY - 50, pointerId: 501, pointerType: "touch" });
assert.equal(state.launched, true);
assert.equal(state.lastFlightX, 0);
assert.equal(state.lastFlightY, -1);
assert.equal(state.pointerInside, false);
assert.equal(elements.boostControl.classList.contains("visible"), true);
assert.equal(elements.boostControl.classList.contains("available"), true);
assert.equal(elements.boostButton.classList.contains("visible"), true);
assert.equal(elements.boostButton.classList.contains("available"), true);

storedValues.delete("ascend-anonymous-sequence");
assert.equal(run("getNextAnonymousName()"), "Pilot0");
assert.equal(run("getNextAnonymousName()"), "Pilot1");
storedValues.set("ascend-anonymous-sequence", "0");
state.gameOver = true;
run("offerLeaderboardEntry(42, 3, 1)");
assert.equal(elements.playerNameInput.value, "");
assert.equal(elements.playerNamePrompt.classList.contains("hidden"), false);
assert.equal(run("skipPlayerName()"), true);
const anonymousScores = JSON.parse(storedValues.get("ascend-leaderboard"));
assert.equal(anonymousScores.at(-1).player_name, "Pilot0");
assert.equal(anonymousScores.at(-1).score, 42);
assert.equal(storedValues.get("ascend-pilot-name"), "Pilot0");
assert.equal(elements.playerNamePrompt.classList.contains("hidden"), true);
run('submitLeaderboardScore(30, 8, 2, "pilot0")');
assert.equal(JSON.parse(storedValues.get("ascend-leaderboard")).at(-1).score, 42);
run('submitLeaderboardScore(70, 9, 3, "pilot0")');
const improvedScores = JSON.parse(storedValues.get("ascend-leaderboard"));
assert.equal(improvedScores.filter((entry) => entry.player_name.toLowerCase() === "pilot0").length, 1);
assert.equal(improvedScores.at(-1).player_name, "Pilot0");
assert.equal(improvedScores.at(-1).score, 70);
assert.equal(run("decodeSaveCode(createSaveCode()).profile.pilotName"), "Pilot0");
assert.equal(run("decodeSaveCode(createSaveCode()).profile.leaderboardBest.score"), 70);

console.log("game tests passed");
