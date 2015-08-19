(function(){
    
    'use srtict';
    
    angular
        .module('storeDirectives', [])
    
    .directive("productSection", function() {
        return {
          restrict: "E",
          templateUrl: "views/product_section.html",
          controller: 'PanelController',
          controllerAs: "panel"
        };
      })

    .directive("productGallery", function() {
        return {
          restrict: "E",
          templateUrl: "views/product-gallery.html",
          controller: 'GalleryCtrl',
          controllerAs: "gallery"
        };
      })

})();

