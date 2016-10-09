window.shujaa = window.shujaa || {};

(function() {
    window.shujaa.gameConfig = {
        canvasId: 'game',
        bigmapUrl: 'images/map.png',
        bigmapCanvasId: 'bigMap',
        minimapUrl: 'images/map.png',
        minimapCanvasId: 'miniMap',
        player: {
            name: 'Desmond',
            imageUrl: 'images/player.png',
            script: [
                {time: 0, event: 'setPosition', dest: [308, 352]},
                {time: 0, event: 'setDestination', dest: [318, 352]},
                {time: 10, event: 'setDestination', dest: [325, 332]},
            ]
        },
        rangers: [{
            name: 'Aisha',
            imageUrl: 'images/aisha.png',
            script: [
                {time: 0, event: 'setPosition', dest: [308, 352]},
                {time: 0, event: 'setDestination', dest: [318, 352]},
                {time: 10, event: 'setDestination', dest: [325, 332]},
            ]
        }, {
            name: 'Kwesi',
            imageUrl: 'images/ranger_1.png',
            script: [
                {time: 0, event: 'setPosition', dest: [308, 352]},
                {time: 0, event: 'setDestination', dest: [318, 352]},
                {time: 10, event: 'setDestination', dest: [326, 332]},
            ]
        }, {
            name: 'Francis',
            imageUrl: 'images/ranger_3.png',
            script: [
                {time: 0, event: 'setPosition', dest: [308, 352]},
                {time: 0, event: 'setDestination', dest: [318, 352]},
                {time: 10, event: 'setDestination', dest: [323, 332]},
            ]
        }],
        poachers: [{
            name: 'poacher',
            imageUrl: 'images/poacher.png',
            script: [
                {time: 0, event: 'setPosition', dest: [297, 388]},
                {time: 0, event: 'setDestination', dest: [314, 384]},
                {time: 10, event: 'setDestination', dest: [314, 368]},
            ]
        }],
        animals: [{
            name: 'elephant',
            position: [322, 339]
        }, {
            name: 'elephant',
            position: [322, 359]
        }],
    };
})();
