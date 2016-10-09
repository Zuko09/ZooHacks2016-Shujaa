
window.shujaa = window.shujaa || {};

(function (){
    function Ranger (game, config) {
        this._game = game;
        this._name = config.name;
        if (config.imageUrl) {
            this._image = new Image();
            this._image.src = config.imageUrl;
        }

        this.initMoverMixin(game, 10, config.script);
    }

    jQuery.extend(Ranger.prototype, jQuery.eventEmitter);
    jQuery.extend(Ranger.prototype, window.shujaa.MoverMixin);

    window.shujaa.Ranger = Ranger;
})();
