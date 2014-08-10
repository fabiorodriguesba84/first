'use strict';

/**
 * @ngdoc overview
 * @name firstApp
 * @description
 * # firstApp
 *
 * Main module of the application.
 */
angular
  .module('firstApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl'
      })
      .when('/usuarios_ajax', {
        templateUrl: 'views/usuarios_ajax.html',
        controller: 'UsuariosAjaxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
