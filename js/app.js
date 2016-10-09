$(function() {
    'use strict';

        // ELEMENTS:
        //  Start View
    var loadStartView = function() {
        $scope.showingStartView = true;
        $scope.showingMainView = false;
        $scope.showingChatlogView = false;
        $scope.showingMinimapView = false;
    var hideStartView = function() {
        $scope.loadMainView();
        $scope.loadChatlogView();
        $scope.loadMinimapView();
        $scope.showingStartView = false;
    };

    //  Main View
    var loadMainView = function() {
        $scope.showingMainView = true;
    };

    //  CHAT LOG View
    var loadChatlogView = function() {
        $scope.showingChatlogView = true;
    };

    //  Minimap View
    var loadMinimapView = function() {
        $scope.showingMinimapView = true;
    };
    }
});
