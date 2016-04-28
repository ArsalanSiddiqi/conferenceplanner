'use strict';

angular.module('conferencePlannerApp.auth', [
  'conferencePlannerApp.constants',
  'conferencePlannerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
