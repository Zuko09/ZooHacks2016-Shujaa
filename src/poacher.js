
window.shujaa = window.shujaa || {};

(function (){
    function Poacher (game, config) {
        this._game = game;
        this._name = config.name;
        if (config.imageUrl) {
            this._image = new Image();
            this._image.src = config.imageUrl;
        }

        this.initMoverMixin(game, 7, config.script);
    }

    jQuery.extend(Poacher.prototype, jQuery.eventEmitter);
    jQuery.extend(Poacher.prototype, window.shujaa.MoverMixin);

    window.shujaa.Poacher = Poacher;
})();
