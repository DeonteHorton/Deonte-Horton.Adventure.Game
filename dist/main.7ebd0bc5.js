// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/CST.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = {
  Scence: {
    Boot: 'Boot',
    Menu: 'Menu',
    Play: 'play',
    Loader: 'Loader'
  },
  Audio: {
    Track: 'final_bell.mp3'
  },
  Image: {
    Menu: 'Menu.jpg',
    start: 'playB.png'
  }
};
},{}],"js/BootScene.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("./CST");

var BootScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(BootScene, _Phaser$Scene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(BootScene).call(this, {
      key: CST_1.CST.Scence.Boot
    }));
  }

  _createClass(BootScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.load.image("Menu", "./assets/image/Menu.jpg");
      this.load.image("playB", "./assets/image/playB.png");
      this.load.audio('theme', './assets/audio/final_bell.mp3');
      this.load.atlas('knight', './assets/sprites/knight.png', './assets/sprites/knight_atlas.json'); // this.load.on('load', (File:Phaser.Loader.File) =>{
      //     console.log(File);
      // })
    }
  }, {
    key: "create",
    value: function create() {
      //@ts-ignore
      this.scene.start(CST_1.CST.Scence.Menu, "sent");
    }
  }]);

  return BootScene;
}(Phaser.Scene);

