
window.shujaa = window.shujaa || {};

(function (){
    var Shujaa;

    Shujaa = function (gameConfig) {
        var instance = this;

        instance._mapUrl = gameConfig.mapUrl;

        instance._mapReady = false;
        instance._mapImage = new Image();
        instance._mapImage.onload = function () {
            console.log('map loaded');
            instance._mapReady = true;
        };
        instance._mapImage.src = instance._mapUrl;
    };

    Shujaa.prototype.start = function () {

    };

    Shujaa.prototype.update = function () {

    };

    window.shujaa.Shujaa = Shujaa;
})();
