(function() {
    'use strict';

    angular.module("myApp", [])
    .controller("myController", myController);

    myController.$inject = ['$scope', '$filter'];
    function myController($scope, $filter) {
        // ELEMENTS:
        //  Start View
        $scope.loadStartView = function() {
            $scope.showingStartView = true;
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
