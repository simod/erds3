'use strict';
(function(){
  goog.provide('erds_map_service');

  var module = angular.module('erds_map_service',[]);

  module.provider('erdsLayers', function(){

    this.$get = function($http, erdsSettings){

      var Layers = function(){
        var getJson = this.getJson = function() {
          console.log('in getJson');
          $http.get(erdsSettings.layers)
            .success(function(response){
              console.log(response);
          });
        }
      };
      return new Layers();
    };
  });

})();