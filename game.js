const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const gameShell = document.getElementById("gameShell");
const titleScreen = document.getElementById("titleScreen");
const titleCanvas = document.getElementById("titleCanvas");
const titleCtx = titleCanvas.getContext("2d");
const splashScreen = document.getElementById("splashScreen");
const titleMenu = document.getElementById("titleMenu");
const titleContinueButton = document.getElementById("titleContinue");
const titlePlayButton = document.getElementById("titlePlay");
const titleTutorialButton = document.getElementById("titleTutorial");
const titleSettingsButton = document.getElementById("titleSettings");
const titleCreditsButton = document.getElementById("titleCredits");
const titlePlayPanel = document.getElementById("titlePlayPanel");
const titleNewGameButton = document.getElementById("titleNewGame");
const titleLoadGameButton = document.getElementById("titleLoadGame");
const titlePlayBackButton = document.getElementById("titlePlayBack");
const titleLoadPanel = document.getElementById("titleLoadPanel");
const loadCodeInput = document.getElementById("loadCodeInput");
const loadCodeStatus = document.getElementById("loadCodeStatus");
const titleLoadConfirmButton = document.getElementById("titleLoadConfirm");
const titleLoadBackButton = document.getElementById("titleLoadBack");
const titleSettingsPanel = document.getElementById("titleSettingsPanel");
const titleSettingsBackButton = document.getElementById("titleSettingsBack");
const titleTutorialPanel = document.getElementById("titleTutorialPanel");
const titleTutorialBackButton = document.getElementById("titleTutorialBack");
const titleCreditsPanel = document.getElementById("titleCreditsPanel");
const titleCreditsBackButton = document.getElementById("titleCreditsBack");
const screenShakeSetting = document.getElementById("screenShakeSetting");
const musicSetting = document.getElementById("musicSetting");
const sfxSetting = document.getElementById("sfxSetting");
const altitudeLabel = document.getElementById("altitude");
const livesLabel = document.getElementById("lives");
const startPanel = document.getElementById("startPanel");
const startShopButton = document.getElementById("startShop");
const gameOverPanel = document.getElementById("gameOverPanel");
const restartButton = document.getElementById("restart");
const centerRestartButton = document.getElementById("centerRestart");
const returnToTitleButton = document.getElementById("returnToTitle");
const finalAltitudeLabel = document.getElementById("finalAltitude");
const bestAltitudeLabel = document.getElementById("bestAltitude");
const menuToggleButton = document.getElementById("menuToggle");
const menuCloseButton = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const pauseHeading = document.getElementById("pauseHeading");
const shopBackButton = document.getElementById("shopBack");
const shopLightCount = document.getElementById("shopLightCount");
const gameLightCount = document.getElementById("gameLightCount");
const shopStatus = document.getElementById("shopStatus");
const shopAircraftClassic = document.getElementById("shopAircraftClassic");
const shopAircraftDart = document.getElementById("shopAircraftDart");
const shopAircraftGlider = document.getElementById("shopAircraftGlider");
const shopAircraftArrow = document.getElementById("shopAircraftArrow");
const shopAircraftComet = document.getElementById("shopAircraftComet");
const shopAircraftWisp = document.getElementById("shopAircraftWisp");
const shopAircraftDiamond = document.getElementById("shopAircraftDiamond");
const shopAircraftHalo = document.getElementById("shopAircraftHalo");
const shopAircraftPrism = document.getElementById("shopAircraftPrism");
const shopTrailWhite = document.getElementById("shopTrailWhite");
const shopTrailBlue = document.getElementById("shopTrailBlue");
const shopTrailPink = document.getElementById("shopTrailPink");
const shopTrailPurple = document.getElementById("shopTrailPurple");
const shopTrailAurora = document.getElementById("shopTrailAurora");
const shopTrailStardust = document.getElementById("shopTrailStardust");
const shopTrailStars = document.getElementById("shopTrailStars");
const shopTrailHearts = document.getElementById("shopTrailHearts");
const shopTrailDiamonds = document.getElementById("shopTrailDiamonds");
const shopTrailRings = document.getElementById("shopTrailRings");
const shopTrailSparks = document.getElementById("shopTrailSparks");
const shopTrailPetals = document.getElementById("shopTrailPetals");
const shopAircraftClassicLabel = document.getElementById("shopAircraftClassicLabel");
const shopAircraftDartLabel = document.getElementById("shopAircraftDartLabel");
const shopAircraftGliderLabel = document.getElementById("shopAircraftGliderLabel");
const shopAircraftArrowLabel = document.getElementById("shopAircraftArrowLabel");
const shopAircraftCometLabel = document.getElementById("shopAircraftCometLabel");
const shopAircraftWispLabel = document.getElementById("shopAircraftWispLabel");
const shopAircraftDiamondLabel = document.getElementById("shopAircraftDiamondLabel");
const shopAircraftDiamondName = document.getElementById("shopAircraftDiamondName");
const shopDescriptionPopup = document.getElementById("shopDescriptionPopup");
const shopAircraftHaloLabel = document.getElementById("shopAircraftHaloLabel");
const shopAircraftPrismLabel = document.getElementById("shopAircraftPrismLabel");
const shopTrailWhiteLabel = document.getElementById("shopTrailWhiteLabel");
const shopTrailBlueLabel = document.getElementById("shopTrailBlueLabel");
const shopTrailPinkLabel = document.getElementById("shopTrailPinkLabel");
const shopTrailPurpleLabel = document.getElementById("shopTrailPurpleLabel");
const shopTrailAuroraLabel = document.getElementById("shopTrailAuroraLabel");
const shopTrailStardustLabel = document.getElementById("shopTrailStardustLabel");
const shopTrailStarsLabel = document.getElementById("shopTrailStarsLabel");
const shopTrailHeartsLabel = document.getElementById("shopTrailHeartsLabel");
const shopTrailDiamondsLabel = document.getElementById("shopTrailDiamondsLabel");
const shopTrailRingsLabel = document.getElementById("shopTrailRingsLabel");
const shopTrailSparksLabel = document.getElementById("shopTrailSparksLabel");
const shopTrailPetalsLabel = document.getElementById("shopTrailPetalsLabel");
const pauseMenuActions = document.getElementById("pauseMenuActions");
const pauseMainMenuButton = document.getElementById("pauseMainMenu");
const pauseShopButton = document.getElementById("pauseShop");
const pauseAdvancementsButton = document.getElementById("pauseAdvancements");
const pauseSaveButton = document.getElementById("pauseSave");
const pauseSavePanel = document.getElementById("pauseSavePanel");
const pauseSaveBackButton = document.getElementById("pauseSaveBack");
const pauseAdvancementsPanel = document.getElementById("pauseAdvancementsPanel");
const pauseAdvancementsBackButton = document.getElementById("pauseAdvancementsBack");
const pauseLeaderboardButton = document.getElementById("pauseLeaderboard");
const pauseLeaderboardPanel = document.getElementById("pauseLeaderboardPanel");
const pauseLeaderboardList = document.getElementById("pauseLeaderboardList");
const pauseLeaderboardStatus = document.getElementById("pauseLeaderboardStatus");
const pauseLeaderboardBack = document.getElementById("pauseLeaderboardBack");
const pauseLeaderboardHeading = document.getElementById("pauseLeaderboardHeading");
const pauseLeaderboardLeft = document.getElementById("pauseLeaderboardLeft");
const pauseLeaderboardRight = document.getElementById("pauseLeaderboardRight");
const pauseLeaderboardPersonal = document.getElementById("pauseLeaderboardPersonal");
const titleLeaderboardButton = document.getElementById("titleLeaderboard");
const titleLeaderboardPanel = document.getElementById("titleLeaderboardPanel");
const titleLeaderboardList = document.getElementById("titleLeaderboardList");
const titleLeaderboardStatus = document.getElementById("titleLeaderboardStatus");
const titleLeaderboardBack = document.getElementById("titleLeaderboardBack");
const titleLeaderboardHeading = document.getElementById("titleLeaderboardHeading");
const titleLeaderboardLeft = document.getElementById("titleLeaderboardLeft");
const titleLeaderboardRight = document.getElementById("titleLeaderboardRight");
const titleLeaderboardPersonal = document.getElementById("titleLeaderboardPersonal");
const playerNamePrompt = document.getElementById("playerNamePrompt");
const playerNameInput = document.getElementById("playerNameInput");
const playerNameConfirm = document.getElementById("playerNameConfirm");
const playerNameSkip = document.getElementById("playerNameSkip");
const playerNameStatus = document.getElementById("playerNameStatus");
const advancementPopup = document.getElementById("advancementPopup");
const advancementPopupTitle = document.getElementById("advancementPopupTitle");
const advancementPopupReward = document.getElementById("advancementPopupReward");
const saveCodeOutput = document.getElementById("saveCodeOutput");
const boostControl = document.getElementById("boostControl");
const gameLightCounter = document.getElementById("gameLightCounter");

const altitudeMarks = [
  0, 10, 100, 500, 1000, 1500, 5000, 10000, 15000, 20000, 50000
];
const aircraftScoreMultipliers = { classic: 1, dart: 0.98, glider: 1.08, arrow: 1.02, comet: 0.94, wisp: 1.06, diamond: 1.12, halo: 1.04, prism: 1 };
const trailScoreMultipliers = { white: 1, blue: 1.01, pink: 1.02, purple: 1.03, aurora: 1.05, stardust: 1.06 };
const leaderboardMetrics = [
  { key: "height", label: "Height", suffix: " km" },
  { key: "score", label: "Score", suffix: "" },
  { key: "total_lights", label: "Total Lights", suffix: " lights" }
];
let leaderboardMetricIndex = 1;
let pendingPlayerNameAction = null;
let pendingLeaderboardRecord = null;
let hasVisitedGameplayThisSession = false;

const pixelsPerKm = 28;
const defaultShopProfile = {
  owned: ["aircraft-classic", "trail-white"],
  aircraft: "classic",
  trail: "white"
};
const validShopItemIds = [
  "aircraft-classic", "aircraft-dart", "aircraft-glider", "aircraft-arrow", "aircraft-comet", "aircraft-wisp", "aircraft-diamond",
  "aircraft-halo", "aircraft-prism",
  "trail-white", "trail-blue", "trail-pink", "trail-purple", "trail-aurora", "trail-stardust",
  "trail-stars", "trail-hearts", "trail-diamonds", "trail-rings", "trail-sparks", "trail-petals"
];
const validAircraftStyles = ["classic", "dart", "glider", "arrow", "comet", "wisp", "diamond", "halo", "prism"];
const validTrailStyles = ["white", "blue", "pink", "purple", "aurora", "stardust", "stars", "hearts", "diamonds", "rings", "sparks", "petals"];
const aircraftStats = {
  classic: { flightSpeed: 350, turnSpeed: 2, collisionScale: 0.68, boostDuration: 1, boostRecharge: 20, boostSpeed: 600 },
  dart: { flightSpeed: 385, turnSpeed: 2.25, collisionScale: 0.52, boostDuration: 0.72, boostRecharge: 17, boostSpeed: 690 },
  glider: { flightSpeed: 315, turnSpeed: 2.55, collisionScale: 0.8, boostDuration: 1.4, boostRecharge: 25, boostSpeed: 535 },
  arrow: { flightSpeed: 370, turnSpeed: 2.7, collisionScale: 0.58, boostDuration: 1.25, boostRecharge: 23, boostSpeed: 640 },
  comet: { flightSpeed: 405, turnSpeed: 1.7, collisionScale: 0.64, boostDuration: 0.8, boostRecharge: 18, boostSpeed: 720 },
  wisp: { flightSpeed: 335, turnSpeed: 2.35, collisionScale: 0.56, boostDuration: 1.55, boostRecharge: 28, boostSpeed: 560 },
  diamond: { flightSpeed: 300, turnSpeed: 3.2, collisionScale: 0.54, boostDuration: 2.25, boostRecharge: 27, boostSpeed: 570 },
  halo: { flightSpeed: 355, turnSpeed: 2.4, collisionScale: 0.62, boostDuration: 1.2, boostRecharge: 20, boostSpeed: 620 },
  prism: { flightSpeed: 390, turnSpeed: 2.45, collisionScale: 0.6, boostDuration: 1.1, boostRecharge: 21, boostSpeed: 675 }
};
const trailColors = {
  white: ["#ffffff", "rgba(255, 255, 255, 0.8)"],
  blue: ["#ccecff", "rgba(204, 236, 255, 0.82)"],
  pink: ["#ffd2e6", "rgba(255, 210, 230, 0.82)"],
  purple: ["#ddd0ff", "rgba(221, 208, 255, 0.82)"],
  aurora: ["#ffd7a8", "rgba(255, 215, 168, 0.86)"],
  stardust: ["#fff2b8", "rgba(255, 242, 184, 0.86)"],
  stars: ["#ffffff", "rgba(255, 255, 255, 0.88)"],
  hearts: ["#ffffff", "rgba(255, 255, 255, 0.88)"],
  diamonds: ["#ffffff", "rgba(255, 255, 255, 0.88)"],
  rings: ["#ffffff", "rgba(255, 255, 255, 0.88)"],
  sparks: ["#ffffff", "rgba(255, 255, 255, 0.88)"],
  petals: ["#ffffff", "rgba(255, 255, 255, 0.88)"]
};
const advancementDefinitions = [
  { id: "light-seeker", target: 100, metric: "lights", title: "Light Seeker", rewardId: "trail-aurora", rewardName: "Aurora trail", elementPrefix: "advancementLightSeeker" },
  { id: "skybound", target: 1000, metric: "altitude", title: "Skybound", rewardId: "aircraft-prism", rewardName: "Prism aircraft", elementPrefix: "advancementSkybound" },
  { id: "resilient", target: 20, metric: "hits", title: "Resilient", rewardId: "trail-stardust", rewardName: "Stardust trail", elementPrefix: "advancementResilient", hideReward: true },
  { id: "voyager", target: 10000, metric: "altitude", title: "Voyager", rewardId: "aircraft-halo", rewardName: "Halo aircraft", elementPrefix: "advancementVoyager" },
  { id: "glowkeeper", target: 500, metric: "lights", title: "Glowkeeper", rewardId: "trail-stars", rewardName: "Star trail", elementPrefix: "advancementGlowkeeper" },
  { id: "high-orbit", target: 50000, metric: "altitude", title: "High Orbit", rewardId: "trail-diamonds", rewardName: "Diamond trail", elementPrefix: "advancementHighOrbit" },
  { id: "enduring", target: 50, metric: "hits", title: "Enduring", rewardId: "trail-hearts", rewardName: "Heart trail", elementPrefix: "advancementEnduring", hideReward: true },
  { id: "beacon", target: 1000, metric: "lights", title: "Beacon", rewardId: "trail-sparks", rewardName: "Spark trail", elementPrefix: "advancementBeacon" },
  { id: "deep-space", target: 100000, metric: "altitude", title: "Deep Space", rewardId: "trail-rings", rewardName: "Ring trail", elementPrefix: "advancementDeepSpace" },
  { id: "unshaken", target: 100, metric: "hits", title: "Unshaken", rewardId: "trail-petals", rewardName: "Petal trail", elementPrefix: "advancementUnshaken", hideReward: true },
  { id: "million", target: 1_000_000, metric: "altitude", title: "Beyond Measure", rewardId: "aircraft-diamond", rewardName: "Diamond aircraft", elementPrefix: "advancementMillion", revealAfterCompletion: true }
];
const collectibleColors = [
  "205, 231, 255",
  "255, 239, 184",
  "255, 211, 233",
  "225, 211, 255"
];
const startingBackground = ["#7894ba", "#9187ba", "#c486b4", "#df91a6"];
const altitudeBackgrounds = [
  ["#402d59", "#79517d", "#be70a5", "#ed9cb8"],
  ["#111a36", "#293c68", "#496c99", "#7e9dbd"],
  ["#123b48", "#246a70", "#54a39d", "#9bcec0"],
  ["#2d214d", "#57427c", "#8c66a4", "#c38fbc"],
  ["#263553", "#466b7a", "#759b98", "#d194b2"]
];

const state = {
  titleScreenVisible: true,
  splashVisible: true,
  shopScreenVisible: false,
  shopOpenedFromPause: false,
  launched: false,
  gameOver: false,
  paused: false,
  dragging: false,
  activePointerId: null,
  animationFrameId: null,
  width: 0,
  height: 0,
  pixelRatio: 1,
  lastTime: 0,
  cameraY: 0,
  flightSpeed: 350,
  turnSpeed: 2,
  launchStartY: 0,
  viewOffsetX: 0,
  groundOffsetX: 0,
  targetViewOffsetX: 0,
  titleOpacity: 1,
  pointerX: 0,
  pointerY: 0,
  pointerInside: false,
  lastFlightX: 0,
  lastFlightY: -1,
  lives: 3,
  bestAltitude: loadBestAltitude(),
  bestScore: Number(window.localStorage?.getItem("ascend-best-score") || 0),
  runDistance: 0,
  runLights: 0,
  screenShakeEnabled: loadScreenShakeSetting(),
  musicEnabled: loadMusicSetting(),
  sfxEnabled: loadSfxSetting(),
  showLaunchPrompt: !loadLaunchPromptSeen(),
  invulnerableTime: 0,
  hitPulse: 0,
  bounceTime: 0,
  impactSlowTime: 0,
  impactRecoilTime: 0,
  boostCharge: 1,
  boostHeld: false,
  boostActive: false,
  boostLocked: false,
  boostPointerId: null,
  boostExitProtection: false,
  autosaveTime: 0,
  shakeTime: 0,
  shakeDuration: 0.24,
  shakeStrength: 5,
  shakeX: 0,
  shakeY: 0,
  nextAsteroidY: 0,
  nextLaneChallengeY: 0,
  nextCollectibleY: 0,
  asteroids: [],
  collectibles: [],
  collectionEffects: [],
  coinsCollected: loadLightBalance(),
  shopProfile: loadShopProfile(),
  advancementProgress: loadAdvancementProgress(),
  trail: [],
  trailAccumulator: 0,
  launchButton: {
    x: 0,
    y: 0,
    homeY: 0,
    size: 34
  },
  aircraft: {
    x: 0,
    y: 0,
    radius: 24,
    tilt: 0,
    vx: 0,
    vy: 0,
    previousX: 0,
    previousY: 0
  },
  stars: [],
  haze: []
};

const audioEngine = {
  context: null,
  master: null,
  music: null,
  sfx: null,
  sequenceIndex: 0,
  sequenceTimer: null,
  started: false
};

function ensureAudio() {
  if (!state.musicEnabled && !state.sfxEnabled) return null;
  const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContextClass) return null;

  if (!audioEngine.context) {
    const context = new AudioContextClass();
    const master = context.createGain();
    const music = context.createGain();
    const sfx = context.createGain();
    master.gain.value = 0.26;
    music.gain.value = state.musicEnabled ? 0.8 : 0.0001;
    sfx.gain.value = state.sfxEnabled ? 0.9 : 0.0001;
    music.connect(master);
    sfx.connect(master);
    master.connect(context.destination);
    audioEngine.context = context;
    audioEngine.master = master;
    audioEngine.music = music;
    audioEngine.sfx = sfx;
    audioEngine.started = true;
    scheduleAmbientNote();
  }

  if (audioEngine.context.state === "suspended") {
    audioEngine.context.resume();
  }
  return audioEngine.context;
}

function playBell(frequency, duration, volume, bus, delay = 0) {
  const context = ensureAudio();
  if (!context || !bus) return;
  const now = context.currentTime + delay;
  for (const [ratio, level] of [[1, 1], [2.01, 0.22], [3.98, 0.07]]) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency * ratio;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume * level, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(bus);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }
}

