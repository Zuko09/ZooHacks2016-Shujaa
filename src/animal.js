
window.shujaa = window.shujaa || {};

(function (){
    function Animal (game, name, x, y) {
        this._game = game;
        this._name = name;

        this.initMoverMixin(game, 10);

        this.setPosition(x, y);
        this.setDestination(x, y);
    }

    jQuery.extend(Animal.prototype, jQuery.eventEmitter);
    jQuery.extend(Animal.prototype, window.shujaa.MoverMixin);

    window.shujaa.Animal = Animal;
})();
