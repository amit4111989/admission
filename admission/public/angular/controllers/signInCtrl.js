// (function() {
//     'use strict';

//     angular.module('ng.admission')
//         .controller('signInCtrl', ['$scope', '$modal', '$log'

//             function signInCtrl($scope, $modal, $log) {


//                 $scope.open = function() {

//                     var modalInstance = $modal.open({
//                         templateUrl: 'signIn.html',
//                         controller: 'signInCtrl',
//                         size: 'sm',
//                         resolve: {
//                             items: function() {
//                                 return $scope.items;
//                             }
//                         }
//                     });

//                     modalInstance.result.then(function(selectedItem) {
//                         $scope.selected = selectedItem;
//                     }, function() {
//                         $log.info('Modal dismissed at: ' + new Date());
//                     });
//                 };

//             }
//         ]);

// }());
