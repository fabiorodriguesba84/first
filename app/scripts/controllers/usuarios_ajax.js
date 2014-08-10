'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:UsuariosAjaxCtrl
 * @description
 * # UsuariosAjaxCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')


//Ajax para carregar o usuarios.json
.controller('UsuariosAjaxCtrl', function($scope, $http) {

    var pageRecords = 3;
    var qtdPages = 0;

    $scope.UsuariosAjax = [];
    $scope.pages = new Array();
    $scope.form = "insert";
    //assinatura do ajax
    $http({
        method: 'GET',
        url: 'usuarios.json'
    })
        .success(function(data, status, headers, config) {
            //recuperação de dados bem sucedida

            // Calcular e preecher as páginas
            var total = data.Usuarios.length;
            qtdPages = Math.ceil(total/pageRecords); //.ceil é para arredondar qtd pra o inteiro superior
            for (var i = 1; i <= qtdPages; i++) {
                $scope.pages.push(i);
            }

            $scope.UsuariosAjax = data.Usuarios;
            $scope.paginate(1);
        })
        .error(function(data, status, headers, config) {
            //alguma erro ocorreu :(
        });

    $scope.insert = function() {
        var novoUsuario = {
            id: $scope.id,
            nome: $scope.nome
        };
        //push insere item
        $scope.Usuarios.push(novoUsuario)
        $scope.cancel();
    }
    $scope.update = function() {
        $scope.Usuarios[$scope.index].nome = $scope.nome;
        $scope.Usuarios[$scope.index].id = $scope.id;
        $scope.cancel();
    }
    $scope.cancel = function() {
        $scope.index = "";
        $scope.form = "insert";
        $scope.id = "";
        $scope.nome = "";
    };


    $scope.delete = function(index) {
        //splice remove item
        $scope.Usuarios.splice(index, 1);
    }
    $scope.edit = function(index) {
        $scope.index = index;
        $scope.form = "update";
        $scope.id = $scope.Usuarios[index].id;
        $scope.nome = $scope.Usuarios[index].nome;
    };


    $scope.paginate = function (page) {
        var coeficiente = ((page-1)*pageRecords);
        $scope.Usuarios = $scope.UsuariosAjax.slice(coeficiente,coeficiente+pageRecords);
    }

});