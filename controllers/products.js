(function(){
    
    'use strict';
 
angular
    
    .module('storeCtrls', [])

    .controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];

        $http.get('data/productgems.json')
            .success(function(data){
                store.products = data;
            }); 
    }])
 
    .controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review= {};
        };
    })
    
    .controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;  
        };
    })
    
    .controller('GalleryCtrl', function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
    });
 
})(); 