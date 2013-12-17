'use strict';

(function(){
  goog.provide('erds_map_directive');

  var module = angular.module('erds_map_directive', []);

  module.directive('erdsMap',
    function(){
      return {
        restrict: 'A',
        scope: {
          map: '=erdsMapMap'
        },
        link: function(scope, element, attrs){
          var map = scope.map;
          map.setTarget(element[0]);
        }
      }
    }
  );
})();