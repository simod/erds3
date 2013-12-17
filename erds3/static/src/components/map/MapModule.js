'use strict';
(function(){
  goog.provide('erds_map');

  goog.require('erds_map_service');
  goog.require('erds_map_directive');

  var module = angular.module('erds_map', [
    'erds_map_service',
    'erds_map_directive'
  ]);
})();