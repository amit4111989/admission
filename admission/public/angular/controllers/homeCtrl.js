(function() {
    'use strict';

    angular.module('ng.admission')
        .controller('homeCtrl', ['$scope', '$modal', '$log'

            function homeCtrl($scope, $modal, $log) {



                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };

            }
        ]);

}());

