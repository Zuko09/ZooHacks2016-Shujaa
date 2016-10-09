
window.shujaa = window.shujaa || {};

(function (){
    function Ranger (game, name, script) {
        this._game = game;
        this._name = name;

        this.initMoverMixin(game, 10, script);
    }

    jQuery.extend(Ranger.prototype, jQuery.eventEmitter);
    jQuery.extend(Ranger.prototype, window.shujaa.MoverMixin);

    window.shujaa.Ranger = Ranger;
})();
