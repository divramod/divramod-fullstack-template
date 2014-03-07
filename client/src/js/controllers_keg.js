angular.module('angular-client-side-auth')
    .controller('BahnenCtrl', ['$rootScope', '$scope', '$location', 'Bahnen', 'Auth', 'Crud',
    function($rootScope, $scope, $location, Entity, Auth, Crud) {
        console.log("Bahnen");
        $scope.entityName = "bahn";
        $scope.loading = true;
        $scope.userRoles = Auth.userRoles;
        $scope.title = "Anlegen einer neuen Bahn";
        console.log($location.path());

        $scope.updateEntity = function(id) {
            //console.log($location.path() + '/' + id);
            console.log("hello update" + id);
        }

        $scope.deleteEntity = function(id) {
            Crud.deleteEntity($scope.listEntity, $scope.entityName, id);
        }

        $scope.createEntity = function() {
            console.log("hello create");
        }

        $scope.listEntity = function() {
            Crud.getAll(function(res) {
                $scope.entities = res;
                $scope.loading = false;
            }, function(err) {
                $rootScope.error = "Failed to fetch Bahnen.";
                $scope.loading = false;
            }, $scope.entityName);
        }

        /**********[ on startup ]**********/
        $scope.listEntity();
    }
]);
