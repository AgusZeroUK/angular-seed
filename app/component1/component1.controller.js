(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1Controller', Component1Controller);

    function Component1Controller($timeout) {
        var vm = this;
        this.$routerOnActivate = function(next) {
            return $timeout(function(){
                console.log(next.params.greeting);
                vm.title = next.params.greeting || 'Welcome to Component 1';
            },1000);
        };
    }

})();

