(function(){
    goog.provide('erds_main_controller');

    var module = angular.module('erds_main_controller', ['erds_map']);

    function createMap(){
        var projection = new ol.proj.EPSG3857();

        var map = new ol.Map({
            view: new ol.View2D({
                projection: projection,
                center:  ol.proj.transform([45, 17], 'EPSG:4326', 'EPSG:3857'),
                zoom: 4
            }),
            layers: [
              new ol.layer.Tile({
                source: new ol.source.MapQuestOpenAerial()
              })
            ],
            // renderer: ol.RendererHint.CANVAS,
            target: 'map'
        });
        console.log('map created');
        return map;
    };

    module.controller('ErdsMainController', 
        function($scope){
            $scope.map = createMap();
        });
})();