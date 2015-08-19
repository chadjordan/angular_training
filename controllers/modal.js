(function(){
    
    'use srtict';
    
    angular
        .module('ModalModule', [])
    
        .controller('ModalController',function($scope, $modal, $log, $http){
            $scope.items = [];

            $scope.animationsEnabled = true;

            $scope.open = function (imageId) {
                $http.get('data/productgems.json').success(function(data){
                    $scope.items = data;
                    console.log(data);
                    var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    resolve: {
                    items: function () {
                      return $scope.items;
                    }
                  }
                });
            });
            };

        })
    
        .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

          $scope.items = items;


          $scope.close = function () {
            $modalInstance.close();
          };
        
        });

})();