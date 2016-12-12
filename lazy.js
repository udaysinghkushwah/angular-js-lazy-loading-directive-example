define(['angular', 'lazy-partials'], function (angular) {
  var appLazy = angular.module('app.lazy', ['app.lazy.partials']);

  appLazy.controller('lazyCtrl', function ($scope, $compile, $templateCache) {
    
  });
});