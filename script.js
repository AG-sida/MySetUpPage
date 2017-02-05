angular.module("setUpApp", ["firebase"]).controller(
    "tech", ["$scope", "$firebase", function($scope, $firebase){
       var ref= new Firebase("https://arttech-60c60.firebaseio.com/");

        $scope.comments=$firebase(ref)

    }]
)

var setUpApp = angular.module('setUpApp', ['ngRoute']);

setUpApp.config(function($routeProvider){
  $routeProvider
  //route for homepage
  .when('/',{
            templateUrl : 'views/start.html',
            controller : 'startController'
        })

        // route for the tech page
        .when('/tech',{
            templateUrl : 'views/tech.html ',
            controller :'techController'
        })
        .when('/art',{
          templateUrl:'views/art.html',
          controller:'artController'
        })
        .when('/socialmedia',{
          templateUrl:'views/socialmedia.html',
          controller:'socialmediaController'
        })
});
        // create the controller and inject Angular's $scope
setUpApp.controller('startController', function($scope) {

    $scope.name="START";

    // create a message to display in our view
    $scope.message = 'Welcome Start';
});

setUpApp.controller('artController', function($scope) {

    $scope.name="Art";

    // create a message to display in our view
    $scope.message = 'Welcome To art art art';
});



setUpApp.controller('techController', function($scope,$http) {
    $scope.name="Tech";

    $scope.message = 'tech tech techController';
    $http.get("colorsArray.json")
        .success(function (response) {
            $scope.names = response.colorsArray;
        });


        setUpApp.controller('socialmediaController', function($scope) {

            $scope.name="socialmedia";

            // create a message to display in our view
            $scope.message = 'Welcome socialmedia';
        });
});
