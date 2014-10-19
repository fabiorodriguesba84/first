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
            $scope.Usuarios = data.Usuarios;
            qtdPages = Math.ceil(total/pageRecords); //.ceil é para arredondar qtd pra o inteiro superior
            for (var i = 1; i <= qtdPages; i++) {
                $scope.pages.push(i);
            }

            $scope.Usuarios = data.Usuarios;
            $scope.UsuariosAjax = $scope.Usuarios;
            /*$scope.UsuariosTemp = data.Usuarios;*/
            $scope.paginate(1);
            /*console.log($scope.UsuariosTemp);*/
        })
        .error(function(data, status, headers, config) {
            //algum erro ocorreu :(
        });

    $scope.insert = function() {
        var novoUsuario = {
            id: $scope.id,
            nome: $scope.nome,
            data: $scope.data,
            status: $scope.status
        };
        //push insere item na variavel de escopo
        $scope.Usuarios.push(novoUsuario);
        $scope.paginate(1);
        $scope.cancel();
    }
    $scope.update = function() {
        $scope.Usuarios[$scope.index].data = $scope.data;
        $scope.Usuarios[$scope.index].nome = $scope.nome;
        $scope.Usuarios[$scope.index].id = $scope.id;
        $scope.Usuarios[$scope.index].status = $scope.status;
        $scope.cancel();
    }
    $scope.cancel = function() {
        $scope.index = "";
        $scope.form = "insert";
        $scope.id = "";
        $scope.nome = "";
        $scope.data = "";
        $scope.status = "";
        $scope.btnReset();
        
    };


    $scope.delete = function(index) {
        //splice remove item
        $scope.Usuarios.splice(index, 1);
        $scope.cancel();
    }

    $scope.edit = function(index) {

        $scope.index = index;
        $scope.form = "update";
        $scope.id = $scope.Usuarios[index].id;
        $scope.nome = $scope.Usuarios[index].nome;
        $scope.data = $scope.Usuarios[index].data;
        $scope.status = $scope.Usuarios[index].status;

        $scope.btnReset();

        switch ($scope.status){
        case "Ativo":
            $scope.btnAtivo = "btn btn-success";        
            $scope.btnInativo = "btn btn-default";    
        break;
        case "Inativo":
            $scope.btnAtivo = "btn btn-default";
            $scope.btnInativo = "btn btn-danger";    
        break;
        }

    };


    $scope.paginate = function (page) {
        var coeficiente = ((page-1)*pageRecords);

        $scope.Usuarios = $scope.UsuariosAjax.slice(coeficiente,coeficiente+pageRecords);
        $scope.cancel();
    }


    $scope.btnReset = function() {
        $scope.btnAtivo = "btn btn-default";        
        $scope.btnInativo = "btn btn-default";         
    }

    $scope.setAtivo = function (index){
        $scope.status = "Ativo";
        $scope.btnAtivo = "btn btn-success";
        $scope.btnInativo = "btn btn-default";
        
    }
    $scope.setInativo = function (index){
        $scope.status = "Inativo";
        $scope.btnAtivo = "btn btn-default";
        $scope.btnInativo = "btn btn-danger";
        
    }



});