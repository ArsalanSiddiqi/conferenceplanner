'use strict';

angular.module('conferencePlannerApp', [
  'conferencePlannerApp.auth',
  'conferencePlannerApp.admin',
  'conferencePlannerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
