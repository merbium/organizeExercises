var app = angular.module('organizeExercises', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "partials/exercises.html",controller: "exerciseCtrl"})

    .when("/upper", {templateUrl: "partials/exercises.html", controller: "exerciseCtrl"})

    .when("/lower", {templateUrl: "partials/exercises.html", controller: "exerciseCtrl"})

    .when("/core", {templateUrl: "partials/exercises.html", controller: "exerciseCtrl"})

    .when("/add", {templateUrl: "partials/addExercise.html", controller: "addNewCtrl"})

    .when("/edit", {templateUrl: "partials/edit.html", controller: "editCtrl"})

    .when("/diet", {templateUrl: "partials/diet.html", controller: "dietCtrl"});

    }]);