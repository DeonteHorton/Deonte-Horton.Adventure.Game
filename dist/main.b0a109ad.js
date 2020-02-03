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
})({"src/CST.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = {
  Scence: {
    Boot: 'Boot',
    Menu: 'Menu',
    Play: 'play',
    Loader: 'Loader',
    Gameover: 'gameover'
  },
  Audio: {
    Track: 'final_bell.mp3'
  },
  Image: {
    Menu: 'Menu.jpg',
    start: 'playB.png'
  }
};
},{}],"src/BootScene.ts":[function(require,module,exports) {
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
},{"./CST":"src/CST.ts"}],"src/MenuScene.ts":[function(require,module,exports) {
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
}); // menu scene

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

      var width = this.cameras.main.width;
      var height = this.cameras.main.height; //@ts-ignore

      var loadingText = this.make.text({
        x: width / 2,
        y: height * 0.20,
        text: 'Dungeon 0',
        style: {
          font: '64px monospace',
          fill: '#ffffff'
        }
      });
      loadingText.setOrigin(0.5, 0.5).setDepth(2);
      var playB = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "playB").setDepth(1);
      this.add.image(-200, -200, "Menu").setOrigin(0);
      playB.setInteractive();
      playB.on('pointerover', function () {
        playB.setScale(1.15);
      });
      playB.on('pointerout', function () {
        playB.setScale(1);
      });
      playB.on('pointerdown', function () {
        _this.scene.start(CST_1.CST.Scence.Loader); // this.sound.pauseOnBlur = false;
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
},{"./CST":"src/CST.ts"}],"src/charactersprite.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CharacterSprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(CharacterSprite, _Phaser$Physics$Arcad);

  function CharacterSprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, CharacterSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setImmovable(true);

    _this.hp = 50;
    _this.xpCap = 5;
    _this.maxHp = 100;
    _this.attack = 25;
    _this.xp = 0;
    _this.level = 1;
    _this.keys = 0;
    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.CharacterSprite = CharacterSprite;
},{}],"src/mini_boss.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Mini_bossSprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(Mini_bossSprite, _Phaser$Physics$Arcad);

  function Mini_bossSprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, Mini_bossSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mini_bossSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setImmovable(true);

    return _this;
  }

  return Mini_bossSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.Mini_bossSprite = Mini_bossSprite;
},{}],"src/minion.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MinionSprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(MinionSprite, _Phaser$Physics$Arcad);

  function MinionSprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, MinionSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MinionSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setImmovable(true);

    return _this;
  }

  return MinionSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.MinionSprite = MinionSprite;
},{}],"src/PlayScene.ts":[function(require,module,exports) {
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

var charactersprite_1 = require("./charactersprite");

var mini_boss_1 = require("./mini_boss");

var minion_1 = require("./minion");

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
      this.load.image('tiles', './assets/image/dungeon_sheet.png');
      this.load.image('mini-boss', './assets/sprites/miniboss.png');
      this.load.image('minion', './assets/sprites/minion.png');
      this.load.image('coin-xp', './assets/image/coins/real-coin.png');
      this.load.image('coin-damage', './assets/image/coins/fake-coin.png');
      this.load.tilemapTiledJSON('map', './assets/map/mappy.json');
      console.log(this.textures.list);
      this.anims.create({
        key: "left",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("hero", {
          start: 2,
          end: 3
        })
      });
      this.anims.create({
        key: "right",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("hero", {
          start: 4,
          end: 5
        })
      });
      this.anims.create({
        key: "netural",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("hero", {
          start: 0,
          end: 1
        })
      });
    }
  }, {
    key: "create",
    value: function create() {
      var map; //Adding map and tileset image for map

      map = this.add.tilemap('map');
      var tile = map.addTilesetImage('dungeon_sheet', 'tiles'); //Encase a bug occurs, anything thats moveable will collide with world boundary

      this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels); // tile layers

      var floor = map.createStaticLayer('floor', [tile], 0, 0).setDepth(0);
      var rocks = map.createStaticLayer('decorations', [tile], 0, 0).setDepth(2);
      var door = map.createStaticLayer('doors', [tile], 0, 0).setDepth(3);
      var wall = map.createStaticLayer('wall', [tile], 0, 0);
      var chest = map.createStaticLayer('gameover', [tile], 0, 0); // interactive objects

      var coins_buff = this.physics.add.group();
      var coins_debuff = this.physics.add.group();
      var good_coins = map.getObjectLayer('xp-coins')['objects'];
      good_coins.forEach(function (element) {
        var coin = coins_buff.create(element.x, element.y, 'coin-xp');
        coin.setScale(0.03);
        coin.setOrigin(0, 1);
      });
      var bad_coins = map.getObjectLayer('damage-coins')['objects'];
      bad_coins.forEach(function (element) {
        var coin = coins_debuff.create(element.x, element.y, 'coin-damage');
        coin.setScale(0.03);
        coin.setOrigin(0, 1);
      }); //@ts-ignore

      this.keyboard = this.input.keyboard.addKeys("W, A, S, D, SPACE");
      this.monsters = this.physics.add.group({
        immovable: true
      });

      for (var i = 0; i < 6; i++) {
        var x = Phaser.Math.FloatBetween(200, 800);
        var y = Phaser.Math.FloatBetween(200, 800);
        this.minion = new minion_1.MinionSprite(this, x, y, 'minion', 0).setScale(0.25);
        this.monsters.add(this.minion);
      }

      for (var _i = 0; _i < 3; _i++) {
        var _x = Phaser.Math.FloatBetween(200, 800);

        var _y = Phaser.Math.FloatBetween(200, 800);

        this.mini_boss = new mini_boss_1.Mini_bossSprite(this, _x, _y, 'mini-boss', 0).setScale(0.25);
        this.monsters.add(this.mini_boss);
      }

      this.player = new charactersprite_1.CharacterSprite(this, 440, 777, 'hero', 10).setScale(0.30); //@ts-ignore

      window.minion = this.minion; //@ts-ignore

      window.player = this.player; //@ts-ignore

      window.mini_boss = this.mini_boss; //camera thats set to player

      this.cameras.main.startFollow(this.player).setZoom(6.5); //collisions properties

      this.physics.world.addCollider(this.mini_boss, rocks);
      this.physics.world.addCollider(this.minion, rocks);
      this.physics.add.collider(this.player, rocks);
      this.physics.add.collider(this.player, wall);
      this.physics.world.addCollider(this.monsters.getChildren(), wall);
      this.physics.world.addCollider(this.monsters.getChildren(), rocks);
      this.physics.world.addCollider(this.player, this.monsters.getChildren(), damageOnCollide);
      this.physics.add.collider(this.player, door); //when player collides with  the chest. game ends and restart

      this.physics.add.collider(this.player, chest, function () {
        alert('YOU WIN!!');
        location.reload();
      });
      this.physics.add.overlap(this.player, coins_buff, collect_buff);
      this.physics.add.overlap(this.player, coins_debuff, collect_debuff);
      chest.setCollisionByProperty({
        collides: true
      });
      door.setCollisionByProperty({
        collides: true
      });
      rocks.setCollisionByProperty({
        collides: true
      });
      wall.setCollisionByProperty({
        collides: true
      }); // when player steps within distance of the tile, receives and alert
      //@ts-ignore

      wall.setTileLocationCallback(27, 49, 1, 1, function (player) {
        alert("Welcome Mighty Hero,You've entered a dungeon rumored to have treasure.Up ahead is where the treasure lies.You can see coins all over the dungeon,you decide to pick up a very shiny coin ,it heals you and you feel more powerful, you see another coin that is dull and decide to pick it up , it damages you and now you have ".concat(player.hp, ". You must be wary Hero.There are traps and monsters here for those that wishes to obtain the treasure")); //Allow to alert only once
        //@ts-ignore

        wall.setTileLocationCallback(27, 49, 1, 1, null);
      }); //@ts-ignore

      door.setTileLocationCallback(26, 9, 1.5, 1, function (player) {
        alert("Theres a chest on the other side, I need three keys, I only have ".concat(player.keys, ". I must collect coins to gain level and keys"));
      });
      chest.setTileLocationCallback(26, 1, 3, 3, function () {
        alert("The chest in within my reach!!"); //Allow to alert only once
        //@ts-ignore

        chest.setTileLocationCallback(26, 1, 3, 3, null);
      }); //@ts-ignore

      function damageOnCollide(player, enemy) {
        player.hp--;
        console.log("health:".concat(player.hp));

        if (player.hp === 0) {
          alert('You Died');
          location.reload();
        }
      } // How the player collect the coins to gain xp, health, and keys
      //@ts-ignore


      function collect_buff(player, coin) {
        coin.destroy(true);
        var num = 30;
        player.hp++;
        player.xp++;

        if (player.xp === player.xpCap) {
          num++;
          player.hp += num;
          player.level++;
          player.xpCap++;
          player.keys++;
          player.maxHp += num;
          player.xp = 0;
          alert("You have reached level:".concat(player.level, " and you're health cap is now ").concat(player.maxHp, ", current health ").concat(player.hp));
        }

        if (player.hp >= player.maxHp) {
          player.hp = player.maxHp;
        } // must reach level four to reach the chest and end the game


        if (player.keys === 3) {
          door.setCollisionByProperty({
            collides: true
          }, false); //@ts-ignore

          door.setTileLocationCallback(26, 9, 1.5, 1, null);
          alert("I have four keys now, I can open the door now!!");
        }

        console.log("health:".concat(player.hp, " xp:").concat(player.xp, " level:").concat(player.level));
      } // How the player takes damage from the fake coins
      //@ts-ignore


      function collect_debuff(player, coin) {
        player.hp--;
        console.log("health:".concat(player.hp));
        coin.destroy(true);

        if (player.hp <= 2) {
          alert("I can't take to many hits, I only have ".concat(player.hp, " health remaining"));
        }
      }
    } // Movement for player

  }, {
    key: "update",
    value: function update(time, delta) {
      // An example of how to  make more than one object move
      for (var i = 0; i < this.monsters.getChildren().length; i++) {
        this.physics.accelerateToObject(this.monsters.getChildren()[i], this.player);
      }

      if (this.keyboard.D.isDown) {
        this.player.setVelocityX(60);
      }

      if (this.keyboard.W.isDown) {
        this.player.setVelocityY(-60);
      }

      if (this.keyboard.S.isDown) {
        this.player.setVelocityY(60);
      }

      if (this.keyboard.A.isDown) {
        this.player.setVelocityX(-60);
      }

      if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
        //not moving on X axis
        this.player.setVelocityX(0);
      }

      if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
        //not pressing y movement
        this.player.setVelocityY(0);
      } // if (this.keyboard.SPACE.isDown) {
      //     var attack = this.add.image(this.player.x,this.player.y,'sword').setScale(0.5)
      //     this.physics.world.enableBody(attack); 
      //     this.physics.add.existing(attack)
      //     //@ts-ignore
      //     attack.body.velocity.y -= 250;
      // }
      // Animation for player


      if (this.player.body.velocity.x > 0) {
        //moving right
        this.player.play("right", true);
      } else if (this.player.body.velocity.x < 0) {
        //moving left
        this.player.play("left", true);
      } else if (this.player.body.velocity.y < 0) {
        //moving up
        this.player.play("netural", true);
      } else if (this.player.body.velocity.y > 0) {
        //moving down
        this.player.play("netural", true);
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"./CST":"src/CST.ts","./charactersprite":"src/charactersprite.ts","./mini_boss":"src/mini_boss.ts","./minion":"src/minion.ts"}],"src/Loader.ts":[function(require,module,exports) {
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

      for (var i = 0; i < 300; i++) {
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

        var controls = _this.make.text({
          x: width / 2,
          y: height / 2 + 150,
          text: 'Press A,W,D,S to move and avoid the monsters',
          style: {
            font: '48px monospace',
            fill: '#ffffff'
          }
        });

        controls.setOrigin(0.5, 0.5);
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
},{"./CST":"src/CST.ts"}],"src/gameover.ts":[function(require,module,exports) {
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

var Gameover =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Gameover, _Phaser$Scene);

  function Gameover() {
    _classCallCheck(this, Gameover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gameover).call(this, {
      key: CST_1.CST.Scence.Gameover
    }));
  }

  _createClass(Gameover, [{
    key: "preload",
    value: function preload() {
      var _this = this;

      this.scene.start(CST_1.CST.Scence.Gameover);
      var loadingBar = this.add.graphics();

      for (var i = 0; i < 150; i++) {
        this.load.spritesheet('hero' + i, './assets/sprites/hero.png', {
          frameWidth: 54,
          frameHeight: 54
        });
      }

      var width = this.cameras.main.width;
      var height = this.cameras.main.height; //@ts-ignore

      this.load.on("progress", function () {
        var loadingText = _this.make.text({
          x: width / 2,
          y: height / 2 - 50,
          text: 'GAME OVER',
          style: {
            font: '108px monospace',
            fill: '#ffffff'
          }
        });

        loadingText.setOrigin(0.5, 0.5);
      });
      this.load.on('complete', function () {
        loadingBar.destroy(true);
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(CST_1.CST.Scence.Menu);
    }
  }]);

  return Gameover;
}(Phaser.Scene);

exports.Gameover = Gameover;
},{"./CST":"src/CST.ts"}],"src/main.ts":[function(require,module,exports) {
"use strict";
/**@type {import("../type/phaser")} */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BootScene_1 = require("./BootScene");

var MenuScene_1 = require("./MenuScene");

var PlayScene_1 = require("./PlayScene");

var Loader_1 = require("./Loader");

var gameover_1 = require("./gameover"); //import { Scale } from 'phaser';


var game = new Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x252538,
  scene: [BootScene_1.BootScene, MenuScene_1.MenuScene, PlayScene_1.PlayScene, Loader_1.Loader, gameover_1.Gameover],
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
},{"./BootScene":"src/BootScene.ts","./MenuScene":"src/MenuScene.ts","./PlayScene":"src/PlayScene.ts","./Loader":"src/Loader.ts","./gameover":"src/gameover.ts"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49990" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map