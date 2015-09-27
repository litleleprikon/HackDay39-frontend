'use strict';

/* App Module */

    var doToApp = angular.module('doToApp', [
      'ngRoute'
    ]);

doToApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'partials/main.html',
                controller: 'mainCtrl'
            }).
            when('/activities', {
                templateUrl: 'partials/activities.html',
                controller: 'activitiesCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);


    doToApp.controller('mainCtrl',function($scope,$http) {
        $scope.user={};
        $scope.login = function() {
                $http.post( 'http://doto.work/api/auth/', $scope.user ).success(function(){
                    closeLogin();
                    window.location.href='?#/activities';
                }).error(function(){
                    alert("Incorrect login/password");
                });
            }
        $scope.register = function() {
            $http.post( 'http://doto.work/api/auth/user/', $scope.user ).success(function(){
                alert("You've been registered");
            });
        }
        $scope.logout = function() {
            $http.delete('http://doto.work/api/auth/user/').success (function () {
                document.cookie="";
            });
        }
    });

doToApp.controller('activitiesCtrl', function ($scope, $http) {
    $http.get('http://doto.work/api/todo/activities').success(function (data) {
        $scope.activities = data;
    });
    $scope.addGame = function() {
        $http.post( 'http://doto.work/api/todo/links/', $scope.user ).success(function(){
            alert("Game added!");
        });
    }
    $scope.addLink = function() {
        $http.post( 'http://doto.work/api/todo/games/', $scope.user ).success(function(){
            alert("Link added!");
        });
    }
    //$http.get('http://doto.work/api/gifts/').success(function (data) {
    //    $scope.gifts = data;
    //});
});