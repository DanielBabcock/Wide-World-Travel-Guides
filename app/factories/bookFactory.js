"use strict";

// again, registering this with the app
// giving it a name
// and passing a function, whose params are its dependencies.
app.factory("bookFactory", function($q, $http, FBCreds){

    // put our url in a var
    const url = FBCreds.databaseURL;

    // helper function to process the data from getMushrooms
    // into array of objects that we can pass back to the controller
    const makeArray = function(data){
        console.log("obj in makeArray: ", data);
        console.log("drilling down to ", data.data.guides);
    
        // push the value of each key into a new array
        return Object.keys(data.data).map(key => data.data[key]);
    };

    // use $http to make and xhr to get mushrooms.json
    // because this is async, we'll use $q to wrap call in a promise
    // that we can chain on
    // 
    const getBooks = function(){
        console.log("you called?: ");
        return $q((resolve, reject)=>{
            $http.get(`${url}/guides.json`)
                .then(data => resolve(makeArray(data)))
                .catch(error => reject(error));
        });
    };


    // return here is like module.exports in bowserify
    // if you want to use a mthod from here in you controller
    // you must return it
    return {getBooks};

});