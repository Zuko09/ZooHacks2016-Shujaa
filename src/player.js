
window.shujaa = window.shujaa || {};

(function (){
    var Player;

    Player = function (game) {
        this._game = game;

        game.on('!update', this.onUpdate.bind(this));
    };

    Player.prototype.onUpdate = function (event, data) {
        var t = data.now / 1000;
        this._x = 100 + 100 * Math.cos(t);
        this._y = 200 + 100 * Math.sin(t);
        this._game.emit('!playerMoved', {x: this._x, y: this._y});
    };

    window.shujaa.Player = Player;
})();
