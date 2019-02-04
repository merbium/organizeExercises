app.controller('exerciseCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $http.get('/exercises.json')
    .then(function(result){
        //use regex to remove / in path
        let type = $location.$$path.replace(/^\/|\/$/g, '');
        let typeExercise = [];
        //push type based on path
       result.data.forEach(function(exercise) {
           if (exercise.type === type) {
               typeExercise.push(exercise);
           } 
       });
       $scope.exercises = typeExercise;                
     });
}]);

app.controller('addNewCtrl', function($scope) {
    console.log("Need to hook into backend to save");
});


app.controller('dietCtrl', function($scope) {
    console.log("Page Coming Soon");
});

app.controller('editCtrl', ['$scope','$location', '$http', function($scope, $location, $http) {
    $http.get('/exercises.json')
    .then(function(result) {
        //get card id selected
        //find exercise by id
        //display exercise in form to be edited
        //on save update data
    });
}]);
