"use strict";

// register the controller
// first param is name of controller
// we'll use this in app.js to bind 
//   this controller to a particular view
// 
// second param is an anonymous function whose 
//  arguments are this modules dependencies 
//  this is called 'injection' and it's what we 
//  were doing with 'require' in browserify
//  here we're injecting the factory by the name 
//  we give it when we register it. not the file name.
app.controller("bookCtrl", function($scope, bookFactory){

    // using mushroomFactory, gets the mushroom data
    // and binds it to $scope
    const showBooks = function(){
        bookFactory.getBooks()
            // bind the data to $scope as the property 'shrooms'
            // we can now refer to 'shrooms' in our template and angular 
            // knows it's an array of objects so we can ng-repeat over it. 
            .then(data => {
                console.log("got the data: ", data);
                $scope.books = data;
            })
            .catch(error => console.log(error));
    };

    showBooks();

});