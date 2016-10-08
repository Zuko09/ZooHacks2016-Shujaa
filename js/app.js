(function() {
    'use strict';

    angular.module("shujaaApp", [])
    .controller("shujaaController", shujaaController);

    shujaaController.$inject = ['$scope', '$filter'];
    function shujaaController($scope, $filter) {
        // ELEMENTS:
        //  Start View
        $scope.loadStartView = function() {
            $scope.showingStartView = true;
            $scope.showingMainView = false;
            $scope.showingChatlogView = false;
            $scope.showingMinimapView = false;
        };
        $scope.hideStartView = function() {
            $scope.loadMainView();
            $scope.loadChatlogView();
            $scope.loadMinimapView();
            $scope.showingStartView = false;
        };
        //  Main View
        $scope.loadMainView = function() {
            $scope.showingMainView = true;
        };
        //  CHAT LOG View
        $scope.loadChatlogView = function() {
            $scope.showingChatlogView = true;
        };
        //  Minimap View
        $scope.loadMinimapView = function() {
            $scope.showingMinimapView = true;
        };
    }
})();