function playAirNote(frequency, duration, volume, delay = 0) {
  const context = ensureAudio();
  if (!context || !audioEngine.music) return;
  const now = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.18);
  gain.gain.exponentialRampToValueAtTime(volume * 0.55, now + duration * 0.58);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioEngine.music);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function scheduleAmbientNote() {
  const chords = [
    [293.66, 369.99, 440, 493.88],
    [246.94, 293.66, 369.99, 440],
    [196, 246.94, 293.66, 369.99],
    [220, 277.18, 329.63, 493.88]
  ];
  const arpeggio = [0, 2, 1, 3, 2, 1];
  const upperVoice = [587.33, 659.25, 739.99, 659.25, 554.37, 493.88, 554.37, 659.25];
  if (state.musicEnabled && audioEngine.music && audioEngine.context?.state === "running") {
    const step = audioEngine.sequenceIndex;
    const measure = Math.floor(step / 6);
    const chord = chords[measure % chords.length];
    const note = chord[arpeggio[step % arpeggio.length]];
    playBell(note, 1.35, 0.026, audioEngine.music);
    if (step % 6 === 0) {
      playBell(chord[0] / 2, 2.8, 0.012, audioEngine.music, 0.04);
      playAirNote(upperVoice[measure % upperVoice.length], 2.45, 0.018, 0.12);
    }
    audioEngine.sequenceIndex += 1;
  }
  audioEngine.sequenceTimer = window.setTimeout(scheduleAmbientNote, 430);
}

function playCollisionSound() {
  if (!state.sfxEnabled) return;
  ensureAudio();
  playBell(196, 0.68, 0.095, audioEngine.sfx);
  playBell(392, 0.3, 0.028, audioEngine.sfx, 0.025);
}

function playDeathSound() {
  if (!state.sfxEnabled) return;
  ensureAudio();
  [659.25, 523.25, 392, 261.63].forEach((frequency, index) => {
    playBell(frequency, 1.1, 0.095 - index * 0.012, audioEngine.sfx, index * 0.13);
  });
  playBell(130.81, 1.65, 0.12, audioEngine.sfx, 0.18);
}

function playCollectSound() {
  if (!state.sfxEnabled) return;
  ensureAudio();
  playBell(1046.5, 0.42, 0.024, audioEngine.sfx);
  playBell(1318.51, 0.48, 0.02, audioEngine.sfx, 0.055);
  playBell(1567.98, 0.56, 0.014, audioEngine.sfx, 0.11);
}

function resize() {
  const previousWidth = state.width;
  const previousHeight = state.height;
  state.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = Math.floor(state.width * state.pixelRatio);
  canvas.height = Math.floor(state.height * state.pixelRatio);
  ctx.setTransform(state.pixelRatio, 0, 0, state.pixelRatio, 0, 0);
  state.aircraft.radius = Math.max(8, Math.min(15, state.width * 0.024));

  if (!previousWidth || (!state.launched && !state.gameOver)) {
    resetRun();
  } else {
    const scaleX = state.width / previousWidth;
    const scaleY = state.height / previousHeight;
    state.aircraft.x = clamp(state.aircraft.x * scaleX, state.aircraft.radius, state.width - state.aircraft.radius);
    state.aircraft.y = clamp(state.aircraft.y * scaleY, state.aircraft.radius, state.height - state.aircraft.radius);
    state.aircraft.previousX = state.aircraft.x;
    state.aircraft.previousY = state.aircraft.y;
    state.pointerX *= scaleX;
    state.pointerY *= scaleY;
    for (const asteroid of state.asteroids) {
      asteroid.x *= scaleX;
    }
    for (const collectible of state.collectibles) {
      collectible.x *= scaleX;
    }
    state.trail = [];
  }

  makeAtmosphere();
  drawTitleScreen();
  render();
}

function resetRun() {
  finalizePendingLeaderboardEntry();
  closeMenu(false);
  stopAnimationLoop();
  releaseActivePointer();
  state.launched = false;
  state.gameOver = false;
  state.paused = false;
  state.dragging = false;
  applyAircraftStats();
  state.cameraY = 0;
  state.viewOffsetX = 0;
  state.groundOffsetX = 0;
  state.targetViewOffsetX = 0;
  state.titleOpacity = 1;
  state.lives = 3;
  state.invulnerableTime = 0;
  state.hitPulse = 0;
  state.bounceTime = 0;
  state.impactSlowTime = 0;
  state.impactRecoilTime = 0;
  state.boostCharge = 1;
  state.boostHeld = false;
  state.boostActive = false;
  state.boostLocked = false;
  state.boostPointerId = null;
  state.boostExitProtection = false;
  state.autosaveTime = 0;
  state.shakeTime = 0;
  state.shakeDuration = 0.24;
  state.shakeStrength = 5;
  state.shakeX = 0;
  state.shakeY = 0;
  applyScreenShake();
  state.asteroids = [];
  state.collectibles = [];
  state.collectionEffects = [];
  state.coinsCollected = loadLightBalance();
  state.runDistance = 0;
  state.runLights = 0;
  updateShopLightCount();
  state.trail = [];
  state.trailAccumulator = 0;
  state.nextAsteroidY = getWorldScreenOriginY() + 620;
  state.nextLaneChallengeY = getWorldScreenOriginY() + markToWorldY(35);
  state.nextCollectibleY = getWorldScreenOriginY() + 760;
  state.lastTime = performance.now();
  const floorTop = getFloorTopY(0);
  state.aircraft.x = state.width / 2;
  state.aircraft.y = floorTop - state.aircraft.radius * 0.9;
  state.aircraft.tilt = 0;
  state.aircraft.vx = 0;
  state.aircraft.vy = 0;
  state.aircraft.previousX = state.aircraft.x;
  state.aircraft.previousY = state.aircraft.y;
  state.pointerX = state.width / 2;
  state.pointerY = state.height / 2;
  state.pointerInside = false;
  state.lastFlightX = 0;
  state.lastFlightY = -1;
  altitudeLabel.textContent = "0 km";
  updateLivesDisplay();
  updateBoostDisplay();
  updateLaunchButton();
  gameOverPanel.classList.add("hidden");
  startPanel.classList.remove("hidden");
  startPanel.classList.remove("soft-hidden");
  if (state.showLaunchPrompt) {
    startPanel.classList.remove("prompt-disabled");
  } else {
    startPanel.classList.add("prompt-disabled");
  }
  checkAdvancements(false);
  render();
}

function getCurrentAircraftStats() {
  return aircraftStats[state.shopProfile.aircraft] ?? aircraftStats.classic;
}

function applyAircraftStats() {
  const stats = getCurrentAircraftStats();
  state.flightSpeed = stats.flightSpeed;
  state.turnSpeed = stats.turnSpeed;
}

function getViewportSpeedScale() {
  const shortSide = Math.min(state.width || window.innerWidth || 390, state.height || window.innerHeight || 844);
  return clamp(shortSide / 520, 0.72, 1);
}

function makeAtmosphere() {
  state.stars = Array.from({ length: 70 }, (_, index) => {
    const layer = index % 3;
    return {
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      size: 0.9 + Math.random() * (layer + 1.6),
      alpha: 0.25 + Math.random() * 0.55,
      layer: 0.12 + layer * 0.18
    };
  });

  state.haze = Array.from({ length: 18 }, (_, index) => ({
    x: Math.random() * state.width,
    y: Math.random() * state.height,
    width: state.width * (0.18 + Math.random() * 0.34),
    height: state.height * (0.04 + Math.random() * 0.09),
    alpha: 0.025 + Math.random() * 0.045,
    layer: 0.03 + index * 0.006
  }));
}

function drawTitleScreen() {
  titleCanvas.width = Math.floor(state.width * state.pixelRatio);
  titleCanvas.height = Math.floor(state.height * state.pixelRatio);
  titleCtx.setTransform(state.pixelRatio, 0, 0, state.pixelRatio, 0, 0);

  const background = titleCtx.createLinearGradient(0, 0, 0, state.height);
  background.addColorStop(0, "#657fae");
  background.addColorStop(0.42, "#837fb1");
  background.addColorStop(0.72, "#b17eaa");
  background.addColorStop(1, "#d78ca5");
  titleCtx.fillStyle = background;
  titleCtx.fillRect(0, 0, state.width, state.height);

  drawTitleAtmosphere();
  drawTitleStars();
  drawTitleAsteroid(state.width * 0.14, state.height * 0.3, Math.min(70, state.width * 0.13), 0.2, false);
  drawTitleAsteroid(state.width * 0.84, state.height * 0.28, Math.min(62, state.width * 0.11), -0.5, true);
  drawTitleAsteroid(state.width * 0.91, state.height * 0.46, Math.min(48, state.width * 0.085), 0.7, false);
  drawTitleAsteroid(state.width * 0.23, state.height * 0.48, Math.min(42, state.width * 0.075), -0.2, true);

  const landscapeMenuLayout = state.width / state.height > 0.85;
  const planeX = state.width * (state.splashVisible ? 0.5 : landscapeMenuLayout ? 0.66 : 0.5);
  const planeY = state.height * (landscapeMenuLayout ? 0.53 : 0.48);
  const planeRadius = clamp(Math.min(state.width, state.height) * 0.095, 36, 82);
  drawTitleClouds();
  fadeTitleCloudLines(planeX, planeY, planeRadius);
  drawTitleTrailParticles(planeX, planeY, planeRadius);
  drawTitlePlane(planeX, planeY, planeRadius);
}

function drawTitleAtmosphere() {
  titleCtx.save();
  titleCtx.globalCompositeOperation = "screen";

  for (let index = 0; index < 11; index += 1) {
    const x = wrap(index * state.width * 0.237 + state.width * 0.09, state.width);
    const y = wrap(index * state.height * 0.173 + state.height * 0.11, state.height * 0.9);
    const width = state.width * (0.16 + index % 4 * 0.045);
    const height = state.height * (0.025 + index % 3 * 0.012);
    const glow = titleCtx.createRadialGradient(x, y, 0, x, y, width);
    glow.addColorStop(0, `rgba(255, 238, 248, ${0.035 + index % 3 * 0.012})`);
    glow.addColorStop(1, "rgba(255, 238, 248, 0)");
    titleCtx.fillStyle = glow;
    titleCtx.beginPath();
    titleCtx.ellipse(x, y, width, height, (index % 5 - 2) * 0.035, 0, Math.PI * 2);
    titleCtx.fill();
  }

  titleCtx.restore();
}

function drawTitleStars() {
  titleCtx.save();
  titleCtx.fillStyle = "#ffffff";

  for (let index = 0; index < 62; index += 1) {
    const x = wrap(index * 83.37 + 29, state.width);
    const y = wrap(index * 47.21 + 61, state.height * 0.78);
    const size = 0.8 + index % 4 * 0.45;
    titleCtx.globalAlpha = 0.16 + index % 5 * 0.075;
    titleCtx.beginPath();
    titleCtx.ellipse(x, y, size * 1.3, size * 0.55, -0.35, 0, Math.PI * 2);
    titleCtx.fill();
  }

  titleCtx.restore();
}

function drawTitleAsteroid(x, y, radius, rotation, filled) {
  titleCtx.save();
  titleCtx.translate(x, y);
  titleCtx.rotate(rotation);
  titleCtx.beginPath();

  const pointCount = 11;
  for (let index = 0; index < pointCount; index += 1) {
    const angle = index / pointCount * Math.PI * 2;
    const variation = 0.78 + (Math.sin(index * 2.31 + radius) + 1) * 0.14;
    const pointX = Math.cos(angle) * radius * variation;
    const pointY = Math.sin(angle) * radius * variation * 0.84;

    if (index === 0) {
      titleCtx.moveTo(pointX, pointY);
    } else {
      titleCtx.lineTo(pointX, pointY);
    }
  }

  titleCtx.closePath();
  titleCtx.lineJoin = "round";
  titleCtx.lineWidth = clamp(radius * 0.065, 2, 4);
  titleCtx.strokeStyle = "rgba(255, 255, 255, 0.78)";
  titleCtx.fillStyle = filled
    ? "rgba(255, 255, 255, 0.35)"
    : "rgba(255, 255, 255, 0.035)";
  titleCtx.fill();
  titleCtx.stroke();
  titleCtx.restore();
}

function traceTitleTrail(planeX, planeY, planeRadius) {
  titleCtx.moveTo(planeX, planeY + planeRadius * 0.92);
  titleCtx.bezierCurveTo(
    planeX - state.width * 0.04,
    planeY + state.height * 0.16,
    planeX + state.width * 0.2,
    state.height * 0.72,
    planeX - state.width * 0.04,
    state.height * 0.97
  );
}

function drawTitleTrailParticles(planeX, planeY, planeRadius) {
  const start = {
    x: planeX,
    y: planeY + planeRadius * 0.92
  };
  const controlOne = {
    x: planeX - state.width * 0.04,
    y: planeY + state.height * 0.16
  };
  const controlTwo = {
    x: planeX + state.width * 0.2,
    y: state.height * 0.72
  };
  const end = {
    x: planeX - state.width * 0.04,
    y: state.height * 0.97
  };
  const particleCount = 17;

  titleCtx.save();
  titleCtx.globalCompositeOperation = "screen";
  titleCtx.fillStyle = "#ffffff";
  titleCtx.shadowColor = "rgba(255, 255, 255, 0.72)";
  titleCtx.shadowBlur = planeRadius * 0.24;

  for (let index = 0; index < particleCount; index += 1) {
    const progress = 0.06 + index / (particleCount - 1) * 0.88;
    const remaining = 1 - progress;
    const x = remaining ** 3 * start.x +
      3 * remaining ** 2 * progress * controlOne.x +
      3 * remaining * progress ** 2 * controlTwo.x +
      progress ** 3 * end.x;
    const y = remaining ** 3 * start.y +
      3 * remaining ** 2 * progress * controlOne.y +
      3 * remaining * progress ** 2 * controlTwo.y +
      progress ** 3 * end.y;
    const horizontalSpread = planeRadius * (0.08 + progress * 0.48);
    const sideOffset = Math.sin(index * 2.1) * horizontalSpread;
    const sizeVariation = 0.9 + index % 3 * 0.08;
    const radius = planeRadius * (0.14 - progress * 0.075) * sizeVariation;

    titleCtx.globalAlpha = 0.8 * (1 - progress * 0.92);
    titleCtx.beginPath();
    titleCtx.arc(x + sideOffset, y, radius, 0, Math.PI * 2);
    titleCtx.fill();
  }

  titleCtx.restore();
}

function drawTitlePlane(x, y, radius) {
  titleCtx.save();
  titleCtx.translate(x, y);
  titleCtx.rotate(0.06);
  titleCtx.shadowColor = "rgba(255, 255, 255, 0.76)";
  titleCtx.shadowBlur = radius * 1.2;

  titleCtx.fillStyle = "rgba(221, 227, 243, 0.96)";
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.6);
  titleCtx.lineTo(radius * 1.5, radius * 0.96);
  titleCtx.lineTo(radius * 0.33, radius * 0.56);
  titleCtx.lineTo(0, radius * 1.28);
  titleCtx.lineTo(-radius * 0.33, radius * 0.56);
  titleCtx.lineTo(-radius * 1.5, radius * 0.96);
  titleCtx.closePath();
  titleCtx.fill();

  const leftShade = titleCtx.createLinearGradient(-radius * 1.4, radius, 0, -radius);
  leftShade.addColorStop(0, "rgba(190, 201, 225, 0.98)");
  leftShade.addColorStop(1, "rgba(236, 240, 250, 0.98)");
  titleCtx.fillStyle = leftShade;
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.6);
  titleCtx.lineTo(-radius * 1.5, radius * 0.96);
  titleCtx.lineTo(-radius * 0.33, radius * 0.56);
  titleCtx.lineTo(0, radius * 0.28);
  titleCtx.closePath();
  titleCtx.fill();

  const rightShade = titleCtx.createLinearGradient(0, -radius, radius * 1.5, radius);
  rightShade.addColorStop(0, "rgba(255, 255, 255, 0.99)");
  rightShade.addColorStop(1, "rgba(226, 231, 246, 0.98)");
  titleCtx.fillStyle = rightShade;
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.6);
  titleCtx.lineTo(radius * 1.5, radius * 0.96);
  titleCtx.lineTo(radius * 0.33, radius * 0.56);
  titleCtx.lineTo(0, radius * 0.28);
  titleCtx.closePath();
  titleCtx.fill();

  const centerShade = titleCtx.createLinearGradient(0, -radius * 1.5, 0, radius * 1.28);
  centerShade.addColorStop(0, "rgba(250, 252, 255, 1)");
  centerShade.addColorStop(0.62, "rgba(216, 223, 241, 0.98)");
  centerShade.addColorStop(1, "rgba(179, 191, 220, 0.96)");
  titleCtx.fillStyle = centerShade;
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.6);
  titleCtx.lineTo(radius * 0.33, radius * 0.56);
  titleCtx.lineTo(0, radius * 1.28);
  titleCtx.lineTo(-radius * 0.33, radius * 0.56);
  titleCtx.closePath();
  titleCtx.fill();

  titleCtx.shadowBlur = 0;
  titleCtx.strokeStyle = "rgba(255, 255, 255, 0.92)";
  titleCtx.lineWidth = 2;
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.6);
  titleCtx.lineTo(radius * 1.5, radius * 0.96);
  titleCtx.lineTo(radius * 0.33, radius * 0.56);
  titleCtx.lineTo(0, radius * 1.28);
  titleCtx.lineTo(-radius * 0.33, radius * 0.56);
  titleCtx.lineTo(-radius * 1.5, radius * 0.96);
  titleCtx.closePath();
  titleCtx.stroke();

  titleCtx.strokeStyle = "rgba(91, 107, 148, 0.3)";
  titleCtx.lineWidth = 1.4;
  titleCtx.beginPath();
  titleCtx.moveTo(0, -radius * 1.42);
  titleCtx.lineTo(0, radius * 1.05);
  titleCtx.moveTo(0, radius * 0.28);
  titleCtx.lineTo(radius * 1.15, radius * 0.82);
  titleCtx.moveTo(0, radius * 0.28);
  titleCtx.lineTo(-radius * 1.15, radius * 0.82);
  titleCtx.stroke();
  titleCtx.restore();
}

function drawTitleClouds() {
  titleCtx.save();
  const cloudTop = state.height * 0.68;
  const haze = titleCtx.createLinearGradient(0, cloudTop, 0, state.height);
  haze.addColorStop(0, "rgba(223, 190, 222, 0)");
  haze.addColorStop(0.55, "rgba(224, 188, 214, 0.08)");
  haze.addColorStop(1, "rgba(211, 147, 176, 0.3)");
  titleCtx.fillStyle = haze;
  titleCtx.fillRect(0, cloudTop, state.width, state.height - cloudTop);

  drawTitleLineCloud(state.width * 0.08, state.height * 0.82, state.width * 0.36, state.height * 0.2, 0.68, 0);
  drawTitleLineCloud(state.width * 0.37, state.height * 0.87, state.width * 0.31, state.height * 0.17, 0.62, 1);
  drawTitleLineCloud(state.width * 0.7, state.height * 0.86, state.width * 0.27, state.height * 0.16, 0.64, 2);
  drawTitleLineCloud(state.width * 0.96, state.height * 0.81, state.width * 0.35, state.height * 0.21, 0.7, 3);
  drawTitleLineCloud(state.width * 0.18, state.height * 1.01, state.width * 0.43, state.height * 0.17, 0.74, 4);
  drawTitleLineCloud(state.width * 0.55, state.height * 1.01, state.width * 0.36, state.height * 0.15, 0.68, 5);
  drawTitleLineCloud(state.width * 0.87, state.height * 1.0, state.width * 0.31, state.height * 0.16, 0.72, 6);

  titleCtx.restore();
}

function fadeTitleCloudLines(planeX, planeY, planeRadius) {
  titleCtx.save();
  titleCtx.globalCompositeOperation = "destination-out";
  titleCtx.lineCap = "round";

  const trailFadeWidths = [planeRadius * 1.65, planeRadius * 1.15, planeRadius * 0.78];
  const trailFadeAlphas = [0.16, 0.28, 0.52];
  for (let index = 0; index < trailFadeWidths.length; index += 1) {
    titleCtx.beginPath();
    traceTitleTrail(planeX, planeY, planeRadius);
    titleCtx.lineWidth = trailFadeWidths[index];
    titleCtx.strokeStyle = `rgba(0, 0, 0, ${trailFadeAlphas[index]})`;
    titleCtx.stroke();
  }

  if (state.splashVisible) {
    const promptX = state.width * 0.5;
    const promptY = state.height - Math.max(28, state.height * 0.035);
    const promptRadius = Math.max(state.width * 0.32, 150);
    const promptFade = titleCtx.createRadialGradient(
      promptX, promptY, 0,
      promptX, promptY, promptRadius
    );
    promptFade.addColorStop(0, "rgba(0, 0, 0, 0.88)");
    promptFade.addColorStop(0.42, "rgba(0, 0, 0, 0.62)");
    promptFade.addColorStop(1, "rgba(0, 0, 0, 0)");
    titleCtx.fillStyle = promptFade;
    titleCtx.fillRect(0, state.height * 0.84, state.width, state.height * 0.16);
  }

  titleCtx.restore();
}

