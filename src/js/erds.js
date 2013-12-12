'use strict';
(function(){
    goog.provide('erds');

    goog.require('erds_map');

    goog.require('erds_map_controller');

    var module = angular.module('erds', [
        'erds_map',
        'erds_map_controller'
    ]);
})();