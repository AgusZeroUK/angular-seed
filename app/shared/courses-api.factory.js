angular
    .module('app')
    .factory('coursesApi', coursesApi);

function coursesApi($http){
    var factory;

    var apiUrl = 'https://angular-trainging.herokuapp.com/api/';

    factory = {
        getCourses: getCourses,
        getCourse: getCourse
    };

    return factory;

    //////////////////

    function getCourses(){
        return $http.get(apiUrl + 'courses');
    }

    function getCourse(id){
        return $http.get(apiUrl + 'courses/' + id);
    }
}