
window.shujaa = window.shujaa || {};

(function (){
    // host must also mix in jQuery.eventEmitter or equivalent
    window.shujaa.MoverMixin = {
        initMoverMixin: function(game, speedMph) {
            // pixels per second
            this._speed = speedMph / 60 / 60 * game.pixelsPerMile;
            this._position = this._position || [0,0];
            this._destination = this._destination || [0,0];

            game.on('!update', this.onUpdate.bind(this));
        },
        onUpdate: function (event, data) {
            var offset = [
                this._destination[0] - this._position[0],
                this._destination[1] - this._position[1]
            ];
            var distance = Math.sqrt(offset[0] * offset[0] + offset[1] * offset[1]);
            var travel = this._speed * data.deltaTime;
            if (distance > travel) {
                offset[0] *= travel / distance;
                offset[1] *= travel / distance;
                this.setPosition(this._position[0] + offset[0], this._position[1] + offset[1]);
            }
            else if (distance > 0) {
                this.setPosition(this._destination[0], this._destination[1]);
                this.emit('!arrived', {x: this._destination[0], y: this._destination[1]});
            }
        },
        setDestination: function (x, y) {
            this._destination[0] = x;
            this._destination[1] = y;
            this.emit('!destinationSet', {x: x, y: y});
        },
        setPosition: function (x, y) {
            this._position[0] = x;
            this._position[1] = y;
            this.emit('!positionSet', {x: x, y: y});
        }
};
})();
