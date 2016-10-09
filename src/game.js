
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
            this._rangers.push(new window.shujaa.Ranger(this, item));
        }

        count = this._gameConfig.animals.length;
        for (i = 0; i < count; ++i) {
            item = this._gameConfig.animals[i];
            this._animals.push(new window.shujaa.Animal(this, item.name, item.position[0], item.position[1]));
        }

        count = this._gameConfig.poachers.length;
        for (i = 0; i < count; ++i) {
            item = this._gameConfig.poachers[i];
            this._poachers.push(new window.shujaa.Poacher(this, item));
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

        var interactionRange = 2;
        var animalIndex, poacherIndex;
        var animal, poacher;

        function distance(mover1, mover2) {
            var offset = [
                mover2._position[0] - mover1._position[0],
                mover2._position[1] - mover1._position[1],
            ];
            offset[0] *= offset[0];
            offset[1] *= offset[1];
            return Math.sqrt(offset[0] + offset[1]);
        }

        for (poacherIndex = 0; poacherIndex < this._poachers.length; ++poacherIndex) {
            poacher = this._poachers[poacherIndex];
            if (distance(this._player, poacher) <= interactionRange) {
                // TODO: you win
                poacher.dead = true;
                console.log('player caught poacher');
            }
        }

        this._poachers = this._poachers.filter(function(p) {return !p.dead});

        for (animalIndex = 0; animalIndex < this._animals.length; ++animalIndex) {
            animal = this._animals[animalIndex];
            for (poacherIndex = 0; poacherIndex < this._poachers.length; ++poacherIndex) {
                poacher = this._poachers[poacherIndex];
                if (distance(animal, poacher) < interactionRange) {
                    // TODO: you lose
                    animal.dead = true;
                    console.log('poacher caught animal');
                }
            }
        }

        this._animals = this._animals.filter(function(a) { return !a.dead; });
    };

    jQuery.extend(Game.prototype, jQuery.eventEmitter);

    window.shujaa.Game = Game;
})();
