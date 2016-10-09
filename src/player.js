
window.shujaa = window.shujaa || {};

(function (){
    var Player;

    Player = function (game) {
        this._game = game;
        this._position = [0,0];
        this._destination = [0,0];
        this._speed = 100; // map pixel per second

        game.on('!update', this.onUpdate.bind(this));
        game.on('!setDestination', this.onSetDestination.bind(this));
    };

    Player.prototype.onUpdate = function (event, data) {
        var offset = [
            this._destination[0] - this._position[0],
            this._destination[1] - this._position[1]
        ];
        var distance = Math.sqrt(offset[0] * offset[0] + offset[1] * offset[1]);
        var travel = this._speed * data.deltaTime;
        if (distance > travel) {
            offset[0] *= travel / distance;
            offset[1] *= travel / distance;
            this.setPosition(this._position[0] + offset[0], this._position[1] + offset[1]);
        }
        else if (distance > 0) {
            this.setPosition(this._destination[0], this._destination[1]);
        }
    };

    Player.prototype.onSetDestination = function (event, data) {
        this.setDestination(data.x, data.y);
    };

    Player.prototype.setDestination = function (x, y) {
        this._destination[0] = x;
        this._destination[1] = y;
    };

    Player.prototype.setPosition = function (x, y) {
        this._position[0] = x;
        this._position[1] = y;
        this._game.emit('!playerMoved', {x: this._position[0], y: this._position[1]});
    };

    window.shujaa.Player = Player;
})();
