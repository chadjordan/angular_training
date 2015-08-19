'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

angular
    .module('store', [
        'storeCtrls',
        'storeDirectives',
        'ModalModule',
    
        // angular dependencies
        'ngAnimate',
        'ui.bootstrap'
    ])


    .factory('MainTitle', function(){
       return{
            storeName: "Angular Js Gems Store"
       }; 
    })

    .controller('NavigationController', ['MainTitle', function(mainTitle){
        this.title = mainTitle.storeName;
        
        //navigation menu here...
    }]);