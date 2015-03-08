(function() {
    'use strict';

    angular.module('ng.admission')
        .controller('profileCtrl', ['$scope', '$modal', '$log'

            function profileCtrl($scope, $modal, $log) {

                $scope.userObj = [{
+                        user: 'Finn',
+                        tokens: 'over 9000',
+                        adsWatched: 'over 9000',
+                        topComment: 'Hack the planet!',
+                        email: 'whatis@n.email.com'
+                    },


                };

            }
        ]);

}());

