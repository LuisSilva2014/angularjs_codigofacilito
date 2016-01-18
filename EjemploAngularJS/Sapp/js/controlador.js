
//* 9- To do List
var app = angular.module("MiprimerModulo", ["LocalStorageModule"])
.controller("PrimerControlador", function ($scope, localStorageService) {
    //primero verifamos si tenemos algon el el localstorege atraves de la clave angular-myToDoList
    if (localStorageService.get("angular-myToDoList")) {
        $scope.toDo = localStorageService.get("angular-myToDoList");
    }
    else{
        $scope.toDo = [];
    }
    //para hacer refactory del codigo es utilizando el metodo Watch
    $scope.$watchCollection('toDo',function(newValue,oldValue){
        localStorageService.set("angular-myToDoList",$scope.toDo)    ;
    });
    $scope.addActivity = function(){
        $scope.toDo.push($scope.newActivity);
        $scope.newActivity = {};

        //cada vez que se hace la modificacion de la lista se debe actulizar localStorageService

        //   localStorageService.set("angular-myToDoList",$scope.toDo); Al tener el wath nos ahorramos esta línea
        //angular-myToDoList es mi lista por hacer que va a ser buscada en el localstorage para agregar o mostrar listas de tareas. / angular-myToDoList is my list to do to be sought in the localStorage to add or display lists.
    }
    $scope.clean = function(){
        $scope.toDo = [];
        // localStorageService.set("angular-myToDoList",$scope.toDo); Al tener el wath nos ahorramos esta línea
    }    //Tambien se puede optimizar agregandolo en el html al boton que llama clean asi
    //<butto ng-click="toDo =[]">
});

