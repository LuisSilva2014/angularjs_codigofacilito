
//* 10.- Curso AngularJS - Filters
var app = angular.module("MiprimerModulo", [])
    .filter("removeHtml", function () {
        return function (texto) {
            //Aca personalizamos nuestro filtro

            // lo que le estoy diciendo al replace es que los replace por '' (es decir vacio)
            return String(texto).replace(/<[^>]+>/gm,'');
        }
    })
    .controller("FiltroControlador", function ($scope) {
        $scope.mi_html = "<p>Hola mundo</p>";

        $scope.mi_json = {};
        $scope.mi_json.title = "hola"; // de esta fomra construyo un json de forma implicita
        $scope.mi_json.body = "hola mundo";

        $scope.costo = 34;
});

