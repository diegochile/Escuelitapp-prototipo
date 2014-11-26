escuelitapp.controller('prueba', function ($scope) {

Parse.initialize("wCxAtie3514LsUqYtyn93WG4BoYoCqRzevStYEEC", "ALvgMhLwrQUABjYDmYX3d81VuI1SRc4X8UlS4MvO");

$scope.listaCompleta = []


$scope.mostrarElementos = function() {

    var PantallaPrincipal = Parse.Object.extend("Categorias");

    var query = new Parse.Query(PantallaPrincipal);

    query.ascending("NombreCategoria");

    query.find({
        success: function (results) {

            for (var i = 0; i < results.length; i++) {

                var registroIndividual = {}

                var object = results[i];

                registroIndividual.nombre = object.get('NombreCategoria');
                registroIndividual.descripcion = object.get('Descripcion');
                registroIndividual.imagen = object.get('Imagen');
                registroIndividual.imagen2 = object.get('Imagen2');
                registroIndividual.direccion = object.get('Direccion');


                $scope.listaCompleta.push(registroIndividual);



            }

            $scope.$apply()
        },
        error: function () {

        }
    })

}


/// invoca parse
$scope.mostrarElementos()
})