
//* INYECCION DE DEPENDENCIAS
angular.module("MiprimerModulo", [])
    .controller("PrimerControlador", ["$scope", function (m) {
        m.nombre = "Luis silva";
        m.nuevoComentario = {};
        m.comentarios = [
            {
                comentario: "Buen comentario",
                usuario: "luissilva"
            },
            {
                comentario: "Buen comentario2",
                usuario: "luissilva2"
            }
        ];
        m.agregarComentario = function () {
            //Two way databing
            m.comentarios.push($scope.nuevoComentario);
            m.nuevoComentario = {};

            //para reiniciar el sistema de comentarios se agrega o siguiente:
        }
    }]);