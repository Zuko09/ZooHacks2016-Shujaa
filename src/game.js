
window.shujaa = window.shujaa || {};

(function (){
    function Game(gameConfig) {
        this._mapUrl = gameConfig.mapUrl;

        this._mapReady = false;
        this._mapImage = new Image();
        this._mapImage.onload = this.onMapLoad.bind(this);
        this._mapImage.src = this._mapUrl;

        this._minimap = new shujaa.MiniMap(this);
        this._bigmap = new shujaa.BigMap(this);
    }

    Game.prototype.start = function () {

    };

    Game.prototype.update = function () {

    };

    Game.prototype.onMapLoad = function () {
        console.log('map loaded');
        this._mapReady = true;

        this._minimap.setMap(this._mapImage);
        this._bigmap.setMap(this._mapImage);
    };

    jQuery.extend(Game.prototype, jQuery.eventEmitter);

    window.shujaa.Game = Game;
})();
