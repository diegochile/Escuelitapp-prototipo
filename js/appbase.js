var escuelitapp = angular.module("escuelitapp",['ngRoute'])


escuelitapp.config(['$routeProvider',
                    function($routeProvider){
                        $routeProvider.
                    
                        when('/detalles/LaFlorida',{
                            templateUrl:'/partials/detalles.html',
                            controller: 'detalles'
                        }).
                        when('/detalles/Boston',{
                            templateUrl:'partials/detalles2.html',
                            controller: 'detalles'
                        }).
                         when('/detalles/ColegioFamiliadeNazareth',{
                            templateUrl:'/partials/detalles3.html',
                            controller: 'detalles'
                        }).
                        when('/detalles/AndrewCarniege',{
                            templateUrl:'partials/detalles4.html',
                            controller: 'detalles'
                        }).
                         when('/detalles/ColegioSanDamian',{
                            templateUrl:'/partials/detalles5.html',
                            controller: 'detalles'
                        }).
                        when('/detalles/GardenSchool',{
                            templateUrl:'partials/detalles6.html',
                            controller: 'detalles'
                        }).
                         when('/detalles/IndiraGandhi',{
                            templateUrl:'/partials/detalles7.html',
                            controller: 'detalles'
                        }).
                        when('/detalles/SaintCharlesCollege',{
                            templateUrl:'partials/detalles8.html',
                            controller: 'detalles'
                        }).
                        when('/nula',{
                            templateUrl:'partials/index.html',
                            //imagenNombre:'animal2.jpg'
                        }).
                        otherwise({
                            redirectTo: '/portada',
                            templateUrl:'partials/inicio.html',
                            controller: 'iniio'
                            });
                    }]);

escuelitapp.controller('prueba', ['$scope', function($scope) {
    
    $scope.escuelaID=  $routeParams.escuelaID
    

}]);

//controller:'prueba'
                        