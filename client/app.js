var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'UsersController',
            templateUrl: 'views/login.html'
        })
        .when('/books',{
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id',{
            controller: 'BooksController',
            templateUrl: 'views/book_details.html'
        })
        .when('/books/add',{
            controller: 'BooksController',
            templateUrl: 'views/add_book.html'
        })
        .when('/books/edit/:id',{
            controller: 'BooksController',
            templateUrl: 'views/edit_book.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

myApp.run(function($rootScope, $http, $window) {
    $rootScope.logout = function($event) {
        $event.preventDefault();
        $http.get('/users/logout').then(
            function(response) {
                if (response) {
                    $window.localStorage.removeItem('user');
                    $window.location.href = '/';
                }
            }
        )
    };
});