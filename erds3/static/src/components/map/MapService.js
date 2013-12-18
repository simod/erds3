'use strict';
(function(){
  goog.provide('erds_map_service');

  var module = angular.module('erds_map_service',[]);

  module.provider('erdsLayers', function(){

    this.$get = function($http, erdsSettings){

      var Layers = function(){
        var self = this;
        /*
        * Method loadLayers callable from controllers
        * to add layers to the map.
        * map: the ol map
        */
        this.loadLayers = function(map) {        
          $http.get(erdsSettings.layers)
            .success(function(response){
              self._addLayersToMap(response, map);
          });
        };
      
        /*
        * Private method that adds layers to the map
        * data: json layers structure.
        * map: the ol map
        */
        this._addLayersToMap = function(data, map){
          for(var key in data){
            if(data[key]['type'] === 'wms'){
              var layer = self._addWMSLayer(data[key]);
              map.addLayer(layer);
            }
          }
        };

        /*
        * Add a WSM layer to the map
        * data: json representatin of a layer
        */
        this._addWMSLayer = function(data){
          return new ol.layer.Tile({
            source: new ol.source.TileWMS({
              url: data['url'],
              params: {
                LAYERS: data['typename'],
                FORMAT: 'image/png',
                visibility: data['visibility'],
                srs: 'EPSG:900913'
              }
            })
          });
        };
      };
      return new Layers();
    };
  });

})();