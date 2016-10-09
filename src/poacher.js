
window.shujaa = window.shujaa || {};

(function (){
    function Poacher (game, name, x, y) {
        this._game = game;
        this._name = name;

        this.initMoverMixin(game, 10);

        this.setPosition(x, y);
        this.setDestination(x, y);
    }

    jQuery.extend(Poacher.prototype, jQuery.eventEmitter);
    jQuery.extend(Poacher.prototype, window.shujaa.MoverMixin);

    window.shujaa.Poacher = Poacher;
})();
