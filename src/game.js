
window.shujaa = window.shujaa || {};

(function (){
    function Game(gameConfig) {
        this._gameConfig = gameConfig;

        this._minimap = new shujaa.MiniMap(this, this._gameConfig.minimapCanvasId, this._gameConfig.minimapUrl);
        this._bigmap = new shujaa.BigMap(this, this._gameConfig.bigmapCanvasId, this._gameConfig.bigmapUrl);
        this._player = null;
        this._rangers = [];
        this._animals = [];
        this._poachers = [];

        // map.png: a pixel is ~0.3 miles
        this.pixelsPerMile = 66 / 20;

        // boost speed to ridiculous levels: for realistic speed we would need a much more detailed map
        this.pixelsPerMile *= 500;
    }

    Game.prototype.start = function () {
        var count, i, item;

        this._startTime = performance.now();
        this._lastTime = 0;

        console.log('started');

        this._player = new window.shujaa.Player(this, this._gameConfig.player.name);

        count = this._gameConfig.rangers.length;
        for (i = 0; i < count; ++i) {
            item = this._gameConfig.rangers[i];
            this._rangers.push(new window.shujaa.Ranger(this, item.name, item.position[0], item.position[1]));
        }

        count = this._gameConfig.animals.length;
        for (i = 0; i < count; ++i) {
            item = this._gameConfig.animals[i];
            this._animals.push(new window.shujaa.Animal(this, item.name, item.position[0], item.position[1]));
        }

        count = this._gameConfig.poachers.length;
        for (i = 0; i < count; ++i) {
            item = this._gameConfig.poachers[i];
            this._poachers.push(new window.shujaa.Poacher(this, item.name, item.position[0], item.position[1]));
        }

        this._updateInterval = setInterval(this.update.bind(this), 1000 / 60);

        var initialPosition = this._gameConfig.player.position;
        this._player.setPosition(initialPosition[0], initialPosition[1]);
        this._player.setDestination(initialPosition[0], initialPosition[1]);

        this.emit('!start');
    };

    Game.prototype.update = function () {
        var now = performance.now() - this._startTime;
        var deltaTime = now - this._lastTime;
        this._lastTime = now;

        this.emit('!update', {now: now / 1000, deltaTime: deltaTime / 1000});
    };

    jQuery.extend(Game.prototype, jQuery.eventEmitter);

    window.shujaa.Game = Game;
})();
