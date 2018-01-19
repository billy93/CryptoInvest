(function () {
    'use strict';

    angular
        .module('cryptoInvestApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
