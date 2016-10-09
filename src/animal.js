
window.shujaa = window.shujaa || {};

(function (){
    function Animal (game, name, x, y) {
        this._game = game;
        this._name = name;
        this._initialPosition = [x,y];

        this.initMoverMixin(game, 3);

        this.setPosition(x, y);

        this.onArrived();

        this.on('!arrived', this.onArrived.bind(this));
    }

    Animal.prototype.onArrived = function() {
        var range = 20;
        this.setDestination(
            this._initialPosition[0] + Math.random() * range - range / 2,
            this._initialPosition[1] + Math.random() * range - range / 2);
    };

    jQuery.extend(Animal.prototype, jQuery.eventEmitter);
    jQuery.extend(Animal.prototype, window.shujaa.MoverMixin);

    window.shujaa.Animal = Animal;
})();
