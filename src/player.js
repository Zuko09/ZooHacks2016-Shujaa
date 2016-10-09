
window.shujaa = window.shujaa || {};

(function (){
    var Player;

    Player = function (game) {
        this._game = game;
        this._x = 0;
        this._y = 0;

        game.on('!update', this.onUpdate.bind(this));
        game.on('!setDestination', this.onSetDestination.bind(this));
    };

    Player.prototype.onUpdate = function (event, data) {
    };

    Player.prototype.onSetDestination = function (event, data) {
        this.setPosition(data.x, data.y);
    };

    Player.prototype.setPosition = function (x, y) {
        this._x = x;
        this._y = y;
        this._game.emit('!playerMoved', {x: this._x, y: this._y});
    };

    window.shujaa.Player = Player;
})();
