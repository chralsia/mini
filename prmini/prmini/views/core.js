var phonebook = angular.module('phonebook', []);

phonebook.factory('Service', [function () {
    return function () {
        return prompt('What is you name');
    }
}]);

phonebook.controller('mainController', ['$scope', '$http', 'Service', mainController])

function mainController($scope, $http, Service) {
    $scope.formData = {};
    $http.get('/book')
        .success(function(data) {
            $scope.notes = data;
            $scope.name = Service();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createNote = function() {
        $http.post('/book', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.notes = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteNote = function(id) {
        $http.delete('/book/' + id)
            .success(function(data) {
                $scope.notes = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}