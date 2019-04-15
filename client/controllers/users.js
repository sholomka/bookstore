var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$window', function($scope, $http, $location, $routeParams, $rootScope, $window) {
    $scope.login = function() {
        $http.post('/users/login', $scope.user).then(
            function(response) {
                // $rootScope.user = response.data.user;



                // console.log(response.data.user);
                // console.log(JSON.stringify(response.data.user));

                $window.localStorage.setItem('user', JSON.stringify(response.data.user));


                console.log(JSON.parse($window.localStorage.getItem('user')));

                window.location.href = '#!/books';
            },
            function(response) {
                $rootScope.error = response.data.error.message;
            }
        )
    };


}]);