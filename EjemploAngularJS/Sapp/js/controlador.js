
//* 7- 8.- Curso AngularJS - AJAX con $http
angular.module("MiprimerModulo", [])
    .controller("PrimerControlador",function ($scope, $http) {
        $scope.publicaciones=[];
        $scope.newPost ={};

        $http.get("http://jsonplaceholder.typicode.com/posts")
            .success(function(data){
                console.log(data);
                $scope.publicaciones = data;

            }
            
            ).error (function(err){
            
            });

        $scope.addPost = function(){
            $http.post("http://jsonplaceholder.typicode.com/posts",{
                title:$scope.newPost.tite,
                body: $scope.newPost.body,
                userId: 1
            })
            .success(function(data, status, headers, config){
                console.log(data);
                $scope.publicaciones.push($scope.newPost);
                $scope.newPost ={};
            }        
            ).error (function(error, status, headers, config){
                console.log(error)
            });
        }
    });;