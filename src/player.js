
window.shujaa = window.shujaa || {};

(function (){
    var Player;

    Player = function (game) {
        this._game = game;

        this.initMoverMixin(game, 10);

        game.on('!setDestination', this.onSetDestination.bind(this));
        this.on('!positionSet', this.onPositionSet.bind(this));
    };

    Player.prototype.onSetDestination = function (event, data) {
        this.setDestination(data.x, data.y);
    };

    Player.prototype.onPositionSet = function (event, data) {
        this._game.emit('!playerMoved', data);
    };

    jQuery.extend(Player.prototype, jQuery.eventEmitter);
    jQuery.extend(Player.prototype, window.shujaa.MoverMixin);

    window.shujaa.Player = Player;
})();
