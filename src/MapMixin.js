
window.shujaa = window.shujaa || {};

(function () {
    window.shujaa.MapMixin = {
        initMapMixin: function (game, mapUrl, blipRadius) {
            this._game = game;
            this._scrollX = 0;
            this._scrollY = 0;
            this._zoom = 3;
            this._blipRadius = blipRadius;

            this._mapReady = false;
            this._mapImage = new Image();
            this._mapImage.onload = this.onMapLoad.bind(this);
            this._mapImage.src = mapUrl;

            game.on('!playerMoved', this.onPlayerMove.bind(this));
        },
        onMapLoad: function (event) {
            console.log('onMapLoaded:', this._mapImage.src);
            this._mapReady = true;
            this._scrollX = this._mapImage.width / 2;
            this._scrollY = this._mapImage.height / 2;
        },
        _drawBlip: function (context2d, position, fill, highlight) {
            if (highlight) {
                context2d.fillStyle = 'orange';
                context2d.beginPath();
                this._ctx.arc(position[0], position[1], this._blipRadius * 1.5, 0, 2 * Math.PI);
                context2d.fill();
            }
            context2d.fillStyle = fill;
            context2d.beginPath();
            this._ctx.arc(position[0], position[1], this._blipRadius, 0, 2 * Math.PI);
            context2d.fill();
        },
        draw: function (context2d) {
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

            var i;
            var fill = {
                ranger: 'green',
                animal: 'blue',
                poacher: 'red',
            };

            for (i = 0; i < this._game._animals.length; ++i) {
                this._drawBlip(context2d, this._game._animals[i]._position, fill.animal);
            }

            for (i = 0; i < this._game._poachers.length; ++i) {
                this._drawBlip(context2d, this._game._poachers[i]._position, fill.poacher);
            }

            for (i = 0; i < this._game._rangers.length; ++i) {
                var ranger = this._game._rangers[i];
                if (ranger.isTalking) {
                    this._drawBlip(context2d, this._game._rangers[i]._position, fill.ranger, true);
                }
                this._drawBlip(context2d, this._game._rangers[i]._position, fill.ranger);
            }

            this._drawBlip(context2d, this._game._player._position, fill.ranger);
        },
        onPlayerMove: function (event, data) {
            this._scrollX = data.x;
            this._scrollY = data.y;
        }
    };
})();
