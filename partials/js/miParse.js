Parse.initialize("wCxAtie3514LsUqYtyn93WG4BoYoCqRzevStYEEC", "ALvgMhLwrQUABjYDmYX3d81VuI1SRc4X8UlS4MvO");

function mostrarElementos() {

    var PantallaPrincipal = Parse.Object.extend("Colegios");

    var query = new Parse.Query(PantallaPrincipal);
    
    query.ascending("NombreColegios");

    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {

                var object = results[i];

                var nombre = object.get('NombreColegios');
                var descripcion = object.get('Descripcion');
                var imagen = object.get('Imagen');
                var direccion = object.get('Direccion');

                var contenido = ""
                contenido += '<div class="col-md-3 col-xs-6">'
                ////contenido += '<div class="thumbnail">'
                contenido += '<br>'
                contenido += '<h5 align="center">' + nombre + '</h5>'
                contenido += '<a href="' + direccion +'"><img class="img-responsive center-block" src="' + imagen + '"">'
                contenido += '<br>'
                contenido += '<br>'
                contenido += '</div>'
                contenido += '</div>'
                contenido += '</div>'

                $('#contenedorGeneral').append(contenido)

            }

        },
        error: function() {

        }
    })
}
mostrarElementos()