(function(){
  goog.provide('erds_layermanager_directive');

  goog.require('erds_map_service');

  var module = angular.module('erds_layermanager_directive',[
    'erds_map_service'
  ]);

  /*
  * Used to preserve the order in the layer list and on the map
  */
  module.filter('erdsReverse', function(){
    return function(items){
      return items.slice().reverse();
    };
  }),

  module.directive('erdsLayermanager',
    function(erdsLayers) {
      return {
        restrict: 'A',
        replace: true,
        scope: {
          map: '=erdsLayermanagerMap'
        },
        templateUrl: 'components/layermanager/templates/layermanager.html',
        link: function(scope, element, attrs){
          
        }
      }  
    }
  );

}):