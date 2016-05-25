(function (){
    'use strict';

    angular
        .module('app', ['ngComponentRouter'])
        .config(function($locationProvider){
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'myApp')
        .component('myApp', {
            templateUrl: 'app/app.tpl.html',
            controller: 'AppController',
            $routeConfig: [
                {path: '/', name: 'CoursesList', component: 'coursesList', useAsDefault: true},
                {path: '/details', name: 'CourseDetails', component: 'courseDetails'}
            ]
        });

})();