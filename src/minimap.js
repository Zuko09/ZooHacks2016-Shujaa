
window.shujaa = window.shujaa || {};

(function (){
    var MiniMap;

    MiniMap = function () {
        this._mapImage = null;
    };

    MiniMap.prototype.setMap = function (mapImage) {
        this._mapImage = mapImage;
    };

    window.shujaa.MiniMap = MiniMap;
})();
