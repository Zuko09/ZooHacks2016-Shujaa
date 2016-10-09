
window.shujaa = window.shujaa || {};

(function (){
    var BigMap;

    BigMap = function (game, canvasId, mapUrl) {
        this.initMapMixin(game, mapUrl);

        this._game = game;
        this._canvas = $('#'+canvasId)[0];
        this._ctx = enhanceContext(this._canvas.getContext('2d'));

        this._zoom = 3;

        game.on('!start', this.onStart.bind(this));
        game.on('!update', this.onUpdate.bind(this));

        this._canvas.onclick = this.onClick.bind(this);
    };

    BigMap.prototype.onStart = function (event, data) {
    };

    BigMap.prototype.onUpdate = function (event, data) {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
        this.draw(this._ctx);
    };

    BigMap.prototype.onClick = function (mouseEvent) {
        console.log('bigmap onclick:', arguments);

        console.log('transform:',this._ctx.getTransform());

        this._game.emit('!setDestination', {x: data.x, y: data.y});
    };

    jQuery.extend(BigMap.prototype, window.shujaa.MapMixin);

    window.shujaa.BigMap = BigMap;
})();
