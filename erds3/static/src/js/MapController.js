'use strict';
(function(){
  goog.provide('erds_map_controller');

  goog.require('erds_map');

  var module = angular.module('erds_map_controller', [
    'erds_map'
  ]);

  function createMap(){
    var projection = new ol.proj.EPSG3857();

    var map = new ol.Map({
      view: new ol.View2D({
        projection: projection,
        center:  ol.proj.transform([45, 17], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
      }),
      layers: [
        new ol.layer.Tile({
        source: new ol.source.MapQuestOpenAerial()
        })
      ],
      renderer: ol.RendererHint.CANVAS
    });
    return map;
  };

  module.controller('ErdsMapController', 
    function($scope, erdsLayers){
      $scope.map = createMap();
      erdsLayers.getJson();
    });
})();