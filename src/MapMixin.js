
window.shujaa = window.shujaa || {};

(function (){
    window.shujaa.MapMixin = {
        initMapMixin: function(game, mapUrl) {
            this._scrollX = 0;
            this._scrollY = 0;
            this._zoom = 3;

            this._mapReady = false;
            this._mapImage = new Image();
            this._mapImage.onload = this.onMapLoad.bind(this);
            this._mapImage.src = mapUrl;

            game.on('!playerMoved', this.onPlayerMove.bind(this));
        },
        onMapLoad: function(event) {
            console.log('onMapLoaded:',this._mapImage.src);
            this._mapReady = true;
            this._scrollX = this._mapImage.width / 2;
            this._scrollY = this._mapImage.height / 2;
        },
        draw: function(context2d) {
            if (!this._mapReady) {
                console.log('Draw before map ready!');
            }
            var canvasCenter = [
                context2d.canvas.width / 2,
                context2d.canvas.height / 2
            ];
            context2d.setTransform(1, 0, 0, 1, 0, 0);
            context2d.translate(canvasCenter[0], canvasCenter[1]);
            context2d.scale(this._zoom, this._zoom);
            context2d.translate(-this._scrollX, -this._scrollY);
            context2d.drawImage(this._mapImage, 0, 0, this._mapImage.width, this._mapImage.height);

            context2d.save();
            context2d.setTransform(1, 0, 0, 1, 0, 0);
            context2d.beginPath();
            context2d.moveTo(canvasCenter[0], 0);
            context2d.lineTo(canvasCenter[0], context2d.canvas.height);
            context2d.moveTo(0, canvasCenter[1]);
            context2d.lineTo(context2d.canvas.width, canvasCenter[1]);
            context2d.stroke();
            context2d.restore();
        },
        onPlayerMove: function (event, data) {
            this._scrollX = data.x;
            this._scrollY = data.y;
        }
    };
})();
