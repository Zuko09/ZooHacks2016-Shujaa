
window.shujaa = window.shujaa || {};

(function (){
    var Player;

    Player = function (game, config) {
        this._game = game;

        if (config.imageUrl) {
            this._image = new Image();
            this._image.src = config.imageUrl;
        }

        this.initMoverMixin(game, 10, config.script);

        game.on('!setDestination', this.onSetDestination.bind(this));
        this.on('!positionSet', this.onPositionSet.bind(this));
    };

    Player.prototype.onSetDestination = function (event, data) {
        console.log('destination: [',data.x,', ', data.y,']');
        this.setDestination(data.x, data.y);
    };

    Player.prototype.onPositionSet = function (event, data) {
        this._game.emit('!playerMoved', data);
    };

    jQuery.extend(Player.prototype, jQuery.eventEmitter);
    jQuery.extend(Player.prototype, window.shujaa.MoverMixin);

    window.shujaa.Player = Player;
})();
