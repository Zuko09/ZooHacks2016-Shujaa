
window.shujaa = window.shujaa || {};

(function (){
    function Game(gameConfig) {
        this._gameConfig = gameConfig;

        this._minimap = new shujaa.MiniMap(this, this._gameConfig.minimapCanvasId, this._gameConfig.minimapUrl);
        this._bigmap = new shujaa.BigMap(this, this._gameConfig.bigmapCanvasId, this._gameConfig.bigmapUrl);
        this._player = null;
        this._rangers = [];
        this._animals = [];

        // map.png: a pixel is ~0.3 miles
        this.pixelsPerMile = 66 / 20;

        // boost speed to ridiculous levels: for realistic speed we would need a much more detailed map
        this.pixelsPerMile *= 500;
    }

    Game.prototype.start = function () {

        this._startTime = performance.now();
        this._lastTime = 0;

        console.log('started');

        this._player = new window.shujaa.Player(this, this._gameConfig.playerName);

        var numRangers = this._gameConfig.rangerNames.length;
        for (var i = 0; i < numRangers; ++i) {
            this._rangers.push(new window.shujaa.Ranger(this, this._gameConfig.rangerNames[i]));
        }

        this._updateInterval = setInterval(this.update.bind(this), 1000 / 60);

        var initialPosition = [317,359];
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