function drawTitleLineCloud(x, y, width, height, opacity, variation) {
  const left = x - width * 0.56;
  const right = x + width * 0.56;
  const shoulderLift = 0.44 + (variation % 3) * 0.04;
  const crownLift = 0.76 + (variation % 2) * 0.08;

  function traceContour() {
    titleCtx.moveTo(left, y);
    titleCtx.bezierCurveTo(
      x - width * 0.58, y - height * 0.18,
      x - width * 0.5, y - height * shoulderLift,
      x - width * 0.35, y - height * 0.43
    );
    titleCtx.bezierCurveTo(
      x - width * 0.3, y - height * 0.72,
      x - width * 0.12, y - height * crownLift,
      x, y - height * 0.66
    );
    titleCtx.bezierCurveTo(
      x + width * 0.13, y - height * (0.88 - (variation % 3) * 0.04),
      x + width * 0.34, y - height * 0.7,
      x + width * 0.37, y - height * 0.45
    );
    titleCtx.bezierCurveTo(
      x + width * 0.51, y - height * 0.42,
      x + width * 0.59, y - height * 0.15,
      right, y
    );
  }

  const cloudFade = titleCtx.createLinearGradient(0, y - height, 0, y + height * 0.35);
  cloudFade.addColorStop(0, `rgba(255, 247, 252, ${opacity * 0.14})`);
  cloudFade.addColorStop(0.6, `rgba(244, 222, 239, ${opacity * 0.07})`);
  cloudFade.addColorStop(1, "rgba(244, 222, 239, 0)");

  titleCtx.beginPath();
  traceContour();
  titleCtx.lineTo(right, y + height * 0.42);
  titleCtx.lineTo(left, y + height * 0.42);
  titleCtx.closePath();
  titleCtx.fillStyle = cloudFade;
  titleCtx.fill();

  titleCtx.beginPath();
  traceContour();
  titleCtx.strokeStyle = `rgba(255, 245, 251, ${opacity})`;
  titleCtx.lineWidth = clamp(width * 0.018, 3, 8);
  titleCtx.lineCap = "round";
  titleCtx.lineJoin = "round";
  titleCtx.shadowColor = "rgba(255, 238, 249, 0.3)";
  titleCtx.shadowBlur = 4;
  titleCtx.stroke();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getAltitude() {
  const aircraftWorldY = state.cameraY + getWorldScreenOriginY() - state.aircraft.y;
  return Math.floor(Math.max(0, aircraftWorldY) / pixelsPerKm);
}

function markToWorldY(mark) {
  return mark * pixelsPerKm;
}

function worldToScreenY(worldY) {
  return getWorldScreenOriginY() - (worldY - state.cameraY);
}

function getWorldScreenOriginY() {
  return state.height - 18;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function wrap(value, size) {
  return ((value % size) + size) % size;
}

function updateLivesDisplay() {
  livesLabel.replaceChildren();

  for (let index = 0; index < 3; index += 1) {
    const dot = document.createElement("span");
    dot.className = index < state.lives ? "life-dot" : "life-dot empty";
    livesLabel.append(dot);
  }

  livesLabel.setAttribute("aria-label", `${state.lives} lives`);
}

function eventToCanvas(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isNearAircraft(point) {
  if (!state.launched) {
    return isInsideLaunchButton(point);
  }

  const dx = point.x - state.aircraft.x;
  const dy = point.y - state.aircraft.y;
  return Math.hypot(dx, dy) < state.aircraft.radius * 3.6;
}

function setPointerTarget(event) {
  const point = eventToCanvas(event);
  setPointerPosition(point);
  setViewTarget(point);
}

function setViewTarget(point) {
  if (!state.launched) {
    state.targetViewOffsetX = 0;
    state.viewOffsetX = 0;
    return;
  }

  state.targetViewOffsetX = clamp(
    (state.width / 2 - point.x) * 0.36,
    -state.width * 0.18,
    state.width * 0.18
  );
}

function setPointerPosition(point) {
  state.pointerX = point.x;
  state.pointerY = point.y;
  state.pointerInside = true;
}

function getSteeringDeadzone() {
  return clamp(Math.min(state.width, state.height) * 0.055, 24, 42);
}

function getFlightDirection(deltaSeconds = 1 / 60) {
  let targetX = state.lastFlightX;
  let targetY = state.lastFlightY;

  if (state.pointerInside) {
    const x = state.pointerX - state.width / 2;
    const y = state.pointerY - state.height / 2;
    const length = Math.hypot(x, y);

    if (length >= getSteeringDeadzone()) {
      targetX = x / length;
      targetY = y / length;
    }
  }

  const currentAngle = Math.atan2(state.lastFlightY, state.lastFlightX);
  const targetAngle = Math.atan2(targetY, targetX);
  const angleChange = clamp(
    normalizeAngle(targetAngle - currentAngle),
    -state.turnSpeed * deltaSeconds,
    state.turnSpeed * deltaSeconds
  );
  const nextAngle = currentAngle + angleChange;
  state.lastFlightX = Math.cos(nextAngle);
  state.lastFlightY = Math.sin(nextAngle);

  return {
    x: state.lastFlightX,
    y: state.lastFlightY
  };
}

function launch() {
  if (state.gameOver || state.titleScreenVisible) {
    return;
  }

  stopAnimationLoop();
  if (state.showLaunchPrompt) {
    state.showLaunchPrompt = false;
    startPanel.classList.add("prompt-disabled");
    saveLaunchPromptSeen();
  }
  state.launched = true;
  state.aircraft.tilt = 0;
  state.lastTime = performance.now();
  startPanel.classList.add("hidden");
  state.animationFrameId = requestAnimationFrame(loop);
}

function stopAnimationLoop() {
  if (state.animationFrameId !== null) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }
}

function openMenu() {
  if (state.titleScreenVisible) {
    return;
  }

  if (sideMenu.classList.contains("open")) {
    return;
  }

  state.paused = true;
  state.shopScreenVisible = false;
  state.shopOpenedFromPause = false;
  pauseHeading.textContent = "Paused";
  sideMenu.classList.remove("shop-open");
  sideMenu.setAttribute("aria-label", "Pause menu");
  setBoostHeld(false);
  state.dragging = false;
  releaseActivePointer();
  stopAnimationLoop();
  showPauseMenuActions();
  sideMenu.classList.add("open");
  menuBackdrop.classList.add("open");
  menuToggleButton.classList.add("menu-open");
  sideMenu.setAttribute("aria-hidden", "false");
  menuToggleButton.setAttribute("aria-expanded", "true");
}

function togglePauseMenu() {
  if (state.titleScreenVisible || state.gameOver) {
    return;
  }

  if (sideMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

function closeMenu(resume = true) {
  sideMenu.classList.remove("open");
  sideMenu.classList.remove("shop-open");
  menuBackdrop.classList.remove("open");
  menuToggleButton.classList.remove("menu-open");
  sideMenu.setAttribute("aria-hidden", "true");
  menuToggleButton.setAttribute("aria-expanded", "false");
  state.paused = false;
  state.shopScreenVisible = false;
  state.shopOpenedFromPause = false;
  pauseHeading.textContent = "Paused";
  sideMenu.setAttribute("aria-label", "Pause menu");
  showPauseMenuActions();

  if (resume && (state.launched || state.shakeTime > 0)) {
    state.lastTime = performance.now();
    stopAnimationLoop();
    state.animationFrameId = requestAnimationFrame(loop);
  }
}

function restartFromMenu() {
  closeMenu(false);
  clearSavedRun();
  resetRun();
}

function showPauseMenuActions() {
  sideMenu.classList.remove("leaderboard-open");
  pauseMenuActions.classList.remove("hidden");
  pauseSavePanel.classList.add("hidden");
  pauseAdvancementsPanel.classList.add("hidden");
  pauseLeaderboardPanel.classList.add("hidden");
}

function showPausePanel(panel) {
  pauseMenuActions.classList.add("hidden");
  pauseSavePanel.classList.add("hidden");
  pauseAdvancementsPanel.classList.add("hidden");
  pauseLeaderboardPanel.classList.add("hidden");
  panel.classList.remove("hidden");
}

function showAdvancementsPanel() {
  pauseHeading.textContent = "Advancements";
  updateAdvancementsUI();
  showPausePanel(pauseAdvancementsPanel);
}

function getLeaderboardConfig() {
  const config = window.ASCEND_LEADERBOARD;
  if (!config?.firebaseProjectId || !config?.firebaseApiKey) return null;
  return {
    url: `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(config.firebaseProjectId)}/databases/(default)/documents`,
    key: config.firebaseApiKey,
    writesEnabled: config.firebaseWritesEnabled !== false
  };
}

function decodeFirestoreScore(document) {
  const fields = document?.fields;
  if (!fields) return null;
  const playerName = fields.player_name?.stringValue;
  if (typeof playerName !== "string") return null;
  return {
    player_name: playerName,
    score: Number(fields.score?.integerValue || 0),
    height: Number(fields.height?.integerValue || 0),
    total_lights: Number(fields.total_lights?.integerValue || 0)
  };
}

function encodeFirestoreScore(record) {
  return {
    fields: {
      player_name: { stringValue: record.player_name },
      score: { integerValue: String(record.score) },
      height: { integerValue: String(record.height) },
      total_lights: { integerValue: String(record.total_lights) },
      created_at: { timestampValue: new Date().toISOString() }
    }
  };
}

async function fetchCloudScores(config, metricKey, limit = 100) {
  const response = await fetch(`${config.url}:runQuery?key=${encodeURIComponent(config.key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "leaderboard" }],
        orderBy: [{ field: { fieldPath: metricKey }, direction: "DESCENDING" }],
        limit
      }
    })
  });
  if (!response.ok) throw new Error("Leaderboard request failed");
  const rows = await response.json();
  return rows.map((row) => decodeFirestoreScore(row.document)).filter(Boolean);
}

function getPilotName() {
  try {
    return window.localStorage?.getItem("ascend-pilot-name") || "Pilot";
  } catch {
    return "Pilot";
  }
}

function normalizePilotName(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 18);
}

function setPilotName(value) {
  const name = normalizePilotName(value) || "Pilot";
  try {
    window.localStorage?.setItem("ascend-pilot-name", name);
  } catch {
    // The name still works for this session when storage is unavailable.
  }
  return name;
}

function getNextAnonymousName() {
  let sequence = 0;
  try {
    const savedSequence = Number(window.localStorage?.getItem("ascend-anonymous-sequence"));
    if (Number.isSafeInteger(savedSequence) && savedSequence >= 0) {
      sequence = savedSequence;
    }
    window.localStorage?.setItem("ascend-anonymous-sequence", String(sequence + 1));
  } catch {
    // The in-memory fallback remains deterministic for this submission.
  }
  return `Pilot${sequence}`;
}

function uniqueTopScores(scores, metricKey = "score") {
  const sortedScores = [...scores].sort((a, b) => Number(b[metricKey]) - Number(a[metricKey]));
  return sortedScores.filter((score) => String(score.player_name).trim()).slice(0, 10);
}

function renderLeaderboard(list, scores, metric = leaderboardMetrics[leaderboardMetricIndex]) {
  list.replaceChildren();
  scores.slice(0, 10).forEach((score, index) => {
    const row = document.createElement("li");
    const rank = document.createElement("small");
    const name = document.createElement("span");
    const altitude = document.createElement("strong");
    rank.textContent = String(index + 1);
    name.textContent = String(score.player_name);
    altitude.textContent = `${Math.floor(score[metric.key]).toLocaleString()}${metric.suffix}`;
    row.append(rank, name, altitude);
    list.append(row);
  });
}

function loadLocalLeaderboard() {
  try {
    const scores = JSON.parse(window.localStorage?.getItem("ascend-leaderboard") ?? "[]");
    return Array.isArray(scores) ? scores.filter((entry) => entry && typeof entry.player_name === "string") : [];
  } catch {
    return [];
  }
}

function saveLocalLeaderboard(scores) {
  try {
    window.localStorage?.setItem("ascend-leaderboard", JSON.stringify(scores));
  } catch {
    // Cloud synchronization can still succeed when local storage is unavailable.
  }
}

function loadLastRunResult() {
  try {
    const result = JSON.parse(window.localStorage?.getItem("ascend-last-run-result") ?? "null");
    return result && typeof result.player_name === "string" ? result : null;
  } catch {
    return null;
  }
}

async function renderPreviousRun(element, metric, localScores, config) {
  const run = loadLastRunResult();
  if (!run) {
    element.classList.add("empty");
    element.textContent = "No completed run";
    return;
  }
  let rank = 1 + localScores.filter((entry) => Number(entry[metric.key]) > Number(run[metric.key])).length;
  if (config) {
    try {
      const cloudScores = await fetchCloudScores(config, metric.key, 1000);
      rank = 1 + cloudScores.filter((entry) => Number(entry[metric.key]) > Number(run[metric.key])).length;
    } catch {
      // The local rank remains useful while cloud ranking is unavailable.
    }
  }
  element.classList.remove("empty");
  element.replaceChildren();
  const rankNode = document.createElement("strong");
  const nameNode = document.createElement("span");
  const valueNode = document.createElement("strong");
  rankNode.textContent = `#${rank}`;
  nameNode.textContent = run.player_name;
  valueNode.textContent = `${Math.floor(run[metric.key]).toLocaleString()}${metric.suffix}`;
  element.append(rankNode, nameNode, valueNode);
}

async function loadLeaderboard(list, status, personal) {
  const metric = leaderboardMetrics[leaderboardMetricIndex];
  const localScores = loadLocalLeaderboard();
  const config = getLeaderboardConfig();
  if (!config) {
    const scores = uniqueTopScores(localScores, metric.key);
    status.textContent = scores.length ? "Top 10" : "No scores yet";
    renderLeaderboard(list, scores, metric);
    await renderPreviousRun(personal, metric, localScores, null);
    return scores;
  }
  status.textContent = "Loading";
  try {
    const cloudScores = await fetchCloudScores(config, metric.key);
    const scores = uniqueTopScores([...cloudScores, ...localScores], metric.key);
    renderLeaderboard(list, scores, metric);
    await renderPreviousRun(personal, metric, localScores, config);
    status.textContent = "Top 10";
    return scores;
  } catch {
    const scores = uniqueTopScores(localScores, metric.key);
    status.textContent = scores.length ? "Top 10 · Offline" : "No scores yet";
    renderLeaderboard(list, scores, metric);
    await renderPreviousRun(personal, metric, localScores, null);
    return scores;
  }
}

async function submitLeaderboardScore(score, height, totalLights, playerName = getPilotName()) {
  const config = getLeaderboardConfig();
  const name = normalizePilotName(playerName);
  const record = { player_name: name, score: Math.floor(score), height: Math.floor(height), total_lights: Math.floor(totalLights) };
  if (!name || record.score < 0) return false;
  const localScores = loadLocalLeaderboard();
  localScores.push(record);
  saveLocalLeaderboard(localScores);
  try {
    window.localStorage?.setItem("ascend-last-run-result", JSON.stringify(record));
  } catch {
    // The run is still submitted even when local storage is unavailable.
  }
  if (!config || !config.writesEnabled) return true;
  try {
    const response = await fetch(`${config.url}/leaderboard?key=${encodeURIComponent(config.key)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(encodeFirestoreScore(record))
    });
    if (!response.ok) throw new Error("Leaderboard submission failed");
    return true;
  } catch {
    return false;
  }
}

async function runQualifiesForLeaderboard(record) {
  const localScores = loadLocalLeaderboard();
  const config = getLeaderboardConfig();
  const cloudScores = [];
  if (config) {
    try {
      const results = await Promise.all(leaderboardMetrics.map((metric) => fetchCloudScores(config, metric.key, 10)));
      results.forEach((scores) => cloudScores.push(...scores));
    } catch {
      // Local scores still provide offline qualification.
    }
  }
  const scores = [...cloudScores, ...localScores];
  return leaderboardMetrics.some((metric) => {
    const top = uniqueTopScores(scores, metric.key);
    return top.length < 10 || Number(record[metric.key]) > Number(top[9][metric.key]);
  });
}

async function offerLeaderboardEntry(score, height, totalLights) {
  const record = { score: Math.floor(score), height: Math.floor(height), total_lights: Math.floor(totalLights) };
  if (record.score < 0) return;
  pendingLeaderboardRecord = record;
  const qualifies = await runQualifiesForLeaderboard(record);
  if (!pendingLeaderboardRecord) return;
  if (qualifies && state.gameOver) {
    showPlayerNamePrompt();
    return;
  }
  pendingLeaderboardRecord = null;
  submitLeaderboardScore(record.score, record.height, record.total_lights, getNextAnonymousName());
}

function showPlayerNamePrompt(nextAction = null) {
  pendingPlayerNameAction = nextAction;
  playerNameInput.value = "";
  playerNameStatus.textContent = "";
  playerNamePrompt.classList.remove("hidden");
}

function confirmPlayerName() {
  const name = normalizePilotName(playerNameInput.value);
  if (!name) {
    playerNameStatus.textContent = "Enter a name";
    return false;
  }
  setPilotName(name);
  playerNamePrompt.classList.add("hidden");
  if (pendingLeaderboardRecord) {
    const record = pendingLeaderboardRecord;
    pendingLeaderboardRecord = null;
    submitLeaderboardScore(record.score, record.height, record.total_lights, name);
  }
  const nextAction = pendingPlayerNameAction;
  pendingPlayerNameAction = null;
  nextAction?.();
  return true;
}

function skipPlayerName() {
  if (!pendingLeaderboardRecord) {
    playerNamePrompt.classList.add("hidden");
    return false;
  }
  const record = pendingLeaderboardRecord;
  pendingLeaderboardRecord = null;
  playerNamePrompt.classList.add("hidden");
  playerNameInput.value = "";
  playerNameStatus.textContent = "";
  submitLeaderboardScore(
    record.score,
    record.height,
    record.total_lights,
    getNextAnonymousName()
  );
  const nextAction = pendingPlayerNameAction;
  pendingPlayerNameAction = null;
  nextAction?.();
  return true;
}

function finalizePendingLeaderboardEntry() {
  if (pendingLeaderboardRecord) {
    skipPlayerName();
  } else {
    playerNamePrompt.classList.add("hidden");
    playerNameInput.value = "";
    playerNameStatus.textContent = "";
  }
}

async function showPauseLeaderboard() {
  pauseHeading.textContent = "Leaderboard";
  sideMenu.classList.add("leaderboard-open");
  showPausePanel(pauseLeaderboardPanel);
  pauseLeaderboardHeading.textContent = leaderboardMetrics[leaderboardMetricIndex].label;
  await loadLeaderboard(pauseLeaderboardList, pauseLeaderboardStatus, pauseLeaderboardPersonal);
}

async function showTitleLeaderboard() {
  showTitlePanel(titleLeaderboardPanel);
  titleLeaderboardHeading.textContent = leaderboardMetrics[leaderboardMetricIndex].label;
  await loadLeaderboard(titleLeaderboardList, titleLeaderboardStatus, titleLeaderboardPersonal);
}

function shiftLeaderboard(direction, source) {
  leaderboardMetricIndex = (leaderboardMetricIndex + direction + leaderboardMetrics.length) % leaderboardMetrics.length;
  if (source === "pause") showPauseLeaderboard();
  else showTitleLeaderboard();
}

function returnToMainMenuFromPause() {
  saveRun();
  closeMenu(false);
  returnToTitleScreen();
}

function showSaveCode() {
  saveRun();
  saveCodeOutput.value = createSaveCode();
  showPausePanel(pauseSavePanel);
}

function releaseActivePointer() {
  if (state.activePointerId !== null && canvas.hasPointerCapture(state.activePointerId)) {
    canvas.releasePointerCapture(state.activePointerId);
  }
  state.activePointerId = null;
}

function dismissTitleScreen() {
  if (!state.titleScreenVisible) {
    return;
  }

  state.titleScreenVisible = false;
  hasVisitedGameplayThisSession = true;
  titleScreen.classList.add("hidden");
  titleScreen.setAttribute("aria-hidden", "true");
}

function dismissSplashScreen() {
  if (!state.splashVisible) {
    return;
  }

  state.splashVisible = false;
  splashScreen.classList.add("hidden");
  splashScreen.setAttribute("aria-hidden", "true");
  titleScreen.classList.remove("splash-active");
  dismissTitleScreen();
}

function showSplashScreen() {
  state.shopScreenVisible = false;
  state.splashVisible = true;
  state.titleScreenVisible = true;
  showTitleMenu();
  titleScreen.classList.remove("hidden");
  titleScreen.classList.add("splash-active");
  titleScreen.setAttribute("aria-hidden", "false");
  splashScreen.classList.remove("hidden");
  splashScreen.setAttribute("aria-hidden", "false");
  drawTitleScreen();
}

function openLandedShop() {
  if (state.launched || state.gameOver || state.titleScreenVisible) {
    return;
  }

  state.shopScreenVisible = true;
  state.shopOpenedFromPause = false;
  state.paused = true;
  setBoostHeld(false);
  releaseActivePointer();
  stopAnimationLoop();
  pauseHeading.textContent = "Shop";
  updateShopLightCount();
  updateShopCatalog();
  shopStatus.textContent = "";
  showPauseMenuActions();
  sideMenu.classList.add("open", "shop-open");
  menuBackdrop.classList.add("open");
  menuToggleButton.classList.add("menu-open");
  sideMenu.setAttribute("aria-hidden", "false");
  sideMenu.setAttribute("aria-label", "Shop");
  menuToggleButton.setAttribute("aria-expanded", "true");
}

function openShopFromPause() {
  if (!sideMenu.classList.contains("open") || state.gameOver || state.titleScreenVisible) return;
  state.shopScreenVisible = true;
  state.shopOpenedFromPause = true;
  pauseHeading.textContent = "Shop";
  updateShopLightCount();
  updateShopCatalog();
  shopStatus.textContent = "";
  sideMenu.classList.add("shop-open");
  sideMenu.setAttribute("aria-label", "Shop");
}

function openShopFromLightCounter() {
  if (state.gameOver || state.titleScreenVisible) return;
  if (!state.launched) {
    openLandedShop();
    return;
  }
  if (!sideMenu.classList.contains("open")) {
    togglePauseMenu();
  }
  openShopFromPause();
}

function closeLandedShop() {
  if (!state.shopScreenVisible) {
    return;
  }

  if (state.shopOpenedFromPause) {
    state.shopScreenVisible = false;
    state.shopOpenedFromPause = false;
    pauseHeading.textContent = "Paused";
    sideMenu.classList.remove("shop-open");
    sideMenu.setAttribute("aria-label", "Pause menu");
    showPauseMenuActions();
    return;
  }
  closeMenu(false);
}

function updateShopLightCount() {
  shopLightCount.textContent = String(state.coinsCollected);
  gameLightCount.textContent = String(state.coinsCollected);
}

function getShopItems() {
  return [
    { id: "aircraft-classic", kind: "aircraft", value: "classic", price: 0, button: shopAircraftClassic, label: shopAircraftClassicLabel },
    { id: "aircraft-dart", kind: "aircraft", value: "dart", price: 30, button: shopAircraftDart, label: shopAircraftDartLabel },
    { id: "aircraft-glider", kind: "aircraft", value: "glider", price: 45, button: shopAircraftGlider, label: shopAircraftGliderLabel },
    { id: "aircraft-arrow", kind: "aircraft", value: "arrow", price: 60, button: shopAircraftArrow, label: shopAircraftArrowLabel },
    { id: "aircraft-comet", kind: "aircraft", value: "comet", price: 75, button: shopAircraftComet, label: shopAircraftCometLabel },
    { id: "aircraft-wisp", kind: "aircraft", value: "wisp", price: 90, button: shopAircraftWisp, label: shopAircraftWispLabel },
    { id: "aircraft-halo", kind: "aircraft", value: "halo", price: null, button: shopAircraftHalo, label: shopAircraftHaloLabel },
    { id: "aircraft-diamond", kind: "aircraft", value: "diamond", price: null, button: shopAircraftDiamond, label: shopAircraftDiamondLabel, alwaysVisible: true },
    { id: "aircraft-prism", kind: "aircraft", value: "prism", price: null, button: shopAircraftPrism, label: shopAircraftPrismLabel },
    { id: "trail-white", kind: "trail", value: "white", price: 0, button: shopTrailWhite, label: shopTrailWhiteLabel },
    { id: "trail-blue", kind: "trail", value: "blue", price: 20, button: shopTrailBlue, label: shopTrailBlueLabel },
    { id: "trail-pink", kind: "trail", value: "pink", price: 20, button: shopTrailPink, label: shopTrailPinkLabel },
    { id: "trail-purple", kind: "trail", value: "purple", price: 20, button: shopTrailPurple, label: shopTrailPurpleLabel },
    { id: "trail-aurora", kind: "trail", value: "aurora", price: null, button: shopTrailAurora, label: shopTrailAuroraLabel },
    { id: "trail-stardust", kind: "trail", value: "stardust", price: null, button: shopTrailStardust, label: shopTrailStardustLabel },
    { id: "trail-stars", kind: "trail", value: "stars", price: null, button: shopTrailStars, label: shopTrailStarsLabel },
    { id: "trail-hearts", kind: "trail", value: "hearts", price: null, button: shopTrailHearts, label: shopTrailHeartsLabel },
    { id: "trail-diamonds", kind: "trail", value: "diamonds", price: null, button: shopTrailDiamonds, label: shopTrailDiamondsLabel },
    { id: "trail-rings", kind: "trail", value: "rings", price: null, button: shopTrailRings, label: shopTrailRingsLabel },
    { id: "trail-sparks", kind: "trail", value: "sparks", price: null, button: shopTrailSparks, label: shopTrailSparksLabel },
    { id: "trail-petals", kind: "trail", value: "petals", price: null, button: shopTrailPetals, label: shopTrailPetalsLabel }
  ];
}

function updateShopCatalog() {
  for (const item of getShopItems()) {
    const owned = state.shopProfile.owned.includes(item.id);
    const selected = state.shopProfile[item.kind] === item.value;
    item.button.classList.remove("owned", "selected");
    item.button.classList.remove("hidden");
    if (item.price === null && !owned && !item.alwaysVisible) {
      item.button.classList.add("hidden");
    }
    if (owned) item.button.classList.add("owned");
    if (selected) item.button.classList.add("selected");
    item.label.textContent = selected
      ? "Equipped"
      : owned ? "Owned" : item.price === null ? "???" : `${item.price}${item.kind === "aircraft" ? " lights" : ""}`;
  }
  shopAircraftDiamondName.textContent = state.shopProfile.owned.includes("aircraft-diamond") ? "Diamond" : "???";
}

function buyOrEquipShopItem(itemId) {
  const item = getShopItems().find((candidate) => candidate.id === itemId);
  if (!item) return;

  if (!state.shopProfile.owned.includes(item.id)) {
    if (item.price === null) {
      shopStatus.textContent = "Locked reward";
      return;
    }
    if (state.coinsCollected < item.price) {
      shopStatus.textContent = `Need ${item.price - state.coinsCollected} more lights`;
      return;
    }
    state.coinsCollected -= item.price;
    state.shopProfile.owned.push(item.id);
    saveLightBalance(state.coinsCollected);
  }

  state.shopProfile[item.kind] = item.value;
  if (item.kind === "aircraft") {
    applyAircraftStats();
  }
  saveShopProfile(state.shopProfile);
  updateShopLightCount();
  updateShopCatalog();
  shopStatus.textContent = "Equipped";
  render();
}

function getAdvancementValue(advancement) {
  if (advancement.metric === "lights") return state.advancementProgress.lifetimeLights;
  if (advancement.metric === "hits") return state.advancementProgress.survivedHits;
  return Math.max(state.bestAltitude, getAltitude());
}

function checkAdvancements(showPopup = true) {
  let changed = false;
  for (const advancement of advancementDefinitions) {
    if (state.advancementProgress.completed.includes(advancement.id)) {
      if (advancement.rewardId && !state.shopProfile.owned.includes(advancement.rewardId)) {
        state.shopProfile.owned.push(advancement.rewardId);
        changed = true;
      }
      continue;
    }
    if (getAdvancementValue(advancement) < advancement.target) continue;

    state.advancementProgress.completed.push(advancement.id);
    changed = true;
    if (advancement.rewardId && !state.shopProfile.owned.includes(advancement.rewardId)) {
      state.shopProfile.owned.push(advancement.rewardId);
    }
    if (advancement.rewardLights) {
      state.coinsCollected += advancement.rewardLights;
      saveLightBalance(state.coinsCollected);
      updateShopLightCount();
    }
    if (showPopup) showAdvancementPopup(advancement);
  }
  if (changed) {
    saveAdvancementProgress(state.advancementProgress);
    saveShopProfile(state.shopProfile);
    updateShopCatalog();
    updateAdvancementsUI();
  }
}

function updateAdvancementsUI() {
  for (const advancement of advancementDefinitions) {
    const article = document.getElementById(advancement.elementPrefix);
    const fill = document.getElementById(`${advancement.elementPrefix}Fill`);
    const progressLabel = document.getElementById(`${advancement.elementPrefix}Progress`);
    const rewardLabel = document.getElementById(`${advancement.elementPrefix}Reward`);
    if (!article || !fill || !progressLabel || !rewardLabel) continue;
    const value = Math.min(advancement.target, getAdvancementValue(advancement));
    const completed = state.advancementProgress.completed.includes(advancement.id);
    if (advancement.revealAfterCompletion) article.classList.toggle("hidden", !completed);
    fill.style.setProperty("--progress", `${value / advancement.target * 100}%`);
    progressLabel.textContent = `${value} / ${advancement.target}`;
    rewardLabel.textContent = completed || !advancement.hideReward ? advancement.rewardName : "???";
    article.classList.remove("completed");
    if (completed) article.classList.add("completed");
  }
}

function showShopDescription(item) {
  const description = item.button.getAttribute?.("data-description") ?? item.button.attributes?.["data-description"];
  if (!description) return;
  shopDescriptionPopup.textContent = description;
  shopDescriptionPopup.classList.remove("hidden");
}

function hideShopDescription() {
  shopDescriptionPopup.classList.add("hidden");
}

function showAdvancementPopup(advancement) {
  advancementPopupTitle.textContent = advancement.title;
  advancementPopupReward.textContent = `Unlocked: ${advancement.rewardName}`;
  advancementPopup.classList.remove("hidden");
  if (typeof window.setTimeout === "function") {
    window.setTimeout(() => advancementPopup.classList.add("hidden"), 4200);
  }
}

function openTitleSettings() {
  showTitlePanel(titleSettingsPanel);
}

function closeTitleSettings() {
  showTitleMenu();
}

function showTitlePanel(panel) {
  titlePlayPanel.classList.add("hidden");
  titleLoadPanel.classList.add("hidden");
  titleSettingsPanel.classList.add("hidden");
  titleTutorialPanel.classList.add("hidden");
  titleCreditsPanel.classList.add("hidden");
  titleLeaderboardPanel.classList.add("hidden");
  titleMenu.classList.add("hidden");
  titleScreen.classList.add("panel-open");
  panel.classList.remove("hidden");
}

function showTitleMenu() {
  titlePlayPanel.classList.add("hidden");
  titleLoadPanel.classList.add("hidden");
  titleSettingsPanel.classList.add("hidden");
  titleTutorialPanel.classList.add("hidden");
  titleCreditsPanel.classList.add("hidden");
  titleLeaderboardPanel.classList.add("hidden");
  titleScreen.classList.remove("panel-open");
  titleMenu.classList.remove("hidden");
  updateContinueButton();
}

function updateContinueButton() {
  titleContinueButton.classList.toggle("hidden", !hasVisitedGameplayThisSession);
}

function startNewGame() {
  clearAllProgress();
  resetRun();
  showTitleMenu();
  dismissTitleScreen();
}

function openLoadGamePanel() {
  loadCodeInput.value = "";
  loadCodeStatus.textContent = "";
  showTitlePanel(titleLoadPanel);
}

function continueFromTitle() {
  if (!loadSavedRun()) {
    resetRun();
    showTitleMenu();
    dismissTitleScreen();
  }
}

function loadSavedRun() {
  const savedRun = readSavedRun();
  if (!savedRun) {
    return false;
  }

  resetRun();
  const savedWidth = savedRun.version >= 2 ? savedRun.worldWidth : state.width;
  const savedHeight = savedRun.version >= 2 ? savedRun.worldHeight : state.height;
  const scaleX = state.width / savedWidth;
  const scaleY = state.height / savedHeight;
  state.cameraY = Math.max(0, savedRun.cameraY);
  state.aircraft.x = clamp(savedRun.aircraftX * state.width, state.aircraft.radius, state.width - state.aircraft.radius);
  state.aircraft.y = clamp(savedRun.aircraftY * state.height, state.aircraft.radius * 1.35, state.height - state.aircraft.radius);
  state.aircraft.previousX = state.aircraft.x;
  state.aircraft.previousY = state.aircraft.y;
  state.lives = clamp(Math.floor(savedRun.lives), 1, 3);
  state.boostCharge = clamp(savedRun.boostCharge, 0, 1);
  state.runDistance = Math.max(0, savedRun.runDistance ?? 0);
  state.runLights = Math.max(0, Math.floor(savedRun.runLights ?? 0));
  state.coinsCollected = Math.max(loadLightBalance(), Math.max(0, Math.floor(savedRun.coinsCollected)));
  saveLightBalance(state.coinsCollected);
  updateShopLightCount();
  const directionLength = Math.hypot(savedRun.lastFlightX, savedRun.lastFlightY) || 1;
  state.lastFlightX = savedRun.lastFlightX / directionLength;
  state.lastFlightY = savedRun.lastFlightY / directionLength;

  if (savedRun.version >= 2) {
    state.aircraft.vx = savedRun.aircraftVx * scaleX;
    state.aircraft.vy = savedRun.aircraftVy * scaleY;
    state.aircraft.tilt = savedRun.aircraftTilt;
    state.invulnerableTime = savedRun.invulnerableTime;
    state.boostExitProtection = savedRun.boostExitProtection;
    state.bounceTime = savedRun.bounceTime;
    state.impactSlowTime = savedRun.impactSlowTime;
    state.impactRecoilTime = savedRun.impactRecoilTime;
    state.nextAsteroidY = savedRun.nextAsteroidY;
    state.nextLaneChallengeY = savedRun.nextLaneChallengeY;
    state.nextCollectibleY = savedRun.nextCollectibleY;
    state.asteroids = savedRun.asteroids.map((asteroid) => ({
      ...asteroid,
      x: asteroid.x * scaleX,
      radius: asteroid.radius * scaleX,
      driftX: asteroid.driftX * scaleX,
      points: [...asteroid.points],
      touchingRocket: false
    }));
    state.collectibles = savedRun.collectibles.map((collectible) => ({
      ...collectible,
      x: collectible.x * scaleX,
      radius: collectible.radius * scaleX,
      driftX: collectible.driftX * scaleX
    }));
  } else {
    state.nextAsteroidY = state.cameraY + getWorldScreenOriginY() + 340;
    state.nextLaneChallengeY = state.cameraY + getWorldScreenOriginY() + 720;
    state.nextCollectibleY = state.cameraY + getWorldScreenOriginY() + 520;
  }
  altitudeLabel.textContent = `${getAltitude()} km`;
  updateLivesDisplay();
  updateBoostDisplay();
  dismissTitleScreen();
  if (savedRun.launched !== false) {
    launch();
  } else {
    render();
  }
  updateBoostDisplay();
  return true;
}

function saveRun() {
  if (!state.launched || state.gameOver) {
    return;
  }

  try {
    window.localStorage?.setItem("ascend-saved-run", JSON.stringify(buildSavedRun()));
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function buildSavedRun() {
  return {
    version: 2,
    launched: state.launched,
    worldWidth: state.width,
    worldHeight: state.height,
    cameraY: state.cameraY,
    aircraftX: state.aircraft.x / state.width,
    aircraftY: state.aircraft.y / state.height,
    aircraftVx: state.aircraft.vx,
    aircraftVy: state.aircraft.vy,
    aircraftTilt: state.aircraft.tilt,
    lives: state.lives,
    invulnerableTime: state.invulnerableTime,
    boostCharge: state.boostCharge,
    boostExitProtection: state.boostExitProtection,
    bounceTime: state.bounceTime,
    impactSlowTime: state.impactSlowTime,
    impactRecoilTime: state.impactRecoilTime,
    coinsCollected: state.coinsCollected,
    runDistance: state.runDistance,
    runLights: state.runLights,
    lastFlightX: state.lastFlightX,
    lastFlightY: state.lastFlightY,
    nextAsteroidY: state.nextAsteroidY,
    nextLaneChallengeY: state.nextLaneChallengeY,
    nextCollectibleY: state.nextCollectibleY,
    asteroids: state.asteroids.map((asteroid) => ({
      x: asteroid.x,
      worldY: asteroid.worldY,
      radius: asteroid.radius,
      points: [...asteroid.points],
      rotation: asteroid.rotation,
      spin: asteroid.spin,
      driftX: asteroid.driftX,
      driftY: asteroid.driftY,
      style: asteroid.style,
      laneChallenge: Boolean(asteroid.laneChallenge)
    })),
    collectibles: state.collectibles.map((collectible) => ({
      x: collectible.x,
      worldY: collectible.worldY,
      radius: collectible.radius,
      color: collectible.color,
      driftX: collectible.driftX,
      driftY: collectible.driftY,
      phase: collectible.phase
    }))
  };
}

function readSavedRun() {
  try {
    const savedRun = JSON.parse(window.localStorage?.getItem("ascend-saved-run") ?? "null");
    return isValidSavedRun(savedRun) ? savedRun : null;
  } catch {
    return null;
  }
}

function isValidSavedRun(savedRun) {
  const basicRunIsValid = (savedRun?.version === 1 || savedRun?.version === 2) &&
    isNumberInRange(savedRun.cameraY, 0, 1_000_000_000) &&
    isNumberInRange(savedRun.aircraftX, 0, 1) &&
    isNumberInRange(savedRun.aircraftY, 0, 1) &&
    Number.isInteger(savedRun.lives) && savedRun.lives >= 1 && savedRun.lives <= 3 &&
    isNumberInRange(savedRun.boostCharge, 0, 1) &&
    (savedRun.runDistance === undefined || isNumberInRange(savedRun.runDistance, 0, 1_000_000_000)) &&
    (savedRun.runLights === undefined || (Number.isInteger(savedRun.runLights) && savedRun.runLights >= 0 && savedRun.runLights <= 1_000_000_000)) &&
    Number.isInteger(savedRun.coinsCollected) && savedRun.coinsCollected >= 0 && savedRun.coinsCollected <= 1_000_000_000 &&
    isNumberInRange(savedRun.lastFlightX, -1.01, 1.01) &&
    isNumberInRange(savedRun.lastFlightY, -1.01, 1.01) &&
    isNumberInRange(Math.hypot(savedRun.lastFlightX, savedRun.lastFlightY), 0.5, 1.5);

  if (!basicRunIsValid || savedRun.version === 1) {
    return Boolean(basicRunIsValid);
  }

  return isNumberInRange(savedRun.worldWidth, 200, 10_000) &&
    isNumberInRange(savedRun.worldHeight, 300, 10_000) &&
    isNumberInRange(savedRun.aircraftVx, -5_000, 5_000) &&
    isNumberInRange(savedRun.aircraftVy, -5_000, 5_000) &&
    isNumberInRange(savedRun.aircraftTilt, -Math.PI * 4, Math.PI * 4) &&
    isNumberInRange(savedRun.invulnerableTime, 0, 10) &&
    typeof savedRun.boostExitProtection === "boolean" &&
    isNumberInRange(savedRun.bounceTime, 0, 10) &&
    isNumberInRange(savedRun.impactSlowTime, 0, 10) &&
    isNumberInRange(savedRun.impactRecoilTime, 0, 10) &&
    isNumberInRange(savedRun.nextAsteroidY, 0, 1_000_020_000) &&
    isNumberInRange(savedRun.nextLaneChallengeY, 0, 1_000_020_000) &&
    isNumberInRange(savedRun.nextCollectibleY, 0, 1_000_020_000) &&
    Array.isArray(savedRun.asteroids) && savedRun.asteroids.length <= 250 &&
    savedRun.asteroids.every((asteroid) => isValidSavedAsteroid(asteroid, savedRun.worldWidth)) &&
    Array.isArray(savedRun.collectibles) && savedRun.collectibles.length <= 250 &&
    savedRun.collectibles.every((collectible) => isValidSavedCollectible(collectible, savedRun.worldWidth));
}

function isNumberInRange(value, minimum, maximum) {
  return Number.isFinite(value) && value >= minimum && value <= maximum;
}

function isValidSavedAsteroid(asteroid, worldWidth) {
  return isNumberInRange(asteroid?.x, -worldWidth, worldWidth * 2) &&
    isNumberInRange(asteroid.worldY, -20_000, 1_000_020_000) &&
    isNumberInRange(asteroid.radius, 1, worldWidth) &&
    Array.isArray(asteroid.points) && asteroid.points.length >= 3 && asteroid.points.length <= 30 &&
    asteroid.points.every((point) => isNumberInRange(point, 0.2, 2)) &&
    isNumberInRange(asteroid.rotation, -1_000_000, 1_000_000) &&
    isNumberInRange(asteroid.spin, -10, 10) &&
    isNumberInRange(asteroid.driftX, -2_000, 2_000) &&
    isNumberInRange(asteroid.driftY, -2_000, 2_000) &&
    (asteroid.style === "solid" || asteroid.style === "outline");
}

function isValidSavedCollectible(collectible, worldWidth) {
  return isNumberInRange(collectible?.x, -worldWidth, worldWidth * 2) &&
    isNumberInRange(collectible.worldY, -20_000, 1_000_020_000) &&
    isNumberInRange(collectible.radius, 1, worldWidth * 0.2) &&
    collectibleColors.includes(collectible.color) &&
    isNumberInRange(collectible.driftX, -2_000, 2_000) &&
    isNumberInRange(collectible.driftY, -2_000, 2_000) &&
    isNumberInRange(collectible.phase, -1_000_000, 1_000_000);
}

function clearSavedRun() {
  try {
    window.localStorage?.removeItem("ascend-saved-run");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function clearAllProgress() {
  clearSavedRun();
  state.coinsCollected = 0;
  state.shopProfile = { ...defaultShopProfile, owned: [...defaultShopProfile.owned] };
  state.advancementProgress = { lifetimeLights: 0, survivedHits: 0, completed: [] };
  updateShopLightCount();
  updateShopCatalog();
  state.bestAltitude = 0;
  state.bestScore = 0;
  state.showLaunchPrompt = true;
  startPanel.classList.remove("prompt-disabled");
  bestAltitudeLabel.textContent = "0";
  try {
    window.localStorage?.removeItem("ascend-best-altitude");
    window.localStorage?.removeItem("ascend-launch-prompt-seen");
    window.localStorage?.removeItem("ascend-light-balance");
    window.localStorage?.removeItem("ascend-shop-profile");
    window.localStorage?.removeItem("ascend-advancements");
    window.localStorage?.removeItem("ascend-best-score");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function createSaveCode() {
  const payload = {
    version: 2,
    nonce: randomCodeCharacters(14),
    profile: {
      bestAltitude: state.bestAltitude,
      bestScore: state.bestScore,
      lightBalance: state.coinsCollected,
      pilotName: getPilotName(),
      screenShakeEnabled: state.screenShakeEnabled,
      musicEnabled: state.musicEnabled,
      sfxEnabled: state.sfxEnabled,
      shopProfile: {
        owned: [...state.shopProfile.owned],
        aircraft: state.shopProfile.aircraft,
        trail: state.shopProfile.trail
      },
      advancementProgress: {
        lifetimeLights: state.advancementProgress.lifetimeLights,
        survivedHits: state.advancementProgress.survivedHits,
        completed: [...state.advancementProgress.completed]
      },
      launchPromptSeen: !state.showLaunchPrompt
    },
    run: buildSavedRun()
  };
  const payloadText = JSON.stringify(payload);
  const savePackage = {
    payload,
    checksum: checksumText(payloadText)
  };
  const encoded = btoa(JSON.stringify(savePackage))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
  return `ASC2-${encoded}`;
}

function checksumText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
  }
  return (hash >>> 0).toString(36);
}

function randomCodeCharacters(length) {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  let result = "";
  for (let index = 0; index < length; index += 1) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

function decodeSaveCode(code) {
  try {
    const trimmedCode = code.trim();
    if (!trimmedCode.startsWith("ASC2-")) {
      return null;
    }
    const encoded = trimmedCode.slice(5).replaceAll("-", "+").replaceAll("_", "/");
    const padded = encoded.padEnd(Math.ceil(encoded.length / 4) * 4, "=");
    const savePackage = JSON.parse(atob(padded));
    const payloadText = JSON.stringify(savePackage?.payload);
    const payload = savePackage?.payload;
    if (
      savePackage?.checksum !== checksumText(payloadText) ||
      payload?.version !== 2 ||
      typeof payload.nonce !== "string" || payload.nonce.length !== 14 ||
      !isNumberInRange(payload.profile?.bestAltitude, 0, 1_000_000_000) ||
      (payload.profile?.lightBalance !== undefined && (!Number.isInteger(payload.profile.lightBalance) || payload.profile.lightBalance < 0 || payload.profile.lightBalance > 1_000_000_000)) ||
      (payload.profile?.bestScore !== undefined && (!Number.isInteger(payload.profile.bestScore) || payload.profile.bestScore < 0 || payload.profile.bestScore > 10_000_000_000)) ||
      (payload.profile?.pilotName !== undefined && (typeof payload.profile.pilotName !== "string" || payload.profile.pilotName.length < 1 || payload.profile.pilotName.length > 18)) ||
      typeof payload.profile?.screenShakeEnabled !== "boolean" ||
      (payload.profile?.musicEnabled !== undefined && typeof payload.profile.musicEnabled !== "boolean") ||
      (payload.profile?.sfxEnabled !== undefined && typeof payload.profile.sfxEnabled !== "boolean") ||
      (payload.profile?.shopProfile !== undefined && !isValidShopProfile(payload.profile.shopProfile)) ||
      (payload.profile?.advancementProgress !== undefined && !isValidAdvancementProgress(payload.profile.advancementProgress)) ||
      (payload.profile?.launchPromptSeen !== undefined && typeof payload.profile.launchPromptSeen !== "boolean") ||
      !isValidSavedRun(payload.run)
    ) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

function loadGameFromCode() {
  const savePackage = decodeSaveCode(loadCodeInput.value);
  if (!savePackage) {
    loadCodeStatus.textContent = "Invalid save code";
    return false;
  }

  state.bestAltitude = Math.max(0, Math.floor(savePackage.profile.bestAltitude));
  state.bestScore = Math.max(0, Math.floor(savePackage.profile.bestScore ?? 0));
  state.coinsCollected = Math.max(0, Math.floor(savePackage.profile.lightBalance ?? savePackage.run.coinsCollected));
  saveLightBalance(state.coinsCollected);
  updateShopLightCount();
  if (savePackage.profile.pilotName) setPilotName(savePackage.profile.pilotName);
  state.screenShakeEnabled = savePackage.profile.screenShakeEnabled;
  state.musicEnabled = savePackage.profile.musicEnabled ?? true;
  state.sfxEnabled = savePackage.profile.sfxEnabled ?? true;
  if (savePackage.profile.shopProfile) {
    state.shopProfile = normalizeShopProfile(savePackage.profile.shopProfile);
    saveShopProfile(state.shopProfile);
  }
  if (savePackage.profile.advancementProgress) {
    state.advancementProgress = {
      lifetimeLights: savePackage.profile.advancementProgress.lifetimeLights,
      survivedHits: savePackage.profile.advancementProgress.survivedHits,
      completed: [...savePackage.profile.advancementProgress.completed]
    };
    saveAdvancementProgress(state.advancementProgress);
  }
  state.showLaunchPrompt = !(savePackage.profile.launchPromptSeen ?? true);
  screenShakeSetting.checked = state.screenShakeEnabled;
  musicSetting.checked = state.musicEnabled;
  sfxSetting.checked = state.sfxEnabled;
  bestAltitudeLabel.textContent = state.bestScore.toLocaleString();
  saveBestAltitude(state.bestAltitude);
  saveScreenShakeSetting(state.screenShakeEnabled);
  saveMusicSetting(state.musicEnabled);
  saveSfxSetting(state.sfxEnabled);
  applySoundSettings();
  if (state.showLaunchPrompt) {
    clearLaunchPromptSeen();
  } else {
    saveLaunchPromptSeen();
  }
  try {
    window.localStorage?.setItem("ascend-saved-run", JSON.stringify(savePackage.run));
  } catch {
    loadCodeStatus.textContent = "Could not store save data";
    return false;
  }

  loadCodeStatus.textContent = "Save loaded";
  return loadSavedRun();
}

function quitFromTitle() {
  showSplashScreen();
}

function returnToTitleScreen() {
  resetRun();
  showTitleMenu();
  state.shopScreenVisible = false;
  state.splashVisible = false;
  state.titleScreenVisible = true;
  titleScreen.classList.remove("hidden");
  titleScreen.classList.remove("splash-active");
  titleScreen.setAttribute("aria-hidden", "false");
  splashScreen.classList.add("hidden");
  splashScreen.setAttribute("aria-hidden", "true");
  drawTitleScreen();
}

function fadeTitleShade() {
  startPanel.classList.add("soft-hidden");
}

function updateLaunchButton() {
  state.launchButton.size = clamp(state.width * 0.045, 23, 30);
  state.launchButton.x = state.width / 2;
  state.launchButton.homeY = state.aircraft.y - state.aircraft.radius * 3.7;
  state.launchButton.y = state.launchButton.homeY;
  const promptBottom = state.height - (state.launchButton.homeY - state.launchButton.size / 2) + 10;
  startPanel.style.setProperty("--launch-prompt-bottom", `${promptBottom}px`);
}

function isInsideLaunchButton(point) {
  const button = state.launchButton;
  const half = button.size / 2;
  return point.x >= button.x - half &&
    point.x <= button.x + half &&
    point.y >= button.y - half &&
    point.y <= button.y + half;
}

function drawBackground() {
  const altitude = getAltitude();
  const background = getBackgroundColors(altitude);
  const brightnessWave = altitude <= 100
    ? 0
    : (Math.sin(((altitude - 100) / 800) * Math.PI * 2) + 1) / 2;
  const gradient = ctx.createLinearGradient(0, 0, 0, state.height);

  gradient.addColorStop(0, background[0]);
  gradient.addColorStop(0.42, background[1]);
  gradient.addColorStop(0.78, background[2]);
  gradient.addColorStop(1, background[3]);

  ctx.save();
  ctx.translate(state.viewOffsetX * 0.25, 0);
  ctx.fillStyle = gradient;
  ctx.fillRect(-80, 0, state.width + 160, state.height);
  ctx.restore();

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (const cloud of state.haze) {
    const y = wrap(
      cloud.y + state.cameraY * cloud.layer,
      state.height + cloud.height
    ) - cloud.height;
    const cloudGradient = ctx.createRadialGradient(cloud.x, y, 0, cloud.x, y, cloud.width);
    cloudGradient.addColorStop(0, `rgba(255, 236, 247, ${cloud.alpha})`);
    cloudGradient.addColorStop(1, "rgba(255, 236, 247, 0)");
    ctx.fillStyle = cloudGradient;
    ctx.beginPath();
    ctx.ellipse(cloud.x, y, cloud.width, cloud.height, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  drawStars(brightnessWave);
}

function getBackgroundColors(altitude) {
  if (altitude <= 100) {
    return startingBackground;
  }

  const cyclePosition = (wrap(altitude - 100, 800) / 800) * altitudeBackgrounds.length;
  const paletteIndex = Math.floor(cyclePosition) % altitudeBackgrounds.length;
  const nextPaletteIndex = (paletteIndex + 1) % altitudeBackgrounds.length;
  const blend = cyclePosition - Math.floor(cyclePosition);
  const cycleColors = altitudeBackgrounds[paletteIndex].map((color, index) => {
    return mixHexColors(color, altitudeBackgrounds[nextPaletteIndex][index], blend);
  });
  const entryBlend = clamp((altitude - 100) / 80, 0, 1);

  return startingBackground.map((color, index) => {
    return mixHexColors(color, cycleColors[index], entryBlend);
  });
}

function mixHexColors(first, second, amount) {
  const [firstRed, firstGreen, firstBlue] = parseColor(first);
  const [secondRed, secondGreen, secondBlue] = parseColor(second);
  const red = Math.round(firstRed + (secondRed - firstRed) * amount);
  const green = Math.round(firstGreen + (secondGreen - firstGreen) * amount);
  const blue = Math.round(firstBlue + (secondBlue - firstBlue) * amount);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function parseColor(color) {
  if (color.startsWith("#")) {
    const value = Number.parseInt(color.slice(1), 16);
    return [value >> 16, value >> 8 & 255, value & 255];
  }

  return color.match(/\d+/g).slice(0, 3).map(Number);
}

function drawStars(phase) {
  ctx.save();
  for (const star of state.stars) {
    const y = wrap(star.y + state.cameraY * star.layer, state.height);
    ctx.globalAlpha = star.alpha * (0.65 + phase * 0.35);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(star.x, y, star.size * 1.25, star.size * 0.58, -0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawMilestones() {
  ctx.save();
  ctx.translate(state.viewOffsetX * 0.45, 0);
  ctx.font = "700 9px system-ui, sans-serif";
  ctx.textBaseline = "bottom";

  for (const mark of altitudeMarks) {
    const y = worldToScreenY(markToWorldY(mark));
    if (y < -40 || y > state.height + 40) {
      continue;
    }

    ctx.globalAlpha = mark === 0 ? 0.34 : 0.26;
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([6, 16]);
    ctx.beginPath();
    ctx.moveTo(18, y);
    ctx.lineTo(state.width - 18, y);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.globalAlpha = mark === 0 ? 0.8 : 0.64;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${mark} km`, 16, y - 5);
  }

  ctx.restore();
}

function getDifficulty() {
  return clamp(getAltitude() / 900, 0, 1);
}

function getOpeningProgress() {
  return clamp(getAltitude() / 100, 0, 1);
}

function spawnAsteroids(direction = { x: 0, y: -1 }) {
  const difficulty = getDifficulty();
  const openingProgress = getOpeningProgress();
  const lookAheadY = state.cameraY + getWorldScreenOriginY() + 460;

  while (state.nextLaneChallengeY < lookAheadY) {
    const challenge = makeLaneChallenge(
      state.nextLaneChallengeY,
      difficulty,
      direction
    );
    if (challenge) {
      state.asteroids.push(challenge);
    }
    state.nextLaneChallengeY += randomBetween(
      440 - difficulty * 100,
      580 - difficulty * 130
    );
  }

  while (state.nextAsteroidY < lookAheadY) {
    spawnAsteroidFormation(state.nextAsteroidY, difficulty, openingProgress);
    state.nextAsteroidY += getAsteroidSpacing(difficulty, openingProgress);
  }
}

function getAsteroidSpacing(difficulty, openingProgress = 1) {
  const openingSpace = 1 - openingProgress;
  return randomBetween(
    145 - difficulty * 20 + openingSpace * 55,
    220 - difficulty * 35 + openingSpace * 65
  );
}

function getAsteroidFormationSize(difficulty, openingProgress) {
  let size = 1;
  if (Math.random() < openingProgress * (0.52 + difficulty * 0.28)) {
    size += 1;
  }
  if (difficulty > 0.35 && Math.random() < (difficulty - 0.35) * 0.72) {
    size += 1;
  }
  return size;
}

function spawnAsteroidFormation(worldY, difficulty, openingProgress = 1) {
  const formationSize = getAsteroidFormationSize(difficulty, openingProgress);
  let spawned = 0;

  for (let index = 0; index < formationSize; index += 1) {
    const verticalSpread = index === 0
      ? 0
      : randomBetween(-70, 70) * (0.65 + difficulty * 0.35);
    const asteroid = makeAsteroid(
      worldY + verticalSpread,
      difficulty,
      openingProgress
    );
    if (!asteroid) continue;
    asteroid.formationIndex = index;
    state.asteroids.push(asteroid);
    spawned += 1;
  }

  return spawned;
}

function makeAsteroid(worldY, difficulty, openingProgress = 1) {
  const openingMinimum = Math.max(34, state.width * 0.085);
  const normalMinimum = Math.max(42, state.width * 0.1);
  const openingMaximum = Math.max(60, state.width * 0.155);
  const normalMaximum = Math.max(76, state.width * (0.2 + difficulty * 0.06));
  const radius = randomBetween(
    openingMinimum + (normalMinimum - openingMinimum) * openingProgress,
    openingMaximum + (normalMaximum - openingMaximum) * openingProgress
  );
  const x = findAsteroidSpawnX(worldY, radius);
  if (x === null) {
    return null;
  }

  return buildAsteroid(worldY, difficulty, radius, x);
}

function buildAsteroid(worldY, difficulty, radius, x) {
  const driftAngle = randomBetween(0, Math.PI * 2);
  const driftSpeed = randomBetween(7 + difficulty * 5, 20 + difficulty * 8);
  const points = [];
  const pointCount = Math.floor(randomBetween(9, 14));

  for (let index = 0; index < pointCount; index += 1) {
    points.push(randomBetween(0.68, 1.16));
  }

  return {
    x,
    worldY,
    radius,
    points,
    rotation: randomBetween(0, Math.PI * 2),
    spin: randomBetween(0.045, 0.16 + difficulty * 0.08) * (Math.random() < 0.5 ? -1 : 1),
    driftX: Math.cos(driftAngle) * driftSpeed,
    driftY: Math.sin(driftAngle) * driftSpeed,
    style: Math.random() < 0.52 ? "solid" : "outline"
  };
}

function makeLaneChallenge(worldY, difficulty, direction) {
  const radius = randomBetween(
    Math.max(46, state.width * 0.11),
    Math.max(68, state.width * (0.16 + difficulty * 0.025))
  );
  const x = findLaneChallengeSpawnX(worldY, radius, direction);
  if (x === null) {
    return null;
  }

  const asteroid = buildAsteroid(worldY, difficulty, radius, x);
  asteroid.laneChallenge = true;
  asteroid.driftX *= 0.15;
  asteroid.driftY *= 0.15;
  return asteroid;
}

function wrapAsteroidX(value, radius) {
  const padding = radius * 1.4;
  return -padding + wrap(value + padding, state.width + padding * 2);
}

function findLaneChallengeSpawnX(worldY, radius, direction) {
  const leadDistance = Math.max(
    0,
    worldY - state.cameraY - getWorldScreenOriginY()
  );
  const verticalSpeed = Math.max(0.35, -direction.y) * state.flightSpeed * getViewportSpeedScale();
  const approachTime = clamp(leadDistance / verticalSpeed, 0.4, 3);
  const projectedX = wrapAsteroidX(
    state.aircraft.x + direction.x * state.flightSpeed * getViewportSpeedScale() * approachTime - state.viewOffsetX * 0.3,
    radius
  );
  const offsets = [0, -1.25, 1.25, -2.35, 2.35];

  for (const offset of offsets) {
    const candidateX = wrapAsteroidX(projectedX + offset * radius, radius);
    if (getAsteroidSpawnClearance(candidateX, worldY, radius) >= radius * 0.12) {
      return candidateX;
    }
  }

  return null;
}

function getAsteroidSpawnClearance(candidateX, worldY, radius) {
  let minimumClearance = Infinity;

  for (const asteroid of state.asteroids) {
    const verticalDistance = Math.abs(worldY - asteroid.worldY);
    const nearbyDistance = (radius + asteroid.radius) * 1.35;
    if (verticalDistance > nearbyDistance) {
      continue;
    }

    const centerDistance = Math.hypot(candidateX - asteroid.x, verticalDistance);
    minimumClearance = Math.min(
      minimumClearance,
      centerDistance - radius - asteroid.radius
    );
  }

  return minimumClearance;
}

function findAsteroidSpawnX(worldY, radius) {
  let bestX = null;
  let bestClearance = -Infinity;

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const candidateX = randomBetween(radius * 0.6, state.width - radius * 0.6);
    const minimumClearance = getAsteroidSpawnClearance(candidateX, worldY, radius);

    if (minimumClearance > bestClearance) {
      bestClearance = minimumClearance;
      bestX = candidateX;
    }
  }

  const allowedOverlap = -Math.min(radius * 0.2, 18);
  return bestClearance >= allowedOverlap ? bestX : null;
}

function updateAsteroids(deltaSeconds, direction, travelSpeed) {
  spawnAsteroids(direction);

  for (const asteroid of state.asteroids) {
    asteroid.x += (asteroid.driftX - direction.x * travelSpeed) * deltaSeconds;
    asteroid.worldY += asteroid.driftY * deltaSeconds;
    asteroid.rotation += asteroid.spin * deltaSeconds;
    const wrapPadding = asteroid.radius * 1.4;
    if (asteroid.x < -wrapPadding || asteroid.x > state.width + wrapPadding) {
      asteroid.x = wrapAsteroidX(asteroid.x, asteroid.radius);
    }
  }

  state.asteroids = state.asteroids.filter((asteroid) => {
    return worldToScreenY(asteroid.worldY) < state.height + asteroid.radius * 2.8;
  });
}

function spawnCollectibles() {
  const lookAheadY = state.cameraY + getWorldScreenOriginY() + 500;

  while (state.nextCollectibleY < lookAheadY) {
    const collectible = makeCollectible(state.nextCollectibleY);
    if (collectible) {
      state.collectibles.push(collectible);
    }
    state.nextCollectibleY += randomBetween(420, 680);
  }
}

function makeCollectible(worldY) {
  const radius = clamp(state.width * 0.022, 8, 12);
  const x = findCollectibleSpawnX(worldY, radius);
  if (x === null) {
    return null;
  }

  return {
    x,
    worldY,
    radius,
    color: collectibleColors[Math.floor(Math.random() * collectibleColors.length)],
    driftX: randomBetween(-6, 6),
    driftY: randomBetween(-3, 3),
    phase: randomBetween(0, Math.PI * 2),
    attracted: false,
    attractionAge: 0,
    orbitSign: Math.random() < 0.5 ? -1 : 1
  };
}

function findCollectibleSpawnX(worldY, radius) {
  let bestX = null;
  let bestClearance = -Infinity;
  const edgePadding = radius * 3;

  for (let attempt = 0; attempt < 16; attempt += 1) {
    const candidateX = randomBetween(edgePadding, state.width - edgePadding);
    const clearance = getCollectibleSpawnClearance(candidateX, worldY, radius);

    if (clearance > bestClearance) {
      bestClearance = clearance;
      bestX = candidateX;
    }
  }

  return bestClearance >= 0 ? bestX : null;
}

function getCollectibleSpawnClearance(candidateX, worldY, radius) {
  let clearance = Infinity;

  for (const collectible of state.collectibles) {
    const distance = Math.hypot(candidateX - collectible.x, worldY - collectible.worldY);
    clearance = Math.min(clearance, distance - collectible.radius - radius);
  }

  return clearance;
}

function getAsteroidOuterRadius(asteroid) {
  const largestPoint = asteroid.points?.length ? Math.max(...asteroid.points) : 1.2;
  return asteroid.radius * Math.max(1.2, largestPoint);
}

function collectibleOverlapsAsteroid(collectible, padding = 0) {
  return getCollectibleAsteroidGap(collectible) <= padding;
}

function getCollectibleAsteroidGap(collectible) {
  let minimumGap = Infinity;

  for (const asteroid of state.asteroids) {
    const visibleLightRadius = getCollectibleVisualRadius(collectible);
    const asteroidStrokeRadius = clamp(asteroid.radius * 0.045, 1, 2);
    const broadDistance = Math.hypot(
      collectible.x - asteroid.x,
      collectible.worldY - asteroid.worldY
    );
    if (broadDistance > getAsteroidOuterRadius(asteroid) + visibleLightRadius + asteroidStrokeRadius + 8) {
      continue;
    }

    const vertices = getAsteroidVertices(asteroid, asteroid.x, asteroid.worldY);
    if (isPointInsidePolygon(collectible.x, collectible.worldY, vertices)) {
      return -visibleLightRadius;
    }
    const gap = getNearestPolygonSurface(
      collectible.x,
      collectible.worldY,
      vertices
    ).distance - visibleLightRadius - asteroidStrokeRadius;
    minimumGap = Math.min(minimumGap, gap);
  }

  return minimumGap;
}

function getCollectibleVisualRadius(collectible) {
  const pulse = 1 + Math.sin(collectible.phase) * 0.06;
  return collectible.radius * 0.72 * pulse;
}

function updateCollectibles(deltaSeconds, direction, travelSpeed) {
  spawnCollectibles();

  for (const collectible of state.collectibles) {
    if (collectible.attracted) {
      collectible.attractionAge = (collectible.attractionAge ?? 0) + deltaSeconds;
      const targetX = state.aircraft.x - state.viewOffsetX * 0.3;
      const targetWorldY = state.cameraY + getWorldScreenOriginY() - state.aircraft.y;
      const dx = targetX - collectible.x;
      const dy = targetWorldY - collectible.worldY;
      const distance = Math.max(1, Math.hypot(dx, dy));
      const pull = 1 - Math.exp(-deltaSeconds * 10.5);
      const arcSpeed = Math.min(150, distance * 1.5) * Math.exp(-collectible.attractionAge * 2.4);
      const orbitSign = collectible.orbitSign ?? 1;
      if (collectible.attractionAge >= 0.55) {
        collectible.x = targetX;
        collectible.worldY = targetWorldY;
      } else {
        collectible.x += dx * pull + (-dy / distance) * orbitSign * arcSpeed * deltaSeconds;
        collectible.worldY += dy * pull + (dx / distance) * orbitSign * arcSpeed * deltaSeconds;
      }
    } else {
      collectible.x += (collectible.driftX - direction.x * travelSpeed) * deltaSeconds;
      collectible.worldY += collectible.driftY * deltaSeconds;
    }
    collectible.phase += deltaSeconds * 2.4;
    const wrapPadding = collectible.radius * 3;
    if (!collectible.attracted && collectible.x < -wrapPadding) {
      collectible.x = state.width + wrapPadding;
    } else if (!collectible.attracted && collectible.x > state.width + wrapPadding) {
      collectible.x = -wrapPadding;
    }
  }

  state.collectibles = state.collectibles.filter((collectible) => {
    return collectible.attracted || worldToScreenY(collectible.worldY) < state.height + collectible.radius * 5;
  });

  for (const effect of state.collectionEffects) {
    effect.age += deltaSeconds;
  }
  state.collectionEffects = state.collectionEffects.filter((effect) => effect.age < effect.life);
}

function resolveCollectibleHits() {
  const ship = state.aircraft;
  const remaining = [];

  for (const collectible of state.collectibles) {
    const x = collectible.x + state.viewOffsetX * 0.3;
    const y = worldToScreenY(collectible.worldY);
    const distance = Math.hypot(ship.x - x, ship.y - y);
    const attractionRadius = ship.radius * 5.2 + collectible.radius * 2;
    const collectionRadius = ship.radius * 0.72 + collectible.radius * 0.55;
    if (distance <= attractionRadius) {
      collectible.attracted = true;
    }
    if (distance > collectionRadius && !(collectible.attracted && collectible.attractionAge >= 0.55)) {
      remaining.push(collectible);
      continue;
    }

    state.coinsCollected += 1;
    state.runLights += 1;
    state.advancementProgress.lifetimeLights += 1;
    saveLightBalance(state.coinsCollected);
    saveAdvancementProgress(state.advancementProgress);
    updateShopLightCount();
    checkAdvancements();
    playCollectSound();
    state.collectionEffects.push({
      x,
      y,
      color: collectible.color,
      age: 0,
      life: 0.42,
      radius: collectible.radius
    });
  }

  state.collectibles = remaining;
}

function drawCollectibles() {
  ctx.save();
  ctx.translate(state.viewOffsetX * 0.3, 0);
  ctx.globalCompositeOperation = "screen";

  for (const collectible of state.collectibles) {
    ctx.globalAlpha = getCollectibleOpacity(collectible);
    const y = worldToScreenY(collectible.worldY);
    if (y < -collectible.radius * 5 || y > state.height + collectible.radius * 5) {
      continue;
    }

    ctx.fillStyle = `rgba(${collectible.color}, 0.96)`;
    ctx.shadowColor = `rgba(${collectible.color}, 0.82)`;
    ctx.shadowBlur = collectible.radius * 1.7;
    ctx.beginPath();
    ctx.arc(collectible.x, y, getCollectibleVisualRadius(collectible), 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
    ctx.beginPath();
    ctx.arc(
      collectible.x - collectible.radius * 0.16,
      y - collectible.radius * 0.16,
      collectible.radius * 0.23,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  ctx.restore();
}

function getCollectibleOpacity(collectible) {
  return getCollectibleAsteroidGap(collectible) <= 0 ? 0.48 : 1;
}

function drawCollectionEffects() {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (const effect of state.collectionEffects) {
    const progress = effect.age / effect.life;
    ctx.globalAlpha = 1 - progress;
    ctx.strokeStyle = `rgba(${effect.color}, 0.9)`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(effect.x, effect.y, effect.radius * (1.2 + progress * 3), 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawAsteroids() {
  ctx.save();
  ctx.translate(state.viewOffsetX * 0.3, 0);

  for (const asteroid of state.asteroids) {
    const y = worldToScreenY(asteroid.worldY);
    if (y < -asteroid.radius * 2.2 || y > state.height + asteroid.radius * 2.2) {
      continue;
    }

    drawAsteroid(asteroid, y);
  }

  ctx.restore();
}

function drawAsteroid(asteroid, y) {
  ctx.save();
  ctx.translate(asteroid.x, y);
  ctx.rotate(asteroid.rotation);

  ctx.beginPath();
  for (let index = 0; index < asteroid.points.length; index += 1) {
    const angle = (index / asteroid.points.length) * Math.PI * 2;
    const radius = asteroid.radius * asteroid.points[index];
    const x = Math.cos(angle) * radius;
    const pointY = Math.sin(angle) * radius * 0.86;

    if (index === 0) {
      ctx.moveTo(x, pointY);
    } else {
      ctx.lineTo(x, pointY);
    }
  }
  ctx.closePath();

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = clamp(asteroid.radius * 0.09, 2, 4);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
  ctx.fillStyle = asteroid.style === "solid" ? "rgba(255, 255, 255, 0.58)" : "rgba(255, 255, 255, 0.035)";
  ctx.fill();
  ctx.stroke();

  if (asteroid.style === "solid") {
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(
      -asteroid.radius * 0.18,
      -asteroid.radius * 0.12,
      asteroid.radius * 0.62,
      asteroid.radius * 0.42,
      -0.35,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  ctx.restore();
}

function resolveAsteroidHits() {
  if (state.lives <= 0) {
    return;
  }

  if (state.boostActive) {
    state.boostExitProtection = isRocketOverlappingAnyAsteroid();
    for (const asteroid of state.asteroids) {
      asteroid.touchingRocket = false;
    }
    return;
  }

  if (state.boostExitProtection) {
    if (!isRocketOverlappingAnyAsteroid()) {
      state.boostExitProtection = false;
    }
    for (const asteroid of state.asteroids) {
      asteroid.touchingRocket = false;
    }
    return;
  }

  const ship = state.aircraft;
  for (const asteroid of state.asteroids) {
    const asteroidY = worldToScreenY(asteroid.worldY);
    const asteroidX = asteroid.x + state.viewOffsetX * 0.3;
    const vertices = getAsteroidVertices(asteroid, asteroidX, asteroidY);
    const contact = findRocketPolygonCollision(ship, vertices);

    if (!contact) {
      asteroid.touchingRocket = false;
      continue;
    }

    const newContact = !asteroid.touchingRocket;
    asteroid.touchingRocket = true;
    let normalX = contact.normalX;
    let normalY = contact.normalY;
    let normalLength = Math.hypot(normalX, normalY);

    if (normalLength < 0.01) {
      normalX = ship.previousX - asteroidX;
      normalY = ship.previousY - asteroidY;
      normalLength = Math.hypot(normalX, normalY);
    }
    if (normalLength < 0.01) {
      normalX = -state.lastFlightX;
      normalY = -state.lastFlightY;
      normalLength = Math.hypot(normalX, normalY) || 1;
    }

    normalX /= normalLength;
    normalY /= normalLength;
    const rocketCollisionRadius = getRocketCollisionRadius(ship);
    ship.x = clamp(
      contact.surfaceX + normalX * (rocketCollisionRadius + 1.5),
      ship.radius,
      state.width - ship.radius
    );
    ship.y = clamp(
      contact.surfaceY + normalY * (rocketCollisionRadius + 1.5),
      ship.radius * 1.35,
      state.height - ship.radius
    );
    ship.previousX = ship.x;
    ship.previousY = ship.y;

    if (newContact && state.invulnerableTime <= 0) {
      const backwardX = -state.lastFlightX;
      const backwardY = -state.lastFlightY;
      let knockbackX = normalX * 0.8 + backwardX * 0.65;
      let knockbackY = normalY * 0.8 + backwardY * 0.65;
      const knockbackLength = Math.hypot(knockbackX, knockbackY) || 1;
      knockbackX /= knockbackLength;
      knockbackY /= knockbackLength;
      ship.vx = knockbackX * 460;
      ship.vy = knockbackY * 460;
      state.bounceTime = 0.36;
      state.impactSlowTime = 0.55;
      state.impactRecoilTime = 0.18;
      startScreenShake();
      registerHit();
    }

    return;
  }
}

function isRocketOverlappingAnyAsteroid() {
  const ship = state.aircraft;
  const rocketCollisionRadius = getRocketCollisionRadius(ship);

  return state.asteroids.some((asteroid) => {
    const asteroidY = worldToScreenY(asteroid.worldY);
    const asteroidX = asteroid.x + state.viewOffsetX * 0.3;
    const vertices = getAsteroidVertices(asteroid, asteroidX, asteroidY);
    if (isPointInsidePolygon(ship.x, ship.y, vertices)) {
      return true;
    }
    return getNearestPolygonSurface(ship.x, ship.y, vertices).distance <= rocketCollisionRadius;
  });
}

function getAsteroidVertices(asteroid, centerX, centerY) {
  const rotation = Number.isFinite(asteroid.rotation) ? asteroid.rotation : 0;
  const rotationCos = Math.cos(rotation);
  const rotationSin = Math.sin(rotation);

  return asteroid.points.map((pointScale, index) => {
    const angle = index / asteroid.points.length * Math.PI * 2;
    const pointRadius = asteroid.radius * pointScale;
    const localX = Math.cos(angle) * pointRadius;
    const localY = Math.sin(angle) * pointRadius * 0.86;

    return {
      x: centerX + localX * rotationCos - localY * rotationSin,
      y: centerY + localX * rotationSin + localY * rotationCos
    };
  });
}

function findRocketPolygonCollision(ship, vertices) {
  const travelDistance = Math.hypot(
    ship.x - ship.previousX,
    ship.y - ship.previousY
  );
  const rocketCollisionRadius = getRocketCollisionRadius(ship);
  const sampleSpacing = Math.max(3, rocketCollisionRadius * 0.55);
  const sampleCount = Math.max(1, Math.ceil(travelDistance / sampleSpacing));

  for (let sampleIndex = 0; sampleIndex <= sampleCount; sampleIndex += 1) {
    const progress = sampleIndex / sampleCount;
    const sampleX = ship.previousX + (ship.x - ship.previousX) * progress;
    const sampleY = ship.previousY + (ship.y - ship.previousY) * progress;
    const inside = isPointInsidePolygon(sampleX, sampleY, vertices);
    const nearest = getNearestPolygonSurface(sampleX, sampleY, vertices);

    if (!inside && nearest.distance > rocketCollisionRadius) {
      continue;
    }

    const normalMultiplier = inside ? -1 : 1;
    return {
      surfaceX: nearest.x,
      surfaceY: nearest.y,
      normalX: (sampleX - nearest.x) * normalMultiplier,
      normalY: (sampleY - nearest.y) * normalMultiplier
    };
  }

  return null;
}

function getRocketCollisionRadius(ship = state.aircraft) {
  return ship.radius * getCurrentAircraftStats().collisionScale;
}

function getNearestPolygonSurface(pointX, pointY, vertices) {
  let nearest = { x: pointX, y: pointY, distance: Infinity };

  for (let index = 0; index < vertices.length; index += 1) {
    const start = vertices[index];
    const end = vertices[(index + 1) % vertices.length];
    const point = closestPointOnSegment(
      pointX,
      pointY,
      start.x,
      start.y,
      end.x,
      end.y
    );

    if (point.distance < nearest.distance) {
      nearest = point;
    }
  }

  return nearest;
}

function isPointInsidePolygon(pointX, pointY, vertices) {
  let inside = false;

  for (let index = 0, previous = vertices.length - 1; index < vertices.length; previous = index++) {
    const currentPoint = vertices[index];
    const previousPoint = vertices[previous];
    const crossesY = currentPoint.y > pointY !== previousPoint.y > pointY;
    const crossingX = (previousPoint.x - currentPoint.x) *
      (pointY - currentPoint.y) /
      (previousPoint.y - currentPoint.y || Number.EPSILON) +
      currentPoint.x;

    if (crossesY && pointX < crossingX) {
      inside = !inside;
    }
  }

  return inside;
}

function closestPointOnSegment(pointX, pointY, startX, startY, endX, endY) {
  const segmentX = endX - startX;
  const segmentY = endY - startY;
  const lengthSquared = segmentX * segmentX + segmentY * segmentY;
  const projection = lengthSquared > 0
    ? clamp(
      ((pointX - startX) * segmentX + (pointY - startY) * segmentY) / lengthSquared,
      0,
      1
    )
    : 0;
  const x = startX + segmentX * projection;
  const y = startY + segmentY * projection;

  return {
    x,
    y,
    distance: Math.hypot(x - pointX, y - pointY)
  };
}

function registerHit() {
  state.lives = Math.max(0, state.lives - 1);
  if (state.lives > 0) {
    state.advancementProgress.survivedHits += 1;
    saveAdvancementProgress(state.advancementProgress);
    checkAdvancements();
  }
  if (state.lives === 0) {
    playDeathSound();
  } else {
    playCollisionSound();
  }
  state.invulnerableTime = 1.85;
  state.hitPulse = 0.36;
  updateLivesDisplay();

  if (state.lives === 0) {
    clearSavedRun();
    updateDeathSummary();
    setBoostHeld(false);
    startScreenShake(0.48, 9);
    state.launched = false;
    state.gameOver = true;
    state.dragging = false;
    releaseActivePointer();
    gameOverPanel.classList.remove("hidden");
    startPanel.classList.add("hidden");
    render();
  }
}

function updateDeathSummary() {
  const finalAltitude = getAltitude();
  const distance = Math.floor(state.runDistance);
  const baseScore = finalAltitude * 10 + distance * 2 + state.runLights * 125;
  const aircraftMultiplier = aircraftScoreMultipliers[state.shopProfile.aircraft] ?? 1;
  const trailMultiplier = trailScoreMultipliers[state.shopProfile.trail] ?? 1;
  const finalScore = Math.max(0, Math.floor(baseScore * aircraftMultiplier * trailMultiplier));
  state.bestAltitude = Math.max(state.bestAltitude, finalAltitude);
  state.bestScore = Math.max(state.bestScore, finalScore);
  finalAltitudeLabel.textContent = finalScore.toLocaleString();
  bestAltitudeLabel.textContent = state.bestScore.toLocaleString();
  saveBestAltitude(state.bestAltitude);
  try {
    window.localStorage?.setItem("ascend-best-score", String(state.bestScore));
  } catch {
    // Score still remains available for this session.
  }
  offerLeaderboardEntry(finalScore, finalAltitude, state.advancementProgress.lifetimeLights);
}

function loadLightBalance() {
  try {
    const savedBalance = Number(window.localStorage?.getItem("ascend-light-balance"));
    return Number.isInteger(savedBalance) && savedBalance >= 0 ? savedBalance : 0;
  } catch {
    return 0;
  }
}

function loadAdvancementProgress() {
  try {
    const progress = JSON.parse(window.localStorage?.getItem("ascend-advancements") ?? "null");
    return {
      lifetimeLights: Number.isInteger(progress?.lifetimeLights) && progress.lifetimeLights >= 0 ? progress.lifetimeLights : 0,
      survivedHits: Number.isInteger(progress?.survivedHits) && progress.survivedHits >= 0 ? progress.survivedHits : 0,
      completed: Array.isArray(progress?.completed)
        ? progress.completed.filter((id) => advancementDefinitions.some((advancement) => advancement.id === id))
        : []
    };
  } catch {
    return { lifetimeLights: 0, survivedHits: 0, completed: [] };
  }
}

function saveAdvancementProgress(progress) {
  try {
    window.localStorage?.setItem("ascend-advancements", JSON.stringify(progress));
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function loadShopProfile() {
  try {
    const profile = JSON.parse(window.localStorage?.getItem("ascend-shop-profile") ?? "null");
    return normalizeShopProfile(profile);
  } catch {
    return { ...defaultShopProfile, owned: [...defaultShopProfile.owned] };
  }
}

function normalizeShopProfile(profile) {
  const owned = [...new Set([
    ...defaultShopProfile.owned,
    ...(Array.isArray(profile?.owned) ? profile.owned.filter((item) => validShopItemIds.includes(item)) : [])
  ])];
  const requestedAircraft = validAircraftStyles.includes(profile?.aircraft) ? profile.aircraft : "classic";
  const requestedTrail = validTrailStyles.includes(profile?.trail) ? profile.trail : "white";
  return {
    owned,
    aircraft: owned.includes(`aircraft-${requestedAircraft}`) ? requestedAircraft : "classic",
    trail: owned.includes(`trail-${requestedTrail}`) ? requestedTrail : "white"
  };
}

function isValidShopProfile(profile) {
  return profile !== null && typeof profile === "object" &&
    Array.isArray(profile.owned) && profile.owned.length <= validShopItemIds.length &&
    profile.owned.every((item) => typeof item === "string" && validShopItemIds.includes(item)) &&
    validAircraftStyles.includes(profile.aircraft) &&
    validTrailStyles.includes(profile.trail) &&
    profile.owned.includes(`aircraft-${profile.aircraft}`) &&
    profile.owned.includes(`trail-${profile.trail}`);
}

function isValidAdvancementProgress(progress) {
  return progress !== null && typeof progress === "object" &&
    Number.isInteger(progress.lifetimeLights) && progress.lifetimeLights >= 0 && progress.lifetimeLights <= 1_000_000_000 &&
    Number.isInteger(progress.survivedHits) && progress.survivedHits >= 0 && progress.survivedHits <= 1_000_000_000 &&
    Array.isArray(progress.completed) && progress.completed.length <= advancementDefinitions.length &&
    progress.completed.every((id) => advancementDefinitions.some((advancement) => advancement.id === id));
}

function saveShopProfile(profile) {
  try {
    window.localStorage?.setItem("ascend-shop-profile", JSON.stringify(profile));
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function saveLightBalance(balance) {
  try {
    window.localStorage?.setItem("ascend-light-balance", String(Math.max(0, Math.floor(balance))));
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function loadBestAltitude() {
  try {
    const savedAltitude = Number(window.localStorage?.getItem("ascend-best-altitude"));
    return Number.isFinite(savedAltitude) && savedAltitude > 0 ? Math.floor(savedAltitude) : 0;
  } catch {
    return 0;
  }
}

function saveBestAltitude(altitude) {
  try {
    window.localStorage?.setItem("ascend-best-altitude", String(altitude));
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function loadScreenShakeSetting() {
  try {
    return window.localStorage?.getItem("ascend-screen-shake") !== "off";
  } catch {
    return true;
  }
}

function saveScreenShakeSetting(enabled) {
  try {
    window.localStorage?.setItem("ascend-screen-shake", enabled ? "on" : "off");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function loadMusicSetting() {
  try {
    return window.localStorage?.getItem("ascend-music") !== "off";
  } catch {
    return true;
  }
}

function saveMusicSetting(enabled) {
  try {
    window.localStorage?.setItem("ascend-music", enabled ? "on" : "off");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function loadSfxSetting() {
  try {
    return window.localStorage?.getItem("ascend-sfx") !== "off";
  } catch {
    return true;
  }
}

function saveSfxSetting(enabled) {
  try {
    window.localStorage?.setItem("ascend-sfx", enabled ? "on" : "off");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function applySoundSettings() {
  if (state.musicEnabled || state.sfxEnabled) {
    ensureAudio();
  }
  if (audioEngine.context) {
    audioEngine.music?.gain.setTargetAtTime(state.musicEnabled ? 0.8 : 0.0001, audioEngine.context.currentTime, 0.08);
    audioEngine.sfx?.gain.setTargetAtTime(state.sfxEnabled ? 0.9 : 0.0001, audioEngine.context.currentTime, 0.04);
  }
}

function loadLaunchPromptSeen() {
  try {
    return window.localStorage?.getItem("ascend-launch-prompt-seen") === "yes";
  } catch {
    return false;
  }
}

function saveLaunchPromptSeen() {
  try {
    window.localStorage?.setItem("ascend-launch-prompt-seen", "yes");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function clearLaunchPromptSeen() {
  try {
    window.localStorage?.removeItem("ascend-launch-prompt-seen");
  } catch {
    // Storage can be unavailable in private browsing or embedded game hosts.
  }
}

function startScreenShake(duration = 0.24, strength = 5) {
  if (!state.screenShakeEnabled) {
    state.shakeTime = 0;
    state.shakeX = 0;
    state.shakeY = 0;
    applyScreenShake();
    return;
  }

  state.shakeTime = duration;
  state.shakeDuration = duration;
  state.shakeStrength = strength;
  state.shakeX = randomBetween(-strength, strength);
  state.shakeY = randomBetween(-strength, strength);
  applyScreenShake();
}

function drawFloor() {
  const baseY = getFloorTopY(state.cameraY);
  if (baseY > state.height + 180) {
    return;
  }

  const horizontalOffset = state.groundOffsetX + state.viewOffsetX * 0.3;
  ctx.save();
  ctx.translate(horizontalOffset, 0);

  const plainLeft = -state.width * 4;
  const plainWidth = state.width * 9;
  const ground = ctx.createLinearGradient(0, baseY - 12, 0, state.height);
  ground.addColorStop(0, "rgba(22, 32, 55, 0.92)");
  ground.addColorStop(1, "rgba(12, 20, 38, 1)");
  ctx.fillStyle = ground;
  ctx.beginPath();
  ctx.moveTo(plainLeft, baseY);
  const surfaceStep = Math.max(48, state.width * 0.07);
  for (let x = plainLeft; x <= plainLeft + plainWidth; x += surfaceStep) {
    const surfaceY = baseY + Math.sin(x * 0.018) * 3.2 + Math.sin(x * 0.0067) * 2.1;
    ctx.lineTo(x, surfaceY);
  }
  ctx.lineTo(plainLeft + plainWidth, state.height * 2);
  ctx.lineTo(plainLeft, state.height * 2);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(57, 70, 98, 0.12)";
  for (let x = plainLeft; x < plainLeft + plainWidth; x += 180) {
    ctx.fillRect(x, baseY + 8 + Math.sin(x * 0.01) * 2, 56, 2);
  }

  ctx.restore();
  drawLaunchComplex(baseY, horizontalOffset);
}

function getFloorTopY(cameraY) {
  return state.height - 18 + cameraY;
}

function drawLaunchComplex(baseY, horizontalOffset = 0) {
  const center = state.width / 2 + horizontalOffset;
  ctx.save();
  ctx.translate(center, baseY);
  ctx.scale(0.62, 0.62);
  drawSilhouette(-168, -18, 24, 18);
  drawSilhouette(-112, -24, 30, 24);
  drawSilhouette(118, -22, 34, 22);
  drawSilhouette(184, -26, 26, 26);
  drawServiceTower(-66, -82, 22, 82);
  drawServiceArm(-54, -62, 46);
  drawAntenna(72, -56, 56);
  drawAntenna(148, -42, 42);
  drawPadCradle(0, 0);
  ctx.restore();
}

function drawSilhouette(x, y, width, height) {
  ctx.fillStyle = "rgba(14, 22, 39, 0.94)";
  roundRect(x - width / 2, y, width, height, 5);
  ctx.fill();
}

function drawServiceTower(x, y, width, height) {
  ctx.strokeStyle = "rgba(9, 15, 29, 0.96)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - width / 2, y + height);
  ctx.lineTo(x - width / 2, y);
  ctx.lineTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, y + height);
  for (let step = 10; step < height; step += 16) {
    ctx.moveTo(x - width / 2, y + step);
    ctx.lineTo(x + width / 2, y + step + 10);
    ctx.moveTo(x + width / 2, y + step);
    ctx.lineTo(x - width / 2, y + step + 10);
  }
  ctx.stroke();
}

function drawServiceArm(x, y, length) {
  ctx.strokeStyle = "rgba(9, 15, 29, 0.9)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + length, y + 16);
  ctx.moveTo(x + 8, y + 12);
  ctx.lineTo(x + length - 4, y + 28);
  ctx.stroke();
}

function drawPadCradle(x, baseY) {
  ctx.fillStyle = "rgba(18, 25, 43, 0.86)";
  ctx.beginPath();
  ctx.ellipse(x, baseY + 1, 42, 9, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawAntenna(x, y, height) {
  ctx.strokeStyle = "rgba(16, 24, 42, 0.88)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x, y);
  ctx.moveTo(x - 18, y + 18);
  ctx.lineTo(x + 18, y + 15);
  ctx.moveTo(x - 14, y + 34);
  ctx.lineTo(x + 14, y + 31);
  ctx.stroke();
}

function updateTrail(deltaSeconds, direction) {
  for (const particle of state.trail) {
    particle.age += deltaSeconds;
    particle.x += particle.vx * deltaSeconds;
    particle.y += particle.vy * deltaSeconds;
  }

  state.trail = state.trail.filter((particle) => particle.age < particle.life);

  if (!state.launched || (direction.x === 0 && direction.y === 0)) {
    return;
  }

  state.trailAccumulator += deltaSeconds * (state.boostActive ? 88 : 56);
  while (state.trailAccumulator >= 1) {
    state.trailAccumulator -= 1;
    const ship = state.aircraft;
    const backX = -Math.sin(ship.tilt);
    const backY = Math.cos(ship.tilt);
    const life = randomBetween(0.95, 1.5);

    state.trail.push({
      x: ship.x + backX * ship.radius * 0.98,
      y: ship.y + backY * ship.radius * 0.98,
      vx: backX * randomBetween(105, 165) + randomBetween(-6, 6),
      vy: backY * randomBetween(105, 165) + randomBetween(-6, 6),
      radius: randomBetween(ship.radius * 0.16, ship.radius * 0.31),
      age: 0,
      life,
      color: state.shopProfile.trail
    });
  }
}

function drawTrail() {
  ctx.save();
  ctx.globalCompositeOperation = "source-over";
  for (const particle of state.trail) {
    const [trailColor, trailGlow] = trailColors[particle.color ?? state.shopProfile.trail] ?? trailColors.white;
    const progress = particle.age / particle.life;
    ctx.globalAlpha = (1 - progress) * 0.82;
    ctx.fillStyle = trailColor;
    ctx.shadowColor = trailGlow;
    ctx.shadowBlur = particle.radius * 2.4;
    drawTrailParticle(
      particle.color ?? state.shopProfile.trail,
      particle.x,
      particle.y,
      particle.radius * (1 - progress * 0.45)
    );
  }

  ctx.restore();
}

function drawTrailParticle(style, x, y, radius) {
  ctx.beginPath();
  if (style === "rings") {
    ctx.lineWidth = Math.max(1, radius * 0.32);
    ctx.strokeStyle = "#ffffff";
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    return;
  }
  if (style === "hearts") {
    ctx.moveTo(x, y + radius);
    ctx.bezierCurveTo(x - radius * 1.35, y + radius * 0.15, x - radius, y - radius, x, y - radius * 0.25);
    ctx.bezierCurveTo(x + radius, y - radius, x + radius * 1.35, y + radius * 0.15, x, y + radius);
  } else if (style === "diamonds") {
    ctx.moveTo(x, y - radius * 1.25);
    ctx.lineTo(x + radius, y);
    ctx.lineTo(x, y + radius * 1.25);
    ctx.lineTo(x - radius, y);
  } else if (style === "stars") {
    for (let point = 0; point < 10; point += 1) {
      const angle = -Math.PI / 2 + point * Math.PI / 5;
      const pointRadius = point % 2 === 0 ? radius * 1.25 : radius * 0.5;
      const px = x + Math.cos(angle) * pointRadius;
      const py = y + Math.sin(angle) * pointRadius;
      if (point === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
  } else if (style === "sparks") {
    ctx.moveTo(x, y - radius * 1.5);
    ctx.lineTo(x + radius * 0.28, y - radius * 0.28);
    ctx.lineTo(x + radius * 1.5, y);
    ctx.lineTo(x + radius * 0.28, y + radius * 0.28);
    ctx.lineTo(x, y + radius * 1.5);
    ctx.lineTo(x - radius * 0.28, y + radius * 0.28);
    ctx.lineTo(x - radius * 1.5, y);
    ctx.lineTo(x - radius * 0.28, y - radius * 0.28);
  } else if (style === "petals") {
    ctx.ellipse(x, y - radius * 0.62, radius * 0.45, radius * 0.72, 0, 0, Math.PI * 2);
    ctx.ellipse(x + radius * 0.62, y, radius * 0.72, radius * 0.45, 0, 0, Math.PI * 2);
    ctx.ellipse(x, y + radius * 0.62, radius * 0.45, radius * 0.72, 0, 0, Math.PI * 2);
    ctx.ellipse(x - radius * 0.62, y, radius * 0.72, radius * 0.45, 0, 0, Math.PI * 2);
  } else {
    ctx.arc(x, y, radius, 0, Math.PI * 2);
  }
  ctx.closePath();
  ctx.fill();
}

function drawAircraft() {
  const ship = state.aircraft;

  ctx.save();
  ctx.translate(ship.x, ship.y);
  ctx.rotate(ship.tilt);
  ctx.globalAlpha = state.invulnerableTime > 0 && Math.floor(state.invulnerableTime * 12) % 2 === 0 ? 0.42 : 1;

  const glow = ctx.createRadialGradient(0, ship.radius * 0.25, 0, 0, ship.radius * 0.25, ship.radius * 2.8);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  glow.addColorStop(0.38, "rgba(255, 255, 255, 0.36)");
  glow.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, ship.radius * 0.26, ship.radius * 2.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  traceAircraftShape(state.shopProfile.aircraft, ship.radius);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();

  if (state.hitPulse > 0) {
    ctx.save();
    ctx.globalAlpha = state.hitPulse * 1.4;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.radius * (2.2 - state.hitPulse), 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function traceAircraftShape(style, radius) {
  if (style === "dart") {
    ctx.moveTo(0, -radius * 1.62);
    ctx.lineTo(radius * 0.62, radius * 0.96);
    ctx.lineTo(-radius * 0.62, radius * 0.96);
    return;
  }
  if (style === "glider") {
    ctx.moveTo(0, -radius * 1.12);
    ctx.lineTo(radius * 1.28, radius * 0.78);
    ctx.lineTo(-radius * 1.28, radius * 0.78);
    return;
  }
  if (style === "arrow") {
    ctx.moveTo(0, -radius * 1.55);
    ctx.lineTo(radius * 0.82, radius * 0.88);
    ctx.lineTo(0, radius * 0.3);
    ctx.lineTo(-radius * 0.82, radius * 0.88);
    return;
  }
  if (style === "comet") {
    ctx.moveTo(0, -radius * 1.28);
    ctx.lineTo(radius * 1.38, radius * 0.72);
    ctx.lineTo(radius * 0.42, radius * 0.34);
    ctx.lineTo(radius * 0.18, radius * 0.72);
    ctx.lineTo(-radius * 0.18, radius * 0.72);
    ctx.lineTo(-radius * 0.42, radius * 0.34);
    ctx.lineTo(-radius * 1.38, radius * 0.72);
    return;
  }
  if (style === "wisp") {
    ctx.moveTo(0, -radius * 1.42);
    ctx.lineTo(radius * 1.28, radius * 0.62);
    ctx.lineTo(radius * 0.46, radius * 0.3);
    ctx.lineTo(radius * 0.62, radius * 0.72);
    ctx.lineTo(0, radius * 0.42);
    ctx.lineTo(-radius * 0.62, radius * 0.72);
    ctx.lineTo(-radius * 0.46, radius * 0.3);
    ctx.lineTo(-radius * 1.28, radius * 0.62);
    return;
  }
  if (style === "diamond") {
    ctx.moveTo(0, -radius * 1.7);
    ctx.lineTo(radius * 0.72, -radius * 0.16);
    ctx.lineTo(0, radius * 1.3);
    ctx.lineTo(-radius * 0.72, -radius * 0.16);
    return;
  }
  if (style === "halo") {
    ctx.moveTo(0, -radius * 1.48);
    ctx.lineTo(radius * 0.98, radius * 0.72);
    ctx.lineTo(radius * 0.36, radius * 0.5);
    ctx.lineTo(0, radius * 0.98);
    ctx.lineTo(-radius * 0.36, radius * 0.5);
    ctx.lineTo(-radius * 0.98, radius * 0.72);
    return;
  }
  if (style === "prism") {
    ctx.moveTo(0, -radius * 1.55);
    ctx.lineTo(radius * 0.82, radius * 0.18);
    ctx.lineTo(radius * 0.34, radius * 1.02);
    ctx.lineTo(0, radius * 0.58);
    ctx.lineTo(-radius * 0.34, radius * 1.02);
    ctx.lineTo(-radius * 0.82, radius * 0.18);
    return;
  }
  ctx.moveTo(0, -radius * 1.35);
  ctx.lineTo(radius * 0.9, radius * 0.9);
  ctx.lineTo(-radius * 0.9, radius * 0.9);
}

function drawLaunchButton() {
  if (state.launched || state.titleOpacity <= 0.01) {
    return;
  }

  const button = state.launchButton;
  const half = button.size / 2;
  ctx.save();
  ctx.globalAlpha = state.titleOpacity;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.34)";
  ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
  ctx.lineWidth = 1.4;
  roundRect(button.x - half, button.y - half, button.size, button.size, 8);
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = "rgba(0, 0, 0, 0.18)";
  ctx.shadowBlur = 18;

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const arrowY = button.y + 5;
  ctx.beginPath();
  ctx.moveTo(button.x - 6, arrowY);
  ctx.lineTo(button.x, arrowY - 9);
  ctx.lineTo(button.x + 6, arrowY);
  ctx.moveTo(button.x - 6, arrowY + 8);
  ctx.lineTo(button.x, arrowY - 1);
  ctx.lineTo(button.x + 6, arrowY + 8);
  ctx.stroke();
  ctx.restore();
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function update(deltaSeconds) {
  const direction = getFlightDirection(deltaSeconds);
  updateBoost(deltaSeconds);
  const travelSpeed = getImpactAdjustedTravelSpeed();
  state.runDistance += Math.abs(travelSpeed) * deltaSeconds / pixelsPerKm;
  updateGroundHorizontalOffset(direction, travelSpeed, deltaSeconds);
  const minimumCameraY = state.aircraft.y - getWorldScreenOriginY();
  state.cameraY = Math.max(
    minimumCameraY,
    state.cameraY - direction.y * travelSpeed * deltaSeconds
  );
  state.targetViewOffsetX = -direction.x * Math.min(state.width * 0.1, 36);
  state.invulnerableTime = Math.max(0, state.invulnerableTime - deltaSeconds);
  state.hitPulse = Math.max(0, state.hitPulse - deltaSeconds);
  state.impactSlowTime = Math.max(0, state.impactSlowTime - deltaSeconds);
  state.impactRecoilTime = Math.max(0, state.impactRecoilTime - deltaSeconds);
  updateScreenShake(deltaSeconds);
  updateAsteroids(deltaSeconds, direction, travelSpeed);
  updateCollectibles(deltaSeconds, direction, travelSpeed);
  state.viewOffsetX += (state.targetViewOffsetX - state.viewOffsetX) * 0.08;
  state.titleOpacity = clamp(state.titleOpacity - deltaSeconds * 2.3, 0, 1);
  moveAircraft(direction, deltaSeconds);
  updateBoostDisplay();
  updateTrail(deltaSeconds, direction);
  resolveAsteroidHits();
  resolveCollectibleHits();
  altitudeLabel.textContent = `${getAltitude()} km`;
  checkAdvancements();
  state.autosaveTime += deltaSeconds;
  if (state.autosaveTime >= 2) {
    state.autosaveTime = 0;
    saveRun();
  }
}

function updateGroundHorizontalOffset(direction, travelSpeed, deltaSeconds) {
  state.groundOffsetX -= direction.x * travelSpeed * deltaSeconds * 0.85;
}

function getImpactAdjustedTravelSpeed() {
  const stats = getCurrentAircraftStats();
  const flightSpeed = (state.boostActive ? stats.boostSpeed : stats.flightSpeed) * getViewportSpeedScale();
  if (state.impactRecoilTime > 0) {
    return flightSpeed * -0.38;
  }
  if (state.impactSlowTime > 0) {
    return flightSpeed * 0.58;
  }
  return flightSpeed;
}

function setBoostHeld(held) {
  state.boostHeld = held && state.launched && !state.gameOver && !state.paused;
  if (!held) {
    state.boostLocked = false;
    state.boostActive = false;
  }
  updateBoostDisplay();
}

function updateBoost(deltaSeconds) {
  const stats = getCurrentAircraftStats();
  const canBoost = state.boostHeld && !state.boostLocked && state.boostCharge > 0;
  state.boostActive = canBoost;

  if (state.boostActive) {
    state.boostCharge = Math.max(
      0,
      state.boostCharge - deltaSeconds / stats.boostDuration
    );
    if (state.boostCharge <= 0.0001) {
      state.boostCharge = 0;
      state.boostActive = false;
      state.boostLocked = true;
    }
  } else if (state.launched) {
    state.boostCharge = Math.min(
      1,
      state.boostCharge + deltaSeconds / stats.boostRecharge
    );
  }

  updateBoostDisplay();
}

function updateBoostDisplay() {
  const percentage = Math.round(state.boostCharge * 100);
  const tailHalfWidth = state.shopProfile.aircraft === "dart"
    ? 0.65
    : state.shopProfile.aircraft === "glider" ? 1.25
      : state.shopProfile.aircraft === "arrow" ? 0.78
        : state.shopProfile.aircraft === "comet" ? 0.72
          : state.shopProfile.aircraft === "wisp" ? 0.8
            : state.shopProfile.aircraft === "halo" ? 0.9
              : state.shopProfile.aircraft === "prism" ? 0.76 : 0.9;
  const meterWidth = clamp(state.aircraft.radius * tailHalfWidth * 2.35, 19, 46);
  boostControl.style.setProperty("--boost-charge", state.boostCharge);
  boostControl.style.setProperty("--boost-x", `${state.aircraft.x}px`);
  boostControl.style.setProperty("--boost-y", `${state.aircraft.y + state.aircraft.radius * 2.1}px`);
  boostControl.style.setProperty("--boost-width", `${Math.max(42, meterWidth + 20)}px`);
  boostControl.style.setProperty("--boost-meter-width", `${meterWidth}px`);
  boostControl.setAttribute("aria-label", `Boost ${percentage}% charged`);
  boostControl.setAttribute("aria-pressed", state.boostActive ? "true" : "false");
  boostControl.classList.remove("available", "active");
  if (state.launched) {
    boostControl.classList.add("available");
  }
  if (state.boostActive) {
    boostControl.classList.add("active");
  }
}

function updateScreenShake(deltaSeconds) {
  state.shakeTime = Math.max(0, state.shakeTime - deltaSeconds);

  if (state.shakeTime > 0) {
    const strength = state.shakeStrength * (state.shakeTime / state.shakeDuration);
    state.shakeX = randomBetween(-strength, strength);
    state.shakeY = randomBetween(-strength, strength);
  } else {
    state.shakeX = 0;
    state.shakeY = 0;
  }

  applyScreenShake();
}

function applyScreenShake() {
  gameShell.style.setProperty("--shake-x", state.shakeX + "px");
  gameShell.style.setProperty("--shake-y", state.shakeY + "px");
}

function moveAircraft(direction, deltaSeconds) {
  const ship = state.aircraft;
  const padding = ship.radius * 1.25;
  const leadX = Math.min(state.width * 0.055, 30);
  const leadY = Math.min(state.height * 0.04, 26);
  const desiredX = state.width / 2 + direction.x * leadX;
  const desiredY = state.height / 2 + direction.y * leadY;
  const follow = 1 - Math.exp(-5.2 * deltaSeconds);
  const bouncing = state.bounceTime > 0;

  ship.previousX = ship.x;
  ship.previousY = ship.y;
  if (!bouncing) {
    ship.x += (desiredX - ship.x) * follow;
    ship.y += (desiredY - ship.y) * follow;
  }
  ship.x += ship.vx * deltaSeconds;
  ship.y += ship.vy * deltaSeconds;

  if (ship.x <= padding || ship.x >= state.width - padding) {
    ship.vx *= -0.45;
  }
  if (ship.y <= padding * 1.35 || ship.y >= state.height - padding) {
    ship.vy *= -0.45;
  }

  ship.x = clamp(ship.x, padding, state.width - padding);
  ship.y = clamp(ship.y, padding * 1.35, state.height - padding);
  if (bouncing) {
    state.bounceTime = Math.max(0, state.bounceTime - deltaSeconds);
    ship.vx *= Math.pow(0.25, deltaSeconds);
    ship.vy *= Math.pow(0.25, deltaSeconds);
  } else {
    ship.vx *= Math.pow(0.035, deltaSeconds);
    ship.vy *= Math.pow(0.035, deltaSeconds);
  }

  if (state.launched) {
    const pointerFromCenterX = state.pointerX - state.width / 2;
    const pointerFromCenterY = state.pointerY - state.height / 2;
    const pointerOutsideDeadzone = state.pointerInside &&
      Math.hypot(pointerFromCenterX, pointerFromCenterY) >= getSteeringDeadzone();
    const aimX = pointerOutsideDeadzone ? state.pointerX - ship.x : direction.x;
    const aimY = pointerOutsideDeadzone ? state.pointerY - ship.y : direction.y;
    if (Math.hypot(aimX, aimY) > 1) {
      ship.tilt = Math.atan2(aimY, aimX) + Math.PI / 2;
    }
  } else {
    ship.tilt = 0;
  }
}

function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function render() {
  drawBackground();
  drawMilestones();
  drawAsteroids();
  drawCollectibles();
  drawFloor();
  drawCollectionEffects();
  drawTrail();
  drawAircraft();
  drawLaunchButton();
}

function loop(time) {
  if (state.paused) {
    state.animationFrameId = null;
    render();
    return;
  }

  if (!state.launched && state.shakeTime <= 0) {
    state.animationFrameId = null;
    render();
    return;
  }

  const deltaSeconds = Math.min((time - state.lastTime) / 1000, 0.033);
  state.lastTime = time;
  if (state.launched) {
    update(deltaSeconds);
  } else {
    state.hitPulse = Math.max(0, state.hitPulse - deltaSeconds);
    updateScreenShake(deltaSeconds);
  }
  render();
  state.animationFrameId = state.launched || state.shakeTime > 0
    ? requestAnimationFrame(loop)
    : null;
}

canvas.addEventListener("pointerenter", (event) => {
  if (!state.launched || state.paused) {
    return;
  }

  const point = eventToCanvas(event);
  setPointerPosition(point);
  setViewTarget(point);
});

canvas.addEventListener("pointerleave", () => {
  state.pointerInside = false;
});

canvas.addEventListener("pointerdown", (event) => {
  ensureAudio();
  if (state.gameOver || state.paused || state.titleScreenVisible) {
    return;
  }

  const point = eventToCanvas(event);
  setViewTarget(point);
  if (!state.launched && !isNearAircraft(point)) {
    return;
  }

  if (state.launched && state.dragging && event.pointerId !== state.activePointerId) {
    state.boostPointerId = event.pointerId;
    canvas.setPointerCapture(event.pointerId);
    setBoostHeld(true);
    return;
  }

  state.dragging = true;
  state.activePointerId = event.pointerId;
  state.launchStartY = point.y;
  canvas.setPointerCapture(event.pointerId);
  if (state.launched) {
    if (event.pointerType === "mouse") setBoostHeld(true);
    setPointerTarget(event);
  } else {
    fadeTitleShade();
  }
});

canvas.addEventListener("pointermove", (event) => {
  if (state.gameOver || state.paused || state.titleScreenVisible) {
    return;
  }
  if (event.pointerId === state.boostPointerId) return;

  fadeTitleShade();
  const point = eventToCanvas(event);
  setViewTarget(point);

  if (!state.launched && !state.dragging) {
    state.viewOffsetX += (state.targetViewOffsetX - state.viewOffsetX) * 0.16;
    render();
    return;
  }

  if (state.launched && !state.dragging) {
    setPointerPosition(point);
    return;
  }

  if (!state.dragging) {
    return;
  }

  if (!state.launched) {
    state.launchButton.y = clamp(point.y, state.launchButton.homeY - state.height * 0.34, state.launchButton.homeY);
    state.viewOffsetX += (state.targetViewOffsetX - state.viewOffsetX) * 0.16;
    render();
  } else {
    setPointerPosition(point);
  }
});

canvas.addEventListener("pointerup", (event) => {
  if (event.pointerId === state.boostPointerId) {
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    state.boostPointerId = null;
    setBoostHeld(false);
    return;
  }
  if (event.pointerType === "mouse" && state.launched) setBoostHeld(false);
  if (!state.dragging || state.gameOver || state.paused) {
    return;
  }

  const point = eventToCanvas(event);
  const draggedUp = state.launchStartY - point.y;
  state.dragging = false;
  releaseActivePointer();

  if (!state.launched && draggedUp > Math.max(34, state.height * 0.045)) {
    state.launchButton.y = state.launchButton.homeY;
    state.pointerX = state.width / 2;
    state.pointerY = 0;
    state.pointerInside = false;
    state.lastFlightX = 0;
    state.lastFlightY = -1;
    state.targetViewOffsetX = 0;
    state.viewOffsetX = 0;
    launch();
  } else if (!state.launched) {
    state.launchButton.y = state.launchButton.homeY;
    render();
  }
});

canvas.addEventListener("pointercancel", (event) => {
  if (event.pointerId === state.boostPointerId) {
    state.boostPointerId = null;
    setBoostHeld(false);
    return;
  }
  state.dragging = false;
  releaseActivePointer();
  if (!state.launched) {
    state.launchButton.y = state.launchButton.homeY;
    render();
  }
});

menuToggleButton.addEventListener("click", togglePauseMenu);
menuCloseButton.addEventListener("click", () => closeMenu());
menuBackdrop.addEventListener("click", () => closeMenu());
restartButton.addEventListener("click", restartFromMenu);
pauseShopButton.addEventListener("click", openShopFromPause);
pauseAdvancementsButton.addEventListener("click", showAdvancementsPanel);
pauseLeaderboardButton.addEventListener("click", showPauseLeaderboard);
pauseMainMenuButton.addEventListener("click", returnToMainMenuFromPause);
pauseSaveButton.addEventListener("click", showSaveCode);
pauseSaveBackButton.addEventListener("click", showPauseMenuActions);
pauseAdvancementsBackButton.addEventListener("click", () => {
  pauseHeading.textContent = "Paused";
  showPauseMenuActions();
});
pauseLeaderboardBack.addEventListener("click", () => {
  pauseHeading.textContent = "Paused";
  showPauseMenuActions();
});
pauseLeaderboardLeft.addEventListener("click", () => shiftLeaderboard(-1, "pause"));
pauseLeaderboardRight.addEventListener("click", () => shiftLeaderboard(1, "pause"));
centerRestartButton.addEventListener("click", resetRun);
returnToTitleButton.addEventListener("click", returnToTitleScreen);
boostControl.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  ensureAudio();
  boostControl.setPointerCapture(event.pointerId);
  setBoostHeld(true);
});
boostControl.addEventListener("pointerup", (event) => {
  event.preventDefault();
  if (boostControl.hasPointerCapture(event.pointerId)) {
    boostControl.releasePointerCapture(event.pointerId);
  }
  setBoostHeld(false);
});
boostControl.addEventListener("pointercancel", () => setBoostHeld(false));
gameLightCounter.addEventListener("click", (event) => {
  event.preventDefault();
  openShopFromLightCounter();
});
window.addEventListener("resize", resize);
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyS" && !event.repeat && !state.titleScreenVisible && !state.gameOver) {
    event.preventDefault();
    if (!state.launched && !sideMenu.classList.contains("open")) openLandedShop();
    else {
      if (!sideMenu.classList.contains("open")) togglePauseMenu();
      openShopFromPause();
    }
    return;
  }
  if (event.code === "KeyL" && !event.repeat && !state.titleScreenVisible && !state.gameOver) {
    event.preventDefault();
    if (!sideMenu.classList.contains("open")) togglePauseMenu();
    sideMenu.classList.remove("shop-open");
    state.shopScreenVisible = false;
    showPauseLeaderboard();
    return;
  }
  if (event.code === "KeyA" && !event.repeat && !state.titleScreenVisible && !state.gameOver) {
    event.preventDefault();
    if (!sideMenu.classList.contains("open")) togglePauseMenu();
    sideMenu.classList.remove("shop-open", "leaderboard-open");
    state.shopScreenVisible = false;
    pauseHeading.textContent = "Paused";
    showAdvancementsPanel();
    return;
  }
  if (event.code === "KeyP" && !event.repeat) {
    event.preventDefault();
    togglePauseMenu();
    return;
  }
  if (event.code === "Space") {
    event.preventDefault();
    ensureAudio();
    setBoostHeld(true);
  }
  if (event.key === "Escape" && sideMenu.classList.contains("open")) {
    closeMenu();
  } else if (event.key === "Escape" && state.titleScreenVisible && titleMenu.classList.contains("hidden")) {
    showTitleMenu();
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    setBoostHeld(false);
  }
});
window.addEventListener("blur", () => setBoostHeld(false));
titleContinueButton.addEventListener("click", continueFromTitle);
startShopButton.addEventListener("click", openLandedShop);
titlePlayButton.addEventListener("click", () => showTitlePanel(titlePlayPanel));
titleNewGameButton.addEventListener("click", startNewGame);
titleLoadGameButton.addEventListener("click", openLoadGamePanel);
titlePlayBackButton.addEventListener("click", showTitleMenu);
titleLoadConfirmButton.addEventListener("click", loadGameFromCode);
titleLoadBackButton.addEventListener("click", () => showTitlePanel(titlePlayPanel));
titleTutorialButton.addEventListener("click", () => showTitlePanel(titleTutorialPanel));
titleSettingsButton.addEventListener("click", openTitleSettings);
titleLeaderboardButton.addEventListener("click", showTitleLeaderboard);
titleCreditsButton.addEventListener("click", () => showTitlePanel(titleCreditsPanel));
titleSettingsBackButton.addEventListener("click", closeTitleSettings);
titleTutorialBackButton.addEventListener("click", showTitleMenu);
titleCreditsBackButton.addEventListener("click", showTitleMenu);
titleLeaderboardBack.addEventListener("click", showTitleMenu);
titleLeaderboardLeft.addEventListener("click", () => shiftLeaderboard(-1, "title"));
titleLeaderboardRight.addEventListener("click", () => shiftLeaderboard(1, "title"));
playerNameConfirm.addEventListener("click", confirmPlayerName);
playerNameSkip.addEventListener("click", skipPlayerName);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") confirmPlayerName();
});
screenShakeSetting.addEventListener("change", () => {
  state.screenShakeEnabled = screenShakeSetting.checked;
  saveScreenShakeSetting(state.screenShakeEnabled);
});
musicSetting.addEventListener("change", () => {
  state.musicEnabled = musicSetting.checked;
  saveMusicSetting(state.musicEnabled);
  applySoundSettings();
});
sfxSetting.addEventListener("change", () => {
  state.sfxEnabled = sfxSetting.checked;
  saveSfxSetting(state.sfxEnabled);
  applySoundSettings();
});
splashScreen.addEventListener("pointerdown", () => {
  ensureAudio();
  dismissSplashScreen();
});
shopBackButton.addEventListener("click", closeLandedShop);
shopAircraftClassic.addEventListener("click", () => buyOrEquipShopItem("aircraft-classic"));
shopAircraftDart.addEventListener("click", () => buyOrEquipShopItem("aircraft-dart"));
shopAircraftGlider.addEventListener("click", () => buyOrEquipShopItem("aircraft-glider"));
shopAircraftArrow.addEventListener("click", () => buyOrEquipShopItem("aircraft-arrow"));
shopAircraftComet.addEventListener("click", () => buyOrEquipShopItem("aircraft-comet"));
shopAircraftWisp.addEventListener("click", () => buyOrEquipShopItem("aircraft-wisp"));
shopAircraftDiamond.addEventListener("click", () => buyOrEquipShopItem("aircraft-diamond"));
shopAircraftHalo.addEventListener("click", () => buyOrEquipShopItem("aircraft-halo"));
shopAircraftPrism.addEventListener("click", () => buyOrEquipShopItem("aircraft-prism"));
shopTrailWhite.addEventListener("click", () => buyOrEquipShopItem("trail-white"));
shopTrailBlue.addEventListener("click", () => buyOrEquipShopItem("trail-blue"));
shopTrailPink.addEventListener("click", () => buyOrEquipShopItem("trail-pink"));
shopTrailPurple.addEventListener("click", () => buyOrEquipShopItem("trail-purple"));
shopTrailAurora.addEventListener("click", () => buyOrEquipShopItem("trail-aurora"));
shopTrailStardust.addEventListener("click", () => buyOrEquipShopItem("trail-stardust"));
shopTrailStars.addEventListener("click", () => buyOrEquipShopItem("trail-stars"));
shopTrailHearts.addEventListener("click", () => buyOrEquipShopItem("trail-hearts"));
shopTrailDiamonds.addEventListener("click", () => buyOrEquipShopItem("trail-diamonds"));
shopTrailRings.addEventListener("click", () => buyOrEquipShopItem("trail-rings"));
shopTrailSparks.addEventListener("click", () => buyOrEquipShopItem("trail-sparks"));
shopTrailPetals.addEventListener("click", () => buyOrEquipShopItem("trail-petals"));
for (const item of getShopItems().filter((entry) => entry.kind === "aircraft")) {
  item.button.addEventListener("pointerenter", () => showShopDescription(item));
  item.button.addEventListener("pointerleave", hideShopDescription);
  item.button.addEventListener("focus", () => showShopDescription(item));
  item.button.addEventListener("blur", hideShopDescription);
  item.button.addEventListener("click", () => showShopDescription(item));
}
splashScreen.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    dismissSplashScreen();
  }
});

screenShakeSetting.checked = state.screenShakeEnabled;
musicSetting.checked = state.musicEnabled;
sfxSetting.checked = state.sfxEnabled;
resize();
if (window.__ASCEND_TEST__) {
  render();
} else {
  returnToTitleScreen();
}
