
window.shujaa = window.shujaa || {};

(function (){
    var MiniMap;

    MiniMap = function (game, canvasId, mapUrl) {
        this.initMapMixin(game, mapUrl);

        this._game = game;
        this._canvas = $('#'+canvasId)[0];
        this._ctx = enhanceContext(this._canvas.getContext('2d'));

        this._zoom = 1;

        game.on('!start', this.onStart.bind(this));
        game.on('!update', this.onUpdate.bind(this));
    };

    MiniMap.prototype.onStart = function (event, data) {
    };

    MiniMap.prototype.onUpdate = function (event, data) {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
        this.draw(this._ctx);
    };

    jQuery.extend(MiniMap.prototype, window.shujaa.MapMixin);

    window.shujaa.MiniMap = MiniMap;
})();
