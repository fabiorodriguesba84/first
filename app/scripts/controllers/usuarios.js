'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')
    .controller('UsuariosCtrl', function($scope) {
        $scope.Usuarios = [{
            id: 1,
            nome: "Fabio"
        }, {
            id: 2,
            nome: "Salvador"
        }];

        $scope.enviar = function() {
            var novoUsuario = {
                id: $scope.id,
                nome: $scope.nome
            };
            $scope.Usuarios.push(novoUsuario)
        }


    });
