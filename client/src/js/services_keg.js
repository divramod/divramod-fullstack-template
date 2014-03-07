angular.module('angular-client-side-auth')
    .factory('Crud', function($http) {
    return {
        getAll: function(success, error, entityName) {
            var url = '/api/' + entityName;
            $http.get(url).success(success).error(error);
        },

        deleteEntity: function(success, entityName, entityId) {
            var url = '/api/' + entityName + '/delete';
            $http({
                method: 'POST',
                url: url,
                data: {
                    id: entityId
                }
            }).success(success).error(function(error) {
                console.log(error);
            });
        }
    };
});

angular.module('angular-client-side-auth')
    .factory('Bahnen', function($http) {
    return {
        getAll: function(success, error) {
            $http.get('/api/bahn').success(success).error(error);
        }
    };
});
