(function(){
    goog.provide('erds');

    goog.require('erds_map');

    goog.require('erds_main_controller');

    var module = angular.module('erds', [
        'erds_map',
        'erds_main_controller'
    ]);
})();