'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:TesteCtrl
 * @description
 * # TesteCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')
    .controller('TesteCtrl', function($scope) {
        $scope.descricao = "";
        $scope.naoTemQuantidadeMinimaDeCaractres = function() {
            return $scope.descricao.length < 10;
        }
    });
