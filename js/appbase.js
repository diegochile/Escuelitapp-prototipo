var escuelitapp = angular.module("escuelitapp",['ngRoute'])


escuelitapp.config(['$routeProvider',
                    function($routeProvider){
                        $routeProvider.
                    
                        when('/Detalles',{
                            templateUrl:'partials/detalles.html',
                            controller: 'detalles'
                        }).
                        when('/nula',{
                            templateUrl:'partials/index.html',
                            //imagenNombre:'animal2.jpg'
                        }).
                        otherwise({
                            redirectTo: '/',
                            templateUrl:'partials/inicio.html',
                            controller: 'inicio'
                            });
                    }]);

escuelitapp.controller('prueba', ['$scope', function($scope) {
    
    $scope.escuelaID=  $routeParams.escuelaID
    

}]);

//controller:'prueba'
                        