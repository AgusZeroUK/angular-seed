angular
    .module('app')
    .factory('coursesApi', coursesApi);

function coursesApi($http){
    var factory;

    var apiUrl = 'https://angular-trainging.herokuapp.com/api/';

    factory = {
        getCourses: getCourses,
        getCourse: getCourse,
        login: login
    };

    return factory;

    //////////////////

    function getCourses(){
        return $http.get(apiUrl + 'courses');
    }

    function getCourse(id){
        return $http.get(apiUrl + 'courses/' + id);
    }

    function login(email, password){
        return $http.post(apiUrl + 'login',
            {
                email: email,
                password: password
            }
        )
    }
}