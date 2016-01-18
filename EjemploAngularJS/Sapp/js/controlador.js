angular.module("MiprimerModulo", [])
    .controller("PrimerControlador", function ($scope) {
        $scope.nombre = "Luis silva";
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario: "Buen comentario",
                usuario: "luissilva"
            },
            {
                comentario: "Buen comentario2",
                usuario: "luissilva2"
            }
        ];
        $scope.agregarComentario = function () {
            //Two way databing
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
                
            //para reiniciar el sistema de comentarios se agrega o siguiente:
        }
    });



