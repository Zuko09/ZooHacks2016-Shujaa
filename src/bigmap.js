
window.shujaa = window.shujaa || {};

(function (){
    var BigMap;

    BigMap = function (game, canvasId, mapUrl) {
        this.initMapMixin(game, mapUrl, true, 2);

        this._game = game;
        this._canvas = $('#'+canvasId)[0];
        this._ctx = enhanceContext(this._canvas.getContext('2d'));

        this._zoom = 10;

        game.on('!start', this.onStart.bind(this));
        game.on('!update', this.onUpdate.bind(this));

        this._canvas.onclick = this.onClick.bind(this);
    };

    BigMap.prototype.onStart = function (event, data) {
    };

    BigMap.prototype.onUpdate = function (event, data) {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
        this.draw(this._ctx);
    };

    BigMap.prototype.onClick = function (mouseEvent) {
        var matrix = this._ctx.getTransform().inverse();

        var clickX = mouseEvent.x * matrix.a + mouseEvent.y * matrix.b + matrix.e;
        var clickY = mouseEvent.x * matrix.c + mouseEvent.y * matrix.d + matrix.f;

        this._game.emit('!setDestination', {x: clickX, y: clickY});
    };

    jQuery.extend(BigMap.prototype, window.shujaa.MapMixin);

    window.shujaa.BigMap = BigMap;
})();
