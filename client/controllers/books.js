var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', '$window', '$rootScope', function($scope, $http, $location, $routeParams, $window, $rootScope) {

    $rootScope.user = JSON.parse($window.localStorage.getItem('user'));

    $scope.getBooks = function() {
        $http.get('/api/books').then(function(response) {
            $scope.books = response.data;


            console.log();

        });
    };

    $scope.getBook = function() {
        $http.get('/api/books/' + $routeParams.id).then(function(response) {
            $scope.book = response.data;
        })
    };

    $scope.addBook = function() {
        $http.post('/api/books/', $scope.book).then(function(response) {
            window.location.href = '#!/books';
        })
    };

    $scope.updateBook = function() {
        $http.put('/api/books/' + $routeParams.id, $scope.book).then(function(response) {
            window.location.href = '#!/books';
        })
    };

    $scope.removeBook = function(id) {
        $http.delete('/api/books/' + id).then(function(response) {
            window.location.href = '#!/books';
        })
    };


}]);