exports.BootScene = BootScene;
},{"./CST":"js/CST.ts"}],"js/MenuScene.ts":[function(require,module,exports) {
"use strict"; // menu scene

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("./CST");

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: CST_1.CST.Scence.Menu
    }));
  } //@ts-ignore


  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
      console.log('got');
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var playB = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "playB").setDepth(1);
      this.add.image(-200, -200, "Menu").setOrigin(0);
      playB.setInteractive();
      playB.on('pointerover', function () {
        playB.setScale(1.15);
      });
      playB.on('pointerout', function () {
        playB.setScale(1);
      });
      playB.on('pointerdown', function () {
        _this.scene.start(CST_1.CST.Scence.Loader); //this.sound.pauseOnBlur = false;
        // this.sound.play('theme',{
        //     loop:true,
        //     volume:0.45
        // })

      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"./CST":"js/CST.ts"}],"js/PlayScene.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("./CST");

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: CST_1.CST.Scence.Play
    }));
  }

  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      this.textures.addSpriteSheetFromAtlas("hero", {
        frameWidth: 50,
        frameHeight: 50,
        atlas: "knight",
        frame: "knight"
      });
      this.load.image('floor', './assets/image/dungeon_sheet.png'); // to load objects- must make a key

      this.load.spritesheet('items', './assets/image/dungeon_sheet.png', {
        frameWidth: 16,
        frameHeight: 16
      });
      this.load.tilemapTiledJSON('map', './assets/map/mappy.json');
      console.log(this.textures.list); // this.anims.create({
      //     key:"left",
      //     frameRate:10,
      //     frames:this.anims.generateFrameNumbers("hero",{
      //         start:2,
      //         end:3,
      //     })
      // })
      // this.anims.create({
      //     key:"right",
      //     frameRate:10,
      //     frames:this.anims.generateFrameNumbers("hero",{
      //         start:4,
      //         end:5
      //     })
      // })

      this.anims.create({
        key: "netural",
        frameRate: 5,
        frames: this.anims.generateFrameNumbers("hero", {
          start: 0,
          end: 1
        })
      });
    }
  }, {
    key: "create",
    value: function create() {
      var map = this.add.tilemap('map');
      var tile = map.addTilesetImage('dungeon_sheet', 'floor');
      var botlayer = map.createStaticLayer('floor', [tile], 0, 0).setDepth(-1);
      var midlayer = map.createStaticLayer('decorations', [tile], 0, 0);
      var toplayer = map.createStaticLayer('wall', [tile], 0, 0);
      var items = map.createFromObjects("object layer", 164, {
        key: 'floor'
      }).map;
      this.player = this.physics.add.sprite(425, 760, 'hero', 26).setScale(0.29); //@ts-ignore

      window.player = this.player; //camera

      this.cameras.main.startFollow(this.player).setZoom(3);
      this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels); //@ts-ignore

      this.keyboard = this.input.keyboard.addKeys("LEFT,RIGHT,UP,DOWN"); //Map collisions

      this.physics.add.collider(this.player, toplayer);
      toplayer.setCollisionByProperty({
        collides: true
      });
      toplayer.setCollision([0, 169, 217, 218, 219, 220, 1610612956, 1610612954, 1610612905, 2684354729, 2147483868, 2147483867, 2147483866, 2147483865, 3758096604, 3221225690, 3221225689, 3758096603, 3221225692, 3221225691, 536871132, 536871130]);
    } // movement
    //adding possible animations

  }, {
    key: "update",
    value: function update(time, delta) {
      if (this.keyboard.RIGHT.isDown === true) {
        this.player.setVelocityX(110); // this.player.play('right',true)

        this.player.play('netural', true);
      }

      if (this.keyboard.UP.isDown === true) {
        this.player.setVelocityY(-110);
        this.player.play('netural', true);
      }

      if (this.keyboard.DOWN.isDown === true) {
        this.player.setVelocityY(110);
        this.player.play('netural', true);
      }

      if (this.keyboard.LEFT.isDown === true) {
        this.player.setVelocityX(-110); //this.player.play('left',true)

        this.player.play('netural', true);
      }

      if (this.keyboard.LEFT.isUp && this.keyboard.RIGHT.isUp) {
        //not moving on X axis
        this.player.setVelocityX(0);
        this.player.play('netural', true);
      }

      if (this.keyboard.UP.isUp && this.keyboard.DOWN.isUp) {
        //not pressing y movement
        this.player.setVelocityY(0);
        this.player.play('netural', true);
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"./CST":"js/CST.ts"}],"js/Loader.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("./CST");

var Loader =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Loader, _Phaser$Scene);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, {
      key: CST_1.CST.Scence.Loader
    }));
  }

  _createClass(Loader, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xa60000
        }
      });

      for (var i = 0; i < 200; i++) {
        this.load.spritesheet('hero' + i, './assets/sprites/hero.png', {
          frameWidth: 54,
          frameHeight: 54
        });
      }

      var width = this.cameras.main.width;
      var height = this.cameras.main.height; //@ts-ignore

      this.load.on("progress", function (percent) {
        var loadingText = _this.make.text({
          x: width / 2,
          y: height / 2 - 50,
          text: 'Loading...',
          style: {
            font: '20px monospace',
            fill: '#ffffff'
          }
        });

        loadingText.setOrigin(0.5, 0.5);
        loadingBar.fillRect(0, _this.game.renderer.height / 2 + 50, _this.game.renderer.width * percent, 50);
      });
      var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5); //@ts-ignore

      this.load.on('progress', function (value) {
        //@ts-ignore
        percentText.setText(parseInt(value * 100) + '%');
      });
      this.load.on('complete', function () {
        loadingBar.destroy();
        percentText.destroy();
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(CST_1.CST.Scence.Play);
    }
  }]);

  return Loader;
}(Phaser.Scene);

exports.Loader = Loader;
},{"./CST":"js/CST.ts"}],"js/main.ts":[function(require,module,exports) {
"use strict";
/**@type {import("../type/phaser")} */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BootScene_1 = require("./BootScene");

var MenuScene_1 = require("./MenuScene");

var PlayScene_1 = require("./PlayScene");

var Loader_1 = require("./Loader"); //import { Scale } from 'phaser';


var game = new Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x252538,
  scene: [BootScene_1.BootScene, MenuScene_1.MenuScene, PlayScene_1.PlayScene, Loader_1.Loader],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./BootScene":"js/BootScene.ts","./MenuScene":"js/MenuScene.ts","./PlayScene":"js/PlayScene.ts","./Loader":"js/Loader.ts"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49992" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.ts"], null)
//# sourceMappingURL=/main.7ebd0bc5.js.map