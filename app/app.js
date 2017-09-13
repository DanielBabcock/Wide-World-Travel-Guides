"use strict";

// registering the app
// first param is the name of the app
// second param is array for projects dependencies 
const app = angular.module("books", ["ngRoute"]);

app.config($routeProvider => {

    // .when is method on routeProvider that takes the current 
    // url (in the browser) as a string and a second param, 
    // which is a object specifying which template to display 
    // and which controller to instantiate
    $routeProvider
        .when('/', {
            templateUrl: 'partials/books.html',
            controller: 'bookCtrl'
        })
        // whenever the URL does not correspond to any of 
        // these pre-configured paths default to the home page.
        .otherwise('/');

});