(function (){
    'use strict';

    angular
        .module('app', ['ngComponentRouter'])
        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'app')
        .component('app', {
            templateUrl: 'app/app.tpl.html',
            controller: 'AppController',
            $routeConfig: [
                {path: '/main', name: 'Main', component: 'main', useAsDefault: true},
                {path: '/component1', name: 'Component1', component: 'component1' },
            ]
        });

})();